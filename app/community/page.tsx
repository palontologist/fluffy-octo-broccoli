"use client";

import { useScrollReveal } from "../components/useScrollReveal";

const WHATSAPP_URL = "https://chat.whatsapp.com/IPyovK0eXwoKFdfUlpCMOA";
const DISCORD_URL = "https://discord.gg/qpV9Gg3S54";

export default function CommunityPage() {
  useScrollReveal(".animate-on-scroll", { start: "top 85%" });

  return (
    <main className="min-h-screen px-6 pb-24 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Hero */}
        <section className="animate-on-scroll">
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl leading-tight">
            A community for technical builders who give a damn.
          </h1>
          
          <div className="mt-8 space-y-4 font-sans text-lg leading-relaxed text-zinc-300">
            <p>
              I run this community because it's what I wish existed when I started building. 
              A place where you can drop a technical question at 2am and get a useful answer by breakfast. 
              Where "I'm stuck on this architecture decision" turns into a 20-minute conversation that saves you three weeks.
            </p>
            <p>
              The people here are technical founders, engineers, and product builders from around the world. 
              They're building in climate tech, edtech, healthtech, fintech — anywhere technology intersects with real human problems. 
              Not because it's trendy. Because they can't imagine doing anything else.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500"
            >
              Join WhatsApp →
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 px-6 py-3 font-sans text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              Join Discord →
            </a>
          </div>
        </section>

        {/* What you get */}
        <section className="mt-16 animate-on-scroll">
          <h2 className="font-serif text-xl font-semibold text-white mb-6">
            What you actually get
          </h2>
          
          <div className="space-y-4 font-sans text-zinc-300">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-medium text-white">Real-time problem solving</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Stuck on an architecture decision? Bounce it off the group. Need a second pair of eyes on your pricing model? Someone here's done it before.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-medium text-white">Find your people</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Technical co-founders. Early users. Beta testers. People who actually understand what you're building and why it matters.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-medium text-white">Discover new approaches</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Someone's always building something interesting. See how others solve problems you've been staring at for weeks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-medium text-white">No fluff</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  No pitch competitions. No networking events. No "thought leaders." Just builders helping builders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16 animate-on-scroll">
          <h2 className="font-serif text-xl font-semibold text-white mb-4">
            How it works
          </h2>
          <p className="font-sans text-zinc-300 leading-relaxed">
            Two channels. Both free. No application process.
          </p>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.72 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h3 className="font-serif text-lg font-semibold text-white">WhatsApp</h3>
              </div>
              <p className="font-sans text-sm text-zinc-400">
                Quick questions, daily banter, and real-time problem solving. The fastest way to get unstuck.
              </p>
            </a>

            <a 
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
                </svg>
                <h3 className="font-serif text-lg font-semibold text-white">Discord</h3>
              </div>
              <p className="font-sans text-sm text-zinc-400">
                Deep dives, resource sharing, and async discussions. The place for nuanced conversations.
              </p>
            </a>
          </div>
        </section>

        {/* The model */}
        <section className="mt-16 animate-on-scroll">
          <div className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6">
            <h3 className="font-serif text-lg font-semibold text-white mb-3">
              Freemium, not free
            </h3>
            <p className="font-sans text-zinc-300 leading-relaxed text-sm">
              The community is free to join because the value comes from the people in it, not the price tag. 
              We also offer a paid tier for monthly calls and curated introductions, but honestly? 
              Most people get everything they need from the free channels. 
              Upgrade if you want the extra layer. Don't if you don't.
            </p>
          </div>
        </section>

        {/* P.S. */}
        <section className="mt-16 animate-on-scroll">
          <div className="border-t border-zinc-800 pt-8">
            <p className="font-sans text-sm text-zinc-400">
              <span className="text-white font-medium">P.S.</span> If you want to reach me directly, ping <a href="mailto:support@frontforumfocus.com" className="text-emerald-400 underline hover:text-emerald-300">support@frontforumfocus.com</a>. 
              I generally respond to emails under 300 characters with a clear ask. 
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 animate-on-scroll">
          <div className="flex flex-col items-start gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500"
            >
              Join WhatsApp →
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 px-6 py-3 font-sans text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              Join Discord →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
