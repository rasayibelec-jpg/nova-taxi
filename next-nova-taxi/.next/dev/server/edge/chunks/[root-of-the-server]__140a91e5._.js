(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__140a91e5._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
const locales = [
    'de',
    'en'
];
const defaultLocale = 'de';
function getLocale(request) {
    // Check if there's a locale in the pathname
    const pathname = request.nextUrl.pathname;
    const pathnameLocale = locales.find((locale)=>pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
    if (pathnameLocale) return pathnameLocale;
    // Check Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
        const preferredLocale = acceptLanguage.split(',').map((lang)=>lang.split(';')[0].trim().substring(0, 2)).find((lang)=>locales.includes(lang));
        if (preferredLocale) return preferredLocale;
    }
    return defaultLocale;
}
function middleware(request) {
    const pathname = request.nextUrl.pathname;
    // Skip middleware for static files, API routes, and Next.js internals
    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith('/static') || pathname.includes('.') || pathname === '/robots.txt' || pathname === '/sitemap.xml') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Check if the pathname already has a locale
    const pathnameHasLocale = locales.some((locale)=>pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
    if (pathnameHasLocale) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // For default locale (de), don't redirect - serve directly
    // This keeps German URLs clean without /de/ prefix
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        // Skip all internal paths (_next, api)
        '/((?!_next|api|static|.*\\..*).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__140a91e5._.js.map