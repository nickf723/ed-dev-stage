// Replace tailwind.config.ts with this:

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Good to add this
  ],
  theme: {
    extend: {
      // Add the fontFamily definitions
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
      },
      animation: {
        animatedGrid: "animatedGrid 10s linear infinite",
        floatAround: "floatAround 90s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;