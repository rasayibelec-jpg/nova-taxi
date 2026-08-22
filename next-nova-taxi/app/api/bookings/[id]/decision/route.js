import { NextResponse } from "next/server";
import { getBookingsCollection } from "@/lib/mongodb";
import { createHmac, timingSafeEqual } from "crypto";
import { isWhatsAppApiConfigured, sendCustomerMessage } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function verifyToken(bookingId, token) {
  const secret = process.env.DRIVER_CONFIRM_SECRET || "dev-secret";
  const expected = createHmac("sha256", secret).update(bookingId).digest("hex").slice(0, 24);
  if (!token || token.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(token));
}

function normalizePhoneForWaLink(raw) {
  const digits = String(raw || "").replace(/\D/g, "");
  if (!digits) return "";
  return digits.startsWith("0") ? "41" + digits.substring(1) : digits;
}

function buildCustomerMessage(doc, action) {
  const shortId = String(doc.id).substring(0, 8).toUpperCase();
  const whenText =
    doc.whenType === "scheduled" && doc.scheduledAt
      ? new Date(doc.scheduledAt).toLocaleString("de-CH", {
          dateStyle: "short",
          timeStyle: "short",
        })
      : "sofort";
  const priceText = doc.priceCHF != null ? `CHF ${Number(doc.priceCHF).toFixed(2)}` : "gemäss Taxameter";

  if (action === "accept") {
    return (
      `Nova Taxi – Bestellung #${shortId} BESTÄTIGT ✅\n` +
      `Ihr Taxi kommt!\n\n` +
      `Abholung: ${doc.pickupAddress} (${whenText})\n` +
      `Ziel: ${doc.destinationAddress}\n` +
      `Personen: ${doc.persons}\n` +
      `Fahrpreis: ${priceText}\n\n` +
      `Bei Fragen: 076 611 31 31`
    );
  }
  return (
    `Nova Taxi – Bestellung #${shortId}\n` +
    `Ihre Bestellung konnte leider nicht angenommen werden. Wir bitten um Verständnis.\n\n` +
    `Für Alternativen erreichen Sie uns unter 076 611 31 31.`
  );
}

// Driver taps a button on the /bestellung/[id]/bestaetigen page → POST here with { action }.
// Token auth via ?token=… (HMAC of booking id).
export async function POST(req, { params }) {
  try {
    const { id } = await params;
    const url = new URL(req.url);
    const token = url.searchParams.get("token") || "";
    if (!verifyToken(id, token)) {
      return NextResponse.json({ error: "invalid_token" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const action = body?.action;
    if (!["accept", "reject"].includes(action)) {
      return NextResponse.json({ error: "invalid_action" }, { status: 400 });
    }

    const col = await getBookingsCollection();
    const doc = await col.findOne({ id });
    if (!doc) return NextResponse.json({ error: "not_found" }, { status: 404 });

    if (doc.status === "confirmed" || doc.status === "rejected") {
      return NextResponse.json(
        { id: doc.id, status: doc.status, alreadyProcessed: true },
        { status: 200 }
      );
    }

    const nextStatus = action === "accept" ? "confirmed" : "rejected";
    const nowIso = new Date().toISOString();
    const message = buildCustomerMessage(doc, action);

    let delivery = { attempted: false, ok: false };
    if (isWhatsAppApiConfigured()) {
      delivery.attempted = true;
      try {
        const templateName = process.env.WHATSAPP_TEMPLATE_NAME || null;
        const templateLang = process.env.WHATSAPP_TEMPLATE_LANGUAGE || "de";
        const fallback =
          templateName != null
            ? { name: templateName, language: templateLang, params: [message] }
            : null;
        const result = await sendCustomerMessage(doc.customerPhone, message, fallback);
        delivery = {
          attempted: true,
          ok: true,
          mode: result.mode,
          wamid: result.wamid,
        };
      } catch (err) {
        console.error("[bookings/decision] whatsapp send failed", err?.metaError || err?.message);
        delivery = {
          attempted: true,
          ok: false,
          error: err?.metaError?.message || String(err?.message || err),
          errorCode: err?.metaErrorCode ?? null,
        };
      }
    }

    const update =
      action === "accept"
        ? { $set: { status: nextStatus, confirmedAt: nowIso, decidedAt: nowIso, delivery } }
        : { $set: { status: nextStatus, rejectedAt: nowIso, decidedAt: nowIso, delivery } };
    await col.updateOne({ id }, update);

    const waPhone = normalizePhoneForWaLink(doc.customerPhone);
    const customerWhatsappUrl = waPhone
      ? `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`
      : null;

    return NextResponse.json({
      id: doc.id,
      status: nextStatus,
      delivery,
      customerWhatsappUrl,
    });
  } catch (err) {
    console.error("[bookings/decision]", err);
    return NextResponse.json(
      { error: "internal", detail: String(err?.message || err) },
      { status: 500 }
    );
  }
}
