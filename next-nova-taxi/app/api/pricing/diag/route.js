import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Diagnostic endpoint (no secrets leaked) to help debug production pricing issues.
// Access via /api/pricing/diag on your deployed host.
export async function GET() {
  const serverKey = process.env.GOOGLE_MAPS_API_KEY || "";
  const publicKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const mongo = process.env.MONGO_URL || "";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  const result = {
    env: {
      GOOGLE_MAPS_API_KEY_present: Boolean(serverKey),
      GOOGLE_MAPS_API_KEY_length: serverKey.length,
      GOOGLE_MAPS_API_KEY_last4: serverKey ? serverKey.slice(-4) : null,
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_present: Boolean(publicKey),
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_length: publicKey.length,
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_last4: publicKey ? publicKey.slice(-4) : null,
      MONGO_URL_present: Boolean(mongo),
      DB_NAME_present: Boolean(process.env.DB_NAME),
      DB_NAME: process.env.DB_NAME || null,
      ADMIN_PASSWORD_present: Boolean(process.env.ADMIN_PASSWORD),
      DRIVER_CONFIRM_SECRET_present: Boolean(process.env.DRIVER_CONFIRM_SECRET),
      NEXT_PUBLIC_WHATSAPP_NUMBER_present: Boolean(whatsapp),
      NEXT_PUBLIC_WHATSAPP_NUMBER: whatsapp || null,
      NODE_ENV: process.env.NODE_ENV || null,
      VERCEL_ENV: process.env.VERCEL_ENV || null,
      VERCEL_REGION: process.env.VERCEL_REGION || null,
    },
    googleTest: null,
    mongoTest: null,
  };

  // Perform a live Distance Matrix probe if the server key is set
  if (serverKey) {
    try {
      const url = new URL("https://maps.googleapis.com/maps/api/distancematrix/json");
      url.searchParams.set("origins", "Zürich HB");
      url.searchParams.set("destinations", "Flughafen Zürich");
      url.searchParams.set("mode", "driving");
      url.searchParams.set("region", "ch");
      url.searchParams.set("language", "de");
      url.searchParams.set("key", serverKey);
      const res = await fetch(url.toString(), { cache: "no-store" });
      const data = await res.json();
      result.googleTest = {
        httpStatus: res.status,
        status: data?.status || null,
        error_message: data?.error_message || null,
        firstElementStatus: data?.rows?.[0]?.elements?.[0]?.status || null,
        distanceText: data?.rows?.[0]?.elements?.[0]?.distance?.text || null,
      };
    } catch (err) {
      result.googleTest = { error: String(err?.message || err) };
    }
  }

  // Live MongoDB probe
  if (mongo && process.env.DB_NAME) {
    try {
      const { getBookingsCollection } = await import("@/lib/mongodb");
      const col = await getBookingsCollection();
      const count = await col.countDocuments({});
      result.mongoTest = { ok: true, bookingsCount: count };
    } catch (err) {
      result.mongoTest = { ok: false, error: String(err?.message || err) };
    }
  } else {
    result.mongoTest = { ok: false, error: "MONGO_URL or DB_NAME missing" };
  }

  return NextResponse.json(result, { status: 200 });
}
