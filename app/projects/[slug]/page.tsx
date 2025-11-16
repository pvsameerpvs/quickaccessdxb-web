import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  CalendarDays,
  Building2,
  LayoutTemplate,
} from "lucide-react";
import { getServiceBySlug, getServicesByCategory } from "@/lib/data";
import { Button } from "@/components/ui/button";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  const items = getServicesByCategory("project");
  return items.map((item) => ({ slug: item.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getServiceBySlug(params.slug);

  if (!project || project.category !== "project") {
    notFound();
  }

  return (
    <div className="section-padding bg-gradient-to-b from-background via-background to-muted/40">
      <div className="container space-y-8">
        {/* Top bar / breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-2xl border-border/70"
          >
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span>›</span>
            <Link
              href="/projects"
              className="transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <span>›</span>
            <span className="truncate max-w-[10rem] sm:max-w-xs">
              {project.name}
            </span>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] xl:gap-14">
          {/* LEFT: content */}
          <div className="space-y-6">
            {/* Label + title */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-background/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <LayoutTemplate className="h-3 w-3" />
                </span>
                <span>Project case study</span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                {project.name}
              </h1>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                {project.description}
              </p>
            </div>

            {/* Project meta / quick facts */}
            <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/70 p-4 text-sm md:grid-cols-3 md:p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/5">
                  <Building2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Client
                  </p>
                  <p className="text-sm font-semibold">
                    {/* {project.client || "Confidential"} */}
                    Confidential
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Location
                  </p>
                  <p className="text-sm font-semibold">
                    {/* {project.location || "Multiple locations"} */}
                    Multiple locations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/5">
                  <CalendarDays className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Duration
                  </p>
                  <p className="text-sm font-semibold">
                    {/* {project.duration || "Completed on schedule"} */}
                    Completed on schedule
                  </p>
                </div>
              </div>
            </div>

            {/* Scope of work */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-base font-semibold md:text-lg">
                  Scope of work
                </h2>
                <span className="text-xs text-muted-foreground">
                  Key deliverables & responsibilities
                </span>
              </div>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-2xl bg-background/70 px-3 py-2"
                  >
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome / results (generic but nice) */}
            <div className="space-y-3 rounded-3xl border border-border/70 bg-muted/40 p-4 md:p-5">
              <h2 className="text-base font-semibold md:text-lg">
                Project outcome
              </h2>
              <p className="text-sm text-muted-foreground">
                This project was delivered with a strong focus on reliability,
                safety, and long-term performance. We optimized the scope to
                minimize disruption, coordinated closely with the client&apos;s
                team, and ensured clear communication at every stage.
              </p>
              <div className="grid gap-3 text-xs text-muted-foreground sm:grid-cols-3">
                <div className="rounded-2xl bg-background/70 px-3 py-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide">
                    Efficiency
                  </p>
                  <p>Optimized resource usage & scheduling.</p>
                </div>
                <div className="rounded-2xl bg-background/70 px-3 py-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide">
                    Reliability
                  </p>
                  <p>Reduced downtime and unplanned issues.</p>
                </div>
                <div className="rounded-2xl bg-background/70 px-3 py-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide">
                    Support
                  </p>
                  <p>Ongoing support & maintenance options.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: imagery + CTA */}
          <div className="space-y-4 lg:space-y-6">
            {/* Hero image */}
            <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-border/60 bg-muted md:h-80 lg:h-96">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
              />
            </div>

            {/* Gallery */}
            {project.gallery?.length ? (
              <div className="grid grid-cols-3 gap-2">
                {project.gallery.map((src) => (
                  <div
                    key={src}
                    className="relative h-20 overflow-hidden rounded-2xl border border-border/40 bg-muted md:h-24"
                  >
                    <Image
                      src={src}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {/* CTA card */}
            <div className="space-y-3 rounded-3xl border border-primary/20 bg-primary/5 p-4 md:p-5">
              <h3 className="text-sm font-semibold md:text-base">
                Planning a similar project?
              </h3>
              <p className="text-xs text-muted-foreground md:text-sm">
                Share some details about your requirements and we&apos;ll help
                you shape a clear scope, timeline, and budget based on our
                experience with projects like this.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="sm" className="rounded-2xl">
                  <Link
                    href={`/contact?project=${encodeURIComponent(
                      project.slug
                    )}`}
                  >
                    Discuss your project
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="rounded-2xl border-dashed"
                >
                  <Link href="/projects">View more projects</Link>
                </Button>
              </div>
              <p className="text-[11px] text-muted-foreground">
                We can adapt the approach, scale, and technologies to fit your
                use case.
              </p>
            </div>
          </div>
        </div>

        {/* Project phases / timeline */}
        <section className="mt-4 rounded-3xl border border-border/70 bg-background/80 p-5 md:p-7 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold md:text-xl">
                Project delivery timeline
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                A structured delivery approach to keep the project predictable,
                transparent, and aligned with the client&apos;s goals.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <PhaseCard
              phase="01"
              title="Discovery"
              text="Understand requirements, constraints, and success metrics with the client."
            />
            <PhaseCard
              phase="02"
              title="Planning & Design"
              text="Define scope, timelines, and technical approach before execution."
            />
            <PhaseCard
              phase="03"
              title="Execution"
              text="Implement the agreed scope with regular check-ins and progress updates."
            />
            <PhaseCard
              phase="04"
              title="Handover"
              text="Test, document, and hand over the project with clear next steps."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

type PhaseCardProps = {
  phase: string;
  title: string;
  text: string;
};

function PhaseCard({ phase, title, text }: PhaseCardProps) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-2xl border border-border/60 bg-muted/40 p-4">
      <span className="inline-flex h-7 w-12 items-center justify-center rounded-full bg-background text-[11px] font-semibold tracking-[0.2em] text-muted-foreground">
        {phase}
      </span>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-muted-foreground">{text}</p>
    </div>
  );
}
