"use client";

import { motion } from "framer-motion";
import { bizFeatures, business } from "@/lib/data";
import { IconWhatsApp, IconPhone } from "./icons";

export default function Business() {
  const waUrl = `https://wa.me/${business.whatsapp}?text=${business.whatsappBiz}`;

  return (
    <section
      id="negocios"
      className="py-24 md:py-32 relative overflow-hidden dot-grid-dark"
      style={{
        background:
          "radial-gradient(ellipse at 50% -10%, rgba(249,115,22,.18) 0%, transparent 55%)," +
          "radial-gradient(ellipse at 85% 110%, rgba(249,115,22,.1) 0%, transparent 50%)," +
          "#080808",
      }}
    >
      {/* Top glow blob */}
      <div
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(249,115,22,.2), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-orange-400">
            Para Negocios
          </span>
          <h2 className="font-bold text-white mt-3 mb-3 leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.75rem)" }}>
            Soluciones para tu <span className="grad-text">Negocio</span>
          </h2>
          <p className="text-[1.05rem] text-white/45 leading-[1.7] max-w-[500px] mx-auto">
            Desde pequeños comercios hasta empresas medianas, Spectra ofrece conectividad con el soporte que tu operación necesita.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {bizFeatures.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-[20px] p-6 transition-all duration-300"
            >
              <div className="w-[34px] h-[34px] bg-orange-500/10 rounded-[10px] flex items-center justify-center mb-[0.9rem]">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
              </div>
              <h3 className="font-semibold text-[0.9rem] text-white mb-[0.35rem]">{feat.title}</h3>
              <p className="text-[0.79rem] text-white/40 leading-[1.55]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-6 rounded-3xl px-8 md:px-12 py-10 border border-orange-500/16"
          style={{ background: "rgba(255,255,255,.04)" }}
        >
          <div>
            <h3 className="font-bold text-white text-[1.6rem] mb-[0.4rem]">
              ¿Listo para conectar tu negocio?
            </h3>
            <p className="text-[0.9rem] text-white/40">
              Habla con nuestro equipo y recibe una propuesta personalizada.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-[0.85rem] bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-[14px] text-[0.875rem] transition-all duration-200 hover:-translate-y-0.5"
            >
              <IconWhatsApp className="w-[15px] h-[15px]" />
              WhatsApp
            </a>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 px-6 py-[0.85rem] bg-orange-500 hover:bg-orange-dark text-white font-bold rounded-[14px] text-[0.875rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-lg"
            >
              <IconPhone className="w-[15px] h-[15px]" />
              Llamar ahora
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
