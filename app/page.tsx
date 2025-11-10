"use client";

import { useState } from "react";
// 1. Import motion
import { motion } from "framer-motion";
import { Monitor, Paintbrush, Smartphone, Sparkles } from "lucide-react";

// Define our background presets
const themes = [
  { id: "theme-default", name: "Default Dark" },
  { id: "theme-formal-science", name: "Formal Science Grid" },
  { id: "theme-algebra", name: "Algebra Grid" },
  { id: "theme-foundations", name: "Foundations Dots" },
];

// Define aspect ratios
const ratios = [
  { id: "shorts", name: "Shorts (9:16)", aspect: "aspect-[9/16]" },
  { id: "standard", name: "Video (16:9)", aspect: "aspect-video" },
];

export default function VideoStagePage() {
  const [activeTheme, setActiveTheme] = useState(themes[0].id);
  const [activeRatio, setActiveRatio] = useState(ratios[0]);
  const [showSymbols, setShowSymbols] = useState(true);

  // Your math symbols
  const mathSymbols = [
    "x", "y", "ƒ(x)", "a+b", "π", "∞", "√", "∑", "Δ", "θ", "∫",
  ];

  return (
    <main className="flex h-screen w-full items-center justify-center gap-8 p-8">
      
      {/* SECTION 1: THE STAGE */}
      <div className={`relative flex-1 ${activeRatio.aspect} max-h-[90vh]`}>
        <div
          id="video-stage"
          className={`glass relative h-full w-full overflow-hidden p-8 
                      transition-all duration-300 ${activeTheme}`}
        >
          {/* Background Symbols */}
          {showSymbols && (
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10"
            >
              {mathSymbols.map((symbol, i) => (
                <span
                  key={i}
                  className="floating-symbol"
                  style={{
                    left: `${(i * 13) % 100}%`,
                    top: `${(i * 27) % 100}%`,
                    animationDelay: `${(i * 0.7) % 10}s`,
                  }}
                >
                  {symbol}
                </span>
              ))}
            </div>
          )}

          {/* ↓↓↓ YOUR ANIMATION GOES HERE ↓↓↓ */}
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              
              {/* 2. Changed to motion.h1 and added props */}
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-cyan-300"
              >
                Your Lesson Title
              </motion.h1>

              {/* 3. Changed to motion.p and added props */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-2xl text-neutral-200"
              >
                This is where your coded animation
                <br />
                or content will be displayed.
              </motion.p>
            </div>
          </div>
          {/* ↑↑↑ YOUR ANIMATION GOES HERE ↑↑↑ */}

        </div>
      </div>

      {/* SECTION 2: THE CONTROLS */}
      <aside className="glass w-96 flex-shrink-0 p-6">
        <h2 className="text-lg font-bold text-cyan-300">
          Video Stage Controls
        </h2>
        
        {/* Aspect Ratio Controls */}
        <ControlGroup title="Aspect Ratio" icon={Smartphone}>
          <div className="grid grid-cols-2 gap-2">
            {ratios.map((ratio) => (
              <button
                key={ratio.id}
                onClick={() => setActiveRatio(ratio)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors
                  ${activeRatio.id === ratio.id
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
                  }`}
              >
                {ratio.name}
              </button>
            ))}
          </div>
        </ControlGroup>
        
        {/* Background Preset Controls */}
        <ControlGroup title="Backgrounds" icon={Paintbrush}>
          <div className="flex flex-col gap-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
                  ${activeTheme === theme.id
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
                  }`}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </ControlGroup>

        {/* Toggle Controls */}
        <ControlGroup title="Elements" icon={Sparkles}>
          <button
            onClick={() => setShowSymbols(!showSymbols)}
            className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
              ${showSymbols
                ? "bg-cyan-500/20 text-cyan-300"
                : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
              }`}
          >
            {showSymbols ? "Hide" : "Show"} Floating Symbols
          </button>
        </ControlGroup>
      </aside>
    </main>
  );
}

// Helper component for styling the controls
function ControlGroup({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
        <Icon size={14} />
        {title}
      </h3>
      {children}
    </div>
  );
}