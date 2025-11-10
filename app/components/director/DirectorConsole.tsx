"use client";
import { useStage } from "./StageDirector";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const DirectorConsole = () => {
  const { execute, backgroundMode, elements } = useStage();
  const [open, setOpen] = useState(true);

  const handleCommand = (cmd: string) => {
    switch (cmd) {
      case "caption":
        execute({ type: "spawn", component: "caption", props: { text: "Let's solve for x." } });
        break;
      case "shape":
        execute({ type: "spawn", component: "shape", props: { color: "#51B93C" } });
        break;
      case "bg-aurora":
        execute({ type: "setBackground", mode: "aurora" });
        break;
      case "bg-grid":
        execute({ type: "setBackground", mode: "grid" });
        break;
      case "bg-stars":
        execute({ type: "setBackground", mode: "stars" });
        break;
      case "clear":
        execute({ type: "clear" });
        break;
    }
  };

  return (
    <motion.div
      className="director-console glass-panel"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="console-header" onClick={() => setOpen(!open)}>
        🎬 Stage Director
        <span className="text-xs text-white/40">{open ? "▼" : "▲"}</span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="console-body"
            className="console-body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="console-section">
              <h4>🎨 Backgrounds</h4>
              <div className="console-buttons">
                <button onClick={() => handleCommand("bg-aurora")}>Aurora</button>
                <button onClick={() => handleCommand("bg-grid")}>Grid</button>
                <button onClick={() => handleCommand("bg-stars")}>Stars</button>
              </div>
            </div>

            <div className="console-section">
              <h4>📦 Spawn</h4>
              <div className="console-buttons">
                <button onClick={() => handleCommand("caption")}>+ Caption</button>
                <button onClick={() => handleCommand("shape")}>+ Shape</button>
              </div>
            </div>

            <div className="console-section">
              <h4>🧹 Stage</h4>
              <div className="console-buttons">
                <button onClick={() => handleCommand("clear")}>Clear</button>
              </div>
            </div>

            <div className="console-status">
              <div>
                <span className="text-white/50">🎞 Background:</span> {backgroundMode}
              </div>
              <div>
                <span className="text-white/50">🎭 Elements:</span> {elements.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
