"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Medal, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: CheckCircle2,
    title: "Professional Handyman",
    description:
      "Skilled technicians trained to handle everything from minor fixes to full renovations.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  },
  {
    icon: Clock,
    title: "24/7 Services",
    description:
      "Emergency support and flexible scheduling to work around your routine.",
    image: "/hard-work.jpeg",
  },
  {
    icon: ShieldCheck,
    title: "High Quality Materials",
    description:
      "We source reputable brands and follow manufacturer guidelines.",
    image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
  },
  {
    icon: Medal,
    title: "Affordable Price",
    description:
      "Transparent quotations with no hidden charges, tailored to your budget.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
];

export function ValuesSection() {
  return (
    <section className="section-padding">
      <div className="container space-y-10">
        {/* Heading – slide from LEFT */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary/70">
            What we believe in
          </p>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Our values
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            We believe that a small but highly driven and focused team can make
            a lasting impact in any area.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative h-56 overflow-hidden rounded-[1.5rem] border border-border/60 bg-muted/40 shadow-sm 
                         transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-300 group-hover:opacity-50"
                style={{ backgroundImage: `url(${value.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/40 to-background/10" />

              {/* Content */}
              <div className="relative flex h-full flex-col justify-between p-5">
                <value.icon className="h-5 w-5 text-primary drop-shadow-sm" />
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
