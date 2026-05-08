import Link from "next/link";

export const metadata = {
  title: "Taxi Canton Zug | Business Transfer & Airport Taxi - Nova Taxi",
  description:
    "Nova Taxi in Canton Zug – Premium taxi service in Zug, Baar, Cham, Steinhausen, Rotkreuz & Unterägeri. Zurich airport transfers for business travelers. Call 076 611 31 31",
  keywords: [
    "Taxi Canton Zug",
    "Taxi Zug",
    "Taxi Baar",
    "Taxi Cham",
    "Business Taxi Zug",
    "Airport Transfer Zug",
    "Zug Station Taxi"
  ],
};

// Cities in Canton Zug with unique descriptions
const zugCities = [
  {
    slug: "zug",
    name: "Zug",
    description: "Economic hub and capital. International business center with lowest taxes.",
    specialty: "Business & Corporate clients"
  },
  {
    slug: "baar",
    name: "Baar",
    description: "Second largest municipality. Industrial location with many international companies.",
    specialty: "Commercial & Commuter traffic"
  },
  {
    slug: "cham",
    name: "Cham",
    description: "Located on Lake Zug. Papieri area and modern residential quarter.",
    specialty: "Residential & Leisure rides"
  },
  {
    slug: "steinhausen",
    name: "Steinhausen",
    description: "Smallest political municipality. Centrally located between Zug and Cham.",
    specialty: "Local rides & Connections"
  },
  {
    slug: "rotkreuz",
    name: "Rotkreuz",
    description: "Transport hub on the A4/A14. Suurstoffi area and university.",
    specialty: "Business & Education"
  },
  {
    slug: "unteraegeri",
    name: "Unterägeri",
    description: "Recreation destination on Lake Aegeri. Popular excursion destination and residence.",
    specialty: "Leisure & Tourism"
  },
  {
    slug: "walchwil",
    name: "Walchwil",
    description: "Sunny community on Lake Zug. Known for cherry cultivation and hiking trails.",
    specialty: "Excursions & Recreation"
  },
];

export default function CantonZugPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Taxi Canton Zug – Premium Business Service
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Business Taxi & Airport Transfer in Canton Zug
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            <strong>Canton Zug</strong> is the economic heart of Central Switzerland. 
            Nova Taxi offers tailored service for <strong>business travelers</strong>, 
            international companies and discerning private clients. From <strong>Zug</strong> to 
            <strong> Baar</strong> to <strong>Rotkreuz</strong> – we guarantee discreet, 
            punctual and professional rides.
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
            href="/en/business"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors min-h-[48px]"
          >
            → Request Business Transfer
          </Link>
        </div>

        {/* Business Focus Section - Unique to Zug */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-900/20 to-black border border-amber-500/20 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Business Transfer in Canton Zug
          </h2>
          <p className="text-gray-200 mb-4">
            Zug is home to numerous <strong>international corporations</strong>, crypto companies and 
            financial service providers. We understand the requirements of business travelers: 
            Discretion, punctuality and professional appearance.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-nova-gold font-medium">Our Business Services:</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Airport pickup with name sign</li>
                <li>• Rides to meetings and conferences</li>
                <li>• Hotel transfers for business guests</li>
                <li>• Monthly consolidated invoice available</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-nova-gold font-medium">Popular Business Destinations:</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Crypto Valley (Zug/Baar)</li>
                <li>• Suurstoffi Rotkreuz</li>
                <li>• Business Parks Baar</li>
                <li>• Hotels in Zug and surroundings</li>
              </ul>
            </div>
          </div>
          <Link 
            href="/en/business" 
            className="inline-block mt-4 text-nova-gold hover:text-nova-gold-soft transition-colors"
          >
            → Learn more about our business service
          </Link>
        </div>

        {/* Airport Transfer Section */}
        <div className="rounded-2xl bg-gradient-to-r from-nova-bg-soft to-black border border-white/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Airport Transfer from Canton Zug
          </h2>
          <p className="text-gray-200 mb-4">
            <strong>Zurich Airport</strong> is quickly reachable from Canton Zug. 
            We offer reliable transfers for business and private travelers – 
            with fixed prices and guaranteed punctuality.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">From Zug City</p>
              <p className="text-gray-300">approx. 35-45 min. to Zurich Airport</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">From Baar/Rotkreuz</p>
              <p className="text-gray-300">approx. 30-40 min. to Zurich Airport</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">From Unterägeri</p>
              <p className="text-gray-300">approx. 40-50 min. to Zurich Airport</p>
            </div>
          </div>
          <Link 
            href="/en/flughafentransfer" 
            className="inline-block mt-4 text-nova-gold hover:text-nova-gold-soft transition-colors"
          >
            → Book airport transfer now
          </Link>
        </div>

        {/* Train Station Transfer Section */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Train Station Transfers in Canton Zug
          </h2>
          <p className="text-gray-200 mb-4">
            <strong>Zug Station</strong> is an important junction with direct connections 
            to Zurich, Lucerne and Ticino. We pick you up punctually – also at 
            regional stations.
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Zug Station (IC/IR stop)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Baar Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Cham Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Rotkreuz Station (Transfer hub)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Steinhausen Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Walchwil Station
            </li>
          </ul>
        </div>

        {/* Cities Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Our Service Areas in Canton Zug
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {zugCities.map((city) => (
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
            <h3 className="text-lg font-semibold text-white">Fast Response</h3>
            <p className="text-sm text-gray-300">
              In Canton Zug often on site within 10-15 minutes. Express service on request.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Corporate Invoice</h3>
            <p className="text-sm text-gray-300">
              Monthly consolidated invoice for corporate clients. Ideal for regular rides.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Premium Vehicles</h3>
            <p className="text-sm text-gray-300">
              Well-maintained vehicles with air conditioning, WiFi on request and ample space.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Book a Taxi in Canton Zug
          </h2>
          <p className="text-gray-300 mb-4">
            For business rides, airport transfers or private events – we are your partner!
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
            <Link href="/en/kanton/luzern" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Canton Lucerne
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
