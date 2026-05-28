"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { business } from "@/lib/data";
import { IconMapPin, IconWhatsApp, IconPhone, IconChevronDown } from "./icons";

/* ─────────────────────────────────────────────
   Canvas: drifting nodes + connecting edges
   Optimised: skips pairs beyond maxDist early,
   uses a single path per frame for all edges.
───────────────────────────────────────────── */
function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
  const canvas = ref.current as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    type N = { x:number; y:number; vx:number; vy:number; r:number; a:number };
    let nodes: N[] = [];
    let W = 0, H = 0, raf = 0;

    const MAX_DIST = 160;
    const ORANGE = "249,115,22";

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      const count = Math.min(32, Math.round((W * H) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.8,
        a: Math.random() * 0.4 + 0.1,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);

      // Draw edges
      for (let i = 0; i < nodes.length - 1; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > MAX_DIST * MAX_DIST) continue;
          const alpha = (1 - Math.sqrt(d2) / MAX_DIST) * 0.09;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${ORANGE},${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // Draw & move nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ORANGE},${n.a})`;
        ctx.fill();
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      raf = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    tick();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
}

/* ─────────────────────────────────────────────
   Subtle parallax glow that follows cursor
───────────────────────────────────────────── */
function ParallaxGlow() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 25 });
  const sy = useSpring(my, { stiffness: 40, damping: 25 });
  const x  = useTransform(sx, v => `calc(-50% + ${v * 28}px)`);
  const y  = useTransform(sy, v => `calc(-50% + ${v * 18}px)`);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth  - 0.5));
      my.set((e.clientY / window.innerHeight - 0.5));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <>
      {/* Primary glow — tracks cursor */}
      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{ x, y, width: 700, height: 700, marginLeft: -350, marginTop: -350 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,.08) 0%, transparent 68%)" }}
        />
      </motion.div>

      {/* Secondary static glow — always behind headline */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          transform: "translate(-50%, -52%)",
          width: 480, height: 280,
          background: "radial-gradient(ellipse, rgba(249,115,22,.07) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "heroGlowPulse 6s ease-in-out infinite",
        }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   Signal rings — centred, very restrained
───────────────────────────────────────────── */
function SignalRings() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <span className="absolute top-1/2 left-1/2 w-[7px] h-[7px] rounded-full bg-orange-500/50" style={{ transform: "translate(-50%,-50%)" }} />
      {[0, 1, 2].map(i => (
        <span key={i} className="signal-ring" style={{ animationDelay: `${i * 1.3}s` }} />
      ))}
    </div>
  );
}

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-px">
    {[1,2,3,4,5].map(s => (
      <svg key={s} className={`w-[11px] h-[11px] ${s <= Math.round(n) ? "fill-orange-400" : "fill-gray-200"}`} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
);

export default function Hero() {
  const waUrl = `https://wa.me/${business.whatsapp}?text=${business.whatsappDefault}`;

  return (
    <section
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-16 text-center"
      style={{ background: "#f8f8f8" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      {/* Canvas network */}
      <NetworkCanvas />

      {/* Parallax glow */}
      <ParallaxGlow />

      {/* Signal rings */}
      <SignalRings />

      {/* ── Content wrapper — subtle float on entry ── */}
      <motion.div
        className="relative z-10 max-w-[700px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-7 rounded-full bg-white border border-gray-200/80 shadow-[0_1px_6px_rgba(0,0,0,.05)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-blink shrink-0" />
          <span className="text-[0.67rem] font-semibold tracking-[0.07em] uppercase text-gray-500">
            Proveedor local en Ponce, PR · Desde 2016
          </span>
        </motion.div>

        {/* Headline — floats up with stagger */}
        <div className="overflow-hidden mb-5">
          <motion.h1
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0,  opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-[1.05] tracking-[-0.04em] text-gray-900"
            style={{ fontSize: "clamp(2.5rem, 7vw, 4.75rem)" }}
          >
            Internet rápido y<br />
            confiable para{" "}
            <span className="relative inline-block">
              <span className="grad-text">Ponce.</span>
              {/* Subtle underline glow */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full opacity-50"
                style={{ background: "linear-gradient(90deg, #f97316, #fb923c)" }}
              />
            </span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="text-[1rem] text-gray-500 leading-[1.68] max-w-[440px] mx-auto mb-9 font-light"
        >
          Planes para hogares y negocios en Ponce.
          Sin contrato, sin cargos ocultos, con técnicos locales.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.45, delay: 0.36 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-10"
        >
          <a
            href="#cobertura"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-dark text-white font-semibold text-[0.85rem] tracking-[-0.01em] shadow-[0_2px_12px_rgba(249,115,22,.3)] hover:shadow-[0_4px_20px_rgba(249,115,22,.35)] transition-all duration-200 hover:-translate-y-px w-full sm:w-auto justify-center"
          >
            <IconMapPin className="w-3.5 h-3.5 shrink-0" />
            Verificar cobertura
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111] hover:bg-[#222] text-white font-semibold text-[0.85rem] tracking-[-0.01em] shadow-[0_2px_12px_rgba(0,0,0,.18)] hover:shadow-[0_4px_20px_rgba(0,0,0,.22)] transition-all duration-200 hover:-translate-y-px w-full sm:w-auto justify-center"
          >
            <IconWhatsApp className="w-3.5 h-3.5 shrink-0" />
            Escribir por WhatsApp
          </a>

          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-gray-400 hover:text-gray-600 transition-colors"
          >
            <IconPhone className="w-3 h-3 shrink-0" />
            {business.phone}
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-[0.75rem] text-gray-400"
        >
          <Stars n={business.rating} />
          <span className="font-semibold text-gray-600">{business.rating}</span>
          <span className="text-gray-300">·</span>
          <span>{business.reviews} reseñas en Google Maps</span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-25 pointer-events-none">
        <IconChevronDown className="w-3.5 h-3.5 stroke-gray-500 animate-bounce-y" />
      </div>

      {/* Keyframe for secondary glow pulse */}
      <style>{`
        @keyframes heroGlowPulse {
          0%,100% { opacity: .55; transform: translate(-50%,-52%) scale(1); }
          50%      { opacity: .85; transform: translate(-50%,-52%) scale(1.06); }
        }
      `}</style>
    </section>
  );
}
