"use client";

import { motion } from "framer-motion";
import { techCards, diagNodes } from "@/lib/data";
import { iconMap, IconZap, IconWifi } from "./icons";

function Diagram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75 }}
      className="relative w-full max-w-[420px] aspect-square mx-auto"
    >
      {/* Dashed orbit rings */}
      {[130, 210, 300].map((size, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full border-[1.5px] border-dashed border-orange-500/22"
          style={{ width: size, height: size, marginLeft: -size/2, marginTop: -size/2, opacity: 1 - i * 0.22 }}
        />
      ))}

      {/* Center node */}
      <div className="absolute top-1/2 left-1/2 z-10" style={{ transform:"translate(-50%,-50%)" }}>
        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[68px] h-[68px] bg-orange-500 rounded-[18px] flex items-center justify-center shadow-[0_8px_30px_rgba(249,115,22,.4)]"
        >
          <IconZap className="w-8 h-8 text-white" />
        </motion.div>
        <p className="text-center text-[0.68rem] font-bold text-gray-600 mt-[0.35rem] whitespace-nowrap">Red de Fibra</p>
      </div>

      {/* Pulse rings from center */}
      <div className="absolute top-1/2 left-1/2 w-[1px] h-[1px] pointer-events-none">
        <div className="diag-pulse-ring" style={{ width:40, height:40 }} />
        <div className="diag-pulse-ring" style={{ width:40, height:40 }} />
      </div>

      {/* Satellite nodes */}
      {diagNodes.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 + 0.4, type: "spring", stiffness: 260, damping: 22 }}
          className="absolute flex flex-col items-center gap-[0.3rem]"
          style={{ left: n.left, top: n.top, transform: "translate(-50%,-50%)" }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            className="w-[46px] h-[46px] bg-white rounded-[14px] flex items-center justify-center shadow-[0_4px_18px_rgba(0,0,0,.1)] border border-orange-500/12"
          >
            <IconWifi className="w-5 h-5 text-orange-500" />
          </motion.div>
          <span className="text-[0.62rem] font-semibold text-gray-500 whitespace-nowrap">{n.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function TechSection() {
  return (
    <section
      id="tecnologia"
      className="py-24 md:py-32 dot-grid relative overflow-hidden"
      style={{ background: "#f5f5f5" }}
    >
      {/* Ambient glow right */}
      <div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Diagram */}
          <Diagram />

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-orange-500">
                Nuestra Tecnología
              </span>
              <h2 className="font-bold text-gray-900 mt-3 mb-3 leading-[1.1] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(1.9rem,3.5vw,2.75rem)" }}>
                Tecnología diseñada para <span className="grad-text">Puerto Rico</span>
              </h2>
              <p className="text-[1.05rem] text-gray-500 leading-[1.7] max-w-[520px]">
                Combinamos fibra óptica con transmisores inalámbricos de última generación para llevarte conectividad premium a donde estés.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {techCards.map((card, i) => {
                const Icon = iconMap[card.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                    whileHover={{ y: -2 }}
                    className="bg-white border-[1.5px] border-gray-100 hover:border-orange-500/20 rounded-[20px] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,.08)] group"
                  >
                    <span className="w-[42px] h-[42px] bg-orange-500/7 group-hover:bg-orange-500/12 rounded-[13px] flex items-center justify-center mb-4 transition-colors duration-300">
                      {Icon && <Icon className="w-5 h-5 text-orange-500" />}
                    </span>
                    <h3 className="font-semibold text-[0.95rem] text-gray-900 mb-[0.4rem]">{card.title}</h3>
                    <p className="text-[0.8rem] text-gray-500 leading-[1.6]">{card.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
