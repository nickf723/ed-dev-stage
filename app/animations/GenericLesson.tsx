"use client";
import { LessonStep } from "@/app/components/LessonStep"; // <-- Import the component
import { type LessonStep as Step } from "@/app/animations/lesson-manifest"; // <-- Import the type
interface LessonProps {
  currentStep: number;
  steps: Step[];
}

export default function GenericLesson({ currentStep, steps }: LessonProps) {
  const step = steps[currentStep];

  // Apply default text styles that can be overridden by the manifest
  return (
    <div className="text-6xl text-center">
      <LessonStep step={step} />
    </div>
  );
}