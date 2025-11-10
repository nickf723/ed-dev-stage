"use client";

import { useState } from "react";
// Import our new, clean UI components
import { Stage } from "@/app/components/Stage";
import { Controls } from "@/app/components/Controls";
// Import the lesson manifest
import { lessons, lessonIds } from "@/app/animations/lesson-manifest";

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
  // --- All state lives in the top-level controller ---
  const [activeTheme, setActiveTheme] = useState(themes[0].id);
  const [activeRatio, setActiveRatio] = useState(ratios[0]);
  const [showSymbols, setShowSymbols] = useState(true);
  const [activeLessonId, setActiveLessonId] = useState(lessonIds[0]);
  const [currentStep, setCurrentStep] = useState(0);

  // Get the full lesson object
  const activeLesson = lessons[activeLessonId];

  // --- All event handlers live here ---
  const nextStep = () => {
    // Only advance if not at the end
    if (currentStep < activeLesson.steps.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
  };
  
  const selectLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setCurrentStep(0); // Reset step count on lesson change
  };

  return (
    <main className="flex h-screen w-full items-center justify-center gap-8 p-8">
      
      {/* SECTION 1: THE STAGE */}
      <div className={`relative flex-1 ${activeRatio.aspect} max-h-[90vh]`}>
        <Stage
          lesson={activeLesson}
          currentStep={currentStep}
          activeTheme={activeTheme}
          showSymbols={showSymbols}
        />
      </div>

      {/* SECTION 2: THE CONTROLS */}
      <Controls
        // Pass all state down
        activeLessonId={activeLessonId}
        activeTheme={activeTheme}
        activeRatio={activeRatio}
        showSymbols={showSymbols}
        themes={themes}
        ratios={ratios}
        
        // Pass all handlers down
        onNext={nextStep}
        onReset={resetAnimation}
        onSelectLesson={selectLesson}
        onSelectRatio={setActiveRatio}
        onSelectTheme={setActiveTheme}
        onToggleSymbols={() => setShowSymbols(!showSymbols)}
      />
    </main>
  );
}