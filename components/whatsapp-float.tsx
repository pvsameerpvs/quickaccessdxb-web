"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsappFloat() {
  const whatsappHref =
    "https://wa.me/971500000000?text=Hi%20QuickAccess%20DXB%2C%20I%27d%20like%20to%20book%20an%20appointment.";

  return (
    <motion.div
      className="fixed bottom-5 right-4 z-40"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      {/* <Link
        href={whatsappHref}
        target="_blank"
        className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-white shadow-lg md:text-sm"
      >
        <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
        <span className="hidden md:inline">Book on WhatsApp</span>
        <span className="md:hidden">Chat</span>
      </Link> */}
    </motion.div>
  );
}
