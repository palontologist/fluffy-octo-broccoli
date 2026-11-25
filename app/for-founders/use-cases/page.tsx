import Link from "next/link";

const GRETA_APP_URL = "https://play.google.com/apps/internaltest/4699935012830144337";

export default function ForFoundersUseCasesPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-28">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/for-founders"
          className="mb-8 inline-block text-sm text-neutral-400 transition-colors hover:text-white"
        >
          ← Back to For Founders
        </Link>

        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/90">
            For Founders
          </div>
          <h1 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl">
            Impact Brain for Founders
          </h1>
          <p className="text-base leading-relaxed text-neutral-400">
            Track your activities against your Life Mission and get The Verdict — an AI-powered Impact Score that&apos;s brutally honest about your impact.
          </p>
        </div>

        {/* How it works */}
        <section className="mt-16 space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">How it works</p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Three steps to clarity.</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["1", "Define Your Life Mission", "Set your North Star — the core purpose that drives your work as a founder."],
              ["2", "Track Activities", "Log your daily work — meetings, building, fundraising, admin — and let Impact Brain analyze it."],
              ["3", "Get The Verdict", "Receive your Impact Score with brutal, honest feedback about how aligned you are with your mission."],
            ].map(([num, title, body]) => (
              <div key={num} className="glass-card rounded-3xl p-6">
                <span className="font-mono text-sm text-emerald-400">{num}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Features */}
        <section className="mt-16 space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Core features</p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Built for focus, not noise.</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["The Verdict", "AI that analyzes your activities against your mission and delivers a blunt, honest Impact Score. No fluff — just the truth."],
              ["Connect with Changemakers", "Find and connect with founders who share your goals and mission. Build your tribe of impact-driven peers."],
              ["Opportunity Tab", "Access exclusive communities, job opportunities, and resources tailored to your mission and goals."],
              ["Value over Noise", "Impact Brain isn't a productivity app — it's an impact instrument. Focus on quality, not just quantity."],
            ].map(([title, body]) => (
              <div key={title} className="glass-card rounded-3xl p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Verdict */}
        <section className="mt-16 space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Sample verdict</p>
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <div className="font-mono text-sm text-neutral-400 mb-4">
              Your Impact Score: <span className="text-emerald-300">62/100</span>
            </div>
            <p className="font-serif text-xl leading-relaxed text-white/90">
              &ldquo;You&apos;re spending 40% of your time on investor updates. Noble, but the ROI is questionable. Your product work? That&apos;s where the magic happens — keep doubling down there. And please, stop doomscrolling LinkedIn at 2am thinking it&apos;s &apos;market research.&apos;&rdquo;
            </p>
          </div>
        </section>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <a
            href={GRETA_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-100"
          >
            Join the Android beta →
          </a>
        </div>
      </div>
    </main>
  );
}
