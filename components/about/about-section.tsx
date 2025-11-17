"use client";

import Image from "next/image";
import { InlineImage } from "@/components/ui/inline-image";
import { motion } from "framer-motion";

// LEFT → RIGHT ANIMATION
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// RIGHT → LEFT ANIMATION
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function AboutSection() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.6fr] ">
      {/* LEFT COLUMN — SLIDE FROM LEFT */}
      <motion.div
        className="space-y-6"
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-3xl font-semibold leading-tight md:text-4xl">
          About
          <br />
          <span className="italic">Quick Access</span>
        </p>

        <motion.div
          className="relative h-48 w-full overflow-hidden rounded-3xl md:h-56"
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <Image
            src="/hero-main2.jpg"
            alt="About Quick Access"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* RIGHT COLUMN — SLIDE FROM RIGHT */}
      <motion.div
        className="relative space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base"
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Logo */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Image
            src="/lodo-quicl.png"
            alt="QuickAccess Logo"
            width={420}
            height={420}
            className="
        opacity-[.5]
        object-contain
        select-none
        blur-[1px]
      "
          />
        </div>

        {/* Foreground Text */}
        <div className="relative space-y-4">
          <p className="text-foreground">
            <span className="italic font-semibold pr-1">Quick Access</span>
            is a Dubai–based technical services and renovation company creating
            reliable, high–quality solutions that enhance the living and working
            experience.
          </p>

          <p>
            With a focus on soft minimalism material tactility, and well-being,
            we design and deliver spaces that connect deeply with people and
            place.
          </p>

          <p>
            Commercial &amp; residential clients across UAE rely on Quick Access
            Technical Services for fast and reliable 24-hour roofing repair and
            comprehensive property solutions.
          </p>

          <p>
            Quick Access Technical Services was established in 2022 in Dubai,
            built on a vision to deliver high-quality interior design and
            renovation solutions that combine creativity, precision, and
            functionality.
          </p>

          <p>
            Our team of skilled engineers, designers, and technicians brings
            together expertise and innovation to transform spaces into inspiring
            environments that reflect each client’s unique style and needs.
          </p>

          <p>
            At Quick Access, our mission is to provide comprehensive, tailored
            services that go beyond expectations — ensuring every project is
            executed with excellence, attention to detail, and a commitment to
            customer satisfaction.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
