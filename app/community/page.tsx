"use client";

import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 pt-24 pb-24 selection:bg-emerald-500 selection:text-black">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-emerald-400">
            FrontForumFocus Community
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Builders, Impact Founders &amp; Contributors
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
            We bring together hardware engineers, clean energy developers, and grassroots contributors building the infrastructure for verifiable impact.
          </p>
        </div>

        {/* 3 Pillars of Community */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Hardware & Edge AI Builders */}
          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">01. Builders &amp; Hackers</div>
              <h3 className="text-xl font-semibold text-white">ClawCamp &amp; Edge AI</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Hands-on hackathons and developer bootcamps exploring sub-3B micro-LLMs, on-device LiteRT, open hardware (RISC-V), and robotics test beds.
              </p>
            </div>
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Join%20ClawCamp%20Builder%20Network"
              className="w-full py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-semibold text-neutral-200 transition-colors"
            >
              Join Builder Network →
            </Link>
          </div>

          {/* Card 2: Greta Field Contributors */}
          <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 space-y-4 flex flex-col justify-between shadow-lg shadow-emerald-950/30">
            <div className="space-y-3">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">02. Ground-Truth Data</div>
              <h3 className="text-xl font-semibold text-white">Greta Contributors</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Log real-world sustainability actions (e-waste, solar, clean transport) through the Greta APK. Earn verified impact points redeemable for mobile airtime and rewards.
              </p>
            </div>
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Greta%20APK%20Beta%20Tester"
              className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-center text-xs font-semibold text-neutral-950 transition-colors"
            >
              Get Greta APK (Beta) →
            </Link>
          </div>

          {/* Card 3: Impact Founders & Pitch Nights */}
          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider">03. Ecosystem &amp; Capital</div>
              <h3 className="text-xl font-semibold text-white">Founder Pitch Nights</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Regular demo nights, podcast deep dives (40+ episodes produced), and investor networking in Nairobi and global bridge hubs.
              </p>
            </div>
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Founder%20Pitch%20Night%20RSVP"
              className="w-full py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-semibold text-neutral-200 transition-colors"
            >
              Attend Next Event →
            </Link>
          </div>

        </div>

        {/* Community Principles / Callout */}
        <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Proof Over Promises</h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            We believe impact should be verified in real time, not estimated in annual PDFs. Whether you run clean hardware or test off-grid sensors, FrontForumFocus gives your work verifiable financial value.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="text-xs font-mono text-emerald-400 hover:underline"
            >
              ← Back to Overview
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
