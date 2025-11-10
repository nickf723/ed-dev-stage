"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { MBlock } from "./Math";
import { LessonStep } from "@/app/animations/lesson-manifest";

// Universal variants for any step
const stepVariants: Variants = {
  hidden: {opacity: 0, y: 15, transition: { duration: 0.3, ease: "easeIn" },},
  visible: {opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" },},
  exit: {opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" },},
};

export function LessonStep({ step }: { step?: LessonStep }) {
  if (!step) {
    return null;
  }
    <AnimatePresence mode="wait">
      <motion.div
        key={step.content}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex h-full w-full flex-col items-center justify-center text-6xl">
        {step.type === "math" ? (<MBlock>{step.content}</MBlock>): (<p>{step.content}</p>)}
      </motion.div>
    </AnimatePresence>
}