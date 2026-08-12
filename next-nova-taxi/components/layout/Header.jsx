"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import BookingButton from "@/components/booking/BookingButton";

const mainNavItems = [
  { href: "/", label: "Startseite" },
  { href: "#services", label: "Dienstleistungen" },
  { href: "/flughafentransfer", label: "Flughafentransfer" },
  { href: "/business", label: "Business" },
  { href: "/kurierfahrten", label: "Kurierfahrten" },
  { href: "/preise", label: "Preise" },
  { href: "/galerie", label: "Galerie" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

const serviceAreaItems = [
  { href: "/ort/arth-goldau", label: "Arth-Goldau" },
  { href: "/ort/luzern", label: "Luzern" },
  { href: "/ort/zug", label: "Zug" },
  { href: "/ort/weggis", label: "Weggis" },
  { href: "/ort/vitznau", label: "Vitznau" },
  { href: "/ort/schwyz", label: "Schwyz" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-colors border-b border-transparent ${
        isScrolled ? "bg-black/80 border-white/5 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-32 md:h-14 md:w-40">
            <Image
              src="https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/eb2153av_Screenshot_20251016_185940_WhatsApp.jpg"
              alt="Nova Taxi Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm text-gray-200" role="navigation" aria-label="Hauptnavigation">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors py-2 px-1"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale="de" />
          <Link
            href="/admin/bookings"
            className="text-xs text-gray-400 hover:text-nova-gold transition-colors border border-white/10 rounded-full px-3 py-2 min-h-[44px] inline-flex items-center"
            data-testid="header-admin-link"
          >
            🔐 Admin
          </Link>
          <BookingButton variant="compact" label="💬 Per WhatsApp bestellen" testId="header-booking-button" />
          <a
            href="tel:+41766113131"
            className="rounded-full border border-nova-gold/60 px-4 py-3 text-sm font-semibold text-nova-gold hover:bg-nova-gold/10 transition-colors min-h-[44px] inline-flex items-center"
            aria-label="Anrufen: 076 611 31 31"
          >
            076 611 31 31
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-gray-100"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Menü</span>
          <div className="space-y-1.5">
            <span className="block h-[2px] w-4 bg-current" />
            <span className="block h-[2px] w-4 bg-current" />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur">
          <div className="container py-4 space-y-4 text-sm text-gray-100">
            <div className="space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-nova-muted">
                Servicegebiete
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceAreaItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <LanguageSwitcher currentLocale="de" />
            </div>

            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-4 py-2 text-xs font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Jetzt anrufen
            </a>

            <Link
              href="/admin/bookings"
              className="block text-xs text-gray-400 hover:text-nova-gold pt-2 border-t border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              🔐 Admin – Bestellungen verwalten
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
