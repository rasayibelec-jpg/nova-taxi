import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="container py-10 grid gap-8 md:grid-cols-3 text-sm text-gray-300">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Nova Taxi
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Moderner Taxi-Service mit Fokus auf Pünktlichkeit, Komfort und
            persönlichem Service in der gesamten Zentralschweiz.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Kontakt
          </h3>
          <div className="space-y-1 text-xs">
            <p>Nova Taxi</p>
            <p>Türlihof 4</p>
            <p>6414 Oberarth, Schwyz</p>
            <a
              href="tel:+41766113131"
              className="block hover:text-white transition-colors"
            >
              Telefon: 076 611 31 31
            </a>
            <a
              href="mailto:info@nova-taxi.com"
              className="block hover:text-white transition-colors"
            >
              E-Mail: info@nova-taxi.com
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Rechtliches
          </h3>
          <div className="flex flex-col space-y-1 text-xs">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-white transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-[11px] text-center text-gray-500">
        © {new Date().getFullYear()} Nova Taxi. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
