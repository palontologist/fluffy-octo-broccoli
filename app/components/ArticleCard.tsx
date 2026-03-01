import Link from "next/link";
import type { ArticleSlug } from "@/app/data/articles";

type ArticleCardProps = {
  slug: ArticleSlug;
  title: string;
  subtitle?: string;
  date: string;
  series: string;
  authors: string;
  excerpt: string;
};

export function ArticleCard({
  slug,
  title,
  subtitle,
  date,
  series,
  authors,
  excerpt,
}: ArticleCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 md:p-8 transition-colors hover:border-zinc-600">
      <p className="font-sans text-xs text-zinc-500">{date}</p>
      <p className="font-mono mt-1 text-xs uppercase tracking-wider text-zinc-500">
        {series}
      </p>
      <p className="font-sans mt-1 text-sm text-zinc-400">{authors}</p>
      <h2 className="font-serif mt-4 text-xl font-semibold text-white md:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans mt-2 text-zinc-400 italic">{subtitle}</p>
      )}
      <p className="font-sans mt-4 text-zinc-300 leading-relaxed">{excerpt}</p>
      <Link
        href={`/impact-intelligence/articles/${slug}`}
        className="font-sans mt-6 inline-block text-sm font-medium text-white underline decoration-zinc-500 underline-offset-2 hover:decoration-white"
      >
        Read full article →
      </Link>
    </article>
  );
}
