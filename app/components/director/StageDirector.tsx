"use client";
import React, { useState, createContext, useContext, ReactNode } from "react";

// -------------------------------------------
// Types
// -------------------------------------------

// NEW: Define the modular background state
export interface BackgroundState {
  color: string;
  pattern: string;
  particles: string;
  decor: string;
}

export type StageInstruction =
  | { type: "spawn"; component: string; props: any }
  | { type: "update"; id: string; props: any }
  | { type: "remove"; id: string }
  // UPDATED: New instruction type for modular updates
  | { type: "updateBackground"; props: Partial<BackgroundState> }
  | { type: "clear" };

interface StageElement {
  id: string;
  type: string;
  props: any;
}

interface StageContextType {
  elements: StageElement[];
  // UPDATED: Expose the new state object
  backgroundState: BackgroundState;
  execute: (instruction: StageInstruction) => void;
}

// -------------------------------------------
// Context
// -------------------------------------------
const StageContext = createContext<StageContextType | null>(null);

export const useStage = () => {
  const ctx = useContext(StageContext);
  if (!ctx) throw new Error("useStage must be used within StageDirector");
  return ctx;
};

// -------------------------------------------
// StageDirector Component
// -------------------------------------------

// NEW: Define the default state
const DEFAULT_BACKGROUND_STATE: BackgroundState = {
  color: "default",
  pattern: "none",
  particles: "none",
  decor: "aurora",
};

export const StageDirector = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<StageElement[]>([]);
  // UPDATED: Use the new background state object
  const [backgroundState, setBackgroundState] = useState<BackgroundState>(
    DEFAULT_BACKGROUND_STATE
  );

  const execute = (instruction: StageInstruction) => {
    switch (instruction.type) {
      case "spawn":
        setElements((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            type: instruction.component,
            props: instruction.props,
          },
        ]);
        break;

      case "update":
        setElements((prev) =>
          prev.map((el) =>
            el.id === instruction.id
              ? { ...el, props: { ...el.props, ...instruction.props } }
              : el
          )
        );
        break;

      case "remove":
        setElements((prev) => prev.filter((el) => el.id !== instruction.id));
        break;

      // UPDATED: Handle the new modular instruction
      case "updateBackground":
        setBackgroundState((prev) => ({ ...prev, ...instruction.props }));
        break;

      case "clear":
        setElements([]);
        // UPDATED: Also reset background on clear
        setBackgroundState(DEFAULT_BACKGROUND_STATE);
        break;

      default:
        console.warn("Unknown instruction:", instruction);
    }
  };

  return (
    <StageContext.Provider
      // UPDATED: Pass down the new state object
      value={{ elements, backgroundState, execute }}
    >
      {children}
    </StageContext.Provider>
  );
};