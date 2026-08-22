import { NextResponse } from "next/server";
import { getBookingsCollection } from "@/lib/mongodb";
import { isWhatsAppApiConfigured, sendCustomerMessage } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function isAuthorized(req) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) return false;
  const auth = req.headers.get("x-admin-key") || "";
  return auth && auth === expected;
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
  const priceText =
    doc.priceCHF != null ? `CHF ${Number(doc.priceCHF).toFixed(2)}` : "gemäss Taxameter";

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

export async function POST(req, { params }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const action = body?.action;
    if (!["accept", "reject"].includes(action)) {
      return NextResponse.json({ error: "invalid_action" }, { status: 400 });
    }

    const col = await getBookingsCollection();
    const doc = await col.findOne({ id });
    if (!doc) return NextResponse.json({ error: "not_found" }, { status: 404 });

    // Idempotent: never process an already-decided booking twice
    if (doc.status === "confirmed" || doc.status === "rejected") {
      return NextResponse.json(
        { error: "already_processed", status: doc.status, alreadyProcessed: true },
        { status: 409 }
      );
    }

    const nextStatus = action === "accept" ? "confirmed" : "rejected";
    const nowIso = new Date().toISOString();
    const message = buildCustomerMessage(doc, action);

    // Attempt to auto-send via WhatsApp Cloud API BEFORE marking the booking,
    // so a delivery failure doesn't leave the customer in the dark.
    let delivery = { attempted: false, ok: false };
    if (isWhatsAppApiConfigured()) {
      delivery.attempted = true;
      try {
        const templateName = process.env.WHATSAPP_TEMPLATE_NAME || null;
        const templateLang = process.env.WHATSAPP_TEMPLATE_LANGUAGE || "de";
        // Template fallback (in case 24h window has closed).
        // Template must be approved in WhatsApp Manager with 1 body parameter
        // matching the freeform message. If you don't have one, leave
        // WHATSAPP_TEMPLATE_NAME unset — we'll simply report the error.
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
        console.error("[admin/decision] whatsapp send failed", err?.metaError || err?.message);
        delivery = {
          attempted: true,
          ok: false,
          error: err?.metaError?.message || String(err?.message || err),
          errorCode: err?.metaErrorCode ?? null,
        };
      }
    }

    // Persist status + delivery info regardless of send outcome (admin can retry manually)
    const update =
      action === "accept"
        ? { $set: { status: nextStatus, confirmedAt: nowIso, decidedAt: nowIso, delivery } }
        : { $set: { status: nextStatus, rejectedAt: nowIso, decidedAt: nowIso, delivery } };
    await col.updateOne({ id }, update);

    // Provide a wa.me fallback URL so the admin can send manually if API failed
    // or not configured yet.
    const waPhone = normalizePhoneForWaLink(doc.customerPhone);
    const customerWhatsappUrl = waPhone
      ? `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`
      : null;

    return NextResponse.json({
      id: doc.id,
      status: nextStatus,
      delivery,
      customerWhatsappUrl, // used only if delivery.ok !== true
    });
  } catch (err) {
    console.error("[admin/bookings/decision]", err);
    return NextResponse.json(
      { error: "internal", detail: String(err?.message || err) },
      { status: 500 }
    );
  }
}
