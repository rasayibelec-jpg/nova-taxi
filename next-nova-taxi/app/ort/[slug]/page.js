import { notFound } from "next/navigation";
import { locations, allLocationSlugs } from "@/config/locations";

export async function generateStaticParams() {
  return allLocationSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const location = locations[params.slug];

  if (!location) {
    return {};
  }

  return {
    title: location.title,
    description: location.metaDescription
  };
}

export default function LocationPage({ params }) {
  const location = locations[params.slug];

  if (!location) {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="container space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-nova-muted">
            Servicegebiet
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
              Warum Nova Taxi in diesem Gebiet?
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
              Direktfahrt anfragen
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              Sie möchten eine Fahrt von oder nach {location.h1.replace("Taxi in ", "")} buchen?
              Rufen Sie uns direkt an oder senden Sie uns Ihre Anfrage per E-Mail.
            </p>
            <div className="space-y-2 text-sm md:text-base">
              <a
                href="tel:+41766113131"
                className="block font-semibold text-nova-gold hover:text-nova-gold-soft transition-colors"
              >
                Telefon: 076 611 31 31
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                E-Mail: info@nova-taxi.com
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Typische Fahrten: Bahnhof, Flughafen Zürich/Basel, Geschäftsadressen,
              Hotels und touristische Ziele in der Region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
