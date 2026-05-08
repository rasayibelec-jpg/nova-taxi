import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, allLocationSlugs } from "@/config/locations";
import { cityContent } from "@/config/cityContent";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allLocationSlugs.map((slug) => ({ slug }));
}

function getLocationName(location) {
  return location.h1.replace("Taxi in ", "").replace("Taxi ", "");
}

function getKanton(slug) {
  const schwyzCities = ["arth-goldau", "schwyz", "goldau", "kuessnacht", "brunnen", "einsiedeln", "freienbach", "gersau", "rothenthurm"];
  const luzernCities = ["luzern", "kriens", "emmen", "ebikon", "horw", "meggen", "root", "rothenburg", "sursee", "adligenswil"];
  const zugCities = ["zug", "baar", "cham", "steinhausen", "rotkreuz", "unteraegeri", "walchwil"];
  
  if (schwyzCities.includes(slug)) return { name: "Schwyz", slug: "schwyz" };
  if (luzernCities.includes(slug)) return { name: "Luzern", slug: "luzern" };
  if (zugCities.includes(slug)) return { name: "Zug", slug: "zug" };
  return { name: "Zentralschweiz", slug: "schwyz" };
}

function generateSchema(location, locationName, slug, richContent) {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": `Nova Taxi ${locationName}`,
    "description": richContent?.metaDescription || location.metaDescription,
    "url": `https://www.nova-taxi.com/ort/${slug}`,
    "telephone": "+41766113131",
    "email": "info@nova-taxi.com",
    "areaServed": { "@type": "City", "name": locationName },
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
    }
  };
}

function generateFAQSchema(faq) {
  if (!faq || faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locations[slug];
  const richContent = cityContent[slug]?.de;

  if (!location) return {};

  const locationName = getLocationName(location);
  const kanton = getKanton(slug);

  const title = richContent?.seoTitle || `Taxi ${locationName} | Flughafentransfer & 24h Service - Nova Taxi`;
  const description = richContent?.metaDescription || `Taxi ${locationName} im Kanton ${kanton.name} – Nova Taxi bietet Flughafentransfer, Bahnhoftransfer und lokale Fahrten. 24/7 erreichbar. Anrufen: 076 611 31 31`;

  return {
    title,
    description,
    keywords: [`Taxi ${locationName}`, `Taxi buchen ${locationName}`, `Flughafentransfer ${locationName}`, `Taxi Kanton ${kanton.name}`, "24h Taxi Zentralschweiz"],
    alternates: {
      canonical: `https://www.nova-taxi.com/ort/${slug}`,
      languages: { 'de': `https://www.nova-taxi.com/ort/${slug}`, 'en': `https://www.nova-taxi.com/en/ort/${slug}` },
    },
  };
}

export default async function LocationPageDE({ params }) {
  const { slug } = await params;
  const location = locations[slug];
  const richContent = cityContent[slug]?.de;

  if (!location) notFound();

  const locationName = getLocationName(location);
  const kanton = getKanton(slug);
  const schema = generateSchema(location, locationName, slug, richContent);
  const faqSchema = richContent?.faq ? generateFAQSchema(richContent.faq) : null;
  const hasRichContent = !!richContent;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      
      <div className="section-padding">
        <div className="container space-y-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href={`/kanton/${kanton.slug}`} className="hover:text-white">Kanton {kanton.name}</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{locationName}</span>
          </nav>

          {/* Hero */}
          <header className="space-y-4 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-nova-gold">
              {hasRichContent ? richContent.heroSubtitle : `Taxi ${locationName} – Kanton ${kanton.name}`}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              {hasRichContent ? richContent.heroTitle : `Professioneller Taxiservice in ${locationName}`}
            </h1>
          </header>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+41766113131" className="inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors min-h-[48px]" data-testid="phone-cta">
              Jetzt anrufen: 076 611 31 31
            </a>
            <a href="https://wa.me/41766113131" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-green-600 px-7 py-4 text-sm font-semibold text-white hover:bg-green-500 transition-colors min-h-[48px]" data-testid="whatsapp-cta">
              WhatsApp
            </a>
          </div>

          {hasRichContent ? (
            <>
              {/* Rich Content: Intro */}
              <section className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-semibold text-white mb-4">{richContent.sections.intro.title}</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {richContent.sections.intro.content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Rich Content: Services */}
              <section className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{richContent.sections.services.title}</h2>
                <div className="text-gray-300 leading-relaxed space-y-4 mb-6">
                  {richContent.sections.services.content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {richContent.sections.services.features && (
                  <ul className="grid md:grid-cols-2 gap-3">
                    {richContent.sections.services.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-200">
                        <span className="mt-1 h-2 w-2 rounded-full bg-nova-gold flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Rich Content: Why Us */}
              <section className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-semibold text-white mb-4">{richContent.sections.whyUs.title}</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {richContent.sections.whyUs.content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Rich Content: Getting Around */}
              <section className="rounded-2xl bg-gradient-to-br from-nova-bg-soft to-black border border-white/10 p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{richContent.sections.gettingAround.title}</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {richContent.sections.gettingAround.content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Rich Content: FAQ */}
              {richContent.faq?.length > 0 && (
                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white">Häufige Fragen zu Taxi {locationName}</h2>
                  <div className="grid gap-4">
                    {richContent.faq.map((item, i) => (
                      <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-5">
                        <h3 className="font-medium text-white mb-2">{item.question}</h3>
                        <p className="text-sm text-gray-400">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            /* Standard Fallback Content */
            <>
              <div className="space-y-4 max-w-4xl">
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">{location.intro}</p>
                <p className="text-sm text-gray-300">
                  <strong>Taxi buchen in {locationName}</strong>? Nova Taxi ist Ihr zuverlässiger Partner für <strong>Flughafentransfers nach Zürich</strong>, Bahnhof-Abholungen und lokale Fahrten im Kanton {kanton.name}. Wir sind <strong>24 Stunden, 7 Tage</strong> die Woche für Sie da.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">✈️ Flughafentransfer ab {locationName}</h2>
                  <p className="text-sm text-gray-300 mb-4">Direkter Transfer zum <strong>Flughafen Zürich</strong>. Pünktliche Abholung – auch für Frühflüge oder späte Ankünfte.</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Festpreis auf Anfrage</li>
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Flugüberwachung bei Verspätungen</li>
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Platz für Gepäck und Skiausrüstung</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">🚂 Bahnhof-Transfer</h2>
                  <p className="text-sm text-gray-300 mb-4">Schnelle Abholung am Bahnhof oder Bringservice zu Ihrem Zug. Ideal für Pendler und Reisende.</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Abholung direkt am Bahnsteig möglich</li>
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Anschluss an IC, IR und S-Bahn</li>
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Wartezeit bei Zugverspätung inklusive</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Warum Nova Taxi in {locationName}?</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {location.highlightPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200">
                      <span className="mt-1 h-2 w-2 rounded-full bg-nova-gold flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">FAQ - Taxi {locationName}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                    <h3 className="font-medium text-white mb-2">Was kostet ein Taxi von {locationName} zum Flughafen Zürich?</h3>
                    <p className="text-sm text-gray-400">Kontaktieren Sie uns für ein unverbindliches Angebot. Wir bieten faire Festpreise für Flughafentransfers.</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                    <h3 className="font-medium text-white mb-2">Wie schnell ist ein Taxi in {locationName} verfügbar?</h3>
                    <p className="text-sm text-gray-400">In der Regel innerhalb von 10-20 Minuten. Bei Vorausbuchung garantieren wir pünktliche Abholung.</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Booking CTA */}
          <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Jetzt Taxi in {locationName} buchen</h2>
                <p className="text-sm text-gray-300">Rufen Sie uns direkt an oder schreiben Sie per WhatsApp. Wir bestätigen Ihre Buchung sofort.</p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="tel:+41766113131" className="inline-flex items-center justify-center rounded-full bg-nova-gold px-6 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors">076 611 31 31</a>
                <a href="mailto:info@nova-taxi.com" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors">info@nova-taxi.com</a>
              </div>
            </div>
          </div>

          {/* Internal Links */}
          <nav className="border-t border-white/10 pt-8 space-y-4" aria-label="Verwandte Seiten">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Weitere Servicegebiete</h3>
            <div className="flex flex-wrap gap-3">
              <Link href={`/kanton/${kanton.slug}`} className="text-sm text-gray-300 hover:text-nova-gold transition-colors">→ Alle Orte im Kanton {kanton.name}</Link>
              <Link href="/flughafentransfer" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">→ Flughafen Zürich Transfer</Link>
              <Link href="/business" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">→ Business Transfer</Link>
              <Link href="/preise" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">→ Preise & Tarife</Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
