export const metadata = {
  title: "Kurierdienst & Kurierfahrten | Express Kurier Zentralschweiz - Nova Taxi",
  description:
    "Kurierdienst & Kurierfahrten mit Nova Taxi – sichere und direkte Zustellung wichtiger Dokumente und Sendungen in Schwyz, Luzern & Zug. ☎ 076 611 31 31",
  keywords: [
    "Kurierdienst",
    "Kurierfahrten",
    "Express Kurier",
    "Dokumententransport",
    "Eilige Lieferung",
    "Kurier Zentralschweiz",
    "Direktfahrt"
  ],
};

export default function KurierfahrtenPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Kurierdienst & Kurierfahrten
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Professioneller Kurierdienst in der Zentralschweiz
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Für eilige Dokumente, medizinische Unterlagen oder dringende
            Lieferungen ist ein klassischer Paketdienst oft zu langsam oder zu
            unflexibel. Mit Nova Taxi werden Ihre Sendungen <strong>persönlich und
            direkt zugestellt</strong>.
          </p>
          <p className="text-sm text-gray-400">
            <strong>Express Kurier</strong> in Schwyz, Luzern, Zug und der gesamten Zentralschweiz – 
            schnell, sicher und vertraulich.
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
              <li>• Express-Zustellung in der Zentralschweiz</li>
              <li>• Same-Day-Delivery für zeitkritische Sendungen</li>
            </ul>
            <div className="pt-4 space-y-2 text-sm text-gray-400">
              <p>
                <strong>24/7 Kurierdienst</strong> – Auch ausserhalb der Geschäftszeiten.
              </p>
              <p>
                Alle Sendungen werden <strong>vertraulich</strong> behandelt und 
                direkt – ohne Umladung – transportiert.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Kurierfahrt anfragen
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
                ☎ Direkt anrufen: 076 611 31 31
              </a>
              <a
                href="https://wa.me/41766113131"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-green-500 px-5 py-3 text-center text-sm font-medium text-green-400 hover:bg-green-500/10 transition-colors"
              >
                💬 WhatsApp Anfrage
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                ✉ E-Mail Anfrage
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Alle Sendungen werden vertraulich behandelt. 
              <strong> Taxi mit Kreditkarte bezahlen</strong> möglich.
            </p>
          </div>
        </div>

        {/* Vorteile */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Vorteile unseres Kurierdienstes
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-nova-gold">Direktfahrt</h3>
              <p className="text-sm text-gray-400">
                Ihre Sendung wird direkt und ohne Umladung zum Ziel gebracht. 
                Keine Zwischenstopps, keine Verzögerungen.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-nova-gold">Vertraulich</h3>
              <p className="text-sm text-gray-400">
                Sensible Dokumente und Unterlagen werden diskret und 
                vertraulich behandelt.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-nova-gold">Flexibel</h3>
              <p className="text-sm text-gray-400">
                Kurzfristige Buchungen möglich. Wir passen uns Ihren 
                Zeitanforderungen an.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
