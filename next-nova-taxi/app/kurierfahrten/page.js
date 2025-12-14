export const metadata = {
  title: "Kurierfahrten & Sonderfahrten | Nova Taxi",
  description:
    "Kurierfahrten mit Nova Taxi – sichere und direkte Zustellung wichtiger Dokumente, Unterlagen und Sendungen in der Zentralschweiz.",
};

export default function KurierfahrtenPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Kurier- & Sonderfahrten
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Wenn es wichtig ist, fährt Nova Taxi persönlich.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Für eilige Dokumente, medizinische Unterlagen oder dringende
            Lieferungen ist ein klassischer Paketdienst oft zu langsam oder zu
            unflexibel. Mit Nova Taxi werden Ihre Sendungen persönlich und
            direkt zugestellt.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              Typische Kurier- & Sonderfahrten:
            </h2>
            <ul className="space-y-2">
              <li>• Wichtige Vertragsunterlagen und Dokumente</li>
              <li>• Medizinische Unterlagen und Befunde</li>
              <li>• Eilige Lieferungen für Unternehmen</li>
              <li>• Individuelle Spezialfahrten auf Anfrage</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Anfrage für eine Kurierfahrt
            </h2>
            <p>
              Beschreiben Sie uns kurz, was transportiert werden soll, von wo
              nach wo und bis wann. Wir melden uns mit einem konkreten
              Vorschlag.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                Direkt anrufen
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Anfrage per E-Mail
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Alle Sendungen werden vertraulich behandelt und direkt – ohne
              Umladung – transportiert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
