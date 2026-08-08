"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function DriverConfirmPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [phase, setPhase] = useState("loading"); // loading | choose | done | error
  const [booking, setBooking] = useState(null);
  const [action, setAction] = useState(null);
  const [waUrl, setWaUrl] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const shortId = String(id || "").substring(0, 8).toUpperCase();

  // Load booking details
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(`/api/bookings/${id}`, { cache: "no-store" });
        if (!res.ok) throw new Error("not_found");
        const data = await res.json();
        if (cancelled) return;
        setBooking(data);
        if (data.status === "confirmed" || data.status === "rejected") {
          setPhase("done");
          setAction(data.status === "confirmed" ? "accept" : "reject");
        } else {
          setPhase("choose");
        }
      } catch (e) {
        if (!cancelled) {
          setErrorMsg("Bestellung nicht gefunden.");
          setPhase("error");
        }
      }
    }
    if (!token) {
      setErrorMsg("Ungültiger Link.");
      setPhase("error");
      return;
    }
    load();
    return () => { cancelled = true; };
  }, [id, token]);

  async function decide(nextAction) {
    setSubmitting(true);
    setErrorMsg(null);
    try {
      const res = await fetch(
        `/api/bookings/${id}/decision?token=${encodeURIComponent(token)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: nextAction }),
        }
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data?.error || "Fehler");
        setPhase("error");
        return;
      }
      setAction(nextAction);
      setWaUrl(data.customerWhatsappUrl || null);
      setPhase("done");
      // Auto-open WhatsApp so the driver only has to tap "Senden"
      if (data.customerWhatsappUrl) {
        setTimeout(() => {
          const w = window.open(data.customerWhatsappUrl, "_blank", "noopener,noreferrer");
          if (!w || w.closed) window.location.href = data.customerWhatsappUrl;
        }, 800);
      }
    } catch (e) {
      setErrorMsg(String(e?.message || e));
      setPhase("error");
    } finally {
      setSubmitting(false);
    }
  }

  const whenText =
    booking?.whenType === "scheduled" && booking?.scheduledAt
      ? new Date(booking.scheduledAt).toLocaleString("de-CH")
      : "Sofort";

  return (
    <div className="section-padding">
      <div className="container max-w-lg mx-auto py-16" data-testid="driver-confirm-page">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 space-y-5">
          {phase === "loading" && (
            <div className="text-center space-y-4">
              <div className="mx-auto h-14 w-14 rounded-full border-4 border-nova-gold/30 border-t-nova-gold animate-spin" />
              <p className="text-gray-400 text-sm">Bestellung wird geladen…</p>
            </div>
          )}

          {phase === "error" && (
            <div className="text-center space-y-4">
              <div className="mx-auto h-14 w-14 rounded-full bg-red-500/20 border-2 border-red-400 text-red-400 flex items-center justify-center text-3xl">
                !
              </div>
              <h1 className="text-2xl font-semibold text-white" data-testid="driver-confirm-error">
                {errorMsg || "Fehler"}
              </h1>
              <p className="text-gray-400 text-sm">
                Dieser Link ist ungültig, abgelaufen oder wurde bereits verwendet.
              </p>
            </div>
          )}

          {(phase === "choose" || phase === "done") && booking && (
            <>
              <div className="text-center space-y-1">
                <p className="text-xs uppercase tracking-widest text-nova-gold">Neue Bestellung</p>
                <h1 className="text-2xl md:text-3xl font-semibold text-white">
                  #{shortId}
                </h1>
              </div>

              <div className="rounded-xl bg-black/40 border border-white/10 p-4 text-sm text-gray-200 space-y-2">
                <div><span className="text-gray-500">Kunde:</span> {booking.customerName}</div>
                <div>
                  <span className="text-gray-500">Tel:</span>{" "}
                  <a href={`tel:${booking.customerPhone}`} className="text-nova-gold hover:underline">
                    {booking.customerPhone}
                  </a>
                </div>
                <div><span className="text-gray-500">Abholung:</span> {booking.pickupAddress}</div>
                <div><span className="text-gray-500">Ziel:</span> {booking.destinationAddress}</div>
                <div><span className="text-gray-500">Wann:</span> {whenText}</div>
                <div><span className="text-gray-500">Personen:</span> {booking.persons}</div>
                <div>
                  <span className="text-gray-500">Zahlung:</span>{" "}
                  {{ cash: "Bar", card: "Karte", twint: "TWINT" }[booking.paymentMethod] || booking.paymentMethod}
                </div>
                <div>
                  <span className="text-gray-500">Preis:</span>{" "}
                  {booking.priceCHF != null ? `CHF ${Number(booking.priceCHF).toFixed(2)}` : "auf Anfrage"}
                </div>
                {booking.geo && (
                  <div>
                    <a
                      href={`https://maps.google.com/?q=${booking.geo.lat},${booking.geo.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nova-gold text-xs hover:underline"
                    >
                      📍 Genauer Standort öffnen
                    </a>
                  </div>
                )}
              </div>

              {phase === "choose" && (
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={() => decide("accept")}
                    className="w-full rounded-full bg-emerald-500 px-6 py-4 text-base font-semibold text-white hover:bg-emerald-600 disabled:opacity-50"
                    data-testid="driver-accept-button"
                  >
                    {submitting ? "…" : "✓ Annehmen"}
                  </button>
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={() => {
                      if (confirm("Bestellung wirklich ablehnen?")) decide("reject");
                    }}
                    className="w-full rounded-full bg-red-500 px-6 py-4 text-base font-semibold text-white hover:bg-red-600 disabled:opacity-50"
                    data-testid="driver-reject-button"
                  >
                    {submitting ? "…" : "✕ Ablehnen"}
                  </button>
                  <p className="text-xs text-gray-500 text-center pt-2">
                    Nach Ihrer Auswahl öffnet sich WhatsApp mit einer vorbereiteten Nachricht für den Kunden.
                  </p>
                </div>
              )}

              {phase === "done" && (
                <div className="space-y-3 pt-2">
                  <div
                    className={`rounded-xl p-4 text-center ${
                      action === "accept"
                        ? "bg-emerald-500/10 border border-emerald-500/40"
                        : "bg-red-500/10 border border-red-500/40"
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold ${
                        action === "accept" ? "text-emerald-300" : "text-red-300"
                      }`}
                      data-testid="driver-decision-status"
                    >
                      {action === "accept" ? "✓ Bestellung angenommen" : "✕ Bestellung abgelehnt"}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      WhatsApp öffnet sich gleich mit der Nachricht an den Kunden.
                    </p>
                  </div>
                  {(waUrl || (booking && booking.customerPhone)) && (
                    <a
                      href={waUrl || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full rounded-full px-6 py-4 text-base font-semibold text-white text-center ${
                        action === "accept"
                          ? "bg-emerald-500 hover:bg-emerald-600"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                      data-testid="driver-open-whatsapp"
                    >
                      WhatsApp öffnen und Kunden benachrichtigen
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
