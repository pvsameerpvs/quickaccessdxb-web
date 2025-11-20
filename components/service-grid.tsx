"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/data";
import { FavoriteProjectDubaiSportsCity } from "./FavoriteProjectDubaiSportsCity";

export function ServiceGrid({
  title,
  subtitle,
  items,
  baseHref,
  limit,
}: {
  title: string;
  subtitle: string;
  items: Service[];
  baseHref: string;
  limit?: number;
}) {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <section className="relative section-padding overflow-hidden">
      {/* BG: logo-inspired gradient + bubbles */}
      <div className="pointer-events-none absolute inset-0">
        {/* base gradient (logo colors) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fa8f4d] via-[#fa8f4d] to-[#fa8f4d]/15" />

        {/* soft bubbles */}
        <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        {/* vertical accent line on left */}
        <div className="absolute left-0 top-10 bottom-10 hidden w-px bg-gradient-to-b from-transparent via-amber-400/70 to-transparent md:block" />
      </div>

      <div className="container relative space-y-10">
        {/* Header – slide from LEFT */}
        <motion.div
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="space-y-2">
            <h2 className="section-heading">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-2xl border-amber-500/40"
          >
            <Link href={baseHref}>View all</Link>
          </Button>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {displayItems.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * index, duration: 0.35 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <Card className="group h-full overflow-hidden rounded-3xl border border-border/60 bg-background/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-1.5 hover:border-amber-500/60 hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* small logo-colored overlay gradient on top of image */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </div>

                <CardContent className="space-y-3 p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                    {item.category === "service"
                      ? "Service & Repairs"
                      : "Project"}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="line-clamp-3 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-2 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-xs font-medium shadow-sm hover:from-amber-500 hover:to-orange-600"
                  >
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
