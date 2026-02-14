import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa Renovation Dubai | Luxury Interior Design & Remodeling",
  description: "Transform your Dubai villa with QuickAccess DXB. Premium kitchen, bathroom and full remodeling services. Free site visit and 3D design mapping.",
};

export default function VillaRenovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
