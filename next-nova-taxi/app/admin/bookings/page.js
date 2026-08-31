"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const STORAGE_KEY = "novaTaxiAdminKey";

export default function AdminBookingsPage() {
  const [adminKey, setAdminKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [busyId, setBusyId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [toast, setToast] = useState(null);
  const [noteDrafts, setNoteDrafts] = useState({});
  const [savingNoteId, setSavingNoteId] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

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
        const [bRes, sRes] = await Promise.all([
          fetch(`/api/admin/bookings${all ? "?all=1" : ""}`, {
            headers: { "x-admin-key": key },
            cache: "no-store",
          }),
          fetch(`/api/admin/stats`, {
            headers: { "x-admin-key": key },
            cache: "no-store",
          }),
        ]);
        if (bRes.status === 401) {
          setError("Falsches Passwort.");
          setAdminKey("");
          if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
          return;
        }
        const data = await bRes.json().catch(() => ({}));
        if (!bRes.ok) {
          setError("Fehler: " + (data?.detail || data?.error || bRes.status));
          return;
        }
        setBookings(data.bookings || []);
        if (sRes.ok) {
          const s = await sRes.json().catch(() => null);
          if (s) setStats(s);
        }
      } catch (e) {
        setError("Fehler: " + (e?.message || "unknown"));
      } finally {
        setLoading(false);
      }
    },
    [adminKey, showAll]
  );

  useEffect(() => {
    if (!adminKey) return;
    load(adminKey, showAll);
    const t = setInterval(() => load(adminKey, showAll), 15000);
    return () => clearInterval(t);
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
        alert("Fehler: " + (data?.detail || data?.error || res.status));
        return;
      }
      const del = data?.delivery || {};
      if (del.ok) {
        // Sent automatically via WhatsApp Cloud API. NO wa.me, NO manual action.
        setToast({
          type: "success",
          text:
            action === "accept"
              ? "✓ Bestätigung wurde automatisch an den Kunden gesendet."
              : "✕ Absage wurde automatisch an den Kunden gesendet.",
        });
      } else if (del.attempted && !del.ok) {
        // API attempted but Meta returned an error — offer manual fallback
        const msg =
          "WhatsApp API-Versand fehlgeschlagen: " +
          (del.error || "unbekannter Fehler") +
          "\n\nManuell über WhatsApp senden?";
        if (data.customerWhatsappUrl && confirm(msg)) {
          window.open(data.customerWhatsappUrl, "_blank", "noopener,noreferrer");
        }
      } else {
        // API not configured yet → keep old wa.me behaviour as fallback
        setToast({
          type: "warn",
          text:
            "WhatsApp Cloud API nicht konfiguriert. Nachricht wird über wa.me geöffnet.",
        });
        if (data.customerWhatsappUrl) {
          const w = window.open(data.customerWhatsappUrl, "_blank", "noopener,noreferrer");
          if (!w || w.closed) window.location.href = data.customerWhatsappUrl;
        }
      }
      setBookings((prev) =>
        prev.map((b) => (b.id === bookingId ? { ...b, status: data.status } : b))
      );
      load(adminKey, showAll);
    } catch (e) {
      alert("Fehler: " + (e?.message || "unknown"));
    } finally {
      setBusyId(null);
    }
  }

  async function saveNote(bookingId) {
    const note = (noteDrafts[bookingId] ?? "").trim();
    setSavingNoteId(bookingId);
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}/note`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({ note }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        alert("Fehler: " + (data?.detail || data?.error || res.status));
        return;
      }
      setBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId ? { ...b, adminNote: note, adminNoteUpdatedAt: new Date().toISOString() } : b
        )
      );
      setToast({ type: "success", text: "Notiz gespeichert." });
    } catch (e) {
      alert("Fehler: " + (e?.message || "unknown"));
    } finally {
      setSavingNoteId(null);
    }
  }

  async function deleteBooking(bookingId, shortId) {
    if (!confirm(`Bestellung #${shortId} wirklich endgültig löschen?\nDies kann nicht rückgängig gemacht werden.`)) {
      return;
    }
    setBusyId(bookingId);
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: "DELETE",
        headers: { "x-admin-key": adminKey },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        alert("Fehler: " + (data?.detail || data?.error || res.status));
        return;
      }
      setBookings((prev) => prev.filter((b) => b.id !== bookingId));
      setToast({ type: "success", text: `Bestellung #${shortId} gelöscht.` });
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

  const pendingCount = bookings.filter(
    (b) => b.status === "pending" || b.status === "requested"
  ).length;

  return (
    <div className="section-padding">
      <div className="container max-w-4xl mx-auto py-10 space-y-6" data-testid="admin-bookings-page">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-white">Bestellungen verwalten</h1>
            {pendingCount > 0 && (
              <p className="text-sm text-amber-400 mt-1">
                {pendingCount} neue Bestellung{pendingCount === 1 ? "" : "en"} warten auf Ihre Entscheidung
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/setup"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-nova-gold hover:bg-white/10"
              data-testid="admin-setup-link"
            >
              📘 Setup Guide
            </Link>
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
        {error && <p className="text-red-400 text-sm break-words">{error}</p>}
        {toast && (
          <div
            className={`rounded-xl border p-3 text-sm ${
              toast.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-200"
                : "bg-amber-500/10 border-amber-500/40 text-amber-200"
            }`}
            data-testid="admin-toast"
          >
            {toast.text}
          </div>
        )}

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3" data-testid="admin-stats">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-gray-500">Heute</p>
              <p className="text-2xl font-semibold text-white mt-1">{stats.today.count}</p>
              <p className="text-xs text-nova-gold mt-0.5">CHF {stats.today.revenueCHF.toFixed(2)}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-gray-500">7 Tage</p>
              <p className="text-2xl font-semibold text-white mt-1">{stats.last7Days.count}</p>
              <p className="text-xs text-nova-gold mt-0.5">CHF {stats.last7Days.revenueCHF.toFixed(2)}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-gray-500">30 Tage</p>
              <p className="text-2xl font-semibold text-white mt-1">{stats.last30Days.count}</p>
              <p className="text-xs text-nova-gold mt-0.5">CHF {stats.last30Days.revenueCHF.toFixed(2)}</p>
            </div>
            <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-amber-300/70">Angefragt</p>
              <p className="text-2xl font-semibold text-amber-300 mt-1">{stats.pendingCount}</p>
              <p className="text-xs text-amber-300/70 mt-0.5">warten auf Entscheidung</p>
            </div>
          </div>
        )}

        {stats && stats.last7Days.count > 0 && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-gray-400 mb-3">Stündliche Verteilung (letzte 7 Tage)</p>
            <div className="flex items-end gap-1 h-20">
              {stats.hourly.map((count, h) => {
                const max = Math.max(...stats.hourly, 1);
                const height = Math.max(4, Math.round((count / max) * 72));
                return (
                  <div key={h} className="flex-1 flex flex-col items-center gap-1" title={`${h}:00 – ${count} Fahrten`}>
                    <div
                      className="w-full rounded-sm bg-nova-gold/70 hover:bg-nova-gold transition-colors"
                      style={{ height: `${height}px` }}
                    />
                    <span className="text-[9px] text-gray-500">{h}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
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
                    <span
                      className={`text-xs px-2 py-1 rounded-full border ${statusStyle}`}
                      data-testid={`admin-booking-status-${shortId}`}
                    >
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
                    {b.distanceKm != null && (
                      <span className="text-gray-500 text-xs"> · {b.distanceKm} km</span>
                    )}
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

                {/* Internal admin note (persisted per booking) */}
                <div className="pt-1">
                  <label className="text-xs text-gray-500 block mb-1">
                    Interne Notiz
                    {b.adminNoteUpdatedAt && (
                      <span className="ml-2 text-[10px] text-gray-600">
                        · zuletzt {new Date(b.adminNoteUpdatedAt).toLocaleString("de-CH")}
                      </span>
                    )}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={500}
                      placeholder="z.B. Kunde ruft zurück"
                      value={noteDrafts[b.id] ?? b.adminNote ?? ""}
                      onChange={(e) =>
                        setNoteDrafts((d) => ({ ...d, [b.id]: e.target.value }))
                      }
                      className="flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-nova-gold focus:outline-none focus:ring-1 focus:ring-nova-gold/30"
                      data-testid={`admin-note-input-${shortId}`}
                    />
                    <button
                      type="button"
                      onClick={() => saveNote(b.id)}
                      disabled={savingNoteId === b.id}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white hover:bg-white/10 disabled:opacity-40"
                      data-testid={`admin-note-save-${shortId}`}
                    >
                      {savingNoteId === b.id ? "…" : "Speichern"}
                    </button>
                  </div>
                </div>

                {/* Delivery status of the customer notification */}
                {b.delivery && b.delivery.attempted && (
                  <div className="text-[11px] text-gray-500 flex flex-wrap items-center gap-2">
                    <span>WhatsApp-Zustellung:</span>
                    {b.delivery.ok ? (
                      <>
                        <span className="text-emerald-400 font-semibold">
                          {b.delivery.lastStatus === "read"
                            ? "✓✓ gelesen"
                            : b.delivery.lastStatus === "delivered"
                            ? "✓✓ zugestellt"
                            : b.delivery.lastStatus === "sent"
                            ? "✓ gesendet"
                            : b.delivery.lastStatus === "failed"
                            ? "✕ fehlgeschlagen"
                            : "✓ akzeptiert"}
                        </span>
                        {b.delivery.mode === "template" && (
                          <span className="text-gray-500">(Template)</span>
                        )}
                      </>
                    ) : (
                      <span className="text-red-400">
                        Fehler: {b.delivery.error || "unbekannt"}
                      </span>
                    )}
                  </div>
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
                    <span className="text-xs text-gray-500 self-center">Bereits verarbeitet.</span>
                  )}
                  <button
                    type="button"
                    disabled={busyId === b.id}
                    onClick={() => deleteBooking(b.id, shortId)}
                    className="ml-auto rounded-full border border-red-500/40 text-red-300 hover:bg-red-500/10 px-4 py-2 text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                    data-testid={`admin-delete-${shortId}`}
                    title="Bestellung endgültig löschen"
                  >
                    🗑 Löschen
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
