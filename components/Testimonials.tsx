"use client";

import { motion } from "framer-motion";
import { testimonials, business } from "@/lib/data";
import { IconGoogle } from "./icons";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-[2px]">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-[13px] h-[13px] ${s <= n ? "fill-orange-400" : "fill-gray-200"}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-24 md:py-32 dot-grid"
      style={{ background: "#f5f5f5" }}
    >
      <div className="max-w-[1160px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-orange-500">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-bold text-gray-900 mt-3 mb-2 leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.75rem)" }}>
            {business.rating} estrellas en <span className="grad-text">Google</span>
          </h2>
          <p className="text-[1.05rem] text-gray-500">
            {business.reviews} reseñas verificadas de clientes reales en Ponce, PR
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border-[1.5px] border-gray-100 hover:border-orange-500/15 rounded-3xl p-6 flex flex-col transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,.09)]"
            >
              {/* Quote icon */}
              <svg className="w-[22px] h-[22px] fill-orange-100 mb-[0.85rem]" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <div className="mb-[0.9rem]"><Stars n={t.rating} /></div>

              <p className="text-[0.835rem] text-gray-600 leading-[1.65] flex-1 mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-[0.7rem] pt-4 border-t border-gray-100">
                <span className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-orange-200 to-orange-500 flex items-center justify-center text-[0.82rem] font-extrabold text-white shrink-0">
                  {t.name[0]}
                </span>
                <div>
                  <p className="text-[0.82rem] font-bold text-gray-900">{t.name}</p>
                  <p className="text-[0.72rem] text-gray-400">Ponce, PR</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            className="inline-flex items-center gap-3 px-6 py-[0.85rem] bg-white border-[1.5px] border-gray-200 hover:border-orange-500/25 hover:shadow-[0_4px_16px_rgba(0,0,0,.07)] rounded-[14px] text-[0.84rem] font-semibold text-gray-600 hover:text-gray-900 transition-all duration-200"
          >
            <IconGoogle className="w-5 h-5" />
            Ver todas las reseñas en Google Maps
          </motion.a>
        </div>

      </div>
    </section>
  );
}
