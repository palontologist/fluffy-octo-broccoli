import Link from "next/link";

const PLAY_STORE_BETA = "https://play.google.com/apps/internaltest/4699935012830144337";

export default function ProductsPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-28">
      <div className="mx-auto max-w-4xl space-y-20">
        {/* Header */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            About Impact Brain
          </div>
          <h1 className="max-w-3xl font-serif text-4xl font-normal leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl">
            Capture forgotten work. Prove your value.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Impact Brain helps freelancers and changemakers catch forgotten activities — work, transport, spending, learning — and turn them into Weekly Impact Proof Reports mapped to the 17 UN SDGs.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={PLAY_STORE_BETA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              Join the Android beta →
            </a>
            <Link
              href="/community"
              className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.02] px-6 py-3 text-sm font-medium text-neutral-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              Join the community
            </Link>
          </div>
        </header>

        {/* Philosophy */}
        <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">The philosophy</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Stopwatches don&apos;t measure value.</h2>
          </div>
          <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <p>
              Every existing tool treats humans like stopwatches instead of value creators. Impact Brain does the opposite. You type what you did, and it turns that into an outcome you can show. The north star is simple: translate your work into outcomes.
            </p>
            <p>
              The core loop is universal. One log, one translation, one counter. Surface copy varies lightly depending on what you want to do, but the engine underneath is the same for everyone.
            </p>
          </div>
        </section>

        {/* Origin */}
        <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">How it came to be</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Built from a real problem.</h2>
          </div>
          <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <p>
              It started as a way to prove value. Freelancers and changemakers do real work, but forgotten activities never become evidence. A bus trip, an M-Pesa payment, a lab session, a client call — the value disappears when it&apos;s time to get paid, win a client, or pass a review.
            </p>
            <p>
              Impact Brain fixes that with a simple loop: capture the activity, confirm the evidence, map it to SDGs and defensible metrics, and generate a Weekly Impact Proof Report you can actually use.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Who it&apos;s for</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Built for people who create value.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-card rounded-3xl p-6 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-400">Prove value</div>
              <h3 className="text-lg font-semibold text-white">Freelancers and changemakers</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Capture forgotten activities and turn them into Weekly Impact Proof Reports. Justify your rate, win clients, support invoices, and show real SDG-aligned value.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-6 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-400">Grow impact</div>
              <h3 className="text-lg font-semibold text-white">Individual contributors</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Count real contributions toward goals. Build proof for collaborations, brands, and rewards. Impact proof, derived from the same log, with SDG counter contributions attached.
              </p>
            </div>
          </div>
          <p className="text-sm text-neutral-400">Founders of ventures are coming next. Your proof carries forward.</p>
        </section>

        {/* Calculator / Trust */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">The calculator</p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">Transparent by design.</h2>
            <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
              Type an activity. Impact App maps it to all 17 UN SDGs and scores it across four dimensions: economic, social, environmental, and time. Time is money, so hours times your rate. Every result comes with a confidence score.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Rules are open and inspectable. Each SDG has a documented rationale.",
              "Scores are bounded, from -100 to 100, and confidence is reported with every result.",
              "It runs on your phone. No cloud, no hidden black box.",
              "Inputs are your own words and your own hours. Nothing is estimated behind your back.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-relaxed text-neutral-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Share Proof */}
        <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Share Proof</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">One log, two proof formats.</h2>
          </div>
          <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <p>
              Pitch became Share Proof. Two formats, one log: Client and value proof for pitches, invoices, renewals, and collaborations. Impact proof for SDG-aligned partners, brands, and rewards, with SDG counter contributions attached. The founder view is deferred, and framed as coming next.
            </p>
            <p>
              Coming later: opportunities and rewards from impact-focused brands, powered by the same verified translated outcomes and SDG counters. A layer on top, not a new identity system or a separate app.
            </p>
          </div>
        </section>

        {/* Marketplace */}
        <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Marketplace layer</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Proof before pricing.</h2>
          </div>
          <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <p>
              Brands and private buyers onboard as Partners, not as a separate product. They post outcome-based briefs. Individuals apply with Share Proof generated from relevant translated outcomes. Brands evaluate fit and evidence, not a score. No fake universal impact price. Pricing is agreed per engagement, and the log is the system of record.
            </p>
            <p>
              Start narrow. Pilot with one segment, curate the first matches by hand, learn what pricing impact means in practice before building open discovery.
            </p>
          </div>
        </section>

        {/* Intent */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 text-center space-y-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Onboarding as intent</p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl text-balance">Same tools. Your intent.</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            Onboarding asks what you want to use this for, not who you are. Prove my value to clients and collaborators. Track and grow my impact. Show progress for my venture, coming next. Everyone gets the same tools. The intent only tailors prompts and defaults.
          </p>
          <div className="pt-2">
            <a
              href={PLAY_STORE_BETA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              Join the Android beta →
            </a>
          </div>
          <p className="text-xs text-neutral-500">Free on Google Play. Runs on your phone.</p>
        </section>
      </div>
    </main>
  );
}
