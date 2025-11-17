"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = (formData.get("fullName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const location = (formData.get("location") as string) || "";
    const service = (formData.get("service") as string) || "";
    const details = (formData.get("details") as string) || "";

    const phoneNumber = "971558177611"; // your WhatsApp number (no +, no spaces)

    const message = `
New enquiry from QuickAccess DXB website:

Name: ${fullName}
Email: ${email}
Phone / WhatsApp: ${phone}
Location: ${location}
Service required: ${service}

Project details:
${details}
    `.trim();

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp directly in the same tab
    window.location.href = url;

    // (optional) if something fails before redirect, this would re-enable the button
    setIsSending(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="fullName" placeholder="Full name" required />
        <Input name="email" placeholder="Email" type="email" required />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input name="phone" placeholder="Phone / WhatsApp" required />
        <Input
          name="location"
          placeholder="Location in Dubai (community / building)"
        />
      </div>

      <Input
        name="service"
        placeholder="Service required (e.g. villa renovation, office fit out)"
      />

      <Textarea
        name="details"
        rows={5}
        placeholder="Describe your project, timeline and any special requirements."
      />

      <Button type="submit" className="rounded-2xl" disabled={isSending}>
        {isSending ? "Opening WhatsApp..." : "Submit & Send via WhatsApp"}
      </Button>

      <p className="text-xs text-muted-foreground">
        By submitting this form you consent to being contacted by phone,
        WhatsApp or email regarding your enquiry.
      </p>
    </form>
  );
}
