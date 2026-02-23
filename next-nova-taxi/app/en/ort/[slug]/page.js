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

  return (
    <div className="section-padding">
      <div className="container space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-nova-muted">
            Taxi {locationName} – 24/7 Service
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Professional Taxi Service in {locationName}
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {locationEN.intro}
          </p>
          <p className="text-sm text-gray-400">
            <strong>Book a taxi in {locationName}</strong> – Transfer from {locationName} to Zurich Airport, 
            train station transfers, business rides and more. Nova Taxi is your reliable partner 
            for all journeys in Central Switzerland.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Why Nova Taxi in {locationName}?
            </h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              {locationEN.highlightPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-nova-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 space-y-2 text-sm text-gray-400">
              <p>
                <strong>Safe and reliable shuttle</strong> – We are available around the clock, 
                including holidays and weekends.
              </p>
              <p>
                <strong>Zurich Airport Transfer</strong> – Direct rides from {locationName} 
                to Zurich and Basel airports.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white">
              Book a Taxi in {locationName}
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              Would you like to book a ride from or to {locationName}?
              Call us directly or send us your inquiry by email.
            </p>
            <div className="space-y-2 text-sm md:text-base">
              <a
                href="tel:+41766113131"
                className="block font-semibold text-nova-gold hover:text-nova-gold-soft transition-colors"
              >
                ☎ Phone: +41 76 611 31 31
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                ✉ Email: info@nova-taxi.com
              </a>
            </div>
            <div className="pt-4 space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                Book Taxi Now
              </a>
              <a
                href="https://wa.me/41766113131"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                WhatsApp Inquiry
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Typical rides from {locationName}: Zurich Airport, Basel Airport, 
              Lucerne Station, Zug Station, hotels and business addresses.
            </p>
          </div>
        </div>

        {/* SEO-optimized FAQ Section */}
        <div className="space-y-4 pt-8 border-t border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Frequently Asked Questions about Taxi {locationName}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                How much does a taxi from {locationName} to Zurich Airport cost?
              </h3>
              <p className="text-sm text-gray-400">
                Prices vary depending on distance and time of day. Contact us 
                for a free quote. We offer fair fixed prices for airport transfers.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Can I book a taxi online in {locationName}?
              </h3>
              <p className="text-sm text-gray-400">
                Yes! Call us at +41 76 611 31 31 or send us a WhatsApp message. 
                We will confirm your booking immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
