import { getServicesByCategory } from "@/lib/data";
import { ServiceGrid } from "@/components/service-grid";

export const metadata = {
  title: "Services – QuickAccess DXB",
  description:
    "Interior design, office fit out, villa renovation, apartment revamp, HVAC, MEP, carpentry, tiling, painting, handyman and more."
};

export default function ServicesPage() {
  const serviceItems = getServicesByCategory("service");

  return (
    <ServiceGrid
      title="Service & Repairs"
      subtitle="Turnkey services and on-demand repairs for villas, apartments, offices and retail spaces."
      items={serviceItems}
      baseHref="/services"
    />
  );
}
