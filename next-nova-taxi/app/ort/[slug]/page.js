import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, allLocationSlugs } from "@/config/locations";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allLocationSlugs.map((slug) => ({ slug }));
}

// Helper function to get location name from H1
function getLocationName(location) {
  return location.h1.replace("Taxi in ", "").replace("Taxi ", "");
}

// Get canton for internal linking
function getKanton(slug) {
  const schwyzCities = ["arth-goldau", "schwyz", "goldau", "kuessnacht", "brunnen", "einsiedeln", "freienbach", "gersau", "rothenthurm"];
  const luzernCities = ["luzern", "kriens", "emmen", "ebikon", "horw", "meggen", "root", "rothenburg", "sursee", "adligenswil"];
  const zugCities = ["zug", "baar", "cham", "steinhausen", "rotkreuz", "unteraegeri", "walchwil"];
  
  if (schwyzCities.includes(slug)) return { name: "Schwyz", slug: "schwyz" };
  if (luzernCities.includes(slug)) return { name: "Luzern", slug: "luzern" };
  if (zugCities.includes(slug)) return { name: "Zug", slug: "zug" };
  return { name: "Zentralschweiz", slug: "schwyz" };
}

// TaxiService Schema
function generateSchema(location, locationName, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": `Nova Taxi ${locationName}`,
    "description": location.metaDescription,
    "url": `https://www.nova-taxi.com/ort/${slug}`,
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
  const location = locations[slug];

  if (!location) {
    return {};
  }

  const locationName = getLocationName(location);
  const kanton = getKanton(slug);

  return {
    title: `Taxi ${locationName} | Flughafentransfer & Taxiservice - Nova Taxi`,
    description: `Taxi ${locationName} im Kanton ${kanton.name} – Nova Taxi bietet Flughafentransfer Zürich, Bahnhof-Transfers und lokale Fahrten. 24/7 erreichbar. ☎ 076 611 31 31`,
    keywords: [
      `Taxi ${locationName}`,
      `Taxi buchen ${locationName}`,
      `Flughafentransfer ${locationName}`,
      `Bahnhof Taxi ${locationName}`,
      `Taxi Kanton ${kanton.name}`,
      "24h Taxi Zentralschweiz"
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
  const kanton = getKanton(slug);
  const schema = generateSchema(location, locationName, slug);

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
            <Link href="/" className="hover:text-white">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href={`/kanton/${kanton.slug}`} className="hover:text-white">Kanton {kanton.name}</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{locationName}</span>
          </nav>

          {/* Hero Section */}
          <div className="space-y-4 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Taxi {locationName} – Kanton {kanton.name}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              Professioneller Taxi-Service in {locationName}
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {location.intro}
            </p>
            <p className="text-sm text-gray-300">
              Sie möchten ein <strong>Taxi in {locationName}</strong> buchen? Nova Taxi ist Ihr 
              zuverlässiger Partner für <strong>Flughafentransfer Zürich</strong>, Bahnhof-Abholungen 
              und lokale Fahrten im Kanton {kanton.name}. Wir sind <strong>24 Stunden, 7 Tage</strong> für Sie erreichbar.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+41766113131"
              className="inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors min-h-[48px]"
            >
              ☎ Taxi buchen: 076 611 31 31
            </a>
            <a
              href="https://wa.me/41766113131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-7 py-4 text-sm font-semibold text-white hover:bg-green-500 transition-colors min-h-[48px]"
            >
              💬 WhatsApp
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Airport Transfer Section */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>✈️</span> Flughafentransfer ab {locationName}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                Direkter Transfer von {locationName} zum <strong>Flughafen Zürich</strong>. 
                Wir holen Sie pünktlich ab – auch bei Frühflügen ab 4 Uhr morgens oder 
                Spätankünften nach Mitternacht.
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Festpreis auf Anfrage – keine Überraschungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Flugüberwachung bei Verspätungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Platz für Gepäck und Ski-Ausrüstung</span>
                </li>
              </ul>
              <Link 
                href="/flughafentransfer"
                className="inline-flex items-center text-sm text-nova-gold hover:text-nova-gold-soft transition-colors"
              >
                → Mehr zum Flughafentransfer
              </Link>
            </div>

            {/* Bahnhof Transfer Section */}
            <div className="rounded-2xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>🚂</span> Bahnhof-Transfer in {locationName}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                Schnelle Abholung am Bahnhof oder Zustellung zum Zug. Ideal für 
                Geschäftsreisende und Touristen, die in {locationName} ankommen oder abreisen.
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Abholung direkt am Gleis möglich</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Verbindungen zu IC, IR und S-Bahn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">✓</span>
                  <span>Wartezeit bei Zugverspätungen inklusive</span>
                </li>
              </ul>
              <Link 
                href={`/kanton/${kanton.slug}`}
                className="inline-flex items-center text-sm text-nova-gold hover:text-nova-gold-soft transition-colors"
              >
                → Alle Bahnhöfe im Kanton {kanton.name}
              </Link>
            </div>
          </div>

          {/* Why Nova Taxi Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Warum Nova Taxi in {locationName}?
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {location.highlightPoints.map((point, index) => (
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
              <h3 className="font-semibold text-white mb-2">🕐 Verfügbarkeit</h3>
              <p className="text-sm text-gray-300">
                24 Stunden, 7 Tage die Woche. Auch an Feiertagen und Wochenenden im Einsatz.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <h3 className="font-semibold text-white mb-2">💳 Zahlung</h3>
              <p className="text-sm text-gray-300">
                Bargeld, Kreditkarte (Visa, Mastercard), Twint. Rechnung für Firmenkunden.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <h3 className="font-semibold text-white mb-2">👶 Extras</h3>
              <p className="text-sm text-gray-300">
                Kindersitze auf Anfrage. Grossraumtaxi für Gruppen bis 7 Personen verfügbar.
              </p>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Jetzt Taxi in {locationName} buchen
                </h2>
                <p className="text-sm text-gray-300">
                  Rufen Sie uns direkt an oder senden Sie eine WhatsApp-Nachricht. 
                  Wir bestätigen Ihre Buchung umgehend.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+41766113131"
                  className="inline-flex items-center justify-center rounded-full bg-nova-gold px-6 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors"
                >
                  ☎ 076 611 31 31
                </a>
                <a
                  href="mailto:info@nova-taxi.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                >
                  ✉ info@nova-taxi.com
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Häufige Fragen zu Taxi {locationName}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-medium text-white mb-2">
                  Was kostet ein Taxi von {locationName} zum Flughafen Zürich?
                </h3>
                <p className="text-sm text-gray-400">
                  Die Preise variieren je nach Tageszeit und Verkehr. 
                  Kontaktieren Sie uns für ein unverbindliches Festpreisangebot.
                </p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-medium text-white mb-2">
                  Wie schnell ist ein Taxi in {locationName} verfügbar?
                </h3>
                <p className="text-sm text-gray-400">
                  In der Regel sind wir innerhalb von 10-20 Minuten bei Ihnen. 
                  Bei Vorausbuchung garantieren wir pünktliche Abholung.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links */}
          <nav className="border-t border-white/10 pt-8 space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
              Weitere Servicegebiete
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link 
                href={`/kanton/${kanton.slug}`} 
                className="text-sm text-gray-300 hover:text-nova-gold transition-colors"
              >
                → Alle Orte im Kanton {kanton.name}
              </Link>
              <Link 
                href="/flughafentransfer" 
                className="text-sm text-gray-300 hover:text-nova-gold transition-colors"
              >
                → Flughafentransfer Zürich
              </Link>
              <Link 
                href="/business" 
                className="text-sm text-gray-300 hover:text-nova-gold transition-colors"
              >
                → Business-Transfer
              </Link>
              <Link 
                href="/preise" 
                className="text-sm text-gray-300 hover:text-nova-gold transition-colors"
              >
                → Preise & Tarife
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
