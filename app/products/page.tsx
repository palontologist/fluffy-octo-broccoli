"use client";

import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 pt-24 pb-24 selection:bg-emerald-500 selection:text-black">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-emerald-400">
            FrontForumFocus Products
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            The Infrastructure for Verifiable Impact
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
            Hardware-connected dMRV for clean infrastructure developers, and on-device verified impact tracking for everyday contributors.
          </p>
        </div>

        {/* Product 1: Greta dMRV Engine */}
        <div className="p-8 sm:p-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Enterprise &amp; Developers</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Greta dMRV Engine</h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
              Live Pilot Ready
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Plugs directly into solar inverters (Modbus / RS485 / API), smart meters, and battery systems. Automatically translates raw kilowatt-hour generation and telemetry into audit-ready UN SDG compliance records and registry-compliant carbon credits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
            <div className="space-y-1">
              <div className="text-xs text-neutral-400 uppercase font-mono">Telemetry Sync</div>
              <div className="text-sm font-semibold text-white">Continuous IoT Streams</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-neutral-400 uppercase font-mono">Audit Lag</div>
              <div className="text-sm font-semibold text-emerald-400">Zero (Instant verification)</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-neutral-400 uppercase font-mono">Pricing Delta</div>
              <div className="text-sm font-semibold text-white">2x–5x Premium on Credits</div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Greta%20dMRV%20Pilot%20Inquiry"
              className="inline-flex px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs transition-colors"
            >
              Request Inverter Integration Demo →
            </Link>
          </div>
        </div>

        {/* Product 2: Greta Mobile App (APK Beta) */}
        <div className="p-8 sm:p-10 rounded-2xl border border-emerald-900/40 bg-emerald-950/10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">Individuals &amp; Communities</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Greta Contributor App</h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800/80 text-teal-400 text-xs font-mono">
              Android APK Beta
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            The mobile companion that turns everyday sustainability actions into verified impact points. Uses on-device edge AI (LiteRT) to verify photos of e-waste recycling, clean transport, and local solar adoption—delivering direct airtime rewards to contributors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-emerald-900/40">
            <div className="space-y-1">
              <div className="text-xs text-neutral-400 uppercase font-mono">On-Device AI</div>
              <div className="text-sm font-semibold text-white">LiteRT / Edge Vision</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-neutral-400 uppercase font-mono">Contributor Reward</div>
              <div className="text-sm font-semibold text-teal-400">Mobile Airtime &amp; Tokens</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-neutral-400 uppercase font-mono">B2B Corporate ESG</div>
              <div className="text-sm font-semibold text-white">Sponsored Impact Proof</div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Download%20Greta%20APK%20Beta"
              className="inline-flex px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-xs transition-colors"
            >
              Download Greta APK (Beta) →
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
