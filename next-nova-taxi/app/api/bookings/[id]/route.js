import { NextResponse } from "next/server";
import { getBookingsCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const col = await getBookingsCollection();
    const doc = await col.findOne({ id }, { projection: { _id: 0, confirmToken: 0 } });
    if (!doc) return NextResponse.json({ error: "not_found" }, { status: 404 });
    return NextResponse.json(doc);
  } catch (err) {
    console.error("[bookings/get]", err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
