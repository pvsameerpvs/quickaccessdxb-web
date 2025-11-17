import { getServicesByCategory } from "@/lib/data";
import { ServiceGrid } from "@/components/service-grid";

export const metadata = {
  title: "Projects – QuickAccess DXB",
  description:
    "Painting, renovation, ceiling work, interior, roof elevation, floor tiles, flooring and kitchen projects across Dubai.",
};

export default function ProjectsPage() {
  const projectItems = getServicesByCategory("project");

  return (
    <ServiceGrid
      title="Projects"
      subtitle="A curated selection of completed projects across villas, apartments, offices and hospitality spaces."
      items={projectItems}
      baseHref="/projects"
    />
  );
}
