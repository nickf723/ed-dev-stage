"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// Import your lessons
import AlgebraExample from "@/app/animations/AlgebraExample";
import GeometryExample from "@/app/animations/GeometryExample";
import { 
  Monitor, 
  Paintbrush, 
  Smartphone, 
  Sparkles, 
  RefreshCw,
  ChevronsRight, // For "Next Step"
  BookOpen // For "Lessons"
} from "lucide-react";

const mathSymbols = ["+", "-", "x", "y", "z"]

// --- 1. Create a "Lesson Manifest" ---
// This maps a simple ID to your lesson components
const lessons = {
  "algebra-1": {
    name: "Algebra: Solving for X",
    component: AlgebraExample,
  },
  "geometry-1": {
    name: "Geometry: Circle Area",
    component: GeometryExample,
  },
};
// Get an array of the lesson keys: ["algebra-1", "geometry-1"]
const lessonIds = Object.keys(lessons);

// Define our background presets
const themes = [
  { id: "theme-default", name: "Default Dark" },
  { id: "theme-formal-science", name: "Formal Science Grid" },
  { id: "theme-algebra", name: "Algebra Grid" },
  { id: "theme-foundations", name: "Foundations Dots" },
  { id: "theme-natural-science", name: "Natural Science Grid" },
  { id: "theme-social-science", name: "Social Science Dots" },
  { id: "theme-applied-science", name: "Applied Science Grid" },
  { id: "theme-humanities", name: "Humanities Pattern" },
  { id: "theme-interdisciplines", name: "Interdisciplines Grid" },
  { id: "theme-glossary", name: "Glossary Grid" },
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
  
  // --- 2. New State for Lesson Switching and Stepping ---
  const [activeLessonId, setActiveLessonId] = useState(lessonIds[0]);
  const [currentStep, setCurrentStep] = useState(0);

  // --- 3. Get the component to render ---
  const ActiveLesson = lessons[activeLessonId].component;

  // --- 4. New Playback Control Functions ---
  const nextStep = () => {
    setCurrentStep((s) => s + 1);
  };

  const resetAnimation = () => {
    setCurrentStep(0);
  };
  
  // When we switch lessons, also reset the steps
  const selectLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setCurrentStep(0);
  }

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
          
          {/* --- 5. Render the Active Lesson Dynamically --- */}
          {/* We pass the currentStep as a prop */}
          <ActiveLesson currentStep={currentStep} />

          {/* ↑↑↑ YOUR ANIMATION GOES HERE ↑↑↑ */}

        </div>
      </div>

      {/* SECTION 2: THE CONTROLS */}
      <aside className="glass w-96 flex-shrink-0 p-6">
        <h2 className="text-lg font-bold text-cyan-300">
          Video Stage Controls
        </h2>
        
        {/* --- 6. Updated Playback Controls --- */}
        <ControlGroup title="Playback" icon={ChevronsRight}>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={resetAnimation}
              className={`flex w-full items-center justify-center gap-2 rounded-md bg-neutral-700 
                          px-3 py-2 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-600`}
            >
              <RefreshCw size={14} />
              Reset
            </button>
            <button
              onClick={nextStep}
              className={`flex w-full items-center justify-center gap-2 rounded-md bg-cyan-600 
                          px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-500`}
            >
              <ChevronsRight size={14} />
              Next Step
            </button>
          </div>
        </ControlGroup>
        
        {/* --- 7. New Lesson Switcher --- */}
        <ControlGroup title="Lessons" icon={BookOpen}>
          <div className="flex flex-col gap-2">
            {lessonIds.map((id) => (
              <button
                key={id}
                onClick={() => selectLesson(id)}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
                  ${activeLessonId === id
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
                  }`}
              >
                {lessons[id].name}
              </button>
            ))}
          </div>
        </ControlGroup>

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