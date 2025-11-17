"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const address =
  "Office No.62, 1st Floor, Tanvi Business Center Al Maktoum Road, Dubai-UAE";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gradient-to-b from-background via-muted/40 to-muted/60">
      {/* top accent line using logo gradient */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#FDBA21] via-[#FF8A1E] to-[#E44828]" />

      <div className="container py-8 text-sm text-muted-foreground">
        <div className="grid gap-6 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8A1E]">
              QuickAccess DXB
            </h3>
            <p className="max-w-xs text-xs leading-relaxed">
              Fit out, renovation and maintenance specialists transforming
              homes, offices and retail spaces across Dubai.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://www.facebook.com/people/Quick-Access/61580390063588/?rdid=ComJdsn00c65UDKO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LpxqxVyko%2F"
                target="_blank"
                className="rounded-full border border-transparent bg-background/60 p-2 text-muted-foreground transition hover:border-[#FF8A1E]/60 hover:bg-[#FF8A1E]/10 hover:text-[#FF8A1E]"
              >
                <Facebook className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.instagram.com/dxbquickaccess/?igsh=bXo3eTF3enk0MGY5#"
                target="_blank"
                className="rounded-full border border-transparent bg-background/60 p-2 text-muted-foreground transition hover:border-[#FF8A1E]/60 hover:bg-[#FF8A1E]/10 hover:text-[#FF8A1E]"
              >
                <Instagram className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/quick-access-technical-services/"
                target="_blank"
                className="rounded-full border border-transparent bg-background/60 p-2 text-muted-foreground transition hover:border-[#FF8A1E]/60 hover:bg-[#FF8A1E]/10 hover:text-[#FF8A1E]"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-1 text-xs">
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#FF8A1E]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition hover:text-[#FF8A1E]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition hover:text-[#FF8A1E]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#FF8A1E]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Office Timings
            </h4>
            <p className="text-xs leading-relaxed">
              Mon to Sunday: 8:00 AM to 6:00 PM
            </p>
            <p className="mt-3 text-xs leading-relaxed">{address}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Contact
            </h4>
            <p className="text-xs leading-relaxed">
              Phone / WhatsApp:{" "}
              <a
                href="tel:+971558177611"
                className="font-medium text-[#FF8A1E] hover:underline"
              >
                +971 55 817 7611
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:info@quickaccessdxb.com"
                className="font-medium text-[#FF8A1E] hover:underline"
              >
                info@quickaccessdxb.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom strip */}
      </div>
    </footer>
  );
}
