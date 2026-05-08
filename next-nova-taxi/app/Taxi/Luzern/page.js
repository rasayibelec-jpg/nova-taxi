import Link from "next/link";

export const metadata = {
  title: "Taxi Luzern | Flughafentransfer & 24h Service - Nova Taxi",
  description: "Taxi Luzern – Ihr Premium-Taxiservice in der Tourismusstadt. Flughafentransfer Zürich, Pilatus, Rigi, KKL. 24/7 erreichbar. Jetzt anrufen: 076 611 31 31",
  keywords: ["Taxi Luzern", "Flughafentransfer Luzern", "Taxi Vierwaldstättersee", "Pilatus Transfer", "KKL Taxi"],
};

export default function TaxiLuzernPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-10">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-gold">
            Taxi Luzern – 24/7 Service
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ihr Taxi in Luzern
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Nova Taxi bietet erstklassigen <strong>Taxiservice in Luzern</strong> – der beliebten 
            Tourismusstadt am Vierwaldstättersee. Ob <strong>Flughafentransfer nach Zürich</strong>, 
            Fahrten zum <strong>Pilatus</strong> oder zur <strong>Rigi</strong> – wir bringen Sie sicher ans Ziel.
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
            href="https://wa.me/41766113131?text=Hallo,%20ich%20brauche%20ein%20Taxi%20in%20Luzern"
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
          <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 to-black border border-blue-500/30 p-6">
            <div className="text-3xl mb-3">✈️</div>
            <h2 className="text-xl font-bold text-white mb-2">Flughafentransfer</h2>
            <p className="text-gray-300 text-sm">
              Direkter Transfer von Luzern zum <strong>Flughafen Zürich</strong> in ca. 50-60 Minuten. 
              Festpreis auf Anfrage.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 p-6">
            <div className="text-3xl mb-3">🏔️</div>
            <h2 className="text-xl font-bold text-white mb-2">Bergbahn-Transfers</h2>
            <p className="text-gray-300 text-sm">
              Transfers zu <strong>Pilatus</strong>, <strong>Rigi</strong>, <strong>Titlis</strong> und 
              <strong> Stanserhorn</strong>. Perfekt für Touristen.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-amber-900/30 to-black border border-amber-500/30 p-6">
            <div className="text-3xl mb-3">🎭</div>
            <h2 className="text-xl font-bold text-white mb-2">Events & KKL</h2>
            <p className="text-gray-300 text-sm">
              Fahrten zum <strong>KKL Luzern</strong>, Konzerte, Kongresse und 
              <strong> Verkehrshaus</strong>. Stilvoll ankommen.
            </p>
          </div>
        </div>

        {/* Tourist Highlights */}
        <div className="rounded-2xl bg-blue-900/20 border border-blue-500/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Beliebte Ziele in Luzern
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-nova-gold font-semibold mb-2">Sehenswürdigkeiten</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Kapellbrücke & Altstadt</li>
                <li>• KKL Luzern</li>
                <li>• Verkehrshaus der Schweiz</li>
                <li>• Löwendenkmal</li>
              </ul>
            </div>
            <div>
              <p className="text-nova-gold font-semibold mb-2">Ausflugsziele</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Pilatus (via Kriens)</li>
                <li>• Rigi (via Vitznau)</li>
                <li>• Titlis (Engelberg)</li>
                <li>• Vierwaldstättersee Schifffahrt</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Warum Nova Taxi in Luzern?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Mehrsprachig</p>
                <p className="text-sm text-gray-400">Deutsch & Englisch für internationale Gäste</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Touristenerfahrung</p>
                <p className="text-sm text-gray-400">Wir kennen alle Hotels und Sehenswürdigkeiten</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">24/7 Verfügbar</p>
                <p className="text-sm text-gray-400">Auch für frühe Flüge und späte Ankünfte</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Komfort-Fahrzeuge</p>
                <p className="text-sm text-gray-400">Platz für Gepäck und Gruppen bis 7 Personen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="rounded-2xl bg-nova-gold/20 border-2 border-nova-gold p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Taxi in Luzern buchen
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Rufen Sie uns jetzt an oder schreiben Sie uns per WhatsApp. 
            Wir freuen uns auf Ihre Buchung!
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
            <Link href="/ort/luzern" className="text-nova-gold hover:text-nova-gold-soft">
              → Mehr über Luzern
            </Link>
            <Link href="/flughafentransfer" className="text-nova-gold hover:text-nova-gold-soft">
              → Flughafentransfer
            </Link>
            <Link href="/kanton/luzern" className="text-nova-gold hover:text-nova-gold-soft">
              → Kanton Luzern
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
