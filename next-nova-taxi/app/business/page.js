export const metadata = {
  title: "VIP & Business Transfer | Businessfahrten Zentralschweiz - Nova Taxi",
  description:
    "VIP & Business Transfer mit Nova Taxi – diskret, pünktlich und professionell. Fahrten zu Meetings, Hotels und Events in Schwyz, Luzern & Zug. ☎ 076 611 31 31",
  keywords: [
    "VIP Transfer",
    "Business Transfer",
    "Businessfahrten Zentralschweiz",
    "Taxi Meeting",
    "Hotel Transfer",
    "Firmenkunden Taxi",
    "Chauffeurservice"
  ],
};

export default function BusinessPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            VIP & Business Transfer
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Professionelle Businessfahrten in der Zentralschweiz
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Ob wichtiges Meeting, Hoteltransfer oder Event – Nova Taxi sorgt
            dafür, dass Sie und Ihre Gäste pünktlich und stilvoll ankommen.
            <strong> Diskret, zuverlässig und auf Ihre Bedürfnisse abgestimmt.</strong>
          </p>
          <p className="text-sm text-gray-400">
            <strong>VIP Transfer</strong> in Schwyz, Luzern, Zug und der gesamten Zentralschweiz – 
            für Geschäftsreisende, Firmenkunden und anspruchsvolle Privatpersonen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              Ideal für Unternehmen, Agenturen und Hotels:
            </h2>
            <ul className="space-y-2">
              <li>• Fahrten zu Meetings, Seminaren und Konferenzen</li>
              <li>• <strong>Hotel Transfer</strong> für Gäste und Geschäftspartner</li>
              <li>• Fahrservices für Events und Firmenanlässe</li>
              <li>• Planung von wiederkehrenden Fahrten nach Bedarf</li>
              <li>• <strong>Bahnhof Taxi</strong> – Luzern, Zug, Arth-Goldau</li>
              <li>• Flughafentransfer für Geschäftsreisende</li>
            </ul>
            <div className="pt-4 space-y-2 text-sm text-gray-400">
              <p>
                <strong>24/7 Taxiservice</strong> – Auch für frühe Meetings oder späte Events.
              </p>
              <p>
                <strong>Grossraumtaxi</strong> – Für Gruppen und Delegationen auf Anfrage.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Individuelle Offerte für Firmenkunden
            </h2>
            <p>
              Für regelmässige Fahrten oder spezielle Anforderungen erstellen
              wir gerne eine individuelle Offerte. Kontaktieren Sie uns mit den
              wichtigsten Eckdaten – wir melden uns schnell bei Ihnen.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                ☎ Telefonische Anfrage
              </a>
              <a
                href="https://wa.me/41766113131"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-green-500 px-5 py-3 text-center text-sm font-medium text-green-400 hover:bg-green-500/10 transition-colors"
              >
                💬 WhatsApp Business
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                ✉ E-Mail: info@nova-taxi.com
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Auf Wunsch mit Sammelrechnung und festen Ansprechpartnern.
              <strong> Taxi mit Kreditkarte bezahlen</strong> möglich.
            </p>
          </div>
        </div>

        {/* Service-Highlights */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Unsere Business-Services
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-nova-gold">VIP Transfer</h3>
              <p className="text-sm text-gray-400">
                Diskreter Service für Führungskräfte und wichtige Gäste. 
                Gepflegte Fahrzeuge und professionelles Auftreten.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-nova-gold">Firmenkonto</h3>
              <p className="text-sm text-gray-400">
                Monatliche Sammelrechnung für Unternehmen. 
                Vereinfachte Abwicklung für regelmässige Fahrten.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-nova-gold">Event-Service</h3>
              <p className="text-sm text-gray-400">
                Shuttle-Service für Firmenanlässe, Konferenzen und Events 
                in der Zentralschweiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
