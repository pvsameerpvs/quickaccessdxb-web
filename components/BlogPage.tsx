export const metadata = {
  title: "Blog – QuickAccess DXB",
  description:
    "Insights, tips and updates related to interior design, fit out, renovation and property maintenance in Dubai.",
};

const blogPosts = [
  {
    title: "How to Plan a Renovation in Dubai: A Step-by-Step Guide",
    excerpt:
      "From approvals to budgeting, here’s how homeowners and businesses can prepare for a smooth renovation project in Dubai.",
    category: "Renovation",
    readTime: "5 min read",
  },
  {
    title: "Dubai Fit-Out Regulations Explained: What You Need to Know",
    excerpt:
      "Understanding DCD, Dubai Municipality, and community approvals is essential before starting any fit-out work.",
    category: "Fit-Out Compliance",
    readTime: "6 min read",
  },
  {
    title: "Annual Maintenance Checklist for Dubai Villas & Apartments",
    excerpt:
      "AC servicing, waterproofing, electrical checks and more — prevent expensive repairs with this yearly guide.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    title: "How to Choose the Right AC System for UAE Homes",
    excerpt:
      "Energy efficiency, cooling capacity and insulation — key factors when selecting the perfect AC unit.",
    category: "HVAC",
    readTime: "3 min read",
  },
  {
    title: "Smart Interior Upgrades That Increase Property Value",
    excerpt:
      "Lighting, layout, built-ins and finishes that significantly boost aesthetics and resale value.",
    category: "Interior Design",
    readTime: "5 min read",
  },
  {
    title: "Difference Between Renovation and Fit-Out in Dubai",
    excerpt:
      "A clear breakdown of shell-and-core fit-out, refurbishment, and full renovations.",
    category: "Guides",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background via-background to-muted/40">
      <div className="container max-w-4xl space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="section-heading">Blog</h1>
          <p className="section-subtitle">
            Expert insights on renovation, fit-out, maintenance and design in
            Dubai.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="rounded-3xl border border-border/60 bg-background/60 p-5 hover:bg-muted/40 transition-colors"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                {post.category}
              </p>

              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground">
                <span>{post.readTime}</span>
                <button className="text-primary font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="text-center text-sm text-muted-foreground mt-6">
          Full articles will be published soon. Stay tuned!
        </div>
      </div>
    </div>
  );
}
