export const metadata = {
  title: "Airport Transfer | Nova Taxi",
  description:
    "Direct airport transfer with Nova Taxi – punctual, comfortable and plannable. Rides to Zurich and Basel airports from Central Switzerland.",
  alternates: {
    canonical: "https://www.nova-taxi.com/en/flughafentransfer",
    languages: {
      'de': 'https://www.nova-taxi.com/flughafentransfer',
      'en': 'https://www.nova-taxi.com/en/flughafentransfer',
    },
  },
};

export default function AirportTransferPageEN() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-nova-muted">
            Airport Transfer
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Relaxed airport transfers for your travels.
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            With Nova Taxi, you start your vacation or business trip stress-free.
            We pick you up on time at home, at the hotel or office and take you
            directly to Zurich or Basel airports – no detours and with plenty
            of space for your luggage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              What to expect from our airport transfer:
            </h2>
            <ul className="space-y-2">
              <li>• Punctual pickup – even early morning or late evening</li>
              <li>• Rides to Zurich and Basel airports</li>
              <li>• Comfortable vehicles with ample storage space</li>
              <li>• Fixed meeting points at train station, hotel or business address</li>
              <li>• Round-trip planning available in advance on request</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm md:text-base text-gray-300">
            <h2 className="text-xl font-semibold text-white">
              Inquiry & Booking
            </h2>
            <p>
              For a non-binding offer or direct booking, simply call us or send
              us your flight details by email.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                24/7 Phone: 076 611 31 31
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Email: info@nova-taxi.com
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Please include pickup location, date, time and number of
              passengers in your inquiry – so we can quickly provide you with
              a suitable offer.
            </p>
          </div>
        </div>

        {/* Airport transfer price list */}
        <div id="preise" className="space-y-6 pt-8 border-t border-white/10 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              ✈️ Airport Transfer – Lucerne, Zug, Schwyz &amp; surroundings
            </h2>
            <p className="text-sm text-gray-400">
              Comfortable and reliable airport transfer to Zurich Airport (ZRH) and EuroAirport Basel (BSL).
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-gray-400 font-medium">
                      Departure
                    </th>
                    <th className="text-right px-4 py-3 text-xs uppercase tracking-widest text-gray-400 font-medium">
                      Zurich Airport
                    </th>
                    <th className="text-right px-4 py-3 text-xs uppercase tracking-widest text-gray-400 font-medium">
                      EuroAirport Basel
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Lucerne", "from CHF 245.–", "from CHF 399.–"],
                    ["Zug", "from CHF 165.–", "from CHF 419.–"],
                    ["Schwyz", "from CHF 249.–", "from CHF 505.–"],
                    ["Arth-Goldau", "from CHF 239.–", "from CHF 469.–"],
                    ["Brunnen", "from CHF 279.–", "from CHF 509.–"],
                    ["Küssnacht am Rigi", "from CHF 209.–", "from CHF 439.–"],
                    ["Weggis", "from CHF 235.–", "from CHF 475.–"],
                    ["Vitznau", "from CHF 255.–", "from CHF 469.–"],
                    ["Unterägeri", "from CHF 175.–", "from CHF 455.–"],
                    ["Oberägeri", "from CHF 185.–", "from CHF 455.–"],
                  ].map(([ort, zrh, bsl]) => (
                    <tr key={ort} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{ort}</td>
                      <td className="px-4 py-3 text-right text-nova-gold whitespace-nowrap">{zrh}</td>
                      <td className="px-4 py-3 text-right text-nova-gold whitespace-nowrap">{bsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Base fare</p>
              <p className="text-lg font-semibold text-white">CHF 6.60</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Per kilometre</p>
              <p className="text-lg font-semibold text-white">CHF 4.20 / km</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Waiting time</p>
              <p className="text-lg font-semibold text-white">CHF 72.– / hour</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 italic leading-relaxed">
            All prices are indicative rates from the respective town centre. The final fare is
            calculated based on the actual pickup address and route.
          </p>
        </div>
      </div>
    </section>
  );
}
