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

export async function PATCH(req, { params }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const note = String(body?.note ?? "").slice(0, 500);
    const col = await getBookingsCollection();
    const result = await col.updateOne(
      { id },
      { $set: { adminNote: note, adminNoteUpdatedAt: new Date().toISOString() } }
    );
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, adminNote: note });
  } catch (err) {
    console.error("[admin/note]", err);
    return NextResponse.json(
      { error: "internal", detail: String(err?.message || err) },
      { status: 500 }
    );
  }
}
