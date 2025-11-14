import "./globals.css";

// You can import your fonts here if you've set them up
// For example, from 'next/font/google'
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Ed Dev Video Stage",
  description: "Video Stage Animation Framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* This body tag automatically gets the background gradient 
        and text color from your globals.css file.
      */}
      <body>
        {children}
      </body>
    </html>
  );
}