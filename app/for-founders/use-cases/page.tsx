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
          Greta use cases
        </h1>
        <p className="font-sans mt-4 text-zinc-400">
          How Greta helps founders map time to revenue, runway, and
          mission-aligned impact.
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
                Connect Your Calendar
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Pull in meetings, work blocks, and projects automatically from
                Google Calendar or Outlook.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <span className="font-mono text-sm font-medium text-emerald-400">
                2
              </span>
              <h3 className="font-serif mt-2 text-lg font-semibold text-white">
                AI Learns Your Patterns
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Greta automatically tags your activities and learns which types
                of work you focus on most.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <span className="font-mono text-sm font-medium text-emerald-400">
                3
              </span>
              <h3 className="font-serif mt-2 text-lg font-semibold text-white">
                Get Real Insights
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                See your effective hourly rate by client, time allocation by
                project type, and mission-alignment scores.
              </p>
            </div>
          </div>
        </section>

        {/* Sample insights */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
            Sample insights
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex flex-wrap items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-900/40 p-4">
              <span className="font-sans font-medium text-white">
                Supplier Calls
              </span>
              <span className="font-sans text-zinc-400">87% mission-aligned</span>
              <span className="font-sans text-emerald-400">— Double down</span>
            </li>
            <li className="flex flex-wrap items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-900/40 p-4">
              <span className="font-sans font-medium text-white">
                Fundraising & Admin
              </span>
              <span className="font-sans text-zinc-400">65% mission-aligned</span>
              <span className="font-sans text-amber-400">
                — Keep, but optimize
              </span>
            </li>
            <li className="flex flex-wrap items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-900/40 p-4">
              <span className="font-sans font-medium text-white">
                Social Media Posting
              </span>
              <span className="font-sans text-zinc-400">23% mission-aligned</span>
              <span className="font-sans text-zinc-400">— Delegate or cut</span>
            </li>
          </ul>
        </section>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <a
            href={GRETA_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500"
          >
            Try Greta free
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
