import { NextResponse } from "next/server";
import { getBookingsCollection } from "@/lib/mongodb";
import { createHmac, timingSafeEqual } from "crypto";

export const dynamic = "force-dynamic";

function verifyToken(bookingId, token) {
  const secret = process.env.DRIVER_CONFIRM_SECRET || "dev-secret";
  const expected = createHmac("sha256", secret).update(bookingId).digest("hex").slice(0, 24);
  if (!token || token.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(token));
}

// Driver clicks WhatsApp link → this endpoint marks booking confirmed.
// Default: 302 redirect to customer WhatsApp deep-link (legacy).
// With ?noRedirect=1: returns JSON { customerWhatsappUrl, booking } so a
// client-side landing page can show a confirmation UI before redirecting.
export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const url = new URL(req.url);
    const token = url.searchParams.get("token") || "";
    const noRedirect = url.searchParams.get("noRedirect") === "1";

    if (!verifyToken(id, token)) {
      return NextResponse.json({ error: "invalid_token" }, { status: 401 });
    }

    const col = await getBookingsCollection();
    const doc = await col.findOne({ id });
    if (!doc) return NextResponse.json({ error: "not_found" }, { status: 404 });

    if (doc.status !== "confirmed") {
      await col.updateOne(
        { id },
        { $set: { status: "confirmed", confirmedAt: new Date().toISOString() } }
      );
    }

    const shortId = String(id).substring(0, 8).toUpperCase();
    const whenText =
      doc.whenType === "scheduled" && doc.scheduledAt
        ? new Date(doc.scheduledAt).toLocaleString("de-CH", {
            dateStyle: "short",
            timeStyle: "short",
          })
        : "sofort";

    const priceText = doc.priceCHF != null ? `CHF ${doc.priceCHF.toFixed(2)}` : "gemäss Taxameter";
    const msg =
      `Ihre Bestellung #${shortId} wurde bestätigt! ` +
      `Wir holen Sie ab um ${whenText} an ${doc.pickupAddress}. ` +
      `Fahrpreis: ${priceText}.`;

    const digits = String(doc.customerPhone).replace(/\D/g, "");
    const waPhone = digits.startsWith("0") ? "41" + digits.substring(1) : digits;
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(msg)}`;

    if (noRedirect) {
      return NextResponse.json({
        customerWhatsappUrl: waUrl,
        booking: {
          id: doc.id,
          shortId,
          customerName: doc.customerName,
          customerPhone: doc.customerPhone,
          pickupAddress: doc.pickupAddress,
          destinationAddress: doc.destinationAddress,
          priceCHF: doc.priceCHF,
          status: "confirmed",
        },
      });
    }

    return NextResponse.redirect(waUrl, 302);
  } catch (err) {
    console.error("[bookings/confirm]", err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
