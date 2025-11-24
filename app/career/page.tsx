// app/careers/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Careers – QuickAccess DXB",
  description:
    "Explore future career opportunities with QuickAccess DXB across design, engineering and site operations.",
};

export default function CareerPage() {
  return (
    <div className="section-padding relative overflow-hidden">
      
      {/* 🔥 PERFECT ORANGE GRADIENT BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f5c26b] via-[#fa8f4d] to-[#fa6a1e]" />

      {/* OPTIONAL LIGHT FLOATING BLOBS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/30 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-black/20 blur-3xl opacity-50" />
      </div>

      {/* MAIN PAGE CONTENT */}
      <div className="container relative space-y-10">
        
        {/* Header */}
        <div className="space-y-3 text-center md:text-left">
          <h1 className="section-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Careers at QuickAccess DXB
          </h1>
          <p className="section-subtitle max-w-2xl text-sm text-muted-foreground md:text-base">
            We believe in people who care deeply about quality, craftsmanship,
            and reliable service delivery.
          </p>
        </div>

        {/* Careers Poster Image */}
        <div className="mx-auto max-w-[360px] rounded-3xl border border-border/60 bg-background/90 p-3 shadow-lg shadow-black/10">
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/carriar.jpeg"
              alt="Careers at QuickAccess DXB"
              fill
              className="object-cover"
              sizes="360px"
              priority
            />
          </div>
        </div>

        {/* Careers Info */}
        <div className="rounded-3xl border border-border/60 bg-background/90 p-6 space-y-3 text-center shadow-lg shadow-black/10">
          <h2 className="text-lg font-semibold">
            We’re building our talent pool
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We connect with talented designers, engineers, project managers,
            supervisors, and technicians who align with our values.
          </p>
        </div>

        {/* Future Talent Section */}
        <div className="rounded-3xl border border-white/40 bg-white/10 backdrop-blur-md p-6 space-y-4 shadow-lg shadow-black/10">
          <h3 className="text-base font-semibold">
            Interested in working with QuickAccess DXB?
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl section-subtitle">
            Submit your CV and portfolio (if applicable). We review strong
            profiles when new roles open.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="mailto:info@quickaccessdxb.com"
              className="inline-flex rounded-2xl bg-black/80 px-5 py-2 text-sm font-medium text-white hover:bg-black transition-colors"
            >
              Send CV to info@quickaccessdxb.com
            </a>
          </div>

          <p className="text-[11px] text-muted-foreground text-center">
            We keep all submissions confidential.
          </p>
        </div>

        {/* Values Section */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-center text-foreground">
            What we value
          </h3>

          <ul className="grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
            <li className="rounded-2xl bg-background/90 p-4 text-center border border-border/60 shadow-sm shadow-black/10">
              <p className="font-semibold text-foreground text-sm mb-1">
                Craftsmanship
              </p>
              <p>Attention to detail in everything we deliver.</p>
            </li>

            <li className="rounded-2xl bg-background/90 p-4 text-center border border-border/60 shadow-sm shadow-black/10">
              <p className="font-semibold text-foreground text-sm mb-1">
                Reliability
              </p>
              <p>Commitment to trust, timelines, and quality.</p>
            </li>

            <li className="rounded-2xl bg-background/90 p-4 text-center border border-border/60 shadow-sm shadow-black/10">
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
