"use client";
// 1. Import the new generic component
import GenericLesson from "./GenericLesson";

// 2. Define the types for our lesson steps
export type LessonStep =
  | { type: "text"; content: string; className?: string }
  | { type: "math"; content: string; className?: string };

// 3. Define the structure of a Lesson
export interface Lesson {
  id: string;
  name: string;
  // The component now has a consistent type
  component: React.ComponentType<{ currentStep: number; steps: LessonStep[] }>;
  steps: LessonStep[];
}

// 4. Define all your lessons in one place
const allLessons: Lesson[] = [
  {
    id: "algebra-1",
    name: "Algebra: Solving for X",
    component: GenericLesson, // <-- Use the generic component
    steps: [
      { type: "math", content: "3x + 2 = 11", className: "text-cyan-300" },
      { type: "text", content: "Subtract 2 from both sides:", className: "text-4xl" },
      { type: "math", content: "3x = 11 - 2", className: "text-cyan-300" },
      { type: "math", content: "3x = 9", className: "text-cyan-300" },
      { type: "text", content: "Divide by 3:", className: "text-4xl" },
      { type: "math", content: "x = \\frac{9}{3}", className: "text-cyan-300" },
      { type: "math", content: "x = 3", className: "text-green-300" },
    ],
  },
  {
    id: "geometry-1",
    name: "Geometry: Circle Area",
    component: GenericLesson, // <-- Use the generic component
    steps: [
      { type: "text", content: "Area of a Circle", className: "text-5xl" },
      { type: "math", content: "A = \\pi r^2", className: "text-cyan-300" },
      { type: "text", content: "If the radius (r) is 5:", className: "text-3xl" },
      { type: "math", content: "A = \\pi (5)^2", className: "text-cyan-300" },
      { type: "math", content: "A = 25\\pi", className: "text-green-300" },
    ],
  },
  // To add a new lesson:
  // 1. Copy the object above
  // 2. Change the id, name, and steps array
  // 3. You're done!
];

// 5. Create an easy-to-use lookup object
export const lessons = allLessons.reduce(
  (acc, lesson) => {
    acc[lesson.id] = lesson;
    return acc;
  },
  {} as Record<string, Lesson>
);

export const lessonIds = allLessons.map((lesson) => lesson.id);