"use client";

import { motion } from "framer-motion";
import { trustItems } from "@/lib/data";

export default function TrustStrip() {
  return (
    <div className="bg-[#0e0e0e] py-3 overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center scrollbar-none overflow-x-auto"
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center shrink-0">
              <div className="flex items-center gap-2 px-5">
                {/* Minimal dot instead of icon circle — cleaner */}
                <span className="w-1 h-1 rounded-full bg-orange-500/70 shrink-0" />
                <span className="text-[0.68rem] font-medium text-white/40 whitespace-nowrap tracking-[0.03em]">
                  {item}
                </span>
              </div>
              {i < trustItems.length - 1 && (
                <div className="w-px h-3 bg-white/8 shrink-0" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
