import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast | frontforumfocus",
  description: "Conversations with founders and builders shaping the impact economy.",
  alternates: { canonical: "https://frontforumfocus.com/podcasts" },
};

export default function PodcastsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
