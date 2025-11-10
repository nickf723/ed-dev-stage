"use client";

import { useEffect, useRef } from "react";

/**
 * A reusable hook that applies a 3D tilt effect to a component
 * based on the mouse position.
 */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation. Less intense than the site's cards.
      const rotateX = (y / rect.height - 0.5) * 10; // Max 5deg tilt
      const rotateY = (x / rect.width - 0.5) * -10; // Max 5deg tilt

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      el.style.transition = "transform 0.1s ease-out"; // Smooth follow
    };

    const handleMouseLeave = () => {
      el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
      el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)"; // Smooth spring back
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return ref;
}