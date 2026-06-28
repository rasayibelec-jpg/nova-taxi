export const metadata = {
  title: "Flughafentransfer Zürich & Basel | Flughafentaxi Zentralschweiz - Nova Taxi",
  description:
    "Flughafentransfer Zürich und Basel mit Nova Taxi – pünktlich, komfortabel und planbar. Transfer von Schwyz, Luzern, Zug zum Flughafen. ☎ 076 611 31 31 – Jetzt buchen!",
  keywords: [
    "Flughafentransfer Zürich",
    "Flughafentaxi Zentralschweiz",
    "Taxi zum Flughafen",
    "Taxi von Schwyz zum Flughafen Zürich",
    "Airport Transfer Luzern",
    "Flughafen Basel Taxi",
    "Transfer zum Flughafen"
  ],
  alternates: {
    canonical: "https://www.nova-taxi.com/flughafentransfer",
    languages: {
      de: "https://www.nova-taxi.com/flughafentransfer",
      en: "https://www.nova-taxi.com/en/flughafentransfer",
    },
  },
  openGraph: {
    title: "Flughafentransfer Zürich & Basel | Nova Taxi Zentralschweiz",
    description: "Flughafentransfer Zürich und Basel mit Nova Taxi – pünktlich, komfortabel und planbar.",
    url: "https://www.nova-taxi.com/flughafentransfer",
    siteName: "Nova Taxi",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flughafentransfer Zürich & Basel | Nova Taxi",
    description: "Pünktlicher Flughafentransfer ab CHF 180. Schwyz, Luzern, Zug → ZRH. 24/7 erreichbar.",
  },
};

export default function FlughafentransferPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was kostet ein Taxi von Schwyz zum Flughafen Zürich?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Taxi von Schwyz zum Flughafen Zürich kostet zwischen CHF 85 und CHF 110, je nach genauem Abholort. Kontaktieren Sie uns für ein unverbindliches Festpreisangebot."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet ein Taxi von Luzern zum Flughafen Zürich?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Preis für einen Flughafentransfer von Luzern nach Zürich liegt zwischen CHF 95 und CHF 120. Festpreise auf Anfrage."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet ein Taxi von Zug zum Flughafen Zürich?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Flughafentransfer von Zug nach Zürich kostet ca. CHF 70 bis CHF 90. Rufen Sie uns an für einen Festpreis."
        }
      },
      {
        "@type": "Question",
        "name": "Wie früh kann ich Nova Taxi für einen Flughafentransfer buchen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir sind 24/7 erreichbar – auch für Frühflüge ab 4:00 Uhr morgens. Wir empfehlen eine Buchung mindestens einen Tag im Voraus, kurzfristige Buchungen sind aber ebenfalls möglich."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Zahlungsmittel akzeptiert Nova Taxi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir akzeptieren Bargeld, Kreditkarte (Visa, Mastercard) und TWINT. Für Firmenkunden bieten wir auch Rechnung an."
        }
      }
    ]
  };

  return (
    <section className="section-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Flughafentransfer Zürich & Basel
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Professioneller Flughafentransfer aus der Zentralschweiz
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Mit Nova Taxi starten Sie stressfrei in den Urlaub oder auf Ihre
            Geschäftsreise. Wir holen Sie rechtzeitig zu Hause, im Hotel oder im
            Büro ab und bringen Sie direkt zu den <strong>Flughäfen Zürich oder Basel</strong> – 
            ohne Umwege und mit genügend Platz für Ihr Gepäck.
          </p>
          <p className="text-sm text-gray-400">
            <strong>Flughafentaxi Zentralschweiz</strong> – Transfer von Schwyz, Luzern, Zug, 
            Arth-Goldau, Küssnacht am Rigi, Brunnen, Einsiedeln und weiteren Orten zum Flughafen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              Was Sie von unserem Flughafentransfer erwarten können:
            </h2>
            <ul className="space-y-2">
              <li>• Pünktliche Abholung – auch früh morgens oder spät abends</li>
              <li>• <strong>Flughafentransfer Zürich</strong> und Basel</li>
              <li>• Komfortable Fahrzeuge mit ausreichend Stauraum</li>
              <li>• Feste Treffpunkte an Bahnhof, Hotel oder Geschäftsadresse</li>
              <li>• Auf Wunsch Hin- und Rückfahrt im Voraus planbar</li>
              <li>• <strong>Grossraumtaxi</strong> für Gruppen auf Anfrage</li>
            </ul>
            <div className="pt-4 space-y-2 text-sm text-gray-400">
              <p>
                <strong>24/7 Taxiservice</strong> – Frühflüge, Spätflüge, kein Problem! 
                Wir sind rund um die Uhr für Sie da.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Flughafentransfer buchen
            </h2>
            <p>
              Für ein unverbindliches Angebot oder eine direkte Buchung rufen
              Sie uns einfach an oder senden Sie uns Ihre Flugdaten per E-Mail/WhatsApp.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                ☎ 24/7 Telefon: 076 611 31 31
              </a>
              <a
                href="https://wa.me/41766113131"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-green-500 px-5 py-3 text-center text-sm font-medium text-green-400 hover:bg-green-500/10 transition-colors"
              >
                💬 WhatsApp buchen
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                ✉ E-Mail: info@nova-taxi.com
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Bitte geben Sie bei Ihrer Anfrage Abholort, Datum, Uhrzeit und
              Anzahl Personen an. <strong>Taxi mit Kreditkarte bezahlen</strong> möglich.
            </p>
          </div>
        </div>

        {/* Beispielrouten und FAQ */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Beliebte Flughafentransfer-Routen
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-nova-gold">Schwyz → Flughafen Zürich</h3>
              <p className="text-sm text-gray-400">
                Ca. 45-55 Min. Fahrzeit. Festpreis auf Anfrage.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-nova-gold">Luzern → Flughafen Zürich</h3>
              <p className="text-sm text-gray-400">
                Ca. 50-60 Min. Fahrzeit. Festpreis auf Anfrage.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-nova-gold">Zug → Flughafen Zürich</h3>
              <p className="text-sm text-gray-400">
                Ca. 35-45 Min. Fahrzeit. Festpreis auf Anfrage.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            Häufige Fragen zum Flughafentransfer
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Was kostet ein Taxi von Schwyz zum Flughafen Zürich?
              </h3>
              <p className="text-sm text-gray-400">
                Der Preis variiert je nach genauem Abholort. Kontaktieren Sie uns 
                für ein unverbindliches Festpreisangebot.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Wann sollte ich den Flughafentransfer buchen?
              </h3>
              <p className="text-sm text-gray-400">
                Wir empfehlen eine Buchung mindestens einen Tag im Voraus. 
                Kurzfristige Buchungen sind aber auch möglich – rufen Sie uns an!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
