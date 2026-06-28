import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ServiceAreasStrip from "@/components/home/ServiceAreasStrip";
import ContactStrip from "@/components/home/ContactStrip";

export const metadata = {
  alternates: {
    canonical: "https://www.nova-taxi.com",
    languages: {
      de: "https://www.nova-taxi.com",
      en: "https://www.nova-taxi.com/en",
    },
  },
  openGraph: {
    url: "https://www.nova-taxi.com",
    siteName: "Nova Taxi",
    locale: "de_CH",
    type: "website",
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
