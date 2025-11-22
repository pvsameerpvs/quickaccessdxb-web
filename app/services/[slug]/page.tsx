// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ShieldCheck, PhoneCall, Wrench } from "lucide-react";
import { getServiceBySlug, getServicesByCategory } from "@/lib/data";
import { Button } from "@/components/ui/button";

type ServiceDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  const items = getServicesByCategory("service");
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service || service.category !== "service") {
    return {
      title: "Service not found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.name} | Services`,
    description: service.description,
    openGraph: {
      title: `${service.name} | Services`,
      description: service.description,
      images: [service.image],
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service || service.category !== "service") {
    notFound();
  }

  // Helper: render description normally or as checklist (✔ ...)
  const renderDescription = () => {
    if (!service.description) return null;

    const hasChecklist = service.description.includes("✔");

    if (!hasChecklist) {
      return (
        <p className="section-subtitle max-w-2xl text-sm text-muted-foreground md:text-base">
          {service.description}
        </p>
      );
    }

    const lines = service.description
      .split("✔")
      .map((line) => line.trim())
      .filter(Boolean);

    return (
      <div className="section-subtitle max-w-2xl space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Key services included
        </p>
        <ul className="grid gap-1.5 text-xs text-muted-foreground md:text-sm">
          {lines.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#FF8A1E]" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="section-padding relative overflow-hidden">
      {/* Logo-based background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-background to-orange-500/5" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#FDBA21]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-[#E44828]/18 blur-3xl" />
      </div>

      {/* Full orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5c26b] via-[#fa8f4d] to-[#fa6a1e]" />

      <div className="container relative space-y-8">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-2xl border-[#FF8A1E]/40 text-[#FF8A1E] hover:bg-[#FF8A1E]/5"
          >
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-xs font-medium section-subtitle">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span>›</span>
            <Link
              href="/services"
              className="transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <span>›</span>
            <span className="truncate max-w-[12rem] sm:max-w-xs">
              {service.name}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] xl:gap-14">
          {/* Left: Main Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-2xl border border-[#FF8A1E]/40 bg-[#FF8A1E]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] section-subtitle">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF8A1E]/15">
                <Wrench className="h-3 w-3 section-subtitle" />
              </span>
              <span>Service &amp; Repairs</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                {service.name}
              </h1>

              {/* Quick metrics */}
              <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/80 p-4 text-sm md:grid-cols-3 md:p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-[#FF8A1E]/8">
                    <Clock className="h-4 w-4 text-[#FF8A1E]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Response time
                    </p>
                    <p className="text-sm font-semibold">Same / next-day*</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-[#FF8A1E]/8">
                    <ShieldCheck className="h-4 w-4 text-[#FF8A1E]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Warranty
                    </p>
                    <p className="text-sm font-semibold">Up to 12 months</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-[#FF8A1E]/8">
                    <PhoneCall className="h-4 w-4 text-[#FF8A1E]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Support
                    </p>
                    <p className="text-sm font-semibold">24/7 phone support</p>
                  </div>
                </div>
              </div>

              {/* Description or checklist (✔) */}
              {renderDescription()}

              {/* 🔸 Key highlights from service.highlights */}
              {service.highlights && service.highlights.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h2 className="text-base font-semibold md:text-lg">
                    Our Services
                  </h2>
                  <ul className="grid gap-2 text-xs md:text-sm sm:grid-cols-2">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 rounded-2xl bg-background/80 px-3 py-2"
                      >
                        <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#FF8A1E]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Scope of work & services – accordion UI */}
            {service.details && service.details.length > 0 && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-base font-semibold md:text-lg">
                    Scope of work &amp; services
                  </h2>
                  <span className="text-xs section-subtitle">
                    Tap to expand each section
                  </span>
                </div>

                <div className="space-y-3">
                  {service.details.map((section, index) => (
                    <details
                      key={section.title}
                      className="group rounded-2xl border border-border/60 bg-background/80 p-3 md:p-4"
                      {...(index === 0 ? { open: true } : {})}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FF8A1E]/10 text-[11px] font-semibold text-[#FF8A1E]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-semibold">
                            {section.title}
                          </span>
                        </div>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border/60 text-xs text-muted-foreground transition group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <div className="mt-3 border-t border-border/40 pt-3">
                        <ul className="space-y-1.5 text-xs text-muted-foreground">
                          {section.points.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="mt-[6px] inline-block h-1 w-1 rounded-full bg-[#FF8A1E]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Image & CTA */}
          <div className="space-y-4 lg:space-y-6">
            {/* Main Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-border/60 bg-muted md:h-80 lg:h-96">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
              />
            </div>

            {/* Gallery Thumbnails */}
            {service.gallery?.length ? (
              <div className="grid grid-cols-3 gap-2">
                {service.gallery.map((src) => (
                  <div
                    key={src}
                    className="relative h-20 overflow-hidden rounded-2xl border border-border/40 bg-muted md:h-24"
                  >
                    <Image
                      src={src}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {/* CTA Card */}
            <div className="space-y-3 rounded-3xl border border-[#FF8A1E]/30 bg-[#FF8A1E]/6 p-4 md:p-5">
              <h3 className="text-sm font-semibold md:text-base">
                Ready to book this service?
              </h3>
              <p className="text-xs section-subtitle md:text-sm">
                Share a few details about your issue and our team will get back
                to you with an exact quote and earliest available slot.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="sm"
                  className="rounded-2xl bg-gradient-to-r from-[#FDBA21] via-[#FF8A1E] to-[#E44828] text-xs font-medium shadow-sm hover:from-[#FFCC3A] hover:via-[#FF8A1E] hover:to-[#F0522F]"
                >
                  <Link
                    href={`/contact?service=${encodeURIComponent(
                      service.slug
                    )}`}
                  >
                    Get a quote
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="rounded-2xl border-dashed border-[#FF8A1E]/40 text-[#FF8A1E] hover:bg-[#FF8A1E]/5"
                >
                  <a href="tel:+971558177611">
                    <PhoneCall className="mr-2 h-3.5 w-3.5" />
                    Call our team
                  </a>
                </Button>
              </div>
              <p className="text-[11px] section-subtitle">
                *Response time depends on location and current schedule.
              </p>
            </div>
          </div>
        </div>

        {/* How it works */}
        <section className="mt-6 rounded-3xl border border-border/70 bg-background/85 p-5 md:p-7 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold md:text-xl">
                How the service process works
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                A simple, transparent process from the moment you contact us
                until the job is completed and tested.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <StepCard
              step="01"
              title="Request & Assessment"
              text="Submit your request or call us. We review your issue and confirm the best approach."
            />
            <StepCard
              step="02"
              title="On-site Visit"
              text="Our technicians arrive on time, inspect the problem, and walk you through the findings."
            />
            <StepCard
              step="03"
              title="Service & Repair"
              text="We perform the required work using genuine parts and industry best practices."
            />
            <StepCard
              step="04"
              title="Testing & Handover"
              text="We test everything, explain the work done, and share warranty / maintenance tips."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  text: string;
};

function StepCard({ step, title, text }: StepCardProps) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-2xl border border-border/60 bg-muted/40 p-4">
      <span className="inline-flex h-7 w-12 items-center justify-center rounded-full bg-background text-xs font-semibold tracking-[0.2em] text-muted-foreground">
        {step}
      </span>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-muted-foreground">{text}</p>
    </div>
  );
}
