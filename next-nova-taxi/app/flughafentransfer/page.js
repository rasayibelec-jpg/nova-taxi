export const metadata = {
  title: "Flughafentransfer | Nova Taxi",
  description:
    "Direkter Flughafentransfer mit Nova Taxi – pünktlich, komfortabel und planbar. Fahrten zu den Flughäfen Zürich und Basel aus der Zentralschweiz.",
};

export default function FlughafentransferPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Flughafentransfer
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Entspannter Flughafentransfer für Ihre Reisen.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Mit Nova Taxi starten Sie stressfrei in den Urlaub oder auf Ihre
            Geschäftsreise. Wir holen Sie rechtzeitig zu Hause, im Hotel oder im
            Büro ab und bringen Sie direkt zu den Flughäfen Zürich oder Basel –
            ohne Umwege und mit genügend Platz für Ihr Gepäck.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              Was Sie von unserem Flughafentransfer erwarten können:
            </h2>
            <ul className="space-y-2">
              <li>• Pünktliche Abholung – auch früh morgens oder spät abends</li>
              <li>• Fahrten zu den Flughäfen Zürich und Basel</li>
              <li>• Komfortable Fahrzeuge mit ausreichend Stauraum</li>
              <li>• Feste Treffpunkte an Bahnhof, Hotel oder Geschäftsadresse</li>
              <li>• Auf Wunsch Hin- und Rückfahrt im Voraus planbar</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Anfrage & Buchung
            </h2>
            <p>
              Für ein unverbindliches Angebot oder eine direkte Buchung rufen
              Sie uns einfach an oder senden Sie uns Ihre Flugdaten per E-Mail.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                24/7 Telefon: 076 611 31 31
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                E-Mail: info@nova-taxi.com
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Bitte geben Sie bei Ihrer Anfrage Abholort, Datum, Uhrzeit und
              Anzahl Personen an – so können wir Ihnen schnell ein passendes
              Angebot machen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
