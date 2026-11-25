import Link from "next/link";

export default function UseCasesHubPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/90">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Use cases
        </div>
        <h1 className="mt-6 font-serif text-4xl font-normal tracking-tight text-white sm:text-6xl">
          Explore use cases
        </h1>
        <p className="mt-4 text-base text-neutral-400">
          Choose the path that fits what you&apos;re building.
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          <Link
            href="/for-founders/use-cases"
            className="glass-card rounded-3xl p-7 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400">For Founders</p>
            <h2 className="mt-3 font-serif text-2xl text-white">
              Prove your value
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              How Impact Brain works: log activities, get AI-powered insights, and see your mission alignment.
            </p>
            <span className="mt-5 inline-block text-sm font-medium text-emerald-300">
              View founder use cases →
            </span>
          </Link>

          <Link
            href="/for-organizations/use-cases"
            className="glass-card rounded-3xl p-7 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400">For Organizations</p>
            <h2 className="mt-3 font-serif text-2xl text-white">
              Measure impact at scale
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Unified impact dashboard, ESG reporting, and real-time monitoring for teams and organizations.
            </p>
            <span className="mt-5 inline-block text-sm font-medium text-emerald-300">
              View organization use cases →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
