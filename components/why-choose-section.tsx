"use client";
import { Award, Gauge, HandCoins, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: HandCoins,
    title: "Competitive Pricing",
    description:
      "Experience quality without breaking the bank — fair and competitive pricing.",
  },
  {
    icon: Users,
    title: "Certified Experts",
    description:
      "Backed by a proven team of certified technicians, engineers, and supervisors.",
  },
  {
    icon: Gauge,
    title: "Fast & Quality Services",
    description:
      "Efficient project planning ensures timely delivery and top-tier workmanship.",
  },
  {
    icon: Award,
    title: "100% Satisfaction",
    description:
      "Recognised for exceptional maintenance and renovation services across Dubai.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const rightGridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export function WhyChooseSection() {
  const left = reasons.slice(0, 2);
  const right = reasons.slice(2, 4);

  return (
    <motion.section
      className="py-20 lg:py-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container grid gap-20 lg:grid-cols-[1.1fr,1.4fr] items-start">
        {/* LEFT SIDE — BIG TEXT */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-primary/70">
            Why Quick Access?
          </p>

          {/* Big Heading */}
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            The Quick Access
            <br />
            Difference
          </h2>

          {/* Description */}
          <p className="text-sm text-muted-foreground md:text-base">
            For years, we’ve been a trusted technical services partner,
            delivering reliable maintenance, renovation, and fit-out work for
            homes and businesses across Dubai.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80"
              >
                Call Now <span className="text-base leading-none">›</span>
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-destructive hover:opacity-80"
              >
                Book Free Estimate{" "}
                <span className="text-base leading-none">›</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — BIG FEATURE COLUMNS */}
        <motion.div
          className="grid gap-16 md:grid-cols-2 text-lg"
          variants={rightGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* LEFT COLUMN */}
          <div className="space-y-12 border-l-2 border-border/60 pl-8">
            {left.map((item, i) => (
              <motion.div
                key={item.title}
                className="space-y-6"
                variants={cardVariants}
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center">
                    <item.icon className="h-7 w-7 text-amber-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {i === 0 && <div className="h-px bg-border/60 w-full" />}
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-12 border-l-2 border-border/60 pl-8">
            {right.map((item, i) => (
              <motion.div
                key={item.title}
                className="space-y-6"
                variants={cardVariants}
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center ">
                    <item.icon className="h-7 w-7 text-amber-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {i === 0 && <div className="h-px bg-border/60 w-full" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
