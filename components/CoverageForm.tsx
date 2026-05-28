"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { business, pueblos } from "@/lib/data";
import { IconMapPin, IconCheckCircle, IconLoader } from "./icons";

export default function CoverageForm() {
  const [form,      setForm]      = useState({ nombre:"", telefono:"", pueblo:"", direccion:"" });
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const valid = !!(form.nombre.trim() && form.telefono.trim() && form.pueblo && form.direccion.trim());

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1600);
  }

  const inputCls = "w-full px-4 py-[0.8rem] bg-gray-50 border-[1.5px] border-gray-200 rounded-[12px] text-[0.875rem] text-gray-900 placeholder-gray-400 font-sans transition-all duration-200 focus:outline-none focus:border-orange-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(249,115,22,.1)]";

  return (
    <section id="cobertura" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* ── Left info ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-orange-500">
              Verificación por dirección
            </span>
            <h2 className="font-bold text-gray-900 mt-3 leading-[1.1] tracking-[-0.03em]"
                style={{ fontSize: "clamp(1.9rem,3.5vw,2.75rem)" }}>
              Verificamos disponibilidad <span className="grad-text">por dirección</span>
            </h2>
            <div className="w-10 h-[3px] bg-orange-500 rounded-full my-[0.9rem]" />
            <p className="text-[1rem] text-gray-500 leading-[1.7] mb-8">
              Verificamos disponibilidad por dirección exacta. La disponibilidad puede variar
              según ubicación, línea de vista y condiciones de instalación. Un agente local
              te confirma en menos de 24 horas.
            </p>

            {[
              { icon: "📍", title: "Verificación por dirección exacta", desc: "La disponibilidad depende de tu ubicación, línea de vista y condiciones del terreno." },
              { icon: "📞", title: "Te llamamos nosotros",               desc: "Un técnico local evalúa tu caso y te confirma directamente."                          },
              { icon: "✅", title: "Sin compromiso",                     desc: "Verificar no te obliga a contratar. Sin costos por consulta."                          },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.1 }}
                className="flex items-start gap-[0.875rem] mb-6"
              >
                <span className="w-[38px] h-[38px] bg-orange-500/7 rounded-[12px] flex items-center justify-center text-[1.15rem] shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[0.875rem] font-bold text-gray-900 mb-[0.2rem]">{item.title}</p>
                  <p className="text-[0.82rem] text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="mt-6 px-5 py-4 bg-gray-50 rounded-[14px] border-[1.5px] border-gray-100">
              <p className="text-[0.85rem] text-gray-500">
                ¿Prefieres llamar directo?{" "}
                <a href={`tel:${business.phone}`} className="font-bold text-orange-500 hover:text-orange-dark transition-colors">
                  {business.phone}
                </a>
              </p>
            </div>
          </motion.div>

          {/* ── Form card ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl border-[1.5px] border-gray-100 overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,.08)]">
              {/* Accent bar */}
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-300" />

              <div className="p-9 md:p-10">
                {/* Card header */}
                <div className="flex items-center gap-[0.85rem] mb-7">
                  <span className="w-[42px] h-[42px] bg-orange-500 rounded-[13px] flex items-center justify-center shrink-0">
                    <IconMapPin className="w-5 h-5 stroke-white" />
                  </span>
                  <div>
                    <p className="font-bold text-[1.15rem] text-gray-900">Verificar cobertura</p>
                    <p className="text-[0.75rem] text-gray-400 mt-[0.15rem]">Verificación por dirección · Sin compromiso</p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -12 }}
                    >
                      <div className="grid grid-cols-2 gap-[0.85rem] mb-[0.85rem]">
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-[0.62rem] font-bold tracking-[.12em] uppercase text-gray-400 mb-[0.4rem]">
                            Nombre completo
                          </label>
                          <input className={inputCls} name="nombre" value={form.nombre} onChange={onChange} placeholder="Tu nombre" required />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-[0.62rem] font-bold tracking-[.12em] uppercase text-gray-400 mb-[0.4rem]">
                            Teléfono
                          </label>
                          <input className={inputCls} name="telefono" value={form.telefono} onChange={onChange} type="tel" placeholder="787-000-0000" required />
                        </div>
                      </div>

                      <div className="mb-[0.85rem]">
                        <label className="block text-[0.62rem] font-bold tracking-[.12em] uppercase text-gray-400 mb-[0.4rem]">
                          Pueblo / Municipio
                        </label>
                        <select
                          className={inputCls + " appearance-none cursor-pointer"}
                          name="pueblo"
                          value={form.pueblo}
                          onChange={onChange}
                          required
                          style={{ backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundRepeat:"no-repeat", backgroundPosition:"right .75rem center", backgroundSize:"16px", paddingRight:"2.5rem" }}
                        >
                          <option value="">Selecciona tu municipio</option>
                          {pueblos.map(p => <option key={p}>{p}</option>)}
                        </select>
                      </div>

                      <div className="mb-[1rem]">
                        <label className="block text-[0.62rem] font-bold tracking-[.12em] uppercase text-gray-400 mb-[0.4rem]">
                          Dirección física
                        </label>
                        <input className={inputCls} name="direccion" value={form.direccion} onChange={onChange} placeholder="Calle, número, urb., sector..." required />
                      </div>

                      <button
                        type="submit"
                        disabled={!valid || loading}
                        className="w-full flex items-center justify-center gap-2 py-[0.95rem] bg-orange-500 disabled:bg-gray-200 hover:bg-orange-dark text-white disabled:text-gray-400 font-bold rounded-[14px] text-[0.9rem] transition-all duration-200 hover:shadow-orange-md hover:-translate-y-px disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none font-sans"
                      >
                        {loading
                          ? <><IconLoader className="w-4 h-4 animate-spin" /> Verificando...</>
                          : <><IconMapPin className="w-[15px] h-[15px]" /> Verificar disponibilidad</>
                        }
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95, y: 16 }}
                      animate={{ opacity: 1, scale: 1,    y: 0  }}
                      className="py-12 flex flex-col items-center text-center"
                    >
                      <span className="w-[58px] h-[58px] bg-green-50 rounded-full flex items-center justify-center mb-5">
                        <IconCheckCircle className="w-7 h-7 stroke-green-500" />
                      </span>
                      <h3 className="font-bold text-[1.3rem] text-gray-900 mb-2">¡Recibimos tu solicitud!</h3>
                      <p className="text-[0.875rem] text-gray-500 leading-[1.65] max-w-[290px] mb-5">
                        Un técnico de Spectra Networks evaluará la disponibilidad para tu dirección
                        y te contactará en menos de 24 horas.
                      </p>
                      <a href={`tel:${business.phone}`} className="text-[0.875rem] font-bold text-orange-500 hover:text-orange-dark transition-colors">
                        O llama ahora: {business.phone}
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
