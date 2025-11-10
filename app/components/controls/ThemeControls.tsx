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
              className={`btn-glass
                ${activeRatio.id === ratio.id ? "btn-glass-active" : ""}
              `}
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
              className={`btn-glass text-left
                ${theme.id === activeTheme ? "btn-glass-active" : ""}
              `}
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
          className={`btn-glass w-full text-left
            ${showSymbols ? "btn-glass-active" : ""}
          `}
        >
          {showSymbols ? "Hide" : "Show"} Floating Symbols
        </motion.button>
      </ControlGroup>
    </>
  );
}