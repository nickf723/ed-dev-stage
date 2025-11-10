"use client";
import React from "react";
import { useStage } from "./StageDirector";
import { renderStageElement } from "./ComponentRegistry";

export const StageRenderer = () => {
  const { elements } = useStage();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {elements.map((el) => (
        <React.Fragment key={el.id}>
          {renderStageElement(el.type, el.props)}
        </React.Fragment>
      ))}
    </div>
  );
};
