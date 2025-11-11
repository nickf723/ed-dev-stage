"use client";
import { useStage, BackgroundState } from "./StageDirector";
// Import useState and ChangeEvent for our new inputs
import { useState, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- NEW: Define our color palette ---
const PALETTE = {
  purple: "#810EFB",
  blue: "#12B6F8",
  green: "#51B93C",
  white: "#FFFFFF",
};

export const DirectorConsole = () => {
  const { execute, backgroundState, elements } = useStage();
  const [open, setOpen] = useState(true);

  // --- NEW: Local state for spawn properties ---
  const [spawnColor, setSpawnColor] = useState(PALETTE.purple);
  const [spawnText, setSpawnText] = useState("Hello, world!");

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
            {/* --- NEW: Color Palette Section --- */}
            <div className="console-section">
              <h4>🎨 Palette</h4>
              <div className="color-palette">
                {Object.entries(PALETTE).map(([name, color]) => (
                  <button
                    key={name}
                    className={`color-swatch ${
                      spawnColor === color ? "active" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSpawnColor(color)}
                    title={name}
                  />
                ))}
              </div>
            </div>

            {/* --- Background sections are unchanged --- */}
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

            {/* --- UPDATED: Spawn Section --- */}
            <div className="console-section">
              <h4>📦 Spawn</h4>
              <div className="console-spawn-group">
                {/* New text input */}
                <input
                  type="text"
                  className="console-input"
                  value={spawnText}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSpawnText(e.target.value)
                  }
                />
                {/* Updated button reads from state */}
                <button
                  className="console-spawn-button"
                  onClick={() =>
                    handleCommand("spawn", {
                      component: "caption",
                      props: { text: spawnText }, // Use state
                    })
                  }
                >
                  + Caption
                </button>
              </div>
              <div className="console-spawn-group">
                {/* Updated button reads from state */}
                <button
                  className="console-spawn-button"
                  onClick={() =>
                    handleCommand("spawn", {
                      component: "shape",
                      props: { color: spawnColor }, // Use state
                    })
                  }
                >
                  + Shape (use palette)
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

            {/* --- UPDATED: Status Panel --- */}
            <div className="console-status">
              <div className="status-grid">
                <span>Color:</span>
                <span>{backgroundState.color}</span>
                <span>Pattern:</span>
                <span>{backgroundState.pattern}</span>
                <span>Particles:</span>
                <span>{backgroundState.particles}</span>
                <span>Decor:</span>
                <span>{backgroundState.decor}</span>
                <span>Anims:</span>
                <span>{backgroundState.animations ? "On" : "Off"}</span>
                <span>Elements:</span>
                <span>{elements.length}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};