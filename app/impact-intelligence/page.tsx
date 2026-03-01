import { PodcastCarousel } from "../components/PodcastCarousel";
import { ArticleCard } from "../components/ArticleCard";
import { EmailSubscribe } from "../components/EmailSubscribe";
import { articles } from "../data/articles";

export default function ImpactIntelligencePage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-12 md:px-12 lg:px-24">
      {/* Intro */}
      <section className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-lg leading-relaxed text-zinc-400">
          A newsletter and podcast on how impact, capital, and technology are
          turning into real infrastructure—not just PR stories.
        </p>
      </section>

      {/* Email subscribe */}
      <section className="mx-auto mt-12 max-w-2xl">
        <EmailSubscribe />
      </section>

      {/* Article cards */}
      <section className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            title={article.title}
            subtitle={article.subtitle}
            date={article.date}
            series={article.series}
            authors={article.authors}
            excerpt={article.excerpt}
          />
        ))}
      </section>

      {/* Coming soon: Trends of Impact 2026 */}
      <section className="mx-auto mt-20 max-w-3xl rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-8 md:p-10">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
          Coming April 2026
        </span>
        <h2 className="font-serif mt-2 text-2xl font-semibold text-white md:text-3xl">
          Trends of Impact 2026
        </h2>
        <p className="mt-4 font-sans text-zinc-400 leading-relaxed">
          A forward-looking analysis of how impact, trust, and capital will
          evolve in 2026. Where will the smart money go? Which frameworks will
          define the next wave of impact ventures? Stay tuned for the full
          article—we&apos;re building it for founders, funders, and ecosystem
          builders who want to see around the corner.
        </p>
        <p className="mt-4 font-sans text-sm text-zinc-500">
          Full article will be available on this page in April 2026.
        </p>
      </section>

      {/* Podcast - horizontal carousel (auto-scrolling) */}
      <PodcastCarousel />
    </main>
  );
}
