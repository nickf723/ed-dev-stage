"use client";
import React from "react";
import { motion } from "framer-motion";

export const ViewportFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="viewport-frame flex items-center justify-center">
    <div style={{ color: "#fff", opacity: 0.5, position: "absolute" }}>Viewport</div>
    {children}
  </div>
);
