"use client";
import { motion } from "framer-motion";
import { RefreshCw, ChevronsRight } from "lucide-react";
import { buttonHoverTap } from "./buttonHoverTap";
import { ControlGroup } from "./ControlGroup"

interface PlaybackControlsProps {
  onReset: () => void;
  onNext: () => void;
}

export function PlaybackControls({ onReset, onNext }: PlaybackControlsProps) {
  return (
    <ControlGroup title="Playback" icon={ChevronsRight}>
      <div className="grid grid-cols-2 gap-2">
        <motion.button
          {...buttonHoverTap}
          onClick={onReset}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-neutral-700 
                     px-3 py-2 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-600"
        >
          <RefreshCw size={14} />
          Reset
        </motion.button>
        <motion.button
          {...buttonHoverTap}
          onClick={onNext}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-cyan-600 
                     px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-500 animate-pulse-subtle"
        >
          <ChevronsRight size={14} />
          Next Step
        </motion.button>
      </div>
    </ControlGroup>
  );
}