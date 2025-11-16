export const metadata = {
  title: "Careers – QuickAccess DXB",
  description:
    "Explore future career opportunities with QuickAccess DXB across design, engineering and site operations.",
};

export default function CareerPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background via-background to-muted/40">
      <div className="container  space-y-10">
        {/* Header */}
        <div className="space-y-3 ">
          <h1 className="section-heading">Careers at QuickAccess DXB</h1>
          <p className="section-subtitle  ">
            We believe in people who care deeply about quality, craftsmanship,
            and reliable service delivery.
          </p>
        </div>

        {/* Not Hiring Notice */}
        <div className="rounded-3xl border border-border/70 bg-muted/40 p-6 space-y-3 text-center">
          <h2 className="text-lg font-semibold">
            We’re not hiring at the moment
          </h2>
          <p className="text-sm text-muted-foreground">
            Although we don’t have active openings right now, we’re always happy
            to connect with talented designers, engineers, project managers, and
            technicians who align with our values.
          </p>
        </div>

        {/* Future talent section */}
        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 space-y-4">
          <h3 className="text-base font-semibold">
            Interested in future roles?
          </h3>
          <p className="text-sm text-muted-foreground">
            You can still submit your CV and portfolio (if applicable). We keep
            strong profiles on file and reach out when a position that matches
            your background becomes available.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="mailto:careers@quickaccessdxb.com"
              className="inline-flex rounded-2xl bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send CV to careers@quickaccessdxb.com
            </a>
          </div>

          <p className="text-[11px] text-muted-foreground text-center">
            We review all submissions and maintain a confidential talent
            pipeline.
          </p>
        </div>

        {/* Optional Values Section */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-center">What we value</h3>
          <ul className="grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
            <li className="rounded-2xl bg-background/60 p-4 text-center">
              <p className="font-semibold text-foreground text-sm mb-1">
                Craftsmanship
              </p>
              <p>Attention to detail in everything we deliver.</p>
            </li>
            <li className="rounded-2xl bg-background/60 p-4 text-center">
              <p className="font-semibold text-foreground text-sm mb-1">
                Reliability
              </p>
              <p>Commitment to trust, timelines, and quality.</p>
            </li>
            <li className="rounded-2xl bg-background/60 p-4 text-center">
              <p className="font-semibold text-foreground text-sm mb-1">
                Teamwork
              </p>
              <p>A supportive environment where everyone contributes.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
