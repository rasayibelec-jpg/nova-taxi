import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ServiceAreasStrip from "@/components/home/ServiceAreasStrip";
import ContactStrip from "@/components/home/ContactStrip";

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
