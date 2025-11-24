// app/contact/page.tsx

import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact – QuickAccess DXB",
  description:
    "Request a quotation or book an appointment for interior design, fit out, renovation or maintenance services in Dubai.",
};

export default function ContactPage() {
  return (
    <div className="section-padding relative overflow-hidden">
      
      {/* 🔥 Perfect Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f5c26b] via-[#fa8f4d] to-[#fa6a1e]" />

      {/* Optional Soft Blobs (matches service UI style) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/30 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-black/20 blur-3xl opacity-40" />
      </div>

      {/* Main Content */}
      <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h1 className="section-heading">Request a Quote</h1>
            <p className="section-subtitle max-w-2xl">
              Share basic information about your project. Our team will contact
              you to clarify scope, schedule a site visit and provide a detailed
              quotation.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Right Section - Office Info */}
        <div className="space-y-4 text-sm text-muted-foreground">
          <div className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm shadow-black/10">
            <h2 className="mb-2 text-sm font-semibold text-foreground">
              Office Details
            </h2>

            <p>
              Office No.62, 1st Floor, Tanvi Business Center
              <br />
              Al Maktoum Road, Dubai - UAE
            </p>

            <p className="mt-3">
              Mon to Sunday: 8:00 AM to 6:00 PM
              <br />
              Phone / WhatsApp: +971 558177611
              <br />
              Email: info@quickaccessdxb.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
