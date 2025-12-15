import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative section-padding border-b border-white/10 overflow-hidden min-h-[520px] md:min-h-[620px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://customer-assets.emergentagent.com/job_taxi-nextjs/artifacts/d7vtjiwn_2224057D-3241-432A-AA5B-D7EABEF441A0_1_105_c.jpeg"
          alt="Nova Taxi Fahrzeug vor dem Bahnhof"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="container grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center relative z-10">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Premium Taxi-Service
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Nova Taxi – moderne Fahrten in der gesamten Zentralschweiz.
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
              Flughafentransfer, Businessfahrten, Kurierfahrten oder die Fahrt
              nach Hause – Nova Taxi bringt Sie sicher und pünktlich ans Ziel.
              24/7 erreichbar, mit persönlichem Service.
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
              Telefon: 076 611 31 31
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-300">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Sofort verfügbar in Arth-Goldau, Luzern, Zug & Umgebung
            </span>
            <span className="text-gray-400">
              Flughafentransfer • Business • Kurier • Lokal
            </span>
          </div>
        </div>

        <div className="relative mt-4 md:mt-0">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-nova-gold/15 via-transparent to-nova-gold/40 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-black/60 p-5 shadow-2xl shadow-black/70 backdrop-blur">
            <div className="mb-4 flex items-center justify-between text-xs text-gray-300">
              <span>Beispiel-Fahrt</span>
              <span className="rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-nova-gold">
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
            <div className="mt-5 rounded-2xl bg-black/70 px-4 py-3 text-xs text-gray-300 flex items-center justify-between gap-3">
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
