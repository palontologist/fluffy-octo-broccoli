import Image from "next/image";
import Link from "next/link";

const CAL_DEMO_URL = "https://cal.com/georgekarani/30min";

export default function ForOrganizationsPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <section className="text-center">
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            For Organizations
          </h1>
          <p className="font-sans mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Impact dashboard shows how trust and collaboration move across teams
            and programs. Helps enterprises, funds, or programs see where the
            real outcomes are happening.
          </p>
        </section>

        <p className="font-sans mx-auto mt-6 max-w-3xl text-center text-zinc-400">
          A unified impact measurement platform that connects your operations,
          finances, and outcomes—giving you the real-time visibility you need to
          measure, report, and optimize.
        </p>

        {/* Core capabilities */}
        <section className="mt-16">
          <h2 className="font-serif text-xl font-semibold text-white md:text-2xl">
            Core capabilities
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5">
              <h3 className="font-sans font-semibold text-white">
                Unified Impact Dashboard
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                Combine financial, operational, and program data in one place.
                See the complete picture of your impact.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5">
              <h3 className="font-sans font-semibold text-white">
                ESG & Impact Reporting
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                Generate clear, audit-ready reports for investors, donors,
                boards, and regulators in minutes—not weeks.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5">
              <h3 className="font-sans font-semibold text-white">
                Decision Support Analytics
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                See which programs, regions, or portfolios drive the strongest
                financial and social returns. Optimize intelligently.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5">
              <h3 className="font-sans font-semibold text-white">
                Real-Time Monitoring
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                Track progress toward ESG targets, SDG commitments, and custom
                outcome metrics in real-time.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5 sm:col-span-2">
              <h3 className="font-sans font-semibold text-white">
                Integration Ready
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                Connect to your existing systems—Salesforce, accounting
                software, program management tools—seamlessly.
              </p>
            </li>
          </ul>
        </section>

        {/* Dashboard screenshot */}
        <section className="mt-16">
          <h2 className="font-serif text-xl font-semibold text-white md:text-2xl">
            Sample dashboard
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/40">
            <div className="relative aspect-video w-full md:aspect-[2/1]">
              <Image
                src="/impact-dash.png"
                alt="FrontForumFocus Impact Dashboard – AI Education Campaign example"
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <p className="font-mono text-2xl font-semibold text-emerald-400">
                $2.4M
              </p>
              <p className="font-sans text-sm text-zinc-400">
                Financial impact
              </p>
            </div>
            <div className="text-center">
              <p className="font-mono text-2xl font-semibold text-emerald-400">
                12,847
              </p>
              <p className="font-sans text-sm text-zinc-400">Lives impacted</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-2xl font-semibold text-emerald-400">
                8.6/10
              </p>
              <p className="font-sans text-sm text-zinc-400">ESG score</p>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/for-organizations/use-cases"
            className="inline-flex items-center rounded-lg border border-zinc-600 bg-zinc-800/60 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            Explore use cases
          </Link>
          <a
            href={CAL_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-600 bg-transparent px-6 py-3 font-sans text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Book a demo
          </a>
        </div>
      </div>
    </main>
  );
}
