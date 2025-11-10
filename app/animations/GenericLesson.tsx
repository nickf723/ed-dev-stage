"use client";
// 1. Import the COMPONENT from the component file
import { LessonStep } from "@/app/components/LessonStep";
// 2. Import the TYPE from the manifest file
import { type LessonStep as Step } from "@/app/animations/lesson-manifest";

interface LessonProps {
  currentStep: number;
  steps: Step[];
}

/**
 * A generic lesson component that renders any lesson 
 * defined in the manifest.
 * It just finds the current step and passes it to the
 * smart <LessonStep /> renderer.
 */
export default function GenericLesson({ currentStep, steps }: LessonProps) {
  const step = steps[currentStep];

  // Apply default text styles that can be overridden by the manifest
  return (
    <div className="text-6xl text-center">
      <LessonStep step={step} />
    </div>
  );
}