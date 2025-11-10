"use client";

/**
 * Reusable Framer Motion props for tactile button feedback.
 */
export const buttonHoverTap = {
  whileHover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  whileTap: { scale: 0.95 },
};