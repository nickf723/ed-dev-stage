"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/app/components/AnimatedText";

interface LessonProps {
  currentStep: number;
}

/**
 * A new lesson component. It also accepts 'currentStep'
 * and will show/hide its elements based on that prop.
 */
export default function GeometryExample({ currentStep }: LessonProps) {
  return (
    <motion.div
      key="geometry-example"
      initial="hidden"
      className="flex h-full w-full flex-col items-center justify-center gap-6"
    >
      <motion.h2
        variants={itemVariants}
        animate={currentStep >= 0 ? "visible" : "hidden"}
        className="text-6xl font-bold text-cyan-300"
      >
        Area of a Circle
      </motion.h2>

      <motion.p
        variants={itemVariants}
        animate={currentStep >= 1 ? "visible" : "hidden"}
        className="text-5xl text-neutral-200"
      >
        A = πr²
      </motion.p>
      
      <motion.p
        variants={itemVariants}
        animate={currentStep >= 2 ? "visible" : "hidden"}
        className="text-5xl text-neutral-200"
      >
        (Area = pi * radius squared)
      </motion.p>
    </motion.div>
  );
}