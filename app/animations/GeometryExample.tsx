"use client";
// Import the component from the correct file
import { LessonStep } from "@/app/components/LessonStep";
// Import the *type* from the manifest
import { type LessonStep as Step } from "@/app/animations/lesson-manifest";

interface LessonProps {
  currentStep: number;
  steps: Step[];
}

export default function GeometryExample({ currentStep, steps }: LessonProps) {
  const step = steps[currentStep];

  return (
    <div className="text-6xl text-center">
      <LessonStep step={step} />
    </div>
  );
}