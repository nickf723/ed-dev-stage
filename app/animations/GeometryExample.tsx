"use client";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedMath } from "@/app/components/AnimatedMath";

interface LessonProps {
  currentStep: number;
}

// Define the steps using LaTeX
const steps = [
  "Area of a Circle", // Step 0 (Title)
  "A = \\pi r^2",      // Step 1 (Formula)
  "A = \\pi (5)^2",   // Step 2 (Substitution)
  "A = 25\\pi"        // Step 3 (Final Answer)
];

export default function GeometryExample({ currentStep }: LessonProps) {
  // Get the current string, or the last one
  const currentLatex = steps[currentStep] || steps[steps.length - 1];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 text-6xl">
      <AnimatePresence mode="wait">
        <AnimatedMath
          key={currentLatex}
          latex={currentLatex}
          className={
            currentStep === 0 
              ? "text-5xl text-neutral-200" // Title style
              : currentStep >= steps.length - 1
                ? "text-green-300" // Final step
                : "text-cyan-300"   // In-progress
          }
        />
      </AnimatePresence>
    </div>
  );
}