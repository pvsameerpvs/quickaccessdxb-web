import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ShieldCheck, PhoneCall, Wrench } from "lucide-react";
import { getServiceBySlug, getServicesByCategory } from "@/lib/data";
import { Button } from "@/components/ui/button";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  const items = getServicesByCategory("service");
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service || service.category !== "service") {
    notFound();
  }

  return (
    <div className="section-padding bg-gradient-to-b from-background via-background to-muted/40">
      <div className="container space-y-8">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-2xl border-border/70"
          >
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
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
            <div className="inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                <Wrench className="h-3 w-3" />
              </span>
              <span>Service &amp; Repairs</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                {service.name}
              </h1>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                {service.description}
              </p>
            </div>

            {/* Quick Info / Highlights */}
            <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/70 p-4 text-sm md:grid-cols-3 md:p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/5">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Response time
                  </p>
                  <p className="text-sm font-semibold">Same / next-day*</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/5">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Warranty
                  </p>
                  <p className="text-sm font-semibold">Up to 12 months</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/5">
                  <PhoneCall className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Support
                  </p>
                  <p className="text-sm font-semibold">24/7 phone support</p>
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold md:text-lg">
                  What we deliver
                </h2>
                <span className="text-xs text-muted-foreground">
                  Tailored to your specific needs
                </span>
              </div>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {service.highlights.map((item) => (
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
            <div className="space-y-3 rounded-3xl border border-primary/20 bg-primary/5 p-4 md:p-5">
              <h3 className="text-sm font-semibold md:text-base">
                Ready to book this service?
              </h3>
              <p className="text-xs text-muted-foreground md:text-sm">
                Share a few details about your issue and our team will get back
                to you with an exact quote and earliest available slot.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="sm" className="rounded-2xl">
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
                  className="rounded-2xl border-dashed"
                >
                  <a href="tel: +971 558177611">
                    <PhoneCall className="mr-2 h-3.5 w-3.5" />
                    Call our team
                  </a>
                </Button>
              </div>
              <p className="text-[11px] text-muted-foreground">
                *Response time depends on location and current schedule.
              </p>
            </div>
          </div>
        </div>

        {/* How it works */}
        <section className="mt-6 rounded-3xl border border-border/70 bg-background/80 p-5 md:p-7 lg:p-8">
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

/**
 * Small presentational component for the “How it works” steps
 */
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
