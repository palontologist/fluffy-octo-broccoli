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
  title: "FrontForumFocus | The intelligence network for the impact economy",
  description:
    "FrontForumFocus is the intelligence network for the impact economy: weekly briefings, curated introductions, and a private community of founders who are building what matters.",
  keywords: ["impact measurement", "AI tools", "founder tools", "mission tracking", "impact score", "life mission"],
  authors: [{ name: "FrontForumFocus" }],
  metadataBase: new URL("https://frontforumfocus.com"),
  openGraph: {
    title: "FrontForumFocus | The intelligence network for the impact economy",
    description: "Weekly briefings, curated introductions, and a private community of founders building what matters.",
    url: "https://frontforumfocus.com",
    siteName: "FrontForumFocus",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/s.png",
        width: 512,
        height: 512,
        alt: "FrontForumFocus logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FrontForumFocus | The intelligence network for the impact economy",
    description: "Weekly briefings, curated introductions, and a private community of founders building what matters.",
    images: ["/s.png"],
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
