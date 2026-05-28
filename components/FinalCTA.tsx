"use client";

import { motion } from "framer-motion";
import { business } from "@/lib/data";
import { IconMapPin, IconWhatsApp, IconPhone } from "./icons";

export default function FinalCTA() {
  const waUrl = `https://wa.me/${business.whatsapp}?text=${business.whatsappDefault}`;

  return (
    <>
      {/* ── Final CTA ── */}
      <section
        id="contacto"
        className="py-24 md:py-32 text-center relative overflow-hidden dot-grid-dark"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,.18) 0%, transparent 55%)," +
            "#080808",
        }}
      >
        {/* Glow */}
        <div
          className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(249,115,22,.22), transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="max-w-[1160px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-[0.3rem] mb-7 rounded-full bg-orange-500/10 border border-orange-500/22">
              <span className="w-[7px] h-[7px] rounded-full bg-orange-400 animate-blink" />
              <span className="text-[0.63rem] font-bold tracking-[.15em] uppercase text-orange-400">
                Servicio disponible en Ponce, PR
              </span>
            </div>

            <h2 className="font-bold text-white mb-4 leading-[1.1] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)" }}>
              Conecta tu hogar o<br />negocio con Spectra.
            </h2>
            <p className="text-[1.05rem] text-white/40 mb-12">
              Verificación de cobertura gratis. Sin compromiso.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#cobertura"
                className="inline-flex items-center gap-2 px-7 py-[0.9rem] bg-orange-500 hover:bg-orange-dark text-white font-bold rounded-[14px] text-[0.9rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-md"
              >
                <IconMapPin className="w-[15px] h-[15px]" />
                Verificar cobertura
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-[0.9rem] bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-[14px] text-[0.9rem] transition-all duration-200 hover:-translate-y-0.5"
              >
                <IconWhatsApp className="w-[15px] h-[15px]" />
                WhatsApp
              </a>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center gap-2 px-7 py-[0.9rem] bg-white/7 hover:bg-white/12 border-[1.5px] border-white/12 hover:border-white/22 text-white font-bold rounded-[14px] text-[0.9rem] transition-all duration-200 hover:-translate-y-0.5"
              >
                <IconPhone className="w-[15px] h-[15px]" />
                {business.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#050505] border-t border-white/6 pt-14 pb-7">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Brand */}
            <div>
              {/* Logo SVG — versión footer (fondo oscuro, color naranja original) */}
              <div className="mb-[0.75rem]">
                <svg
                  viewBox="0 0 900 300"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-auto"
                  aria-label="Spectra Networks"
                  role="img"
                >
                  <g transform="translate(120, 60)">
                    <path d="M 6 90 A 82 82 0 0 1 6 10"   fill="none" stroke="#E85D0A" strokeWidth="10" strokeLinecap="round"/>
                    <path d="M 26 72 A 48 48 0 0 1 26 28"  fill="none" stroke="#E85D0A" strokeWidth="10" strokeLinecap="round"/>
                    <text x="64" y="68" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="44" fill="#E85D0A" textAnchor="middle">S</text>
                    <path d="M 102 28 A 48 48 0 0 1 102 72" fill="none" stroke="#E85D0A" strokeWidth="10" strokeLinecap="round"/>
                    <path d="M 122 10 A 82 82 0 0 1 122 90" fill="none" stroke="#E85D0A" strokeWidth="10" strokeLinecap="round"/>
                  </g>
                  <text x="290" y="136" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="80" fill="#E85D0A" letterSpacing="-2">SPECTRA</text>
                  <text x="294" y="200" fontFamily="'Inter', sans-serif" fontWeight="400" fontSize="36" fill="#E85D0A" letterSpacing="16">NETWORKS</text>
                </svg>
              </div>
              <p className="text-[0.82rem] text-white/30 leading-[1.7] max-w-[260px]">
                Internet rápido y confiable para hogares y negocios en Ponce, Puerto Rico. Sirviendo la comunidad desde {business.founded}.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-[0.62rem] font-bold tracking-[.18em] uppercase text-white/30 mb-4">Navegación</p>
              <ul className="space-y-2">
                {["#planes|Planes","#cobertura|Cobertura","#tecnologia|Tecnología","#negocios|Negocios"].map(item => {
                  const [href, label] = item.split("|");
                  return (
                    <li key={href}>
                      <a href={href} className="text-[0.84rem] text-white/40 hover:text-orange-400 transition-colors duration-200">{label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[0.62rem] font-bold tracking-[.18em] uppercase text-white/30 mb-4">Contacto</p>
              <div className="space-y-[0.6rem]">
                <a href={`tel:${business.phone}`} className="flex items-center gap-[0.55rem] text-[0.84rem] text-white/40 hover:text-orange-400 transition-colors duration-200">
                  <IconPhone className="w-[14px] h-[14px] shrink-0" />
                  {business.phone}
                </a>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[0.55rem] text-[0.84rem] text-white/40 hover:text-orange-400 transition-colors duration-200">
                  <IconWhatsApp className="w-[14px] h-[14px] shrink-0" />
                  WhatsApp
                </a>
                <p className="flex items-start gap-[0.55rem] text-[0.84rem] text-white/40">
                  <IconMapPin className="w-[14px] h-[14px] shrink-0 mt-[0.1rem]" />
                  {business.address}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-3 pt-7 border-t border-white/6">
            <p className="text-[0.74rem] text-white/20">© {new Date().getFullYear()} Spectra Networks. Todos los derechos reservados.</p>
            <p className="text-[0.74rem] text-white/20">Ponce, Puerto Rico · Servicio local desde {business.founded}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
