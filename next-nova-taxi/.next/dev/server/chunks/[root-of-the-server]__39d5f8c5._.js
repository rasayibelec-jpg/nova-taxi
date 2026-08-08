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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/app/api/bookings/[id]/decision/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
function verifyToken(bookingId, token) {
    const secret = process.env.DRIVER_CONFIRM_SECRET || "dev-secret";
    const expected = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHmac"])("sha256", secret).update(bookingId).digest("hex").slice(0, 24);
    if (!token || token.length !== expected.length) return false;
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"])(Buffer.from(expected), Buffer.from(token));
}
function normalizePhone(raw) {
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
    try {
        const { id } = await params;
        const url = new URL(req.url);
        const token = url.searchParams.get("token") || "";
        if (!verifyToken(id, token)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "invalid_token"
            }, {
                status: 401
            });
        }
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
        if (doc.status === "confirmed" || doc.status === "rejected") {
            // Idempotent: return WhatsApp URL for the existing state so driver can still send.
            const message = buildCustomerMessage(doc, doc.status === "confirmed" ? "accept" : "reject");
            const waPhone = normalizePhone(doc.customerPhone);
            const customerWhatsappUrl = waPhone ? `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}` : null;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                id: doc.id,
                status: doc.status,
                customerWhatsappUrl,
                alreadyProcessed: true
            }, {
                status: 200
            });
        }
        const nextStatus = action === "accept" ? "confirmed" : "rejected";
        const nowIso = new Date().toISOString();
        const update = action === "accept" ? {
            $set: {
                status: nextStatus,
                confirmedAt: nowIso,
                decidedAt: nowIso
            }
        } : {
            $set: {
                status: nextStatus,
                rejectedAt: nowIso,
                decidedAt: nowIso
            }
        };
        await col.updateOne({
            id
        }, update);
        const message = buildCustomerMessage(doc, action);
        const waPhone = normalizePhone(doc.customerPhone);
        const customerWhatsappUrl = waPhone ? `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}` : null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            id: doc.id,
            status: nextStatus,
            customerWhatsappUrl,
            customerPhone: doc.customerPhone
        });
    } catch (err) {
        console.error("[bookings/decision]", err);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__39d5f8c5._.js.map