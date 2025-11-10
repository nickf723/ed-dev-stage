"use client";
import { motion, Variants } from "framer-motion";

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <motion.p
      variants={itemVariants}
      className={className}
    >
      {text}
    </motion.p>
  );
}