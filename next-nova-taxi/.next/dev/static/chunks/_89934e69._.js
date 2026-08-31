(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/LanguageSwitcher.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LanguageSwitcher({ currentLocale }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Get the path without locale prefix
    const getPathWithoutLocale = ()=>{
        if (pathname.startsWith('/en/')) {
            return pathname.substring(3);
        } else if (pathname === '/en') {
            return '/';
        }
        return pathname;
    };
    const pathWithoutLocale = getPathWithoutLocale();
    // Generate links for each language
    const deLink = pathWithoutLocale === '/' ? '/' : pathWithoutLocale;
    const enLink = pathWithoutLocale === '/' ? '/en' : `/en${pathWithoutLocale}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: deLink,
                className: `px-2 py-1 rounded transition-colors ${currentLocale === 'de' ? 'bg-nova-gold text-black font-semibold' : 'text-gray-300 hover:text-white border border-white/20 hover:border-white/40'}`,
                children: "DE"
            }, void 0, false, {
                fileName: "[project]/components/layout/LanguageSwitcher.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: enLink,
                className: `px-2 py-1 rounded transition-colors ${currentLocale === 'en' ? 'bg-nova-gold text-black font-semibold' : 'text-gray-300 hover:text-white border border-white/20 hover:border-white/40'}`,
                children: "EN"
            }, void 0, false, {
                fileName: "[project]/components/layout/LanguageSwitcher.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/LanguageSwitcher.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/booking/AddressAutocomplete.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddressAutocomplete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AddressAutocomplete({ value, onChange, placeholder, testId }) {
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddressAutocomplete.useEffect": ()=>{
            const key = ("TURBOPACK compile-time value", "AIzaSyAR5af36hrIBOOBP5lIjXYLqtngK2mmkXU");
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.google?.maps?.places) {
                setLoaded(true);
                return;
            }
            const existing = document.getElementById("google-maps-places-script");
            if (existing) {
                existing.addEventListener("load", {
                    "AddressAutocomplete.useEffect": ()=>setLoaded(true)
                }["AddressAutocomplete.useEffect"]);
                return;
            }
            const script = document.createElement("script");
            script.id = "google-maps-places-script";
            script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&language=de&region=CH`;
            script.async = true;
            script.defer = true;
            script.onload = ({
                "AddressAutocomplete.useEffect": ()=>setLoaded(true)
            })["AddressAutocomplete.useEffect"];
            document.head.appendChild(script);
        }
    }["AddressAutocomplete.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddressAutocomplete.useEffect": ()=>{
            if (!loaded || !inputRef.current) return;
            const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
                componentRestrictions: {
                    country: [
                        "ch",
                        "de",
                        "at",
                        "li"
                    ]
                },
                fields: [
                    "formatted_address",
                    "name",
                    "geometry"
                ],
                types: [
                    "geocode",
                    "establishment"
                ]
            });
            const listener = ac.addListener("place_changed", {
                "AddressAutocomplete.useEffect.listener": ()=>{
                    const place = ac.getPlace();
                    const label = place.formatted_address || place.name || inputRef.current.value;
                    if (label) onChange(label);
                }
            }["AddressAutocomplete.useEffect.listener"]);
            return ({
                "AddressAutocomplete.useEffect": ()=>window.google?.maps?.event?.removeListener?.(listener)
            })["AddressAutocomplete.useEffect"];
        }
    }["AddressAutocomplete.useEffect"], [
        loaded,
        onChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ref: inputRef,
        type: "text",
        value: value,
        onChange: (e)=>onChange(e.target.value),
        placeholder: placeholder,
        "data-testid": testId,
        className: "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-gray-500 focus:border-nova-gold focus:outline-none focus:ring-2 focus:ring-nova-gold/30",
        style: {
            color: "#000000",
            backgroundColor: "#FFFFFF"
        },
        autoComplete: "off"
    }, void 0, false, {
        fileName: "[project]/components/booking/AddressAutocomplete.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(AddressAutocomplete, "4EMKjT+UBtbIsWXUgi5StOpVVpg=");
_c = AddressAutocomplete;
var _c;
__turbopack_context__.k.register(_c, "AddressAutocomplete");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/booking/BookingModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$AddressAutocomplete$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/booking/AddressAutocomplete.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const inputBase = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-gray-500 focus:border-nova-gold focus:outline-none focus:ring-2 focus:ring-nova-gold/30";
const inputStyle = {
    color: "#000000",
    backgroundColor: "#FFFFFF"
};
function BookingModal({ open, onClose, prefillPickup, prefillDestination }) {
    _s();
    const [pickup, setPickup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [destination, setDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [whenType, setWhenType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("now");
    const [scheduledAt, setScheduledAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [persons, setPersons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [payment, setPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cash");
    const [priceInfo, setPriceInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [priceLoading, setPriceLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [priceError, setPriceError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingModal.useEffect": ()=>{
            if (open) {
                if (prefillPickup) setPickup(prefillPickup);
                if (prefillDestination) setDestination(prefillDestination);
            }
        }
    }["BookingModal.useEffect"], [
        open,
        prefillPickup,
        prefillDestination
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingModal.useEffect": ()=>{
            if (!pickup || !destination || pickup.length < 3 || destination.length < 3) {
                setPriceInfo(null);
                setPriceError(null);
                return;
            }
            const ac = new AbortController();
            const timer = setTimeout({
                "BookingModal.useEffect.timer": async ()=>{
                    setPriceLoading(true);
                    setPriceError(null);
                    try {
                        const res = await fetch("/api/pricing", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                origin: pickup,
                                destination
                            }),
                            signal: ac.signal
                        });
                        const data = await res.json().catch({
                            "BookingModal.useEffect.timer": ()=>({})
                        }["BookingModal.useEffect.timer"]);
                        if (!res.ok) {
                            setPriceError({
                                code: data?.error || `http_${res.status}`,
                                detail: data?.detail || null
                            });
                            setPriceInfo(null);
                        } else {
                            setPriceInfo(data);
                        }
                    } catch (e) {
                        if (e?.name === "AbortError") return;
                        setPriceError({
                            code: "network",
                            detail: String(e?.message || "")
                        });
                        setPriceInfo(null);
                    } finally{
                        setPriceLoading(false);
                    }
                }
            }["BookingModal.useEffect.timer"], 600);
            return ({
                "BookingModal.useEffect": ()=>{
                    clearTimeout(timer);
                    ac.abort();
                }
            })["BookingModal.useEffect"];
        }
    }["BookingModal.useEffect"], [
        pickup,
        destination
    ]);
    const getGeoOnce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BookingModal.useCallback[getGeoOnce]": ()=>{
            return new Promise({
                "BookingModal.useCallback[getGeoOnce]": (resolve)=>{
                    if (!navigator.geolocation) return resolve(null);
                    navigator.geolocation.getCurrentPosition({
                        "BookingModal.useCallback[getGeoOnce]": (pos)=>resolve({
                                lat: pos.coords.latitude,
                                lng: pos.coords.longitude
                            })
                    }["BookingModal.useCallback[getGeoOnce]"], {
                        "BookingModal.useCallback[getGeoOnce]": ()=>resolve(null)
                    }["BookingModal.useCallback[getGeoOnce]"], {
                        enableHighAccuracy: true,
                        timeout: 6000,
                        maximumAge: 0
                    });
                }
            }["BookingModal.useCallback[getGeoOnce]"]);
        }
    }["BookingModal.useCallback[getGeoOnce]"], []);
    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);
        setSubmitError(null);
        if (!pickup || !destination || !name || !phone) {
            setSubmitError("Bitte füllen Sie alle Pflichtfelder aus.");
            setSubmitting(false);
            return;
        }
        const geo = await getGeoOnce();
        let bookingId = null;
        let confirmToken = null;
        try {
            const ac = new AbortController();
            const timer = setTimeout(()=>ac.abort(), 8000);
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                signal: ac.signal,
                body: JSON.stringify({
                    pickupAddress: pickup,
                    destinationAddress: destination,
                    whenType,
                    scheduledAt: whenType === "scheduled" ? scheduledAt : null,
                    persons,
                    customerName: name,
                    customerPhone: phone,
                    paymentMethod: payment,
                    priceCHF: priceInfo?.priceCHF ?? null,
                    distanceKm: priceInfo?.distanceKm ?? null,
                    geo,
                    lang: "de"
                })
            });
            clearTimeout(timer);
            if (res.ok) {
                const data = await res.json();
                bookingId = data.id;
                confirmToken = data.confirmToken;
            }
        } catch  {
        // Silent — WhatsApp fallback below still works.
        }
        const paymentLabel = {
            cash: "Bar",
            card: "Karte",
            twint: "TWINT"
        }[payment];
        const whenText = whenType === "scheduled" && scheduledAt ? new Date(scheduledAt).toLocaleString("de-CH", {
            dateStyle: "short",
            timeStyle: "short"
        }) : "Jetzt (sofort)";
        const priceText = priceInfo ? `CHF ${priceInfo.priceCHF.toFixed(2)}` : "auf Anfrage";
        const distanceLine = priceInfo && priceInfo.distanceKm != null ? `\nDistanz: ${priceInfo.distanceKm} km` : "";
        const standortLine = geo ? `\nStandort: https://maps.google.com/?q=${geo.lat},${geo.lng}` : "";
        const shortId = bookingId ? String(bookingId).substring(0, 8).toUpperCase() : null;
        const confirmLine = bookingId && confirmToken ? `\n\nBestellung bestätigen:\n${window.location.origin}/bestellung/${bookingId}/bestaetigen?token=${confirmToken}` : "";
        const idLine = shortId ? `Neue Bestellung\n#${shortId}:` : `Neue Bestellung:`;
        const msg = `${idLine}\n` + `Name: ${name}\n` + `Tel: ${phone}\n` + `Abholung: ${pickup}\n` + `Zeit: ${whenText}\n` + `Ziel: ${destination}\n` + `Personen: ${persons}\n` + `Preis: ${priceText}` + distanceLine + `\nZahlungsart: ${paymentLabel}` + standortLine + confirmLine;
        const wa = ("TURBOPACK compile-time value", "41766113131") || "41766113131";
        const whatsappUrl = `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`;
        setResult({
            id: bookingId,
            shortId,
            whatsappUrl
        });
        try {
            const w = window.open(whatsappUrl, "_blank");
            if (!w || w.closed) window.location.href = whatsappUrl;
        } catch  {
            window.location.href = whatsappUrl;
        }
        setSubmitting(false);
    }
    function resetAndClose() {
        setResult(null);
        setSubmitError(null);
        onClose();
    }
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur px-4 py-6 overflow-y-auto",
        onClick: resetAndClose,
        "data-testid": "booking-modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-lg rounded-2xl bg-white shadow-2xl p-6 md:p-8 my-8",
            onClick: (e)=>e.stopPropagation(),
            style: {
                color: "#000000"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: resetAndClose,
                    className: "absolute right-4 top-4 h-9 w-9 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200",
                    "aria-label": "Schliessen",
                    "data-testid": "booking-modal-close",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/components/booking/BookingModal.jsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-black",
                            children: result.shortId ? `Bestellung #${result.shortId} angefragt` : "Bestellung angefragt"
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-700",
                            children: [
                                "Ihre Bestellung ist erst ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "bestätigt"
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 216,
                                    columnNumber: 40
                                }, this),
                                ", sobald wir uns bei Ihnen melden. Bitte tippen Sie unten auf ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: '„WhatsApp öffnen"'
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 217,
                                    columnNumber: 42
                                }, this),
                                " und senden Sie die Nachricht ab."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: result.whatsappUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-block w-full rounded-full bg-emerald-500 px-6 py-4 text-base font-semibold text-white hover:bg-emerald-600",
                            "data-testid": "booking-whatsapp-open",
                            children: "WhatsApp öffnen und senden"
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this),
                        result.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `/bestellung/${result.id}`,
                            className: "inline-block rounded-full bg-nova-gold px-6 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft",
                            "data-testid": "booking-status-link",
                            children: "Bestellstatus prüfen"
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 229,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: resetAndClose,
                            className: "block w-full text-sm text-gray-500 hover:text-gray-800 pt-2",
                            children: "Schliessen"
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/booking/BookingModal.jsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl md:text-2xl font-semibold text-black",
                            children: "Online Taxi bestellen"
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: "Fahrt in wenigen Sekunden anfragen. Bezahlung im Fahrzeug – keine Kartendaten nötig."
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-black",
                                    children: "Abholadresse"
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$AddressAutocomplete$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: pickup,
                                    onChange: setPickup,
                                    placeholder: "z.B. Bahnhof Luzern",
                                    testId: "booking-pickup-input"
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-black",
                                    children: "Zieladresse"
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$AddressAutocomplete$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: destination,
                                    onChange: setDestination,
                                    placeholder: "z.B. Flughafen Zürich",
                                    testId: "booking-destination-input"
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-black",
                                            children: "Wann?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: whenType,
                                            onChange: (e)=>setWhenType(e.target.value),
                                            className: inputBase,
                                            style: inputStyle,
                                            "data-testid": "booking-when-select",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "now",
                                                    children: "Jetzt"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "scheduled",
                                                    children: "Termin wählen"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                                    lineNumber: 267,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-black",
                                            children: "Personen"
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: persons,
                                            onChange: (e)=>setPersons(Number(e.target.value)),
                                            className: inputBase,
                                            style: inputStyle,
                                            "data-testid": "booking-persons-select",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6,
                                                7,
                                                8
                                            ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: n,
                                                    children: n
                                                }, n, false, {
                                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                                    lineNumber: 273,
                                                    columnNumber: 57
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this),
                        whenType === "scheduled" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-black",
                                    children: "Datum & Uhrzeit"
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "datetime-local",
                                    value: scheduledAt,
                                    onChange: (e)=>setScheduledAt(e.target.value),
                                    className: inputBase,
                                    style: inputStyle,
                                    "data-testid": "booking-scheduled-input",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 279,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-black",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            className: inputBase,
                                            style: inputStyle,
                                            "data-testid": "booking-name-input",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-black",
                                            children: "Telefon"
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            value: phone,
                                            onChange: (e)=>setPhone(e.target.value),
                                            className: inputBase,
                                            style: inputStyle,
                                            placeholder: "076 611 31 31",
                                            "data-testid": "booking-phone-input",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 292,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-black",
                                    children: "Zahlungsart (im Fahrzeug)"
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: payment,
                                    onChange: (e)=>setPayment(e.target.value),
                                    className: inputBase,
                                    style: inputStyle,
                                    "data-testid": "booking-payment-select",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "cash",
                                            children: "Bar"
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "card",
                                            children: "Karte"
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "twint",
                                            children: "TWINT"
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-nova-gold/10 border border-nova-gold/40 p-4 text-black",
                            children: [
                                priceLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    "data-testid": "booking-price-loading",
                                    children: "Preis wird berechnet…"
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 306,
                                    columnNumber: 32
                                }, this),
                                priceError && !priceLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-amber-900",
                                    "data-testid": "booking-price-error",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold",
                                            children: priceError.code === "address_not_found" ? "Adresse konnte nicht gefunden werden." : priceError.code === "key_missing" ? "Preisrechner nicht konfiguriert (Serverschlüssel fehlt)." : priceError.code === "key_denied" ? "Preisrechner momentan gesperrt (API-Schlüssel abgelehnt)." : priceError.code === "quota_exceeded" ? "Preisrechner-Kontingent erschöpft." : priceError.code === "invalid_request" ? "Adresse ungültig – bitte präzisieren." : "Preis wird nach Anfrage bestätigt (Fahrpreis-Berechnung derzeit nicht verfügbar)."
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 309,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-amber-800 mt-1",
                                            children: "Ihre Bestellung kann trotzdem gesendet werden. Der Preis wird telefonisch bestätigt."
                                        }, void 0, false, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 322,
                                            columnNumber: 19
                                        }, this),
                                        priceError.detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-amber-700/80 mt-2 break-words",
                                            "data-testid": "booking-price-error-detail",
                                            children: [
                                                "Debug: ",
                                                priceError.detail
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 326,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 308,
                                    columnNumber: 17
                                }, this),
                                priceInfo && !priceLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between font-semibold text-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Fahrpreis"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                                    lineNumber: 335,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-testid": "booking-price-display",
                                                    children: [
                                                        "CHF ",
                                                        priceInfo.priceCHF.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 334,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-700 text-xs mt-1",
                                            children: [
                                                "≈ ",
                                                priceInfo.distanceText,
                                                " · ",
                                                priceInfo.durationText
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/booking/BookingModal.jsx",
                                            lineNumber: 338,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 333,
                                    columnNumber: 17
                                }, this),
                                !priceLoading && !priceError && !priceInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-700",
                                    children: "Preis erscheint automatisch, sobald Sie beide Adressen eingegeben haben."
                                }, void 0, false, {
                                    fileName: "[project]/components/booking/BookingModal.jsx",
                                    lineNumber: 342,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-700",
                            "data-testid": "booking-error",
                            children: submitError
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 347,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: submitting,
                            className: "w-full rounded-full bg-nova-gold px-6 py-4 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors disabled:opacity-50",
                            "data-testid": "booking-submit-button",
                            children: submitting ? "Wird gesendet…" : "Bestellung senden (per WhatsApp)"
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-gray-500 text-center",
                            children: "Beim Absenden wird einmalig Ihr Standort abgefragt – nur mit Ihrer Zustimmung."
                        }, void 0, false, {
                            fileName: "[project]/components/booking/BookingModal.jsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/booking/BookingModal.jsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/booking/BookingModal.jsx",
            lineNumber: 192,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/booking/BookingModal.jsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(BookingModal, "Dz4MDM8bqyXq/2qtJmGPUnylx/E=");
_c = BookingModal;
var _c;
__turbopack_context__.k.register(_c, "BookingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/booking/BookingProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingProvider",
    ()=>BookingProvider,
    "useBooking",
    ()=>useBooking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/booking/BookingModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const BookingCtx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function BookingProvider({ children }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prefillPickup, setPrefillPickup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [prefillDestination, setPrefillDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const openBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BookingProvider.useCallback[openBooking]": (opts = {})=>{
            setPrefillPickup(opts.pickup || "");
            setPrefillDestination(opts.destination || "");
            setOpen(true);
        }
    }["BookingProvider.useCallback[openBooking]"], []);
    const closeBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BookingProvider.useCallback[closeBooking]": ()=>setOpen(false)
    }["BookingProvider.useCallback[closeBooking]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingCtx.Provider, {
        value: {
            open,
            openBooking,
            closeBooking
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: closeBooking,
                prefillPickup: prefillPickup,
                prefillDestination: prefillDestination
            }, void 0, false, {
                fileName: "[project]/components/booking/BookingProvider.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/booking/BookingProvider.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(BookingProvider, "nWa9q8IfLdOmYnQ8cAECkAO1nmI=");
_c = BookingProvider;
function useBooking() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BookingCtx);
    if (!ctx) throw new Error("useBooking must be used within BookingProvider");
    return ctx;
}
_s1(useBooking, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "BookingProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/booking/BookingButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/booking/BookingProvider.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BookingButton({ label = "Online Taxi bestellen", variant = "primary", prefillPickup, prefillDestination, className = "", testId = "booking-open-button" }) {
    _s();
    const { openBooking } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBooking"])();
    const base = variant === "compact" ? "rounded-full bg-nova-gold px-5 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors min-h-[44px] inline-flex items-center" : "inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black shadow-lg shadow-yellow-500/20 hover:bg-nova-gold-soft transition-colors min-h-[48px]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>openBooking({
                pickup: prefillPickup,
                destination: prefillDestination
            }),
        className: `${base} ${className}`.trim(),
        "data-testid": testId,
        children: label
    }, void 0, false, {
        fileName: "[project]/components/booking/BookingButton.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(BookingButton, "OFULVyfCERgj2jEhYXf2Mo9fXRI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBooking"]
    ];
});
_c = BookingButton;
var _c;
__turbopack_context__.k.register(_c, "BookingButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$LanguageSwitcher$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/LanguageSwitcher.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/booking/BookingButton.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const mainNavItems = [
    {
        href: "/",
        label: "Startseite"
    },
    {
        href: "#services",
        label: "Dienstleistungen"
    },
    {
        href: "/flughafentransfer",
        label: "Flughafentransfer"
    },
    {
        href: "/business",
        label: "Business"
    },
    {
        href: "/kurierfahrten",
        label: "Kurierfahrten"
    },
    {
        href: "/preise",
        label: "Preise"
    },
    {
        href: "/galerie",
        label: "Galerie"
    },
    {
        href: "/ueber-uns",
        label: "Über uns"
    },
    {
        href: "/kontakt",
        label: "Kontakt"
    }
];
const serviceAreaItems = [
    {
        href: "/ort/arth-goldau",
        label: "Arth-Goldau"
    },
    {
        href: "/ort/luzern",
        label: "Luzern"
    },
    {
        href: "/ort/zug",
        label: "Zug"
    },
    {
        href: "/ort/weggis",
        label: "Weggis"
    },
    {
        href: "/ort/vitznau",
        label: "Vitznau"
    },
    {
        href: "/ort/schwyz",
        label: "Schwyz"
    }
];
function Header() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>{
                    setIsScrolled(window.scrollY > 10);
                }
            }["Header.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `sticky top-0 z-30 transition-colors border-b border-transparent ${isScrolled ? "bg-black/80 border-white/5 backdrop-blur" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container flex items-center justify-between py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-12 w-32 md:h-14 md:w-40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/eb2153av_Screenshot_20251016_185940_WhatsApp.jpg",
                                alt: "Nova Taxi Logo",
                                fill: true,
                                className: "object-contain",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-5 text-sm text-gray-200",
                        role: "navigation",
                        "aria-label": "Hauptnavigation",
                        children: [
                            mainNavItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "hover:text-white transition-colors py-2 px-1",
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$LanguageSwitcher$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                currentLocale: "de"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/bookings",
                                className: "text-xs text-gray-400 hover:text-nova-gold transition-colors border border-white/10 rounded-full px-3 py-2 min-h-[44px] inline-flex items-center",
                                "data-testid": "header-admin-link",
                                children: "🔐 Admin"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "compact",
                                label: "💬 Per WhatsApp bestellen",
                                testId: "header-booking-button"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:+41766113131",
                                className: "rounded-full border border-nova-gold/60 px-4 py-3 text-sm font-semibold text-nova-gold hover:bg-nova-gold/10 transition-colors min-h-[44px] inline-flex items-center",
                                "aria-label": "Anrufen: 076 611 31 31",
                                children: "076 611 31 31"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-gray-100",
                        onClick: ()=>setMenuOpen((open)=>!open),
                        "aria-label": "Menü öffnen",
                        "aria-expanded": menuOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Menü"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block h-[2px] w-4 bg-current"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block h-[2px] w-4 bg-current"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.jsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-white/10 bg-black/90 backdrop-blur",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container py-4 space-y-4 text-sm text-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: mainNavItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "block py-1",
                                    onClick: ()=>setMenuOpen(false),
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-white/10 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] uppercase tracking-[0.3em] text-nova-muted",
                                    children: "Servicegebiete"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: serviceAreaItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px]",
                                            onClick: ()=>setMenuOpen(false),
                                            children: item.label
                                        }, item.href, false, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$LanguageSwitcher$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                currentLocale: "de"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "tel:+41766113131",
                            className: "inline-flex items-center justify-center rounded-full bg-nova-gold px-4 py-2 text-xs font-semibold text-black hover:bg-nova-gold-soft transition-colors",
                            onClick: ()=>setMenuOpen(false),
                            children: "Jetzt anrufen"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/bookings",
                            className: "block text-xs text-gray-400 hover:text-nova-gold pt-2 border-t border-white/10",
                            onClick: ()=>setMenuOpen(false),
                            children: "🔐 Admin – Bestellungen verwalten"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header.jsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.jsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Header.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Header, "nWapgj6OOtW+8iHRadAqOOlt9Us=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/googleAdsConversions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Google Ads Conversion Tracking Utilities
// Conversion ID 1: AW-17950187146
// Conversion ID 2: AW-11210946531
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "trackConversion",
    ()=>trackConversion,
    "trackLeadFormSubmit",
    ()=>trackLeadFormSubmit,
    "trackPhoneCall",
    ()=>trackPhoneCall,
    "trackQuoteRequest",
    ()=>trackQuoteRequest,
    "trackWhatsAppClick",
    ()=>trackWhatsAppClick
]);
const GOOGLE_ADS_ID_1 = "AW-17950187146";
const GOOGLE_ADS_ID_2 = "AW-11210946531";
// Conversion Labels for ID 1
const CONVERSION_LABELS_1 = {
    PAGE_VIEW: "gXcWCL7Zz5AcEtlQq09C",
    LEAD_FORM: "GbuaCMHZz5AcEtlQq09C",
    APPOINTMENT: "8EhaCMTZz5AcEtlQq09C",
    REQUEST_QUOTE: "vtBCpCMfZz5AcEtlQq09C"
};
// Conversion Labels for ID 2
const CONVERSION_LABELS_2 = {
    APPOINTMENT: "v-TxCKnwxJAZEOPv5eEp"
};
function trackConversion(conversionType) {
    if (("TURBOPACK compile-time value", "object") !== "undefined" && typeof window.gtag === "function") {
        // Track for ID 1
        const label1 = CONVERSION_LABELS_1[conversionType];
        if (label1) {
            window.gtag("event", "conversion", {
                send_to: `${GOOGLE_ADS_ID_1}/${label1}`
            });
            console.log(`[Google Ads ID1] Conversion tracked: ${conversionType}`);
        }
        // Track for ID 2
        const label2 = CONVERSION_LABELS_2[conversionType];
        if (label2) {
            window.gtag("event", "conversion", {
                send_to: `${GOOGLE_ADS_ID_2}/${label2}`
            });
            console.log(`[Google Ads ID2] Conversion tracked: ${conversionType}`);
        }
    }
}
function trackPhoneCall() {
    trackConversion("APPOINTMENT");
}
function trackWhatsAppClick() {
    trackConversion("APPOINTMENT");
}
function trackLeadFormSubmit() {
    trackConversion("LEAD_FORM");
}
function trackQuoteRequest() {
    trackConversion("REQUEST_QUOTE");
}
const __TURBOPACK__default__export__ = {
    trackConversion,
    trackPhoneCall,
    trackWhatsAppClick,
    trackLeadFormSubmit,
    trackQuoteRequest
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/WhatsAppFloating.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$googleAdsConversions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/googleAdsConversions.js [app-client] (ecmascript)");
"use client";
;
;
function WhatsAppFloating() {
    const handleClick = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$googleAdsConversions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackWhatsAppClick"])();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "https://wa.me/41766113131?text=Hallo%20Nova%20Taxi,%20ich%20m%C3%B6chte%20eine%20Fahrt%20buchen.",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "WhatsApp Chat öffnen",
        onClick: handleClick,
        className: "fixed bottom-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition-colors min-h-[48px] min-w-[48px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: "mr-2",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                }, void 0, false, {
                    fileName: "[project]/components/layout/WhatsAppFloating.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/WhatsAppFloating.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline",
                children: "WhatsApp"
            }, void 0, false, {
                fileName: "[project]/components/layout/WhatsAppFloating.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/WhatsAppFloating.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = WhatsAppFloating;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppFloating");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_89934e69._.js.map