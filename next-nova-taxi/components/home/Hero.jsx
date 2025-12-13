import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-padding border-b border-white/10 bg-gradient-to-b from-black to-nova-bg-soft">
      <div className="container grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Premium Taxi-Service
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Nova Taxi – moderne Fahrten in der gesamten Zentralschweiz.
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
              Flughafentransfer, Businessfahrten, Kurierfahrten oder die Fahrt nach
              Hause – Nova Taxi bringt Sie sicher und pünktlich ans Ziel. 24/7
              erreichbar, mit persönlichem Service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-500/20 hover:bg-nova-gold-soft transition-colors"
            >
              Preis & Angebote ansehen
            </Link>
            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              24/7: 076 611 31 31
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Sofort verfügbar in Arth-Goldau, Luzern, Zug & Umgebung
            </span>
            <span>Flughafentransfer • Business • Kurier • Lokal</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-nova-gold/10 via-transparent to-nova-gold/30 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/60">
            <div className="mb-4 flex items-center justify-between text-xs text-gray-300">
              <span>Beispiel-Fahrt</span>
              <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-nova-gold">
                Nova Taxi
              </span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Abholung</span>
                <span className="font-medium text-white">Arth-Goldau</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Ziel</span>
                <span className="font-medium text-white">Flughafen Zürich</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Entfernung (ca.)</span>
                <span className="font-medium text-white">~ 52 km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Typische Fahrtzeit</span>
                <span className="font-medium text-white">45–55 Minuten</span>
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-black/60 px-4 py-3 text-xs text-gray-300 flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-nova-muted">
                  Unverbindliche Anfrage
                </div>
                <div className="text-sm font-medium text-white">
                  Preis für Ihre Strecke per Telefon oder E-Mail anfragen.
                </div>
              </div>
              <a
                href="mailto:info@nova-taxi.com"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-nova-gold px-4 py-2 text-[11px] font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
