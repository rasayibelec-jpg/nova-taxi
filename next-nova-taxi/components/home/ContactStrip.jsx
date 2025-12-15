export default function ContactStrip() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="rounded-3xl border border-nova-gold/40 bg-gradient-to-r from-black via-black to-nova-bg-soft px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
              Kontakt
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Jetzt Fahrt anfragen oder direkt telefonisch bestellen.
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Egal ob sofortige Abholung oder geplante Fahrt – Nova Taxi ist für
              Sie da. Rufen Sie uns an oder senden Sie uns Ihre Anfrage per
              E-Mail.
            </p>
          </div>
          <div className="space-y-2 text-sm md:text-base min-w-[220px]">
            <a
              href="tel:+41766113131"
              className="block rounded-full bg-nova-gold px-5 py-3 text-center font-semibold text-black hover:bg-nova-gold-soft transition-colors"
            >
              Telefon: 076 611 31 31
            </a>
            <a
              href="mailto:info@nova-taxi.com"
              className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              E-Mail: info@nova-taxi.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
