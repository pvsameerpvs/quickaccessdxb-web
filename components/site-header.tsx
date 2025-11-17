"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About Us" },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-4 flex h-14 items-center justify-between rounded-full bg-background/70 px-5 shadow-sm backdrop-blur-xl md:h-16 md:px-7"
        >
          {/* Left: brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/lodo-quicl.png" // make sure this file exists in /public
              alt="QuickAccess DXB Logo"
              width={130}
              height={32}
              className="object-contain"
              priority
            />
          </Link>

          {/* Center: nav (desktop) */}
          <nav className="hidden items-center gap-6 text-[13px] font-medium text-muted-foreground md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground",
                  pathname === item.href && "text-foreground"
                )}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Right: theme + CTA + mobile menu */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <ModeToggle />
              <Button
                asChild
                size="sm"
                className="rounded-full px-5 text-xs font-medium"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="inline-flex rounded-full md:hidden"
                  aria-label="Open navigation"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="mt-4 flex flex-col gap-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-2xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                        pathname === item.href && "bg-accent text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 rounded-2xl">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
