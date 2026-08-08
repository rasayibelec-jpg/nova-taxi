"use client";

import { useEffect, useState, useCallback } from "react";
import AddressAutocomplete from "./AddressAutocomplete";

const inputBase =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-gray-500 focus:border-nova-gold focus:outline-none focus:ring-2 focus:ring-nova-gold/30";
const inputStyle = { color: "#000000", backgroundColor: "#FFFFFF" };

export default function BookingModal({ open, onClose, prefillPickup, prefillDestination }) {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [whenType, setWhenType] = useState("now");
  const [scheduledAt, setScheduledAt] = useState("");
  const [persons, setPersons] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("cash");

  const [priceInfo, setPriceInfo] = useState(null);
  const [priceLoading, setPriceLoading] = useState(false);
  const [priceError, setPriceError] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (open) {
      if (prefillPickup) setPickup(prefillPickup);
      if (prefillDestination) setDestination(prefillDestination);
    }
  }, [open, prefillPickup, prefillDestination]);

  useEffect(() => {
    if (!pickup || !destination || pickup.length < 3 || destination.length < 3) {
      setPriceInfo(null);
      setPriceError(null);
      return;
    }
    const ac = new AbortController();
    const timer = setTimeout(async () => {
      setPriceLoading(true);
      setPriceError(null);
      try {
        const res = await fetch("/api/pricing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ origin: pickup, destination }),
          signal: ac.signal,
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setPriceError({ code: data?.error || `http_${res.status}`, detail: data?.detail || null });
          setPriceInfo(null);
        } else {
          setPriceInfo(data);
        }
      } catch (e) {
        if (e?.name === "AbortError") return;
        setPriceError({ code: "network", detail: String(e?.message || "") });
        setPriceInfo(null);
      } finally {
        setPriceLoading(false);
      }
    }, 600);
    return () => {
      clearTimeout(timer);
      ac.abort();
    };
  }, [pickup, destination]);

  const getGeoOnce = useCallback(() => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) return resolve(null);
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => resolve(null),
        { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 }
      );
    });
  }, []);

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
      const timer = setTimeout(() => ac.abort(), 8000);
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          lang: "de",
        }),
      });
      clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        bookingId = data.id;
        confirmToken = data.confirmToken;
      }
    } catch {
      // Silent — WhatsApp fallback below still works.
    }

    const paymentLabel = { cash: "Bar", card: "Karte", twint: "TWINT" }[payment];
    const whenText =
      whenType === "scheduled" && scheduledAt
        ? new Date(scheduledAt).toLocaleString("de-CH", { dateStyle: "short", timeStyle: "short" })
        : "Jetzt (sofort)";
    const priceText = priceInfo ? `CHF ${priceInfo.priceCHF.toFixed(2)}` : "auf Anfrage";
    const distanceLine =
      priceInfo && priceInfo.distanceKm != null ? `\nDistanz: ${priceInfo.distanceKm} km` : "";
    const standortLine = geo
      ? `\nStandort: https://maps.google.com/?q=${geo.lat},${geo.lng}`
      : "";
    const shortId = bookingId ? String(bookingId).substring(0, 8).toUpperCase() : null;
    const confirmLine =
      bookingId && confirmToken
        ? `\n\nBestellung bestätigen:\n${window.location.origin}/bestellung/${bookingId}/bestaetigen?token=${confirmToken}`
        : "";

    const idLine = shortId ? `Neue Bestellung\n#${shortId}:` : `Neue Bestellung:`;
    const msg =
      `${idLine}\n` +
      `Name: ${name}\n` +
      `Tel: ${phone}\n` +
      `Abholung: ${pickup}\n` +
      `Zeit: ${whenText}\n` +
      `Ziel: ${destination}\n` +
      `Personen: ${persons}\n` +
      `Preis: ${priceText}` +
      distanceLine +
      `\nZahlungsart: ${paymentLabel}` +
      standortLine +
      confirmLine;

    const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "41766113131";
    const whatsappUrl = `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`;

    setResult({ id: bookingId, shortId, whatsappUrl });

    try {
      const w = window.open(whatsappUrl, "_blank");
      if (!w || w.closed) window.location.href = whatsappUrl;
    } catch {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur px-4 py-6 overflow-y-auto"
      onClick={resetAndClose}
      data-testid="booking-modal-overlay"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl p-6 md:p-8 my-8"
        onClick={(e) => e.stopPropagation()}
        style={{ color: "#000000" }}
      >
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute right-4 top-4 h-9 w-9 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
          aria-label="Schliessen"
          data-testid="booking-modal-close"
        >
          ✕
        </button>

        {result ? (
          <div className="space-y-4 text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl">
              ✓
            </div>
            <h3 className="text-xl font-semibold text-black">
              {result.shortId ? `Bestellung #${result.shortId} angefragt` : "Bestellung angefragt"}
            </h3>
            <p className="text-sm text-gray-700">
              Ihre Bestellung ist erst <strong>bestätigt</strong>, sobald wir uns bei Ihnen melden.
              Bitte tippen Sie unten auf <strong>„WhatsApp öffnen"</strong> und senden Sie die Nachricht ab.
            </p>
            <a
              href={result.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full rounded-full bg-emerald-500 px-6 py-4 text-base font-semibold text-white hover:bg-emerald-600"
              data-testid="booking-whatsapp-open"
            >
              WhatsApp öffnen und senden
            </a>
            {result.id && (
              <a
                href={`/bestellung/${result.id}`}
                className="inline-block rounded-full bg-nova-gold px-6 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft"
                data-testid="booking-status-link"
              >
                Bestellstatus prüfen
              </a>
            )}
            <button
              type="button"
              onClick={resetAndClose}
              className="block w-full text-sm text-gray-500 hover:text-gray-800 pt-2"
            >
              Schliessen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-black">Online Taxi bestellen</h3>
            <p className="text-sm text-gray-600">
              Fahrt in wenigen Sekunden anfragen. Bezahlung im Fahrzeug – keine Kartendaten nötig.
            </p>

            <label className="block space-y-1">
              <span className="text-sm font-medium text-black">Abholadresse</span>
              <AddressAutocomplete value={pickup} onChange={setPickup} placeholder="z.B. Bahnhof Luzern" testId="booking-pickup-input" />
            </label>

            <label className="block space-y-1">
              <span className="text-sm font-medium text-black">Zieladresse</span>
              <AddressAutocomplete value={destination} onChange={setDestination} placeholder="z.B. Flughafen Zürich" testId="booking-destination-input" />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block space-y-1">
                <span className="text-sm font-medium text-black">Wann?</span>
                <select value={whenType} onChange={(e) => setWhenType(e.target.value)} className={inputBase} style={inputStyle} data-testid="booking-when-select">
                  <option value="now">Jetzt</option>
                  <option value="scheduled">Termin wählen</option>
                </select>
              </label>
              <label className="block space-y-1">
                <span className="text-sm font-medium text-black">Personen</span>
                <select value={persons} onChange={(e) => setPersons(Number(e.target.value))} className={inputBase} style={inputStyle} data-testid="booking-persons-select">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (<option key={n} value={n}>{n}</option>))}
                </select>
              </label>
            </div>

            {whenType === "scheduled" && (
              <label className="block space-y-1">
                <span className="text-sm font-medium text-black">Datum & Uhrzeit</span>
                <input type="datetime-local" value={scheduledAt} onChange={(e) => setScheduledAt(e.target.value)} className={inputBase} style={inputStyle} data-testid="booking-scheduled-input" required />
              </label>
            )}

            <div className="grid grid-cols-2 gap-3">
              <label className="block space-y-1">
                <span className="text-sm font-medium text-black">Name</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputBase} style={inputStyle} data-testid="booking-name-input" required />
              </label>
              <label className="block space-y-1">
                <span className="text-sm font-medium text-black">Telefon</span>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputBase} style={inputStyle} placeholder="076 611 31 31" data-testid="booking-phone-input" required />
              </label>
            </div>

            <label className="block space-y-1">
              <span className="text-sm font-medium text-black">Zahlungsart (im Fahrzeug)</span>
              <select value={payment} onChange={(e) => setPayment(e.target.value)} className={inputBase} style={inputStyle} data-testid="booking-payment-select">
                <option value="cash">Bar</option>
                <option value="card">Karte</option>
                <option value="twint">TWINT</option>
              </select>
            </label>

            <div className="rounded-lg bg-nova-gold/10 border border-nova-gold/40 p-4 text-black">
              {priceLoading && <p className="text-sm" data-testid="booking-price-loading">Preis wird berechnet…</p>}
              {priceError && !priceLoading && (
                <div className="text-sm text-amber-900" data-testid="booking-price-error">
                  <p className="font-semibold">
                    {priceError.code === "address_not_found"
                      ? "Adresse konnte nicht gefunden werden."
                      : priceError.code === "key_missing"
                      ? "Preisrechner nicht konfiguriert (Serverschlüssel fehlt)."
                      : priceError.code === "key_denied"
                      ? "Preisrechner momentan gesperrt (API-Schlüssel abgelehnt)."
                      : priceError.code === "quota_exceeded"
                      ? "Preisrechner-Kontingent erschöpft."
                      : priceError.code === "invalid_request"
                      ? "Adresse ungültig – bitte präzisieren."
                      : "Preis wird nach Anfrage bestätigt (Fahrpreis-Berechnung derzeit nicht verfügbar)."}
                  </p>
                  <p className="text-xs text-amber-800 mt-1">
                    Ihre Bestellung kann trotzdem gesendet werden. Der Preis wird telefonisch bestätigt.
                  </p>
                  {priceError.detail && (
                    <p className="text-[10px] text-amber-700/80 mt-2 break-words" data-testid="booking-price-error-detail">
                      Debug: {priceError.detail}
                    </p>
                  )}
                </div>
              )}
              {priceInfo && !priceLoading && (
                <div className="text-sm">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Fahrpreis</span>
                    <span data-testid="booking-price-display">CHF {priceInfo.priceCHF.toFixed(2)}</span>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">≈ {priceInfo.distanceText} · {priceInfo.durationText}</div>
                </div>
              )}
              {!priceLoading && !priceError && !priceInfo && (
                <p className="text-sm text-gray-700">Preis erscheint automatisch, sobald Sie beide Adressen eingegeben haben.</p>
              )}
            </div>

            {submitError && (
              <p className="text-sm text-red-700" data-testid="booking-error">{submitError}</p>
            )}

            <button type="submit" disabled={submitting} className="w-full rounded-full bg-nova-gold px-6 py-4 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors disabled:opacity-50" data-testid="booking-submit-button">
              {submitting ? "Wird gesendet…" : "Bestellung senden (per WhatsApp)"}
            </button>
            <p className="text-[11px] text-gray-500 text-center">
              Beim Absenden wird einmalig Ihr Standort abgefragt – nur mit Ihrer Zustimmung.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
