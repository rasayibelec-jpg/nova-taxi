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
"[project]/app/api/admin/bookings/[id]/decision/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.js [app-route] (ecmascript)");
;
;
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
function isAuthorized(req) {
    const expected = process.env.ADMIN_PASSWORD || "";
    if (!expected) return false;
    const auth = req.headers.get("x-admin-key") || "";
    return auth && auth === expected;
}
function normalizePhoneForWaLink(raw) {
    const digits = String(raw || "").replace(/\D/g, "");
    if (!digits) return "";
    return digits.startsWith("0") ? "41" + digits.substring(1) : digits;
}
function buildCustomerMessage(doc, action) {
    const shortId = String(doc.id).substring(0, 8).toUpperCase();
    const whenText = doc.whenType === "scheduled" && doc.scheduledAt ? new Date(doc.scheduledAt).toLocaleString("de-CH", {
        dateStyle: "short",
        timeStyle: "short"
    }) : "sofort";
    const priceText = doc.priceCHF != null ? `CHF ${Number(doc.priceCHF).toFixed(2)}` : "gemäss Taxameter";
    if (action === "accept") {
        return `Nova Taxi – Bestellung #${shortId} BESTÄTIGT ✅\n` + `Ihr Taxi kommt!\n\n` + `Abholung: ${doc.pickupAddress} (${whenText})\n` + `Ziel: ${doc.destinationAddress}\n` + `Personen: ${doc.persons}\n` + `Fahrpreis: ${priceText}\n\n` + `Bei Fragen: 076 611 31 31`;
    }
    return `Nova Taxi – Bestellung #${shortId}\n` + `Ihre Bestellung konnte leider nicht angenommen werden. Wir bitten um Verständnis.\n\n` + `Für Alternativen erreichen Sie uns unter 076 611 31 31.`;
}
async function POST(req, { params }) {
    if (!isAuthorized(req)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "unauthorized"
        }, {
            status: 401
        });
    }
    try {
        const { id } = await params;
        const body = await req.json().catch(()=>({}));
        const action = body?.action;
        if (![
            "accept",
            "reject"
        ].includes(action)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "invalid_action"
            }, {
                status: 400
            });
        }
        const col = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBookingsCollection"])();
        const doc = await col.findOne({
            id
        });
        if (!doc) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "not_found"
        }, {
            status: 404
        });
        // Idempotent: never process an already-decided booking twice
        if (doc.status === "confirmed" || doc.status === "rejected") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "already_processed",
                status: doc.status,
                alreadyProcessed: true
            }, {
                status: 409
            });
        }
        const nextStatus = action === "accept" ? "confirmed" : "rejected";
        const nowIso = new Date().toISOString();
        const message = buildCustomerMessage(doc, action);
        // Attempt to auto-send via WhatsApp Cloud API BEFORE marking the booking,
        // so a delivery failure doesn't leave the customer in the dark.
        let delivery = {
            attempted: false,
            ok: false
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWhatsAppApiConfigured"])()) {
            delivery.attempted = true;
            try {
                const templateName = process.env.WHATSAPP_TEMPLATE_NAME || null;
                const templateLang = process.env.WHATSAPP_TEMPLATE_LANGUAGE || "de";
                // Template fallback (in case 24h window has closed).
                // Template must be approved in WhatsApp Manager with 1 body parameter
                // matching the freeform message. If you don't have one, leave
                // WHATSAPP_TEMPLATE_NAME unset — we'll simply report the error.
                const fallback = templateName != null ? {
                    name: templateName,
                    language: templateLang,
                    params: [
                        message
                    ]
                } : null;
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendCustomerMessage"])(doc.customerPhone, message, fallback);
                delivery = {
                    attempted: true,
                    ok: true,
                    mode: result.mode,
                    wamid: result.wamid
                };
            } catch (err) {
                console.error("[admin/decision] whatsapp send failed", err?.metaError || err?.message);
                delivery = {
                    attempted: true,
                    ok: false,
                    error: err?.metaError?.message || String(err?.message || err),
                    errorCode: err?.metaErrorCode ?? null
                };
            }
        }
        // Persist status + delivery info regardless of send outcome (admin can retry manually)
        const update = action === "accept" ? {
            $set: {
                status: nextStatus,
                confirmedAt: nowIso,
                decidedAt: nowIso,
                delivery
            }
        } : {
            $set: {
                status: nextStatus,
                rejectedAt: nowIso,
                decidedAt: nowIso,
                delivery
            }
        };
        await col.updateOne({
            id
        }, update);
        // Provide a wa.me fallback URL so the admin can send manually if API failed
        // or not configured yet.
        const waPhone = normalizePhoneForWaLink(doc.customerPhone);
        const customerWhatsappUrl = waPhone ? `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}` : null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            id: doc.id,
            status: nextStatus,
            delivery,
            customerWhatsappUrl
        });
    } catch (err) {
        console.error("[admin/bookings/decision]", err);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__c22dc0ae._.js.map