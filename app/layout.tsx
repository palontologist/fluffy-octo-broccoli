import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "FrontForumFocus | The Verifiable Impact Layer",
  description: "Connect solar inverters, microgrids, and field contributors. Automate dMRV, eliminate audit lag, and capture premium credit pricing.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "FrontForumFocus | The Verifiable Impact Layer",
    description: "Automated dMRV and verifiable ground-truth telemetry for clean energy assets.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} bg-neutral-950 text-neutral-100 antialiased selection:bg-emerald-500 selection:text-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
