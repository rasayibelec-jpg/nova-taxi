import PriceCalculator from "@/components/common/PriceCalculator";

export const metadata = {
  title: "Taxi Preise | Was kostet ein Taxi in der Zentralschweiz?",
  description:
    "Was kostet ein Taxi von Luzern nach Zug? Faire Taxi-Preise bei Nova Taxi – transparente Richtwerte für Fahrten in Schwyz, Luzern, Zug und zum Flughafen Zürich. ☎ 076 611 31 31",
  keywords: [
    "Taxi Preise",
    "Was kostet ein Taxi",
    "Taxi von Luzern nach Zug",
    "Taxi von Schwyz zum Flughafen Zürich",
    "Günstiges Taxi in der Nähe",
    "Taxi Kosten Zentralschweiz",
    "Flughafentransfer Preis"
  ],
  alternates: {
    canonical: "https://www.nova-taxi.com/preise",
    languages: {
      de: "https://www.nova-taxi.com/preise",
      en: "https://www.nova-taxi.com/en/preise",
    },
  },
  openGraph: {
    title: "Taxi Preise Zentralschweiz | Nova Taxi",
    description: "Transparente Taxi-Preise für Fahrten in Schwyz, Luzern, Zug und zum Flughafen Zürich.",
    url: "https://www.nova-taxi.com/preise",
    siteName: "Nova Taxi",
    locale: "de_CH",
    type: "website",
  },
};

export default function PreisePage() {
  return (
    <section className="section-padding">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Taxi Preise – Faire Tarife
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Was kostet ein Taxi in Schwyz, Luzern & Zug?
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Jede Fahrt ist individuell – dennoch ist Transparenz bei den Kosten
            wichtig. Deshalb informieren wir Sie vor der Fahrt über den
            voraussichtlichen Preis. <strong>Günstiges Taxi in der Nähe</strong> – faire Preise 
            für Fahrten in der Zentralschweiz.
          </p>
        </div>

        <PriceCalculator />

        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-gray-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Was in den Preis einfliesst:
            </h2>
            <ul className="space-y-2">
              <li>• Distanz und Fahrzeit</li>
              <li>• Tageszeit (Tag / Nacht / Wochenende)</li>
              <li>• Anzahl Personen und Gepäck</li>
              <li>• Warten am Zielort oder Zwischenstopps</li>
              <li>• <strong>Grossraumtaxi</strong> für Gruppen (Aufpreis)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Unverbindliche Preisabfrage
            </h2>
            <p>
              Am einfachsten ist eine kurze Anfrage mit Start, Ziel, Datum,
              Uhrzeit und Anzahl Personen. Wir nennen Ihnen einen klaren
              Richtwert, bevor Sie buchen. <strong>Taxi mit Kreditkarte bezahlen</strong> möglich.
            </p>
            <div className="space-y-2 mt-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                ☎ Preis telefonisch anfragen
              </a>
              <a
                href="https://wa.me/41766113131"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-green-500 px-5 py-3 text-center text-sm font-medium text-green-400 hover:bg-green-500/10 transition-colors"
              >
                💬 WhatsApp Preisanfrage
              </a>
            </div>
          </div>
        </div>

        {/* Beispielpreise und FAQ */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Häufige Fragen zu Taxi-Preisen
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Was kostet ein Taxi von Luzern nach Zug?
              </h3>
              <p className="text-sm text-gray-400">
                Die Fahrt von Luzern nach Zug kostet ca. CHF 60-80 je nach Verkehr 
                und Tageszeit. Kontaktieren Sie uns für ein genaues Angebot.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Was kostet ein Taxi von Schwyz zum Flughafen Zürich?
              </h3>
              <p className="text-sm text-gray-400">
                Der Flughafentransfer von Schwyz nach Zürich kostet ca. CHF 150-180. 
                Wir bieten faire Festpreise für Flughafentransfers.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Kann ich ein Taxi mit Kreditkarte bezahlen?
              </h3>
              <p className="text-sm text-gray-400">
                Ja! Wir akzeptieren Bargeld, Kreditkarten (Visa, Mastercard) 
                und Debitkarten. Bitte bei der Buchung angeben.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Gibt es ein günstiges Taxi in der Nähe?
              </h3>
              <p className="text-sm text-gray-400">
                Nova Taxi bietet faire Preise in der gesamten Zentralschweiz. 
                Rufen Sie uns an – wir sind schnell bei Ihnen!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
