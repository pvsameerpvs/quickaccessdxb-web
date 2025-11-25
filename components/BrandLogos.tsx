"use client";

import Image from "next/image";

const logos = ["1.png", "2.png", "3.png", "4.png", "5.png"];

export function BrandLogos() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Optional title */}
        {/* <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Trusted by
        </p> */}

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((logo, idx) => (
            <div
              key={logo}
              className="group flex h-14 w-32 items-center justify-center rounded-xl bg-slate-50/80 px-3 shadow-sm ring-1 ring-slate-100"
            >
              <Image
                src={`/${logo}`}
                alt={`Brand logo ${idx + 1}`}
                width={120}
                height={56}
                className="h-10 w-auto object-contain transition-transform duration-200 ease-out group-hover:scale-110"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
