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
  const items = getServicesByCategory("project");
  return items.map((item) => ({ slug: item.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getServiceBySlug(params.slug);

  if (!project || project.category !== "project") {
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
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Project
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {project.name}
            </h1>
            <p className="text-sm text-muted-foreground md:text-base">
              {project.description}
            </p>
            <div>
              <h2 className="mb-2 text-sm font-semibold">Scope of work</h2>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {project.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl md:h-80">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {project.gallery.map((src) => (
                <div
                  key={src}
                  className="relative h-20 overflow-hidden rounded-2xl md:h-24"
                >
                  <Image src={src} alt={project.name} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
