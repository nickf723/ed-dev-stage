"use client";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedMath } from "@/app/components/AnimatedMath";

interface LessonProps {
  currentStep: number;
}

// Let's define our equation steps using real LaTeX!
const steps = [
  "3x + 2 = 11",        // Step 0
  "3x = 11 - 2",      // Step 1
  "3x = 9",             // Step 2
  "x = \\frac{9}{3}",    // Step 3 (LaTeX for fraction)
  "x = 3"               // Step 4
];

export default function AlgebraExample({ currentStep }: LessonProps) {
  // Get the current equation string, or the last one if we're past the end
  const currentLatex = steps[currentStep] || steps[steps.length - 1];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 text-6xl">
      {/* AnimatePresence handles the 'exit' animation.
        The 'mode="wait"' tells it to wait for the old
        component to exit before the new one enters.
      */}
      <AnimatePresence mode="wait">
        {/* By using the 'currentLatex' as a 'key', 
          Framer Motion sees each step as a *new* component.
          This triggers the 'exit' animation on the old one
          and the 'visible' animation on the new one.
        */}
        <AnimatedMath
          key={currentLatex}
          latex={currentLatex}
          className={
            currentStep >= steps.length - 1 
              ? "text-green-300" // Final step is green
              : "text-cyan-300"   // In-progress steps are cyan
          }
        />
      </AnimatePresence>
    </div>
  );
}