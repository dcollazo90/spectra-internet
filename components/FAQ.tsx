"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, business } from "@/lib/data";
import { IconPlus, IconMinus } from "./icons";

function Item({ q, a, open, onToggle }: { q:string; a:string; open:boolean; onToggle:()=>void }) {
  return (
    <div
      className={[
        "rounded-[20px] mb-[0.65rem] overflow-hidden border-[1.5px] transition-all duration-250",
        open
          ? "border-orange-500/22 shadow-[0_3px_18px_rgba(249,115,22,.08)]"
          : "border-gray-100",
      ].join(" ")}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-[1.4rem] py-[1.2rem] text-left"
      >
        <span className={`font-semibold text-[0.95rem] transition-colors duration-200 ${open ? "text-orange-500" : "text-gray-900"}`}>
          {q}
        </span>
        <span className={`w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 transition-all duration-250 ${open ? "bg-orange-500" : "bg-gray-100"}`}>
          {open
            ? <IconMinus className={`w-[13px] h-[13px] stroke-white`} />
            : <IconPlus  className={`w-[13px] h-[13px] stroke-gray-500`} />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4,0,0.2,1] }}
            className="overflow-hidden"
          >
            <p className="px-[1.4rem] pb-5 pt-[0.85rem] text-[0.875rem] text-gray-500 leading-[1.72] border-t border-orange-500/8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  function toggle(i: number) {
    setOpen(prev => prev === i ? null : i);
  }

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1160px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-orange-500">
            Preguntas frecuentes
          </span>
          <h2 className="font-bold text-gray-900 mt-3 mb-3 leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.75rem)" }}>
            Resolvemos tus <span className="grad-text">dudas</span>
          </h2>
          <p className="text-[1.05rem] text-gray-500">
            ¿Más preguntas? Llámanos al{" "}
            <a href={`tel:${business.phone}`} className="font-bold text-orange-500 hover:text-orange-dark transition-colors">
              {business.phone}
            </a>
          </p>
        </motion.div>

        <div className="max-w-[740px] mx-auto">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Item q={f.q} a={f.a} open={open === i} onToggle={() => toggle(i)} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
