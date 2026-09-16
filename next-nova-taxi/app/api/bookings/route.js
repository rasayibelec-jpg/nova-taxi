import { NextResponse } from "next/server";
import { randomUUID, createHmac } from "crypto";
import { getBookingsCollection } from "@/lib/mongodb";
import { isWhatsAppApiConfigured, sendWhatsAppText } from "@/lib/whatsapp";
import { isEmailApiConfigured, sendEmail } from "@/lib/email";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function makeConfirmToken(bookingId) {
  const secret = process.env.DRIVER_CONFIRM_SECRET || "dev-secret";
  return createHmac("sha256", secret).update(bookingId).digest("hex").slice(0, 24);
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
  const paymentLabel =
    { cash: "Bar", card: "Karte", twint: "TWINT" }[booking.paymentMethod] || booking.paymentMethod;
  const confirmLink = `${origin}/bestellung/${booking.id}/bestaetigen?token=${booking.confirmToken}`;
  const standortHtml = booking.geo
    ? `<tr><td style="padding:6px 0;color:#666">Standort:</td><td style="padding:6px 0"><a href="https://maps.google.com/?q=${booking.geo.lat},${booking.geo.lng}" style="color:#c9a34a">Karte öffnen</a></td></tr>`
    : "";
  const distanceHtml =
    booking.distanceKm != null
      ? `<tr><td style="padding:6px 0;color:#666">Distanz:</td><td style="padding:6px 0">${booking.distanceKm} km</td></tr>`
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
            <tr><td style="padding:6px 0;color:#666;width:110px">Kunde:</td><td style="padding:6px 0"><strong>${booking.customerName}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#666">Telefon:</td><td style="padding:6px 0"><a href="tel:${booking.customerPhone}" style="color:#c9a34a">${booking.customerPhone}</a></td></tr>
            <tr><td style="padding:6px 0;color:#666">Abholung:</td><td style="padding:6px 0">${booking.pickupAddress}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Ziel:</td><td style="padding:6px 0">${booking.destinationAddress}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Zeit:</td><td style="padding:6px 0">${whenText}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Personen:</td><td style="padding:6px 0">${booking.persons}</td></tr>
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
      priceCHF,
      distanceKm,
      geo,
      lang,
    } = body || {};

    if (!pickupAddress || !destinationAddress || !customerName || !customerPhone) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    const id = randomUUID();
    const confirmToken = makeConfirmToken(id);
    const now = new Date();

    const booking = {
      id,
      shortId: id.substring(0, 8).toUpperCase(),
      pickupAddress,
      destinationAddress,
      whenType: whenType || "now",
      scheduledAt: scheduledAt || null,
      persons: Number(persons) || 1,
      customerName,
      customerPhone,
      paymentMethod: paymentMethod || "cash",
      priceCHF: priceCHF ?? null,
      distanceKm: distanceKm ?? null,
      geo: geo || null,
      lang: lang || "de",
      status: "pending",
      confirmToken,
      createdAt: now.toISOString(),
      confirmedAt: null,
      adminNotification: { attempted: false, ok: false },
      adminEmailNotification: { attempted: false, ok: false },
    };

    const col = await getBookingsCollection();
    await col.insertOne(booking);

    const origin = new URL(req.url).origin;

    // Fire-and-track admin notification via WhatsApp Business Cloud API.
    // Non-blocking: booking is already saved. Failure only affects delivery,
    // not the booking record itself.
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

    // Admin email notification via Resend
    let adminEmailNotification = { attempted: false, ok: false };
    if (isEmailApiConfigured()) {
      adminEmailNotification.attempted = true;
      try {
        const adminEmail = process.env.ADMIN_EMAIL || "info@nova-taxi.com";
        const subject = `Neue Bestellung #${booking.shortId} – ${booking.customerName}`;
        const html = buildAdminEmailHtml(booking, origin);
        const text = buildAdminMessage(booking, origin);
        const result = await sendEmail({
          to: adminEmail,
          subject,
          html,
          text,
        });
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

    // Persist delivery attempts alongside the booking record
    if (adminNotification.attempted || adminEmailNotification.attempted) {
      await col
        .updateOne(
          { id },
          { $set: { adminNotification, adminEmailNotification } }
        )
        .catch(() => {});
    }

    return NextResponse.json(
      {
        id,
        shortId: booking.shortId,
        confirmToken,
        status: booking.status,
        adminNotification,
        adminEmailNotification,
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
