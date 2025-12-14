export const metadata = {
  title: "Kontakt | Nova Taxi",
  description:
    "Kontakt zu Nova Taxi – 24/7 erreichbar für Fahrten, Anfragen und Angebote in der Zentralschweiz.",
};

export default function KontaktPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Kontakt
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            So erreichen Sie Nova Taxi.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Egal ob sofortige Fahrt, geplante Buchung oder eine allgemeine
            Anfrage – wir sind gerne für Sie da.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-gray-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Kontaktmöglichkeiten
            </h2>
            <p>
              <strong>Telefon (24/7):</strong> 076 611 31 31
            </p>
            <p>
              <strong>E-Mail:</strong> info@nova-taxi.com
            </p>
            <p>
              <strong>Adresse:</strong>
              <br />
              Nova Taxi
              <br />
              Türlihof 4
              <br />
              6414 Oberarth, Schwyz
            </p>
          </div>

          <div className="space-y-3 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Anfrage per E-Mail
            </h2>
            <p>
              Für Buchungsanfragen können Sie uns bereits folgende Informationen
              mitteilen:
            </p>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>• Datum und Uhrzeit</li>
              <li>• Abholort und Zielort</li>
              <li>• Anzahl Personen</li>
              <li>• Besonderheiten (z.B. viel Gepäck, Kindersitz, etc.)</li>
            </ul>
            <p className="text-xs text-gray-400 pt-2">
              Wir melden uns schnellstmöglich mit einer Rückmeldung oder einem
              Richtpreis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
