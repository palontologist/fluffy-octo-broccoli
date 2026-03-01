export const articles = [
  {
    slug: "rise-of-impact-investment",
    title: "The Rise of Impact Investment: What Does Trust Really Mean?",
    subtitle: "Welcome to the new era of Impact. We've opened the door and guess what? Proof's inside.",
    date: "Aug 02, 2025",
    series: "Edition 1 of 3, The Trust Series",
    authors: "George Karani & Rosa Schmidt",
    excerpt:
      "This is the first edition of our limited 3-part series exploring the changing role of trust in the impact economy. Trust has transcended its traditional role as a mere sentiment, becoming a crucial signal that investors, customers, and partners are diligently seeking.",
  },
  {
    slug: "where-will-trust-be-built-2030",
    title: "Where will trust actually be built in 2030 and who gets to shape it?",
    subtitle: "Edition 2 of our trust series.",
    date: "Feb 18, 2026",
    series: "Edition 2 of 3, The Trust Series",
    authors: "Rosa Schmidt & George Karani",
    excerpt:
      "We used to think of brand-building as a straight path: tell the story, sell the promise, collect the growth. That line is bending. In a world where new products appear hourly, the scarce resource isn't attention anymore—it's belief and trust.",
  },
] as const;

export type ArticleSlug = (typeof articles)[number]["slug"];
