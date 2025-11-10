"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { MBlock } from "./Math";
// Fix: Import 'LessonStep' as a 'type' to resolve the conflict
import { type LessonStep } from "@/app/animations/lesson-manifest";

// Universal variants for any step
const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    transition: { duration: 0.3, ease: "easeIn" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

/**
 * A "smart" component that renders the correct animation
 * based on the step's 'type' from the manifest.
 */
export function LessonStep({ step }: { step?: LessonStep }) {
  if (!step) {
    return null; // Don't render anything if no step is provided
  }

  // Use AnimatePresence to handle the fade-in/out
  // The 'key' is crucial for AnimatePresence to detect changes
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.content} // Change the key to trigger animation
        variants={stepVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex h-full w-full flex-col items-center justify-center"
      >
        {/* Switch based on the step type */}
        {step.type === "math" ? (
          // Math steps
          <div className={`text-6xl ${step.className || "text-cyan-300"}`}>
            <MBlock>{step.content}</MBlock>
          </div>
        ) : (
          // Text steps
          <p className={`gradient-text text-center ${step.className || "text-4xl"}`}>
            {step.content}
          </p>
        )}
      </motion.div>
    </AnimatePresence>
  );
}