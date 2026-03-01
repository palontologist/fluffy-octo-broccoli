import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Subtle vertical light streaks background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)`,
          backgroundSize: "120px 100%",
        }}
      />
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-16 text-center md:px-12">
        {/* Abstract focal element - minimal sphere-like gradient */}

        {/* Hero text */}
        <h1 className="font-serif max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          We help founders and teams turn daily work into clear, trusted impact
          stories so they can win alignment, partners, and funding with
          confidence—otherwise their effort stays invisible, chaotic, and
          underfunded.
        </h1>

        {/* CTA card */}
        <div className="mt-16 rounded-2xl border border-zinc-700/50 bg-zinc-900/60 px-8 py-6 backdrop-blur-sm">
          <p className="font-sans mb-4 text-sm text-zinc-400">
            Start turning your work into proof.
          </p>
          <Link
            href="/impact-intelligence"
            className="inline-block rounded-lg bg-zinc-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-500"
          >
            Explore Impact Intelligence
          </Link>
        </div>
      </div>
    </main>
  );
}
