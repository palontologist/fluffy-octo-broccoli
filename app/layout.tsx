import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { PosthogProvider } from "./providers/PosthogProvider";
import { PosthogPageView } from "./components/PosthogPageView";
import { TypographyControls } from "./components/TypographyControls";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrontForumFocus | Human intelligence infrastructure",
  description:
    "We build AI tools that show founders, freelancers, and mission-driven organisations exactly what their work is worth — before anyone else gets to define it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0a0a] text-zinc-200`}
      >
        <PosthogProvider>
          <Suspense>
            <PosthogPageView />
          </Suspense>
          {children}
          <Navbar />
          <TypographyControls />
          <Analytics />
        </PosthogProvider>
      </body>
    </html>
  );
}
