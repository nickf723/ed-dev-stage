"use client";
import { useStage } from "./director/StageDirector";
import { motion } from "framer-motion";
import "@/app/styles/backgrounds.css";

export function BackgroundManager() {
  const { backgroundState } = useStage();
  const { color, pattern, particles, decor, animations } = backgroundState;

  return (
    <div className={`background-manager ${!animations ? "animations-paused" : ""}`}>
      {/* Layer 1: Base Color */}
      <div className={`background-layer bg-color-${color}`} />

      {/* Layer 2: Patterns */}
      <div className={`background-layer bg-pattern-${pattern}`} />

      {/* Layer 3: Particles */}
      <div className={`background-layer bg-particles-${particles}`} />

      {/* Layer 4: Decor (Embellishments) */}
      <div className="embellishment-layer">
        {decor === "aurora" && (
          <>
            <motion.div
              className="embellishment-light"
              animate={{
                x: ["-5%", "5%", "-5%"],
                y: ["5%", "-5%", "5%"],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="embellishment-light reverse"
              animate={{
                x: ["5%", "-5%", "5%"],
                y: ["-5%", "5%", "-5%"],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>
    </div>
  );
}