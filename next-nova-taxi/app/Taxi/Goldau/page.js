import Link from "next/link";

export const metadata = {
  title: "Taxi Goldau | Bahnhof & Rigi Transfer - Nova Taxi",
  description: "Taxi Goldau – Ihr zuverlässiger Taxiservice am Bahnhof Goldau. Flughafentransfer Zürich, Rigi-Transfers, 24/7 erreichbar. Jetzt anrufen: 076 611 31 31",
  keywords: ["Taxi Goldau", "Bahnhof Goldau Taxi", "Flughafentransfer Goldau", "Rigi Transfer Goldau", "24h Taxi Goldau"],
  alternates: { canonical: "https://www.nova-taxi.com/Taxi/Goldau" },
  openGraph: {
    title: "Taxi Goldau | Nova Taxi",
    description: "Taxiservice in Goldau – Bahnhof, Rigi, Flughafentransfer Zürich.",
    url: "https://www.nova-taxi.com/Taxi/Goldau",
    siteName: "Nova Taxi",
    locale: "de_CH",
    type: "website",
  },
};

export default function TaxiGoldauPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-10">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-gold">
            Taxi Goldau – 24/7 Service
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ihr Taxi in Goldau
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Nova Taxi ist Ihr <strong>zuverlässiger Partner</strong> für Taxifahrten in Goldau. 
            Der <strong>Bahnhof Arth-Goldau</strong> ist ein wichtiger Verkehrsknotenpunkt – 
            wir bringen Sie pünktlich zum Zug oder holen Sie direkt ab.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+41766113131"
            className="inline-flex items-center justify-center rounded-full bg-nova-gold px-8 py-5 text-lg font-bold text-black hover:bg-nova-gold-soft transition-colors min-h-[56px]"
            data-testid="call-button"
          >
            Jetzt anrufen: 076 611 31 31
          </a>
          <a
            href="https://wa.me/41766113131?text=Hallo,%20ich%20brauche%20ein%20Taxi%20in%20Goldau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-5 text-lg font-bold text-white hover:bg-green-500 transition-colors min-h-[56px]"
            data-testid="whatsapp-button"
          >
            WhatsApp Buchung
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 p-6">
            <div className="text-3xl mb-3">🚂</div>
            <h2 className="text-xl font-bold text-white mb-2">Bahnhof Goldau</h2>
            <p className="text-gray-300 text-sm">
              Abholung am <strong>Bahnhof Arth-Goldau</strong> – wichtiger Knotenpunkt 
              mit ICE, IC und Regionalverbindungen.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 to-black border border-blue-500/30 p-6">
            <div className="text-3xl mb-3">✈️</div>
            <h2 className="text-xl font-bold text-white mb-2">Flughafentransfer</h2>
            <p className="text-gray-300 text-sm">
              Direkter Transfer zum <strong>Flughafen Zürich</strong> in ca. 45-55 Minuten. 
              Auch frühe und späte Flüge.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-amber-900/30 to-black border border-amber-500/30 p-6">
            <div className="text-3xl mb-3">🏔️</div>
            <h2 className="text-xl font-bold text-white mb-2">Rigi Transfer</h2>
            <p className="text-gray-300 text-sm">
              Transfer zur <strong>Rigi-Bahn</strong> in Goldau. 
              Perfekt für Wanderer und Touristen.
            </p>
          </div>
        </div>

        {/* Goldau Info */}
        <div className="rounded-2xl bg-green-900/20 border border-green-500/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Bahnhof Arth-Goldau – Verkehrsknotenpunkt
          </h2>
          <p className="text-gray-300 mb-4">
            Der <strong>Bahnhof Arth-Goldau</strong> ist einer der wichtigsten Bahnhöfe der Zentralschweiz. 
            Hier treffen sich Züge aus allen Richtungen – ICE aus Deutschland, IC nach Zürich und Lugano, 
            sowie die beliebte <strong>Rigi-Bahn</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-nova-gold font-semibold mb-2">Verbindungen</p>
              <ul className="text-gray-300 space-y-1">
                <li>• ICE/IC nach Zürich, Basel, Lugano</li>
                <li>• Voralpen-Express</li>
                <li>• S-Bahn Luzern</li>
                <li>• Rigi-Bahnen (Arth-Rigi-Bahn)</li>
              </ul>
            </div>
            <div>
              <p className="text-nova-gold font-semibold mb-2">Unser Service</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Abholung direkt am Bahnhof</li>
                <li>• Wartezeit bei Zugverspätung inklusive</li>
                <li>• Hilfe mit Gepäck</li>
                <li>• Flexible Buchung</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Warum Nova Taxi in Goldau?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">24/7 Verfügbar</p>
                <p className="text-sm text-gray-400">Auch bei Nachtfahrten und am Wochenende</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Pünktlich</p>
                <p className="text-sm text-gray-400">Wir sind da, wenn Ihr Zug ankommt</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Lokale Kenntnis</p>
                <p className="text-sm text-gray-400">Wir kennen jeden Winkel der Region</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Faire Preise</p>
                <p className="text-sm text-gray-400">Transparente Tarife, keine versteckten Kosten</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="rounded-2xl bg-nova-gold/20 border-2 border-nova-gold p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Taxi in Goldau buchen
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Rufen Sie uns jetzt an oder schreiben Sie uns per WhatsApp. 
            Wir bestätigen Ihre Buchung sofort!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-8 py-4 text-lg font-bold text-black hover:bg-nova-gold-soft transition-colors"
            >
              076 611 31 31
            </a>
            <a
              href="mailto:info@nova-taxi.com"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              info@nova-taxi.com
            </a>
          </div>
        </div>

        {/* Links */}
        <nav className="border-t border-white/10 pt-8">
          <p className="text-sm text-gray-400 mb-4">Weitere Taxi-Services:</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/Taxi/Arth-goldau" className="text-nova-gold hover:text-nova-gold-soft">
              → Taxi Arth-Goldau
            </Link>
            <Link href="/flughafentransfer" className="text-nova-gold hover:text-nova-gold-soft">
              → Flughafentransfer
            </Link>
            <Link href="/kanton/schwyz" className="text-nova-gold hover:text-nova-gold-soft">
              → Kanton Schwyz
            </Link>
            <Link href="/preise" className="text-nova-gold hover:text-nova-gold-soft">
              → Preise
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
