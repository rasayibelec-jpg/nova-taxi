export const metadata = {
  title: "Business Rides | Nova Taxi",
  description:
    "Business rides with Nova Taxi – discreet, punctual and professional. Rides to meetings, hotels and events throughout Central Switzerland.",
  alternates: {
    canonical: "https://www.nova-taxi.com/en/business",
    languages: {
      'de': 'https://www.nova-taxi.com/business',
      'en': 'https://www.nova-taxi.com/en/business',
    },
  },
};

export default function BusinessPageEN() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Business Rides
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Discreet rides for business and corporate clients.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Whether important meeting, hotel transfer or event – Nova Taxi ensures
            you and your guests arrive punctually and in style. Discreet,
            reliable and tailored to your needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              Ideal for companies, agencies and hotels:
            </h2>
            <ul className="space-y-2">
              <li>• Rides to meetings, seminars and conferences</li>
              <li>• Hotel transfers for guests and business partners</li>
              <li>• Chauffeur services for events and corporate functions</li>
              <li>• Planning of recurring rides as needed</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Individual offer for corporate clients
            </h2>
            <p>
              For regular rides or special requirements, we're happy to create
              an individual offer. Contact us with the key details – we'll get
              back to you quickly.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                Phone Inquiry
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Email: info@nova-taxi.com
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Consolidated invoicing and dedicated contacts available on request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
