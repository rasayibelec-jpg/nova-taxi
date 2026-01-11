import { notFound } from "next/navigation";
import { locations, allLocationSlugs } from "@/config/locations";
import enLocations from "@/locales/en/locations.json";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allLocationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const locationEN = enLocations[slug];

  if (!locationEN) {
    return {};
  }

  return {
    title: locationEN.title,
    description: locationEN.metaDescription,
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

  // Use English translation, fall back to German for location name
  const location = locationEN;
  const locationName = location.h1.replace("Taxi in ", "");

  return (
    <div className="section-padding">
      <div className="container space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-nova-muted">
            Service Area
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            {location.h1}
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {location.intro}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Why Nova Taxi in this area?
            </h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              {location.highlightPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-nova-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white">
              Request a ride
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
                Phone: 076 611 31 31
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Email: info@nova-taxi.com
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Typical rides: Train station, Zurich/Basel airports, business addresses,
              hotels and tourist destinations in the region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
