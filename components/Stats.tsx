"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const ref   = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const start    = value > 100 ? value - 200 : 0;
    const duration = 1800;
    let startTime: number | null = null;

    function step(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      const current  = start + (value - start) * ease;
      setDisplay(decimals ? current.toFixed(decimals) : String(Math.floor(current)));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(decimals ? value.toFixed(decimals) : String(value));
    }
    requestAnimationFrame(step);
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-white border-b border-gray-100 py-[4.5rem]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="font-bold grad-text mb-[0.35rem] leading-none tracking-[-0.04em]"
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
              >
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className="text-[0.8rem] font-medium text-gray-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
