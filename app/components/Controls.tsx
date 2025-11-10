"use client";
import { motion } from "framer-motion"; // <-- 1. IMPORT MOTION
import { 
  Monitor, 
  Paintbrush, 
  Smartphone, 
  Sparkles, 
  RefreshCw,
  ChevronsRight,
  BookOpen
} from "lucide-react";
import { Lesson, lessons, lessonIds } from "@/app/animations/lesson-manifest";

// ... (Types remain the same) ...
type Theme = { id: string; name: string };
type Ratio = { id: string; name: string; aspect: string };

interface ControlsProps {
  activeLessonId: string;
  activeTheme: string;
  activeRatio: Ratio;
  showSymbols: boolean;
  themes: Theme[];
  ratios: Ratio[];
  onReset: () => void;
  onNext: () => void;
  onSelectLesson: (id: string) => void;
  onSelectRatio: (ratio: Ratio) => void;
  onSelectTheme: (id: string) => void;
  onToggleSymbols: () => void;
}

// 2. Define reusable hover/tap animations
const buttonHoverTap = {
  whileHover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  whileTap: { scale: 0.95 },
};


export function Controls({
  activeLessonId, activeTheme, activeRatio, showSymbols, themes, ratios,
  onReset, onNext, onSelectLesson, onSelectRatio, onSelectTheme, onToggleSymbols
}: ControlsProps) {
  return (
    <aside className="glass w-96 flex-shrink-0 p-6 overflow-y-auto h-full"> {/* Added h-full */}
      <h2 className="text-lg font-bold text-cyan-300">
        Video Stage Controls
      </h2>
      
      {/* 3. CONVERT BUTTONS TO MOTION.BUTTON */}
      <ControlGroup title="Playback" icon={ChevronsRight}>
        <div className="grid grid-cols-2 gap-2">
          <motion.button
            {...buttonHoverTap} // Add hover/tap
            onClick={onReset}
            className={`flex w-full items-center justify-center gap-2 rounded-md bg-neutral-700 
                        px-3 py-2 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-600`}
          >
            <RefreshCw size={14} />
            Reset
          </motion.button>
          <motion.button
            {...buttonHoverTap} // Add hover/tap
            onClick={onNext}
            className={`flex w-full items-center justify-center gap-2 rounded-md bg-cyan-600 
                        px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-500`}
            animate={{ // Add the pulse animation!
              scale: [1, 1.03, 1],
              opacity: [1, 0.9, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronsRight size={14} />
            Next Step
          </motion.button>
        </div>
      </ControlGroup>
      
      <ControlGroup title="Lessons" icon={BookOpen}>
        <div className="flex flex-col gap-2">
          {lessonIds.map((id) => (
            <motion.button
              {...buttonHoverTap} // Add hover/tap
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

      <ControlGroup title="Aspect Ratio" icon={Smartphone}>
        <div className="grid grid-cols-2 gap-2">
          {ratios.map((ratio) => (
            <motion.button
              {...buttonHoverTap} // Add hover/tap
              key={ratio.id}
              onClick={() => onSelectRatio(ratio)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors
                ${activeRatio.id === ratio.id
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
                }`}
            >
              {ratio.name}
            </motion.button>
          ))}
        </div>
      </ControlGroup>
      
      <ControlGroup title="Backgrounds" icon={Paintbrush}>
        <div className="flex flex-col gap-2">
          {themes.map((theme) => (
            <motion.button
              {...buttonHoverTap} // Add hover/tap
              key={theme.id}
              onClick={() => onSelectTheme(theme.id)}
              className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
                ${theme.id === activeTheme
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
                }`}
            >
              {theme.name}
            </motion.button>
          ))}
        </div>
      </ControlGroup>

      <ControlGroup title="Elements" icon={Sparkles}>
        <motion.button
          {...buttonHoverTap} // Add hover/tap
          onClick={onToggleSymbols}
          className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
            ${showSymbols
              ? "bg-cyan-500/20 text-cyan-300"
              : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
            }`}
        >
          {showSymbols ? "Hide" : "Show"} Floating Symbols
        </motion.button>
      </ControlGroup>
    </aside>
  );
}

// ... (ControlGroup helper component remains the same) ...
function ControlGroup({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
        <Icon size={14} />
        {title}
      </h3>
      {children}
    </div>
  );
}