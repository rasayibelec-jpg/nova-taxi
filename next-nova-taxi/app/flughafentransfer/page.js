import BookingButton from "@/components/booking/BookingButton";

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
};

export default function FlughafentransferPage() {
  return (
    <section className="section-padding">
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
          <div className="pt-2">
            <BookingButton prefillDestination="Flughafen Zürich" testId="flughafen-booking-button" />
          </div>
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

        {/* Preistabelle Flughafentransfer */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              ✈️ Flughafentransfer – Luzern, Zug, Schwyz &amp; Umgebung
            </h2>
            <p className="text-sm text-gray-400">
              Richtpreise ab dem jeweiligen Ortszentrum zu den Flughäfen Zürich und Basel (EuroAirport).
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-gray-400 font-medium">
                      Abfahrtsort
                    </th>
                    <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-gray-400 font-medium">
                      Zürich Flughafen
                    </th>
                    <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-gray-400 font-medium">
                      EuroAirport Basel
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Luzern", "ab CHF 272.–", "ab CHF 447.–"],
                    ["Zug", "ab CHF 181.–", "ab CHF 468.–"],
                    ["Schwyz", "ab CHF 276.–", "ab CHF 561.–"],
                    ["Arth-Goldau", "ab CHF 264.–", "ab CHF 519.–"],
                    ["Brunnen", "ab CHF 313.–", "ab CHF 565.–"],
                    ["Küssnacht am Rigi", "ab CHF 232.–", "ab CHF 490.–"],
                    ["Weggis", "ab CHF 260.–", "ab CHF 527.–"],
                    ["Vitznau", "ab CHF 282.–", "ab CHF 519.–"],
                    ["Unterägeri", "ab CHF 192.–", "ab CHF 506.–"],
                    ["Oberägeri", "ab CHF 202.–", "ab CHF 502.–"],
                  ].map(([ort, zrh, bsl]) => (
                    <tr key={ort} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white font-medium">{ort}</td>
                      <td className="px-4 py-3 text-nova-gold">{zrh}</td>
                      <td className="px-4 py-3 text-nova-gold">{bsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Grundtaxe</p>
              <p className="text-lg font-semibold text-white">CHF 6.60</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Kilometerpreis</p>
              <p className="text-lg font-semibold text-white">CHF 4.20 / km</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Wartezeit</p>
              <p className="text-lg font-semibold text-white">CHF 72.– / Stunde</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 italic leading-relaxed">
            Alle Preise verstehen sich als Richtpreise ab dem jeweiligen Ortszentrum. Der definitive
            Fahrpreis wird anhand der tatsächlichen Abholadresse und Fahrstrecke berechnet.
          </p>

          <div className="pt-2">
            <BookingButton
              prefillDestination="Flughafen Zürich"
              label="Jetzt Flughafentransfer online buchen"
              testId="flughafen-preise-booking-button"
            />
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
