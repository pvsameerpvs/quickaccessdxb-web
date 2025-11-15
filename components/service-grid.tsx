"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/data";

export function ServiceGrid({
  title,
  subtitle,
  items,
  baseHref,
}: {
  title: string;
  subtitle: string;
  items: Service[];
  baseHref: string;
}) {
  // Only show first 6 services in this layout
  const visibleItems = items.slice(0, 6);
  const topRow = visibleItems.slice(0, 3);
  const bottomRow = visibleItems.slice(3, 6);

  return (
    <section className="section-padding">
      <div className="container space-y-10">
        {/* Header – slide from LEFT */}
        <motion.div
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div>
            <h2 className="section-heading">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
          <Button asChild variant="outline" className="rounded-2xl">
            <Link href={baseHref}>View all</Link>
          </Button>
        </motion.div>

        {/* 3 cards top row – slide from LEFT */}
        <div className="grid gap-6 md:grid-cols-3">
          {topRow.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="h-full overflow-hidden rounded-3xl border border-border/70 bg-background/60 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-3 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.category === "service"
                      ? "Service & Repairs"
                      : "Project"}
                  </div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="line-clamp-3 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                  <Button asChild size="sm" className="mt-2 rounded-2xl">
                    <Link href={`${baseHref}/${item.slug}`}>View details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 3 cards bottom row – slide from RIGHT */}
        <div className="grid gap-6 md:grid-cols-3">
          {bottomRow.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="h-full overflow-hidden rounded-3xl border border-border/70 bg-background/60 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-3 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.category === "service"
                      ? "Service & Repairs"
                      : "Project"}
                  </div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="line-clamp-3 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                  <Button asChild size="sm" className="mt-2 rounded-2xl">
                    <Link href={`${baseHref}/${item.slug}`}>View details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
