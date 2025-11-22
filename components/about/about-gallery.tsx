"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeBottom = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AboutGallery() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* LEFT IMAGE — SLIDE FROM LEFT */}
      <motion.div
        className="relative h-52 overflow-hidden rounded-3xl bg-muted md:h-64"
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/hero-main4.jpg"
          alt="Modern office interior"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* CENTER IMAGE — SLIDE FROM BOTTOM */}
      <motion.div
        className="relative h-52 overflow-hidden rounded-3xl bg-muted md:h-64"
        variants={fadeBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/hero-main41.jpg"
          alt="Minimalist interior"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* RIGHT IMAGE — SLIDE FROM RIGHT */}
      <motion.div
        className="relative h-52 overflow-hidden rounded-3xl bg-muted md:h-64"
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/hero-main3.jpg"
          alt="Staircase architecture"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
