import Link from "next/link";

const GRETA_APP_URL = "https://greta.frontforumfocus.com";
const CAL_DEMO_URL = "https://cal.com/georgekarani/30min";

export default function ForFoundersUseCasesPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/for-founders"
          className="font-sans mb-8 inline-block text-sm text-zinc-400 hover:text-white"
        >
          ← Back to For Founders
        </Link>

        <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl">
          Greta for Founders
        </h1>
        <p className="font-sans mt-4 text-zinc-400">
          Track your activities against your Life Mission and get The Verdict — 
          an AI-powered Impact Score that's brutally honest about your impact.
        </p>

        {/* How it works */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
            How Greta works
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <span className="font-mono text-sm font-medium text-emerald-400">
                1
              </span>
              <h3 className="font-serif mt-2 text-lg font-semibold text-white">
                Define Your Life Mission
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Set your North Star — the core purpose that drives your work as a founder.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <span className="font-mono text-sm font-medium text-emerald-400">
                2
              </span>
              <h3 className="font-serif mt-2 text-lg font-semibold text-white">
                Track Activities
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Log your daily work — meetings, building, fundraising, admin — and let Greta analyze it.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <span className="font-mono text-sm font-medium text-emerald-400">
                3
              </span>
              <h3 className="font-serif mt-2 text-lg font-semibold text-white">
                Get The Verdict
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Receive your Impact Score with brutal, sarcastic honesty about how aligned you are with your mission.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
            Core Features
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <h3 className="font-serif text-lg font-semibold text-white">
                The Verdict
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                AI that analyzes your activities against your mission and delivers a blunt, sarcastic Impact Score. No fluff — just the truth.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <h3 className="font-serif text-lg font-semibold text-white">
                Connect with Changemakers
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Find and connect with founders who share your goals and mission. Build your tribe of impact-driven peers.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <h3 className="font-serif text-lg font-semibold text-white">
                Opportunity Tab
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Access exclusive communities, job opportunities, and resources tailored to your mission and goals.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <h3 className="font-serif text-lg font-semibold text-white">
                Value over Noise
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Greta isn't a productivity app — it's an impact instrument. Focus on quality, not just quantity.
              </p>
            </div>
          </div>
        </section>

        {/* Sample Verdict */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
            Sample Verdict
          </h2>
          <div className="mt-6 rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
            <div className="font-mono text-sm text-zinc-400 mb-4">
              Your Impact Score: <span className="text-amber-400">62/100</span>
            </div>
            <p className="font-serif text-lg text-white italic">
              "You're spending 40% of your time on investor updates. Noble, but the ROI is questionable. 
              Your product work? That's where the magic happens — keep doubling down there. 
              And please, stop doomscrolling LinkedIn at 2am thinking it's 'market research.'"
            </p>
          </div>
        </section>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <a
            href={GRETA_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500"
          >
            Get Your Verdict
          </a>
          <a
            href={CAL_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-600 px-6 py-3 font-sans text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Book a demo
          </a>
        </div>
      </div>
    </main>
  );
}
