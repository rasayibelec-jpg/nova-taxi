import { NextResponse } from "next/server";
import { fetchDistance, calculatePrice } from "@/lib/pricing";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { origin, destination } = await req.json();
    if (!origin || !destination) {
      return NextResponse.json({ error: "origin_destination_required" }, { status: 400 });
    }
    const info = await fetchDistance(origin, destination);
    const price = calculatePrice(info.distanceMeters);
    return NextResponse.json({
      priceCHF: price,
      distanceKm: +(info.distanceMeters / 1000).toFixed(2),
      distanceText: info.distanceText,
      durationText: info.durationText,
    });
  } catch (err) {
    console.error("[pricing]", err);
    const msg = String(err?.message || "");
    if (/NOT_FOUND|ZERO_RESULTS|Distance not available/i.test(msg)) {
      return NextResponse.json({ error: "address_not_found" }, { status: 422 });
    }
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
}
