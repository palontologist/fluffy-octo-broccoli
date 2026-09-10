"use client";

import Link from "next/link";

export default function ImpactIntelligencePage() {
  const articles = [
    {
      title: "The Death of Performative Impact",
      edition: "Final Edition • 2026",
      subtitle: "Why resilience, sovereignty, and infrastructure became the new language of impact in 2026.",
      summary: "For years, ESG existed largely in the realm of narrative and annual PDFs. But in 2026, capital moved toward energy security, industrial capability, and data platforms. Impact is no longer a PR statement—it has been absorbed directly into infrastructure.",
      url: "https://www.linkedin.com/pulse/death-performative-impact-frontforumfocus-wgbsf/",
      featured: true,
      tags: ["Infrastructure", "Sovereignty", "dMRV", "Capital Reallocation"],
    },
    {
      title: "Testing the Next Generation of Edge AI",
      edition: "Technical Series",
      subtitle: "Sub-3B micro-models and on-device tool calling for autonomous hardware.",
      summary: "Exploring how offline-first, low-power micro-LLMs on mobile and RISC-V silicon transform physical device interaction in emerging markets.",
      url: "https://www.linkedin.com/company/frontforumfocus",
      featured: false,
      tags: ["Edge AI", "LiteRT", "RISC-V", "Robotics"],
    },
    {
      title: "Ahead of the Curve: Silicon to Wearables",
      edition: "Hardware Series",
      subtitle: "Examining the trajectory of compute from 1990 silicon to ambient AI wearables.",
      summary: "A deep dive into on-device intelligence, low-power sensing, and the economics of distributed hardware ecosystems.",
      url: "https://www.linkedin.com/company/frontforumfocus",
      featured: false,
      tags: ["Hardware", "Wearables", "Sensors"],
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 pt-32 pb-32 selection:bg-emerald-500 selection:text-black font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-emerald-400">
            Impact Intelligence • Publication
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Where changemakers connect, compound, <br className="hidden sm:inline" />
            <span className="italic font-serif text-emerald-400">and unlock what's next.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Rigorous analysis on the convergence of climate capital, sovereign infrastructure, and frontier technology.
          </p>
        </div>

        {/* Featured Article: The Death of Performative Impact */}
        {articles.filter(a => a.featured).map((article) => (
          <div
            key={article.title}
            className="p-8 sm:p-10 rounded-2xl border border-emerald-500/40 bg-emerald-950/10 space-y-6 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                {article.edition}
              </span>
              <div className="flex gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                {article.title}
              </h2>
              <p className="text-sm text-emerald-300/90 font-medium">
                {article.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
              {article.summary}
            </p>

            <div className="pt-2">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs transition-colors"
              >
                Read Full Article on LinkedIn ↗
              </a>
            </div>
          </div>
        ))}

        {/* Other Publications Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif text-white">Archived Insights &amp; Hardware Series</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.filter(a => !a.featured).map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 transition-all space-y-3 block group"
              >
                <div className="text-[11px] font-mono text-neutral-500 uppercase">{article.edition}</div>
                <h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {article.title} ↗
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {article.summary}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Social Links Callout */}
        <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 text-center space-y-3">
          <p className="text-xs text-neutral-400">
            Follow our ongoing research and articles across platforms:
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-neutral-300">
            <a href="https://www.linkedin.com/pulse/death-performative-impact-frontforumfocus-wgbsf/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">LinkedIn Article ↗</a>
            <span>•</span>
            <a href="https://x.com/frontforumfocus" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">X (Twitter) ↗</a>
            <span>•</span>
            <a href="https://instagram.com/frontforumfocus" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Instagram ↗</a>
          </div>
        </div>

      </div>
    </main>
  );
}
