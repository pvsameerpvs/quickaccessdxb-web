"use client";

import { usePathname } from "next/navigation";

export function PaddedMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <main className={isHome ? "flex-1" : "flex-1 pt-[4.5rem]"}>{children}</main>
  );
}
