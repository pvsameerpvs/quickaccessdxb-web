// app/contact/ContactForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "971558177611"; // +971 558177611 in wa.me format

    const message = encodeURIComponent(
      [
        "New enquiry from QuickAccess DXB website:",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone}`,
        `Location: ${location}`,
        `Service required: ${service}`,
        "",
        `Project details:`,
        details || "N/A",
      ].join("\n")
    );

    // Open WhatsApp chat with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Full name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Phone / WhatsApp"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          placeholder="Location in Dubai (community / building)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <Input
        placeholder="Service required (e.g. villa renovation, office fit out)"
        value={service}
        onChange={(e) => setService(e.target.value)}
      />

      <Textarea
        rows={5}
        placeholder="Describe your project, timeline and any special requirements."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <Button type="submit" className="rounded-2xl bg-white text-[#FF8A1E]">
        Submit Request
      </Button>

      <p className="text-xs section-subtitle">
        By submitting this form you consent to being contacted by phone,
        WhatsApp or email regarding your enquiry.
      </p>
    </form>
  );
}
