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
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      "https://images.pexels.com/photos/6186814/pexels-photo-6186814.jpeg"
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
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    gallery: [
      "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
      "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
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
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    gallery: [
      "https://images.pexels.com/photos/3735412/pexels-photo-3735412.jpeg",
      "https://images.pexels.com/photos/3735413/pexels-photo-3735413.jpeg",
      "https://images.pexels.com/photos/3735411/pexels-photo-3735411.jpeg"
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
    image: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg",
      "https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg"
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
    image: "https://images.pexels.com/photos/3964345/pexels-photo-3964345.jpeg",
    gallery: [
      "https://images.pexels.com/photos/3964343/pexels-photo-3964343.jpeg",
      "https://images.pexels.com/photos/3964347/pexels-photo-3964347.jpeg",
      "https://images.pexels.com/photos/3964340/pexels-photo-3964340.jpeg"
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
    image: "https://images.pexels.com/photos/4254168/pexels-photo-4254168.jpeg",
    gallery: [
      "https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg",
      "https://images.pexels.com/photos/4254148/pexels-photo-4254148.jpeg",
      "https://images.pexels.com/photos/4254169/pexels-photo-4254169.jpeg"
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
    image: "https://images.pexels.com/photos/5824471/pexels-photo-5824471.jpeg",
    gallery: [
      "https://images.pexels.com/photos/207256/pexels-photo-207256.jpeg",
      "https://images.pexels.com/photos/3735411/pexels-photo-3735411.jpeg",
      "https://images.pexels.com/photos/5824472/pexels-photo-5824472.jpeg"
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
      "https://images.pexels.com/photos/425548/pexels-photo-425548.jpeg"
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
    image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
    gallery: [
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      "https://images.pexels.com/photos/37347/office-computer-business-headquarters.jpg"
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
    image: "https://images.pexels.com/photos/8090164/pexels-photo-8090164.jpeg",
    gallery: [
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg",
      "https://images.pexels.com/photos/8487025/pexels-photo-8487025.jpeg",
      "https://images.pexels.com/photos/8487030/pexels-photo-8487030.jpeg"
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
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
    gallery: [
      "https://images.pexels.com/photos/37347/office-computer-business-headquarters.jpg",
      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
      "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg"
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
    image: "https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg",
    gallery: [
      "https://images.pexels.com/photos/3964343/pexels-photo-3964343.jpeg",
      "https://images.pexels.com/photos/3964345/pexels-photo-3964345.jpeg",
      "https://images.pexels.com/photos/3964347/pexels-photo-3964347.jpeg"
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
    image: "https://images.pexels.com/photos/5847410/pexels-photo-5847410.jpeg",
    gallery: [
      "https://images.pexels.com/photos/5847412/pexels-photo-5847412.jpeg",
      "https://images.pexels.com/photos/5847416/pexels-photo-5847416.jpeg",
      "https://images.pexels.com/photos/5847430/pexels-photo-5847430.jpeg"
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
    image: "https://images.pexels.com/photos/5854194/pexels-photo-5854194.jpeg",
    gallery: [
      "https://images.pexels.com/photos/5854192/pexels-photo-5854192.jpeg",
      "https://images.pexels.com/photos/5854195/pexels-photo-5854195.jpeg",
      "https://images.pexels.com/photos/5854190/pexels-photo-5854190.jpeg"
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
    image: "https://images.pexels.com/photos/1573826/pexels-photo-1573826.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1573827/pexels-photo-1573827.jpeg",
      "https://images.pexels.com/photos/1573828/pexels-photo-1573828.jpeg",
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg"
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
    image: "https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/1457844/pexels-photo-1457844.jpeg",
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
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
    image: "https://images.pexels.com/photos/6587848/pexels-photo-6587848.jpeg",
    gallery: [
      "https://images.pexels.com/photos/6587843/pexels-photo-6587843.jpeg",
      "https://images.pexels.com/photos/6587846/pexels-photo-6587846.jpeg",
      "https://images.pexels.com/photos/6587849/pexels-photo-6587849.jpeg"
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
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg",
    gallery: [
      "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg",
      "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg",
      "https://images.pexels.com/photos/430206/pexels-photo-430206.jpeg"
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
    image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg",
    gallery: [
      "https://images.pexels.com/photos/6195271/pexels-photo-6195271.jpeg",
      "https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg",
      "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg"
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
    image: "https://images.pexels.com/photos/6585752/pexels-photo-6585752.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1573827/pexels-photo-1573827.jpeg",
      "https://images.pexels.com/photos/1573828/pexels-photo-1573828.jpeg",
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg"
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
    image: "https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg",
    gallery: [
      "https://images.pexels.com/photos/3990358/pexels-photo-3990358.jpeg",
      "https://images.pexels.com/photos/3990357/pexels-photo-3990357.jpeg",
      "https://images.pexels.com/photos/6587830/pexels-photo-6587830.jpeg"
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
  image: "https://images.pexels.com/photos/6585752/pexels-photo-6585752.jpeg",
  gallery: [
    "https://images.pexels.com/photos/6585768/pexels-photo-6585768.jpeg",
    "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
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
  image: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg",
  gallery: [
    "https://images.pexels.com/photos/6585752/pexels-photo-6585752.jpeg",
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
  image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  gallery: [
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg"
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
  image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
  gallery: [
    "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg",
    "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg"
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
  image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
  gallery: [
    "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
    "https://images.pexels.com/photos/373911/pexels-photo-373911.jpeg",
    "https://images.pexels.com/photos/373910/pexels-photo-373910.jpeg"
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
  image: "https://images.pexels.com/photos/37347/office-computer-business-headquarters.jpg",
  gallery: [
    "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
    "https://images.pexels.com/photos/6585768/pexels-photo-6585768.jpeg",
    "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
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
