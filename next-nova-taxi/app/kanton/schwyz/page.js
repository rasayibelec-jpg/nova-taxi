import Link from "next/link";

export const metadata = {
  title: "Taxi Kanton Schwyz | Flughafentransfer & Taxiservice - Nova Taxi",
  description:
    "Nova Taxi im Kanton Schwyz – Ihr zuverlässiger Taxiservice in Arth-Goldau, Schwyz, Küssnacht am Rigi, Brunnen, Einsiedeln & Freienbach. Flughafentransfer Zürich, Bahnhof-Transfers. ☎ 076 611 31 31",
  keywords: [
    "Taxi Kanton Schwyz",
    "Taxi Schwyz",
    "Taxi Arth-Goldau",
    "Taxi Küssnacht am Rigi",
    "Taxi Brunnen",
    "Taxi Einsiedeln",
    "Flughafentransfer Schwyz",
    "Bahnhof Taxi Schwyz"
  ],
  alternates: {
    canonical: "https://www.nova-taxi.com/kanton/schwyz",
    languages: {
      de: "https://www.nova-taxi.com/kanton/schwyz",
      en: "https://www.nova-taxi.com/en/kanton/schwyz",
    },
  },
  openGraph: {
    title: "Taxi Kanton Schwyz | Nova Taxi",
    description: "Taxiservice im Kanton Schwyz – Arth-Goldau, Schwyz, Brunnen, Einsiedeln, Küssnacht.",
    url: "https://www.nova-taxi.com/kanton/schwyz",
    siteName: "Nova Taxi",
    locale: "de_CH",
    type: "website",
  },
};

// Cities in Kanton Schwyz with unique descriptions
const schwyzCities = [
  {
    slug: "arth-goldau",
    name: "Arth-Goldau",
    description: "Wichtiger Verkehrsknotenpunkt mit ICE-Anschluss. Idealer Ausgangspunkt für Rigi-Ausflüge.",
    specialty: "Bahnhof-Drehkreuz & Rigi-Transfers"
  },
  {
    slug: "schwyz",
    name: "Schwyz",
    description: "Historischer Hauptort des Kantons. Heimat des Bundesbriefmuseums.",
    specialty: "Stadtfahrten & Mythen-Region"
  },
  {
    slug: "kuessnacht",
    name: "Küssnacht am Rigi",
    description: "Malerischer Ort am Vierwaldstättersee. Bekannt für die Hohle Gasse.",
    specialty: "See-Transfers & Tourismus"
  },
  {
    slug: "brunnen",
    name: "Brunnen",
    description: "Touristisches Zentrum am Urnersee. Tor zur Axenstrasse.",
    specialty: "Hotel-Transfers & Schifffahrt"
  },
  {
    slug: "einsiedeln",
    name: "Einsiedeln",
    description: "Bedeutender Wallfahrtsort mit dem berühmten Kloster. Wintersportgebiet.",
    specialty: "Pilger-Transfers & Skigebiete"
  },
  {
    slug: "freienbach",
    name: "Freienbach/Pfäffikon SZ",
    description: "Wirtschaftszentrum am Zürichsee. Schnelle Verbindung nach Zürich.",
    specialty: "Business-Transfers & Zürichsee"
  },
];

export default function KantonSchwyzPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Taxi Kanton Schwyz – Ihr lokaler Partner
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Professioneller Taxiservice im gesamten Kanton Schwyz
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Nova Taxi ist Ihr zuverlässiger Taxiservice im Kanton Schwyz. Von <strong>Arth-Goldau</strong> über 
            <strong> Schwyz</strong> bis <strong>Einsiedeln</strong> – wir bringen Sie sicher und pünktlich 
            ans Ziel. Ob Flughafentransfer nach Zürich, Bahnhof-Abholung oder lokale Fahrten: 
            Wir sind <strong>24 Stunden, 7 Tage die Woche</strong> für Sie da.
          </p>
        </div>

        {/* Quick Contact */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+41766113131"
            className="inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors min-h-[48px]"
          >
            ☎ Jetzt anrufen: 076 611 31 31
          </a>
          <Link
            href="/flughafentransfer"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors min-h-[48px]"
          >
            → Flughafentransfer Zürich
          </Link>
        </div>

        {/* Airport Transfer Section */}
        <div className="rounded-2xl bg-gradient-to-r from-nova-bg-soft to-black border border-white/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ✈️ Flughafentransfer ab Kanton Schwyz
          </h2>
          <p className="text-gray-200 mb-4">
            Direkter Transfer zum <strong>Flughafen Zürich</strong> aus allen Gemeinden des Kantons Schwyz. 
            Wir holen Sie pünktlich ab – auch bei Frühflügen oder Spätankünften. Festpreise auf Anfrage.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">Ab Schwyz/Arth-Goldau</p>
              <p className="text-gray-300">ca. 45-55 Min. zum Flughafen Zürich</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">Ab Einsiedeln</p>
              <p className="text-gray-300">ca. 40-50 Min. zum Flughafen Zürich</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">Ab Freienbach/Pfäffikon</p>
              <p className="text-gray-300">ca. 25-35 Min. zum Flughafen Zürich</p>
            </div>
          </div>
          <Link 
            href="/flughafentransfer" 
            className="inline-block mt-4 text-nova-gold hover:text-nova-gold-soft transition-colors"
          >
            → Mehr über unseren Flughafentransfer erfahren
          </Link>
        </div>

        {/* Bahnhof Transfer Section */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🚂 Bahnhof-Transfers im Kanton Schwyz
          </h2>
          <p className="text-gray-200 mb-4">
            Schnelle Abholung und Zustellung an allen wichtigen Bahnhöfen im Kanton Schwyz. 
            Ob Geschäftsreise oder Familienausflug – wir sind Ihr zuverlässiger Partner.
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Arth-Goldau (IC/ICE-Halt)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Schwyz
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Brunnen
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Einsiedeln
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Pfäffikon SZ (S-Bahn Zürich)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Küssnacht am Rigi
            </li>
          </ul>
        </div>

        {/* Cities Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Unsere Servicegebiete im Kanton Schwyz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schwyzCities.map((city) => (
              <Link
                key={city.slug}
                href={`/ort/${city.slug}`}
                className="group rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-nova-gold/50 transition-all hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-nova-gold transition-colors">
                  Taxi {city.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{city.description}</p>
                <p className="text-xs text-nova-gold mt-2">{city.specialty}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">🕐 Verfügbarkeit</h3>
            <p className="text-sm text-gray-300">
              24 Stunden, 7 Tage die Woche. Auch an Feiertagen und Wochenenden für Sie im Einsatz.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">💳 Zahlungsarten</h3>
            <p className="text-sm text-gray-300">
              Bargeld, Kreditkarte (Visa, Mastercard), Debitkarte. Rechnung für Firmenkunden möglich.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">👶 Zusatzservices</h3>
            <p className="text-sm text-gray-300">
              Kindersitze auf Anfrage, Grossraumtaxi für Gruppen, VIP-Transfer für Geschäftskunden.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Taxi im Kanton Schwyz buchen
          </h2>
          <p className="text-gray-300 mb-4">
            Rufen Sie uns an oder schreiben Sie uns – wir sind sofort für Sie da!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-6 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
            >
              ☎ 076 611 31 31
            </a>
            <a
              href="https://wa.me/41766113131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:info@nova-taxi.com"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              ✉ E-Mail
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <nav className="border-t border-white/10 pt-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
            Weitere Serviceregionen
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/kanton/luzern" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Kanton Luzern
            </Link>
            <Link href="/kanton/zug" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Kanton Zug
            </Link>
            <Link href="/flughafentransfer" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Flughafentransfer Zürich
            </Link>
            <Link href="/business" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Business-Transfer
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
