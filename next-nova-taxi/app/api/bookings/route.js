import { NextResponse } from "next/server";
import { randomUUID, createHmac } from "crypto";
import { getBookingsCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

function makeConfirmToken(bookingId) {
  const secret = process.env.DRIVER_CONFIRM_SECRET || "dev-secret";
  return createHmac("sha256", secret).update(bookingId).digest("hex").slice(0, 24);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      pickupAddress,
      destinationAddress,
      whenType,
      scheduledAt,
      persons,
      customerName,
      customerPhone,
      paymentMethod,
      priceCHF,
      distanceKm,
      geo,
      lang,
    } = body || {};

    if (!pickupAddress || !destinationAddress || !customerName || !customerPhone) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    const id = randomUUID();
    const confirmToken = makeConfirmToken(id);
    const now = new Date();

    const booking = {
      id,
      shortId: id.substring(0, 8).toUpperCase(),
      pickupAddress,
      destinationAddress,
      whenType: whenType || "now",
      scheduledAt: scheduledAt || null,
      persons: Number(persons) || 1,
      customerName,
      customerPhone,
      paymentMethod: paymentMethod || "cash",
      priceCHF: priceCHF ?? null,
      distanceKm: distanceKm ?? null,
      geo: geo || null,
      lang: lang || "de",
      status: "pending",
      confirmToken,
      createdAt: now.toISOString(),
      confirmedAt: null,
    };

    const col = await getBookingsCollection();
    await col.insertOne(booking);

    return NextResponse.json(
      { id, shortId: booking.shortId, confirmToken, status: booking.status },
      { status: 201 }
    );
  } catch (err) {
    console.error("[bookings/create]", err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
