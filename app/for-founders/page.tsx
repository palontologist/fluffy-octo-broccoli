import Image from "next/image";
import Link from "next/link";

const GRETA_APP_URL = "https://greta.frontforumfocus.com";
const CAL_DEMO_URL = "https://cal.com/georgekarani/30min";

export default function ForFoundersPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <section className="text-center">
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            For Founders
          </h1>
          <p className="font-sans mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Greta maps your calendar, tasks, and payments into a live picture of
            how your time turns into revenue, runway, and valuation—so you can
            stop guessing and start compounding on purpose.
          </p>
        </section>

        {/* Three screenshots - layout like reference (static, side by side) */}
        <section className="mt-16 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          <div className="flex-shrink-0 w-[280px] overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/40 shadow-xl md:w-[240px]">
            <div className="relative aspect-[9/19] w-full">
              <Image
                src="/n.png"
                alt="Greta – Define your mission and North Star"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
          <div className="flex-shrink-0 w-[280px] overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/40 shadow-xl md:w-[240px]">
            <div className="relative aspect-[9/19] w-full">
              <Image
                src="/nn.png"
                alt="Greta – See your alignment and insights"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
          <div className="flex-shrink-0 w-[280px] overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/40 shadow-xl md:w-[240px]">
            <div className="relative aspect-[9/19] w-full">
              <Image
                src="/screenshot.png"
                alt="Greta – Set up and measure your impact"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
        </section>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={GRETA_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500"
          >
            Try Greta free
          </a>
          <Link
            href="/for-founders/use-cases"
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
