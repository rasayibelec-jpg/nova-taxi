import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, allLocationSlugs } from "@/config/locations";
import { cityContent } from "@/config/cityContent";
import enLocations from "@/locales/en/locations.json";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allLocationSlugs.map((slug) => ({ slug }));
}

function getLocationName(location) {
  return location.h1.replace("Taxi in ", "").replace("Taxi ", "");
}

function getCanton(slug) {
  const schwyzCities = ["arth-goldau", "schwyz", "goldau", "kuessnacht", "brunnen", "einsiedeln", "freienbach", "gersau", "rothenthurm"];
  const luzernCities = ["luzern", "kriens", "emmen", "ebikon", "horw", "meggen", "root", "rothenburg", "sursee", "adligenswil"];
  const zugCities = ["zug", "baar", "cham", "steinhausen", "rotkreuz", "unteraegeri", "walchwil"];
  
  if (schwyzCities.includes(slug)) return { name: "Schwyz", slug: "schwyz" };
  if (luzernCities.includes(slug)) return { name: "Lucerne", slug: "luzern" };
  if (zugCities.includes(slug)) return { name: "Zug", slug: "zug" };
  return { name: "Central Switzerland", slug: "schwyz" };
}

function generateSchema(location, locationName, slug, richContent) {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": `Nova Taxi ${locationName}`,
    "description": richContent?.metaDescription || location.metaDescription,
    "url": `https://www.nova-taxi.com/en/ort/${slug}`,
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
  const locationEN = enLocations[slug];
  const locationDE = locations[slug];
  const richContent = cityContent[slug]?.en;

  if (!locationEN || !locationDE) return {};

  const locationName = getLocationName(locationEN);
  const canton = getCanton(slug);

  const title = richContent?.seoTitle || `Taxi ${locationName} | Airport Transfer & Taxi Service - Nova Taxi`;
  const description = richContent?.metaDescription || `Taxi ${locationName} in Canton ${canton.name} – Nova Taxi offers Zurich airport transfers, train station transfers and local rides. Available 24/7. Call 076 611 31 31`;

  return {
    title,
    description,
    keywords: [`Taxi ${locationName}`, `Airport transfer ${locationName}`, `Taxi Canton ${canton.name}`, "24h Taxi Central Switzerland"],
    alternates: {
      canonical: `https://www.nova-taxi.com/en/ort/${slug}`,
      languages: { 'de': `https://www.nova-taxi.com/ort/${slug}`, 'en': `https://www.nova-taxi.com/en/ort/${slug}` },
    },
  };
}

export default async function LocationPageEN({ params }) {
  const { slug } = await params;
  const locationEN = enLocations[slug];
  const locationDE = locations[slug];
  const richContent = cityContent[slug]?.en;

  if (!locationEN || !locationDE) notFound();

  const locationName = getLocationName(locationEN);
  const canton = getCanton(slug);
  const schema = generateSchema(locationDE, locationName, slug, richContent);
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
            <Link href="/en" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href={`/en/kanton/${canton.slug}`} className="hover:text-white">Canton {canton.name}</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{locationName}</span>
          </nav>

          {/* Hero */}
          <header className="space-y-4 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-nova-gold">
              {hasRichContent ? richContent.heroSubtitle : `Taxi ${locationName} – Canton ${canton.name}`}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              {hasRichContent ? richContent.heroTitle : `Professional Taxi Service in ${locationName}`}
            </h1>
          </header>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+41766113131" className="inline-flex items-center justify-center rounded-full bg-nova-gold px-7 py-4 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors min-h-[48px]" data-testid="phone-cta">
              Book taxi: 076 611 31 31
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
                  <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions about Taxi {locationName}</h2>
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
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">{locationEN.intro}</p>
                <p className="text-sm text-gray-300">
                  Looking to <strong>book a taxi in {locationName}</strong>? Nova Taxi is your reliable partner for <strong>Zurich airport transfers</strong>, train station pickups and local rides in Canton {canton.name}. We are available <strong>24 hours, 7 days</strong> a week.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">✈️ Airport Transfer from {locationName}</h2>
                  <p className="text-sm text-gray-300 mb-4">Direct transfer to <strong>Zurich Airport</strong>. We pick you up on time – even for early flights or late arrivals.</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Fixed price on request</li>
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Flight monitoring</li>
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Space for luggage</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">🚂 Train Station Transfer</h2>
                  <p className="text-sm text-gray-300 mb-4">Quick pickup at the station. Ideal for business travelers and tourists.</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Pickup at platform</li>
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>IC, IR, S-Bahn connections</li>
                    <li className="flex items-start gap-2"><span className="text-nova-gold">✓</span>Waiting for delays included</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Why Nova Taxi in {locationName}?</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {locationEN.highlightPoints.map((point, i) => (
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
                    <h3 className="font-medium text-white mb-2">How much does a taxi to Zurich Airport cost?</h3>
                    <p className="text-sm text-gray-400">Contact us for a free quote. We offer fair fixed prices for airport transfers.</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                    <h3 className="font-medium text-white mb-2">How quickly is a taxi available?</h3>
                    <p className="text-sm text-gray-400">Usually within 10-20 minutes. For advance bookings, we guarantee punctual pickup.</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Booking CTA */}
          <div className="rounded-2xl bg-nova-gold/10 border border-nova-gold/30 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Book a Taxi in {locationName} Now</h2>
                <p className="text-sm text-gray-300">Call us directly or send a WhatsApp message. We confirm your booking immediately.</p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="tel:+41766113131" className="inline-flex items-center justify-center rounded-full bg-nova-gold px-6 py-3 text-sm font-semibold text-black hover:bg-nova-gold-soft transition-colors">076 611 31 31</a>
                <a href="mailto:info@nova-taxi.com" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors">info@nova-taxi.com</a>
              </div>
            </div>
          </div>

          {/* Internal Links */}
          <nav className="border-t border-white/10 pt-8 space-y-4" aria-label="Related pages">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Other Service Areas</h3>
            <div className="flex flex-wrap gap-3">
              <Link href={`/en/kanton/${canton.slug}`} className="text-sm text-gray-300 hover:text-nova-gold transition-colors">→ All locations in Canton {canton.name}</Link>
              <Link href="/en/flughafentransfer" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">→ Zurich Airport Transfer</Link>
              <Link href="/en/business" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">→ Business Transfer</Link>
              <Link href="/en/preise" className="text-sm text-gray-300 hover:text-nova-gold transition-colors">→ Prices & Rates</Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
