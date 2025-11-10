"use client";
import React from "react";
import { motion } from "framer-motion";

// Registry of available stage components
const registry: Record<string, React.FC<any>> = {
  caption: ({ text }: { text: string }) => (
    <motion.div
      className="absolute bottom-8 w-full text-center text-lg font-medium text-white/80"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  ),
  shape: ({ color = "#810EFB" }: { color?: string }) => (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="w-24 h-24 rounded-full blur-3xl"
        style={{ background: color, opacity: 0.6 }}
      />
    </motion.div>
  ),
};

export const renderStageElement = (type: string, props: any) => {
  const Component = registry[type];
  if (!Component) {
    console.warn(`Unknown component type: ${type}`);
    return null;
  }
  return <Component {...props} />;
};
