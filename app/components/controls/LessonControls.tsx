"use client";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { lessons, lessonIds } from "@/app/animations/lesson-manifest";
import { ControlGroup } from "./ControlGroup";
import { buttonHoverTap } from "./buttonHoverTap";

interface LessonControlsProps {
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
}

export function LessonControls({ activeLessonId, onSelectLesson }: LessonControlsProps) {
  return (
    <ControlGroup title="Lessons" icon={BookOpen}>
      <div className="flex flex-col gap-2">
        {lessonIds.map((id) => (
          <motion.button
            {...buttonHoverTap}
            key={id}
            onClick={() => onSelectLesson(id)}
            className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
              ${activeLessonId === id
                ? "bg-cyan-500/20 text-cyan-300"
                : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
              }`}
          >
            {lessons[id].name}
          </motion.button>
        ))}
      </div>
    </ControlGroup>
  );
}