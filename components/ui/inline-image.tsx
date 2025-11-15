"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function InlineImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <span className="relative mx-1 inline-flex h-10 w-20 align-middle">
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("rounded-full object-cover", className)}
      />
    </span>
  );
}
