import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PosthogPageView } from "./components/PosthogPageView";
import { PosthogProvider } from "./providers/PosthogProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Impact Brain | Turn what you did into proof",
  description: "Impact Brain scores any activity across the 17 UN SDGs. Type what you did, get its impact. Runs on your phone.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Impact Brain | Turn what you did into proof",
    description: "Impact Brain scores any activity across the 17 UN SDGs. Runs on your phone.",
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
        <PosthogProvider>
          <Suspense fallback={null}>
            <PosthogPageView />
          </Suspense>
          <Navbar />
          {children}
          <Footer />
        </PosthogProvider>
      </body>
    </html>
  );
}
