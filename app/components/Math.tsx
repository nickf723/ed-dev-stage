"use client";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

//Inline Math
export function M({ children }: { children: string }) {
  return <InlineMath math={children}/>;
}
//Block Math
export function MBlock({ children }: { children: string }) {
  return <BlockMath math={children}/>;
}