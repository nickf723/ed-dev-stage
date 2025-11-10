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
            className={`btn-glass text-left
              ${activeLessonId === id ? "btn-glass-active" : ""
              }`}
          >
            {lessons[id].name}
          </motion.button>
        ))}
      </div>
    </ControlGroup>
  );
}