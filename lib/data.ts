export type Service = {
  slug: string;
  name: string;
  category: "service" | "project";
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  gallery: string[];
  details?: {
    title: string;
    points: string[];
  }[];
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
    "Complete Renovation Solutions",
    "Design + Build Services",
    "3D Designs & Layout Planning",
    "Civil, Electrical, Plumbing Works",
    "Custom Carpentry & Modular Kitchen",
    "Bathroom & Kitchen Remodelling",
    "Painting & Finishing Works",
    "Flooring & Tiling Works",
    "False Ceiling & Lighting Upgrades",
    "AC & HVAC Installations",
    "Material Procurement & Supervision",
    "Material Procurement & Supervision",

  ],

 
  details: [
    {
      title: "Civil & Structural Works",
      points: [
        "Wall demolition & new wall construction",
        "Plastering & surface preparation",
        "Floor leveling",
        "Waterproofing for wet areas (bathrooms, kitchen, balcony)"
      ]
    },
    {
      title: "Flooring & Tiling",
      points: [
        "New tile installation (bathroom, kitchen, flooring)",
        "Wooden / vinyl / marble flooring",
        "Skirting replacement",
        "Grout repair & tile polishing"
      ]
    },
    {
      title: "Electrical Works",
      points: [
        "Full electrical rewiring",
        "New light points & power points",
        "DB (distribution board) upgrade",
        "LED lighting installation",
        "Smart home system setup (optional)"
      ]
    },
    {
      title: "Plumbing Works",
      points: [
        "Bathroom and kitchen plumbing replacement",
        "Geyser installation",
        "Pipe relocation",
        "Sanitary fixtures installation (WC, basin, mixers, shower sets)"
      ]
    },
    {
      title: "Carpentry & Woodwork",
      points: [
        "Wardrobes & cabinets",
        "Kitchen cabinets renovation",
        "TV unit, shoe rack, storage units",
        "Doors & door frames",
        "Custom-made furniture"
      ]
    },
    {
      title: "Painting & Finishing",
      points: [
        "Wall painting (interior & exterior)",
        "Texture paint / decorative finishes",
        "POP work & gypsum finishing",
        "Wallpaper installation"
      ]
    },
    {
      title: "False Ceiling & Partition",
      points: [
        "Gypsum false ceiling",
        "Cove lighting ceiling",
        "Office-style glass or gypsum partitions"
      ]
    },
    {
      title: "Kitchen Renovation",
      points: [
        "Cabinets & countertop replacement",
        "Backsplash tiles",
        "Plumbing + electrical setup",
        "Appliance integration"
      ]
    },
    {
      title: "Bathroom Renovation",
      points: [
        "Complete bathroom redesign",
        "Tiles + sanitary replacement",
        "Shower enclosure",
        "Vanity & storage installation"
      ]
    },
    {
      title: "Windows & Glass Work",
      points: [
        "New windows",
        "Sliding doors",
        "Mirrors & glass partitions",
        "Shower glass installation"
      ]
    },
    {
      title: "AC / HVAC Works",
      points: [
        "AC supply & installation",
        "Ducting layouts",
        "Maintenance & servicing",
        "Thermostat installation"
      ]
    },
    {
      title: "Interior Design & Styling",
      points: [
        "Space planning",
        "Material selection",
        "Furniture selection & sourcing",
        "Decor, curtains, rugs, accessories"
      ]
    },
    {
      title: "Complete Turnkey Renovation Package",
      points: [
        "End-to-end planning & execution",
        "Design + approvals + materials + installation",
        "Project management",
        "Handover cleaning"
      ]
    }
  ],

  image: "/aprtment-revamp1.jpeg",
  gallery: [
    "/aprtment-revamp2.jpeg",
    "/aprtment-revamp3.jpeg",
    "/aprtment-revamp4.jpeg"
  ]
}
,
{
  slug: "restaurant-upgradation",
  name: "Restaurant Upgradation",
  category: "service",
  tagline: "Restaurant Upgradation & Commercial Fit-Out",
  description:
  "A complete turnkey restaurant upgrade covering interior transformation, modern design development, full MEP enhancements, commercial kitchen setup, custom furniture and branding elements, advanced lighting ambience, premium finishes, safety compliance and a professionally managed handover for a fully refreshed restaurant experience.",

 highlights: [
  "Complete Renovation Solutions",
  "Design + Build Services",
  "3D Designs & Layout Planning",
  "Civil, Electrical, Plumbing Works",
  "Custom Carpentry & Modular Kitchen",
  "Bathroom & Kitchen Remodelling",
  "Painting & Finishing Works",
  "Flooring & Tiling Works",
  "False Ceiling & Lighting Upgrades",
  "AC & HVAC Installations",
  "Material Procurement & Supervision",
  "Turnkey Handover"
],


  details: [
    {
      title: "Civil & Interior Works",
      points: [
        "Demolition of old partitions, flooring, fixtures",
        "New partition walls (gypsum/glass)",
        "Flooring replacement (tiles, vinyl, epoxy, wooden)",
        "Wall finishing: cladding, paint, tiles, panels",
        "Staircase upgrades (if applicable)"
      ]
    },
    {
      title: "Kitchen Renovation (Commercial Standard)",
      points: [
        "Stainless steel kitchen equipment installation",
        "Exhaust hood & ducting setup",
        "Fresh air system",
        "Kitchen plumbing & drainage",
        "Commercial gas line installation",
        "Tile cladding for hygiene compliance",
        "Grease trap installation"
      ]
    },
    {
      title: "MEP Works – Mechanical",
      points: [
        "HVAC system supply & installation",
        "VRF/VRV systems",
        "Air balancing",
        "Exhaust & fresh air systems"
      ]
    },
    {
      title: "MEP Works – Electrical",
      points: [
        "Full electrical upgrade",
        "DB panel upgrade",
        "Lighting design + installation (indoor & facade)",
        "Power points for kitchen equipment",
        "Emergency lighting & exit signs"
      ]
    },
    {
      title: "MEP Works – Plumbing",
      points: [
        "Water supply & drainage",
        "Washroom plumbing upgrade",
        "Kitchen plumbing lines",
        "RO filtration installation (optional)"
      ]
    },
    {
      title: "Restaurant Interior Design",
      points: [
        "Theme development (modern, rustic, industrial, luxury)",
        "Space layout (dining, waiting area, POS, bar counter)",
        "3D interior renderings",
        "Material selection"
      ]
    },
    {
      title: "Furniture & Carpentry",
      points: [
        "Custom dining tables & chairs",
        "Bar counters",
        "Cash counter / reception desk",
        "Storage units",
        "Kitchen shelving",
        "Booth seating / sofas",
        "Wooden partitions & decorative panels"
      ]
    },
    {
      title: "Lighting & Ambience",
      points: [
        "Ambient, task & accent lighting",
        "Decorative hanging lights",
        "LED strip lights",
        "Facade lighting",
        "Custom neon signs"
      ]
    },
    {
      title: "Washroom Renovation",
      points: [
        "Tiles & sanitary fixtures",
        "Vanity counters",
        "Partitions",
        "Accessories (mirrors, sensors, dispensers)"
      ]
    },
    {
      title: "Branding & Signage",
      points: [
        "Indoor branding",
        "Logo walls",
        "Outdoor signage",
        "Menu display boards",
        "Digital signage (optional)"
      ]
    },
    {
      title: "POS & Technology Setup",
      points: [
        "POS counter layout planning",
        "CCTV installation",
        "WiFi network setup",
        "Audio system (speakers)",
        "Security system integration"
      ]
    },
    {
      title: "Fire & Safety Compliance",
      points: [
        "Fire alarm system",
        "Emergency exit signage",
        "Fire extinguishers & hose reels",
        "Smoke detectors",
        "Civil defense compliance (if needed)"
      ]
    },
    {
      title: "Turnkey Project Execution",
      points: [
        "Material procurement",
        "Site supervision",
        "Coordination with authorities",
        "Final cleaning & handover"
      ]
    }
  ],

  image: "/RestaurantUpgradation1.jpeg",
  gallery: [
    "/RestaurantUpgradation2.jpeg",
    "/RestaurantUpgradation3.jpeg",
    "/RestaurantUpgradation4.jpeg"
  ]
}
,
{
  slug: "kitchen-rectify",
  name: "Kitchen Rectify",
  category: "service",
  tagline: "Kitchen Rectification & Makeover",

  description:
    "Targeted kitchen rectification covering plumbing and electrical fixes, cabinet and carpentry restoration, countertop and surface upgrades, tiling and grouting correction, appliance installation, ventilation improvements and complete finishing for a fully refreshed and functional kitchen.",

  highlights: [
    "Plumbing fixes and leak repair",
    "Electrical repair and additional power points",
    "Cabinet repair and custom carpentry",
    "Countertop and tile replacement",
    "Hood, hob and appliance setup",
    "Ventilation and exhaust improvements",
    "Painting, sealing and final finishing",
    "Complete kitchen rectification and makeover"
  ],

  details: [
    {
      title: "Plumbing Rectification",
      points: [
        "Fixing water leakage (sink, mixer, pipes)",
        "Replacement of hot and cold water lines",
        "Blockage removal in drainage",
        "Installation or upgrade of sink, mixer and traps",
        "Geyser installation and connection",
        "RO water line setup"
      ]
    },
    {
      title: "Electrical Rectification",
      points: [
        "Repairing or adding power points for appliances",
        "Fixing overload issues",
        "Rewiring damaged circuits",
        "LED light replacement or installation",
        "DB load balancing if required"
      ]
    },
    {
      title: "Cabinet & Carpentry Rectification",
      points: [
        "Fixing broken cabinet doors",
        "Hinge, handle and channel replacement",
        "New cabinet shelves",
        "Soft-close mechanism installation",
        "Repainting or refinishing old cabinets",
        "Replacing countertop support or framing"
      ]
    },
    {
      title: "Countertop & Surface Repairs",
      points: [
        "Countertop replacement (granite, quartz, solid surface)",
        "Crack and joint repairs",
        "Backsplash tile replacement",
        "Silicone sealing around sink and countertop"
      ]
    },
    {
      title: "Tiling & Grouting Rectification",
      points: [
        "Broken tile replacement",
        "Re-grouting old tiles",
        "Floor leveling",
        "Waterproofing for wet areas"
      ]
    },
    {
      title: "Kitchen Appliance Setup",
      points: [
        "Hood and hob installation",
        "Chimney ducting repair",
        "Dishwasher installation",
        "Refrigerator water line connection",
        "Microwave or oven fitment"
      ]
    },
    {
      title: "Ventilation & Exhaust System",
      points: [
        "Hood ducting extension",
        "Motor replacement",
        "Carbon filter replacement",
        "Exhaust performance improvement"
      ]
    },
    {
      title: "Painting & Finishing Touches",
      points: [
        "Repainting kitchen walls and ceilings",
        "Touch-up work",
        "Waterproof paint application",
        "Anti-fungal coating in moisture areas"
      ]
    },
    {
      title: "Safety & Compliance",
      points: [
        "Gas line inspection",
        "Gas leak rectification",
        "Fire safety setup including detectors and extinguishers"
      ]
    }
  ],

  image: "/KitchenRectify1.jpeg",
  gallery: [
    "/KitchenRectify2.jpeg",
    "/KitchenRectify3.jpeg",
    "/KitchenRectify4.jpeg"
  ]
}
,
{
  slug: "bathroom-furbish",
  name: "Bathroom Furbish",
  category: "service",
  tagline: "Bathroom Furbishing & Upgrade",

  description:
    "Full bathroom furbishing including plumbing and sanitary fixes, tile and waterproofing treatment, shower upgrades, vanity and storage replacement, electrical and lighting improvements, accessories installation, ventilation upgrades and complete finishing for a fresh and functional bathroom makeover.",

  highlights: [
    "Plumbing and leakage repair",
    "Sanitary fixture replacement",
    "Tiles, grouting and waterproofing",
    "Shower area upgrades and glass enclosures",
    "Vanity and cabinet installation",
    "Lighting and electrical fixes",
    "Accessories and final fittings",
    "Complete bathroom furbishing and makeover"
  ],

  details: [
    {
      title: "Plumbing & Sanitary Fixes",
      points: [
        "Leakage repair (pipes, mixers, WC, basin)",
        "Replacement of damaged PVC/CPVC pipes",
        "Re-routing of hot and cold water lines",
        "Drainage blockage removal",
        "Installation of new sanitary fixtures (WC, basin, mixers, shower sets)",
        "Geyser installation and connection",
        "Floor trap replacement"
      ]
    },
    {
      title: "Tiling & Surface Works",
      points: [
        "Replacement of broken wall and floor tiles",
        "Re-grouting and sealing old tiles",
        "Waterproofing treatment for wet areas",
        "Slope correction for proper drainage",
        "Installation of new wall cladding tiles"
      ]
    },
    {
      title: "Shower & Bath Area Upgrades",
      points: [
        "Glass shower enclosure installation",
        "Shower tray installation",
        "Rain shower and handheld shower setup",
        "Niches and shelves for storage"
      ]
    },
    {
      title: "Electrical & Lighting Works",
      points: [
        "LED ceiling lights replacement",
        "Exhaust fan installation",
        "New electrical points for accessories",
        "Geyser electrical connection",
        "Mirror light installation"
      ]
    },
    {
      title: "Vanity & Storage Rectification",
      points: [
        "Vanity counter replacement",
        "Cabinet repairs or new cabinets",
        "Basin counter installation",
        "Mirror cabinet installation"
      ]
    },
    {
      title: "Accessories & Fittings",
      points: [
        "Towel rails, holders and shelves installation",
        "Soap dispenser and toilet paper holder",
        "Bathroom hooks and robe hooks",
        "Bidet spray replacement",
        "Shower curtain rod installation"
      ]
    },
    {
      title: "Painting & Finishing",
      points: [
        "Moisture-resistant ceiling paint",
        "Anti-fungal and anti-mold treatment",
        "Touch-up works",
        "Silicone sealing around fixtures"
      ]
    },
    {
      title: "Ventilation & Safety",
      points: [
        "Exhaust and airflow improvement",
        "Anti-slip tile installation (optional)",
        "Safety grab bars (elder-friendly)",
        "Fire or smoke detector (optional)"
      ]
    }
  ],

  image: "/bathroom-furbish2.jpeg",
  gallery: [
    "/bathroom-furbish1.jpeg",
    "/bathroom-furbish3.jpeg",
    "/bathroom-furbish4.jpeg"
  ]
}



,
{
  slug: "hvac-maintenance",
  name: "HVAC Maintenance",
  category: "service",
  tagline: "HVAC Maintenance & System Health Check",

  description:
    "Comprehensive HVAC maintenance covering split units, ducted systems, VRF/VRV systems, package units, duct cleaning, fresh air and exhaust systems, chiller maintenance, electrical and control inspections, gas services and full system performance optimization for long-term efficiency.",

  highlights: [
    "Split AC cleaning and repair",
    "Ducted AC, FCU and AHU maintenance",
    "Commercial HVAC servicing",
    "VRF and VRV system maintenance",
    "Package unit and roof-top AC service",
    "Duct cleaning and sanitization",
    "Fresh air and exhaust system maintenance",
    "Thermostat and control system repairs",
    "Refrigerant leak check and gas top-up",
    "AC installation and relocation",
    "Annual maintenance contracts (AMC)",
    "Complete HVAC system health check"
  ],

  details: [
    {
      title: "Split AC Maintenance",
      points: [
        "Indoor and outdoor coil deep cleaning",
        "Filter washing and sanitization",
        "Gas pressure check and top-up",
        "Drain line flushing and blockage removal",
        "Thermostat calibration",
        "PCB inspection",
        "Compressor and fan motor check",
        "Complete performance test"
      ]
    },
    {
      title: "Ducted AC (FCU / AHU) Maintenance",
      points: [
        "Filter cleaning or replacement",
        "Coil cleaning for AHU and FCU units",
        "Belt replacement and alignment",
        "Motor and bearing lubrication",
        "Condensate tray cleaning and disinfection",
        "Duct inspection and leakage check",
        "Air balancing",
        "Thermostat and actuator testing"
      ]
    },
    {
      title: "VRF / VRV System Maintenance",
      points: [
        "Refrigerant cycle health check",
        "Outdoor unit coil cleaning",
        "Smart controller and BMS integration testing",
        "Branch selector box inspection",
        "Indoor FCU coil wash",
        "System error code diagnostics",
        "Leak testing and pressure inspection",
        "Load balancing and performance optimization"
      ]
    },
    {
      title: "Package Unit Maintenance (Commercial)",
      points: [
        "Coil deep cleaning",
        "Filter replacement",
        "Blower and motor servicing",
        "Compressor health check",
        "Electrical connection tightening",
        "Gas top-up if required",
        "Control board testing",
        "Drain pan cleaning and flushing"
      ]
    },
    {
      title: "Duct Cleaning & Disinfection",
      points: [
        "Full internal duct cleaning",
        "Removal of dust, allergens and mold",
        "Anti-bacterial disinfectant spray",
        "Duct leak sealing",
        "Grills and diffuser cleaning"
      ]
    },
    {
      title: "Fresh Air & Exhaust System Maintenance",
      points: [
        "Fresh air fan cleaning",
        "Exhaust fan cleaning",
        "Motor replacement",
        "Duct cleaning for kitchen hoods",
        "Smoke extraction system testing"
      ]
    },
    {
      title: "Chiller & Central Plant Maintenance",
      points: [
        "Chilled water pump maintenance",
        "AHU and FCU coil cleaning",
        "Filter replacement",
        "Chiller performance check",
        "Chemical flushing",
        "BMS calibration"
      ]
    },
    {
      title: "Refrigerant & Gas Services",
      points: [
        "Leak testing (N2 pressure test)",
        "Refrigerant recovery and refill",
        "Pressure balancing",
        "Compressor load check"
      ]
    },
    {
      title: "Electrical & Control System Maintenance",
      points: [
        "DB inspection and load balancing",
        "Loose wiring correction",
        "Capacitor testing and replacement",
        "Thermostat repair or replacement",
        "PCB testing",
        "Control wiring check"
      ]
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      points: [
        "Quarterly maintenance visits",
        "Emergency breakdown service",
        "Priority response",
        "Discount on spare parts",
        "System performance reports"
      ]
    }
  ],

  image: "/HVAC2.jpeg",
  gallery: ["/HVAC1.jpeg", "/HVAC3.jpeg", "/HVAC4.jpeg"]
}

,
{
  slug: "mep-services",
  name: "MEP Works",
  category: "service",
  tagline: "Complete MEP Works & Approvals",

  description:
    "Comprehensive MEP solutions covering HVAC mechanical systems, full electrical installations, complete plumbing works, fire fighting and alarm systems, ELV integrations, water features, and complete testing, commissioning and approvals for residential and commercial projects.",

  highlights: [
    "Complete HVAC systems including split, ducted, VRF/VRV and chiller systems",
    "Full electrical installation and smart automation",
    "Plumbing systems setup for water, drainage and pumps",
    "Fire fighting and fire alarm system installation",
    "ELV systems such as CCTV, access control and data networks",
    "Pump rooms, water tanks and filtration system setup",
    "Design, shop drawings and authority approvals",
    "Testing, commissioning and final handover",
    "MEP solutions for new construction",
    "MEP renovation and rectification works"
  ],

  details: [
    {
      title: "Mechanical (HVAC) Works",
      points: [
        "Split AC installation and piping",
        "Ducted AC installation",
        "Fresh air and exhaust systems",
        "HVAC load calculation",
        "VRF and VRV systems for villas",
        "AC drainage system setup",
        "Package unit installation (if applicable)",
        "HVAC design and shop drawings (commercial)",
        "Chiller plant installation",
        "AHU and FCU installation",
        "Duct fabrication and installation",
        "Air balancing and testing",
        "Smoke extraction systems",
        "Kitchen hood and ducting systems",
        "Staircase and corridor pressurization fans",
        "BMS system integration"
      ]
    },

    {
      title: "Electrical Works",
      points: [
        "Complete electrical wiring",
        "DB (Distribution Board) installation",
        "Load calculation and phase balancing",
        "Lighting fixtures installation",
        "Power points for appliances",
        "Smart home automation systems",
        "Earthing and grounding systems",
        "CCTV, doorbell and access control cabling",
        "Electrical design and shop drawings (commercial)",
        "MDB, SMDB and DB installation",
        "Cable tray, trunking and conduits",
        "Emergency lighting and exit signage",
        "LV and MV electrical works",
        "Structured cabling",
        "UPS installation",
        "Fire alarm system wiring",
        "Building automation and ELV systems"
      ]
    },

    {
      title: "Plumbing Works",
      points: [
        "Hot and cold water supply lines",
        "Drainage and sewage lines",
        "Water heater installation",
        "Pump and pressure system setup",
        "Bathroom plumbing work",
        "Kitchen plumbing and RO line",
        "Manhole and inspection chamber connections",
        "Water tank installation",
        "Plumbing design and shop drawings (commercial)",
        "Drainage, stormwater and sewer line networks",
        "Pump room installation for transfer and booster pumps",
        "Water treatment and filtration systems",
        "Fire pump connections",
        "Grease trap installation",
        "Vertical risers for water supply and drainage",
        "Testing and commissioning"
      ]
    },

    {
      title: "Fire Fighting Systems",
      points: [
        "Fire alarm system installation",
        "Smoke detectors and heat detectors",
        "Sprinkler system installation",
        "Fire hose reels and cabinets",
        "Fire pump room setup",
        "FM200 and CO2 suppression systems",
        "Emergency exit and safety signage",
        "Civil defense inspections"
      ]
    },

    {
      title: "ELV (Extra Low Voltage) Systems",
      points: [
        "CCTV system installation",
        "Access control systems",
        "Intercom systems",
        "Data and telecom cabling",
        "WiFi network setup",
        "Audio and video systems",
        "Gate barrier and security systems"
      ]
    },

    {
      title: "Water Features & Special Systems",
      points: [
        "Swimming pool MEP connections",
        "Jacuzzi and sauna MEP works",
        "Irrigation system installation",
        "Solar water heater systems",
        "Water filtration and softener systems"
      ]
    },

    {
      title: "Testing, Commissioning & Approvals",
      points: [
        "MEP system performance testing",
        "Plumbing pressure testing",
        "Duct leakage testing",
        "Electrical load testing",
        "Fire alarm and fire fighting commissioning",
        "As-built drawings preparation",
        "Municipality and civil defense approvals",
        "Handover documents and certifications"
      ]
    }
  ],

  image: "/MEP2.jpeg",
  gallery: ["/MEP1.jpeg", "/MEP3.jpeg", "/MEP4.jpeg"]
}

,
{
  slug: "carpentry-joinery-revive",
  name: "Carpentry & Joinery Works",
  category: "service",
  tagline: "Carpentry & Joinery Fabrication & Fit-Out",

  description:
    "Professional carpentry and joinery solutions including custom-made furniture, modular kitchens, wardrobes, doors, wall paneling, bathroom joinery, outdoor wooden structures, interior fit-out joinery and complete finishing for residential and commercial spaces.",

  highlights: [
    "Custom-made furniture fabrication",
    "Kitchen and wardrobe manufacturing",
    "Doors, frames and wooden partitions",
    "Vanity units and bathroom joinery",
    "Wall paneling, cladding and feature walls",
    "Restaurant and office fit-out joinery",
    "Pergolas, decking and outdoor woodworks",
    "Repair, modification and rectification works",
    "Complete joinery solutions for homes and commercial projects"
  ],

  details: [
    {
      title: "Custom Furniture Fabrication",
      points: [
        "Wardrobes (hinged and sliding)",
        "Kitchen cabinets and pantries",
        "TV units and entertainment walls",
        "Shoe cabinets and storage units",
        "Bedroom sets and side tables",
        "Custom shelves and bookcases",
        "Office desks and workstations"
      ]
    },
    {
      title: "Doors & Door Frames",
      points: [
        "Wooden door installation",
        "Customized door frames and architraves",
        "Sliding door systems",
        "Flush doors, MDF doors and veneer doors",
        "Door handle, lock and hinge installation",
        "Acoustic and solid core doors"
      ]
    },
    {
      title: "Kitchen Joinery",
      points: [
        "Modular kitchen fabrication",
        "Upper and lower cabinets",
        "Soft-close hinges and drawer channels",
        "Pantry units",
        "Countertop support framing",
        "Kitchen island fabrication"
      ]
    },
    {
      title: "Wardrobes & Closets",
      points: [
        "Built-in wardrobes",
        "Walk-in closet systems",
        "Sliding door wardrobes",
        "Mirror or glass door wardrobes",
        "Internal accessories: drawers, shelves, hangers"
      ]
    },
    {
      title: "Bathroom Joinery",
      points: [
        "Vanity cabinets",
        "Mirror cabinets",
        "Storage shelves",
        "Waterproof board joinery"
      ]
    },
    {
      title: "Wood Paneling & Cladding",
      points: [
        "Decorative wall panels",
        "MDF, HDF, veneer and laminate paneling",
        "Ceiling wooden cladding",
        "Fluted panels and feature walls"
      ]
    },
    {
      title: "Doors Repair & Rectification",
      points: [
        "Hinges and handles replacement",
        "Door alignment and adjustment",
        "Door repainting or refinishing",
        "Broken frame repair"
      ]
    },
    {
      title: "Interior Fit-out Joinery",
      points: [
        "Reception counters",
        "Bar counters",
        "Partition walls (wood/MDF)",
        "Display units and shelving",
        "Restaurant seating and booths"
      ]
    },
    {
      title: "Outdoor Carpentry Works",
      points: [
        "Pergolas",
        "Gazebo structures",
        "Wooden decking",
        "Outdoor benches and seating",
        "Garden storage units"
      ]
    },
    {
      title: "Finishing & Detail Works",
      points: [
        "Laminate, veneer and lacquer finishing",
        "Edge banding",
        "Polishing and PU coating",
        "Final fitting and alignment",
        "Hardware installation"
      ]
    }
  ],

  image: "/carpenter1.jpeg",
  gallery: ["/carpenter2.jpeg", "/carpenter3.jpeg", "/carpenter4.jpeg"]
}

,
{
  slug: "floor-wall-design",
  name: "Floor & Wall Design",
  category: "service",
  tagline: "Complete Flooring & Wall Design Solutions",

  description:
    "Full flooring and wall design services including tile installation, marble and stone works, wooden and vinyl flooring, epoxy and specialty flooring, decorative wall treatments, premium panels, wallpapers, gypsum features and complete finishing solutions for homes and commercial spaces.",

  highlights: [
    "Full flooring installation: tiles, marble, SPC, epoxy and wood",
    "Marble cladding and polished stone walls",
    "PVC, WPC, fluted and 3D decorative wall panels",
    "3D, fabric and mural wallpaper installation",
    "UV marble sheets and high-gloss wall panels",
    "Epoxy and industrial flooring solutions",
    "Gypsum wall features with LED integration",
    "Waterproofing, grouting and rectification work",
    "Complete finishing for residential and commercial projects"
  ],

  details: [
    {
      title: "Tile Flooring (All Types)",
      points: [
        "Ceramic tiles",
        "Porcelain tiles",
        "Vitrified tiles",
        "Spanish / Italian tiles",
        "Full-body tiles",
        "Subway tiles",
        "Mosaic tiles",
        "Outdoor anti-slip tiles",
        "Large-format slabs"
      ]
    },
    {
      title: "Marble & Natural Stone Flooring",
      points: [
        "Marble installation (Italian, Turkish, Indian, etc.)",
        "Granite flooring",
        "Travertine flooring",
        "Limestone and sandstone",
        "Marble polishing and restoration",
        "Marble inlay design",
        "Stone sealant and protection coating"
      ]
    },
    {
      title: "Wooden & Vinyl Flooring",
      points: [
        "SPC flooring (Stone Polymer Composite)",
        "LVT flooring (Luxury Vinyl Tiles)",
        "Laminate wooden flooring",
        "Engineered wooden flooring",
        "Solid hardwood flooring",
        "Outdoor wooden decking"
      ]
    },
    {
      title: "Industrial & Specialty Flooring",
      points: [
        "Epoxy flooring",
        "PU flooring",
        "Cement screed flooring",
        "Terrazzo flooring",
        "Microtopping (thin concrete finish)",
        "Anti-static flooring",
        "Sports flooring"
      ]
    },
    {
      title: "Wall Tiles & Stone Cladding",
      points: [
        "Marble wall cladding",
        "Granite wall cladding",
        "Slate stone",
        "Decorative stone panels",
        "3D stone cladding",
        "Large-format wall tiles",
        "Mosaic feature walls"
      ]
    },
    {
      title: "Premium Wall Panels",
      points: [
        "PVC wall panels",
        "WPC panels",
        "3D PVC décor panels",
        "Fluted wall panels (wood / MDF / PVC / WPC)",
        "Acoustic wall panels",
        "MDF / wood decorative panels",
        "CNC-cut wall panels"
      ]
    },
    {
      title: "UV Coating & High-Gloss Panels",
      points: [
        "UV marble sheets",
        "UV high-gloss decorative panels",
        "Acrylic high-gloss panels",
        "HPL panels (High Pressure Laminate)",
        "Texture and matte finish sheets"
      ]
    },
    {
      title: "Paint & Finish Coatings",
      points: [
        "Emulsion paint",
        "Texture paint",
        "Marble-effect paint",
        "Metallic and special finishes",
        "Waterproof wall coating",
        "Anti-fungal wall treatment"
      ]
    },
    {
      title: "Wallpaper & Fabric Finish",
      points: [
        "3D wallpaper",
        "Vinyl wallpaper",
        "Fabric wallpaper",
        "Luxury textured wallpaper",
        "Murals and custom printed graphics"
      ]
    },
    {
      title: "Gypsum & Feature Walls",
      points: [
        "Gypsum partitions",
        "Gypsum decorative walls",
        "Niches and recessed panels",
        "TV feature walls",
        "Backlit panels",
        "LED integrated wall designs"
      ]
    },
    {
      title: "Additional Floor & Wall Services",
      points: [
        "Floor leveling and screeding",
        "Subfloor repair",
        "Tile demolition and reinstallation",
        "Skirting installation (tile, marble, wood)",
        "Grouting and re-grouting",
        "Waterproofing for floors and walls",
        "Silicone sealing",
        "Surface polishing and restoration",
        "Crack repairs and filling"
      ]
    }
  ],

  image: "/painting2.jpg",
  gallery: [
    "/painting2.jpg",
    "/painting2.jpg",
    "/painting2.jpg"
  ]
}

,
{
  slug: "glass-partition-aluminum",
  name: "Glass Partition & Aluminium",
  category: "service",
  tagline: "Glass & Aluminium Fabrication & Fit-Out",

  description:
    "Complete glass and aluminium solutions including frameless and framed partitions, glass doors, shower enclosures, aluminium windows and doors, facades, cladding, outdoor structures, decorative mirrors, and full repair and maintenance services for residential, commercial and industrial projects.",

  highlights: [
    "Frameless and framed glass partitions",
    "Aluminium doors, windows and sliding systems",
    "Shower enclosures and bathroom glass works",
    "Curtain wall and façade glazing",
    "ACP and aluminium cladding panels",
    "Kitchen aluminium cabinets and shutters",
    "Pergolas, louvers and outdoor structures",
    "Mirror installation and glass décor",
    "Repair, replacement and maintenance services",
    "Turnkey glass and aluminium fit-out solutions"
  ],

  details: [
    {
      title: "Glass Partitions – Frameless",
      points: [
        "10mm / 12mm tempered glass partitions",
        "Floor-to-ceiling partitions",
        "Office cabin glass walls",
        "Meeting room partitions",
        "Glass door partitions",
        "Glass screen dividers",
        "Frosted or clear glass options",
        "Sound-reduction glass partitions"
      ]
    },
    {
      title: "Glass Partitions – Framed",
      points: [
        "Aluminium-framed glass partitions",
        "Slim profile partitions",
        "Black / white / champagne frames",
        "Double-glazed glass partitions",
        "Office cubicle partitions",
        "Demountable glass partition systems"
      ]
    },
    {
      title: "Glass Partitions – Specialty",
      points: [
        "Acoustic laminated glass partitions",
        "Switchable smart glass (clear-to-frost)",
        "Fire-rated glass partitions",
        "Curved glass partitions",
        "Insulated glass units (IGU)",
        "Safety laminated glass partitions"
      ]
    },
    {
      title: "Decorative Glass",
      points: [
        "Frosted glass (sandblast, sticker, printed)",
        "Tinted glass (bronze, grey, blue, green)",
        "Patterned or textured glass",
        "Custom-designed printed glass"
      ]
    },
    {
      title: "Glass Doors – Frameless",
      points: [
        "Swing glass doors",
        "Pivot glass doors",
        "Patch fitting systems",
        "Floor spring installation"
      ]
    },
    {
      title: "Glass Doors – Sliding",
      points: [
        "Sliding rail systems",
        "Soft-close sliding doors",
        "Top-track sliding glass doors",
        "Telescopic sliding doors"
      ]
    },
    {
      title: "Glass Doors – Specialty",
      points: [
        "Automatic sliding glass doors",
        "Smart-lock glass doors",
        "Security laminated glass doors",
        "Double-glazed glass doors"
      ]
    },
    {
      title: "Shower Glass Systems",
      points: [
        "Shower enclosures (swing / sliding)",
        "Glass shower partitions",
        "Curved shower glass",
        "Frameless shower screens",
        "Handles, hinges and towel bar accessories",
        "Anti-leak waterproof sealing"
      ]
    },
    {
      title: "Aluminium Doors & Windows",
      points: [
        "Sliding windows",
        "Swing and casement windows",
        "Tilt & turn windows",
        "Folding / bi-fold doors",
        "Hinged doors",
        "Sliding doors (2-track, 3-track, 4-track)",
        "Thermal break aluminium systems",
        "Double-glazed aluminium windows"
      ]
    },
    {
      title: "Aluminium Frames & Partitions",
      points: [
        "Office aluminium partitions",
        "Aluminium and glass office rooms",
        "Glass + aluminium cabin systems",
        "Industrial aluminium partitions"
      ]
    },
    {
      title: "Kitchen Aluminium Works",
      points: [
        "Aluminium kitchen cabinets",
        "Aluminium shutter systems",
        "Aluminium + glass upper cabinets",
        "Tall unit / pantry doors",
        "Heat-resistant aluminium cabinets"
      ]
    },
    {
      title: "Outdoor Aluminium Structures",
      points: [
        "Aluminium pergolas",
        "Sunshade structures",
        "Louvers and ventilation panels",
        "Aluminium fence and railing",
        "Gazebo structures",
        "Car parking shade frames"
      ]
    },
    {
      title: "Facades & External Glazing",
      points: [
        "Curtain wall systems",
        "Spider glass systems",
        "Structural glazing façades",
        "Skylights (glass and aluminium)",
        "Roof glazing",
        "Canopy glass installation",
        "Shopfront glazing"
      ]
    },
    {
      title: "Aluminium Cladding & Panels",
      points: [
        "ACP cladding (Aluminium Composite Panel)",
        "Exterior wall cladding",
        "Aluminium louvers",
        "Decorative aluminium panels",
        "Weather-proof architectural cladding"
      ]
    },
    {
      title: "Mirrors & Decorative Glass",
      points: [
        "Custom-cut wall mirrors",
        "Beveled mirrors",
        "LED backlit mirrors",
        "Decorative mirror panels",
        "Gym and dance studio mirrors"
      ]
    },
    {
      title: "Hardware & Accessories",
      points: [
        "Floor springs",
        "Patch fittings",
        "Handles, knobs and locks",
        "Aluminium hinges",
        "Sliding rails and rollers",
        "Door closers",
        "Rubber gaskets and seals",
        "U-channels, clips and brackets"
      ]
    },
    {
      title: "Repair & Maintenance Works",
      points: [
        "Glass replacement (broken or scratched)",
        "Aluminium door and window repair",
        "Sliding door roller replacement",
        "Lock and handle fixing",
        "Frame alignment",
        "Silicone sealing and waterproofing",
        "Faulty hardware replacement",
        "Dismantling and reinstallation"
      ]
    }
  ],

  image: "/glass1.jpeg",
  gallery: ["/glass2.jpeg", "/glass3.jpeg", "/glass4.jpeg"]
}

,
 {
  slug: "handyman",
  name: "Handyman",
  category: "service",
  tagline: "Handyman Repair, Fixing & Installation",

  description:
    "Professional handyman services covering electrical repairs, plumbing fixes, carpentry work, wall mounting, furniture assembly, appliance installation, minor civil and painting tasks, and general repair and maintenance for homes and offices.",

  highlights: [
    "Electrical repair and installation",
    "Plumbing fixes and leakage repair",
    "Carpentry repairs and door fixing",
    "Wall mounting for TVs, shelves and mirrors",
    "Furniture assembly and adjustments",
    "Bathroom and kitchen rectification",
    "Minor civil and painting works",
    "Appliance installation support",
    "General repair and maintenance solutions"
  ],

  details: [
    {
      title: "Electrical Handyman Works",
      points: [
        "Light fixing and replacement (LED, spotlights, chandeliers)",
        "Switch and socket repair or replacement",
        "DB tripping issue fixing",
        "Fan installation (ceiling, wall, exhaust fans)",
        "Power outlet installation",
        "Doorbell repair or installation",
        "Electrical troubleshooting",
        "Circuit repair",
        "Appliance connection (washer, dryer, dishwasher)"
      ]
    },
    {
      title: "Plumbing Handyman Works",
      points: [
        "Water leakage repair",
        "Mixer, tap and faucet replacement",
        "Blocked drain clearing",
        "WC repair and flushing mechanism fixing",
        "Bidet spray installation",
        "Basin, sink and trap repair",
        "Water heater installation",
        "Pipe repair and sealing",
        "Shower set installation",
        "Washing machine water connection"
      ]
    },
    {
      title: "Carpentry Handyman Works",
      points: [
        "Door hinge replacement",
        "Door alignment and lock fixing",
        "Cabinet door repair",
        "Drawer channel replacement",
        "Shelves installation",
        "Curtain rod and blinds installation",
        "Wall-mounted units installation",
        "Minor wood repair works",
        "Door handle installation"
      ]
    },
    {
      title: "Civil & Masonry Handyman Works",
      points: [
        "Tile replacement",
        "Grouting and re-grouting",
        "Tile crack repair",
        "Wall crack filling",
        "Small masonry repair",
        "Minor floor leveling",
        "Silicone sealing for wet areas"
      ]
    },
    {
      title: "Painting Handyman Works",
      points: [
        "Wall touch-up painting",
        "Door and frame repainting",
        "Patch repair painting",
        "Ceiling stain cover and repair",
        "Outdoor touch-up painting"
      ]
    },
    {
      title: "Wall Fixing & Installations",
      points: [
        "TV bracket installation",
        "Shelf and rack installation",
        "Curtain rods, blinds and rails fitting",
        "Mirror installation",
        "Wall frames and art installation",
        "Whiteboard or notice board installation",
        "Indoor and outdoor signage installation"
      ]
    },
    {
      title: "Furniture Assembly",
      points: [
        "Flat-pack furniture assembly (IKEA, Home Box, etc.)",
        "Bed, wardrobe and sofa assembly",
        "Table, chair and cabinet assembly",
        "Furniture adjustment and tightening"
      ]
    },
    {
      title: "Door & Window Fixing",
      points: [
        "Door lock repair and replacement",
        "Door stopper installation",
        "Sliding door roller replacement",
        "Window handle fixing",
        "Weather seal installation",
        "Door frame repair"
      ]
    },
    {
      title: "Appliance Installation Support",
      points: [
        "Dishwasher connection",
        "Washing machine installation",
        "Dryer wall-mounting",
        "Microwave shelf installation",
        "Basic hood and hob installation",
        "Fridge water line connection"
      ]
    },
    {
      title: "Bathroom & Kitchen Small Works",
      points: [
        "Shower hose and mixer replacement",
        "Towel rail installation",
        "Soap holders, shelves and accessories fitting",
        "Kitchen sink leakage fixing",
        "Drain cleaning",
        "Cabinet handle replacements"
      ]
    },
    {
      title: "Outdoor Handyman Works",
      points: [
        "Garden tap fixing",
        "Outdoor light installation",
        "Gate lock repair",
        "Outdoor furniture assembly",
        "Balcony mesh fixing"
      ]
    },
    {
      title: "General Fixing & Repair",
      points: [
        "Minor cracks and gap sealing",
        "Loose items tightening",
        "Broken fixture replacement",
        "Silicone sealing for bathrooms and kitchens",
        "Handyman inspection and safety check"
      ]
    }
  ],

  image: "/handyman1.jpeg",
  gallery: ["/handyman2.jpeg", "/handyman3.jpeg", "/handyman4.jpeg"]
}
,
  {
  slug: "office-setup-ceiling-works",
  name: "Office Setup & Ceiling Works",
  category: "service",
  tagline: "Office Fit-Out & Ceiling Systems",

  description:
    "Complete office setup including space planning, partitions, workstations, electrical and networking installation, HVAC and ventilation setup, flooring and wall finishes, fire and safety systems, and all types of ceiling works including gypsum, grid, wooden and feature ceilings.",

  highlights: [
    "Office fit-out and interior setup",
    "Workstation and furniture installation",
    "Glass, gypsum and aluminum partitions",
    "Electrical, networking and CCTV setup",
    "HVAC and ventilation upgrades",
    "Flooring and wall finishes",
    "Gypsum, grid and feature ceilings",
    "Fire and safety system coordination",
    "Turnkey office renovation and upgradation"
  ],

  details: [
    {
      title: "Space Planning & Layout",
      points: [
        "Office layout design",
        "Workstation planning",
        "Meeting and conference room layouts",
        "Manager / MD cabin planning",
        "Reception area concept design",
        "Pantry layout and optimization",
        "Storage and filing area planning",
        "Open workspace design",
        "Ergonomic space planning"
      ]
    },
    {
      title: "Partitions & Room Creation",
      points: [
        "Glass partitions (clear, frosted, acoustic)",
        "Gypsum partitions",
        "Aluminum office partitions",
        "Full-height and half-height partitions",
        "Acoustic partitions for meeting rooms",
        "Conference room enclosures",
        "Reception partitioning"
      ]
    },
    {
      title: "Workstation & Furniture Setup",
      points: [
        "Modular workstation installation",
        "Office desks, chairs and tables setup",
        "Meeting table installation",
        "Storage cabinets and filing system installation",
        "Custom carpentry counters, cabinets and shelves",
        "Reception desk fabrication",
        "Pantry cabinets and counter installation"
      ]
    },
    {
      title: "Electrical & Networking Setup",
      points: [
        "Office electrical wiring",
        "DB upgrading and load management",
        "Power outlets for each workstation",
        "Lighting installation",
        "Emergency lighting setup",
        "IT networking (Cat6 / Cat7)",
        "Server rack installation",
        "CCTV wiring and installation",
        "Access control systems"
      ]
    },
    {
      title: "HVAC & Ventilation Setup",
      points: [
        "AC ducting modification",
        "AC unit installation and relocation",
        "Air balancing for office spaces",
        "Fresh air ventilation system",
        "Exhaust system installation",
        "Server room cooling setup"
      ]
    },
    {
      title: "Office Flooring Works",
      points: [
        "Carpet tile installation",
        "Vinyl flooring",
        "SPC flooring",
        "Tile flooring",
        "Raised flooring systems"
      ]
    },
    {
      title: "Office Wall Finishes",
      points: [
        "Interior office painting",
        "Corporate theme painting",
        "Wallpaper installation",
        "Acoustic wall panels",
        "Wood, PVC and WPC wall panels",
        "Branding and graphic wall installation"
      ]
    },
    {
      title: "Fire & Safety Installation",
      points: [
        "Smoke detector installation",
        "Fire alarm wiring and setup",
        "Emergency exit lights",
        "Fire extinguisher placement",
        "Sprinkler alignment and ceiling coordination"
      ]
    },
    {
      title: "Fit-Out Completion & Handover",
      points: [
        "Final cleaning",
        "Snag rectification",
        "Punch list closing",
        "Handover documentation"
      ]
    },
    // ---------------- CEILING WORKS -------------------
    {
      title: "Gypsum Ceiling Works",
      points: [
        "Gypsum false ceiling installation",
        "Drop ceiling designs",
        "Bulkhead ceilings",
        "Cove lighting ceilings",
        "Decorative gypsum designs",
        "Moisture-resistant gypsum ceilings",
        "Soundproof gypsum ceiling systems"
      ]
    },
    {
      title: "Grid Ceiling Systems",
      points: [
        "Acoustic ceiling tile installation",
        "60x60 grid system",
        "Mineral fiber ceiling boards",
        "Metal ceiling tiles",
        "Fire-rated ceiling tiles",
        "Replacement of damaged tiles"
      ]
    },
    {
      title: "Wooden & PVC Ceilings",
      points: [
        "PVC panel ceilings",
        "Wooden slat ceilings",
        "WPC ceilings",
        "Decorative wooden ceilings",
        "Office feature ceiling panels"
      ]
    },
    {
      title: "LED & Lighting Coordination",
      points: [
        "Cove lighting installation",
        "LED strip fixing",
        "Panel light installation",
        "Spotlights and track lights",
        "Linear ceiling lights",
        "Emergency lighting setup"
      ]
    },
    {
      title: "MEP Ceiling Coordination",
      points: [
        "AC duct coordination",
        "Diffuser and grille installation",
        "Sprinkler alignment",
        "Smoke detector installation",
        "Speaker system mounting",
        "Cable tray and trunking coordination"
      ]
    },
    {
      title: "Ceiling Repair & Maintenance",
      points: [
        "Sagging ceiling repair",
        "Ceiling crack rectification",
        "Leakage damage repair",
        "Ceiling tile replacement",
        "Paint touch-up & finishing"
      ]
    }
  ],

  image: "/office1.jpeg",
  gallery: ["/office2.jpeg", "/office3.jpeg", "/office4.jpeg"]
}
,
 {
  slug: "hvac-installation",
  name: "HVAC Installation",
  category: "service",
  tagline: "HVAC Design & Installation",

  description:
    "Complete HVAC installation including site survey, heat load calculation, ducting, refrigerant piping, electrical setup, ventilation systems, and final testing for residential, commercial, and industrial projects.",

  highlights: [
    "Split, ducted, VRF/VRV and central AC installation",
    "Complete ducting and insulation works",
    "Electrical connection and thermostat setup",
    "Fresh air and exhaust system installation",
    "Refrigerant piping, gas charging and leak testing",
    "Testing, balancing and commissioning",
    "HVAC installation for homes, offices and commercial projects",
    "Full HVAC system replacement and upgrades"
  ],

  details: [
    {
      title: "HVAC System Types We Install",
      points: [
        "Split AC (wall-mounted)",
        "Ducted split units",
        "Central AC systems",
        "Package units",
        "VRF / VRV systems",
        "Chiller AC systems",
        "Cassette AC units",
        "Floor-standing units",
        "Ceiling concealed units",
        "Exhaust fan systems",
        "Fresh air units (FAHU)",
        "Air Handling Units (AHU)"
      ]
    },
    {
      title: "Pre-Installation Work",
      points: [
        "Site survey and load calculation",
        "Heat load analysis (BTU calculation)",
        "Duct design and sizing",
        "Piping and drainage route planning",
        "Electrical load assessment",
        "Location marking for indoor and outdoor units"
      ]
    },
    {
      title: "Indoor Unit Installation",
      points: [
        "Mounting indoor unit (wall, ceiling, ducted)",
        "Insulated copper piping installation",
        "Drainage pipe installation",
        "Installation of control wires",
        "Indoor unit air balancing",
        "Indoor unit testing and commissioning"
      ]
    },
    {
      title: "Outdoor Unit Installation",
      points: [
        "Outdoor unit base creation (stand, brackets, concrete base)",
        "Installation of condenser units",
        "Refrigerant piping connection",
        "Weatherproof electrical connections",
        "Vibration control installation",
        "Gas charging and pressure test"
      ]
    },
    {
      title: "Ducting Works",
      points: [
        "GI duct fabrication and installation",
        "Flexible duct installation",
        "Thermal and acoustic duct insulation",
        "Installation of volume control dampers",
        "Fire dampers (as required)",
        "Installation of diffusers, grilles and registers"
      ]
    },
    {
      title: "Refrigerant Piping Works",
      points: [
        "Copper pipe installation with insulation",
        "Flare connections and brazing",
        "Refrigerant gas charging",
        "Vacuuming and leak testing",
        "Pressure testing for system safety"
      ]
    },
    {
      title: "Electrical Connection Works",
      points: [
        "Indoor and outdoor unit power connection",
        "DB load management",
        "AC isolator installation",
        "Smart thermostat or controller setup",
        "Control cabling (low-voltage)",
        "Cable tray and conduit installation"
      ]
    },
    {
      title: "Controls & Thermostat Installation",
      points: [
        "Digital thermostat installation",
        "Smart AC controller setup",
        "Multi-zone control installation",
        "Thermostat communication testing",
        "Temperature calibration"
      ]
    },
    {
      title: "Ventilation System Installation",
      points: [
        "Exhaust system installation",
        "Fresh air duct installation",
        "FAHU (Fresh Air Handling Unit) setup",
        "Kitchen and toilet exhaust installation",
        "Smoke extraction fans (commercial)"
      ]
    },
    {
      title: "Final Testing & Commissioning",
      points: [
        "Cooling performance test",
        "Airflow tuning and balancing",
        "Thermostat functionality test",
        "Refrigerant pressure test",
        "Noise and vibration check",
        "Complete system startup and verification",
        "Client handover documentation"
      ]
    },
    {
      title: "Types of Projects We Handle",
      points: [
        "Homes (flats, apartments)",
        "Villas and townhouses",
        "Offices and commercial spaces",
        "Restaurants and cafés",
        "Retail shops",
        "Warehouses",
        "Buildings and towers",
        "Industrial sites",
        "Server rooms and IT rooms",
        "Clinics and healthcare facilities"
      ]
    },
    {
      title: "Additional HVAC Installation Services",
      points: [
        "AC relocation and reinstallation",
        "Complete HVAC system replacement",
        "Upgrading old AC systems",
        "Duct modification and extension",
        "Outdoor unit shifting",
        "Adding new AC points",
        "Server room cooling setup",
        "Fresh air and exhaust integration",
        "Thermostat upgrading"
      ]
    },
    {
      title: "Our HVAC Installation Services",
      points: [
        "Split AC installation",
        "Ducted split installation",
        "Central AC and package units",
        "VRF / VRV system installation",
        "Fresh air and exhaust system setup",
        "GI ducting and insulation works",
        "Electrical and thermostat installation",
        "Full testing and commissioning",
        "Complete HVAC project execution"
      ]
    }
  ],

  image: "/HVAC-Installation1.jpeg",
  gallery: [
    "/HVAC-Installation2.jpeg",
    "/HVAC-Installation3.jpeg",
    "/HVAC-Installation4.jpeg"
  ]
}
,
  {
  slug: "hvac-installation",
  name: "HVAC Installation",
  category: "service",
  tagline: "HVAC Design & Installation",

  description:
    "Complete HVAC installation including site survey, heat load calculation, ducting, refrigerant piping, electrical setup, ventilation systems, and final testing for residential, commercial, and industrial projects.",

  highlights: [
    "Split, ducted, VRF/VRV and central AC installation",
    "Complete ducting and insulation works",
    "Electrical connection and thermostat setup",
    "Fresh air and exhaust system installation",
    "Refrigerant piping, gas charging and leak testing",
    "Testing, balancing and commissioning",
    "HVAC installation for homes, offices and commercial projects",
    "Full HVAC system replacement and upgrades"
  ],

  details: [
    {
      title: "HVAC System Types We Install",
      points: [
        "Split AC (wall-mounted)",
        "Ducted split units",
        "Central AC systems",
        "Package units",
        "VRF / VRV systems",
        "Chiller AC systems",
        "Cassette AC units",
        "Floor-standing units",
        "Ceiling concealed units",
        "Exhaust fan systems",
        "Fresh air units (FAHU)",
        "Air Handling Units (AHU)"
      ]
    },
    {
      title: "Pre-Installation Work",
      points: [
        "Site survey and load calculation",
        "Heat load analysis (BTU calculation)",
        "Duct design and sizing",
        "Piping and drainage route planning",
        "Electrical load assessment",
        "Location marking for indoor and outdoor units"
      ]
    },
    {
      title: "Indoor Unit Installation",
      points: [
        "Mounting indoor unit (wall, ceiling, ducted)",
        "Insulated copper piping installation",
        "Drainage pipe installation",
        "Installation of control wires",
        "Indoor unit air balancing",
        "Indoor unit testing and commissioning"
      ]
    },
    {
      title: "Outdoor Unit Installation",
      points: [
        "Outdoor unit base creation (stand, brackets, concrete base)",
        "Installation of condenser units",
        "Refrigerant piping connection",
        "Weatherproof electrical connections",
        "Vibration control installation",
        "Gas charging and pressure test"
      ]
    },
    {
      title: "Ducting Works",
      points: [
        "GI duct fabrication and installation",
        "Flexible duct installation",
        "Thermal and acoustic duct insulation",
        "Installation of volume control dampers",
        "Fire dampers (as required)",
        "Installation of diffusers, grilles and registers"
      ]
    },
    {
      title: "Refrigerant Piping Works",
      points: [
        "Copper pipe installation with insulation",
        "Flare connections and brazing",
        "Refrigerant gas charging",
        "Vacuuming and leak testing",
        "Pressure testing for system safety"
      ]
    },
    {
      title: "Electrical Connection Works",
      points: [
        "Indoor and outdoor unit power connection",
        "DB load management",
        "AC isolator installation",
        "Smart thermostat or controller setup",
        "Control cabling (low-voltage)",
        "Cable tray and conduit installation"
      ]
    },
    {
      title: "Controls & Thermostat Installation",
      points: [
        "Digital thermostat installation",
        "Smart AC controller setup",
        "Multi-zone control installation",
        "Thermostat communication testing",
        "Temperature calibration"
      ]
    },
    {
      title: "Ventilation System Installation",
      points: [
        "Exhaust system installation",
        "Fresh air duct installation",
        "FAHU (Fresh Air Handling Unit) setup",
        "Kitchen and toilet exhaust installation",
        "Smoke extraction fans (commercial)"
      ]
    },
    {
      title: "Final Testing & Commissioning",
      points: [
        "Cooling performance test",
        "Airflow tuning and balancing",
        "Thermostat functionality test",
        "Refrigerant pressure test",
        "Noise and vibration check",
        "Complete system startup and verification",
        "Client handover documentation"
      ]
    },
    {
      title: "Types of Projects We Handle",
      points: [
        "Homes (flats, apartments)",
        "Villas and townhouses",
        "Offices and commercial spaces",
        "Restaurants and cafés",
        "Retail shops",
        "Warehouses",
        "Buildings and towers",
        "Industrial sites",
        "Server rooms and IT rooms",
        "Clinics and healthcare facilities"
      ]
    },
    {
      title: "Additional HVAC Installation Services",
      points: [
        "AC relocation and reinstallation",
        "Complete HVAC system replacement",
        "Upgrading old AC systems",
        "Duct modification and extension",
        "Outdoor unit shifting",
        "Adding new AC points",
        "Server room cooling setup",
        "Fresh air and exhaust integration",
        "Thermostat upgrading"
      ]
    },
    {
      title: "Our HVAC Installation Services",
      points: [
        "Split AC installation",
        "Ducted split installation",
        "Central AC and package units",
        "VRF / VRV system installation",
        "Fresh air and exhaust system setup",
        "GI ducting and insulation works",
        "Electrical and thermostat installation",
        "Full testing and commissioning",
        "Complete HVAC project execution"
      ]
    }
  ],

  image: "/HVAC-Installation1.jpeg",
  gallery: [
    "/HVAC-Installation2.jpeg",
    "/HVAC-Installation3.jpeg",
    "/HVAC-Installation4.jpeg"
  ]
}
,
  {
  slug: "plumbing-services",
  name: "Plumbing Services",
  category: "service",
  tagline: "Residential & Commercial Plumbing",

  description:
    "Complete plumbing solutions including leak repairs, sanitary installation, drainage and sewer works, hot and cold water systems, pump and tank services, kitchen and bathroom plumbing, commercial plumbing, outdoor water systems, leak detection and full project plumbing for villas, apartments and buildings.",

  highlights: [
    "Water leakage repair and pipe replacement",
    "Bathroom and kitchen plumbing works",
    "Installation of all sanitary fixtures",
    "Hot and cold water pipeline setup",
    "Drainage and sewer line services",
    "Pump, tank and water heater installation",
    "Commercial and restaurant plumbing",
    "Emergency plumbing repairs and AMC maintenance"
  ],

  details: [
    {
      title: "General Plumbing Services",
      points: [
        "Water leakage repair",
        "Pipe repair and replacement",
        "Faucet, mixer and tap installation",
        "Shower set installation",
        "Bidet spray installation",
        "Basin, sink and trap replacement",
        "Blocked drain clearing",
        "Water pressure issues fixing",
        "Toilet and flushing mechanism repair",
        "P-trap and bottle trap fixing",
        "Floor drain repair and replacement"
      ]
    },
    {
      title: "Sanitary Installation Works",
      points: [
        "Installation of new WC (toilet)",
        "Washbasin installation",
        "Bathtub installation",
        "Shower enclosure connections",
        "Kitchen sink installation",
        "Water closet replacement",
        "Tank and bowl fitting",
        "Urinal installation (commercial)",
        "Bathroom accessories installation"
      ]
    },
    {
      title: "Hot & Cold Water Systems",
      points: [
        "Complete hot and cold piping (PPR, PEX, copper)",
        "Water pipeline modification",
        "Extension of water lines",
        "Water heater installation (instant, storage)",
        "Solar water heater connections",
        "Pump connection to hot/cold line",
        "Balancing water pressure"
      ]
    },
    {
      title: "Drainage & Sewer Works",
      points: [
        "Drainage pipe installation (UPVC, PVC)",
        "Vertical stack pipe installation",
        "Manhole construction and repair",
        "Sewer line blockage clearing",
        "CCTV drain inspection (if available)",
        "Slope correction for drainage",
        "Grease trap installation (restaurants)",
        "Drain pipe re-routing"
      ]
    },
    {
      title: "Pump & Water Systems",
      points: [
        "Water pump installation and replacement",
        "Pressure pump setup",
        "Booster pump installation",
        "Pump repair and servicing",
        "Water tank cleaning and maintenance",
        "Water tank installation (plastic, GRP)",
        "Float valve installation and repair"
      ]
    },
    {
      title: "Kitchen & Laundry Plumbing",
      points: [
        "Dishwasher installation",
        "Washing machine water inlet/outlet setup",
        "Drainage point creation",
        "Kitchen hood drain connection",
        "Sink mixer installation",
        "Grease trap setup for commercial kitchens"
      ]
    },
    {
      title: "Bathroom Plumbing Works",
      points: [
        "Complete bathroom plumbing renovation",
        "Shower mixer setup",
        "Handheld and overhead shower installation",
        "Concealed mixer repair and replacement",
        "Toilet blockage removal",
        "Bathtub drain system fixing",
        "Shower drainage rework",
        "Jet spray installation"
      ]
    },
    {
      title: "Commercial Plumbing Works",
      points: [
        "Restaurant kitchen plumbing",
        "Cold and hot water riser installation",
        "Commercial water heaters",
        "Grease trap installation",
        "Multi-floor plumbing distribution",
        "Hotel and office plumbing setup",
        "Water supply for washrooms",
        "Drainage systems for commercial setups"
      ]
    },
    {
      title: "Outdoor Plumbing Services",
      points: [
        "Garden taps installation",
        "Outdoor shower plumbing",
        "Irrigation water line setup",
        "Swimming pool piping support",
        "External drainage network"
      ]
    },
    {
      title: "Leak Detection & Repair",
      points: [
        "Water leakage tracing",
        "Wall leak inspection",
        "Thermal and pressure testing",
        "Pipe repair without major demolition",
        "Underground pipe leakage repair"
      ]
    },
    {
      title: "Complete Project Plumbing",
      points: [
        "Full hot and cold water distribution",
        "Drainage system installation",
        "Water supply riser lines",
        "Water pump and tank systems",
        "Plumbing fixtures installation",
        "MEP coordination and project management",
        "Testing and commissioning",
        "Snag repair and final handover"
      ]
    },
    {
      title: "Plumbing Maintenance Services",
      points: [
        "Routine plumbing checkup",
        "Annual maintenance contract (AMC)",
        "Pump maintenance",
        "Water heater servicing",
        "Drain cleaning and flushing",
        "Preventive maintenance"
      ]
    }
  ],

  image: "/plumber1.jpeg",
  gallery: ["/plumber2.jpeg", "/plumber3.jpeg", "/plumber4.jpeg"]
}
,
 {
  slug: "office-building-wall-painting",
  name: "Office & Building Wall Painting",
  category: "service",
  tagline: "Office & Building Painting Works",

  description:
    "Professional interior and exterior painting for offices, buildings and commercial spaces including full surface preparation, wall repair, ceiling and door repainting, façade coating, parking markings, decorative finishes and protective coatings with fast, clean and professional execution.",

  highlights: [
    "Complete office interior painting",
    "Building exterior painting and weatherproof coatings",
    "Corporate theme and branding color painting",
    "Wall repair, patching and surface preparation",
    "Doors, frames and ceiling repainting",
    "Staircase, lobby and common area painting",
    "Parking and basement marking works",
    "Full building painting renovation and makeover"
  ],

  details: [
    {
      title: "Office Painting Works – Interior",
      points: [
        "Full office interior painting",
        "Corporate color theme painting",
        "Reception area feature walls",
        "Meeting room and conference room painting",
        "Workspace and cabin painting",
        "Pantry and washroom painting",
        "Touch-up painting for small areas",
        "Furniture repaint (wood/metal)"
      ]
    },
    {
      title: "Surface Preparation",
      points: [
        "Scraping and removal of old paint",
        "Minor crack filling",
        "Dents and hole patch repairs",
        "Putty application for smooth finish",
        "Sanding and surface leveling",
        "Primer coating where required"
      ]
    },
    {
      title: "Office Specialized Paints",
      points: [
        "Low-VOC office-safe paints",
        "Anti-bacterial paint for clinics",
        "Stain-resistant wall paint",
        "Washable matte/silk finish paints",
        "Acoustic panel painting (if needed)"
      ]
    },
    {
      title: "Decorative & Feature Walls",
      points: [
        "Textured wall finishes",
        "Accent wall design",
        "Wallpaper installation (optional)",
        "Branding color implementation",
        "Corporate gradient or pattern painting"
      ]
    },
    {
      title: "Door, Frame & Ceiling Painting",
      points: [
        "Door painting (wood/metal)",
        "Skirting and frame painting",
        "Gypsum ceiling paint refresh",
        "Grid ceiling tile replacement and painting"
      ]
    },
    {
      title: "Building Exterior Painting",
      points: [
        "Full façade painting",
        "Weatherproof paint application",
        "Crack filling and exterior repair",
        "Anti-fungal and anti-algae coatings",
        "Roof parapet wall painting",
        "Balcony and railing painting",
        "Boundary wall painting"
      ]
    },
    {
      title: "Staircase & Common Area Painting",
      points: [
        "Internal building corridors",
        "Staircase walls and ceilings",
        "Parking area marking and painting",
        "Lobby area painting",
        "Store room and utility room painting"
      ]
    },
    {
      title: "Parking & Basement Painting",
      points: [
        "Wall protection paint",
        "Floor marking and road line painting",
        "Pillar numbering and color coding",
        "Safety marking painting"
      ]
    },
    {
      title: "Surface Preparation & Repair Works",
      points: [
        "Crack filling and sealing",
        "Dampness treatment",
        "Water leakage solution before paint",
        "Wall sanding and smoothing",
        "Primer coating",
        "Putty finishing",
        "Paint removal (chemical/mechanical)"
      ]
    },
    {
      title: "Types of Paints We Use",
      points: [
        "Emulsion paint (matte/silk)",
        "Weather shield exterior paint",
        "Acrylic paint",
        "Anti-bacterial paint",
        "Anti-fungal paint",
        "Epoxy paint for basements/parking",
        "Fire-resistant paint",
        "Metal enamel paint",
        "Wood polish and varnish"
      ]
    },
    {
      title: "Painting Services for Different Properties",
      points: [
        "Corporate offices",
        "Commercial buildings",
        "Residential buildings",
        "Warehouses and industrial premises",
        "Retail shops",
        "Clinics and healthcare facilities",
        "Restaurants and cafés",
        "Schools and institutions",
        "Villas and apartments"
      ]
    },
    {
      title: "Additional Painting Services",
      points: [
        "Wallpaper installation and removal",
        "Texture wall creation",
        "Epoxy floor coating",
        "Protective coatings",
        "Graffiti removal",
        "Signage wall painting",
        "Ceiling repainting"
      ]
    }
  ],

  image: "/pain1ting-service.jpeg",
  gallery: [
    "/pain1ting-service.jpeg",
    "/pain1ting-service.jpeg",
    "/pain1ting-service.jpeg"
  ]
}
,
  {
  slug: "floor-walk-tiling-works",
  name: "Floor & Walk Tiling Works",
  category: "service",
  tagline: "Floor, Walkway & Stair Tiling",

  description:
    "Complete indoor and outdoor tiling solutions including floor tiles, walkway tiles, staircase tiling, decorative patterns, bathroom and kitchen tiling, tile repair and replacement, re-grouting, waterproofing, leveling and commercial-grade finishes for long-lasting performance.",

  highlights: [
    "Indoor and outdoor tiling for homes, offices and retail",
    "Walkway, pathway, staircase and anti-slip tiling",
    "Tile repair, replacement and re-grouting",
    "Bathroom and kitchen tiling with waterproofing",
    "Decorative, patterned and large-format tiles",
    "Subfloor leveling and screeding",
    "Commercial and industrial floor tiling",
    "Complete floor and walkway tiling solutions"
  ],

  details: [
    {
      title: "Complete Floor Tiling Works – Indoor",
      points: [
        "Living room floor tiles",
        "Bedroom floor tiles",
        "Kitchen floor tiling",
        "Bathroom floor tiling",
        "Hallway and corridor tiling",
        "Apartment and villa flooring",
        "Office floor tiling",
        "Retail and showroom tiling"
      ]
    },
    {
      title: "Complete Floor Tiling Works – Outdoor",
      points: [
        "Porch tiles",
        "Balcony and terrace flooring",
        "Patio tile installation",
        "Garden walkway tiles",
        "Outdoor stone tiles",
        "Anti-slip outdoor tiles"
      ]
    },
    {
      title: "Commercial & Heavy-Duty Tiling",
      points: [
        "Restaurant floor tiles",
        "Mall and retail tiling",
        "Warehouse floor tiles",
        "Parking tiles (interlock-type tiles)",
        "Industrial grade tiles",
        "Heavy traffic area finishing"
      ]
    },
    {
      title: "Walk Tiling / Pathway Works",
      points: [
        "Garden walkway tiles",
        "Villa entrance walkway",
        "Footpath tiling",
        "Outdoor corridor tiles",
        "Anti-slip pathway tiles",
        "Decorative patterned walkway tiles"
      ]
    },
    {
      title: "Staircase & Steps Tiling",
      points: [
        "Indoor staircase tiling",
        "Outdoor stair tiles (anti-slip)",
        "Edge protection and nosing installation",
        "Granite and marble staircase tiling"
      ]
    },
    {
      title: "Tile Types We Install",
      points: [
        "Ceramic tiles",
        "Porcelain tiles",
        "Full-body porcelain",
        "Vitrified tiles",
        "Marble tiles (natural and engineered)",
        "Granite tiles",
        "Travertine and natural stone",
        "Mosaic tiles",
        "Subway tiles",
        "Anti-slip tiles for outdoor and wet areas",
        "Large-format tiles (60x60, 80x80, 120x60)",
        "Wooden-look tiles",
        "Terrazzo tiles",
        "Decorative and patterned tiles"
      ]
    },
    {
      title: "Tile Fixing Process & Workflow",
      points: [
        "Checking floor level",
        "Existing tile removal",
        "Subfloor cleaning and grinding",
        "Waterproofing for bathrooms and balconies",
        "Screeding and leveling compound",
        "Tile cutting and shaping",
        "Tile alignment and leveling",
        "Anti-slip tile placement",
        "Adhesive fixing using approved materials",
        "High-quality grouting (regular, epoxy, stain-free)",
        "Expansion joint filling",
        "Silicone application",
        "Surface cleaning and polishing"
      ]
    },
    {
      title: "Tile Repair & Maintenance",
      points: [
        "Replacing broken or cracked tiles",
        "Re-grouting old floors",
        "Fixing hollow tiles",
        "Slope correction for bathrooms and balconies",
        "Tile polishing (marble and granite)",
        "Tile lifting and reinstallation",
        "Surface cleaning and stain removal"
      ]
    },
    {
      title: "Speciality Tile Works",
      points: [
        "Feature wall tiling",
        "Kitchen backsplash tiling",
        "Bathroom wall tiling",
        "Skirting tile installation",
        "Marble border and inlay work",
        "Shower area waterproofing and tiling",
        "Poolside non-slip tiling"
      ]
    },
    {
      title: "Types of Projects We Handle",
      points: [
        "Apartments",
        "Villas",
        "Buildings",
        "Offices",
        "Restaurants and cafés",
        "Retail shops",
        "Industrial properties",
        "Outdoor landscapes",
        "Walkways and corridors",
        "Parking and external tiling"
      ]
    }
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
  slug: "wallpaper-fixing-work",
  name: "Wallpaper Fixing Work",
  category: "service",
  tagline: "Wallpaper Installation & Replacement",

  description:
    "Professional wallpaper installation, removal and replacement services including premium wallpaper materials, wall preparation, decorative designs, murals, commercial wallpapering, ceiling wallpapering, repairs and finishing for homes, offices and commercial spaces.",

  highlights: [
    "Professional wallpaper installation",
    "3D, 5D and digital mural application",
    "Wallpaper removal and replacement",
    "Wall preparation and surface repair",
    "Commercial and residential wallpapering",
    "Feature wall and accent wallpaper designs",
    "Ceiling wallpaper installation",
    "Premium and luxury wallpaper works"
  ],

  details: [
    {
      title: "Wallpaper Installation – Standard",
      points: [
        "Living room wallpaper application",
        "Bedroom wallpaper installation",
        "Office and commercial wallpaper",
        "Corridor and hallway wallpaper",
        "Feature wall wallpaper",
        "Reception area wallpaper",
        "Kids room decorative prints"
      ]
    },
    {
      title: "Premium & Specialty Wallpapers",
      points: [
        "3D wallpaper installation",
        "5D mural wallpaper",
        "Custom printed wallpapers",
        "Textured wallpaper",
        "Fabric wallpaper",
        "Vinyl wallpaper (washable and durable)",
        "Acoustic wallpaper",
        "Luxury silk wallpapers",
        "Leather-look and textile wallpapers"
      ]
    },
    {
      title: "Commercial & Large-Surface Wallpaper",
      points: [
        "Restaurants and cafés",
        "Hotels and resorts",
        "Retail shops and malls",
        "Office partitions and meeting rooms",
        "Building lobby areas",
        "Showrooms and display areas"
      ]
    },
    {
      title: "Wallpaper Fixing Process – Surface Preparation",
      points: [
        "Checking moisture and dampness issues",
        "Wall sanding and smoothing",
        "Filling cracks, holes and imperfections",
        "Primer or sealer application",
        "Leveling uneven areas",
        "Removing dust and surface cleaning"
      ]
    },
    {
      title: "Wallpaper Installation Process",
      points: [
        "Accurate measurement and cutting",
        "Perfect alignment and pattern matching",
        "Seamless joint finishing",
        "Bubble-free installation",
        "Corner finishing and trimming",
        "Custom design alignment"
      ]
    },
    {
      title: "After Installation Finishing",
      points: [
        "Edge sealing",
        "Surface cleaning",
        "Final touch-ups",
        "Inspection and handover"
      ]
    },
    {
      title: "Wallpaper Removal & Replacement",
      points: [
        "Old wallpaper removal",
        "Glue and adhesive removal",
        "Wall repair after removal",
        "Repainting or refinishing (optional)",
        "Installation of new wallpaper"
      ]
    },
    {
      title: "Types of Wallpaper Materials",
      points: [
        "Non-woven wallpapers",
        "PVC vinyl wallpapers",
        "Fabric-backed wallpapers",
        "Peel-and-stick wallpapers",
        "Solid sheet wallpapers",
        "Foil and metallic wallpapers",
        "Grasscloth and natural fiber wallpapers",
        "Murals and customised digital prints"
      ]
    },
    {
      title: "Specialized Wallpaper Works",
      points: [
        "Ceiling wallpaper installation",
        "Decorative panel wallpapering",
        "Staircase wall wallpaper",
        "Feature wall murals",
        "Custom theme wallpaper for kids",
        "Luxury hotel-style finishing"
      ]
    },
    {
      title: "Wall Repair Before Wallpapering",
      points: [
        "Crack filling",
        "Hole patching",
        "Dampness repair",
        "Primer base application",
        "Surface smoothing",
        "Old paint removal"
      ]
    },
    {
      title: "Types of Projects We Handle",
      points: [
        "Apartments and villas",
        "Offices and commercial spaces",
        "Restaurants and cafés",
        "Retail shops and showrooms",
        "Hotels and hospitality",
        "Schools and nurseries",
        "Clinics and medical centers",
        "Building common areas"
      ]
    }
  ],

  image: "/wallpaper1.jpeg",
  gallery: [
    "/wallpaper2.jpeg",
    "/wallpaper3.jpeg",
    "/wallpaper4.jpeg"
  ]
}
,
  {
  slug: "cctv-installation",
  name: "CCTV Cameras Installation",
  category: "service",
  tagline: "Professional CCTV Installation & Surveillance Systems",

  description:
    "Complete CCTV camera installation service including indoor and outdoor cameras, IP and analog systems, wiring, NVR/DVR setup, network configuration, remote access setup, testing, commissioning and full security surveillance solutions for homes and commercial spaces.",

  highlights: [
    "Professional CCTV camera installation",
    "Indoor, outdoor, IP, analog cameras",
    "Complete wiring and cabling setup",
    "NVR/DVR installation and configuration",
    "Mobile app live view setup",
    "AI smart surveillance camera options",
    "Full testing and commissioning",
    "Annual maintenance and support"
  ],

  details: [
    {
      title: "Types of CCTV Cameras We Install",
      points: [
        "Indoor cameras",
        "Outdoor weatherproof cameras",
        "Dome cameras",
        "Bullet cameras",
        "PTZ cameras (pan–tilt–zoom)",
        "360° fisheye cameras",
        "IP network cameras",
        "HD analog cameras",
        "Wireless cameras",
        "Thermal cameras",
        "Smart AI cameras (face/vehicle detection)",
        "Doorbell cameras",
        "Night vision / IR cameras"
      ]
    },
    {
      title: "Site Survey & Planning",
      points: [
        "Assessment of location and camera coverage",
        "Security risk analysis",
        "Choosing camera types and positions",
        "Cable route planning",
        "Weatherproofing for outdoor cameras",
        "Network and NVR/DVR placement planning"
      ]
    },
    {
      title: "Camera Mounting & Installation",
      points: [
        "Wall-mounted installation",
        "Ceiling-mounted installation",
        "Pole-mounted installation",
        "Outdoor waterproof mounting",
        "Bracket and special PTZ mounts",
        "Camera angle adjustment and optimization"
      ]
    },
    {
      title: "Cabling & Wiring Works",
      points: [
        "CAT6, CAT7 or coaxial cable installation",
        "Concealed wiring for homes and offices",
        "PVC trunking and cable management",
        "Cable conduits or GI piping (optional)",
        "Cable labeling and organizing",
        "Power cable installation",
        "RJ45 or BNC connector termination"
      ]
    },
    {
      title: "NVR / DVR Setup & Configuration",
      points: [
        "NVR/DVR mounting and placement",
        "Hard disk installation and formatting",
        "Channel configuration",
        "Recording and storage setup",
        "Backup settings",
        "Network and IP addressing"
      ]
    },
    {
      title: "Network & Connectivity Setup",
      points: [
        "Router connection",
        "PoE or non-PoE switch installation",
        "PoE injector setup",
        "WiFi setup for wireless cameras",
        "Port forwarding (if required)",
        "Remote access configuration"
      ]
    },
    {
      title: "Mobile & Desktop App Configuration",
      points: [
        "Mobile live view setup",
        "Motion alert configuration",
        "Cloud storage setup (optional)",
        "Multi-user access setup",
        "PC and laptop view configuration",
        "Remote playback setup"
      ]
    },
    {
      title: "Testing & Commissioning",
      points: [
        "Camera angle testing",
        "Day and night vision testing",
        "Motion detection testing",
        "Playback and recording check",
        "Remote access verification",
        "System optimization"
      ]
    },
    {
      title: "CCTV Maintenance Services",
      points: [
        "Camera cleaning and lens adjustment",
        "NVR/DVR health check",
        "Hard disk usage monitoring",
        "Cable damage inspection",
        "Replacing faulty cameras or power supplies",
        "Firmware upgrades",
        "Network troubleshooting"
      ]
    },
    {
      title: "Special Security Solutions",
      points: [
        "Smart AI surveillance",
        "License plate recognition (ANPR)",
        "Face detection cameras",
        "Object and movement tracking",
        "Thermal cameras for temperature screening",
        "Video analytics integration"
      ]
    },
    {
      title: "Types of Projects We Handle",
      points: [
        "Residential homes",
        "Villas and apartments",
        "Offices and corporate buildings",
        "Restaurants and cafés",
        "Warehouses and factories",
        "Schools and nurseries",
        "Hotels and hospitality",
        "Retail shops and showrooms",
        "Commercial buildings",
        "Construction sites"
      ]
    }
  ],

  image: "/cctv1.jpeg",
  gallery: [
    "/cctv2.jpeg",
    "/cctv3.jpeg",
    "/cctv4.jpeg"
  ]
}
,
  {
  slug: "cleaning-services",
  name: "Cleaning Services",
  category: "service",
  tagline: "Residential, Commercial & Deep Cleaning Solutions",

  description:
    "Professional residential, commercial, deep cleaning and sanitization services including home and apartment cleaning, office cleaning, move-in/move-out cleaning, post-construction cleaning, upholstery cleaning, external cleaning and full disinfection treatments.",

  highlights: [
    "Residential & home cleaning",
    "Deep cleaning and sanitization",
    "Office & commercial cleaning",
    "Move-in / move-out cleaning",
    "Post-construction cleaning",
    "Carpet, sofa & mattress shampooing",
    "Kitchen & bathroom deep cleaning",
    "External & balcony cleaning",
    "Disinfection & sterilization services",
    "Customized cleaning packages"
  ],

  details: [
    {
      title: "Residential Cleaning",
      points: [
        "Sweeping, mopping and vacuuming",
        "Dusting of all surfaces",
        "Glass and mirror cleaning",
        "Bedroom cleaning",
        "Kitchen cleaning and sanitization",
        "Bathroom and toilet cleaning",
        "Balcony cleaning",
        "Curtain, sofa and mattress vacuuming",
        "Floor cleaning (tiles, marble, parquet)",
        "Door and handle cleaning",
        "General disinfection"
      ]
    },
    {
      title: "Deep Cleaning",
      points: [
        "Full bathroom deep scrubbing",
        "Kitchen grease cleaning",
        "Cabinets inside-out cleaning",
        "Window tracks and frames cleaning",
        "Doors, handles and switches deep cleaning",
        "Floor scrubbing",
        "Wall spot cleaning",
        "Detailed dust removal from corners",
        "AC vents and grills cleaning (external)",
        "Balcony railings and glass cleaning",
        "Appliances external cleaning",
        "Full sanitization"
      ]
    },
    {
      title: "Office & Commercial Cleaning",
      points: [
        "Workstation cleaning",
        "Desk and chair sanitization",
        "Meeting and conference room cleaning",
        "Reception and waiting area cleaning",
        "Pantry cleaning",
        "Office glass cleaning",
        "Touchpoint sanitization",
        "Carpet vacuuming",
        "Floor polishing (optional)",
        "Trash collection and disposal"
      ]
    },
    {
      title: "Move-In / Move-Out Cleaning",
      points: [
        "Cleaning of empty apartments",
        "Cabinet inside-out cleaning",
        "Kitchen grease removal",
        "Bathroom descaling",
        "Window and frame deep cleaning",
        "Floor scrubbing and polishing",
        "Complete dust removal",
        "Full premises sanitization"
      ]
    },
    {
      title: "Post-Construction Cleaning",
      points: [
        "Cement stain removal",
        "Paint residue and epoxy removal",
        "Deep vacuuming of dust",
        "Sticker removal from glass and floors",
        "Tile polishing",
        "Window deep cleaning",
        "Wall spot cleaning",
        "Debris sweeping and disposal",
        "Final inspection and detailing"
      ]
    },
    {
      title: "Carpet, Rug & Upholstery Cleaning",
      points: [
        "Carpet deep shampooing",
        "Sofa cleaning",
        "Chair deep cleaning",
        "Mattress deep cleaning",
        "Stain removal",
        "Odor removal",
        "Fabric disinfection"
      ]
    },
    {
      title: "Kitchen Cleaning",
      points: [
        "Stove and hood cleaning",
        "Oil and grease removal",
        "Sink and faucet disinfecting",
        "Cabinet internal cleaning",
        "Appliance external cleaning",
        "Countertop scrubbing",
        "Tile degreasing"
      ]
    },
    {
      title: "Bathroom Deep Cleaning",
      points: [
        "Shower area descaling",
        "Toilet deep scrubbing",
        "Floor and wall tile cleaning",
        "Drain cleaning",
        "Mirror and glass washing",
        "Mold and mildew removal",
        "Full disinfection"
      ]
    },
    {
      title: "External Cleaning",
      points: [
        "Balcony cleaning",
        "Parking area sweeping",
        "Outdoor tiles washing",
        "Accessible external window cleaning",
        "Garden area cleaning",
        "Compound wall cleaning"
      ]
    },
    {
      title: "Specialized Cleaning",
      points: [
        "AC duct cleaning (external vacuuming)",
        "Water tank cleaning",
        "Swimming pool cleaning",
        "External façade cleaning",
        "Solar panel cleaning",
        "Curtain steam cleaning",
        "Kitchen hood and duct degreasing (optional)"
      ]
    },
    {
      title: "Disinfection & Sanitization",
      points: [
        "Full house sanitization",
        "Office sanitization",
        "High-touch surface treatment",
        "Hospital-grade disinfectants",
        "Fogging services"
      ]
    }
  ],

  image: "/cleaning1.jpeg",
  gallery: [
    "/cleaning2.jpeg",
    "/cleaning3.jpeg",
    "/cleaning4.jpeg"
  ]
}
,

  // PROJECTS – left exactly as you had them-----------------------------------------------------------------------
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
