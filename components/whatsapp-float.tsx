"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function WhatsappFloat() {
  const whatsappHref =
    "https://wa.me/971558177611?text=Hi%20QuickAccess%20DXB%2C%20I%27d%20like%20to%20book%20an%20appointment.";

  return (
    <motion.div
      className="fixed bottom-5 right-4 z-40"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Link
        href={whatsappHref}
        target="_blank"
        className="flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg hover:bg-[#1ebe5d] transition"
      >
        {/* Official WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6"
          fill="currentColor"
        >
          <path d="M16.003 3.2c-7.045 0-12.8 5.703-12.8 12.72 0 2.24.586 4.416 1.706 6.336L3.2 28.8l6.72-1.754a12.73 12.73 0 006.08 1.546h.001c7.045 0 12.799-5.703 12.799-12.72.002-7.017-5.752-12.72-12.797-12.72zm7.52 17.92c-.32.896-1.857 1.76-2.56 1.824-.678.064-1.542.064-2.497-.16-.576-.128-1.313-.416-2.272-.832-3.993-1.728-6.592-5.76-6.784-6.016-.192-.256-1.6-2.133-1.6-4.074 0-1.942 1.017-2.901 1.376-3.302.358-.402.78-.502 1.04-.502.256 0 .512.002.734.014.237.012.554-.09.868.663.32.77 1.088 2.662 1.184 2.854.096.192.16.416.032.672-.128.256-.192.416-.384.64-.192.224-.403.5-.576.672-.192.192-.39.402-.167.79.224.384.995 1.635 2.137 2.64 1.472 1.28 2.72 1.69 3.104 1.882.384.192.608.16.832-.096.224-.256.96-1.12 1.216-1.502.256-.384.512-.32.864-.192.352.128 2.227 1.05 2.61 1.245.384.192.64.288.736.448.096.16.096.928-.224 1.824z" />
        </svg>
      </Link>
    </motion.div>
  );
}
