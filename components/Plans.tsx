"use client";

import { motion } from "framer-motion";
import { plans, business } from "@/lib/data";
import { IconZap, IconCheck, IconWhatsApp } from "./icons";

const tagStyles: Record<string, string> = {
  basic:   "bg-gray-100 text-gray-500",
  popular: "bg-orange-500 text-white",
  biz:     "bg-orange-500/10 text-orange-500 border border-orange-500/20",
};

export default function Plans() {
  return (
    <section id="planes" className="py-24 md:py-32 dot-grid" style={{ background: "#f5f5f5" }}>
      <div className="max-w-[1160px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-orange-500">
            Planes de Internet
          </span>
          <h2 className="font-bold text-gray-900 mt-3 mb-3 leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.75rem)" }}>
            Simple. Transparente. <span className="grad-text">Sin letra pequeña.</span>
          </h2>
          <p className="text-[1.05rem] text-gray-500 leading-[1.7] max-w-[480px] mx-auto">
            Elige el plan ideal para tu hogar o negocio. Sin contratos, sin penalidades, sin letra pequeña.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const dark = plan.featured;
            const waUrl = plan.ctaHref === "wa"
              ? `https://wa.me/${business.whatsapp}?text=${business.whatsappBP}`
              : plan.ctaHref;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={plan.featured
                  ? { scale: 1.025, y: -5 }
                  : { y: -5 }}
                className={[
                  "relative rounded-3xl p-8 overflow-hidden transition-shadow duration-300",
                  dark
                    ? "bg-[#0b0b0b] shadow-[0_24px_64px_rgba(0,0,0,.32)] scale-[1.025]"
                    : "bg-white border-[1.5px] border-gray-100 hover:border-orange-500/18 hover:shadow-hover",
                ].join(" ")}
              >
                {/* Featured top line */}
                {dark && <div className="plan-featured-line" />}

                {/* Tag */}
                <span className={`inline-block text-[0.62rem] font-extrabold tracking-[.12em] uppercase px-[0.7rem] py-[0.25rem] rounded-full mb-5 ${tagStyles[plan.tagStyle]}`}>
                  {plan.tag}
                </span>

                {/* Name row */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`w-8 h-8 rounded-[10px] flex items-center justify-center ${dark ? "bg-orange-500" : "bg-orange-500/8"}`}>
                    <IconZap className={`w-4 h-4 ${dark ? "text-white" : "text-orange-500"}`} />
                  </span>
                  <h3 className={`font-semibold text-[1.15rem] ${dark ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-1.5">
                  <span className={`text-[0.72rem] font-medium mb-[0.22rem] ${dark ? "text-white/35" : "text-gray-400"}`}>
                    {plan.priceLabel}
                  </span>
                  <span className={`font-bold leading-none tracking-[-0.03em] ${dark ? "text-white" : "text-gray-900"} ${plan.price === "Consultar" ? "text-[2rem]" : "text-[2.8rem]"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-[0.78rem] mb-[0.3rem] ${dark ? "text-white/35" : "text-gray-400"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Speed */}
                <span className={`inline-block text-[0.78rem] font-bold px-[0.7rem] py-[0.2rem] rounded-[8px] mb-[0.9rem] ${dark ? "bg-orange-500/14 text-orange-400" : "bg-orange-500/7 text-orange-700"}`}>
                  {plan.speed}
                </span>

                {/* Desc */}
                <p className={`text-[0.83rem] leading-[1.6] mb-6 ${dark ? "text-white/40" : "text-gray-500"}`}>
                  {plan.desc}
                </p>

                {/* Features */}
                <ul className="space-y-[0.65rem] mb-7">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-[0.65rem]">
                      <span className={`w-[17px] h-[17px] rounded-full flex items-center justify-center shrink-0 mt-[0.1rem] ${dark ? "bg-orange-500/15" : "bg-green-500/10"}`}>
                        <IconCheck className={`w-[9px] h-[9px] ${dark ? "stroke-orange-400" : "stroke-green-600"}`} />
                      </span>
                      <span className={`text-[0.82rem] ${dark ? "text-white/70" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.ctaHref === "wa" ? (
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-[0.875rem] rounded-[14px] text-[0.875rem] font-bold transition-all duration-200 ${dark ? "bg-orange-500 hover:bg-orange-dark text-white hover:shadow-orange-lg" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
                  >
                    <IconWhatsApp className="w-[14px] h-[14px]" />
                    {plan.cta}
                  </a>
                ) : (
                  <a
                    href={waUrl}
                    className={`flex items-center justify-center w-full py-[0.875rem] rounded-[14px] text-[0.875rem] font-bold transition-all duration-200 ${dark ? "bg-orange-500 hover:bg-orange-dark text-white hover:shadow-orange-lg" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
                  >
                    {plan.cta}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[0.78rem] text-gray-400 mt-8"
        >
          Todos los planes incluyen instalación gratis hasta 80 pies · Sin contrato · Sin penalidades
        </motion.p>
      </div>
    </section>
  );
}
