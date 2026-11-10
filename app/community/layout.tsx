import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | frontforumfocus",
  description: "Join the frontforumfocus community of founders, builders, and contributors.",
  alternates: { canonical: "https://frontforumfocus.com/community" },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
