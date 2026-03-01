import Link from "next/link";

export default function UseCasesHubPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl">
          Explore use cases
        </h1>
        <p className="font-sans mt-4 text-zinc-400">
          Choose the offer that fits you.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Link
            href="/for-founders/use-cases"
            className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-8 text-left transition-colors hover:border-zinc-600 hover:bg-zinc-900/60"
          >
            <h2 className="font-serif text-xl font-semibold text-white">
              For Founders
            </h2>
            <p className="font-sans mt-2 text-sm text-zinc-400">
              How Greta works: connect your calendar, get AI-powered insights,
              and see your mission alignment. Try Greta free or book a demo.
            </p>
            <span className="font-sans mt-4 inline-block text-sm font-medium text-emerald-400">
              View founder use cases →
            </span>
          </Link>

          <Link
            href="/for-organizations/use-cases"
            className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-8 text-left transition-colors hover:border-zinc-600 hover:bg-zinc-900/60"
          >
            <h2 className="font-serif text-xl font-semibold text-white">
              For Organizations
            </h2>
            <p className="font-sans mt-2 text-sm text-zinc-400">
              Unified impact dashboard, ESG reporting, and real-time monitoring.
              Core capabilities and sample dashboard. Book a demo.
            </p>
            <span className="font-sans mt-4 inline-block text-sm font-medium text-emerald-400">
              View organization use cases →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
