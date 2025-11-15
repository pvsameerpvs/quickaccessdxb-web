"use client";

import { Headset } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function SupportPill() {
  return (
    <Dialog>
      {/* Floating pill */}
      <div className="fixed bottom-6 right-4 z-[9999]">
        <DialogTrigger asChild>
          <button className="flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-medium shadow-lg ring-1 ring-border hover:bg-accent md:text-sm">
            <Headset className="h-4 w-4 text-primary" />
            <span>Support</span>
          </button>
        </DialogTrigger>
      </div>

      {/* Dialog content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How can we help?</DialogTitle>
          <DialogDescription>
            Share a few details and our team will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-3">
          <Input placeholder="Your name" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Phone / WhatsApp" />
          <Textarea
            rows={4}
            placeholder="Tell us about your project or issue"
          />
          <Button className="w-full rounded-2xl" type="submit">
            Submit Support Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
