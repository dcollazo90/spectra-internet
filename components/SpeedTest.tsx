"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   SpeedTest — visual-only section, no engine, no API.
   CTA opens speedtest.net in a new tab.
───────────────────────────────────────────────────────────── */

/* Decorative SVG gauge — purely illustrative */
function Gauge() {
  const R       = 80;
  const CX      = 100;
  const CY      = 100;
  const START   = 215;
  const END     = 325;
  const SWEEP   = END - START;

  function polar(deg: number, r = R) {
    const rad = (deg * Math.PI) / 180;
    return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
  }

  function arcPath(startDeg: number, endDeg: number, r = R) {
    const s = polar(startDeg, r);
    const e = polar(endDeg, r);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
  }

  const ticks = Array.from({ length: 11 }, (_, i) => {
    const deg   = START + (SWEEP / 10) * i;
    const inner = polar(deg, R - 10);
    const outer = polar(deg, R - 2);
    return { inner, outer, major: i % 5 === 0 };
  });

  const NEEDLE_DEG = START + SWEEP * 0.6;
  const needleTip  = polar(NEEDLE_DEG, R - 14);
  const needleBase = polar(NEEDLE_DEG + 180, 10);

  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full max-w-[260px] mx-auto"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Indicador de velocidad ilustrativo"
      role="img"
    >
      <defs>
        <filter id="gaugeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="needleGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#f97316" stopOpacity="0.3"/>
          <stop offset="60%"  stopColor="#f97316" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0.5"/>
        </linearGradient>
      </defs>

      {/* Track */}
      <path
        d={arcPath(START, END)}
        fill="none"
        stroke="rgba(255,255,255,.08)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Animated progress arc */}
      <motion.path
        d={arcPath(START, START + SWEEP * 0.6)}
        fill="none"
        stroke="url(#arcGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        filter="url(#gaugeGlow)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Tick marks */}
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t.outer.x} y1={t.outer.y}
          x2={t.inner.x} y2={t.inner.y}
          stroke={t.major ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.14)"}
          strokeWidth={t.major ? 1.5 : 1}
          strokeLinecap="round"
        />
      ))}

      {/* Needle */}
      <motion.line
        x1={needleBase.x} y1={needleBase.y}
        x2={needleTip.x}  y2={needleTip.y}
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#needleGlow)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.2 }}
      />

      {/* Pivot */}
      <circle cx={CX} cy={CY} r="5"   fill="#f97316" opacity="0.9"/>
      <circle cx={CX} cy={CY} r="2.5" fill="rgba(255,255,255,.6)"/>

      {/* Centre label */}
      <text
        x={CX} y={CY + 28}
        textAnchor="middle"
        fontSize="11"
        fill="rgba(255,255,255,.35)"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
      >
        Mbps
      </text>

      {/* Range labels */}
      <text x="28"  y="158" fontSize="8" fill="rgba(255,255,255,.2)" fontFamily="Inter, sans-serif">0</text>
      <text x="163" y="158" fontSize="8" fill="rgba(255,255,255,.2)" fontFamily="Inter, sans-serif">100</text>
    </motion.svg>
  );
}

/* Metric chip */
function MetricChip({
  label,
  value,
  unit,
  delay,
}: {
  label: string;
  value: string;
  unit: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-1.5 px-5 py-4 rounded-2xl border border-white/[0.07] flex-1"
      style={{ background: "rgba(255,255,255,.04)" }}
    >
      <div className="flex items-baseline gap-1">
        <span
          className="font-bold text-white leading-none tracking-[-0.03em]"
          style={{ fontSize: "1.6rem" }}
        >
          {value}
        </span>
        <span className="text-[0.65rem] text-white/35 font-medium">{unit}</span>
      </div>
      <div className="w-6 h-px bg-orange-500/30" />
      <span className="text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-white/35">
        {label}
      </span>
    </motion.div>
  );
}

export default function SpeedTest() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      id="velocidad"
      className="py-24 md:py-32 relative overflow-hidden dot-grid-dark"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,.13) 0%, transparent 55%)," +
          "radial-gradient(ellipse at 10% 100%, rgba(249,115,22,.07) 0%, transparent 50%)," +
          "#0a0a0a",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(249,115,22,.16) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div className="max-w-[1160px] mx-auto px-5 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-orange-400 mb-3 block">
            Diagnóstico
          </span>
          <h2
            className="font-bold text-white leading-[1.08] tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
          >
            Prueba tu <span className="grad-text">velocidad</span>
          </h2>
          <p className="text-[1rem] text-white/40 leading-[1.65] max-w-[420px] mx-auto font-light">
            Verifica la velocidad actual de tu conexión en segundos.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[540px] mx-auto rounded-3xl overflow-hidden border border-white/[0.07]"
          style={{ background: "rgba(255,255,255,.035)" }}
        >
          {/* Top accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

          <div className="px-8 pt-10 pb-8">

            <Gauge />

            {/* Metrics */}
            <div className="flex gap-3 mt-8 mb-8">
              <MetricChip label="Descarga" value="—" unit="Mbps" delay={0.35} />
              <MetricChip label="Subida"   value="—" unit="Mbps" delay={0.45} />
              <MetricChip label="Ping"     value="—" unit="ms"   delay={0.55} />
            </div>

            {/* CTA */}
            <motion.a
              href="https://www.speedtest.net"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.65 }}
              whileHover={{ y: -1 }}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-dark text-white font-semibold text-[0.875rem] tracking-[-0.01em] transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,.25)] hover:shadow-[0_6px_28px_rgba(249,115,22,.35)]"
            >
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Realizar prueba de velocidad
            </motion.a>

            {/* Fine print */}
            <p className="text-center text-[0.67rem] text-white/25 mt-3 leading-[1.5]">
              La prueba se abrirá en Speedtest.net para resultados precisos.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
