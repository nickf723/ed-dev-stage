"use client";
import { LessonStep, type LessonStep as Step } from "@/app/animations/lesson-manifest";

interface LessonProps {
  currentStep: number;
  steps: Step[];
}

export default function AlgebraExample({ currentStep, steps }: LessonProps) {
  const step = steps[currentStep];

  return (
    <div className="text-6xl text-center">
      <LessonStep step={step} />
    </div>
  );
}