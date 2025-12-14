"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "#services", label: "Dienstleistungen" },
  { href: "/flughafentransfer", label: "Flughafentransfer" },
  { href: "/business", label: "Business" },
  { href: "/kurierfahrten", label: "Kurierfahrten" },
  { href: "/preise", label: "Preise" },
  { href: "#areas", label: "Servicegebiete" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" }
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
          <div className="h-9 w-9 rounded-full bg-nova-gold flex items-center justify-center text-black font-extrabold text-lg">
            N
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-[0.25em] text-nova-gold">
              NOVA
            </div>
            <div className="text-xs uppercase tracking-[0.35em] text-gray-300">
              TAXI
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+41766113131"
            className="rounded-full bg-nova-gold px-4 py-2 text-xs font-semibold text-black hover:bg-nova-gold-soft transition-colors"
          >
            24/7: 076 611 31 31
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-gray-100"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menü öffnen"
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
          <div className="container py-4 space-y-3 text-sm text-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-4 py-2 text-xs font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
