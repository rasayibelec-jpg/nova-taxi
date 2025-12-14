export const metadata = {
  title: "Über uns | Nova Taxi",
  description:
    "Nova Taxi – moderner Taxi-Service aus der Zentralschweiz mit Fokus auf Pünktlichkeit, Komfort und persönlichem Service.",
};

export default function UeberUnsPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Über uns
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Nova Taxi – unterwegs für Sie in der Zentralschweiz.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Hinter Nova Taxi steht ein persönlicher, inhabergeführter
            Taxi-Service mit langjähriger Erfahrung. Unser Ziel: Fahrten, auf
            die Sie sich verlassen können – ob für den Alltag, besondere
            Anlässe oder wichtige Geschäftswege.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-gray-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Was uns wichtig ist:
            </h2>
            <ul className="space-y-2">
              <li>• Pünktlichkeit und Verlässlichkeit</li>
              <li>• Freundlicher, respektvoller Umgang</li>
              <li>• Saubere, gepflegte Fahrzeuge</li>
              <li>• Flexible Lösungen für Stammkundinnen und -kunden</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Regionale Verankerung
            </h2>
            <p>
              Nova Taxi ist in der Zentralschweiz zu Hause – mit Schwerpunkt auf
              Arth-Goldau, Luzern, Zug und den umliegenden Gemeinden. Wir
              kennen die Region, die Wege und die typischen Fahrbedürfnisse
              unserer Kundschaft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
