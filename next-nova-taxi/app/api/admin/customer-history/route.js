import { NextResponse } from "next/server";
import { getBookingsCollection } from "@/lib/mongodb";
import { timingSafeEq } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function isAuthorized(req) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) return false;
  const auth = req.headers.get("x-admin-key") || "";
  return timingSafeEq(auth, expected);
}

function normalize(raw) {
  return String(raw || "").replace(/\D/g, "");
}

export async function GET(req) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  try {
    const url = new URL(req.url);
    const phone = normalize(url.searchParams.get("phone"));
    const excludeId = url.searchParams.get("excludeId") || null;
    if (!phone || phone.length < 6) {
      return NextResponse.json({ error: "invalid_phone" }, { status: 400 });
    }
    const col = await getBookingsCollection();
    // Match any stored customerPhone that shares the same digits (last 9)
    const tail = phone.slice(-9);
    const query = { customerPhone: { $regex: tail + "$" } };
    if (excludeId) query.id = { $ne: excludeId };
    const docs = await col
      .find(query, { projection: { _id: 0, confirmToken: 0 } })
      .sort({ createdAt: -1 })
      .limit(20)
      .toArray();
    return NextResponse.json({
      phone,
      count: docs.length,
      bookings: docs,
    });
  } catch (err) {
    console.error("[admin/customer-history]", err);
    return NextResponse.json(
      { error: "internal", detail: String(err?.message || err) },
      { status: 500 }
    );
  }
}
