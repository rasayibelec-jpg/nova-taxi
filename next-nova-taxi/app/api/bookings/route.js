import { NextResponse } from "next/server";
import { randomUUID, createHmac } from "crypto";
import { getBookingsCollection } from "@/lib/mongodb";
import { isWhatsAppApiConfigured, sendWhatsAppText } from "@/lib/whatsapp";
import { isEmailApiConfigured, sendEmail } from "@/lib/email";
import { fetchDistance, calculatePrice } from "@/lib/pricing";
import { escapeHtml } from "@/lib/admin-auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function makeConfirmToken(bookingId) {
  const secret = process.env.DRIVER_CONFIRM_SECRET;
  if (!secret) throw new Error("DRIVER_CONFIRM_SECRET not configured");
  return createHmac("sha256", secret).update(bookingId).digest("hex").slice(0, 24);
}

function truncate(v, max = 200) {
  return String(v ?? "").slice(0, max);
}

function buildAdminMessage(booking, origin) {
  const shortId = booking.shortId;
  const whenText =
    booking.whenType === "scheduled" && booking.scheduledAt
      ? new Date(booking.scheduledAt).toLocaleString("de-CH", {
          dateStyle: "short",
          timeStyle: "short",
        })
      : "Jetzt (sofort)";
  const priceText =
    booking.priceCHF != null ? `CHF ${Number(booking.priceCHF).toFixed(2)}` : "auf Anfrage";
  const distanceLine =
    booking.distanceKm != null ? `\nDistanz: ${booking.distanceKm} km` : "";
  const paymentLabel =
    { cash: "Bar", card: "Karte", twint: "TWINT" }[booking.paymentMethod] || booking.paymentMethod;
  const standortLine = booking.geo
    ? `\nStandort: https://maps.google.com/?q=${booking.geo.lat},${booking.geo.lng}`
    : "";
  const confirmLink = `${origin}/bestellung/${booking.id}/bestaetigen?token=${booking.confirmToken}`;

  return (
    `Neue Bestellung\n` +
    `#${shortId}:\n` +
    `Name: ${booking.customerName}\n` +
    `Tel: ${booking.customerPhone}\n` +
    `Abholung: ${booking.pickupAddress}\n` +
    `Zeit: ${whenText}\n` +
    `Ziel: ${booking.destinationAddress}\n` +
    `Personen: ${booking.persons}\n` +
    `Preis: ${priceText}` +
    distanceLine +
    `\nZahlungsart: ${paymentLabel}` +
    standortLine +
    `\n\nBestellung bestätigen:\n${confirmLink}`
  );
}

function buildAdminEmailHtml(booking, origin) {
  // ALL user-controlled fields are HTML-escaped to prevent injection into
  // the admin's email client (e.g. spoofed links, hidden markup).
  const shortId = escapeHtml(booking.shortId);
  const whenText = escapeHtml(
    booking.whenType === "scheduled" && booking.scheduledAt
      ? new Date(booking.scheduledAt).toLocaleString("de-CH", {
          dateStyle: "short",
          timeStyle: "short",
        })
      : "Jetzt (sofort)"
  );
  const priceText = escapeHtml(
    booking.priceCHF != null ? `CHF ${Number(booking.priceCHF).toFixed(2)}` : "auf Anfrage"
  );
  const paymentLabel = escapeHtml(
    { cash: "Bar", card: "Karte", twint: "TWINT" }[booking.paymentMethod] || booking.paymentMethod
  );
  const confirmLink = `${origin}/bestellung/${encodeURIComponent(booking.id)}/bestaetigen?token=${encodeURIComponent(booking.confirmToken)}`;
  const standortHtml =
    booking.geo && typeof booking.geo.lat === "number" && typeof booking.geo.lng === "number"
      ? `<tr><td style="padding:6px 0;color:#666">Standort:</td><td style="padding:6px 0"><a href="https://maps.google.com/?q=${booking.geo.lat},${booking.geo.lng}" style="color:#c9a34a">Karte öffnen</a></td></tr>`
      : "";
  const distanceHtml =
    booking.distanceKm != null
      ? `<tr><td style="padding:6px 0;color:#666">Distanz:</td><td style="padding:6px 0">${escapeHtml(booking.distanceKm)} km</td></tr>`
      : "";

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#0f0f10;font-family:Arial,Helvetica,sans-serif;color:#f5f5f5">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0f0f10;padding:24px 12px">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#1a1a1c;border:1px solid #2a2a2d;border-radius:12px;padding:28px">
        <tr><td>
          <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:4px;color:#c9a34a;text-transform:uppercase">Nova Taxi</p>
          <h1 style="margin:0 0 20px 0;font-size:22px;color:#fff">Neue Bestellung #${shortId}</h1>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;color:#e5e5e5">
            <tr><td style="padding:6px 0;color:#666;width:110px">Kunde:</td><td style="padding:6px 0"><strong>${escapeHtml(booking.customerName)}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#666">Telefon:</td><td style="padding:6px 0"><a href="tel:${encodeURIComponent(booking.customerPhone)}" style="color:#c9a34a">${escapeHtml(booking.customerPhone)}</a></td></tr>
            <tr><td style="padding:6px 0;color:#666">Abholung:</td><td style="padding:6px 0">${escapeHtml(booking.pickupAddress)}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Ziel:</td><td style="padding:6px 0">${escapeHtml(booking.destinationAddress)}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Zeit:</td><td style="padding:6px 0">${whenText}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Personen:</td><td style="padding:6px 0">${escapeHtml(booking.persons)}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Zahlungsart:</td><td style="padding:6px 0">${paymentLabel}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Preis:</td><td style="padding:6px 0;font-weight:bold;color:#c9a34a">${priceText}</td></tr>
            ${distanceHtml}
            ${standortHtml}
          </table>
          <div style="margin-top:24px;text-align:center">
            <a href="${confirmLink}" style="display:inline-block;background:#c9a34a;color:#000;text-decoration:none;padding:12px 24px;border-radius:999px;font-weight:bold;font-size:14px">✓ Annehmen oder Ablehnen</a>
          </div>
          <p style="margin:20px 0 0 0;font-size:11px;color:#666;text-align:center">
            Diese Bestellung ist noch nicht bestätigt. Bitte im Admin-Panel oder über den Button oben entscheiden.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(req) {
  // SEC-003: rate-limit unauthenticated booking creation
  const ip = getClientIp(req);
  const rl = rateLimit(`bookings:${ip}`, 5, 60_000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "too_many_requests" },
      {
        status: 429,
        headers: { "retry-after": String(Math.ceil(rl.retryAfterMs / 1000)) },
      }
    );
  }

  try {
    const body = await req.json();
    const {
      pickupAddress,
      destinationAddress,
      whenType,
      scheduledAt,
      persons,
      customerName,
      customerPhone,
      paymentMethod,
      geo,
      lang,
    } = body || {};

    if (!pickupAddress || !destinationAddress || !customerName || !customerPhone) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    // SEC-005 / hardening: input length caps prevent oversized payloads
    const safePickup = truncate(pickupAddress, 300);
    const safeDest = truncate(destinationAddress, 300);
    const safeName = truncate(customerName, 120);
    const safePhone = truncate(customerPhone, 30);
    const safePayment = ["cash", "card", "twint"].includes(paymentMethod) ? paymentMethod : "cash";
    const safeWhenType = whenType === "scheduled" ? "scheduled" : "now";
    const safePersons = Math.min(Math.max(Number(persons) || 1, 1), 8);
    const safeLang = ["de", "en"].includes(lang) ? lang : "de";
    const safeGeo =
      geo && typeof geo.lat === "number" && typeof geo.lng === "number"
        ? { lat: geo.lat, lng: geo.lng }
        : null;

    // P3 hardening: recompute price server-side rather than trusting the
    // client. If Google is unavailable, leave price as null (admin decides).
    let priceCHF = null;
    let distanceKm = null;
    let distanceText = null;
    let durationText = null;
    try {
      const info = await fetchDistance(safePickup, safeDest);
      priceCHF = calculatePrice(info.distanceMeters);
      distanceKm = +(info.distanceMeters / 1000).toFixed(2);
      distanceText = info.distanceText;
      durationText = info.durationText;
    } catch (err) {
      // Google API failure is non-fatal: we still accept the booking and
      // the admin can confirm the price by phone.
      console.warn("[bookings/create] price recompute failed:", err?.message);
    }

    const id = randomUUID();
    const confirmToken = makeConfirmToken(id);
    const now = new Date();

    const booking = {
      id,
      shortId: id.substring(0, 8).toUpperCase(),
      pickupAddress: safePickup,
      destinationAddress: safeDest,
      whenType: safeWhenType,
      scheduledAt: safeWhenType === "scheduled" ? scheduledAt || null : null,
      persons: safePersons,
      customerName: safeName,
      customerPhone: safePhone,
      paymentMethod: safePayment,
      priceCHF,
      distanceKm,
      distanceText,
      durationText,
      geo: safeGeo,
      lang: safeLang,
      status: "pending",
      confirmToken, // server-only, never returned to the public client
      createdAt: now.toISOString(),
      confirmedAt: null,
      adminNotification: { attempted: false, ok: false },
      adminEmailNotification: { attempted: false, ok: false },
    };

    const col = await getBookingsCollection();
    await col.insertOne(booking);

    const origin = new URL(req.url).origin;

    // WhatsApp admin notification
    let adminNotification = { attempted: false, ok: false };
    if (isWhatsAppApiConfigured()) {
      adminNotification.attempted = true;
      try {
        const adminPhone =
          process.env.ADMIN_WHATSAPP_NUMBER ||
          process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
          "41766113131";
        const message = buildAdminMessage(booking, origin);
        const result = await sendWhatsAppText(adminPhone, message);
        adminNotification = {
          attempted: true,
          ok: true,
          wamid: result?.messages?.[0]?.id || null,
          to: adminPhone,
        };
      } catch (err) {
        console.error(
          "[bookings/create] admin whatsapp send failed",
          err?.metaError || err?.message
        );
        adminNotification = {
          attempted: true,
          ok: false,
          error: err?.metaError?.message || String(err?.message || err),
          errorCode: err?.metaErrorCode ?? null,
        };
      }
    }

    // Resend admin email
    let adminEmailNotification = { attempted: false, ok: false };
    if (isEmailApiConfigured()) {
      adminEmailNotification.attempted = true;
      try {
        const adminEmail = process.env.ADMIN_EMAIL || "info@nova-taxi.com";
        const subject = `Neue Bestellung #${booking.shortId} – ${booking.customerName}`.slice(0, 200);
        const html = buildAdminEmailHtml(booking, origin);
        const text = buildAdminMessage(booking, origin);
        const result = await sendEmail({ to: adminEmail, subject, html, text });
        adminEmailNotification = {
          attempted: true,
          ok: true,
          id: result?.id || null,
          to: adminEmail,
        };
      } catch (err) {
        console.error(
          "[bookings/create] admin email send failed",
          err?.resendError || err?.message
        );
        adminEmailNotification = {
          attempted: true,
          ok: false,
          error: err?.resendError?.message || String(err?.message || err),
        };
      }
    }

    if (adminNotification.attempted || adminEmailNotification.attempted) {
      await col
        .updateOne({ id }, { $set: { adminNotification, adminEmailNotification } })
        .catch(() => {});
    }

    // SEC-001: DO NOT return confirmToken to the public client.
    // The token is only embedded in server-side admin notifications so that
    // only the admin (who receives them) can act on decision links.
    return NextResponse.json(
      {
        id,
        shortId: booking.shortId,
        status: booking.status,
        priceCHF: booking.priceCHF,
        distanceKm: booking.distanceKm,
        distanceText: booking.distanceText,
        durationText: booking.durationText,
        adminNotification: {
          attempted: adminNotification.attempted,
          ok: adminNotification.ok,
        },
        adminEmailNotification: {
          attempted: adminEmailNotification.attempted,
          ok: adminEmailNotification.ok,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[bookings/create]", err);
    return NextResponse.json(
      { error: "internal", detail: String(err?.message || err) },
      { status: 500 }
    );
  }
}
