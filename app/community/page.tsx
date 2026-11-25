"use client";

import { EmailSubscribe } from "../components/EmailSubscribe";

const UBQT_COMMUNITY_URL = "https://ubqt.joinubqt.com/l/E820fYTD";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 pt-24 pb-24 selection:bg-emerald-500 selection:text-black">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-emerald-400">
            FrontForumFocus Community
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Builders, Impact Founders &amp; Changemakers
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            A community of like-minded builders, impact founders, and changemakers coming together to solve the world&apos;s most pressing issues — with proof, not promises.
          </p>
          <div className="pt-2">
            <a
              href={UBQT_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-400"
            >
              Join the global impact community →
            </a>
          </div>
        </div>

        {/* Community Initiatives */}
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">Community initiatives</p>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">Building together</h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              Real projects from the FrontForumFocus community, measuring impact where it happens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 space-y-4 flex flex-col justify-between shadow-lg shadow-emerald-950/20">
              <div className="space-y-3">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Impact Measurement</div>
                <h3 className="text-xl font-semibold text-white">Electric Vehicle Impact Project</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  We used the Impact Brain measurement app in an electric vehicle project in collaboration with Skill Shark and FrontForumFocus community members. The initiative explored how real-world mobility actions can be logged, measured, and turned into verifiable impact.
                </p>
              </div>
              <div className="text-xs text-neutral-400">
                Collaboration: Skill Shark × FrontForumFocus community
              </div>
            </article>

            <article className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider">Open Community</div>
                <h3 className="text-xl font-semibold text-white">Impact Brain Beta Community</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Join builders, freelancers, and changemakers testing Impact Brain, sharing feedback, and shaping how impact gets measured. We&apos;re building the tools and the community together.
                </p>
              </div>
              <a
                href={UBQT_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-semibold text-neutral-200 transition-colors"
              >
                Join on UBQT →
              </a>
            </article>
          </div>
        </section>

        {/* Newsletter / Updates */}
        <section className="max-w-3xl mx-auto w-full p-6 sm:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/20">
          <div className="mb-4 text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">Stay in the loop</p>
          </div>
          <EmailSubscribe
            title="Get updates from FrontForumFocus"
            description="Community initiatives, Impact Brain updates, and stories from builders solving pressing problems. No spam."
          />
        </section>

      </div>
    </main>
  );
}
