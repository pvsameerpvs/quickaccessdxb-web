"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 0,
    image: "/hero-main1.jpg",
    eyebrow: "INTERIOR · FIT OUT · RENOVATION",
    title: "Spaces crafted for",
    highlight: "modern living",
  },
  {
    id: 1,
    image: "/hero-main3.jpg",
    eyebrow: "OFFICE · COMMERCIAL · WORKSPACES",
    title: "Workspaces built for",
    highlight: "productivity",
  },
  {
    id: 2,
    image: "/hero-main4.jpg",
    eyebrow: "MAINTENANCE · TECHNICAL SERVICES",
    title: "Technical services that",
    highlight: "just work",
  },
];

const backgroundVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const textVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

// bubble colors
const bubbleColors = ["#fef9c3", "#fcd34d", "#fed7aa", "#e5e7eb", "#ffffff"];

// random bubbles
const bubbles = Array.from({ length: 90 }).map((_, i) => ({
  id: i,
  top: `${5 + Math.random() * 85}%`,
  left: `${5 + Math.random() * 90}%`,
  size: 3 + Math.random() * 9,
  color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
  delay: Math.random() * 4,
}));

export function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      10000
    );
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[current];

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* BG */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ perspective: 1400 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="absolute inset-0 rounded-[40px] overflow-hidden"
              style={{ transformOrigin: "center center" }}
              animate={{ scale: [1.03, 1.18] }}
              transition={{
                duration: 14,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeOut",
              }}
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.eyebrow}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

              <div className="pointer-events-none absolute -inset-20 mix-blend-screen">
                <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)] opacity-70" />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FAST FLOATING BUBBLES */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {bubbles.map((b) => {
          const isWarm =
            b.color === "#fef9c3" ||
            b.color === "#fcd34d" ||
            b.color === "#fed7aa";

          return (
            <motion.span
              key={b.id}
              className="absolute rounded-full"
              style={{
                width: b.size,
                height: b.size,
                top: b.top,
                left: b.left,
                backgroundColor: b.color,
                opacity: 0.45,
                boxShadow: isWarm
                  ? "0 0 18px rgba(249, 200, 90, 0.35)"
                  : "0 0 12px rgba(255, 255, 255, 0.30)",
              }}
              animate={{
                x: [
                  "0%",
                  `${Math.random() * 140 - 70}%`, // much larger & faster horizontal movement
                  `${Math.random() * 200 - 100}%`,
                  `${Math.random() * 120 - 60}%`,
                  "0%",
                ],
                y: [
                  "0%",
                  `${Math.random() * 140 - 70}%`, // much larger & faster vertical movement
                  `${Math.random() * 200 - 100}%`,
                  `${Math.random() * 120 - 60}%`,
                  "0%",
                ],
                opacity: [0.25, 0.9, 0.5, 0.85, 0.25],
                scale: [1, 1.25, 1.1, 1.3, 1],
              }}
              transition={{
                duration: 5 + (b.id % 3), // ⚡ MUCH faster (was ~12–18s)
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: b.delay * 0.3,
              }}
            />
          );
        })}
      </div>

      {/* TEXT */}
      <div className="relative z-20 flex h-full items-center pt-[6rem]">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id + "-text"}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-3xl text-white"
              style={{ transform: "translateZ(40px)" }}
            >
              <p className="mb-3 text-xs tracking-[0.25em] text-white/70">
                {currentSlide.eyebrow}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                {currentSlide.title}{" "}
                <span className="italic">{currentSlide.highlight}</span>.
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM INFO */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container">
          <div className="flex flex-col gap-6 text-[11px] text-white/80 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xs space-y-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                PROJECT
              </p>
              <p>// Dubai, UAE</p>
              <p>// Residential & Commercial</p>
            </div>

            <div className="max-w-md space-y-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                DESCRIPTION
              </p>
              <p className="text-xs leading-relaxed">
                Tailored interior design, office fit out and renovation
                services, shaped around how you live and work in Dubai.
              </p>
            </div>

            <div className="flex items-end justify-between gap-4 md:justify-end">
              <Button
                asChild
                size="sm"
                className="rounded-full bg-white/90 px-5 text-xs font-medium text-black hover:bg-white"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/80 hover:bg-white/10"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/80 hover:bg-white/10"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
