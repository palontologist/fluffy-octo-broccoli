import { articles, type ArticleSlug } from "@/app/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Article1 } from "@/app/components/articles/Article1";
import { Article2 } from "@/app/components/articles/Article2";

const articleComponents: Record<ArticleSlug, React.ComponentType> = {
  "rise-of-impact-investment": Article1,
  "where-will-trust-be-built-2030": Article2,
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const typedSlug = slug as ArticleSlug;
  const article = articles.find((a) => a.slug === typedSlug);
  if (!article || !(typedSlug in articleComponents)) notFound();

  const FullArticle = articleComponents[typedSlug];

  return (
    <main className="min-h-screen px-6 pb-32 pt-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/impact-intelligence"
          className="font-sans mb-8 inline-block text-sm text-zinc-400 hover:text-white"
        >
          ← Back to Impact Intelligence
        </Link>
        <FullArticle />
      </div>
    </main>
  );
}
