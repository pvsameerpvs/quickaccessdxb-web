import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { SupportPill } from "@/components/support-pill";
import { PaddedMain } from "@/components/padded-main"; // <- ADD THIS

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickAccess DXB – Fit Out, Renovation & Maintenance in Dubai",
  description:
    "Interior design, office fit out, villa renovation, apartment revamp, HVAC, MEP, carpentry, tiling, painting and handyman services in Dubai.",
};

import { SmoothScroll } from "@/components/smooth-scroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />

              {/* 👇 Now padding only on non-home pages */}
              <PaddedMain>{children}</PaddedMain>

              <SiteFooter />
              {/* 👇 ADD THIS HERE */}
              <WhatsappFloat />
              {/* <SupportPill /> */}
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
