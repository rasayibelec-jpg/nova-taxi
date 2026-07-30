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
"[project]/app/api/pricing/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pricing.js [app-route] (ecmascript)");
;
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
async function POST(req) {
    try {
        const { origin, destination } = await req.json();
        if (!origin || !destination) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "origin_destination_required"
            }, {
                status: 400
            });
        }
        const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchDistance"])(origin, destination);
        const price = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculatePrice"])(info.distanceMeters);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            priceCHF: price,
            distanceKm: +(info.distanceMeters / 1000).toFixed(2),
            distanceText: info.distanceText,
            durationText: info.durationText
        });
    } catch (err) {
        console.error("[pricing]", err?.code, err?.message, err?.googleMessage);
        const code = err?.code || "UNAVAILABLE";
        // Map real Google statuses to actionable UI errors
        if (code === "KEY_MISSING") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "key_missing",
                detail: "GOOGLE_MAPS_API_KEY environment variable is not set on the server."
            }, {
                status: 500
            });
        }
        if (code === "REQUEST_DENIED") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "key_denied",
                detail: err?.googleMessage || "Google denied the request. Check the API key restrictions (referer/IP) and ensure the Distance Matrix API is enabled."
            }, {
                status: 502
            });
        }
        if (code === "OVER_QUERY_LIMIT" || code === "OVER_DAILY_LIMIT") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "quota_exceeded",
                detail: err?.googleMessage || null
            }, {
                status: 429
            });
        }
        if (code === "NOT_FOUND" || code === "ZERO_RESULTS") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "address_not_found"
            }, {
                status: 422
            });
        }
        if (code === "INVALID_REQUEST") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "invalid_request",
                detail: err?.googleMessage || null
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "unavailable",
            detail: String(err?.message || "")
        }, {
            status: 502
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__98a4dd6a._.js.map