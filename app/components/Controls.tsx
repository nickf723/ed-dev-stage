"use client";
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

// Types for themes and ratios
type Theme = { id: string; name: string };
type Ratio = { id: string; name: string; aspect: string };

interface ControlsProps {
  // State
  activeLessonId: string;
  activeTheme: string;
  activeRatio: Ratio;
  showSymbols: boolean;
  themes: Theme[];
  ratios: Ratio[];

  // Event Handlers
  onReset: () => void;
  onNext: () => void;
  onSelectLesson: (id: string) => void;
  onSelectRatio: (ratio: Ratio) => void;
  onSelectTheme: (id: string) => void;
  onToggleSymbols: () => void;
}

export function Controls({
  activeLessonId, activeTheme, activeRatio, showSymbols, themes, ratios,
  onReset, onNext, onSelectLesson, onSelectRatio, onSelectTheme, onToggleSymbols
}: ControlsProps) {
  return (
    <aside className="glass w-96 flex-shrink-0 p-6 overflow-y-auto">
      <h2 className="text-lg font-bold text-cyan-300">
        Video Stage Controls
      </h2>
      
      {/* Playback Controls */}
      <ControlGroup title="Playback" icon={ChevronsRight}>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onReset}
            className={`flex w-full items-center justify-center gap-2 rounded-md bg-neutral-700 
                        px-3 py-2 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-600`}
          >
            <RefreshCw size={14} />
            Reset
          </button>
          <button
            onClick={onNext}
            className={`flex w-full items-center justify-center gap-2 rounded-md bg-cyan-600 
                        px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-500`}
          >
            <ChevronsRight size={14} />
            Next Step
          </button>
        </div>
      </ControlGroup>
      
      {/* Lesson Switcher */}
      <ControlGroup title="Lessons" icon={BookOpen}>
        <div className="flex flex-col gap-2">
          {lessonIds.map((id) => (
            <button
              key={id}
              onClick={() => onSelectLesson(id)}
              className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
                ${activeLessonId === id
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
                }`}
            >
              {lessons[id].name}
            </button>
          ))}
        </div>
      </ControlGroup>

      {/* Aspect Ratio Controls */}
      <ControlGroup title="Aspect Ratio" icon={Smartphone}>
        <div className="grid grid-cols-2 gap-2">
          {ratios.map((ratio) => (
            <button
              key={ratio.id}
              onClick={() => onSelectRatio(ratio)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors
                ${activeRatio.id === ratio.id
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
                }`}
            >
              {ratio.name}
            </button>
          ))}
        </div>
      </ControlGroup>
      
      {/* Background Preset Controls */}
      <ControlGroup title="Backgrounds" icon={Paintbrush}>
        <div className="flex flex-col gap-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => onSelectTheme(theme.id)}
              className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
                ${activeTheme === theme.id
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
                }`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </ControlGroup>

      {/* Toggle Controls */}
      <ControlGroup title="Elements" icon={Sparkles}>
        <button
          onClick={onToggleSymbols}
          className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
            ${showSymbols
              ? "bg-cyan-500/20 text-cyan-300"
              : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
            }`}
        >
          {showSymbols ? "Hide" : "Show"} Floating Symbols
        </button>
      </ControlGroup>
    </aside>
  );
}

// Helper component for styling the controls
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