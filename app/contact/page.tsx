import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Full name" required />
              <Input placeholder="Email" type="email" required />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Phone / WhatsApp" required />
              <Input placeholder="Location in Dubai (community / building)" />
            </div>
            <Input placeholder="Service required (e.g. villa renovation, office fit out)" />
            <Textarea
              rows={5}
              placeholder="Describe your project, timeline and any special requirements."
            />
            <Button type="submit" className="rounded-2xl">
              Submit Request
            </Button>
            <p className="text-xs text-muted-foreground">
              By submitting this form you consent to being contacted by phone,
              WhatsApp or email regarding your enquiry.
            </p>
          </form>
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
