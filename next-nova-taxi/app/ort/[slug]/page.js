import { notFound } from "next/navigation";
import { locations, allLocationSlugs } from "@/config/locations";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allLocationSlugs.map((slug) => ({ slug }));
}

// Helper function to get location name from H1
function getLocationName(location) {
  return location.h1.replace("Taxi in ", "").replace("Taxi ", "");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locations[slug];

  if (!location) {
    return {};
  }

  const locationName = getLocationName(location);

  return {
    title: `Taxi ${locationName} | Flughafentransfer & VIP Service - Nova Taxi`,
    description: `Suchen Sie ein Taxi in ${locationName}? Nova Taxi bietet zuverlässige Flughafentransfers und Stadtfahrten in ${locationName} an. Jetzt online buchen! ☎ 076 611 31 31`,
    keywords: [
      `Taxi ${locationName}`,
      `Taxi buchen ${locationName}`,
      `Transfer von ${locationName} zum Flughafen Zürich`,
      `24/7 Taxiservice ${locationName}`,
      `Flughafentransfer ${locationName}`,
      `VIP Transfer ${locationName}`,
      "Taxi Zentralschweiz"
    ],
    alternates: {
      canonical: `https://www.nova-taxi.com/ort/${slug}`,
      languages: {
        'de': `https://www.nova-taxi.com/ort/${slug}`,
        'en': `https://www.nova-taxi.com/en/ort/${slug}`,
      },
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = locations[slug];

  if (!location) {
    notFound();
  }

  const locationName = getLocationName(location);

  return (
    <div className="section-padding">
      <div className="container space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-nova-muted">
            Taxi {locationName} – 24/7 Taxiservice
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Professioneller Taxi-Service in {locationName}
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {location.intro}
          </p>
          <p className="text-sm text-gray-400">
            <strong>Taxi buchen {locationName}</strong> – Transfer von {locationName} zum Flughafen Zürich, 
            Bahnhof-Transfers, Business-Fahrten und mehr. Nova Taxi ist Ihr zuverlässiger Partner 
            für alle Fahrten in der Zentralschweiz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Warum Nova Taxi in {locationName}?
            </h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              {location.highlightPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-nova-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 space-y-2 text-sm text-gray-400">
              <p>
                <strong>24/7 Taxiservice</strong> – Wir sind rund um die Uhr für Sie da, 
                auch an Feiertagen und Wochenenden.
              </p>
              <p>
                <strong>Flughafentransfer Zürich</strong> – Direktfahrten von {locationName} 
                zum Flughafen Zürich und Basel.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white">
              Taxi buchen in {locationName}
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              Sie möchten eine Fahrt von oder nach {locationName} buchen?
              Rufen Sie uns direkt an oder senden Sie uns Ihre Anfrage per E-Mail.
            </p>
            <div className="space-y-2 text-sm md:text-base">
              <a
                href="tel:+41766113131"
                className="block font-semibold text-nova-gold hover:text-nova-gold-soft transition-colors"
              >
                ☎ Telefon: 076 611 31 31
              </a>
              <a
                href="mailto:info@nova-taxi.com"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                ✉ E-Mail: info@nova-taxi.com
              </a>
            </div>
            <div className="pt-4 space-y-2">
              <a
                href="tel:+41766113131"
                className="block rounded-full bg-nova-gold px-5 py-3 text-center text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
              >
                Jetzt Taxi buchen
              </a>
              <a
                href="https://wa.me/41766113131"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                WhatsApp Anfrage
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              Typische Fahrten ab {locationName}: Flughafen Zürich, Flughafen Basel, 
              Bahnhof Luzern, Bahnhof Zug, Hotels und Geschäftsadressen.
            </p>
          </div>
        </div>

        {/* SEO-optimized FAQ Section */}
        <div className="space-y-4 pt-8 border-t border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Häufige Fragen zu Taxi {locationName}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Was kostet ein Taxi von {locationName} zum Flughafen Zürich?
              </h3>
              <p className="text-sm text-gray-400">
                Die Preise variieren je nach Entfernung und Tageszeit. Kontaktieren Sie uns 
                für ein unverbindliches Angebot. Wir bieten faire Festpreise für Flughafentransfers.
              </p>
            </div>
            <div className="space-y-2 rounded-xl bg-white/5 p-4">
              <h3 className="font-medium text-white">
                Kann ich in {locationName} ein Taxi online buchen?
              </h3>
              <p className="text-sm text-gray-400">
                Ja! Rufen Sie uns an unter 076 611 31 31 oder senden Sie uns eine WhatsApp-Nachricht. 
                Wir bestätigen Ihre Buchung umgehend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
