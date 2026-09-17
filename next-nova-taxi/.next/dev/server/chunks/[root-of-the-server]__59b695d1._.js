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
"[project]/app/api/whatsapp/webhook/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
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
;
;
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
function verifyMetaSignature(rawBody, signatureHeader) {
    const secret = process.env.WHATSAPP_APP_SECRET;
    if (!secret) {
        // If no secret configured, log a warning but accept the payload.
        // Setting WHATSAPP_APP_SECRET in prod hardens the endpoint against forgery.
        return {
            ok: true,
            verified: false
        };
    }
    if (!signatureHeader || !signatureHeader.startsWith("sha256=")) {
        return {
            ok: false,
            verified: false
        };
    }
    const provided = signatureHeader.slice(7);
    const expected = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHmac"])("sha256", secret).update(rawBody).digest("hex");
    try {
        const p = Buffer.from(provided, "hex");
        const e = Buffer.from(expected, "hex");
        if (p.length !== e.length) return {
            ok: false,
            verified: false
        };
        return {
            ok: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"])(p, e),
            verified: true
        };
    } catch  {
        return {
            ok: false,
            verified: false
        };
    }
}
async function GET(req) {
    const url = new URL(req.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");
    const expected = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN;
    if (mode === "subscribe" && token && expected && token === expected) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](challenge || "", {
            status: 200,
            headers: {
                "content-type": "text/plain"
            }
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "forbidden"
    }, {
        status: 403
    });
}
async function POST(req) {
    try {
        const raw = await req.text();
        const sigCheck = verifyMetaSignature(raw, req.headers.get("x-hub-signature-256"));
        if (!sigCheck.ok) {
            // Only reject when a secret is set and the signature is wrong.
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "invalid_signature"
            }, {
                status: 401
            });
        }
        const body = raw ? JSON.parse(raw) : {};
        // Structure: entry[].changes[].value.statuses[]
        const entries = Array.isArray(body?.entry) ? body.entry : [];
        const col = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBookingsCollection"])();
        const updates = [];
        for (const entry of entries){
            for (const change of entry.changes || []){
                const statuses = change?.value?.statuses || [];
                for (const s of statuses){
                    const wamid = s?.id;
                    const status = s?.status; // sent | delivered | read | failed
                    const timestamp = s?.timestamp ? new Date(Number(s.timestamp) * 1000).toISOString() : new Date().toISOString();
                    if (!wamid || !status) continue;
                    updates.push(col.updateOne({
                        "delivery.wamid": wamid
                    }, {
                        $set: {
                            "delivery.lastStatus": status,
                            "delivery.lastStatusAt": timestamp
                        },
                        $push: {
                            "delivery.history": {
                                status,
                                at: timestamp,
                                error: s?.errors?.[0]?.title || null
                            }
                        }
                    }));
                }
            }
        }
        if (updates.length) await Promise.all(updates);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            processed: updates.length
        });
    } catch (err) {
        console.error("[whatsapp/webhook]", err);
        // Return 200 to Meta so it doesn't retry aggressively; log server-side.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false
        }, {
            status: 200
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__59b695d1._.js.map