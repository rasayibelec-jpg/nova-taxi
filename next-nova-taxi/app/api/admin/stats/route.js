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

function startOfDayIso(daysAgo = 0) {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  d.setUTCDate(d.getUTCDate() - daysAgo);
  return d.toISOString();
}

export async function GET(req) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  try {
    const col = await getBookingsCollection();
    const today = startOfDayIso(0);
    const last7 = startOfDayIso(6);
    const last30 = startOfDayIso(29);

    // Only count confirmed bookings toward revenue
    const [todayDocs, week, month, pending] = await Promise.all([
      col.find({ createdAt: { $gte: today }, status: "confirmed" }).toArray(),
      col.find({ createdAt: { $gte: last7 }, status: "confirmed" }).toArray(),
      col.find({ createdAt: { $gte: last30 }, status: "confirmed" }).toArray(),
      col.countDocuments({ status: { $in: ["pending", "requested"] } }),
    ]);

    const sum = (arr) =>
      arr.reduce((acc, b) => acc + (typeof b.priceCHF === "number" ? b.priceCHF : 0), 0);

    // Hourly heatmap for last 7 days (0-23)
    const hourly = Array(24).fill(0);
    for (const b of week) {
      const h = new Date(b.createdAt).getHours();
      hourly[h] += 1;
    }

    // Payment breakdown for last 30 days
    const paymentBreakdown = { cash: 0, card: 0, twint: 0, other: 0 };
    const paymentRevenue = { cash: 0, card: 0, twint: 0, other: 0 };
    for (const b of month) {
      const key = ["cash", "card", "twint"].includes(b.paymentMethod)
        ? b.paymentMethod
        : "other";
      paymentBreakdown[key] += 1;
      paymentRevenue[key] += typeof b.priceCHF === "number" ? b.priceCHF : 0;
    }

    return NextResponse.json({
      today: { count: todayDocs.length, revenueCHF: +sum(todayDocs).toFixed(2) },
      last7Days: { count: week.length, revenueCHF: +sum(week).toFixed(2) },
      last30Days: { count: month.length, revenueCHF: +sum(month).toFixed(2) },
      pendingCount: pending,
      hourly, // array[24] – count of confirmed bookings per hour of day (last 7 days)
      paymentBreakdown,
      paymentRevenue: Object.fromEntries(
        Object.entries(paymentRevenue).map(([k, v]) => [k, +v.toFixed(2)])
      ),
    });
  } catch (err) {
    console.error("[admin/stats]", err);
    return NextResponse.json(
      { error: "internal", detail: String(err?.message || err) },
      { status: 500 }
    );
  }
}
