import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      keyframes: {
        animatedGrid: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "50px 50px" },
        },
        floatAround: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: "0.15" },
          "25%": { transform: "translate(-15px, -20px)", opacity: "0.3" },
          "50%": { transform: "translate(20px, 10px)", opacity: "0.2" },
          "75%": { transform: "translate(-10px, 15px)", opacity: "0.3" },
        },
        "blob-float-1": {
          "0%": { transform: "translate(0px, 0px) scale(1)", opacity: "0.25" },
          "25%": { transform: "translate(15vw, -20vh) scale(1.1)", opacity: "0.35" },
          "50%": { transform: "translate(-20vw, 15vh) scale(0.95)", opacity: "0.2" },
          "75%": { transform: "translate(10vw, 10vh) scale(1.05)", opacity: "0.3" },
          "100%": { transform: "translate(0px, 0px) scale(1)", opacity: "0.25" },
        },
        "blob-float-2": {
          "0%": { transform: "translate(-5vw, -5vh) scale(1.1)", opacity: "0.2" },
          "25%": { transform: "translate(-20vw, 15vh) scale(1.1)", opacity: "0.35" },
          "30%": { transform: "translate(10vw, 10vh) scale(0.9)", opacity: "0.28" },
          "60%": { transform: "translate(-12vw, 20vh) scale(1.08)", opacity: "0.32" },
          "100%": { transform: "translate(-5vw, -5vh) scale(1.1)", opacity: "0.2" },
        },
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.02)", opacity: "0.9" },
        },
      },
      animation: {
        animatedGrid: "animatedGrid 10s linear infinite",
        floatAround: "floatAround 90s ease-in-out infinite",
        "blob-slow": "blob-float-1 24s ease-in-out infinite",
        "blob-medium": "blob-float-2 32s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;