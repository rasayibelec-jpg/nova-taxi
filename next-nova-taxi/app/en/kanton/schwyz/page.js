import Link from "next/link";

export const metadata = {
  title: "Taxi Canton Schwyz | Airport Transfer & Taxi Service - Nova Taxi",
  description:
    "Nova Taxi in Canton Schwyz – Your reliable taxi service in Arth-Goldau, Schwyz, Küssnacht am Rigi, Brunnen, Einsiedeln & Freienbach. Zurich airport transfers, train station transfers. Call 076 611 31 31",
  keywords: [
    "Taxi Canton Schwyz",
    "Taxi Schwyz",
    "Taxi Arth-Goldau",
    "Taxi Küssnacht am Rigi",
    "Taxi Brunnen",
    "Taxi Einsiedeln",
    "Airport Transfer Schwyz",
    "Station Taxi Schwyz"
  ],
};

// Cities in Canton Schwyz with unique descriptions
const schwyzCities = [
  {
    slug: "arth-goldau",
    name: "Arth-Goldau",
    description: "Major transport hub with ICE connection. Ideal starting point for Rigi excursions.",
    specialty: "Railway hub & Rigi transfers"
  },
  {
    slug: "schwyz",
    name: "Schwyz",
    description: "Historic capital of the canton. Home to the Federal Charter Museum.",
    specialty: "City rides & Mythen region"
  },
  {
    slug: "kuessnacht",
    name: "Küssnacht am Rigi",
    description: "Picturesque town on Lake Lucerne. Known for the Hohle Gasse.",
    specialty: "Lake transfers & Tourism"
  },
  {
    slug: "brunnen",
    name: "Brunnen",
    description: "Tourist center on Lake Uri. Gateway to the Axenstrasse.",
    specialty: "Hotel transfers & Lake cruises"
  },
  {
    slug: "einsiedeln",
    name: "Einsiedeln",
    description: "Major pilgrimage site with the famous monastery. Winter sports area.",
    specialty: "Pilgrim transfers & Ski areas"
  },
  {
    slug: "freienbach",
    name: "Freienbach/Pfäffikon SZ",
    description: "Economic center on Lake Zurich. Fast connection to Zurich.",
    specialty: "Business transfers & Lake Zurich"
  },
];

export default function CantonSchwyzPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Taxi Canton Schwyz – Your Local Partner
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Professional Taxi Service Throughout Canton Schwyz
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Nova Taxi is your reliable taxi service in Canton Schwyz. From <strong>Arth-Goldau</strong> to 
            <strong> Schwyz</strong> to <strong>Einsiedeln</strong> – we take you safely and punctually 
            to your destination. Whether airport transfer to Zurich, train station pickup or local rides: 
            We are available <strong>24 hours, 7 days a week</strong>.
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
            Airport Transfer from Canton Schwyz
          </h2>
          <p className="text-gray-200 mb-4">
            Direct transfers to <strong>Zurich Airport</strong> from all municipalities in Canton Schwyz. 
            We pick you up punctually – even for early flights or late arrivals. Fixed prices on request.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">From Schwyz/Arth-Goldau</p>
              <p className="text-gray-300">approx. 45-55 min. to Zurich Airport</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">From Einsiedeln</p>
              <p className="text-gray-300">approx. 40-50 min. to Zurich Airport</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-nova-gold font-medium">From Freienbach/Pfäffikon</p>
              <p className="text-gray-300">approx. 25-35 min. to Zurich Airport</p>
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
            Train Station Transfers in Canton Schwyz
          </h2>
          <p className="text-gray-200 mb-4">
            Quick pickup and delivery at all major train stations in Canton Schwyz. 
            Whether business trip or family outing – we are your reliable partner.
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Arth-Goldau Station (IC/ICE stop)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Schwyz Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Brunnen Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Einsiedeln Station
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Pfäffikon SZ Station (Zurich S-Bahn)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nova-gold">●</span> Küssnacht am Rigi Station
            </li>
          </ul>
        </div>

        {/* Cities Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Our Service Areas in Canton Schwyz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schwyzCities.map((city) => (
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
              24 hours, 7 days a week. Also on holidays and weekends for you.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Payment Methods</h3>
            <p className="text-sm text-gray-300">
              Cash, credit card (Visa, Mastercard), debit card. Invoice for corporate clients possible.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Additional Services</h3>
            <p className="text-sm text-gray-300">
              Child seats on request, large taxi for groups, VIP transfer for business clients.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Book a Taxi in Canton Schwyz
          </h2>
          <p className="text-gray-300 mb-4">
            Call us or write to us – we are immediately available for you!
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
            <Link href="/en/kanton/luzern" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">
              → Canton Lucerne
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
