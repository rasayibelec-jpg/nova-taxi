export const metadata = {
  title: "Über uns | Taxi Zentralschweiz - Nova Taxi Schwyz, Luzern & Zug",
  description:
    "Nova Taxi – Ihr professioneller Taxiservice in der Zentralschweiz. Erfahren Sie mehr über unseren 24/7 Service in Schwyz, Luzern und Zug. Zuverlässig und pünktlich!",
  keywords: [
    "Taxi Zentralschweiz",
    "Taxiservice Schwyz",
    "Taxi Luzern",
    "Taxi Zug",
    "Professioneller Taxiservice",
    "24h Taxi"
  ],
};

export default function UeberUnsPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Taxi Zentralschweiz – Über uns
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Ihr professioneller Taxiservice in der Zentralschweiz
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Hinter Nova Taxi steht ein persönlicher, inhabergeführter
            Taxi-Service mit langjähriger Erfahrung. Unser Ziel: Fahrten, auf
            die Sie sich verlassen können – ob für den Alltag, besondere
            Anlässe oder wichtige Geschäftswege in <strong>Schwyz, Luzern und Zug</strong>.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-gray-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Was uns wichtig ist:
            </h2>
            <ul className="space-y-2">
              <li>• <strong>Pünktlichkeit und Verlässlichkeit</strong> – 24/7 Taxiservice</li>
              <li>• Freundlicher, respektvoller Umgang</li>
              <li>• Saubere, gepflegte Fahrzeuge</li>
              <li>• <strong>Grossraumtaxi</strong> für Gruppen auf Anfrage</li>
              <li>• <strong>Kindersitz Taxi</strong> für Familien</li>
              <li>• Flexible Lösungen für Stammkundinnen und -kunden</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Regionale Verankerung – Taxi Schwyz, Luzern & Zug
            </h2>
            <p>
              Nova Taxi ist in der Zentralschweiz zu Hause – mit Schwerpunkt auf
              <strong> Arth-Goldau, Luzern, Zug, Schwyz</strong> und den umliegenden Gemeinden. 
              Wir kennen die Region, die Wege und die typischen Fahrbedürfnisse
              unserer Kundschaft.
            </p>
            <p className="pt-2">
              <strong>Unsere Servicegebiete:</strong> Kanton Schwyz (Küssnacht am Rigi, 
              Brunnen, Einsiedeln), Kanton Zug (Baar, Cham, Steinhausen), 
              Kanton Luzern (Kriens, Emmen, Horw, Sursee).
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Unsere Leistungen
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div>
              <h3 className="font-medium text-nova-gold mb-2">Flughafentransfer Zürich</h3>
              <p className="text-gray-400">
                Direktfahrten zum Flughafen Zürich und Basel aus der gesamten Zentralschweiz.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-nova-gold mb-2">VIP & Business Transfer</h3>
              <p className="text-gray-400">
                Diskrete Fahrten zu Meetings, Hotels und Events für Geschäftskunden.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-nova-gold mb-2">Kurierdienst</h3>
              <p className="text-gray-400">
                Schnelle und sichere Kurierfahrten für wichtige Dokumente und Sendungen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
