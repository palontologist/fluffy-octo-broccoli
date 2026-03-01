import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

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
  title: "FrontForumFocus | Impact Stories That Win Alignment & Funding",
  description:
    "We help founders and teams turn daily work into clear, trusted impact stories so they can win alignment, partners, and funding with confidence.",
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
        {children}
        <Navbar />
        <Analytics />
      </body>
    </html>
  );
}
