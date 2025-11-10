"use client";

import { motion, Variants } from "framer-motion";
import { AnimatedText, itemVariants } from "@/app/components/AnimatedText";

/**
 * This is the "container" animation.
 * It doesn't animate itself, but it orchestrates
 * the animation of its children using 'staggerChildren'.
 *
 * This variant means: "When I become 'visible',
 * wait 0.5s, then make each of my children
 * 'visible' one by one, 1.2s apart."
 */
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,       // Wait 0.5s before starting
      staggerChildren: 1.2,     // 1.2s delay between each child
    },
  },
};

/**
 * This is your first "coded animation" lesson component.
 * It will be rendered inside the "stage" on the main page.
 */
export default function AlgebraExample() {
  return (
    <motion.div
      key="algebra-example" // A unique key helps Framer Motion
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex h-full w-full flex-col items-center justify-center gap-6"
    >
      {/* Title */}
      <motion.h2
        variants={itemVariants} // Use the same variants as AnimatedText
        className="text-6xl font-bold text-cyan-300"
      >
        3x + 2 = 11
      </motion.h2>

      {/* Step 1 */}
      <AnimatedText
        text="3x = 11 - 2"
        className="text-5xl text-neutral-200"
      />

      {/* Step 2 */}
      <AnimatedText
        text="3x = 9"
        className="text-5xl text-neutral-200"
      />

      {/* Step 3 */}
      <AnimatedText
        text="x = 9 / 3"
        className="text-5xl text-neutral-200"
      />

      {/* Final Answer */}
      <motion.div
        variants={itemVariants}
        className="mt-4 rounded-lg bg-green-500/20 px-6 py-3"
      >
        <p className="text-6xl font-bold text-green-300">x = 3</p>
      </motion.div>
    </motion.div>
  );
}