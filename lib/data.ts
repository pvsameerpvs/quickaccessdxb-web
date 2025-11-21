export type Service = {
  slug: string;
  name: string;
  category: "service" | "project";
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  gallery: string[];
};

export const services: Service[] = [
  {
    slug: "apartment-revamp",
    name: "Apartment Revamp",
    category: "service",
    tagline: "Complete Apartment Revamp & Fit-Out",
    description:
      "Full apartment revamp including civil works, MEP upgrades, flooring, ceilings, carpentry, bathrooms, kitchen renovation and turnkey handover.",
    highlights: [
      "Civil, structural, MEP, flooring and ceiling works",
      "Kitchen, bathroom, wardrobes and custom joinery upgrades",
      "End-to-end turnkey renovation with design, approvals and cleaning"
    ],
    image: "/aprtment-revamp1.jpeg",
    gallery: [
      "/aprtment-revamp2.jpeg",
      "/aprtment-revamp3.jpeg",
      "/aprtment-revamp4.jpeg"
    ]
  },
  {
    slug: "restaurant-upgradation",
    name: "Restaurant Upgradation",
    category: "service",
    tagline: "Restaurant Upgradation & Commercial Fit-Out",
    description:
      "Comprehensive restaurant and café upgrades including civil works, commercial kitchen, MEP, interiors, furniture, branding and turnkey execution.",
    highlights: [
      "Civil, interior and commercial kitchen works to hygiene standards",
      "HVAC, electrical, plumbing, fire & safety and POS/CCTV setup",
      "Theme-based interior design, custom furniture and branding signage"
    ],
    image: "/RestaurantUpgradation1.jpeg",
    gallery: [
      "/RestaurantUpgradation2.jpeg",
      "/RestaurantUpgradation3.jpeg",
      "/RestaurantUpgradation4.jpeg"
    ]
  },
  {
    slug: "kitchen-rectify",
    name: "Kitchen Rectify",
    category: "service",
    tagline: "Kitchen Rectification & Makeover",
    description:
      "Targeted rectification and upgrade of existing kitchens including plumbing, electrical, cabinets, countertops, tiling, appliances and safety.",
    highlights: [
      "Plumbing and electrical rectification with leak and overload fixing",
      "Cabinet, countertop, tiling and backsplash repair or replacement",
      "Hood, hob and appliance setup with improved ventilation and safety"
    ],
    image: "/KitchenRectify1.jpeg",
    gallery: [
      "/KitchenRectify2.jpeg",
      "/KitchenRectify3.jpeg",
      "/KitchenRectify4.jpeg"
    ]
  },
  {
    slug: "bathroom-furbish",
    name: "Bathroom Furbish",
    category: "service",
    tagline: "Bathroom Furbishing & Upgrade",
    description:
      "Bathroom refurbishment and rectification including plumbing, sanitary, tiling, shower areas, lighting, vanity, accessories and safety enhancements.",
    highlights: [
      "Leak rectification, new sanitary fixtures and hot/cold rerouting",
      "Tile replacement, waterproofing, re-grouting and slope correction",
      "Shower enclosures, vanity units, accessories, anti-slip and ventilation"
    ],
    image: "/bathroom-furbish2.jpeg",
    gallery: [
      "/bathroom-furbish1.jpeg",
      "/bathroom-furbish3.jpeg",
      "/bathroom-furbish4.jpeg"
    ]
  },
  {
    slug: "hvac-maintenance",
    name: "HVAC Maintenance",
    category: "service",
    tagline: "HVAC Maintenance & System Health Check",
    description:
      "Preventive and corrective maintenance for residential and commercial HVAC systems including split, ducted, VRF/VRV, package units and ducts.",
    highlights: [
      "Split, ducted, VRF/VRV, package unit and central plant servicing",
      "Coil cleaning, filter wash, gas check, leak testing and air balancing",
      "Duct cleaning, fresh air and exhaust maintenance with AMC options"
    ],
    image: "/HVAC2.jpeg",
    gallery: ["/HVAC1.jpeg", "/HVAC3.jpeg", "/HVAC4.jpeg"]
  },
  {
    slug: "mep-services",
    name: "MEP Services",
    category: "service",
    tagline: "Complete MEP Works & Approvals",
    description:
      "Complete mechanical, electrical and plumbing services for homes, villas, apartments and buildings including design, installation, testing and approvals.",
    highlights: [
      "HVAC design, ducting, chiller, VRF, exhaust and smoke extraction systems",
      "Electrical distribution, LV/MV works, lighting, ELV, fire alarm and automation",
      "Plumbing, drainage, pumps, fire fighting systems, testing and civil defense approvals"
    ],
    image: "/MEP2.jpeg",
    gallery: ["/MEP1.jpeg", "/MEP3.jpeg", "/MEP4.jpeg"]
  },
  {
    slug: "carpentry-joinery-revive",
    name: "Carpentry & Joinery Revive",
    category: "service",
    tagline: "Carpentry & Joinery Works",
    description:
      "Custom carpentry and joinery solutions including wardrobes, kitchens, doors, TV units, vanities, paneling, outdoor structures and rectification works.",
    highlights: [
      "Custom wardrobes, kitchens, TV units, reception counters and storage",
      "Doors, frames, partitions, paneling, feature walls and bathroom joinery",
      "Pergolas, decking, outdoor joinery and repair/rectification services"
    ],
    image: "/carpenter1.jpeg",
    gallery: ["/carpenter2.jpeg", "/carpenter3.jpeg", "/carpenter4.jpeg"]
  },
  {
    slug: "floor-wall-designs",
    name: "Floor & Wall Designs",
    category: "service",
    tagline: "Floor & Wall Finishes & Rectification",
    description:
      "Full range of floor and wall finishes including tiles, marble, vinyl, epoxy, cladding, wall panels, feature walls, wallpapers and protective coatings.",
    highlights: [
      "Tile, marble, wooden, vinyl, epoxy and specialty industrial flooring",
      "Stone cladding, PVC/WPC/3D panels, UV sheets and decorative wall systems",
      "Leveling, screeding, waterproofing, re-grouting and restoration works"
    ],
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    gallery: [
      "https://images.pexels.com/photos/6585768/pexels-photo-6585768.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg"
    ]
  },
  {
    slug: "glass-partition-aluminum",
    name: "Glass Partition & Aluminium",
    category: "service",
    tagline: "Glass & Aluminium Fabrication & Fit-Out",
    description:
      "Comprehensive glass and aluminium works including partitions, doors, shower systems, façades, cladding, pergolas, windows, mirrors and repairs.",
    highlights: [
      "Frameless, framed, acoustic and decorative glass partitions and doors",
      "Aluminium doors, windows, kitchens, pergolas, louvers and ACP cladding",
      "Curtain walls, skylights, shower glass, mirrors and repair/maintenance"
    ],
    image: "/glass1.jpeg",
    gallery: ["/glass2.jpeg", "/glass3.jpeg", "/glass4.jpeg"]
  },
  {
    slug: "handyman",
    name: "Handyman",
    category: "service",
    tagline: "Handyman Repair, Fixing & Installation",
    description:
      "On-demand handyman services for small electrical, plumbing, carpentry, civil, painting and installation works in homes and offices.",
    highlights: [
      "Electrical, plumbing, carpentry and civil minor repairs and troubleshooting",
      "Wall mounting for TVs, shelves, mirrors, curtains and furniture assembly",
      "General fixing, sealing, silicone works and inspection-based maintenance"
    ],
    image: "/handyman1.jpeg",
    gallery: ["/handyman2.jpeg", "/handyman3.jpeg", "/handyman4.jpeg"]
  },
  {
    slug: "office-setup-ceiling-works",
    name: "Office Setup & Ceiling Works",
    category: "service",
    tagline: "Office Fit-Out & Ceiling Systems",
    description:
      "Complete office setup including layout planning, partitions, workstations, MEP, ceilings, finishes, fire & safety and turnkey handover.",
    highlights: [
      "Space planning, partitions, workstations, reception and storage setup",
      "Electrical, networking, HVAC, flooring, wall finishes and branding integration",
      "Gypsum, grid, PVC and feature ceilings with MEP and fire system coordination"
    ],
    image: "/office1.jpeg",
    gallery: ["/office2.jpeg", "/office3.jpeg", "/office4.jpeg"]
  },
  {
    slug: "hvac-installation",
    name: "HVAC Installation",
    category: "service",
    tagline: "HVAC Design & Installation",
    description:
      "Supply and installation of complete HVAC systems including split, ducted, VRF/VRV, package units, ducts, fresh air and exhaust systems.",
    highlights: [
      "Site survey, heat load calculation, system design and equipment selection",
      "Indoor/outdoor unit installation, ducting, piping, insulation and controls",
      "Testing, commissioning, airflow balancing and thermostat/controls setup"
    ],
    image: "/HVAC-Installation1.jpeg",
    gallery: [
      "/HVAC-Installation2.jpeg",
      "/HVAC-Installation3.jpeg",
      "/HVAC-Installation4.jpeg"
    ]
  },
  {
    slug: "masonry-interlocking",
    name: "Masonry & Interlocking",
    category: "service",
    tagline: "Masonry & Interlock Supply & Fix",
    description:
      "All types of masonry and interlocking paving works including blockwork, plastering, concrete, edging, driveways, walkways and repairs.",
    highlights: [
      "Block and brick walls, plastering, concrete foundations and outdoor masonry",
      "Complete interlock installation for driveways, walkways, parking and gardens",
      "Re-leveling, repair, drainage correction and full site preparation"
    ],
    image: "/interlock1.jpeg",
    gallery: ["/interlock2.jpeg", "/interlock3.jpeg", "/interlock4.jpeg"]
  },
  {
    slug: "plumbing-services",
    name: "Plumbing Services",
    category: "service",
    tagline: "Residential & Commercial Plumbing",
    description:
      "Complete plumbing services covering leaks, drainage, sanitary, hot/cold water systems, pumps, tanks, project plumbing and maintenance.",
    highlights: [
      "Leak repair, pipe replacement, sanitary fixture and drainage works",
      "Hot and cold water systems, pumps, tanks, manholes and grease traps",
      "Full project plumbing for homes/buildings and AMC-based maintenance"
    ],
    image: "/plumber1.jpeg",
    gallery: ["/plumber2.jpeg", "/plumber3.jpeg", "/plumber4.jpeg"]
  },
  {
    slug: "office-building-wall-painting",
    name: "Office & Building Wall Painting",
    category: "service",
    tagline: "Office & Building Painting Works",
    description:
      "Professional interior and exterior painting for offices, buildings and commercial spaces including preparation, repairs and protective coatings.",
    highlights: [
      "Interior office painting, corporate themes, feature walls and ceilings",
      "Exterior façade, staircase, parking and common area painting with repair",
      "Weatherproof, anti-fungal, specialty and epoxy coatings as required"
    ],
    image: "/pain1ting-service.jpeg",
    gallery: [
      "/pain2ting-service.jpeg",
      "/pain3ting-service.jpeg",
      "/pain4ting-service.jpeg"
    ]
  },
  {
    slug: "floor-walk-tiling-works",
    name: "Floor & Walk Tiling Works",
    category: "service",
    tagline: "Floor, Walkway & Stair Tiling",
    description:
      "Complete indoor and outdoor tiling services for floors, walkways, stairs and feature areas including preparation, fixing and rectification.",
    highlights: [
      "Indoor and outdoor tiling for homes, offices, restaurants and industrial areas",
      "Walkway, pathway, staircase and anti-slip tiling for wet and external zones",
      "Tile repair, re-grouting, slope correction, polishing and decorative patterns"
    ],
    image: "/tilework11.jpg",
    gallery: ["/tilework12.jpg", "/tilework13.jpeg", "/tilework13.jpeg"]
  },
  {
    slug: "wallpaper-fixing-work",
    name: "Wallpaper Fixing Work",
    category: "service",
    tagline: "Wallpaper Installation & Replacement",
    description:
      "Supply and professional installation of wallpapers and murals including surface preparation, fixing, removal and reinstallation.",
    highlights: [
      "3D, 5D, fabric, vinyl, luxury and custom printed wallpapers for all spaces",
      "Surface preparation, crack repair, priming and bubble-free installation",
      "Wallpaper removal, wall repair, repainting base and re-fixing new designs"
    ],
    image: "/wallpaper1.jpeg",
    gallery: ["/wallpaper2.jpeg", "/wallpaper3.jpeg", "/wallpaper4.jpeg"]
  },
  {
    slug: "cctv-cameras-installation",
    name: "CCTV Cameras Installation",
    category: "service",
    tagline: "CCTV & Surveillance System Installation",
    description:
      "End-to-end CCTV system solutions including planning, camera installation, cabling, NVR/DVR setup, networking and maintenance.",
    highlights: [
      "Indoor/outdoor, IP, analog, PTZ, AI and wireless CCTV camera installation",
      "Cabling, NVR/DVR configuration, network setup and mobile app viewing",
      "System testing, troubleshooting, upgrades and annual maintenance options"
    ],
    image: "/cctv1.jpeg",
    gallery: ["/cctv2.jpeg", "/cctv3.jpeg", "/cctv4.jpeg"]
  },
  {
    slug: "cleaning-services",
    name: "Cleaning Services",
    category: "service",
    tagline: "Residential & Commercial Cleaning",
    description:
      "Professional cleaning services including residential, office, deep cleaning, move-in/move-out, post-construction and disinfection.",
    highlights: [
      "Regular and deep cleaning for homes, apartments, villas and offices",
      "Move-in/move-out and post-construction cleaning with full detailing",
      "Carpet, sofa, mattress cleaning, external areas and sanitization services"
    ],
    image: "/cleaning1.jpeg",
    gallery: ["/cleaning4.jpeg", "/cleaning3.jpeg", "/cleaning1.jpeg"]
  },

  // PROJECTS – left exactly as you had them
  {
    slug: "painting",
    name: "Painting",
    category: "project",
    tagline: "Interior & Exterior Painting",
    description:
      "Showcase of interior and exterior painting projects for villas, apartments, and offices across Dubai.",
    highlights: [
      "Color consultation and mockups",
      "Texture and special effect finishes",
      "Fast-track repainting for handovers"
    ],
    image: "/painting2.jpg",
    gallery: ["/painting1.jpg", "/painting3.jpg", "/painting4.jpg"]
  },
  {
    slug: "renovation",
    name: "Renovation",
    category: "project",
    tagline: "Full Renovation Projects",
    description:
      "Complete villa and apartment renovation projects, from structural changes to final styling.",
    highlights: [
      "Concept to completion delivery",
      "Structural, MEP, and finishes",
      "Handover-ready cleaning and snagging"
    ],
    image: "/renovation2.jpg",
    gallery: [
      "/renovation1.jpg",
      "/renovation3.jpg",
      "/renovation4.jpg",
      "/renovation5.jpg"
    ]
  },
  {
    slug: "ceiling-work",
    name: "Ceiling Work",
    category: "project",
    tagline: "Gypsum & Decorative Ceilings",
    description:
      "High-quality ceiling installations including gypsum board designs, LED coves, and acoustic panels.",
    highlights: [
      "False ceiling and gypsum board works",
      "Hidden lighting and LED cove integration",
      "Acoustic and thermal solutions"
    ],
    image: "/CielingWork.jpg",
    gallery: [
      "/CielingWork1.jpg",
      "/CielingWork2.jpg",
      "https://images.pexels.com/photos/37347/office-computer-business-headquarters.jpg"
    ]
  },
  {
    slug: "interior",
    name: "Interior",
    category: "project",
    tagline: "Modern Interior Projects",
    description:
      "Completed interior design and fit out transformations across residential and commercial spaces.",
    highlights: [
      "Concept design and 3D visualization",
      "Material selection and finishes",
      "Turnkey interior execution"
    ],
    image: "/Interior.jpg",
    gallery: [
      "/Interior1.jpg",
      "https://images.pexels.com/photos/6588586/pexels-photo-6588586.jpeg",
      "https://images.pexels.com/photos/6585768/pexels-photo-6585768.jpeg"
    ]
  },
  {
    slug: "roof-elevation",
    name: "Roof Elevation",
    category: "project",
    tagline: "Modern Roof & Exterior Upgrades",
    description:
      "Exterior roof elevation upgrades designed to enhance building appearance, durability, and performance.",
    highlights: [
      "Roof cladding and structural finishing",
      "Weather-resistant coating systems",
      "Custom architectural elevation detailing"
    ],
    image: "/roofing1.jpg",
    gallery: ["/roofing2.jpg", "/roofing3.jpg", "/roofing4.jpg"]
  },
  {
    slug: "floor-tiles",
    name: "Floor Tiles",
    category: "project",
    tagline: "Tile Installation & Replacement",
    description:
      "Professional tile installation projects for villas, apartments, and commercial floors in Dubai.",
    highlights: [
      "Porcelain, ceramic, and marble tiling",
      "Waterproofing and levelling",
      "High-precision tile cutting and finishing"
    ],
    image: "/tilework11.jpg",
    gallery: [
      "/tilework12.jpg",
      "/tilework13.jpeg",
      "/tilework14.jpeg"
    ]
  },
  {
    slug: "flooring",
    name: "Flooring",
    category: "project",
    tagline: "Laminate, Vinyl & Wooden Flooring",
    description:
      "Flooring upgrades including laminate, vinyl, parquet, and hardwood finishes for residential and office spaces.",
    highlights: [
      "Premium laminate & wooden flooring",
      "Moisture-resistant installation",
      "Skirting & edge finishing"
    ],
    image: "/flooring1.jpg",
    gallery: ["/flooring2.jpg", "/flooring3.jpeg", "/flooring4.jpeg"]
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    category: "project",
    tagline: "Modern Kitchen Renovation",
    description:
      "Stylish modular kitchen upgrades featuring premium finishes, storage optimization, and durable fittings.",
    highlights: [
      "Custom cabinetry & countertop installation",
      "Plumbing, electrical & appliance setup",
      "Smart layout optimization"
    ],
    image: "/Kitchen.jpg",
    gallery: ["/Kitchen.jpg", "/Kitchen1.jpg", "/kitchen3.jpg"]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: "service" | "project") {
  return services.filter((s) => s.category === category);
}
