import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ServiceAreasStrip from "@/components/home/ServiceAreasStrip";
import ContactStrip from "@/components/home/ContactStrip";

export const metadata = {
  alternates: {
    canonical: "https://www.nova-taxi.com",
    languages: {
      "de": "https://www.nova-taxi.com",
      "en": "https://www.nova-taxi.com/en",
      "x-default": "https://www.nova-taxi.com",
    },
  },
  openGraph: {
    url: "https://www.nova-taxi.com",
    siteName: "Nova Taxi",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nova Taxi Zentralschweiz",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <ServiceAreasStrip />
      <ContactStrip />
    </div>
  );
}
