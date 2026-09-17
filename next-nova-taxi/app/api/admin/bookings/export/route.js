import { getBookingsCollection } from "@/lib/mongodb";
import { isAdminAuthorized } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function csvEscape(v) {
  if (v == null) return "";
  let s = String(v).replace(/\r?\n/g, " ");
  // SEC-004: neutralize CSV formula injection into spreadsheets
  if (/^[=+\-@\t\r|%]/.test(s)) s = "'" + s;
  s = s.replace(/"/g, '""');
  return /[",;\n]/.test(s) ? `"${s}"` : s;
}

export async function GET(req) {
  if (!isAdminAuthorized(req)) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }
  try {
    const url = new URL(req.url);
    const from = url.searchParams.get("from"); // ISO date YYYY-MM-DD
    const to = url.searchParams.get("to");
    const status = url.searchParams.get("status"); // pending|confirmed|rejected|all

    const query = {};
    if (from || to) {
      query.createdAt = {};
      if (from) query.createdAt.$gte = new Date(from + "T00:00:00Z").toISOString();
      if (to) query.createdAt.$lt = new Date(new Date(to + "T00:00:00Z").getTime() + 86400000).toISOString();
    }
    if (status && status !== "all") {
      query.status = status;
    }

    const col = await getBookingsCollection();
    const docs = await col
      .find(query, { projection: { _id: 0, confirmToken: 0 } })
      .sort({ createdAt: -1 })
      .limit(5000)
      .toArray();

    const headers = [
      "shortId",
      "createdAt",
      "status",
      "customerName",
      "customerPhone",
      "pickupAddress",
      "destinationAddress",
      "whenType",
      "scheduledAt",
      "persons",
      "paymentMethod",
      "priceCHF",
      "distanceKm",
      "adminNote",
      "confirmedAt",
      "rejectedAt",
    ];

    const lines = [headers.join(";")];
    for (const b of docs) {
      lines.push(
        headers
          .map((h) => {
            let v = b[h];
            if (h === "createdAt" || h === "confirmedAt" || h === "rejectedAt" || h === "scheduledAt") {
              v = v ? new Date(v).toLocaleString("de-CH") : "";
            }
            return csvEscape(v);
          })
          .join(";")
      );
    }
    // BOM so Excel opens Umlauts correctly
    const csv = "\uFEFF" + lines.join("\r\n");
    const fname = `nova-taxi-bookings-${new Date().toISOString().slice(0, 10)}.csv`;

    return new Response(csv, {
      status: 200,
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "content-disposition": `attachment; filename="${fname}"`,
        "cache-control": "no-store",
      },
    });
  } catch (err) {
    console.error("[admin/export]", err);
    return new Response(
      JSON.stringify({ error: "internal", detail: String(err?.message || err) }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}
