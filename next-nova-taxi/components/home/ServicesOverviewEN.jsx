export default function ServicesOverviewEN() {
  const services = [
    {
      title: "Airport Transfer",
      description:
        "Direct transfers to Zurich and Basel airports – plannable, punctual and with plenty of space for your luggage.",
      details: "Ideal for business and private travel. Return journey planning available on request.",
      tag: "Airport"
    },
    {
      title: "Business Rides",
      description:
        "Discreet rides to meetings, hotels and events. Reliable service for your clients and partners.",
      details: "Waiting time and multiple stops available on request.",
      tag: "Business"
    },
    {
      title: "Courier & Special Services",
      description:
        "Important documents, medical records or urgent deliveries – securely and directly delivered.",
      details: "Individual solutions for businesses and private customers.",
      tag: "Express"
    },
    {
      title: "Local Rides",
      description:
        "Short trips in Arth-Goldau, Lucerne, Zug and surroundings – flexible, spontaneous and reliable.",
      details: "Also available late evenings and weekends.",
      tag: "Local"
    }
  ];

  return (
    <section id="services" className="section-padding border-b border-white/10">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Services
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Rides that fit your everyday life.
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Nova Taxi covers your daily commutes as well as special occasions –
            from spontaneous rides home to planned airport transfers for your
            next business trip.
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
