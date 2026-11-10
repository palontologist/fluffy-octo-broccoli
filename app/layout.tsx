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
  title: "frontforumfocus | impact OS",
  description: "Impact Brain scores any activity across the 17 UN SDGs. Turn what you did into proof. Runs on your phone.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "frontforumfocus | impact OS",
    description: "Impact Brain scores any activity across the 17 UN SDGs. Turn what you did into proof. Runs on your phone.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FrontForumFocus Impact OS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "frontforumfocus | impact OS",
    description: "Impact Brain scores any activity across the 17 UN SDGs. Turn what you did into proof. Runs on your phone.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://frontforumfocus.com",
  },
  keywords: [
    "impact brain",
    "frontforumfocus",
    "SDG impact",
    "impact tracking",
    "freelancer value",
    "impact app",
    "verify impact",
  ],
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FrontForumFocus",
              "url": "https://frontforumfocus.com",
              "logo": "https://frontforumfocus.com/og-image.png",
              "description": "Impact Brain scores any activity across the 17 UN SDGs. Turn what you did into proof.",
              "sameAs": [
                "https://www.linkedin.com/in/georgekarani",
                "https://www.facebook.com/frontforumfocus/",
                "https://www.instagram.com/frontforumfocus"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Impact Brain",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Android",
              "url": "https://frontforumfocus.com",
              "description": "Type what you did. Get its impact across the 17 UN SDGs. Runs on your phone.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
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
