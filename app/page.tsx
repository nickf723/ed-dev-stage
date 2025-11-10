"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Stage } from "@/app/components/Stage";
import { Controls } from "@/app/components/Controls";
import { lessons, lessonIds } from "@/app/animations/lesson-manifest";
import { useTilt } from "@/app/hooks/useTilt";

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

const ratios = [
  { id: "shorts", name: "Shorts (9:16)", aspect: "aspect-[9/16]" },
  { id: "standard", name: "Video (16:9)", aspect: "aspect-video" },
];

export default function VideoStagePage() {
  const [activeTheme, setActiveTheme] = useState(themes[0].id);
  const [activeRatio, setActiveRatio] = useState(ratios[0]);
  const [showSymbols, setShowSymbols] = useState(true);
  const [activeLessonId, setActiveLessonId] = useState(lessonIds[0]);
  const [currentStep, setCurrentStep] = useState(0);

  const activeLesson = lessons[activeLessonId];
  const stageRef = useTilt<HTMLDivElement>();

  const nextStep = () => {
    if (currentStep < activeLesson.steps.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
  };
  
  const selectLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setCurrentStep(0);
  };

  return (
    <main className={`flex h-screen w-full items-center justify-center gap-8 p-8 
                    overflow-hidden relative ${activeTheme}`}>
      
      {/* --- Atmospheric Blobs --- */}
      <div
        className="animated-blob top-[10vh] left-[10vw] h-[300px] w-[300px] 
                   animate-blob-slow bg-[var(--topic-blob-1)]"
      />
      <div
        className="animated-blob top-[50vh] left-[30vw] h-[250px] w-[400px] 
                   animate-blob-medium bg-[var(--topic-blob-2)]"
      />
      
      {/* --- 1. UPDATED STAGE WRAPPER --- */}
      {/* This outer div grows to fill the space */}
      <motion.div 
        className="relative flex-1 h-full max-h-[90vh] flex items-center justify-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* This inner div holds the aspect ratio and the tilt */}
        <div ref={stageRef} className={`relative w-full h-full ${activeRatio.aspect} max-h-full max-w-full`}>
          <Stage
            lesson={activeLesson}
            currentStep={currentStep}
            activeTheme={activeTheme}
            showSymbols={showSymbols}
          />
        </div>
      </motion.div>

      {/* --- 2. UPDATED CONTROLS WRAPPER --- */}
      {/* We add flex-shrink-0 to prevent it from shrinking */}
      <motion.div 
        className="h-full max-h-[90vh] flex-shrink-0"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Controls
          activeLessonId={activeLessonId}
          activeTheme={activeTheme}
          activeRatio={activeRatio}
          showSymbols={showSymbols}
          themes={themes}
          ratios={ratios}
          onNext={nextStep}
          onReset={resetAnimation}
          onSelectLesson={selectLesson}
          onSelectRatio={setActiveRatio}
          onSelectTheme={setActiveTheme}
          onToggleSymbols={() => setShowSymbols(!showSymbols)}
        />
      </motion.div>
    </main>
  );
}