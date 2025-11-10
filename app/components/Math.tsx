"use client";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

/**
 * Renders inline math notation.
 */
export function M({ children }: { children: string }) {
  return <InlineMath math={children} />;
}

/**
 * Renders block-level math notation.
 */
export function MBlock({ children }: { children: string }) {
  return <BlockMath math={children} />;
}