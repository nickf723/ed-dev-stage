"use client";
import { Lesson } from "@/app/animations/lesson-manifest";

interface StageProps {
  lesson: Lesson;
  currentStep: number;
  activeTheme: string;
  showSymbols: boolean;
}

// Your math symbols
const mathSymbols = ["x", "y", "ƒ(x)", "a+b", "π", "∞", "√", "∑", "Δ", "θ", "∫",];

export function Stage({ lesson, currentStep, activeTheme, showSymbols }: StageProps) {
  const ActiveLessonComponent = lesson.component;
  
  return (
    <div id="video-stage" className={`glass relative h-full w-full overflow-hidden p-8 transition-all duration-300 ${activeTheme}`}>
      {/* Background Symbols */}
      {showSymbols && (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {mathSymbols.map((symbol, i) => (
            <span
              key={i}
              className="floating-symbol"
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 27) % 100}%`,
                animationDelay: `${(i * 0.7) % 10}s`,}}>{symbol}
            </span>
          ))}
        </div>
      )}

      {/* Render the Active Lesson Dynamically */}
      <ActiveLessonComponent currentStep={currentStep} steps={lesson.steps} />
    </div>
  );
}