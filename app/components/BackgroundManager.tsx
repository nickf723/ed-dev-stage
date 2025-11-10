"use client";
import { useEffect, useState } from "react";
import "@/app/styles/backgrounds.css"; // make sure this points to your css

export type BackgroundType = "aurora" | "grid" | "stars" | "solid";

export function BackgroundManager() {
  const [activeBackground, setActiveBackground] = useState<BackgroundType>("aurora");

  // Optional: listen for global background updates later (via context or event)
  useEffect(() => {
    const handleChange = (e: CustomEvent<BackgroundType>) => {
      setActiveBackground(e.detail);
    };
    window.addEventListener("changeBackground", handleChange as EventListener);
    return () => window.removeEventListener("changeBackground", handleChange as EventListener);
  }, []);

  return (
    <div className="background-manager">
      <div className={`background-layer bg-${activeBackground}`} />
    </div>
  );
}
