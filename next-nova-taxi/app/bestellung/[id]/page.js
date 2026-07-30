"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BookingStatusPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const shortId = String(id || "").substring(0, 8).toUpperCase();

  async function load() {
    try {
      const res = await fetch(`/api/bookings/${id}`, { cache: "no-store" });
      if (!res.ok) throw new Error("not_found");
      setData(await res.json());
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    load();
    const t = setInterval(load, 8000);
    return () => clearInterval(t);
  }, [id]);

  const statusMap = {
    requested: { label: "Angefragt – wir bestätigen in Kürze", color: "text-amber-400", dot: "bg-amber-400 animate-pulse" },
    confirmed: { label: "Bestätigt – Fahrer ist unterwegs", color: "text-emerald-400", dot: "bg-emerald-400" },
    cancelled: { label: "Storniert", color: "text-red-400", dot: "bg-red-400" },
  };

  return (
    <div className="section-padding">
      <div className="container max-w-xl space-y-6" data-testid="booking-status-page">
        <Link href="/" className="text-sm text-gray-400 hover:text-white">← Startseite</Link>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Bestellung #{shortId}
        </h1>
        {error && (
          <p className="text-red-400" data-testid="booking-status-error">
            Bestellung nicht gefunden.
          </p>
        )}
        {!data && !error && <p className="text-gray-400">Lädt…</p>}
        {data && (
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${statusMap[data.status]?.dot || "bg-gray-400"}`} />
              <span
                className={`text-sm font-semibold ${statusMap[data.status]?.color || "text-gray-300"}`}
                data-testid="booking-status-label"
              >
                {statusMap[data.status]?.label || data.status}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200">
              <div><span className="text-gray-400">Abholung:</span> {data.pickupAddress}</div>
              <div><span className="text-gray-400">Ziel:</span> {data.destinationAddress}</div>
              <div><span className="text-gray-400">Wann:</span> {data.whenType === "scheduled" && data.scheduledAt ? new Date(data.scheduledAt).toLocaleString("de-CH") : "Sofort"}</div>
              <div><span className="text-gray-400">Personen:</span> {data.persons}</div>
              <div><span className="text-gray-400">Zahlungsart:</span> {{ cash: "Bar", card: "Karte", twint: "TWINT" }[data.paymentMethod]}</div>
              <div><span className="text-gray-400">Preis:</span> {data.priceCHF != null ? `CHF ${data.priceCHF.toFixed(2)}` : "auf Anfrage"}</div>
            </div>
          </div>
        )}
        <p className="text-xs text-gray-500">
          Diese Seite aktualisiert sich automatisch alle 8 Sekunden. Sobald der Fahrer die Bestellung bestätigt, erhalten Sie zusätzlich eine WhatsApp-Nachricht.
        </p>
      </div>
    </div>
  );
}
