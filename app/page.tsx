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
        <h1 className="font-serif max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
          Human Intelligence Infrastructure
        </h1>
        <p className="mt-4 max-w-md text-sm md:text-base text-zinc-300 font-sans font-normal">
          Instead of tracking hours, see what each activity is worth — against your mission, your goals, and your real market rate.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="https://greta-v2.vercel.app"
            className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-600 transition-colors"
          >
            Try now for free
          </Link>
        </div>

        
      </div>
    </main>
  );
}
