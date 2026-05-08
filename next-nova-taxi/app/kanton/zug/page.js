import Link from "next/link";

export const metadata = {
  title: "Taxi Kanton Zug | Business-Transfer & Flughafentaxi - Nova Taxi",
  description:
    "Nova Taxi im Kanton Zug – Premium Taxiservice in Zug, Baar, Cham, Steinhausen, Rotkreuz & Unterägeri. Flughafentransfer Zürich für Geschäftsreisende. ☎ 076 611 31 31",
  keywords: [
    "Taxi Kanton Zug",
    "Taxi Zug",
    "Taxi Baar",
    "Taxi Cham",
    "Business Taxi Zug",
    "Flughafentransfer Zug",
    "Bahnhof Zug Taxi"
  ],
};

// Cities in Kanton Zug with unique descriptions
const zugCities = [
  {
    slug: "zug",
    name: "Zug",
    description: "Wirtschaftsmetropole und Hauptort. Internationales Business-Zentrum mit tiefsten Steuern.",
    specialty: "Business & Firmenkunden"
  },
  {
    slug: "baar",
    name: "Baar",
    description: "Zweitgrösste Gemeinde. Industriestandort mit vielen internationalen Firmen.",
    specialty: "Gewerbe & Pendlerverkehr"
  },
  {
    slug: "cham",
    name: "Cham",
    description: "Am Zugersee gelegen. Papieri-Areal und modernes Wohnquartier.",
    specialty: "Wohn- & Freizeitfahrten"
  },
  {
    slug: "steinhausen",
    name: "Steinhausen",
    description: "Kleinste politische Gemeinde. Zentral zwischen Zug und Cham.",
    specialty: "Lokalfahrten & Anschlüsse"
  },
  {
    slug: "rotkreuz",
    name: "Rotkreuz",
    description: "Verkehrsdrehscheibe an der A4/A14. Suurstoffi-Areal und Hochschule.",
    specialty: "Business & Bildung"
  },
  {
    slug: "unteraegeri",
    name: "Unterägeri",
    description: "Erholungsort am Ägerisee. Beliebtes Ausflugsziel und Wohnort.",
    specialty: "Freizeit & Tourismus"
  },
  {
    slug: "walchwil",
    name: "Walchwil",
    description: "Sonnige Gemeinde am Zugersee. Bekannt für Kirschenanbau und Wanderwege.",
    specialty: "Ausflüge & Naherholung"
  },
];

export default function KantonZugPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Taxi Kanton Zug – Premium Business Service
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Business Taxi & Flughafentransfer im Kanton Zug
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Der <strong>Kanton Zug</strong> ist das wirtschaftliche Herz der Zentralschweiz. 
            Nova Taxi bietet massgeschneiderten Service für <strong>Geschäftsreisende</strong>, 
            internationale Firmen und anspruchsvolle Privatkunden. Von <strong>Zug</strong> über 
            <strong> Baar</strong> bis <strong>Rotkreuz</strong> – wir garantieren diskrete, 
            pünktliche und professionelle Fahrten.
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
            href="/business"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors min-h-[48px]"
          >
            → Business-Transfer anfragen
          </Link>
        </div>

        {/* Business Focus Section - Unique to Zug */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-900/20 to-black border border-amber-500/20 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            💼 Business-Transfer im Kanton Zug
          </h2>
          <p className="text-gray-200 mb-4">
            Zug ist Sitz zahlreicher <strong>internationaler Konzerne</strong>, Crypto-Firmen und 
            Finanzdienstleister. Wir verstehen die Anforderungen von Geschäftsreisenden: 
            Diskretion, Pünktlichkeit und professionelles Auftreten.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-nova-gold font-medium">Unsere Business-Services:</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Flughafen-Abholung mit Namensschild</li>
                <li>• Fahrten zu Meetings und Konferenzen</li>
                <li>• Hotel-Transfers für Geschäftsgäste</li>
                <li>• Monatliche Sammelrechnung möglich</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-nova-gold font-medium">Beliebte Business-Ziele:</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Crypto Valley (Zug/Baar)</li>
                <li>• Suurstoffi Rotkreuz</li>
                <li>• Business Parks Baar</li>
                <li>• Hotels in Zug und Umgebung</li>
              </ul>
            </div>
          </div>
          <Link 
            href="/business" 
            className="inline-block mt-4 text-nova-gold hover:text-nova-gold-soft transition-colors"
          >
            → Mehr über unseren Business-Service erfahren
          </Link>
        </div>

        {/* Airport Transfer Section */}
        <div className="rounded-2xl bg-gradient-to-r from-nova-bg-soft to-black border border-white/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ✈️ Flughafentransfer ab Kanton Zug
          </h2>
          <p className="text-gray-200 mb-4">
            Der <strong>Flughafen Zürich</strong> ist vom Kanton Zug aus schnell erreichbar. 
            Wir bieten zuverlässige Transfers für Geschäfts- und Privatreisende – 
            mit Festpreisen und garantierter Pünktlichkeit.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">Ab Zug Stadt</p>
              <p className="text-gray-300">ca. 35-45 Min. zum Flughafen Zürich</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">Ab Baar/Rotkreuz</p>
              <p className="text-gray-300">ca. 30-40 Min. zum Flughafen Zürich</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">Ab Unterägeri</p>
              <p className="text-gray-300">ca. 40-50 Min. zum Flughafen Zürich</p>
            </div>
          </div>
          <Link 
            href="/flughafentransfer" 
            className="inline-block mt-4 text-nova-gold hover:text-nova-gold-soft transition-colors"
          >
            → Flughafentransfer jetzt buchen
          </Link>
        </div>

        {/* Bahnhof Transfer Section */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🚂 Bahnhof-Transfers im Kanton Zug
          </h2>
          <p className="text-gray-200 mb-4">
            Der <strong>Bahnhof Zug</strong> ist ein wichtiger Knotenpunkt mit direkten Verbindungen 
            nach Zürich, Luzern und ins Tessin. Wir holen Sie pünktlich ab – auch an den 
            regionalen Stationen.
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Zug (IC/IR-Halt)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Baar
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Cham
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Rotkreuz (Umsteigeknoten)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Steinhausen
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Bahnhof Walchwil
            </li>
          </ul>
        </div>

        {/* Cities Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Unsere Servicegebiete im Kanton Zug
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {zugCities.map((city) => (
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
            <h3 className="text-lg font-semibold text-white">⏱️ Schnelle Reaktion</h3>
            <p className="text-sm text-gray-300">
              Im Kanton Zug oft innerhalb von 10-15 Minuten vor Ort. Express-Service auf Anfrage.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">🧾 Firmenrechnung</h3>
            <p className="text-sm text-gray-300">
              Monatliche Sammelrechnung für Firmenkunden. Ideal für regelmässige Fahrten.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">🚗 Premium-Fahrzeuge</h3>
            <p className="text-sm text-gray-300">
              Gepflegte Fahrzeuge mit Klimaanlage, WLAN auf Anfrage und ausreichend Platz.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Taxi im Kanton Zug buchen
          </h2>
          <p className="text-gray-300 mb-4">
            Für Business-Fahrten, Flughafentransfers oder private Anlässe – wir sind Ihr Partner!
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
            <Link href="/kanton/luzern" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Kanton Luzern
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
