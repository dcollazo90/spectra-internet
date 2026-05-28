import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        orange: {
          DEFAULT: "#f97316",
          dark:    "#ea580c",
          50:      "#fff7ed",
          400:     "#fb923c",
          300:     "#fdba74",
          200:     "#fed7aa",
        },
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "22px",
      },
      boxShadow: {
        card:        "0 1px 4px rgba(0,0,0,.06), 0 4px 24px rgba(0,0,0,.06)",
        hover:       "0 8px 32px rgba(0,0,0,.1)",
        "orange-sm": "0 4px 16px rgba(249,115,22,.2)",
        "orange-md": "0 8px 28px rgba(249,115,22,.22)",
        "orange-lg": "0 12px 36px rgba(249,115,22,.28)",
      },
      animation: {
        "glow-slow":  "glowBreathe 6s ease-in-out infinite",
        "blink":      "dotBlink 2.5s ease-in-out infinite",
        "bounce-y":   "arrowBounce 1.8s ease-in-out infinite",
        "float-y":    "floatY 4s ease-in-out infinite",
        "fab-ping":   "fabPing 3s ease-out infinite",
      },
      keyframes: {
        glowBreathe: { "0%,100%": { opacity: ".45" }, "50%": { opacity: ".75" } },
        dotBlink:    { "0%,100%": { opacity: ".4"  }, "50%": { opacity: "1"  } },
        arrowBounce: { "0%,100%": { transform: "translateY(0)"  }, "50%": { transform: "translateY(4px)" } },
        floatY:      { "0%,100%": { transform: "translateY(0)"  }, "50%": { transform: "translateY(-8px)" } },
        fabPing:     { "0%": { transform: "scale(1)", opacity: ".4" }, "100%": { transform: "scale(1.65)", opacity: "0" } },
      },
    },
  },
  plugins: [],
};

export default config;
