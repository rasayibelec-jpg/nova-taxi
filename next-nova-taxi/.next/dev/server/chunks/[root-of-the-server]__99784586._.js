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
"[project]/app/api/admin/bookings/export/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.js [app-route] (ecmascript)");
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
function isAuthorized(req) {
    const expected = process.env.ADMIN_PASSWORD || "";
    if (!expected) return false;
    // Support key both as header (fetch) and query param (direct browser download)
    const url = new URL(req.url);
    const qKey = url.searchParams.get("key") || "";
    const hKey = req.headers.get("x-admin-key") || "";
    const provided = hKey || qKey;
    return provided && provided === expected;
}
function csvEscape(v) {
    if (v == null) return "";
    const s = String(v).replace(/"/g, '""').replace(/\r?\n/g, " ");
    return /[",;\n]/.test(s) ? `"${s}"` : s;
}
async function GET(req) {
    if (!isAuthorized(req)) {
        return new Response(JSON.stringify({
            error: "unauthorized"
        }), {
            status: 401,
            headers: {
                "content-type": "application/json"
            }
        });
    }
    try {
        const url = new URL(req.url);
        const from = url.searchParams.get("from"); // ISO date YYYY-MM-DD
        const to = url.searchParams.get("to");
        const status = url.searchParams.get("status"); // pending|confirmed|rejected|all
        const query = {};
        if (from || to) {
            query.createdAt = {};
            if (from) query.createdAt.$gte = new Date(from + "T00:00:00Z").toISOString();
            if (to) query.createdAt.$lt = new Date(new Date(to + "T00:00:00Z").getTime() + 86400000).toISOString();
        }
        if (status && status !== "all") {
            query.status = status;
        }
        const col = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBookingsCollection"])();
        const docs = await col.find(query, {
            projection: {
                _id: 0,
                confirmToken: 0
            }
        }).sort({
            createdAt: -1
        }).limit(5000).toArray();
        const headers = [
            "shortId",
            "createdAt",
            "status",
            "customerName",
            "customerPhone",
            "pickupAddress",
            "destinationAddress",
            "whenType",
            "scheduledAt",
            "persons",
            "paymentMethod",
            "priceCHF",
            "distanceKm",
            "adminNote",
            "confirmedAt",
            "rejectedAt"
        ];
        const lines = [
            headers.join(";")
        ];
        for (const b of docs){
            lines.push(headers.map((h)=>{
                let v = b[h];
                if (h === "createdAt" || h === "confirmedAt" || h === "rejectedAt" || h === "scheduledAt") {
                    v = v ? new Date(v).toLocaleString("de-CH") : "";
                }
                return csvEscape(v);
            }).join(";"));
        }
        // BOM so Excel opens Umlauts correctly
        const csv = "\uFEFF" + lines.join("\r\n");
        const fname = `nova-taxi-bookings-${new Date().toISOString().slice(0, 10)}.csv`;
        return new Response(csv, {
            status: 200,
            headers: {
                "content-type": "text/csv; charset=utf-8",
                "content-disposition": `attachment; filename="${fname}"`,
                "cache-control": "no-store"
            }
        });
    } catch (err) {
        console.error("[admin/export]", err);
        return new Response(JSON.stringify({
            error: "internal",
            detail: String(err?.message || err)
        }), {
            status: 500,
            headers: {
                "content-type": "application/json"
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__99784586._.js.map