module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/lib/mongodb.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBookingsCollection",
    ()=>getBookingsCollection,
    "getDb",
    ()=>getDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
let clientPromise;
function connect() {
    const uri = process.env.MONGO_URL;
    const dbName = process.env.DB_NAME;
    if (!uri) throw new Error("MONGO_URL environment variable is not set");
    if (!dbName) throw new Error("DB_NAME environment variable is not set");
    if ("TURBOPACK compile-time truthy", 1) {
        if (!/*TURBOPACK member replacement*/ __turbopack_context__.g._mongoClientPromise) {
            /*TURBOPACK member replacement*/ __turbopack_context__.g._mongoClientPromise = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri).connect();
        }
        return /*TURBOPACK member replacement*/ __turbopack_context__.g._mongoClientPromise;
    }
    //TURBOPACK unreachable
    ;
}
async function getDb() {
    if (!clientPromise) clientPromise = connect();
    const client = await clientPromise;
    const dbName = process.env.DB_NAME;
    return client.db(dbName);
}
async function getBookingsCollection() {
    const db = await getDb();
    return db.collection("bookings");
}
}),
"[project]/lib/whatsapp.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// WhatsApp Business Cloud API (Meta Graph API) sender.
// Server-only. Never expose these credentials to the browser.
__turbopack_context__.s([
    "isWhatsAppApiConfigured",
    ()=>isWhatsAppApiConfigured,
    "sendCustomerMessage",
    ()=>sendCustomerMessage,
    "sendWhatsAppTemplate",
    ()=>sendWhatsAppTemplate,
    "sendWhatsAppText",
    ()=>sendWhatsAppText
]);
const API_VERSION = process.env.WHATSAPP_API_VERSION || "v20.0";
function isWhatsAppApiConfigured() {
    return Boolean(process.env.WHATSAPP_API_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID);
}
function normalizePhone(raw) {
    const digits = String(raw || "").replace(/\D/g, "");
    if (!digits) return "";
    // If it starts with 0 (Swiss local format), assume CH → prepend 41
    const intl = digits.startsWith("0") ? "41" + digits.substring(1) : digits;
    return "+" + intl;
}
async function callGraph(payload) {
    const token = process.env.WHATSAPP_API_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    if (!token || !phoneNumberId) {
        throw new Error("WHATSAPP_API_TOKEN or WHATSAPP_PHONE_NUMBER_ID not configured");
    }
    const url = `https://graph.facebook.com/${API_VERSION}/${phoneNumberId}/messages`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        cache: "no-store"
    });
    const data = await res.json().catch(()=>({}));
    if (!res.ok) {
        const err = new Error(`WhatsApp API ${res.status}: ${data?.error?.message || JSON.stringify(data)}`);
        err.httpStatus = res.status;
        err.metaError = data?.error || null;
        err.metaErrorCode = data?.error?.code ?? null;
        throw err;
    }
    return data;
}
async function sendWhatsAppText(toPhone, body) {
    const to = normalizePhone(toPhone);
    if (!to) throw new Error("Invalid recipient phone");
    return callGraph({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "text",
        text: {
            preview_url: false,
            body: String(body || "").slice(0, 4096)
        }
    });
}
async function sendWhatsAppTemplate(toPhone, templateName, languageCode, bodyParams = []) {
    const to = normalizePhone(toPhone);
    if (!to) throw new Error("Invalid recipient phone");
    return callGraph({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "template",
        template: {
            name: templateName,
            language: {
                code: languageCode || "de"
            },
            components: bodyParams.length ? [
                {
                    type: "body",
                    parameters: bodyParams.map((v)=>({
                            type: "text",
                            text: String(v)
                        }))
                }
            ] : undefined
        }
    });
}
async function sendCustomerMessage(toPhone, body, templateFallback = null) {
    try {
        const data = await sendWhatsAppText(toPhone, body);
        return {
            mode: "text",
            wamid: data?.messages?.[0]?.id || null,
            raw: data
        };
    } catch (err) {
        const code = err?.metaErrorCode;
        const windowClosed = code === 131047 || code === 131026;
        if (windowClosed && templateFallback?.name && Array.isArray(templateFallback.params)) {
            const data = await sendWhatsAppTemplate(toPhone, templateFallback.name, templateFallback.language || "de", templateFallback.params);
            return {
                mode: "template",
                wamid: data?.messages?.[0]?.id || null,
                raw: data
            };
        }
        throw err;
    }
}
}),
"[project]/lib/email.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Resend transactional email sender.
// Server-only. Uses REST API directly (no SDK dependency).
__turbopack_context__.s([
    "isEmailApiConfigured",
    ()=>isEmailApiConfigured,
    "sendEmail",
    ()=>sendEmail
]);
function isEmailApiConfigured() {
    return Boolean(process.env.RESEND_API_KEY);
}
async function sendEmail({ to, subject, html, text, replyTo }) {
    const token = process.env.RESEND_API_KEY;
    if (!token) {
        throw new Error("RESEND_API_KEY not configured");
    }
    // Sender: use verified domain if configured, otherwise Resend sandbox.
    // NOTE: Resend sandbox (`onboarding@resend.dev`) can ONLY deliver to the
    // email you used to sign up. For real production, verify nova-taxi.com in
    // Resend dashboard and set SENDER_EMAIL to e.g. "no-reply@nova-taxi.com".
    const from = process.env.SENDER_EMAIL || "Nova Taxi <onboarding@resend.dev>";
    const recipients = Array.isArray(to) ? to : [
        to
    ];
    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            from,
            to: recipients,
            subject,
            html,
            text,
            reply_to: replyTo
        }),
        cache: "no-store"
    });
    const data = await res.json().catch(()=>({}));
    if (!res.ok) {
        const err = new Error(`Resend ${res.status}: ${data?.message || JSON.stringify(data)}`);
        err.httpStatus = res.status;
        err.resendError = data;
        throw err;
    }
    return {
        id: data?.id || null,
        raw: data
    };
}
}),
"[project]/lib/pricing.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_FEE_CHF",
    ()=>BASE_FEE_CHF,
    "PER_KM_CHF",
    ()=>PER_KM_CHF,
    "calculatePrice",
    ()=>calculatePrice,
    "fetchDistance",
    ()=>fetchDistance
]);
const BASE_FEE_CHF = 6.60;
const PER_KM_CHF = 4.20;
function calculatePrice(distanceMeters) {
    const km = distanceMeters / 1000;
    const price = BASE_FEE_CHF + km * PER_KM_CHF;
    return Math.round(price * 20) / 20;
}
async function fetchDistance(origin, destination) {
    const key = process.env.GOOGLE_MAPS_API_KEY;
    if (!key) {
        const err = new Error("GOOGLE_MAPS_API_KEY missing");
        err.code = "KEY_MISSING";
        throw err;
    }
    const url = new URL("https://maps.googleapis.com/maps/api/distancematrix/json");
    url.searchParams.set("origins", origin);
    url.searchParams.set("destinations", destination);
    url.searchParams.set("mode", "driving");
    url.searchParams.set("region", "ch");
    url.searchParams.set("language", "de");
    url.searchParams.set("key", key);
    const res = await fetch(url.toString(), {
        cache: "no-store"
    });
    if (!res.ok) {
        const err = new Error(`Distance Matrix HTTP ${res.status}`);
        err.code = "HTTP_ERROR";
        err.httpStatus = res.status;
        throw err;
    }
    const data = await res.json();
    // Top-level API errors (REQUEST_DENIED, INVALID_REQUEST, OVER_QUERY_LIMIT ...)
    if (data.status && data.status !== "OK") {
        const err = new Error(`Google Maps: ${data.status}${data.error_message ? " - " + data.error_message : ""}`);
        err.code = data.status;
        err.googleMessage = data.error_message || null;
        throw err;
    }
    const element = data?.rows?.[0]?.elements?.[0];
    if (!element || element.status !== "OK") {
        const err = new Error(`Distance not available (${element?.status || "NO_ELEMENT"})`);
        err.code = element?.status || "NO_ELEMENT";
        throw err;
    }
    return {
        distanceMeters: element.distance.value,
        distanceText: element.distance.text,
        durationSeconds: element.duration.value,
        durationText: element.duration.text
    };
}
}),
"[project]/lib/admin-auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared server-side helpers for admin authentication and HTML escaping.
// Uses timing-safe comparison to avoid side-channel leaks.
__turbopack_context__.s([
    "escapeHtml",
    ()=>escapeHtml,
    "isAdminAuthorized",
    ()=>isAdminAuthorized,
    "timingSafeEq",
    ()=>timingSafeEq
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function isAdminAuthorized(req) {
    const expected = process.env.ADMIN_PASSWORD || "";
    if (!expected) return false;
    const provided = req.headers.get("x-admin-key") || "";
    return timingSafeEq(provided, expected);
}
function timingSafeEq(a, b) {
    const aBuf = Buffer.from(String(a || ""));
    const bBuf = Buffer.from(String(b || ""));
    // Pad the shorter buffer so lengths match; result must still be false if lengths differ
    const len = Math.max(aBuf.length, bBuf.length, 1);
    const aPad = Buffer.alloc(len);
    const bPad = Buffer.alloc(len);
    aBuf.copy(aPad);
    bBuf.copy(bPad);
    const eq = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"])(aPad, bPad);
    return eq && aBuf.length === bBuf.length;
}
function escapeHtml(str) {
    return String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
}),
"[project]/lib/rate-limit.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// In-memory sliding-window rate limiter.
// NOTE: Vercel serverless can spin up multiple isolated instances,
// so this is a best-effort per-instance limit. For strict global limits,
// swap in Upstash/Redis. Sufficient to blunt casual scripting/abuse.
__turbopack_context__.s([
    "getClientIp",
    ()=>getClientIp,
    "rateLimit",
    ()=>rateLimit
]);
const buckets = new Map();
function rateLimit(key, limit = 5, windowMs = 60_000) {
    const now = Date.now();
    const arr = buckets.get(key) || [];
    const fresh = arr.filter((t)=>now - t < windowMs);
    if (fresh.length >= limit) {
        const retryAfterMs = windowMs - (now - fresh[0]);
        buckets.set(key, fresh);
        return {
            allowed: false,
            remaining: 0,
            retryAfterMs
        };
    }
    fresh.push(now);
    buckets.set(key, fresh);
    // Cheap periodic cleanup to avoid unbounded growth
    if (buckets.size > 5_000) {
        for (const [k, v] of buckets){
            if (v.every((t)=>now - t >= windowMs)) buckets.delete(k);
        }
    }
    return {
        allowed: true,
        remaining: limit - fresh.length,
        retryAfterMs: 0
    };
}
function getClientIp(req) {
    const xf = req.headers.get("x-forwarded-for") || "";
    const ip = xf.split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
    return ip;
}
}),
"[project]/app/api/bookings/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/email.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pricing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/admin-auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rate$2d$limit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rate-limit.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
function makeConfirmToken(bookingId) {
    const secret = process.env.DRIVER_CONFIRM_SECRET;
    if (!secret) throw new Error("DRIVER_CONFIRM_SECRET not configured");
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHmac"])("sha256", secret).update(bookingId).digest("hex").slice(0, 24);
}
function truncate(v, max = 200) {
    return String(v ?? "").slice(0, max);
}
function buildAdminMessage(booking, origin) {
    const shortId = booking.shortId;
    const whenText = booking.whenType === "scheduled" && booking.scheduledAt ? new Date(booking.scheduledAt).toLocaleString("de-CH", {
        dateStyle: "short",
        timeStyle: "short"
    }) : "Jetzt (sofort)";
    const priceText = booking.priceCHF != null ? `CHF ${Number(booking.priceCHF).toFixed(2)}` : "auf Anfrage";
    const distanceLine = booking.distanceKm != null ? `\nDistanz: ${booking.distanceKm} km` : "";
    const paymentLabel = {
        cash: "Bar",
        card: "Karte",
        twint: "TWINT"
    }[booking.paymentMethod] || booking.paymentMethod;
    const standortLine = booking.geo ? `\nStandort: https://maps.google.com/?q=${booking.geo.lat},${booking.geo.lng}` : "";
    const confirmLink = `${origin}/bestellung/${booking.id}/bestaetigen?token=${booking.confirmToken}`;
    return `Neue Bestellung\n` + `#${shortId}:\n` + `Name: ${booking.customerName}\n` + `Tel: ${booking.customerPhone}\n` + `Abholung: ${booking.pickupAddress}\n` + `Zeit: ${whenText}\n` + `Ziel: ${booking.destinationAddress}\n` + `Personen: ${booking.persons}\n` + `Preis: ${priceText}` + distanceLine + `\nZahlungsart: ${paymentLabel}` + standortLine + `\n\nBestellung bestätigen:\n${confirmLink}`;
}
function buildAdminEmailHtml(booking, origin) {
    // ALL user-controlled fields are HTML-escaped to prevent injection into
    // the admin's email client (e.g. spoofed links, hidden markup).
    const shortId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(booking.shortId);
    const whenText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(booking.whenType === "scheduled" && booking.scheduledAt ? new Date(booking.scheduledAt).toLocaleString("de-CH", {
        dateStyle: "short",
        timeStyle: "short"
    }) : "Jetzt (sofort)");
    const priceText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(booking.priceCHF != null ? `CHF ${Number(booking.priceCHF).toFixed(2)}` : "auf Anfrage");
    const paymentLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])({
        cash: "Bar",
        card: "Karte",
        twint: "TWINT"
    }[booking.paymentMethod] || booking.paymentMethod);
    const confirmLink = `${origin}/bestellung/${encodeURIComponent(booking.id)}/bestaetigen?token=${encodeURIComponent(booking.confirmToken)}`;
    const standortHtml = booking.geo && typeof booking.geo.lat === "number" && typeof booking.geo.lng === "number" ? `<tr><td style="padding:6px 0;color:#666">Standort:</td><td style="padding:6px 0"><a href="https://maps.google.com/?q=${booking.geo.lat},${booking.geo.lng}" style="color:#c9a34a">Karte öffnen</a></td></tr>` : "";
    const distanceHtml = booking.distanceKm != null ? `<tr><td style="padding:6px 0;color:#666">Distanz:</td><td style="padding:6px 0">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(booking.distanceKm)} km</td></tr>` : "";
    return `<!doctype html>
<html><body style="margin:0;padding:0;background:#0f0f10;font-family:Arial,Helvetica,sans-serif;color:#f5f5f5">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0f0f10;padding:24px 12px">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#1a1a1c;border:1px solid #2a2a2d;border-radius:12px;padding:28px">
        <tr><td>
          <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:4px;color:#c9a34a;text-transform:uppercase">Nova Taxi</p>
          <h1 style="margin:0 0 20px 0;font-size:22px;color:#fff">Neue Bestellung #${shortId}</h1>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;color:#e5e5e5">
            <tr><td style="padding:6px 0;color:#666;width:110px">Kunde:</td><td style="padding:6px 0"><strong>${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(booking.customerName)}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#666">Telefon:</td><td style="padding:6px 0"><a href="tel:${encodeURIComponent(booking.customerPhone)}" style="color:#c9a34a">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(booking.customerPhone)}</a></td></tr>
            <tr><td style="padding:6px 0;color:#666">Abholung:</td><td style="padding:6px 0">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(booking.pickupAddress)}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Ziel:</td><td style="padding:6px 0">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(booking.destinationAddress)}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Zeit:</td><td style="padding:6px 0">${whenText}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Personen:</td><td style="padding:6px 0">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(booking.persons)}</td></tr>
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
async function POST(req) {
    // SEC-003: rate-limit unauthenticated booking creation
    const ip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rate$2d$limit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClientIp"])(req);
    const rl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rate$2d$limit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimit"])(`bookings:${ip}`, 5, 60_000);
    if (!rl.allowed) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "too_many_requests"
        }, {
            status: 429,
            headers: {
                "retry-after": String(Math.ceil(rl.retryAfterMs / 1000))
            }
        });
    }
    try {
        const body = await req.json();
        const { pickupAddress, destinationAddress, whenType, scheduledAt, persons, customerName, customerPhone, paymentMethod, geo, lang } = body || {};
        if (!pickupAddress || !destinationAddress || !customerName || !customerPhone) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "missing_fields"
            }, {
                status: 400
            });
        }
        // SEC-005 / hardening: input length caps prevent oversized payloads
        const safePickup = truncate(pickupAddress, 300);
        const safeDest = truncate(destinationAddress, 300);
        const safeName = truncate(customerName, 120);
        const safePhone = truncate(customerPhone, 30);
        const safePayment = [
            "cash",
            "card",
            "twint"
        ].includes(paymentMethod) ? paymentMethod : "cash";
        const safeWhenType = whenType === "scheduled" ? "scheduled" : "now";
        const safePersons = Math.min(Math.max(Number(persons) || 1, 1), 8);
        const safeLang = [
            "de",
            "en"
        ].includes(lang) ? lang : "de";
        const safeGeo = geo && typeof geo.lat === "number" && typeof geo.lng === "number" ? {
            lat: geo.lat,
            lng: geo.lng
        } : null;
        // P3 hardening: recompute price server-side rather than trusting the
        // client. If Google is unavailable, leave price as null (admin decides).
        let priceCHF = null;
        let distanceKm = null;
        let distanceText = null;
        let durationText = null;
        try {
            const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchDistance"])(safePickup, safeDest);
            priceCHF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculatePrice"])(info.distanceMeters);
            distanceKm = +(info.distanceMeters / 1000).toFixed(2);
            distanceText = info.distanceText;
            durationText = info.durationText;
        } catch (err) {
            // Google API failure is non-fatal: we still accept the booking and
            // the admin can confirm the price by phone.
            console.warn("[bookings/create] price recompute failed:", err?.message);
        }
        const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
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
            confirmToken,
            createdAt: now.toISOString(),
            confirmedAt: null,
            adminNotification: {
                attempted: false,
                ok: false
            },
            adminEmailNotification: {
                attempted: false,
                ok: false
            }
        };
        const col = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBookingsCollection"])();
        await col.insertOne(booking);
        const origin = new URL(req.url).origin;
        // WhatsApp admin notification
        let adminNotification = {
            attempted: false,
            ok: false
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWhatsAppApiConfigured"])()) {
            adminNotification.attempted = true;
            try {
                const adminPhone = process.env.ADMIN_WHATSAPP_NUMBER || ("TURBOPACK compile-time value", "41766113131") || "41766113131";
                const message = buildAdminMessage(booking, origin);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendWhatsAppText"])(adminPhone, message);
                adminNotification = {
                    attempted: true,
                    ok: true,
                    wamid: result?.messages?.[0]?.id || null,
                    to: adminPhone
                };
            } catch (err) {
                console.error("[bookings/create] admin whatsapp send failed", err?.metaError || err?.message);
                adminNotification = {
                    attempted: true,
                    ok: false,
                    error: err?.metaError?.message || String(err?.message || err),
                    errorCode: err?.metaErrorCode ?? null
                };
            }
        }
        // Resend admin email
        let adminEmailNotification = {
            attempted: false,
            ok: false
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmailApiConfigured"])()) {
            adminEmailNotification.attempted = true;
            try {
                const adminEmail = process.env.ADMIN_EMAIL || "info@nova-taxi.com";
                const subject = `Neue Bestellung #${booking.shortId} – ${booking.customerName}`.slice(0, 200);
                const html = buildAdminEmailHtml(booking, origin);
                const text = buildAdminMessage(booking, origin);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                    to: adminEmail,
                    subject,
                    html,
                    text
                });
                adminEmailNotification = {
                    attempted: true,
                    ok: true,
                    id: result?.id || null,
                    to: adminEmail
                };
            } catch (err) {
                console.error("[bookings/create] admin email send failed", err?.resendError || err?.message);
                adminEmailNotification = {
                    attempted: true,
                    ok: false,
                    error: err?.resendError?.message || String(err?.message || err)
                };
            }
        }
        if (adminNotification.attempted || adminEmailNotification.attempted) {
            await col.updateOne({
                id
            }, {
                $set: {
                    adminNotification,
                    adminEmailNotification
                }
            }).catch(()=>{});
        }
        // SEC-001: DO NOT return confirmToken to the public client.
        // The token is only embedded in server-side admin notifications so that
        // only the admin (who receives them) can act on decision links.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            id,
            shortId: booking.shortId,
            status: booking.status,
            priceCHF: booking.priceCHF,
            distanceKm: booking.distanceKm,
            distanceText: booking.distanceText,
            durationText: booking.durationText,
            adminNotification: {
                attempted: adminNotification.attempted,
                ok: adminNotification.ok
            },
            adminEmailNotification: {
                attempted: adminEmailNotification.attempted,
                ok: adminEmailNotification.ok
            }
        }, {
            status: 201
        });
    } catch (err) {
        console.error("[bookings/create]", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "internal",
            detail: String(err?.message || err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7da4629a._.js.map