"use client";

import { motion } from "framer-motion";
import { business } from "@/lib/data";
import { IconWhatsApp, IconPhone, IconMapPin } from "./icons";

export default function FloatingWidgets() {
  const waUrl = `https://wa.me/${business.whatsapp}?text=${business.whatsappDefault}`;

  return (
    <>
      {/* ── FAB WhatsApp — dark charcoal, green status dot ── */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 22 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
        className="fixed right-4 bottom-[3.75rem] md:bottom-5 z-[500] w-11 h-11 rounded-full bg-[#111] border border-white/[0.07] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,.32)] hover:bg-[#1a1a1a] hover:shadow-[0_8px_24px_rgba(0,0,0,.38)] transition-all duration-200"
      >
        <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-[#22c55e] border-[1.5px] border-[#111]" />
        <IconWhatsApp className="w-[18px] h-[18px] text-white relative z-10" />
      </motion.a>

      {/* ── Mobile sticky bar — ultra-slim glass strip ──
          h-11 = 44px total. Dividers instead of rounded buttons.
          Blurred glass so page content shows through lightly. ── */}
      <motion.div
        initial={{ y: 60 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 340, damping: 34 }}
        className="fixed bottom-0 inset-x-0 z-[490] md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* Glass surface */}
        <div className="bg-white/88 backdrop-blur-2xl border-t border-gray-200/60 shadow-[0_-1px_0_rgba(0,0,0,.04)]">
          <div className="flex items-stretch h-11 max-w-[480px] mx-auto divide-x divide-gray-200/50">

            <a
              href={`tel:${business.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 text-[0.68rem] font-semibold text-gray-600 active:bg-gray-100 transition-colors"
            >
              <IconPhone className="w-3 h-3 shrink-0" />
              Llamar
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-[0.68rem] font-semibold text-gray-700 active:bg-gray-100 transition-colors"
            >
              <IconWhatsApp className="w-3 h-3 shrink-0" />
              WhatsApp
            </a>

            {/* Primary — orange fill, slightly heavier weight */}
            <a
              href="#cobertura"
              className="flex-[1.2] flex items-center justify-center gap-1.5 text-[0.68rem] font-bold text-white bg-orange-500 active:bg-orange-dark transition-colors"
            >
              <IconMapPin className="w-3 h-3 shrink-0" />
              Ver cobertura
            </a>

          </div>
        </div>
      </motion.div>
    </>
  );
}
