import Link from "next/link";

export const metadata = {
  title: "Taxi Kanton Luzern | Flughafentransfer & Stadtfahrten - Nova Taxi",
  description:
    "Nova Taxi im Kanton Luzern – Taxiservice in Luzern, Kriens, Emmen, Ebikon, Horw, Meggen & Sursee. Flughafentransfer Zürich, Bahnhof Luzern Transfers. ☎ 076 611 31 31",
  keywords: [
    "Taxi Kanton Luzern",
    "Taxi Luzern",
    "Taxi Kriens",
    "Taxi Emmen",
    "Taxi Ebikon",
    "Flughafentransfer Luzern",
    "Bahnhof Luzern Taxi"
  ],
  alternates: {
    canonical: "https://www.nova-taxi.com/kanton/luzern",
    languages: {
      de: "https://www.nova-taxi.com/kanton/luzern",
      en: "https://www.nova-taxi.com/en/kanton/luzern",
    },
  },
  openGraph: {
    title: "Taxi Kanton Luzern | Nova Taxi",
    description: "Taxiservice im ganzen Kanton Luzern – Flughafentransfer Zürich und Stadtfahrten.",
    url: "https://www.nova-taxi.com/kanton/luzern",
    siteName: "Nova Taxi",
    locale: "de_CH",
    type: "website",
  },
};

// Cities in Kanton Luzern with unique descriptions
const luzernCities = [
  {
    slug: "luzern",
    name: "Luzern",
    description: "Tourismusmetropole am Vierwaldstättersee. Kapellbrücke, KKL und historische Altstadt.",
    specialty: "Stadtfahrten, Hotels & Events"
  },
  {
    slug: "kriens",
    name: "Kriens",
    description: "Drittgrösste Gemeinde des Kantons. Ausgangspunkt zur Pilatus-Bahn.",
    specialty: "Pilatus-Transfers & Pendlerverkehr"
  },
  {
    slug: "emmen",
    name: "Emmen",
    description: "Grösste Agglomerationsgemeinde. Industrie- und Einkaufszentrum.",
    specialty: "Geschäfts- & Einkaufsfahrten"
  },
  {
    slug: "ebikon",
    name: "Ebikon",
    description: "Verkehrsgünstig an der A14. Mall of Switzerland und Verkehrsdrehscheibe.",
    specialty: "Shopping & Businessverkehr"
  },
  {
    slug: "horw",
    name: "Horw",
    description: "Wohngemeinde am Fusse des Pilatus. Seezugang und Naherholung.",
    specialty: "Ausflugs- & Freizeitfahrten"
  },
  {
    slug: "meggen",
    name: "Meggen",
    description: "Exklusive Wohngemeinde am Vierwaldstättersee. Bekannt für herrliche Aussicht.",
    specialty: "Privatfahrten & Events"
  },
  {
    slug: "root",
    name: "Root",
    description: "Verkehrsknotenpunkt zwischen Luzern und Zug. D4 Business Center.",
    specialty: "Business & Pendler"
  },
  {
    slug: "rothenburg",
    name: "Rothenburg",
    description: "Wachsende Gemeinde im Luzerner Hinterland. Industriegebiet und Wohnquartiere.",
    specialty: "Gewerbe & Wohngebiete"
  },
  {
    slug: "sursee",
    name: "Sursee",
    description: "Bezirkshauptort im Luzerner Mittelland. Historisches Städtchen am Sempachersee.",
    specialty: "Regionalverkehr & Events"
  },
  {
    slug: "adligenswil",
    name: "Adligenswil",
    description: "Ruhige Wohngemeinde oberhalb von Luzern. Familienfreundlich.",
    specialty: "Familien- & Alltagsfahrten"
  },
];

export default function KantonLuzernPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Taxi Kanton Luzern – Zuverlässig & Pünktlich
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Ihr Taxiservice im Kanton Luzern – Stadt und Region
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Nova Taxi bedient den gesamten <strong>Kanton Luzern</strong> – von der Stadt Luzern 
            über <strong>Kriens</strong> und <strong>Emmen</strong> bis nach <strong>Sursee</strong>. 
            Als Tourismusregion mit internationalem Publikum bieten wir professionellen Service 
            für Hotels, Geschäftsreisende und Einheimische. <strong>Flughafentransfer</strong>, 
            Bahnhof-Abholung und lokale Fahrten – alles aus einer Hand.
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
            ✈️ Flughafentransfer ab Kanton Luzern
          </h2>
          <p className="text-gray-200 mb-4">
            Komfortabler Transfer zum <strong>Flughafen Zürich</strong> und <strong>Flughafen Basel</strong>. 
            Wir kennen die schnellsten Routen und garantieren pünktliche Ankunft. 
            Ideal für Geschäftsreisende und Urlauber aus der Region Luzern.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">Ab Luzern Stadt</p>
              <p className="text-gray-300">ca. 50-60 Min. zum Flughafen Zürich</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">Ab Ebikon/Root</p>
              <p className="text-gray-300">ca. 40-50 Min. zum Flughafen Zürich</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">Ab Sursee</p>
              <p className="text-gray-300">ca. 45-55 Min. zum Flughafen Zürich</p>
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
            🚂 Bahnhof-Transfers im Kanton Luzern
          </h2>
          <p className="text-gray-200 mb-4">
            Der <strong>Bahnhof Luzern</strong> ist einer der meistfrequentierten Bahnhöfe der Schweiz. 
            Wir bieten schnelle Abholung direkt am Bahnhof – auch bei den regionalen Stationen. 
            Perfekt für Anschlussverbindungen und Hotelgäste.
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Luzern (Hauptbahnhof)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Emmenbrücke
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Ebikon
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Root D4
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Rotkreuz (Umsteigeknoten)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Sursee
            </li>
          </ul>
        </div>

        {/* Tourism Section - Unique to Luzern */}
        <div className="rounded-2xl bg-blue-900/20 border border-blue-500/20 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🏔️ Touristentransfers in Luzern
          </h2>
          <p className="text-gray-200 mb-4">
            Luzern ist ein internationales Touristenziel. Wir bieten spezielle Transfers zu:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-nova-gold font-medium">Bergbahnen & Ausflugsziele</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Pilatus (Kriens/Alpnachstad)</li>
                <li>• Rigi (via Vitznau/Weggis)</li>
                <li>• Titlis (Engelberg)</li>
                <li>• Stanserhorn</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-nova-gold font-medium">Sehenswürdigkeiten</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Kapellbrücke & Altstadt</li>
                <li>• KKL Luzern (Konzerte/Events)</li>
                <li>• Verkehrshaus der Schweiz</li>
                <li>• Schifffahrt Vierwaldstättersee</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Unsere Servicegebiete im Kanton Luzern
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {luzernCities.map((city) => (
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
              Rund um die Uhr erreichbar. Besonders für Hotelgäste und Frühflüge wichtig.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">🌍 Sprachen</h3>
            <p className="text-sm text-gray-300">
              Deutsch, Englisch. Ideal für internationale Touristen in der Region Luzern.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">🚐 Fahrzeuge</h3>
            <p className="text-sm text-gray-300">
              Komfortable Limousinen und Grossraumfahrzeuge für Gruppen bis 7 Personen.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Taxi im Kanton Luzern buchen
          </h2>
          <p className="text-gray-300 mb-4">
            Für Stadtfahrten, Flughafentransfers oder Ausflugsfahrten – kontaktieren Sie uns!
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
            <Link href="/kanton/schwyz" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Kanton Schwyz
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
