import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { getBookingsCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function verifyMetaSignature(rawBody, signatureHeader) {
  const secret = process.env.WHATSAPP_APP_SECRET;
  if (!secret) {
    // If no secret configured, log a warning but accept the payload.
    // Setting WHATSAPP_APP_SECRET in prod hardens the endpoint against forgery.
    return { ok: true, verified: false };
  }
  if (!signatureHeader || !signatureHeader.startsWith("sha256=")) {
    return { ok: false, verified: false };
  }
  const provided = signatureHeader.slice(7);
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  try {
    const p = Buffer.from(provided, "hex");
    const e = Buffer.from(expected, "hex");
    if (p.length !== e.length) return { ok: false, verified: false };
    return { ok: timingSafeEqual(p, e), verified: true };
  } catch {
    return { ok: false, verified: false };
  }
}

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
    const raw = await req.text();
    const sigCheck = verifyMetaSignature(raw, req.headers.get("x-hub-signature-256"));
    if (!sigCheck.ok) {
      // Only reject when a secret is set and the signature is wrong.
      return NextResponse.json({ error: "invalid_signature" }, { status: 401 });
    }
    const body = raw ? JSON.parse(raw) : {};
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
    // Return 200 to Meta so it doesn't retry aggressively; log server-side.
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
