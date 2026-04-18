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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FrontForumFocus",
  "description": "We build AI tools that show founders, freelancers, and mission-driven organisations exactly what their work is worth.",
  "url": "https://frontforumfocus.com",
  "product": [
    {
      "@type": "Product",
      "name": "Greta",
      "description": "The Impact Instrument for changemakers. Track activities and get an Impact Score based on your Life Mission.",
      "brand": {
        "@type": "Brand",
        "name": "FrontForumFocus"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "FrontForumFocus | Human intelligence infrastructure",
  description:
    "We build AI tools that show founders, freelancers, and mission-driven organisations exactly what their work is worth — before anyone else gets to define it.",
  keywords: ["impact measurement", "AI tools", "founder tools", "mission tracking", "impact score", "life mission"],
  authors: [{ name: "FrontForumFocus" }],
  openGraph: {
    title: "FrontForumFocus | Human intelligence infrastructure",
    description: "We build AI tools that show founders, freelancers, and mission-driven organisations exactly what their work is worth.",
    url: "https://frontforumfocus.com",
    siteName: "FrontForumFocus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FrontForumFocus | Human intelligence infrastructure",
    description: "We build AI tools that show founders, freelancers, and mission-driven organisations exactly what their work is worth.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/s.png',
    shortcut: '/s.png',
    apple: '/s.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
