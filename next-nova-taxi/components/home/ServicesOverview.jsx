export default function ServicesOverview() {
  const services = [
    {
      title: "Flughafentransfer",
      description:
        "Direkte Transfers zu den Flughäfen Zürich und Basel – planbar, pünktlich und mit genügend Platz für Ihr Gepäck.",
      details: "Ideal für Geschäfts- und Privatreisen. Auf Wunsch mit Rückfahrt-Planung.",
      tag: "Airport"
    },
    {
      title: "Businessfahrten",
      description:
        "Diskrete Fahrten zu Meetings, Hotels und Events. Zuverlässiger Auftritt für Ihre Kundinnen und Kunden.",
      details: "Auf Wunsch mit Wartezeit und mehreren Stopps.",
      tag: "Business"
    },
    {
      title: "Kurier- & Sonderfahrten",
      description:
        "Wichtige Dokumente, medizinische Unterlagen oder eilige Sendungen – sicher und direkt zugestellt.",
      details: "Individuelle Lösungen für Unternehmen und Privatkunden.",
      tag: "Express"
    },
    {
      title: "Lokale Fahrten",
      description:
        "Kurzstrecken in Arth-Goldau, Luzern, Zug und Umgebung – flexibel, spontan und zuverlässig.",
      details: "Auch spät abends und am Wochenende erreichbar.",
      tag: "Lokal"
    }
  ];

  return (
    <section id="services" className="section-padding border-b border-white/10">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Dienstleistungen
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Fahrten, die zu Ihrem Alltag passen.
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Nova Taxi deckt Ihre täglichen Wege ebenso ab wie besondere Anlässe –
            von der spontanen Fahrt nach Hause bis zum geplanten Flughafentransfer
            für den nächsten Business-Trip.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition-transform hover:-translate-y-1 hover:border-nova-gold/50"
            >
              <div className="mb-3 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-nova-muted">
                {service.tag}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                {service.description}
              </p>
              <p className="text-xs text-gray-400">{service.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
