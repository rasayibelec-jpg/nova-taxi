import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, allLocationSlugs } from "@/config/locations";
import enLocations from "@/locales/en/locations.json";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allLocationSlugs.map((slug) => ({ slug }));
}

// Helper function to get location name from H1
function getLocationName(location) {
  return location.h1.replace("Taxi in ", "").replace("Taxi ", "");
}

// Get canton for internal linking
function getCanton(slug) {
  const schwyzCities = ["arth-goldau", "schwyz", "goldau", "kuessnacht", "brunnen", "einsiedeln", "freienbach", "gersau", "rothenthurm"];
  const luzernCities = ["luzern", "kriens", "emmen", "ebikon", "horw", "meggen", "root", "rothenburg", "sursee", "adligenswil"];
  const zugCities = ["zug", "baar", "cham", "steinhausen", "rotkreuz", "unteraegeri", "walchwil"];
  
  if (schwyzCities.includes(slug)) return { name: "Schwyz", slug: "schwyz" };
  if (luzernCities.includes(slug)) return { name: "Lucerne", slug: "luzern" };
  if (zugCities.includes(slug)) return { name: "Zug", slug: "zug" };
  return { name: "Central Switzerland", slug: "schwyz" };
}

// TaxiService Schema
function generateSchema(location, locationName, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": `Nova Taxi ${locationName}`,
    "description": location.metaDescription,
    "url": `https://www.nova-taxi.com/en/ort/${slug}`,
    "telephone": "+41766113131",
    "email": "info@nova-taxi.com",
    "areaServed": {
      "@type": "City",
      "name": locationName
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nova Taxi",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Türlihof 4",
        "addressLocality": "Oberarth",
        "postalCode": "6414",
        "addressCountry": "CH"
      },
      "telephone": "+41766113131",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Taxi booking",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+41766113131",
        "contactType": "reservations"
      }
    }
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const locationEN = enLocations[slug];
  const locationDE = locations[slug];

  if (!locationEN || !locationDE) {
    return {};
  }

  const locationName = getLocationName(locationEN);
  const canton = getCanton(slug);

  return {
    title: `Taxi ${locationName} | Airport Transfer & Taxi Service - Nova Taxi`,
    description: `Taxi ${locationName} in Canton ${canton.name} – Nova Taxi offers Zurich airport transfers, train station transfers and local rides. Available 24/7. Call 076 611 31 31`,
    keywords: [
      `Taxi ${locationName}`,
      `Book taxi ${locationName}`,
      `Airport transfer ${locationName}`,
      `Station taxi ${locationName}`,
      `Taxi Canton ${canton.name}`,
      "24h Taxi Central Switzerland"
    ],
    alternates: {
      canonical: `https://www.nova-taxi.com/en/ort/${slug}`,
      languages: {
        'de': `https://www.nova-taxi.com/ort/${slug}`,
        'en': `https://www.nova-taxi.com/en/ort/${slug}`,
      },
    },
  };
}

export default async function LocationPageEN({ params }) {
  const { slug } = await params;
  const locationEN = enLocations[slug];
  const locationDE = locations[slug];

  if (!locationEN || !locationDE) {
    notFound();
  }

  const locationName = getLocationName(locationEN);
  const canton = getCanton(slug);
  const schema = generateSchema(locationDE, locationName, slug);

  return (
    <>
      {/* TaxiService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="section-padding">
        <div className="container space-y-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400">
            <Link href="/en" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href={`/en/kanton/${canton.slug}`} className="hover:text-white">Canton {canton.name}</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{locationName}</span>
          </nav>

          {/* Hero Section */}
          <div className="space-y-4 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Taxi {locationName} – Canton {canton.name}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              Professional Taxi Service in {locationName}
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {locationEN.intro}
            </p>
            <p className="text-sm text-gray-300">
              Looking to <strong>book a taxi in {locationName}</strong>? Nova Taxi is your 
              reliable partner for <strong>Zurich airport transfers</strong>, train station pickups 
              and local rides in Canton {canton.name}. We are available <strong>24 hours, 7 days</strong> a week.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors min-h-[48px]"
            >
              Book taxi: 076 611 31 31
            </a>
            <a
              href="https://wa.me/41766113131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-7 py-4 text-sm font-semibold text-white hover:bg-green-500 transition-colors min-h-[48px]"
            >
              WhatsApp
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Airport Transfer Section */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>✈️</span> Airport Transfer from {locationName}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                Direct transfer from {locationName} to <strong>Zurich Airport</strong>. 
                We pick you up on time – even for early flights at 4 AM or 
                late arrivals after midnight.
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Fixed price on request – no surprises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Flight monitoring for delays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Space for luggage and ski equipment</span>
                </li>
              </ul>
              <Link 
                href="/en/flughafentransfer"
                className="inline-flex items-center text-sm text-nova-gold hover:text-nova-gold-soft transition-colors"
              >
                → More about airport transfer
              </Link>
            </div>

            {/* Train Station Transfer Section */}
            <div className="rounded-2xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>🚂</span> Train Station Transfer in {locationName}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                Quick pickup at the station or delivery to your train. Ideal for 
                business travelers and tourists arriving or departing from {locationName}.
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Pickup directly at the platform possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Connections to IC, IR and S-Bahn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Waiting time for train delays included</span>
                </li>
              </ul>
              <Link 
                href={`/en/kanton/${canton.slug}`}
                className="inline-flex items-center text-sm text-nova-gold hover:text-nova-gold-soft transition-colors"
              >
                → All stations in Canton {canton.name}
              </Link>
            </div>
          </div>

          {/* Why Nova Taxi Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Why Nova Taxi in {locationName}?
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {locationEN.highlightPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-200">
                  <span className="mt-1 h-2 w-2 rounded-full bg-nova-gold flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <h3 className="font-semibold text-white mb-2">Availability</h3>
              <p className="text-sm text-gray-300">
                24 hours, 7 days a week. Also on holidays and weekends.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <h3 className="font-semibold text-white mb-2">Payment</h3>
              <p className="text-sm text-gray-300">
                Cash, credit card (Visa, Mastercard), Twint. Invoice for corporate clients.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <h3 className="font-semibold text-white mb-2">Extras</h3>
              <p className="text-sm text-gray-300">
                Child seats on request. Large taxi for groups up to 7 passengers.
              </p>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Book a Taxi in {locationName} Now
                </h2>
                <p className="text-sm text-gray-300">
                  Call us directly or send a WhatsApp message. 
                  We will confirm your booking immediately.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+41766113131"
                  className="inline-flex items-center justify-center rounded-full bg-nova-gold px-6 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
                >
                  076 611 31 31
                </a>
                <a
                  href="mailto:info@nova-taxi.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                >
                  info@nova-taxi.com
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Frequently Asked Questions about Taxi {locationName}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-medium text-white mb-2">
                  How much does a taxi from {locationName} to Zurich Airport cost?
                </h3>
                <p className="text-sm text-gray-400">
                  Prices vary depending on time of day and traffic. 
                  Contact us for a non-binding fixed price offer.
                </p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-medium text-white mb-2">
                  How quickly is a taxi available in {locationName}?
                </h3>
                <p className="text-sm text-gray-400">
                  Usually we are with you within 10-20 minutes. 
                  For advance bookings, we guarantee punctual pickup.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links */}
          <nav className="border-t border-white/10 pt-8 space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
              Other Service Areas
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link 
                href={`/en/kanton/${canton.slug}`} 
                className="text-sm text-gray-300 hover:text-nova-gold transition-colors"
              >
                → All locations in Canton {canton.name}
              </Link>
              <Link 
                href="/en/flughafentransfer" 
                className="text-sm text-gray-300 hover:text-nova-gold transition-colors"
              >
                → Zurich Airport Transfer
              </Link>
              <Link 
                href="/en/business" 
                className="text-sm text-gray-300 hover:text-nova-gold transition-colors"
              >
                → Business Transfer
              </Link>
              <Link 
                href="/en/preise" 
                className="text-sm text-gray-300 hover:text-nova-gold transition-colors"
              >
                → Prices & Rates
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
