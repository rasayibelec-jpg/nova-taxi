import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12" role="contentinfo">
      <div className="container py-10 grid gap-8 md:grid-cols-4 text-sm text-gray-200">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Nova Taxi
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Moderner Taxi-Service mit Fokus auf Pünktlichkeit, Komfort und
            persönlichem Service in der gesamten Zentralschweiz.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Kontakt
          </h3>
          <address className="space-y-2 text-sm not-italic">
            <p>Nova Taxi</p>
            <p>Türlihof 4</p>
            <p>6414 Oberarth, Schwyz</p>
            <a
              href="tel:+41766113131"
              className="block hover:text-white transition-colors py-1"
              aria-label="Anrufen: 076 611 31 31"
            >
              Telefon: 076 611 31 31
            </a>
            <a
              href="mailto:info@nova-taxi.com"
              className="block hover:text-white transition-colors py-1"
              aria-label="E-Mail senden an info@nova-taxi.com"
            >
              E-Mail: info@nova-taxi.com
            </a>
          </address>
        </div>

        <nav className="space-y-3" aria-label="Rechtliche Links">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Rechtliches
          </h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="/impressum" className="hover:text-white transition-colors py-1">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors py-1">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-white transition-colors py-1">
              AGB
            </Link>
          </div>
        </nav>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Sprache
          </h3>
          <LanguageSwitcher currentLocale="de" />
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Nova Taxi. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
