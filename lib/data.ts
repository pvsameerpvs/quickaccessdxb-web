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
    tagline: "Urban Apartment Revamp",
    description:
      "Upgrade your apartment with sleek finishes, smart storage and efficient layouts that maximise every square meter.",
    highlights: [
      "Space planning and layout optimisation",
      "New finishes for floors, walls and ceilings",
      "Built-in storage and joinery upgrades"
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
    tagline: "Hospitality & Restaurant Upgrade",
    description:
      "Give your restaurant or café a fresh identity with upgraded layouts, lighting, seating and finishes tailored to your concept.",
    highlights: [
      "Concept refinement and interior styling",
      "Dining layout, bar counters and service zones",
      "Lighting, acoustics and ambiance tuning"
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
    tagline: "Smart Kitchen Rectification",
    description:
      "Correct layout issues, upgrade cabinets and improve services to make your kitchen more practical, safe and easy to maintain.",
    highlights: [
      "Cabinet, countertop and backsplash upgrades",
      "Improved lighting, ventilation and power points",
      "Plumbing and appliance reconfiguration"
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
    tagline: "Modern Bathroom Refurbishment",
    description:
      "Transform tired bathrooms into spa-like spaces with new fixtures, tiling and waterproofing for long-lasting performance.",
    highlights: [
      "Complete bathroom strip-out and rebuild",
      "New sanitary ware, mixers and accessories",
      "Waterproofing, tiling and glass partitions"
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
    tagline: "Annual & Preventive HVAC Care",
    description:
      "Keep your AC systems performing efficiently with professional inspection, cleaning and preventive maintenance.",
    highlights: [
      "Filter cleaning and coil deep cleaning",
      "Duct inspection and air-flow balancing",
      "Package, split and VRF system servicing"
    ],
    image: "/HVAC2.jpeg",
    gallery: [
      "/HVAC1.jpeg",
      "/HVAC3.jpeg",
      "/HVAC4.jpeg"
    ]
  },
  {
    slug: "mep-services",
    name: "MEP Services",
    category: "service",
    tagline: "Mechanical, Electrical & Plumbing",
    description:
      "End-to-end MEP design, installation and rectification services that keep your property safe, compliant and efficient.",
    highlights: [
      "Electrical distribution and lighting layouts",
      "Plumbing, drainage and water supply works",
      "Mechanical ventilation and exhaust systems"
    ],
    image: "/MEP2.jpeg",
    gallery: [
      "/MEP1.jpeg",
      "/MEP3.jpeg",
      "/MEP4.jpeg"
    ]
  },
  {
    slug: "carpentry-joinery-revive",
    name: "Carpentry & Joinery Revive",
    category: "service",
    tagline: "Custom Carpentry & Joinery",
    description:
      "Renew doors, wardrobes, cabinets and bespoke joinery to add warmth, storage and character to your interiors.",
    highlights: [
      "Wardrobes, TV units and feature walls",
      "Doors, architraves and skirting upgrades",
      "Custom shelves, counters and reception desks"
    ],
    image: "/carpenter1.jpeg",
    gallery: [
      "/carpenter2.jpeg",
      "/carpenter3.jpeg",
      "/carpenter4.jpeg"
    ]
  },
  {
    slug: "floor-wall-designs",
    name: "Floor & Wall Designs",
    category: "service",
    tagline: "Signature Floors & Wall Finishes",
    description:
      "Curated floor and wall finishes that combine durability with a refined aesthetic for your villa, apartment or office.",
    highlights: [
      "Porcelain, ceramic and natural stone tiling",
      "Feature walls, panels and cladding",
      "Leveling, screed and substrate preparation"
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
    tagline: "Glass & Aluminium Solutions",
    description:
      "Elegant glass partitions and aluminium works that define space while maintaining openness and natural light.",
    highlights: [
      "Office glass partitions and doors",
      "Shower enclosures and railings",
      "Aluminium frames, windows and storefronts"
    ],
    image: "/glass1.jpeg",
    gallery: [
      "/glass2.jpeg",
      "/glass3.jpeg",
      "/glass4.jpeg"
    ]
  },
  {
    slug: "handyman",
    name: "Handyman",
    category: "service",
    tagline: "On-Demand Handyman Services",
    description:
      "Quick, reliable support for everyday fixes, installations and minor repairs in homes and offices.",
    highlights: [
      "Fixture installation and minor carpentry",
      "Mounting TVs, artwork and accessories",
      "Small repairs for doors, locks and hardware"
    ],
    image: "/handyman1.jpeg",
    gallery: [
      "/handyman2.jpeg",
      "/handyman3.jpeg",
      "/handyman4.jpeg"
    ]
  },
  {
    slug: "office-setup-ceiling-works",
    name: "Office Setup & Ceiling Works",
    category: "service",
    tagline: "Office Setup & Ceiling Systems",
    description:
      "Complete office setup with suspended ceilings, lighting integration and services coordination.",
    highlights: [
      "Workstation and partition layouts",
      "Gypsum and acoustic ceiling systems",
      "Integration of lighting, HVAC and sprinklers"
    ],
    image: "/office1.jpeg",
    gallery: [
      "/office2.jpeg",
      "/office3.jpeg",
      "/office4.jpeg"
    ]
  },
  {
    slug: "hvac-installation",
    name: "HVAC Installation",
    category: "service",
    tagline: "New HVAC Installation",
    description:
      "Design and installation of efficient HVAC systems tailored to your villa, apartment or commercial space.",
    highlights: [
      "Load calculation and system selection",
      "Ducting, piping and equipment installation",
      "Testing, commissioning and balancing"
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
    tagline: "Masonry & Interlock Works",
    description:
      "Robust masonry and interlocking paving solutions for villas, pathways, parking areas and landscapes.",
    highlights: [
      "Blockwork walls and boundary walls",
      "Interlock paving and kerb stones",
      "Steps, planters and outdoor features"
    ],
    image: "/interlock1.jpeg",
    gallery: [
      "/interlock2.jpeg",
      "/interlock3.jpeg",
      "/interlock4.jpeg"
    ]
  },
  {
    slug: "plumbing-services",
    name: "Plumbing Services",
    category: "service",
    tagline: "Plumbing Repair & Installation",
    description:
      "Comprehensive plumbing solutions from leak repairs to full bathroom, kitchen and system upgrades.",
    highlights: [
      "Leak detection and pipe repairs",
      "Fixture replacement and relocations",
      "Pump, water heater and tank works"
    ],
    image: "/plumber1.jpeg",
    gallery: [
      "/plumber2.jpeg",
      "/plumber3.jpeg",
      "/plumber4.jpeg"
    ]
  },
  {
    slug: "office-building-wall-painting",
    name: "Office & Building Wall Painting",
    category: "service",
    tagline: "Professional Painting Services",
    description:
      "Interior and exterior painting services for villas, apartments and commercial buildings.",
    highlights: [
      "Surface preparation and crack repairs",
      "Interior emulsion and decorative paints",
      "Exterior weather-resistant coatings"
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
    tagline: "Floor & Walkway Tiling",
    description:
      "Precision tiling works for indoor floors, external walkways, wet areas and feature zones.",
    highlights: [
      "Porcelain, ceramic and mosaic tiling",
      "Anti-slip tiles for wet and outdoor areas",
      "Regrouting and tile replacement works"
    ],
    image: "/tilework11.jpg",
    gallery: [
      "/tilework12.jpg",
      "/tilework13.jpeg",
      "/tilework13.jpeg"
    ]
  },
  {
    slug: "wallpaper-fixing-work",
    name: "Wallpaper Fixing Work",
    category: "service",
    tagline: "Wallpaper Supply & Fixing",
    description:
      "Professional installation of feature wallpapers and wall coverings for homes, offices and hospitality spaces.",
    highlights: [
      "Surface preparation and priming",
      "Precise pattern matching and jointing",
      "Removal and replacement of old wallpapers"
    ],
    image: "/wallpaper1.jpeg",
    gallery: [
      "/wallpaper2.jpeg",
      "/wallpaper3.jpeg",
      "/wallpaper4.jpeg"
    ]
  },
  {
    slug: "cctv-cameras-installation",
    name: "CCTV Cameras Installation",
    category: "service",
    tagline: "CCTV & Security Systems",
    description:
      "Design and installation of CCTV systems that improve safety and monitoring for residential and commercial properties.",
    highlights: [
      "Site survey and camera placement planning",
      "Cabling, installation and configuration",
      "Remote viewing and recording setup"
    ],
    image: "/cctv1.jpeg",
    gallery: [
      "/cctv2.jpeg",
      "/cctv3.jpeg",
      "/cctv4.jpeg"
    ]
  },
  {
    slug: "cleaning-services",
    name: "Cleaning Services",
    category: "service",
    tagline: "Deep Cleaning & Move-In Cleaning",
    description:
      "Detail-oriented cleaning services for post-renovation, move-in, move-out and regular maintenance cleaning.",
    highlights: [
      "Post-construction and post-renovation cleaning",
      "Villa, apartment and office deep cleaning",
      "Glass, façade and common area cleaning"
    ],
    image: "/cleaning1.jpeg",
    gallery: [
      "/cleaning4.jpeg",
      "/cleaning3.jpeg",
      "/cleaning1.jpeg"
    ]
  }
,
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
    gallery: [
      "/painting1.jpg",
      "/painting3.jpg",
      "/painting4.jpg"
    ]
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
}
,
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
}
,
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
  gallery: [
    "/roofing2.jpg",
    "/roofing3.jpg",
    "/roofing4.jpg"
  ]
}
,
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
}
,
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
  gallery: [
    "/flooring2.jpg",
    "/flooring3.jpeg",
    "/flooring4.jpeg"
  ]
}
,
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
  gallery: [
    "/Kitchen.jpg",
    "/Kitchen1.jpg",
    "/kitchen3.jpg"
  ]
}
,

];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: "service" | "project") {
  return services.filter((s) => s.category === category);
}
