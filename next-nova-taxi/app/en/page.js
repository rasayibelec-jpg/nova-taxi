import HeroEN from "@/components/home/HeroEN";
import ServicesOverviewEN from "@/components/home/ServicesOverviewEN";
import ServiceAreasStripEN from "@/components/home/ServiceAreasStripEN";
import ContactStripEN from "@/components/home/ContactStripEN";

export const metadata = {
  title: "Nova Taxi | Premium Taxi Service in Central Switzerland",
  description: "Nova Taxi – modern premium taxi service in Central Switzerland. Airport transfers, business rides, courier services and more.",
  alternates: {
    canonical: "https://www.nova-taxi.com/en",
    languages: {
      'de': 'https://www.nova-taxi.com',
      'en': 'https://www.nova-taxi.com/en',
    },
  },
};

export default function HomePageEN() {
  return (
    <div>
      <HeroEN />
      <ServicesOverviewEN />
      <ServiceAreasStripEN />
      <ContactStripEN />
    </div>
  );
}
