"use client";
import { useStage, BackgroundState } from "./StageDirector"; // Import new type
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const DirectorConsole = () => {
  // UPDATED: Read 'backgroundState' instead of 'backgroundMode'
  const { execute, backgroundState, elements } = useStage();
  const [open, setOpen] = useState(true);

  // UPDATED: Use the new 'updateBackground' instruction
  const handleCommand = (
    type: "spawn" | "clear" | "updateBackground",
    payload: any
  ) => {
    if (type === "spawn") {
      execute({ type: "spawn", ...payload });
    } else if (type === "updateBackground") {
      execute({ type: "updateBackground", props: payload });
    } else if (type === "clear") {
      execute({ type: "clear" });
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
            {/* UPDATED: New modular controls */}
            <div className="console-section">
              <h4>🎨 Decor</h4>
              <div className="console-buttons">
                <button
                  onClick={() =>
                    handleCommand("updateBackground", { decor: "aurora" })
                  }
                >
                  Aurora
                </button>
                <button
                  onClick={() =>
                    handleCommand("updateBackground", { decor: "none" })
                  }
                >
                  None
                </button>
              </div>
            </div>

            <div className="console-section">
              <h4>✨ Particles</h4>
              <div className="console-buttons">
                <button
                  onClick={() =>
                    handleCommand("updateBackground", { particles: "stars" })
                  }
                >
                  Stars
                </button>
                <button
                  onClick={() =>
                    handleCommand("updateBackground", { particles: "none" })
                  }
                >
                  None
                </button>
              </div>
            </div>

            <div className="console-section">
              <h4>🌐 Pattern</h4>
              <div className="console-buttons">
                <button
                  onClick={() =>
                    handleCommand("updateBackground", { pattern: "grid" })
                  }
                >
                  Grid
                </button>
                <button
                  onClick={() =>
                    handleCommand("updateBackground", { pattern: "none" })
                  }
                >
                  None
                </button>
              </div>
            </div>

            <div className="console-section">
              <h4>⏯️ Animation</h4>
              <div className="console-buttons">
                <button
                  onClick={() =>
                    handleCommand("updateBackground", {
                      animations: !backgroundState.animations,
                    })
                  }
                >
                  {backgroundState.animations ? "Pause" : "Play"} Anim
                </button>
              </div>
            </div>

            <div className="console-section">
              <h4>📦 Spawn</h4>
              <div className="console-buttons">
                <button
                  onClick={() =>
                    handleCommand("spawn", {
                      component: "caption",
                      props: { text: "Let's solve for x." },
                    })
                  }
                >
                  + Caption
                </button>
                <button
                  onClick={() =>
                    handleCommand("spawn", {
                      component: "shape",
                      props: { color: "#51B93C" },
                    })
                  }
                >
                  + Shape
                </button>
              </div>
            </div>

            <div className="console-section">
              <h4>🧹 Stage</h4>
              <div className="console-buttons">
                <button onClick={() => handleCommand("clear", {})}>
                  Clear All
                </button>
              </div>
            </div>

            {/* UPDATED: New status display */}
            <div className="console-status">
              <div className="text-xs">
                <span className="text-white/50">Color:</span> {backgroundState.color}
              </div>
              <div className="text-xs">
                <span className="text-white/50">Pattern:</span> {backgroundState.pattern}
              </div>
              <div className="text-xs">
                <span className="text-white/50">Particles:</span> {backgroundState.particles}
              </div>
              <div className="text-xs">
                <span className="text-white/50">Decor:</span> {backgroundState.decor}
              </div>
              <div className="text-xs">
                <span className="text-white/50">Anims:</span>{" "}
                {backgroundState.animations ? "On" : "Off"}
              </div>
              <div className="text-xs">
                <span className="text-white/50">Elements:</span> {elements.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};