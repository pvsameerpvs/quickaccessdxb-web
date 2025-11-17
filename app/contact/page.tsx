// app/contact/page.tsx

import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact – QuickAccess DXB",
  description:
    "Request a quotation or book an appointment for interior design, fit out, renovation or maintenance services in Dubai.",
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div>
            <h1 className="section-heading">Request a Quote</h1>
            <p className="section-subtitle">
              Share basic information about your project. Our team will contact
              you to clarify scope, schedule a site visit and provide a detailed
              quotation.
            </p>
          </div>

          {/* Client Component handles interactivity */}
          <ContactForm />
        </div>

        <div className="space-y-4 text-sm text-muted-foreground">
          <div className="rounded-3xl border bg-muted/40 p-5">
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
