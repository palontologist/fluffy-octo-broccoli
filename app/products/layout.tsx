import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact App | frontforumfocus",
  description: "Turn what you did into proof. Impact App scores any activity across the 17 UN SDGs. Calculator, trust, and beta download.",
  alternates: { canonical: "https://frontforumfocus.com/products" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
