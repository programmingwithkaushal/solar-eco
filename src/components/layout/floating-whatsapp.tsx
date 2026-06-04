"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingWhatsApp() {
  // Use environment variable for WhatsApp Group Invite Code or Link
  const url = process.env.NEXT_PUBLIC_WHATSAPP_LINK || "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-foreground px-3 py-1.5 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us
          {/* Arrow */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-white"></span>
        </span>
      </Link>
    </motion.div>
  );
}
