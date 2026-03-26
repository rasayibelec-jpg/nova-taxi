import Link from "next/link";

export const metadata = {
  title: "Taxi Zug | Business Transfer & Flughafentransfer - Nova Taxi",
  description: "Taxi Zug – Ihr Premium-Taxiservice im Wirtschaftszentrum. Flughafentransfer Zürich, Business-Fahrten, Crypto Valley. 24/7 erreichbar. Jetzt anrufen: 076 611 31 31",
  keywords: ["Taxi Zug", "Business Taxi Zug", "Flughafentransfer Zug", "Crypto Valley Taxi", "VIP Taxi Zug"],
};

export default function TaxiZugPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-10">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-gold">
            Taxi Zug – Business & Premium Service
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ihr Taxi in Zug
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Nova Taxi bietet <strong>Premium-Taxiservice in Zug</strong> – dem wirtschaftlichen 
            Herz der Zentralschweiz. Ideal für <strong>Business-Fahrten</strong>, 
            <strong> Flughafentransfers</strong> und Fahrten im <strong>Crypto Valley</strong>.
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
            href="https://wa.me/41766113131?text=Hallo,%20ich%20brauche%20ein%20Taxi%20in%20Zug"
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
          <div className="rounded-2xl bg-gradient-to-br from-amber-900/30 to-black border border-amber-500/30 p-6">
            <div className="text-3xl mb-3">💼</div>
            <h2 className="text-xl font-bold text-white mb-2">Business Transfer</h2>
            <p className="text-gray-300 text-sm">
              Diskrete <strong>Business-Fahrten</strong> zu Meetings, Hotels und Firmenevents. 
              Monatsrechnung für Firmenkunden möglich.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 to-black border border-blue-500/30 p-6">
            <div className="text-3xl mb-3">✈️</div>
            <h2 className="text-xl font-bold text-white mb-2">Flughafentransfer</h2>
            <p className="text-gray-300 text-sm">
              Schneller Transfer zum <strong>Flughafen Zürich</strong> in ca. 35-45 Minuten. 
              Pünktlichkeit garantiert.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 p-6">
            <div className="text-3xl mb-3">🏢</div>
            <h2 className="text-xl font-bold text-white mb-2">Crypto Valley</h2>
            <p className="text-gray-300 text-sm">
              Fahrten zu <strong>Crypto-Unternehmen</strong> in Zug und Baar. 
              Professioneller Service für die Tech-Branche.
            </p>
          </div>
        </div>

        {/* Business Highlight */}
        <div className="rounded-2xl bg-amber-900/20 border border-amber-500/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Business-Service für Firmenkunden
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-nova-gold font-semibold mb-2">Unsere Business-Leistungen</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Flughafenabholung mit Namensschild</li>
                <li>• Fahrten zu Meetings und Konferenzen</li>
                <li>• Hoteltransfers für Geschäftsgäste</li>
                <li>• VIP-Service auf Anfrage</li>
              </ul>
            </div>
            <div>
              <p className="text-nova-gold font-semibold mb-2">Beliebte Business-Ziele</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Crypto Valley (Zug/Baar)</li>
                <li>• Suurstoffi Rotkreuz</li>
                <li>• Business Parks Baar</li>
                <li>• Hotels Zug und Umgebung</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Warum Nova Taxi in Zug?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Schnelle Verfügbarkeit</p>
                <p className="text-sm text-gray-400">In 10-15 Minuten vor Ort</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Firmenrechnung</p>
                <p className="text-sm text-gray-400">Monatliche Sammelrechnung möglich</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Diskretion</p>
                <p className="text-sm text-gray-400">Professionell und vertraulich</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-nova-gold text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Premium-Fahrzeuge</p>
                <p className="text-sm text-gray-400">Komfortabel und repräsentativ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="rounded-2xl bg-nova-gold/20 border-2 border-nova-gold p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Taxi in Zug buchen
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Rufen Sie uns jetzt an oder schreiben Sie uns per WhatsApp. 
            Für Geschäftskunden: Fragen Sie nach unserem Firmenkunden-Service!
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
            <Link href="/ort/zug" className="text-nova-gold hover:text-nova-gold-soft">
              → Mehr über Zug
            </Link>
            <Link href="/business" className="text-nova-gold hover:text-nova-gold-soft">
              → Business Transfer
            </Link>
            <Link href="/kanton/zug" className="text-nova-gold hover:text-nova-gold-soft">
              → Kanton Zug
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
