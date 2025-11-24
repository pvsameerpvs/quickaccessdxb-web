"use client";

import { useState } from "react";
import Image from "next/image";

type ServiceGalleryProps = {
  name: string;
  mainImage: string;
  gallery?: string[];
};

export function ServiceGallery({ name, mainImage, gallery = [] }: ServiceGalleryProps) {
  const [activeImage, setActiveImage] = useState(mainImage);

  // We show main image + gallery images as thumbnails
  const thumbnails = [mainImage, ...gallery];

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Main Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-border/60 bg-muted md:h-80 lg:h-96">
        <Image
          src={activeImage}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 480px, 100vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {thumbnails.length > 1 && (
        <div className="grid grid-cols-3 gap-2">
          {thumbnails.map((src) => {
            const isActive = src === activeImage;
            return (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(src)}
                className={`relative h-20 overflow-hidden rounded-2xl border md:h-24 ${
                  isActive
                    ? "border-[#FF8A1E] ring-2 ring-[#FF8A1E]/60"
                    : "border-border/40"
                }`}
              >
                <Image
                  src={src}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
