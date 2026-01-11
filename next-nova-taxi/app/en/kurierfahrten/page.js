export const metadata = {
  title: "Courier & Special Services | Nova Taxi",
  description:
    "Courier services with Nova Taxi – secure and direct delivery of important documents, records and shipments in Central Switzerland.",
  alternates: {
    canonical: "https://www.nova-taxi.com/en/kurierfahrten",
    languages: {
      'de': 'https://www.nova-taxi.com/kurierfahrten',
      'en': 'https://www.nova-taxi.com/en/kurierfahrten',
    },
  },
};

export default function CourierPageEN() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Courier & Special Services
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            When it's important, Nova Taxi delivers personally.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            For urgent documents, medical records or time-sensitive deliveries,
            a standard courier service is often too slow or inflexible. With
            Nova Taxi, your shipments are delivered personally and directly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              Typical courier & special services:
            </h2>
            <ul className="space-y-2">
              <li>• Important contracts and documents</li>
              <li>• Medical records and test results</li>
              <li>• Urgent deliveries for businesses</li>
              <li>• Individual special rides on request</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Courier ride inquiry
            </h2>
            <p>
              Briefly describe what needs to be transported, from where to where
              and by when. We'll get back to you with a concrete proposal.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                Call Now
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Email Inquiry
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              All shipments are treated confidentially and transported directly
              – without reloading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
