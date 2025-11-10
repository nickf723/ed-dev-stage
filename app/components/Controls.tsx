"use client";
// Import our new, separated control components
import { PlaybackControls } from "./controls/PlaybackControls";
import { LessonControls } from "./controls/LessonControls";
import { ThemeControls } from "./controls/ThemeControls";
import { ControlGroup } from "./controls/ControlGroup"; // Import ControlGroup

// (All the types and props are the same as before)
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

export function Controls(props: ControlsProps) {
  return (
    <aside className="glass w-96 flex-shrink-0 p-6 overflow-y-auto h-full">
      <h2 className="text-lg font-bold text-cyan-300">
        Video Stage Controls
      </h2>
      
      {/* This is so much cleaner! We just pass the props 
        down to the specialized components.
      */}
      
      <PlaybackControls
        onNext={props.onNext}
        onReset={props.onReset}
      />
      
      <LessonControls
        activeLessonId={props.activeLessonId}
        onSelectLesson={props.onSelectLesson}
      />
      
      <ThemeControls
        activeTheme={props.activeTheme}
        activeRatio={props.activeRatio}
        showSymbols={props.showSymbols}
        themes={props.themes}
        ratios={props.ratios}
        onSelectRatio={props.onSelectRatio}
        onSelectTheme={props.onSelectTheme}
        onToggleSymbols={props.onToggleSymbols}
      />
    </aside>
  );
}