"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "novaCookieConsent";
const MAX_AGE = 60 * 60 * 24 * 365;

const TEXT = {
  de: {
    title: "Cookie-Hinweis",
    body: "Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.",
    link: "Datenschutz",
    href: "/datenschutz",
    accept: "Alle akzeptieren",
    necessary: "Nur notwendige",
    aria: "Cookie-Einstellungen",
  },
  en: {
    title: "Cookie notice",
    body: "We use cookies to improve your experience on our website. By using our website, you agree to the use of cookies.",
    link: "Privacy Policy",
    href: "/en/datenschutz",
    accept: "Accept all",
    necessary: "Necessary only",
    aria: "Cookie settings",
  },
};

function applyConsent(value) {
  const granted = value === "all" ? "granted" : "denied";
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: granted,
      ad_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
    });
  }
}

export default function CookieBanner() {
  const pathname = usePathname() || "/";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  if (!visible || pathname.startsWith("/admin")) return null;

  const t = pathname === "/en" || pathname.startsWith("/en/") ? TEXT.en : TEXT.de;

  const save = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    document.cookie = `${STORAGE_KEY}=${value}; max-age=${MAX_AGE}; path=/; SameSite=Lax`;
    applyConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.aria}
      data-testid="cookie-banner"
      className="cookie-banner fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-nova-gold/30 bg-nova-bg-soft/95 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl sm:flex sm:items-center sm:gap-6 sm:p-5">
        <div className="flex items-start gap-3 sm:flex-1">
          <span aria-hidden="true" className="mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-nova-gold/15 text-nova-gold sm:inline-flex">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 14v.01" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-nova-gold">{t.title}</p>
            <p data-testid="cookie-banner-text" className="mt-1 text-xs leading-relaxed text-nova-muted sm:text-sm">
              {t.body}{" "}
              <Link href={t.href} data-testid="cookie-banner-privacy-link" className="font-medium text-nova-gold underline underline-offset-2 hover:text-nova-gold-soft">
                {t.link}
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col-reverse gap-2 sm:mt-0 sm:flex-row sm:shrink-0">
          <button
            type="button"
            onClick={() => save("necessary")}
            data-testid="cookie-banner-necessary-btn"
            className="min-h-[44px] rounded-full border border-white/20 px-5 text-sm font-medium text-nova-text transition-colors hover:border-nova-gold/60 hover:text-nova-gold"
          >
            {t.necessary}
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            data-testid="cookie-banner-accept-btn"
            className="min-h-[44px] rounded-full bg-nova-gold px-6 text-sm font-semibold text-nova-bg shadow-lg shadow-nova-gold/20 transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-nova-gold-soft"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
