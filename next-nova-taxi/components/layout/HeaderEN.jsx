"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const mainNavItems = [
  { href: "/en", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "/en/flughafentransfer", label: "Airport Transfer" },
  { href: "/en/business", label: "Business" },
  { href: "/en/kurierfahrten", label: "Courier" },
  { href: "/en/preise", label: "Prices" },
  { href: "/en/galerie", label: "Gallery" },
  { href: "/en/ueber-uns", label: "About Us" },
  { href: "/en/kontakt", label: "Contact" },
];

const serviceAreaItems = [
  { href: "/en/ort/arth-goldau", label: "Arth-Goldau" },
  { href: "/en/ort/luzern", label: "Lucerne" },
  { href: "/en/ort/zug", label: "Zug" },
  { href: "/en/ort/weggis", label: "Weggis" },
  { href: "/en/ort/vitznau", label: "Vitznau" },
  { href: "/en/ort/schwyz", label: "Schwyz" },
];

export default function HeaderEN() {
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
        <Link href="/en" className="flex items-center gap-3">
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

        <nav className="hidden md:flex items-center gap-5 text-sm text-gray-200">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale="en" />
          <a
            href="tel:+41766113131"
            className="rounded-full bg-nova-gold px-4 py-2 text-xs font-semibold text-black hover:bg-nova-gold-soft transition-colors"
          >
            Phone: 076 611 31 31
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-gray-100"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <span className="sr-only">Menu</span>
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
                Service Areas
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
              <LanguageSwitcher currentLocale="en" />
            </div>

            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-4 py-2 text-xs font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
