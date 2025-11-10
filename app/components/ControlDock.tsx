"use client";
import { motion } from "framer-motion";

export const ControlDock = () => {
  return (
    <motion.div
      className="control-dock"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
    >
      <div className="control-group">
        <button className="dock-button">⏺ Record</button>
        <button className="dock-button">▶ Play</button>
        <button className="dock-button">⏹ Stop</button>
        <button className="dock-button">⚙️</button>
      </div>
    </motion.div>
  );
};
