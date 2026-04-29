"use client";

import Link from "next/link";
import { useScrollReveal } from "../components/useScrollReveal";

export default function TeamPage() {
  useScrollReveal(".animate-on-scroll", { start: "top 80%" });

  return (
    <main className="min-h-screen px-6 pb-32 pt-12 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl text-center animate-on-scroll mb-20">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">
          Meet the Team
        </h1>
        <p className="font-sans text-base md:text-lg leading-relaxed text-zinc-400">
          Builders, thinkers, and changemakers dedicated to turning impact, capital,
          and technology into real infrastructure.
        </p>
      </section>

      {/* Founder Profile */}
      <section className="mx-auto max-w-4xl mb-24 animate-on-scroll">
        <div className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-8 md:p-10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Info */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-3 inline-block">
                Founder &amp; CEO
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
                George Karani
              </h2>
              <p className="font-sans text-lg text-zinc-300 leading-relaxed mb-6">
                Passionate about building at the intersection of impact, technology,
                and capital. George leads FrontForumFocus with a mission to spotlight
                the real stories behind the impact economy.
              </p>
              <p className="font-sans text-zinc-400 mb-8">
                With deep expertise in scaling ventures, fundraising, and ecosystem
                building, George is dedicated to uncovering how trust, infrastructure,
                and real-world solutions shape the future of impact investing.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://cal.com/georgekarani/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 transition-colors px-6 py-3 rounded-lg font-sans font-semibold text-white"
                >
                  Schedule a Call
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://scaling-chainsaw-jade.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-sans font-semibold text-white"
                >
                  View Portfolio
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-500 hover:text-white text-zinc-300 transition-colors px-6 py-3 rounded-lg font-sans font-semibold"
                >
                  Twitter/X
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-500 hover:text-white text-zinc-300 transition-colors px-6 py-3 rounded-lg font-sans font-semibold"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Profile Visual */}
            <div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-700/50 shadow-lg">
                <img
                  src="/george.jpg"
                  alt="George Karani"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-4xl mb-24 animate-on-scroll">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
          Our Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎯",
              title: "Impact First",
              description:
                "We believe in building infrastructure that creates real, measurable impact—not just PR narratives.",
            },
            {
              icon: "🤝",
              title: "Authentic Conversations",
              description:
                "Through FrontForumFocus, we host candid conversations with founders, funders, and operators shaping the future.",
            },
            {
              icon: "🚀",
              title: "Enable Builders",
              description:
                "We provide intelligence, insights, and community to founders building ventures that matter.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl border border-zinc-700/50 bg-zinc-900/30 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-200"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="mx-auto max-w-4xl mb-24 animate-on-scroll">
        <div className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
            Events &amp; Speaking
          </h2>
          <p className="font-sans text-zinc-400 mb-8 leading-relaxed">
            We host regular events, mastermind sessions, and speaking engagements for
            founders, investors, and impact leaders. Get insights directly from those
            building the future of the impact economy.
          </p>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border border-zinc-700/50 bg-black/30 hover:border-zinc-600 transition-colors">
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                Founder Fireside Chats
              </h3>
              <p className="font-sans text-sm text-zinc-400 mb-4">
                Intimate conversations with founders building impact ventures. Share
                lessons, challenges, and wins.
              </p>
              <p className="font-sans text-xs text-zinc-500">
                Quarterly • Limited to 50 founders
              </p>
            </div>

            <div className="p-6 rounded-lg border border-zinc-700/50 bg-black/30 hover:border-zinc-600 transition-colors">
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                FrontForumFocus Live
              </h3>
              <p className="font-sans text-sm text-zinc-400 mb-4">
                Live podcast recordings where you can interact with guests and fellow
                builders in real-time.
              </p>
              <p className="font-sans text-xs text-zinc-500">
                Monthly • Open to community members
              </p>
            </div>

            <div className="p-6 rounded-lg border border-zinc-700/50 bg-black/30 hover:border-zinc-600 transition-colors">
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                Impact Capital Summit
              </h3>
              <p className="font-sans text-sm text-zinc-400 mb-4">
                Annual gathering of founders, VCs, and impact leaders to shape the
                future of impact investing.
              </p>
              <p className="font-sans text-xs text-zinc-500">
                Annual • Registration coming soon
              </p>
            </div>

            <div className="p-6 rounded-lg border border-zinc-700/50 bg-black/30 hover:border-zinc-600 transition-colors">
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                Speaking Engagements
              </h3>
              <p className="font-sans text-sm text-zinc-400 mb-4">
                George speaks at conferences and events on impact, capital, and
                technology.
              </p>
              <p className="font-sans text-xs text-zinc-500">
                Inquire for availability
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-600/10 to-emerald-600/5 border border-emerald-600/30 rounded-lg p-6 text-center">
            <p className="font-sans text-zinc-300 mb-4">
              Interested in attending or speaking at an event?
            </p>
            <a
              href="mailto:support@frontforumfocus.com"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 transition-colors px-6 py-2 rounded-lg font-sans font-semibold text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Podcast Promotion */}
      <section className="mx-auto max-w-4xl animate-on-scroll">
        <div className="text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
            Featured on FrontForumFocus Podcast
          </h2>
          <p className="font-sans text-zinc-400 mb-8">
            Listen to conversations with founders, funders, and operators building the
            future of the impact economy.
          </p>
          <Link
            href="/podcasts"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-8 py-3 rounded-lg font-sans font-semibold text-white"
          >
            Explore Podcast
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
