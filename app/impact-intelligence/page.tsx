"use client";

import { useEffect, useState } from "react";
import { ArticleCard } from "../components/ArticleCard";
import { EmailSubscribe } from "../components/EmailSubscribe";
import { articles } from "../data/articles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../components/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactIntelligencePage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useScrollReveal(".animate-on-scroll", { start: "top 80%" });
  useScrollReveal(".stagger-children", { start: "top 75%" });

  useEffect(() => {
    // Stagger animation for card grids
    const cardGrids = document.querySelectorAll(".card-grid");
    cardGrids.forEach((grid) => {
      const cards = grid.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Get unique series for filters
  const series = Array.from(new Set(articles.map((a) => a.series)));

  // Filter articles based on active filter
  const filteredArticles = activeFilter
    ? articles.filter((a) => a.series === activeFilter)
    : articles;

  return (
    <main className="min-h-screen px-6 pb-32 pt-12 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl text-center animate-on-scroll mb-16">
        <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-6">
          Impact Intelligence
        </h1>
        <p className="font-sans text-base md:text-lg leading-relaxed text-zinc-400">
          A newsletter on how impact, capital, and technology are turning into real
          infrastructure—not just PR stories. Weekly intelligence briefings for founders
          building what matters.
        </p>
      </section>

      {/* Filter Section */}
      {series.length > 0 && (
        <section className="mx-auto max-w-4xl mb-12 animate-on-scroll">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                activeFilter === null
                  ? "bg-zinc-100 text-zinc-900"
                  : "border border-zinc-700 text-zinc-300 hover:border-zinc-500"
              }`}
            >
              All Articles
            </button>
            {series.map((s) => (
              <button
                key={s}
                onClick={() => setActiveFilter(s)}
                className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                  activeFilter === s
                    ? "bg-zinc-100 text-zinc-900"
                    : "border border-zinc-700 text-zinc-300 hover:border-zinc-500"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="mx-auto max-w-4xl mb-20">
        <div className="card-grid grid gap-6 md:gap-8 lg:grid-cols-2">
          {filteredArticles.map((article) => (
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
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="font-sans text-zinc-400">
              No articles found in this series.
            </p>
          </div>
        )}
      </section>

      {/* Coming Soon Section */}
      <section className="mx-auto max-w-4xl mb-20 animate-on-scroll">
        <div className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-8 md:p-10">
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            Coming April 2026
          </span>
          <h2 className="font-serif mt-4 text-2xl md:text-3xl font-semibold text-white">
            Trends of Impact 2026
          </h2>
          <p className="mt-4 font-sans text-zinc-400 leading-relaxed">
            A forward-looking analysis of how impact, trust, and capital will evolve
            in 2026. Where will the smart money go? Which frameworks will define the
            next wave of impact ventures? Stay tuned for the full article—we&apos;re
            building it for founders, funders, and ecosystem builders who want to see
            around the corner.
          </p>
          <p className="mt-4 font-sans text-sm text-zinc-500">
            Full article will be available on this page in April 2026.
          </p>
        </div>
      </section>

      {/* Email Subscribe Section */}
      <section className="mx-auto max-w-4xl animate-on-scroll">
        <EmailSubscribe />
      </section>
    </main>
  );
}
