import PriceCalculatorEN from "@/components/common/PriceCalculatorEN";

export const metadata = {
  title: "Prices & Estimates | Nova Taxi",
  description:
    "Transparent pricing at Nova Taxi – fair estimates for rides in Central Switzerland and to the airports.",
  alternates: {
    canonical: "https://www.nova-taxi.com/en/preise",
    languages: {
      'de': 'https://www.nova-taxi.com/preise',
      'en': 'https://www.nova-taxi.com/en/preise',
    },
  },
};

export default function PricesPageEN() {
  return (
    <section className="section-padding">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Prices
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Fair prices with clear communication.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Every ride is individual – yet transparency in costs is important.
            That's why we inform you about the expected price before the ride
            and consider distance, time of day and special requests.
          </p>
        </div>

        <PriceCalculatorEN />

        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-gray-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              What affects the price:
            </h2>
            <ul className="space-y-2">
              <li>• Distance and travel time</li>
              <li>• Time of day (Day / Night / Weekend)</li>
              <li>• Number of passengers and luggage</li>
              <li>• Waiting at destination or intermediate stops</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Non-binding price inquiry
            </h2>
            <p>
              The easiest way is a short inquiry with start, destination, date,
              time and number of passengers. We'll give you a clear estimate
              before you book.
            </p>
            <div className="space-y-2 mt-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                Request price by phone
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Request price by email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
