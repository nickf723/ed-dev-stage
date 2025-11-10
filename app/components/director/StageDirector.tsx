"use client";
import React, { useState, useEffect, createContext, useContext, ReactNode } from "react";

// -------------------------------------------
// Types
// -------------------------------------------

export type StageInstruction =
  | { type: "spawn"; component: string; props: any }
  | { type: "update"; id: string; props: any }
  | { type: "remove"; id: string }
  | { type: "setBackground"; mode: string }
  | { type: "clear" };

interface StageElement {
  id: string;
  type: string;
  props: any;
}

interface StageContextType {
  elements: StageElement[];
  backgroundMode: string;
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

export const StageDirector = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<StageElement[]>([]);
  const [backgroundMode, setBackgroundMode] = useState("aurora");

  const execute = (instruction: StageInstruction) => {
    switch (instruction.type) {
      case "spawn":
        setElements((prev) => [
          ...prev,
          { id: crypto.randomUUID(), type: instruction.component, props: instruction.props },
        ]);
        break;

      case "update":
        setElements((prev) =>
          prev.map((el) => (el.id === instruction.id ? { ...el, props: { ...el.props, ...instruction.props } } : el))
        );
        break;

      case "remove":
        setElements((prev) => prev.filter((el) => el.id !== instruction.id));
        break;

      case "setBackground":
        setBackgroundMode(instruction.mode);
        break;

      case "clear":
        setElements([]);
        break;

      default:
        console.warn("Unknown instruction:", instruction);
    }
  };

  return (
    <StageContext.Provider value={{ elements, backgroundMode, execute }}>
      {children}
    </StageContext.Provider>
  );
};
