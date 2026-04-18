import Image from "next/image";
import Link from "next/link";

const CAL_DEMO_URL = "https://cal.com/georgekarani/30min";

export default function ForOrganizationsUseCasesPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/for-organizations"
          className="font-sans mb-8 inline-block text-sm text-zinc-400 hover:text-white"
        >
          ← Back to For Organizations
        </Link>

        <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl">
          Impact platform use cases
        </h1>
        <p className="font-sans mt-4 text-zinc-400">
          How the unified impact dashboard helps enterprises, funds, and programs
          measure, report, and optimize outcomes.
        </p>

        <p className="font-sans mt-8 text-zinc-300 leading-relaxed">
          A unified impact measurement platform that connects your operations,
          finances, and outcomes—giving you the real-time visibility you need to
          measure, report, and optimize.
        </p>

        {/* Core capabilities */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
            Core capabilities
          </h2>
          <ul className="mt-6 space-y-3 font-sans text-zinc-300">
            <li className="flex gap-3 rounded-lg border border-zinc-700/50 bg-zinc-900/40 p-4">
              <span className="text-emerald-400">•</span>
              <span>
                <strong className="text-white">Unified Impact Dashboard</strong> — Combine
                financial, operational, and program data in one place. See the
                complete picture of your impact.
              </span>
            </li>
            <li className="flex gap-3 rounded-lg border border-zinc-700/50 bg-zinc-900/40 p-4">
              <span className="text-emerald-400">•</span>
              <span>
                <strong className="text-white">ESG & Impact Reporting</strong> — Generate
                clear, audit-ready reports for investors, donors, boards, and
                regulators in minutes—not weeks.
              </span>
            </li>
            <li className="flex gap-3 rounded-lg border border-zinc-700/50 bg-zinc-900/40 p-4">
              <span className="text-emerald-400">•</span>
              <span>
                <strong className="text-white">Decision Support Analytics</strong> — See
                which programs, regions, or portfolios drive the strongest
                financial and social returns. Optimize intelligently.
              </span>
            </li>
            <li className="flex gap-3 rounded-lg border border-zinc-700/50 bg-zinc-900/40 p-4">
              <span className="text-emerald-400">•</span>
              <span>
                <strong className="text-white">Real-Time Monitoring</strong> — Track
                progress toward ESG targets, SDG commitments, and custom outcome
                metrics in real-time.
              </span>
            </li>
            <li className="flex gap-3 rounded-lg border border-zinc-700/50 bg-zinc-900/40 p-4">
              <span className="text-emerald-400">•</span>
              <span>
                <strong className="text-white">Integration Ready</strong> — Connect to
                your existing systems—Salesforce, accounting software, program
                management tools—seamlessly.
              </span>
            </li>
          </ul>
        </section>

        {/* Products & Pricing */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
            Products & Pricing
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/50 bg-zinc-900/40 p-6">
              <span className="font-mono text-xs font-medium text-emerald-400">
                FREE TOOL
              </span>
              <h3 className="font-serif mt-2 text-lg font-semibold text-white">
                Carbon Calculator
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Calculate your organization's carbon footprint instantly. Free tool available at our dashboard.
              </p>
              <a
                href="https://dashboard.frontforumfocus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-sans text-sm text-emerald-400 hover:text-emerald-300"
              >
                Access Calculator →
              </a>
            </div>
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <span className="font-mono text-xs font-medium text-amber-400">
                $500 / report
              </span>
              <h3 className="font-serif mt-2 text-lg font-semibold text-white">
                Custom Impact Reports
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400 leading-relaxed">
                Tailored analysis with 3 key metrics specific to your industry. Get actionable insights on what matters most to your stakeholders.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 font-sans text-xs text-zinc-400">
                  <span className="text-emerald-400">✓</span>
                  3 industry-specific metrics
                </li>
                <li className="flex items-center gap-2 font-sans text-xs text-zinc-400">
                  <span className="text-emerald-400">✓</span>
                  Custom analysis & recommendations
                </li>
                <li className="flex items-center gap-2 font-sans text-xs text-zinc-400">
                  <span className="text-emerald-400">✓</span>
                  PDF report with actionable insights
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CAL_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-600 bg-zinc-800/60 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            Book a demo
          </a>
          <Link
            href="/for-organizations"
            className="font-sans text-sm text-zinc-400 underline hover:text-white"
          >
            Back to For Organizations
          </Link>
        </div>
      </div>
    </main>
  );
}
