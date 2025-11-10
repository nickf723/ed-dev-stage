"use client";
import { useStage } from "./director/StageDirector";
import { motion } from "framer-motion";

export const BackgroundEmbellishments = () => {
  const { backgroundMode } = useStage();

  return (
    <div className="embellishment-layer">
      {backgroundMode === "aurora" && (
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

      {backgroundMode === "grid" && (
        <motion.div
          className="embellishment-lines"
          animate={{ backgroundPosition: ["0px 0px", "40px 40px", "0px 0px"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
};
