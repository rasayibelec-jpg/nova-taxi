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
"[project]/app/api/pricing/diag/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/admin-auth.js [app-route] (ecmascript)");
;
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
async function GET(req) {
    const expected = process.env.ADMIN_PASSWORD || "";
    const url = new URL(req.url);
    const provided = req.headers.get("x-admin-key") || url.searchParams.get("key") || "";
    if (!expected || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timingSafeEq"])(provided, expected)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "unauthorized"
        }, {
            status: 401
        });
    }
    const serverKey = process.env.GOOGLE_MAPS_API_KEY || "";
    const publicKey = ("TURBOPACK compile-time value", "AIzaSyAR5af36hrIBOOBP5lIjXYLqtngK2mmkXU") || "";
    const mongo = process.env.MONGO_URL || "";
    const whatsapp = ("TURBOPACK compile-time value", "41766113131") || "";
    const result = {
        env: {
            GOOGLE_MAPS_API_KEY_present: Boolean(serverKey),
            GOOGLE_MAPS_API_KEY_length: serverKey.length,
            GOOGLE_MAPS_API_KEY_last4: serverKey ? serverKey.slice(-4) : null,
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_present: Boolean(publicKey),
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_length: publicKey.length,
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_last4: ("TURBOPACK compile-time truthy", 1) ? publicKey.slice(-4) : "TURBOPACK unreachable",
            MONGO_URL_present: Boolean(mongo),
            DB_NAME_present: Boolean(process.env.DB_NAME),
            DB_NAME: process.env.DB_NAME || null,
            ADMIN_PASSWORD_present: Boolean(process.env.ADMIN_PASSWORD),
            DRIVER_CONFIRM_SECRET_present: Boolean(process.env.DRIVER_CONFIRM_SECRET),
            WHATSAPP_API_TOKEN_present: Boolean(process.env.WHATSAPP_API_TOKEN),
            WHATSAPP_PHONE_NUMBER_ID_present: Boolean(process.env.WHATSAPP_PHONE_NUMBER_ID),
            WHATSAPP_PHONE_NUMBER_ID: process.env.WHATSAPP_PHONE_NUMBER_ID || null,
            WHATSAPP_BUSINESS_ACCOUNT_ID_present: Boolean(process.env.WHATSAPP_BUSINESS_ACCOUNT_ID),
            WHATSAPP_TEMPLATE_NAME: process.env.WHATSAPP_TEMPLATE_NAME || null,
            WHATSAPP_TEMPLATE_LANGUAGE: process.env.WHATSAPP_TEMPLATE_LANGUAGE || null,
            ADMIN_WHATSAPP_NUMBER: process.env.ADMIN_WHATSAPP_NUMBER || null,
            RESEND_API_KEY_present: Boolean(process.env.RESEND_API_KEY),
            SENDER_EMAIL: process.env.SENDER_EMAIL || null,
            ADMIN_EMAIL: process.env.ADMIN_EMAIL || null,
            NEXT_PUBLIC_WHATSAPP_NUMBER_present: Boolean(whatsapp),
            NEXT_PUBLIC_WHATSAPP_NUMBER: whatsapp || null,
            NODE_ENV: ("TURBOPACK compile-time value", "development") || null,
            VERCEL_ENV: process.env.VERCEL_ENV || null,
            VERCEL_REGION: process.env.VERCEL_REGION || null
        },
        googleTest: null,
        mongoTest: null
    };
    // Perform a live Distance Matrix probe if the server key is set
    if (serverKey) {
        try {
            const url = new URL("https://maps.googleapis.com/maps/api/distancematrix/json");
            url.searchParams.set("origins", "Zürich HB");
            url.searchParams.set("destinations", "Flughafen Zürich");
            url.searchParams.set("mode", "driving");
            url.searchParams.set("region", "ch");
            url.searchParams.set("language", "de");
            url.searchParams.set("key", serverKey);
            const res = await fetch(url.toString(), {
                cache: "no-store"
            });
            const data = await res.json();
            result.googleTest = {
                httpStatus: res.status,
                status: data?.status || null,
                error_message: data?.error_message || null,
                firstElementStatus: data?.rows?.[0]?.elements?.[0]?.status || null,
                distanceText: data?.rows?.[0]?.elements?.[0]?.distance?.text || null
            };
        } catch (err) {
            result.googleTest = {
                error: String(err?.message || err)
            };
        }
    }
    // Live MongoDB probe
    if (mongo && process.env.DB_NAME) {
        try {
            const { getBookingsCollection } = await __turbopack_context__.A("[project]/lib/mongodb.js [app-route] (ecmascript, async loader)");
            const col = await getBookingsCollection();
            const count = await col.countDocuments({});
            result.mongoTest = {
                ok: true,
                bookingsCount: count
            };
        } catch (err) {
            result.mongoTest = {
                ok: false,
                error: String(err?.message || err)
            };
        }
    } else {
        result.mongoTest = {
            ok: false,
            error: "MONGO_URL or DB_NAME missing"
        };
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
        status: 200
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2a26af97._.js.map