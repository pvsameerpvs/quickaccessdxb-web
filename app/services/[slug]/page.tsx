import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getServiceBySlug, getServicesByCategory } from "@/lib/data";
import { Button } from "@/components/ui/button";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  const items = getServicesByCategory("service");
  return items.map((item) => ({ slug: item.slug }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service || service.category !== "service") {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="container space-y-8">
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

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Service &amp; Repairs
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {service.name}
            </h1>
            <p className="text-sm text-muted-foreground md:text-base">
              {service.description}
            </p>
            <div>
              <h2 className="mb-2 text-sm font-semibold">What we deliver</h2>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {service.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl md:h-80">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {service.gallery.map((src) => (
                <div
                  key={src}
                  className="relative h-20 overflow-hidden rounded-2xl md:h-24"
                >
                  <Image src={src} alt={service.name} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
