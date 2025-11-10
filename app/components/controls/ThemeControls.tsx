"use client";
import { motion } from "framer-motion";
import { Paintbrush, Smartphone, Sparkles } from "lucide-react";
import { ControlGroup } from "./ControlGroup";
import { buttonHoverTap } from "./buttonHoverTap";

type Theme = { id: string; name: string };
type Ratio = { id: string; name: string; aspect: string };

interface ThemeControlsProps {
  activeTheme: string;
  activeRatio: Ratio;
  showSymbols: boolean;
  themes: Theme[];
  ratios: Ratio[];
  onSelectRatio: (ratio: Ratio) => void;
  onSelectTheme: (id: string) => void;
  onToggleSymbols: () => void;
}

export function ThemeControls({
  activeTheme, activeRatio, showSymbols, themes, ratios,
  onSelectRatio, onSelectTheme, onToggleSymbols
}: ThemeControlsProps) {
  return (
    <>
      <ControlGroup title="Aspect Ratio" icon={Smartphone}>
        <div className="grid grid-cols-2 gap-2">
          {ratios.map((ratio) => (
            <motion.button
              {...buttonHoverTap}
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
              {...buttonHoverTap}
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
          {...buttonHoverTap}
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
    </>
  );
}