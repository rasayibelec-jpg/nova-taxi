import Link from "next/link";

export const metadata = {
  title: "Taxi Canton Lucerne | Airport Transfer & City Rides - Nova Taxi",
  description:
    "Nova Taxi in Canton Lucerne – Taxi service in Lucerne, Kriens, Emmen, Ebikon, Horw, Meggen & Sursee. Zurich airport transfers, Lucerne station transfers. Call 076 611 31 31",
  keywords: [
    "Taxi Canton Lucerne",
    "Taxi Lucerne",
    "Taxi Kriens",
    "Taxi Emmen",
    "Taxi Ebikon",
    "Airport Transfer Lucerne",
    "Lucerne Station Taxi"
  ],
};

// Cities in Canton Lucerne with unique descriptions
const lucerneCities = [
  {
    slug: "luzern",
    name: "Lucerne",
    description: "Tourism hub on Lake Lucerne. Chapel Bridge, KKL and historic old town.",
    specialty: "City rides, Hotels & Events"
  },
  {
    slug: "kriens",
    name: "Kriens",
    description: "Third largest municipality in the canton. Starting point for Pilatus Railway.",
    specialty: "Pilatus transfers & Commuter traffic"
  },
  {
    slug: "emmen",
    name: "Emmen",
    description: "Largest suburban municipality. Industrial and shopping center.",
    specialty: "Business & Shopping rides"
  },
  {
    slug: "ebikon",
    name: "Ebikon",
    description: "Conveniently located on the A14. Mall of Switzerland and transport hub.",
    specialty: "Shopping & Business traffic"
  },
  {
    slug: "horw",
    name: "Horw",
    description: "Residential community at the foot of Pilatus. Lake access and recreation.",
    specialty: "Excursion & Leisure rides"
  },
  {
    slug: "meggen",
    name: "Meggen",
    description: "Exclusive residential community on Lake Lucerne. Known for magnificent views.",
    specialty: "Private rides & Events"
  },
  {
    slug: "root",
    name: "Root",
    description: "Traffic junction between Lucerne and Zug. D4 Business Center.",
    specialty: "Business & Commuters"
  },
  {
    slug: "rothenburg",
    name: "Rothenburg",
    description: "Growing community in the Lucerne hinterland. Industrial areas and residential quarters.",
    specialty: "Commercial & Residential areas"
  },
  {
    slug: "sursee",
    name: "Sursee",
    description: "District capital in central Lucerne. Historic town on Lake Sempach.",
    specialty: "Regional traffic & Events"
  },
  {
    slug: "adligenswil",
    name: "Adligenswil",
    description: "Quiet residential community above Lucerne. Family-friendly.",
    specialty: "Family & Daily rides"
  },
];

export default function CantonLucernePage() {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Taxi Canton Lucerne – Reliable & Punctual
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Your Taxi Service in Canton Lucerne – City and Region
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Nova Taxi serves the entire <strong>Canton of Lucerne</strong> – from Lucerne city 
            to <strong>Kriens</strong> and <strong>Emmen</strong> to <strong>Sursee</strong>. 
            As a tourism region with an international audience, we offer professional service 
            for hotels, business travelers and locals. <strong>Airport transfers</strong>, 
            train station pickups and local rides – all from one source.
          </p>
        </div>

        {/* Quick Contact */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+41766113131"
            className="inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors min-h-[48px]"
          >
            Call now: 076 611 31 31
          </a>
          <Link
            href="/en/flughafentransfer"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors min-h-[48px]"
          >
            → Zurich Airport Transfer
          </Link>
        </div>

        {/* Airport Transfer Section */}
        <div className="rounded-2xl bg-gradient-to-r from-nova-bg-soft to-black border border-white/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Airport Transfer from Canton Lucerne
          </h2>
          <p className="text-gray-200 mb-4">
            Comfortable transfers to <strong>Zurich Airport</strong> and <strong>Basel Airport</strong>. 
            We know the fastest routes and guarantee punctual arrival. 
            Ideal for business travelers and vacationers from the Lucerne region.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">From Lucerne City</p>
              <p className="text-gray-300">approx. 50-60 min. to Zurich Airport</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">From Ebikon/Root</p>
              <p className="text-gray-300">approx. 40-50 min. to Zurich Airport</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">From Sursee</p>
              <p className="text-gray-300">approx. 45-55 min. to Zurich Airport</p>
            </div>
          </div>
          <Link 
            href="/en/flughafentransfer" 
            className="inline-block mt-4 text-nova-gold hover:text-nova-gold-soft transition-colors"
          >
            → Learn more about our airport transfer
          </Link>
        </div>

        {/* Train Station Transfer Section */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Train Station Transfers in Canton Lucerne
          </h2>
          <p className="text-gray-200 mb-4">
            <strong>Lucerne Station</strong> is one of the busiest train stations in Switzerland. 
            We offer quick pickup directly at the station – also at regional stations. 
            Perfect for connecting services and hotel guests.
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Lucerne Main Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Emmenbrücke Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Ebikon Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Root D4 Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Rotkreuz Station (Transfer hub)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Sursee Station
            </li>
          </ul>
        </div>

        {/* Tourism Section - Unique to Lucerne */}
        <div className="rounded-2xl bg-blue-900/20 border border-blue-500/20 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Tourist Transfers in Lucerne
          </h2>
          <p className="text-gray-200 mb-4">
            Lucerne is an international tourist destination. We offer special transfers to:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-nova-gold font-medium">Mountain Railways & Excursions</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Pilatus (Kriens/Alpnachstad)</li>
                <li>• Rigi (via Vitznau/Weggis)</li>
                <li>• Titlis (Engelberg)</li>
                <li>• Stanserhorn</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-nova-gold font-medium">Attractions</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Chapel Bridge & Old Town</li>
                <li>• KKL Lucerne (Concerts/Events)</li>
                <li>• Swiss Museum of Transport</li>
                <li>• Lake Lucerne Cruises</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Our Service Areas in Canton Lucerne
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lucerneCities.map((city) => (
              <Link
                key={city.slug}
                href={`/en/ort/${city.slug}`}
                className="group rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-nova-gold/50 transition-all hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-nova-gold transition-colors">
                  Taxi {city.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{city.description}</p>
                <p className="text-xs text-nova-gold mt-2">{city.specialty}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Availability</h3>
            <p className="text-sm text-gray-300">
              Available around the clock. Especially important for hotel guests and early flights.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Languages</h3>
            <p className="text-sm text-gray-300">
              German, English. Ideal for international tourists in the Lucerne region.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Vehicles</h3>
            <p className="text-sm text-gray-300">
              Comfortable sedans and spacious vehicles for groups up to 7 passengers.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Book a Taxi in Canton Lucerne
          </h2>
          <p className="text-gray-300 mb-4">
            For city rides, airport transfers or excursions – contact us!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-6 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
            >
              076 611 31 31
            </a>
            <a
              href="https://wa.me/41766113131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:info@nova-taxi.com"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <nav className="border-t border-white/10 pt-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
            Other Service Regions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/en/kanton/schwyz" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Canton Schwyz
            </Link>
            <Link href="/en/kanton/zug" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Canton Zug
            </Link>
            <Link href="/en/flughafentransfer" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Zurich Airport Transfer
            </Link>
            <Link href="/en/business" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Business Transfer
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
