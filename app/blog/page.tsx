// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import { BlogSection } from "@/components/blog-section";

export const metadata = {
  title: "Blog – QuickAccess DXB",
  description:
    "Insights, tips and updates related to interior design, fit out, renovation and property maintenance in Dubai.",
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
};

type SocialItem = {
  id: string;
  type: "reel" | "post";
  platform: "Instagram" | "TikTok" | "LinkedIn";
  title: string;
  url: string;
  thumbnail: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: "renovation-planning-dubai",
    title: "How to Plan a Renovation in Dubai: A Step-by-Step Guide",
    excerpt:
      "From approvals to budgeting, here’s how homeowners and businesses can prepare for a smooth renovation project in Dubai.",
    category: "Renovation",
    readTime: "5 min read",
    image: "/how-to-plan.jpeg",
    content: `
Planning a renovation in Dubai involves more than just choosing finishes and layouts. Between approvals, budgeting, and coordinating contractors, it’s important to follow a clear process.

1. Define your scope and goals  
Start by listing all areas you want to renovate: kitchen, bathrooms, flooring, walls, lighting, etc. Decide if the work is cosmetic (painting, fixtures) or structural (walls, MEP changes).

2. Check building and community regulations  
Most buildings and communities in Dubai have specific rules. You may need NOC from the building management, and in some cases approvals from Dubai Municipality or DCD if major changes are involved.

3. Set a realistic budget  
Include: material costs, labour, approvals, contingency (10–15%), and temporary living arrangements if needed. Get a detailed quotation instead of a rough lump sum.

4. Choose a licensed contractor  
Always work with a company that has a valid trade license and experience with similar projects. Ask to see previous work, references, and project photos.

5. Plan timeline and phases  
Renovations often affect daily life. Phase the work (e.g. wet areas first, then finishes) and understand expected lead times for materials.

6. Handover and snagging  
Before final handover, walk through the work with your contractor, create a snag list, and ensure all items are resolved.
    `,
  },
  {
    slug: "fit-out-regulations-dubai",
    title: "Dubai Fit-Out Regulations Explained: What You Need to Know",
    excerpt:
      "Understanding DCD, Dubai Municipality, and community approvals is essential before starting any fit-out work.",
    category: "Fit-Out Compliance",
    readTime: "6 min read",
    image: "/Dubai-Fit-Out.jpeg",
    content: `
Fit-out work in Dubai is heavily regulated to ensure safety, accessibility, and compliance with community standards.

Key authorities involved:  
- Dubai Municipality (DM) – structural changes, health & safety  
- Dubai Civil Defence (DCD) – fire safety, exits, firefighting systems  
- Community / building management – internal rules, working hours, noise control  

Typical requirements:  
• Approved drawings (layouts, MEP, fire fighting, etc.)  
• Use of certified materials where required (fire-rated doors, cables, etc.)  
• Licensed contractors and subcontractors  

Never start demolition or major modification before clarifying which approvals are required for your project. A good fit-out contractor will guide you through this process.
    `,
  },
  {
    slug: "annual-maintenance-checklist",
    title: "Annual Maintenance Checklist for Dubai Villas & Apartments",
    excerpt:
      "AC servicing, waterproofing, electrical checks and more — prevent expensive repairs with this yearly guide.",
    category: "Maintenance",
    readTime: "4 min read",
    image: "/Annual-Maintenance.jpeg",
    content: `
Dubai’s climate is harsh on properties. High temperatures, humidity, and dust mean regular maintenance is essential.

Annual checklist items:  
• AC servicing (at least twice a year)  
• Check and clean drain lines to prevent leaks  
• Inspect waterproofing in bathrooms, balconies, and roofs  
• Test RCDs and main breakers in the DB  
• Look for cracks in grout, tiles, and external walls  
• Flush water tanks and clean filters  

Regular maintenance reduces emergency breakdowns and extends the life of your systems and finishes.
    `,
  },
  {
    slug: "smart-interior-upgrades",
    title: "Smart Interior Upgrades That Increase Property Value",
    excerpt:
      "Lighting, layout, built-ins and finishes that significantly boost aesthetics and resale value.",
    category: "Interior Design",
    readTime: "5 min read",
    image: "/SmartInteriorUpgrades.jpeg",
    content: `
Some upgrades deliver outsized value when it comes to resale or rental potential.

High-impact upgrades:  
• Modern lighting – layered lighting, warm temperatures, and dimmers  
• Built-in storage – wardrobes, TV units, and smart cabinetry  
• Quality flooring – durable, neutral, and easy to maintain  
• Kitchen and bathrooms – updated fixtures, tiles, and counters  

Focus on clean, timeless design rather than very personal, niche styles.
    `,
  },
];

const socialItems: SocialItem[] = [
  {
    id: "ig-reel-1",
    type: "reel",
    platform: "Instagram",
    title: "Before & After: Dubai Apartment Renovation",
    url: "https://www.instagram.com/reel/DQv2joXDvrR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: "/socialmedia.png",
  },
  {
    id: "ig-post-1",
    type: "reel",
    platform: "Instagram",
    title: "Site Progress – Fit-Out in Business Bay",
    url: "https://www.instagram.com/reel/DRCJdftkvY4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: "/socialmedia.png",
  },
  {
    id: "tt-reel-1",
    type: "reel",
    platform: "Instagram",
    title: "1-Minute Maintenance Tips for Dubai Homes",
    url: "https://www.instagram.com/reel/DOptbgFk-8M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: "/socialmedia.png",
  },
  {
    id: "li-post-1",
    type: "reel",
    platform: "Instagram",
    title: "Why Scheduled Maintenance Saves Money Long-Term",
    url: "https://www.instagram.com/reel/DOdMTkjiTih/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: "/socialmedia.png",
  },
];

export default function BlogPage() {
  return (
    <div className="section-padding relative overflow-hidden">
      
      {/* 🔥 Your required gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f5c26b] via-[#fa8f4d] to-[#fa6a1e]" />

      {/* Optional soft glow blobs (matches your design style) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/30 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-black/25 blur-3xl opacity-40" />
      </div>

      {/* Main content */}
      <div className="container space-y-8 relative">

        {/* Parent header */}
        <header className="space-y-3">
          <h1 className="section-heading">Blog</h1>
          <p className="section-subtitle">
            Insights, case studies and practical advice on renovation, fit-out
            and maintenance in Dubai.
          </p>
        </header>

        {/* Blog section with modal */}
        <BlogSection posts={blogPosts} />

        {/* Social media section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold md:text-lg">
              From our social channels
            </h2>
            <p className="text-xs text-muted-foreground">
              Follow our latest site work, reels and quick tips.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {socialItems.map((item) => (
              <SocialCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <p className="text-center text-xs text-muted-foreground">
          More in-depth articles, project case studies and video guides are
          coming soon.
        </p>

      </div>
    </div>
  );
}


/* ============ SOCIAL CARD (unchanged) ============ */

type SocialCardProps = {
  item: SocialItem;
};

function SocialCard({ item }: SocialCardProps) {
  const badgeLabel = item.type === "reel" ? "Reel" : "Post";

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/70 hover:bg-muted/60 transition-colors"
    >
      <div className="relative h-32 w-full overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
          sizes="(min-width: 1024px) 260px, 100vw"
        />
        <div className="absolute bottom-2 left-2 flex gap-1">
          <span className="rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white">
            {item.platform}
          </span>
          <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-medium text-foreground">
            {badgeLabel}
          </span>
        </div>
      </div>
      <div className="p-3">
        <p className="line-clamp-2 text-xs font-medium text-foreground">
          {item.title}
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          View on {item.platform}
        </p>
      </div>
    </a>
  );
}
