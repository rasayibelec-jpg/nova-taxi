import { NextResponse } from "next/server";
import { getBookingsCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function isAuthorized(req) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) return false;
  const auth = req.headers.get("x-admin-key") || "";
  return auth && auth === expected;
}

function normalizePhone(raw) {
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

    if (doc.status === "confirmed" || doc.status === "rejected") {
      const message = buildCustomerMessage(
        doc,
        doc.status === "confirmed" ? "accept" : "reject"
      );
      const waPhone = normalizePhone(doc.customerPhone);
      const customerWhatsappUrl = waPhone
        ? `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`
        : null;
      return NextResponse.json(
        { id: doc.id, status: doc.status, customerWhatsappUrl, alreadyProcessed: true },
        { status: 200 }
      );
    }

    const nextStatus = action === "accept" ? "confirmed" : "rejected";
    const nowIso = new Date().toISOString();
    const update =
      action === "accept"
        ? { $set: { status: nextStatus, confirmedAt: nowIso, decidedAt: nowIso } }
        : { $set: { status: nextStatus, rejectedAt: nowIso, decidedAt: nowIso } };
    await col.updateOne({ id }, update);

    const message = buildCustomerMessage(doc, action);
    const waPhone = normalizePhone(doc.customerPhone);
    const customerWhatsappUrl = waPhone
      ? `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`
      : null;

    return NextResponse.json({
      id: doc.id,
      status: nextStatus,
      customerWhatsappUrl,
      customerPhone: doc.customerPhone,
    });
  } catch (err) {
    console.error("[admin/bookings/decision]", err);
    return NextResponse.json(
      { error: "internal", detail: String(err?.message || err) },
      { status: 500 }
    );
  }
}
