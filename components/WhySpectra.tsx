"use client";

import { motion } from "framer-motion";
import { whyItems } from "@/lib/data";
import { iconMap } from "./icons";

export default function WhySpectra() {
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
            ¿Por qué Spectra?
          </span>
          <h2 className="font-bold text-gray-900 mt-3 mb-3 leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.75rem)" }}>
            Por qué nos eligen en <span className="grad-text">Ponce</span>
          </h2>
          <p className="text-[1.05rem] text-gray-500 leading-[1.7] max-w-[480px] mx-auto">
            Llevamos desde 2016 dando servicio en Ponce. Conocemos cada sector, cada calle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="why-card relative border-[1.5px] border-gray-100 hover:border-orange-500/18 rounded-3xl p-7 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,.08)] overflow-hidden group"
              >
                {/* Top hover line */}
                <div className="why-hover-line" />

                <span className="w-[46px] h-[46px] bg-orange-500/7 group-hover:bg-orange-500/12 rounded-[14px] flex items-center justify-center mb-[1.1rem] transition-colors duration-300">
                  {Icon && <Icon className="w-[22px] h-[22px] text-orange-500" />}
                </span>
                <h3 className="font-semibold text-[1rem] text-gray-900 mb-[0.45rem]">
                  {item.title}
                </h3>
                <p className="text-[0.83rem] text-gray-500 leading-[1.6]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
