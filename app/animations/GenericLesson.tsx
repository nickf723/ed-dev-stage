"use client";
import { AnimatePresence, motion } from "framer-motion";
import { type LessonStep as Step } from "@/app/animations/lesson-manifest";
import { LessonStep } from "app/components/LessonStep";

interface LessonProps {
  currentStep: number;
  steps: Step[];
}

/**
 * A generic lesson component that now renders *all* steps
 * from 0 up to the currentStep, creating a "build-up" effect.
 */
export default function GenericLesson({ currentStep, steps }: LessonProps) {
  // 1. Get a "slice" of all steps that should be visible
  const stepsToShow = steps.slice(0, currentStep + 1);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      {/* 2. Wrap the list in AnimatePresence.
           When a new item is added to 'stepsToShow' (when you click "Next"),
           AnimatePresence will detect it and run its 'initial' and 'animate' variants.
      */}
      <AnimatePresence>
        {stepsToShow.map((step, index) => (
          // 3. We pass the 'step' object to our smart component.
          //    The 'key' is crucial for AnimatePresence to track each item.
          <LessonStep key={index} step={step} />
        ))}
      </AnimatePresence>
    </div>
  );
}