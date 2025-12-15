import PriceCalculator from "@/components/common/PriceCalculator";

export const metadata = {
  title: "Preise & Richtwerte | Nova Taxi",
  description:
    "Transparente Preisgestaltung bei Nova Taxi – faire Richtwerte für Fahrten in der Zentralschweiz und zu den Flughäfen.",
};

export default function PreisePage() {
  return (
    <section className="section-padding">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Preise
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Faire Preise mit klarer Kommunikation.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Jede Fahrt ist individuell – dennoch ist Transparenz bei den Kosten
            wichtig. Deshalb informieren wir Sie vor der Fahrt über den
            voraussichtlichen Preis und berücksichtigen Distanz, Tageszeit und
            besondere Wünsche.
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
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Unverbindliche Preisabfrage
            </h2>
            <p>
              Am einfachsten ist eine kurze Anfrage mit Start, Ziel, Datum,
              Uhrzeit und Anzahl Personen. Wir nennen Ihnen einen klaren
              Richtwert, bevor Sie buchen.
            </p>
            <div className="space-y-2 mt-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                Preis telefonisch anfragen
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Preis per E-Mail anfragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
