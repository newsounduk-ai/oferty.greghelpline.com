import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_URL = 'https://wa.me/447491978400?text=' + encodeURIComponent(
  'Cześć Grzegorz! Chcę sprawdzić ofertę dla siebie.'
);

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Czatuj na WhatsApp z Grzegorzem"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center group cursor-pointer"
    >
      <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
      </span>

      <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />

      <span className="absolute right-full mr-3 bg-[#0B1F3A] text-white text-xs font-bold px-3 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none hidden sm:block">
        Napisz na WhatsApp po polsku
      </span>
    </motion.a>
  );
}
