import { AboutSection } from "@/components/about/about-section";
import { AboutGallery } from "@/components/about/about-gallery";

export const metadata = {
  title: "About Us – QuickAccess DXB",
  description:
    "Learn more about QuickAccess DXB – interior design, fit out, renovation and maintenance experts based in Dubai.",
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container space-y-12">
        <AboutSection />
        <AboutGallery />
      </div>
    </div>
  );
}
