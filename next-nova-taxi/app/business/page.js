export const metadata = {
  title: "Businessfahrten | Nova Taxi",
  description:
    "Businessfahrten mit Nova Taxi – diskret, pünktlich und professionell. Fahrten zu Meetings, Hotels und Events in der ganzen Zentralschweiz.",
};

export default function BusinessPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Businessfahrten
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Diskrete Fahrten für Geschäfts- und Firmenkunden.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Ob wichtiges Meeting, Hoteltransfer oder Event – Nova Taxi sorgt
            dafür, dass Sie und Ihre Gäste pünktlich und stilvoll ankommen.
            Diskret, zuverlässig und auf Ihre Bedürfnisse abgestimmt.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              Ideal für Unternehmen, Agenturen und Hotels:
            </h2>
            <ul className="space-y-2">
              <li>• Fahrten zu Meetings, Seminaren und Konferenzen</li>
              <li>• Hoteltransfers für Gäste und Geschäftspartner</li>
              <li>• Fahrservices für Events und Firmenanlässe</li>
              <li>• Planung von wiederkehrenden Fahrten nach Bedarf</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Individuelle Offerte für Firmenkunden
            </h2>
            <p>
              Für regelmässige Fahrten oder spezielle Anforderungen erstellen
              wir gerne eine individuelle Offerte. Kontaktieren Sie uns mit den
              wichtigsten Eckdaten – wir melden uns schnell bei Ihnen.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                Telefonische Anfrage
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                E-Mail: info@nova-taxi.com
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Auf Wunsch mit Sammelrechnung und festen Ansprechpartnern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
