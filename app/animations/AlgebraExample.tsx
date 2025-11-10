"use client";

import { motion } from "framer-motion";
import { AnimatedText, itemVariants } from "@/app/components/AnimatedText";

interface LessonProps {
  currentStep: number;
}

/**
 * Updated to accept a 'currentStep' prop.
 * We've removed the 'containerVariants' and 'staggerChildren'.
 * Now, each element animates based on the 'currentStep' number.
 */
export default function AlgebraExample({ currentStep }: LessonProps) {
  return (
    <motion.div
      key="algebra-example" // A unique key helps Framer Motion
      initial="hidden" // Still hidden by default
      className="flex h-full w-full flex-col items-center justify-center gap-6"
    >
      {/* Title (Step 0) */}
      <motion.h2
        variants={itemVariants}
        animate={currentStep >= 0 ? "visible" : "hidden"} // Animate on step 0
        className="text-6xl font-bold text-cyan-300"
      >
        3x + 2 = 11
      </motion.h2>

      {/* Step 1 */}
      {/* We wrap AnimatedText in a motion.div to control its state */}
      <motion.div
        variants={itemVariants}
        animate={currentStep >= 1 ? "visible" : "hidden"} // Animate on step 1
      >
        <AnimatedText
          text="3x = 11 - 2"
          className="text-5xl text-neutral-200"
        />
      </motion.div>

      {/* Step 2 */}
      <motion.div
        variants={itemVariants}
        animate={currentStep >= 2 ? "visible" : "hidden"} // Animate on step 2
      >
        <AnimatedText
          text="3x = 9"
          className="text-5xl text-neutral-200"
        />
      </motion.div>

      {/* Step 3 */}
      <motion.div
        variants={itemVariants}
        animate={currentStep >= 3 ? "visible" : "hidden"} // Animate on step 3
      >
        <AnimatedText
          text="x = 9 / 3"
          className="text-5xl text-neutral-200"
        />
      </motion.div>

      {/* Final Answer (Step 4) */}
      <motion.div
        variants={itemVariants}
        animate={currentStep >= 4 ? "visible" : "hidden"} // Animate on step 4
        className="mt-4 rounded-lg bg-green-500/20 px-6 py-3"
      >
        <p className="text-6xl font-bold text-green-300">x = 3</p>
      </motion.div>
    </motion.div>
  );
}