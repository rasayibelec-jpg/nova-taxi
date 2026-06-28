export const metadata = {
  title: "Kontakt | Taxi bestellen Schwyz, Luzern & Zug - Nova Taxi",
  description:
    "Taxi bestellen in der Zentralschweiz! Nova Taxi – 24/7 erreichbar für Fahrten, Flughafentransfers und Anfragen in Schwyz, Luzern & Zug. ☎ 076 611 31 31",
  keywords: [
    "Taxi bestellen",
    "Taxi Telefonnummer",
    "Taxi Schwyz",
    "Taxi Luzern",
    "Taxi Zug",
    "24/7 Taxi",
    "Taxi kontakt"
  ],
  alternates: {
    canonical: "https://www.nova-taxi.com/kontakt",
    languages: {
      de: "https://www.nova-taxi.com/kontakt",
      en: "https://www.nova-taxi.com/en/kontakt",
    },
  },
  openGraph: {
    title: "Kontakt – Nova Taxi Zentralschweiz",
    description: "Taxi bestellen in Schwyz, Luzern & Zug. 24/7 erreichbar – 076 611 31 31.",
    url: "https://www.nova-taxi.com/kontakt",
    siteName: "Nova Taxi",
    locale: "de_CH",
    type: "website",
  },
};

export default function KontaktPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Taxi bestellen – 24/7 Taxiservice
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Taxi bestellen in Schwyz, Luzern & Zug
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Egal ob sofortige Fahrt, geplante Buchung oder eine allgemeine
            Anfrage – wir sind gerne für Sie da. <strong>24/7 Taxiservice</strong> in der 
            gesamten Zentralschweiz.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-gray-300 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Taxi Telefonnummer – Sofort erreichbar
            </h2>
            <div className="space-y-3">
              <a
                href="tel:+41766113131"
                className="flex items-center gap-3 text-nova-gold hover:text-nova-gold-soft transition-colors text-lg font-semibold"
              >
                ☎ 076 611 31 31
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                ✉ info@nova-taxi.com
              </a>
              <a
                href="https://wa.me/41766113131"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
              >
                💬 WhatsApp Anfrage
              </a>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                <strong>Adresse:</strong><br />
                Nova Taxi<br />
                Türlihof 4<br />
                6414 Oberarth, Schwyz
              </p>
            </div>
            <div className="pt-2">
              <p className="text-sm text-gray-400">
                Servicegebiete: Schwyz, Luzern, Zug, Arth-Goldau, Küssnacht am Rigi, 
                Brunnen, Einsiedeln, Baar, Cham, Kriens, Emmen und weitere.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white">
              Taxi online buchen
            </h2>
            <p className="text-sm text-gray-300">
              Für Buchungsanfragen können Sie uns bereits folgende Informationen
              mitteilen:
            </p>
            <ul className="space-y-1 text-xs md:text-sm text-gray-300">
              <li>• Datum und Uhrzeit</li>
              <li>• Abholort und Zielort</li>
              <li>• Anzahl Personen</li>
              <li>• Besonderheiten (z.B. viel Gepäck, Kindersitz, Grossraumtaxi)</li>
            </ul>
            <div className="pt-4 space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                Jetzt Taxi bestellen
              </a>
              <a
                href="https://wa.me/41766113131"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-green-500 px-5 py-3 text-center text-sm font-medium text-green-400 hover:bg-green-500/10 transition-colors"
              >
                Per WhatsApp buchen
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Wir melden uns schnellstmöglich mit einer Bestätigung oder einem
              Richtpreis. <strong>Taxi mit Kreditkarte bezahlen</strong> möglich.
            </p>
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <div className="space-y-4 pt-8 border-t border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Häufige Fragen
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Wo finde ich ein günstiges Taxi in der Nähe?
              </h3>
              <p className="text-sm text-gray-400">
                Nova Taxi bietet faire Preise in der gesamten Zentralschweiz. 
                Rufen Sie uns an für ein unverbindliches Angebot!
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Kann ich ein Taxi mit Kindersitz buchen?
              </h3>
              <p className="text-sm text-gray-400">
                Ja! Kindersitz Taxi ist auf Anfrage verfügbar. 
                Bitte geben Sie dies bei der Buchung an.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
