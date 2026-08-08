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

export async function GET(req) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  try {
    const url = new URL(req.url);
    const showAll = url.searchParams.get("all") === "1";
    const col = await getBookingsCollection();
    const query = showAll ? {} : { status: { $in: ["pending", "requested", "confirmed", "rejected"] } };
    const docs = await col
      .find(query, { projection: { _id: 0, confirmToken: 0 } })
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();
    return NextResponse.json({ bookings: docs });
  } catch (err) {
    console.error("[admin/bookings]", err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
