import { NextResponse } from "next/server";
import { fetchDistance, calculatePrice } from "@/lib/pricing";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

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
    console.error("[pricing]", err?.code, err?.message, err?.googleMessage);
    const code = err?.code || "UNAVAILABLE";

    // Map real Google statuses to actionable UI errors
    if (code === "KEY_MISSING") {
      return NextResponse.json(
        { error: "key_missing", detail: "GOOGLE_MAPS_API_KEY environment variable is not set on the server." },
        { status: 500 }
      );
    }
    if (code === "REQUEST_DENIED") {
      return NextResponse.json(
        {
          error: "key_denied",
          detail:
            err?.googleMessage ||
            "Google denied the request. Check the API key restrictions (referer/IP) and ensure the Distance Matrix API is enabled.",
        },
        { status: 502 }
      );
    }
    if (code === "OVER_QUERY_LIMIT" || code === "OVER_DAILY_LIMIT") {
      return NextResponse.json({ error: "quota_exceeded", detail: err?.googleMessage || null }, { status: 429 });
    }
    if (code === "NOT_FOUND" || code === "ZERO_RESULTS") {
      return NextResponse.json({ error: "address_not_found" }, { status: 422 });
    }
    if (code === "INVALID_REQUEST") {
      return NextResponse.json({ error: "invalid_request", detail: err?.googleMessage || null }, { status: 400 });
    }
    return NextResponse.json({ error: "unavailable", detail: String(err?.message || "") }, { status: 502 });
  }
}
