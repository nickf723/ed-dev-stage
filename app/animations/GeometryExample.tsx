"use client";
import { LessonStep } from "@/app/components/LessonStep";
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