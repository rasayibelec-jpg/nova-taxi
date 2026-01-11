export const metadata = {
  title: "About Us | Nova Taxi",
  description:
    "Nova Taxi – modern taxi service from Central Switzerland focused on punctuality, comfort and personal service.",
  alternates: {
    canonical: "https://www.nova-taxi.com/en/ueber-uns",
    languages: {
      'de': 'https://www.nova-taxi.com/ueber-uns',
      'en': 'https://www.nova-taxi.com/en/ueber-uns',
    },
  },
};

export default function AboutUsPageEN() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            About Us
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Nova Taxi – on the road for you in Central Switzerland.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Behind Nova Taxi is a personal, owner-operated taxi service with
            years of experience. Our goal: rides you can rely on – whether for
            everyday life, special occasions or important business trips.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-gray-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              What matters to us:
            </h2>
            <ul className="space-y-2">
              <li>• Punctuality and reliability</li>
              <li>• Friendly, respectful interaction</li>
              <li>• Clean, well-maintained vehicles</li>
              <li>• Flexible solutions for regular customers</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Regional Roots
            </h2>
            <p>
              Nova Taxi is at home in Central Switzerland – with a focus on
              Arth-Goldau, Lucerne, Zug and the surrounding communities. We
              know the region, the routes and the typical transportation needs
              of our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
