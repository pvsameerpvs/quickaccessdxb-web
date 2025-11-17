import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog – QuickAccess DXB",
  description:
    "Insights, tips and updates related to interior design, fit out, renovation and property maintenance in Dubai.",
};

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
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
  },
  {
    slug: "fit-out-regulations-dubai",
    title: "Dubai Fit-Out Regulations Explained: What You Need to Know",
    excerpt:
      "Understanding DCD, Dubai Municipality, and community approvals is essential before starting any fit-out work.",
    category: "Fit-Out Compliance",
    readTime: "6 min read",
    image: "/Dubai-Fit-Out.jpeg",
  },
  {
    slug: "annual-maintenance-checklist",
    title: "Annual Maintenance Checklist for Dubai Villas & Apartments",
    excerpt:
      "AC servicing, waterproofing, electrical checks and more — prevent expensive repairs with this yearly guide.",
    category: "Maintenance",
    readTime: "4 min read",
    image: "/Annual-Maintenance.jpeg",
  },
  {
    slug: "smart-interior-upgrades",
    title: "Smart Interior Upgrades That Increase Property Value",
    excerpt:
      "Lighting, layout, built-ins and finishes that significantly boost aesthetics and resale value.",
    category: "Interior Design",
    readTime: "5 min read",
    image: "/SmartInteriorUpgrades.jpeg",
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
    type: "post",
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
    type: "post",
    platform: "Instagram",
    title: "Why Scheduled Maintenance Saves Money Long-Term",
    url: "https://www.instagram.com/reel/DOdMTkjiTih/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: "/socialmedia.png",
  },
];

export default function BlogPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background via-background to-muted/40">
      <div className="container ">
        {/* Parent header */}
        <header className="space-y-3 ">
          <h1 className="section-heading">Blog</h1>
          <p className="section-subtitle">
            Insights, case studies and practical advice on renovation, fit-out
            and maintenance in Dubai.
          </p>
        </header>

        {/* Blog section (you can extract to <BlogSection /> later) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold md:text-lg">
              Latest articles
            </h2>
            <p className="text-xs text-muted-foreground">
              Guides for homeowners, landlords & facility managers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* Social media / Reels section (you can extract to <SocialSection /> later) */}
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

/* ============ CHILD COMPONENTS (you can move them to separate files) ============ */

type BlogCardProps = {
  post: BlogPost;
};

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/70 hover:bg-muted/50 transition-colors">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
          sizes="(min-width: 1024px) 400px, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium uppercase tracking-wide text-primary">
            {post.category}
          </span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-sm font-semibold tracking-tight md:text-base">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-1">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex text-xs font-medium text-primary hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}

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
