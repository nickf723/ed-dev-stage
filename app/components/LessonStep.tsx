"use client";

import { motion, Variants } from "framer-motion";
import { MBlock } from "./Math";
import { type LessonStep } from "@/app/animations/lesson-manifest";

// Universal variants for any step
const stepVariants: Variants = {
  // We only need initial and animate now
  // 'exit' will be handled by the parent
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/**
 * A "smart" component that renders the correct
 * content based on the step's 'type'.
 * Animation is now controlled by the parent.
 */
export function LessonStep({ step }: { step: LessonStep }) {
  // We wrap this in a motion.div so AnimatePresence can track it
  return (
    <motion.div
      layout // Helps animate position changes smoothly
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // We can just use the 'hidden' variant for exit
      className="flex w-full flex-col items-center justify-center"
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
  );
}