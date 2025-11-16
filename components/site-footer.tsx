"use client";

import Link from "next/link";

const address =
  "Office No.62, 1st Floor, Tanvi Business Center, Al Maktoum Road, Dubai - UAE";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-8 text-sm text-muted-foreground">
        <div className="grid gap-6 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              QuickAccess DXB
            </h3>
            <p className="max-w-xs text-xs leading-relaxed">
              Fit out, renovation and maintenance specialists transforming
              homes, offices and retail spaces across Dubai.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-1">
              <li>
                <Link href="/services" className="hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Office Timings
            </h4>
            <p className="text-xs leading-relaxed">
              Mon to Sunday: 8:00 AM to 6:00 PM
            </p>
            <p className="mt-3 text-xs leading-relaxed">{address}</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Contact
            </h4>
            <p className="text-xs leading-relaxed">
              Phone / WhatsApp: +971 50 000 0000
              <br />
              Email: info@quickaccessdxb.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
