"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 0,
    image: "/hero.jpg",
    eyebrow: "INTERIOR · FIT OUT · RENOVATION",
    title: "Spaces crafted for",
    highlight: "modern living",
  },
  {
    id: 1,
    image: "/hero1.jpg",
    eyebrow: "OFFICE · COMMERCIAL · WORKSPACES",
    title: "Workspaces built for",
    highlight: "productivity",
  },
  {
    id: 2,
    image: "/hero2.jpg",
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

type Ripple = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  vy: number; // vertical speed
  vx: number; // horizontal drift
};

export function Hero() {
  const [current, setCurrent] = useState(0);

  // ============== BUBBLE CANVAS ==============
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const lastSpawnRef = useRef<number>(0);

  // Resize canvas to screen
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Draw & animate bubbles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;

    const render = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const ripples = ripplesRef.current;

      for (let i = 0; i < ripples.length; i++) {
        const r = ripples[i];

        // move bubble gently
        r.y -= r.vy;
        r.x += r.vx;

        // very subtle growth
        r.radius += 0.015;

        // faster fade -> fewer visible overall
        r.alpha -= 0.0018;

        if (
          r.alpha <= 0 ||
          r.y + r.radius < 0 ||
          r.x + r.radius < 0 ||
          r.x - r.radius > width
        ) {
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);

        // soft fill
        ctx.fillStyle = `rgba(255, 255, 255, ${r.alpha * 0.25})`;
        ctx.fill();

        // gentle outline
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = `rgba(255, 255, 255, ${r.alpha * 0.9})`;
        ctx.stroke();
      }

      // keep only visible bubbles
      ripplesRef.current = ripples.filter(
        (r) =>
          r.alpha > 0 &&
          r.y + r.radius > 0 &&
          r.x + r.radius > 0 &&
          r.x - r.radius < width
      );

      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Smaller bubbles
  const pushBubble = (x: number, y: number, sizeScale = 1) => {
    const baseRadius = 1 + Math.random() * 2.2; // smaller base size
    ripplesRef.current.push({
      x,
      y,
      radius: baseRadius * sizeScale,
      alpha: 0.45 + Math.random() * 0.25,
      vy: 0.08 + Math.random() * 0.16,
      vx: (Math.random() - 0.5) * 0.22,
    });
  };

  const spawnRipple = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // even fewer per pointer move
    for (let i = 0; i < 2; i++) {
      const offsetX = x + (Math.random() - 0.5) * 20;
      const offsetY = y + (Math.random() - 0.5) * 20;
      pushBubble(offsetX, offsetY, 0.7 + Math.random() * 0.2); // smaller
    }
  };

  // Initial calm fill — fewer, smaller bubbles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = canvas;

    const initialCount = 140;
    for (let i = 0; i < initialCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      pushBubble(x, y, 0.5 + Math.random() * 0.5);
    }
  }, []);

  // Ambient bubbles
  useEffect(() => {
    const interval = setInterval(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const { width, height } = canvas;

      // bottom bubbles (rising up)
      const bottomCount = 2;
      for (let i = 0; i < bottomCount; i++) {
        const x = Math.random() * width;
        const y = height + Math.random() * (height * 0.3);
        pushBubble(x, y, 0.7 + Math.random() * 0.3);
      }

      // random bubbles anywhere
      const randomCount = 3;
      for (let i = 0; i < randomCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        pushBubble(x, y, 0.5 + Math.random() * 0.4);
      }
    }, 160); // slower interval

    return () => clearInterval(interval);
  }, []);

  // Gentle bubble burst when slide changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = canvas;

    const burstCount = 14;
    for (let i = 0; i < burstCount; i++) {
      const x = Math.random() * width;
      const y = height * 0.45 + Math.random() * (height * 0.4);
      pushBubble(x, y, 0.8 + Math.random() * 0.3); // slightly smaller
    }
  }, [current]);

  // ============== SLIDES ==============
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[current];

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // ============== POINTER HANDLERS (ONLY FOR BUBBLES) ==============
  const onMouseMove = (e: React.MouseEvent) => {
    const now = performance.now();
    if (now - lastSpawnRef.current > 110) {
      // slower spawn from cursor
      lastSpawnRef.current = now;
      spawnRipple(e.clientX, e.clientY);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const t = e.touches?.[0];
    if (!t) return;
    const now = performance.now();
    if (now - lastSpawnRef.current > 110) {
      lastSpawnRef.current = now;
      spawnRipple(t.clientX, t.clientY);
    }
  };

  // ============== RENDER ==============
  return (
    <section
      className="relative h-screen overflow-hidden bg-black"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* Background + looping zoom */}
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
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-[40px] overflow-hidden"
              style={{
                transformOrigin: "center center",
              }}
              animate={{ scale: [1.03, 1.15, 1.03] }} // faster, stronger zoom loop
              transition={{
                duration: 10, // faster loop (was 18)
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.eyebrow}
                fill
                priority
                className="object-cover"
              />

              {/* glassy dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />

              {/* static glass highlight */}
              <div className="pointer-events-none absolute -inset-20 mix-blend-screen">
                <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_55%)] opacity-60" />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bubbles overlay */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-10"
      />

      {/* Title area */}
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

      {/* Bottom metadata + controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container">
          <div className="flex flex-col gap-6 text-[11px] text-white/80 md:flex-row md:items-end md:justify-between">
            {/* Left */}
            <div className="max-w-xs space-y-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                PROJECT
              </p>
              <p>// Dubai, UAE</p>
              <p>// Residential & Commercial</p>
            </div>

            {/* Middle */}
            <div className="max-w-md space-y-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                DESCRIPTION
              </p>
              <p className="text-xs leading-relaxed">
                Tailored interior design, office fit out and renovation
                services, shaped around how you live and work in Dubai.
              </p>
            </div>

            {/* Right – CTA + slider controls */}
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
