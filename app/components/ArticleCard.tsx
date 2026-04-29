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
    <Link href={`/impact-intelligence/articles/${slug}`}>
      <article className="group rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 md:p-8 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/60 hover:shadow-lg hover:shadow-zinc-900/50 cursor-pointer h-full flex flex-col">
        {/* Metadata */}
        <div className="space-y-1 mb-4">
          <p className="font-sans text-xs text-zinc-500">{date}</p>
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            {series}
          </p>
          <p className="font-sans text-xs text-zinc-400">{authors}</p>
        </div>

        {/* Title */}
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-200 line-clamp-3">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-sans text-sm md:text-base text-zinc-300 italic mb-4">
            {subtitle}
          </p>
        )}

        {/* Excerpt */}
        <p className="font-sans text-sm md:text-base text-zinc-300 leading-relaxed mb-6 flex-grow line-clamp-3">
          {excerpt}
        </p>

        {/* CTA */}
        <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-emerald-400 transition-colors duration-200">
          <span>Read full article</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>
      </article>
    </Link>
  );
}
