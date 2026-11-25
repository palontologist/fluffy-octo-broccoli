import Image from "next/image";
import { EmailSubscribe } from "../components/EmailSubscribe";

const UBQT_COMMUNITY_URL = "https://ubqt.joinubqt.com/l/E820fYTD";

export default function CommunityPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-28">
      <div className="mx-auto max-w-5xl space-y-20">
        {/* Header */}
        <header className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            FrontForumFocus Community
          </div>
          <h1 className="font-serif text-4xl font-normal leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl">
            Builders, founders, and changemakers.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            A community of like-minded people coming together to solve the world&apos;s most pressing issues — with proof, not promises.
          </p>
          <div className="pt-2">
            <a
              href={UBQT_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              Join the global impact community →
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-neutral-400">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">Follow</span>
            <a href="https://www.linkedin.com/company/frontforumfocus/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
            <a href="https://instagram.com/frontforumfocus" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Instagram</a>
            <a href="https://x.com/frontforumfocus" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">X</a>
            <a href="https://www.youtube.com/channel/UCRLh0JhKndUJppDIBegrRSg" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">YouTube</a>
          </div>
        </header>

        {/* Community Initiatives */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Community initiatives</p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">Building together, measuring what matters.</h2>
            <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
              Real projects from the FrontForumFocus community, turning work into verifiable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="glass-card glow-accent rounded-3xl overflow-hidden flex flex-col justify-between">
              <div className="relative h-44 w-full">
                <Image src="/community.jpg" alt="FrontForumFocus community initiative" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0c] via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-7 space-y-5 flex flex-col justify-between flex-1">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-400">Impact Measurement</div>
                  <h3 className="text-2xl font-serif text-white">Electric Vehicle Impact Project</h3>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    We used the Impact Brain measurement app in an electric vehicle project in collaboration with Skill Shark and FrontForumFocus community members. The initiative explored how real-world mobility actions can be logged, measured, and turned into verifiable impact.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-xs text-neutral-400">
                  Collaboration: <span className="text-neutral-200">Skill Shark × FrontForumFocus community</span>
                </div>
              </div>
            </article>

            <article className="glass-card rounded-3xl p-6 sm:p-7 space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-400">Open Community</div>
                <h3 className="text-2xl font-serif text-white">Impact Brain Beta Community</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Join builders, freelancers, and changemakers testing Impact Brain, sharing feedback, and shaping how impact gets measured. We&apos;re building the tools and the community together.
                </p>
              </div>
              <a
                href={UBQT_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.02] px-5 py-3 text-sm font-medium text-neutral-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                Join on UBQT →
              </a>
            </article>
          </div>
        </section>

        {/* Events & Highlights */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Events &amp; highlights</p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">Conversations that move impact forward.</h2>
          </div>
          <article className="glass-card rounded-3xl p-6 sm:p-7 space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-500">
              <span className="text-emerald-400">Past event</span>
              <span>•</span>
              <span>Fri, Mar 7, 2025</span>
              <span>•</span>
              <span>2:00 PM - 3:00 PM</span>
              <span>•</span>
              <span>Online</span>
            </div>
            <h3 className="text-2xl font-serif text-white">Prove Your Impact—and Unlock Further Support</h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              By FrontForumFocus. A conversation on making impact visible, verifiable, and ready for support.
            </p>
            <a
              href="https://www.linkedin.com/events/7302775841225105409?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-neutral-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              View event on LinkedIn →
            </a>
          </article>
        </section>

        {/* Newsletter / Updates */}
        <section className="glass-card max-w-3xl rounded-3xl p-6 sm:p-8">
          <div className="mb-5 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Stay in the loop</p>
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
