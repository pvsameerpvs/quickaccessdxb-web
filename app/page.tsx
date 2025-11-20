import { getServicesByCategory } from "@/lib/data";
import { Hero } from "@/components/hero";
import { ServiceGrid } from "@/components/service-grid";
import { ValuesSection } from "@/components/values-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { FaqSection } from "@/components/faq-section";
import AboutPage from "./about/page";
import { SupportPill } from "@/components/support-pill";
import { FavoriteProjectDubaiSportsCity } from "@/components/FavoriteProjectDubaiSportsCity";

export default function HomePage() {
  const serviceItems = getServicesByCategory("service");
  const projectItems = getServicesByCategory("project");

  return (
    <>
      <Hero />
      <AboutPage />
      <ServiceGrid
        title="Service & Repairs"
        subtitle="Complete interior, renovation, fit-out, maintenance, technical and repair services for homes and businesses."
        items={serviceItems}
        baseHref="/services"
        limit={6}
      />
      <ValuesSection />

      <ServiceGrid
        title="Projects"
        subtitle="Painting, renovation, ceiling work, interior, roof elevation, floor tiles and kitchen."
        items={projectItems}
        baseHref="/projects"
        limit={6}
      />
      <FavoriteProjectDubaiSportsCity />
      <WhyChooseSection />
      <FaqSection />
    </>
  );
}
