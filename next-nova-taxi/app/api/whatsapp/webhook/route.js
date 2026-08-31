import { NextResponse } from "next/server";
import { getBookingsCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Meta calls GET on this URL to verify webhook subscription.
export async function GET(req) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");
  const expected = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN;

  if (mode === "subscribe" && token && expected && token === expected) {
    return new NextResponse(challenge || "", {
      status: 200,
      headers: { "content-type": "text/plain" },
    });
  }
  return NextResponse.json({ error: "forbidden" }, { status: 403 });
}

// Meta pushes message status updates (sent, delivered, read, failed) here.
export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    // Structure: entry[].changes[].value.statuses[]
    const entries = Array.isArray(body?.entry) ? body.entry : [];
    const col = await getBookingsCollection();
    const updates = [];

    for (const entry of entries) {
      for (const change of entry.changes || []) {
        const statuses = change?.value?.statuses || [];
        for (const s of statuses) {
          const wamid = s?.id;
          const status = s?.status; // sent | delivered | read | failed
          const timestamp = s?.timestamp
            ? new Date(Number(s.timestamp) * 1000).toISOString()
            : new Date().toISOString();
          if (!wamid || !status) continue;
          updates.push(
            col.updateOne(
              { "delivery.wamid": wamid },
              {
                $set: {
                  "delivery.lastStatus": status,
                  "delivery.lastStatusAt": timestamp,
                },
                $push: {
                  "delivery.history": {
                    status,
                    at: timestamp,
                    error: s?.errors?.[0]?.title || null,
                  },
                },
              }
            )
          );
        }
      }
    }

    if (updates.length) await Promise.all(updates);
    return NextResponse.json({ ok: true, processed: updates.length });
  } catch (err) {
    console.error("[whatsapp/webhook]", err);
    // Always return 200 to Meta so it doesn't retry aggressively;
    // we log the error server-side.
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 200 });
  }
}
