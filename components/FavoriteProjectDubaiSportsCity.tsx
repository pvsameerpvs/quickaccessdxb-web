"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/projects/sample1.jpeg", alt: "Living area view" },
  { src: "/projects/sample2.jpeg", alt: "Kitchen detail" },
  { src: "/projects/sample3.jpeg", alt: "Bedroom corner" },
  { src: "/projects/sample4.jpeg", alt: "Wardrobe design" },
  { src: "/projects/sample5.jpeg", alt: "Lighting feature" },
  { src: "/projects/sample6.jpeg", alt: "Bathroom finishes" },
  { src: "/projects/sample7.jpeg", alt: "Flooring detail" },
  { src: "/projects/sample8.jpeg", alt: "Wall cladding detail" },
  { src: "/projects/sample9.jpeg", alt: "Studio overall view" },
  { src: "/projects/sample10.jpeg", alt: "Ceiling and lighting" },
  { src: "/projects/sample11.jpeg", alt: "Joinery detail" },
  { src: "/projects/sample12.jpeg", alt: "Decor styling" },
];

export function FavoriteProjectDubaiSportsCity() {
  return (
    <section className="section-padding relative overflow-hidden">
      
     <div className="absolute inset-0 bg-gradient-to-br from-[#f5c26b] via-[#fa8f4d] to-[#fa6a1e]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid items-start gap-10 lg:grid-cols-[0.9fr,1.4fr]"
        >
          {/* LEFT — TEXT */}
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#fa8f4d]/40 bg-[#fa8f4d]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] section-subtitle">
              Favorite Project
            </p>

            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Dubai Sports City
                <br />
                Studio Apartment Renovation Works
              </h2>
              <p className="text-sm text-muted-foreground md:text-base section-subtitle">
                A complete studio transformation in Dubai Sports City — from
                layout optimization and joinery to lighting, finishes and
                styling, designed to maximise comfort and functionality in a
                compact footprint.
              </p>
            </div>

            <div className="grid gap-3 text-xs text-muted-foreground md:text-sm">
              <div className="flex gap-6">
                <div>
                  <p className="font-bold text-foreground ">Location</p>
                  <p className="section-subtitle">Dubai Sports City, Dubai</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Scope</p>
                  <p className="section-subtitle">Full studio renovation</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground">Highlights</p>
                <ul className="mt-1 list-disc space-y-1 pl-4 section-subtitle">
                  <li>Custom joinery &amp; smart storage</li>
                  <li>Warm, hotel-style lighting design</li>
                  <li>Durable finishes tailored for daily use</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT — 12 IMAGE SHOWCASE GRID (ALL EQUAL) */}
          <div className="relative">
            <div className="relative rounded-[2rem] border bg-background/80 p-3 shadow-sm backdrop-blur-md md:p-4">
              {/* Header row inside card */}
              <div className="mb-3 flex items-center justify-between md:mb-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Project Gallery
                </p>
                <p className="text-xs text-muted-foreground">
                  12 Photos • Studio Renovation
                </p>
              </div>

              {/* Equal-grid gallery */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-3">
                {images.map((image) => (
                  <div
                    key={image.src}
                    className="group relative overflow-hidden rounded-xl border border-border/60 bg-muted/30"
                  >
                    <div className="relative h-24 w-full sm:h-28 md:h-32 lg:h-32 xl:h-36">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Overlay label on hover */}
                    <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="line-clamp-1 px-2 pb-2 text-[10px] font-medium text-white">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
