// Replace app/layout.tsx with this:

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";

// Setup the fonts just like your main ed-dev site
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Ed Dev Video Stage",
  description: "Recording stage for lesson videos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}