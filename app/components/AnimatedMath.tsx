"use client";
import { motion, Variants } from "framer-motion";
import { MBlock } from "./Math"; // Import our new Math component

// These variants will handle the enter/exit
export const mathVariants: Variants = {
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

interface AnimatedMathProps {
  latex: string;
  className?: string;
}

// This component is simple: it's just a motion-wrapped MBlock
export function AnimatedMath({ latex, className }: AnimatedMathProps) {
  return (
    <motion.div
      variants={mathVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className}
    >
      <MBlock>{latex}</MBlock>
    </motion.div>
  );
}