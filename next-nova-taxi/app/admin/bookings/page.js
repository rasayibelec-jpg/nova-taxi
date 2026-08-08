"use client";

import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "novaTaxiAdminKey";

export default function AdminBookingsPage() {
  const [adminKey, setAdminKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [busyId, setBusyId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Load stored key on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) || "";
    if (stored) setAdminKey(stored);
  }, []);

  const load = useCallback(
    async (key = adminKey, all = showAll) => {
      if (!key) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/admin/bookings${all ? "?all=1" : ""}`, {
          headers: { "x-admin-key": key },
          cache: "no-store",
        });
        if (res.status === 401) {
          setError("Falsches Passwort.");
          setAdminKey("");
          if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
          return;
        }
        if (!res.ok) throw new Error("http_" + res.status);
        const data = await res.json();
        setBookings(data.bookings || []);
      } catch (e) {
        setError("Fehler beim Laden: " + (e?.message || "unknown"));
      } finally {
        setLoading(false);
      }
    },
    [adminKey, showAll]
  );

  useEffect(() => {
    if (adminKey) {
      load(adminKey, showAll);
      const t = setInterval(() => load(adminKey, showAll), 15000);
      return () => clearInterval(t);
    }
  }, [adminKey, showAll, load]);

  function handleLogin(e) {
    e.preventDefault();
    if (!keyInput) return;
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, keyInput);
    setAdminKey(keyInput);
  }

  function handleLogout() {
    if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
    setAdminKey("");
    setBookings([]);
    setKeyInput("");
  }

  async function decide(bookingId, action) {
    setBusyId(bookingId);
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}/decision`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify({ action }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        alert("Fehler: " + (data?.error || res.status));
        return;
      }
      // Open WhatsApp so the admin can send the customer message
      if (data.customerWhatsappUrl) {
        const w = window.open(data.customerWhatsappUrl, "_blank", "noopener,noreferrer");
        if (!w || w.closed) window.location.href = data.customerWhatsappUrl;
      }
      // Optimistic update
      setBookings((prev) =>
        prev.map((b) => (b.id === bookingId ? { ...b, status: data.status } : b))
      );
      // Refresh list
      load(adminKey, showAll);
    } catch (e) {
      alert("Fehler: " + (e?.message || "unknown"));
    } finally {
      setBusyId(null);
    }
  }

  if (!adminKey) {
    return (
      <div className="section-padding">
        <div className="container max-w-sm mx-auto py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <h1 className="text-2xl font-semibold text-white">Admin-Login</h1>
            <p className="text-sm text-gray-400">
              Bitte geben Sie das Admin-Passwort ein, um Bestellungen zu verwalten.
            </p>
            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="Passwort"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-nova-gold focus:outline-none focus:ring-2 focus:ring-nova-gold/30"
                autoFocus
                data-testid="admin-password-input"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-nova-gold px-6 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft"
                data-testid="admin-login-button"
              >
                Anmelden
              </button>
              {error && <p className="text-sm text-red-400">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container max-w-4xl mx-auto py-10 space-y-6" data-testid="admin-bookings-page">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">Bestellungen verwalten</h1>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-400 flex items-center gap-2">
              <input
                type="checkbox"
                checked={showAll}
                onChange={(e) => setShowAll(e.target.checked)}
                className="accent-nova-gold"
                data-testid="admin-show-all-toggle"
              />
              Alle anzeigen
            </label>
            <button
              onClick={() => load(adminKey, showAll)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white hover:bg-white/10"
              data-testid="admin-refresh-button"
            >
              Aktualisieren
            </button>
            <button
              onClick={handleLogout}
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400 hover:text-white"
              data-testid="admin-logout-button"
            >
              Abmelden
            </button>
          </div>
        </div>

        {loading && bookings.length === 0 && <p className="text-gray-400">Lädt…</p>}
        {error && <p className="text-red-400 text-sm">{error}</p>}
        {!loading && bookings.length === 0 && !error && (
          <p className="text-gray-400" data-testid="admin-empty-state">Keine Bestellungen.</p>
        )}

        <div className="space-y-3">
          {bookings.map((b) => {
            const isPending = b.status === "pending" || b.status === "requested";
            const shortId = String(b.id).substring(0, 8).toUpperCase();
            const whenText =
              b.whenType === "scheduled" && b.scheduledAt
                ? new Date(b.scheduledAt).toLocaleString("de-CH")
                : "Sofort";
            const statusStyle = {
              pending: "bg-amber-500/20 text-amber-300 border-amber-500/40",
              requested: "bg-amber-500/20 text-amber-300 border-amber-500/40",
              confirmed: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
              rejected: "bg-red-500/20 text-red-300 border-red-500/40",
              cancelled: "bg-red-500/20 text-red-300 border-red-500/40",
            }[b.status] || "bg-gray-500/20 text-gray-300 border-gray-500/40";
            const statusLabel = {
              pending: "Angefragt",
              requested: "Angefragt",
              confirmed: "Bestätigt",
              rejected: "Abgelehnt",
              cancelled: "Storniert",
            }[b.status] || b.status;

            return (
              <div
                key={b.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3"
                data-testid={`admin-booking-row-${shortId}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-gray-400">#{shortId}</span>
                    <span className={`text-xs px-2 py-1 rounded-full border ${statusStyle}`} data-testid={`admin-booking-status-${shortId}`}>
                      {statusLabel}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {b.createdAt ? new Date(b.createdAt).toLocaleString("de-CH") : ""}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-200">
                  <div><span className="text-gray-500">Kunde:</span> {b.customerName}</div>
                  <div>
                    <span className="text-gray-500">Tel:</span>{" "}
                    <a href={`tel:${b.customerPhone}`} className="text-nova-gold hover:underline">
                      {b.customerPhone}
                    </a>
                  </div>
                  <div><span className="text-gray-500">Abholung:</span> {b.pickupAddress}</div>
                  <div><span className="text-gray-500">Ziel:</span> {b.destinationAddress}</div>
                  <div><span className="text-gray-500">Wann:</span> {whenText}</div>
                  <div><span className="text-gray-500">Personen:</span> {b.persons}</div>
                  <div>
                    <span className="text-gray-500">Zahlung:</span>{" "}
                    {{ cash: "Bar", card: "Karte", twint: "TWINT" }[b.paymentMethod] || b.paymentMethod}
                  </div>
                  <div>
                    <span className="text-gray-500">Preis:</span>{" "}
                    {b.priceCHF != null ? `CHF ${Number(b.priceCHF).toFixed(2)}` : "auf Anfrage"}
                    {b.distanceKm != null && <span className="text-gray-500 text-xs"> · {b.distanceKm} km</span>}
                  </div>
                </div>

                {b.geo && (
                  <a
                    href={`https://maps.google.com/?q=${b.geo.lat},${b.geo.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-nova-gold hover:underline"
                  >
                    📍 Genauer Standort öffnen
                  </a>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    type="button"
                    disabled={!isPending || busyId === b.id}
                    onClick={() => decide(b.id, "accept")}
                    className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed"
                    data-testid={`admin-accept-${shortId}`}
                  >
                    {busyId === b.id ? "…" : "✓ Annehmen"}
                  </button>
                  <button
                    type="button"
                    disabled={!isPending || busyId === b.id}
                    onClick={() => {
                      if (confirm("Bestellung wirklich ablehnen?")) decide(b.id, "reject");
                    }}
                    className="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-40 disabled:cursor-not-allowed"
                    data-testid={`admin-reject-${shortId}`}
                  >
                    {busyId === b.id ? "…" : "✕ Ablehnen"}
                  </button>
                  {!isPending && (
                    <span className="text-xs text-gray-500 self-center">
                      Bereits verarbeitet.
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
