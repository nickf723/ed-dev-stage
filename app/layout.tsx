import "./styles/stage.css";
import "./styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Ed-Dev Stage",
  description: "Recording stage for educational shorts",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="stage-root">{children}</body>
    </html>
  );
}
