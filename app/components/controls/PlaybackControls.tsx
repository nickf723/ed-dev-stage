"use client";
import { motion } from "framer-motion";
import { RefreshCw, ChevronsRight } from "lucide-react";
import { buttonHoverTap } from "./buttonHoverTap";
import { ControlGroup } from "./ControlGroup";

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
          className="btn-glass flex w-full items-center justify-center gap-2"
        >
          <RefreshCw size={14} />
          Reset
        </motion.button>
        <motion.button
          {...buttonHoverTap}
          onClick={onNext}
          className="btn-glass-next flex w-full items-center justify-center gap-2"
        >
          <ChevronsRight size={14} />
          Next Step
        </motion.button>
      </div>
    </ControlGroup>
  );
}