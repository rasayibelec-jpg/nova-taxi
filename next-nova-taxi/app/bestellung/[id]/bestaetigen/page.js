"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function DriverConfirmPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const [state, setState] = useState({ phase: "loading" });
  const shortId = String(id || "").substring(0, 8).toUpperCase();

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch(`/api/bookings/${id}/confirm?token=${encodeURIComponent(token)}&noRedirect=1`, {
          cache: "no-store",
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "invalid");
        if (cancelled) return;
        setState({ phase: "confirmed", waUrl: data.customerWhatsappUrl, booking: data.booking });

        // Auto-redirect to customer WhatsApp after 1.5s so the driver only
        // has to tap "Senden" in WhatsApp.
        setTimeout(() => {
          if (data.customerWhatsappUrl) {
            window.location.href = data.customerWhatsappUrl;
          }
        }, 1500);
      } catch (e) {
        if (!cancelled) setState({ phase: "error", message: e.message });
      }
    }

    if (token) run();
    else setState({ phase: "error", message: "invalid" });

    return () => { cancelled = true; };
  }, [id, token]);

  return (
    <div className="section-padding">
      <div className="container max-w-lg mx-auto py-16" data-testid="driver-confirm-page">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-10 space-y-6 text-center">
          {state.phase === "loading" && (
            <>
              <div className="mx-auto h-16 w-16 rounded-full border-4 border-nova-gold/30 border-t-nova-gold animate-spin" />
              <h1 className="text-2xl font-semibold text-white">Bestellung wird bestätigt…</h1>
              <p className="text-gray-400 text-sm">Einen Moment bitte.</p>
            </>
          )}

          {state.phase === "confirmed" && (
            <>
              <div className="mx-auto h-16 w-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center text-3xl">
                ✓
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold text-white" data-testid="driver-confirm-heading">
                Bestellung #{shortId} bestätigt
              </h1>
              <p className="text-gray-300 text-sm">
                Sie werden gleich zu WhatsApp weitergeleitet – bitte tippen Sie dort nur noch auf <strong>Senden</strong>,
                um den Kunden zu benachrichtigen.
              </p>
              <a
                href={state.waUrl}
                className="inline-block w-full rounded-full bg-emerald-500 px-6 py-4 text-base font-semibold text-white hover:bg-emerald-600"
                data-testid="driver-confirm-wa-link"
              >
                WhatsApp öffnen und Kunden benachrichtigen
              </a>
              {state.booking && (
                <div className="text-left rounded-xl bg-black/40 border border-white/10 p-4 mt-4 text-sm text-gray-300 space-y-1">
                  <div><span className="text-gray-500">Kunde:</span> {state.booking.customerName} · {state.booking.customerPhone}</div>
                  <div><span className="text-gray-500">Abholung:</span> {state.booking.pickupAddress}</div>
                  <div><span className="text-gray-500">Ziel:</span> {state.booking.destinationAddress}</div>
                  {state.booking.priceCHF != null && (
                    <div><span className="text-gray-500">Preis:</span> CHF {state.booking.priceCHF.toFixed(2)}</div>
                  )}
                </div>
              )}
            </>
          )}

          {state.phase === "error" && (
            <>
              <div className="mx-auto h-16 w-16 rounded-full bg-red-500/20 border-2 border-red-400 text-red-400 flex items-center justify-center text-3xl">
                !
              </div>
              <h1 className="text-2xl font-semibold text-white" data-testid="driver-confirm-error">
                Bestätigung nicht möglich
              </h1>
              <p className="text-gray-400 text-sm">
                Dieser Link ist ungültig oder wurde bereits verwendet. Bitte kontaktieren Sie den Kunden direkt.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
