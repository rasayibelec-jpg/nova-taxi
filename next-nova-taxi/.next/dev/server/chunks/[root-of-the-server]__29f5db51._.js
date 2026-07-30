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
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
async function GET() {
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
            NEXT_PUBLIC_WHATSAPP_NUMBER_present: Boolean(whatsapp),
            NEXT_PUBLIC_WHATSAPP_NUMBER: whatsapp || null,
            NODE_ENV: ("TURBOPACK compile-time value", "development") || null,
            VERCEL_ENV: process.env.VERCEL_ENV || null,
            VERCEL_REGION: process.env.VERCEL_REGION || null
        },
        googleTest: null
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
        status: 200
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__29f5db51._.js.map