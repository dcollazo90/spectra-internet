"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { business } from "@/lib/data";
import { IconZap, IconMenu, IconX } from "./icons";

const links = [
  { label: "Planes",     href: "#planes"     },
  { label: "Cobertura",  href: "#cobertura"  },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Negocios",   href: "#negocios"   },
  { label: "Contacto",   href: "#contacto"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={[
          "fixed top-0 inset-x-0 z-[999] transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,.06)] py-2.5"
            : "py-4",
        ].join(" ")}
      >
        <div className="max-w-[1160px] mx-auto px-5 lg:px-8 flex items-center justify-between h-9">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <span className="w-6 h-6 bg-orange-500/10 rounded-md flex items-center justify-center group-hover:bg-orange-500/15 transition-colors duration-150">
              <IconZap className="w-3.5 h-3.5 text-orange-500" />
            </span>
            <span className="font-semibold text-[0.875rem] tracking-[-0.02em] leading-none">
              <span className="text-gray-900">Spectra</span>
              <span className="text-orange-500"> Networks</span>
            </span>
          </a>

          {/* Desktop nav — centered, tight */}
          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[0.78rem] font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-black/[0.04] transition-all duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${business.phone}`}
              className="text-[0.75rem] font-medium text-gray-400 hover:text-gray-700 tabular-nums tracking-[-0.01em] transition-colors duration-150"
            >
              {business.phone}
            </a>

            {/* CTA — small pill, fills on hover via pseudo-element */}
            <a
              href="#cobertura"
              className="group relative overflow-hidden inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-orange-400/50 text-[0.73rem] font-semibold text-orange-600 hover:text-white transition-colors duration-200"
            >
              <span
                className="absolute inset-0 bg-orange-500 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-200 ease-out rounded-full"
              />
              <span className="relative flex items-center gap-1">
                <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="currentColor">
                  <circle cx="5" cy="5" r="2"/>
                </svg>
                Ver cobertura
              </span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors rounded-md hover:bg-black/[0.04]"
            aria-label="Menú"
          >
            {open ? <IconX className="w-4 h-4" /> : <IconMenu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mob"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{   opacity: 0, y: -4  }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed top-[54px] inset-x-0 z-[998] bg-white/98 backdrop-blur-xl border-b border-gray-100/80 shadow-[0_6px_24px_rgba(0,0,0,.07)] px-5 flex flex-col lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={close}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.035 }}
                className="py-2.5 text-[0.875rem] font-medium text-gray-700 border-b border-gray-100/60 last:border-0 hover:text-orange-500 transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <div className="flex gap-2 py-3">
              <a
                href={`tel:${business.phone}`}
                className="flex-1 text-center py-2 text-[0.75rem] font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Llamar
              </a>
              <a
                href="#cobertura"
                onClick={close}
                className="flex-1 text-center py-2 text-[0.75rem] font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-dark transition-colors"
              >
                Ver cobertura
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
