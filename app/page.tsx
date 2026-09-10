"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"inverter" | "app">("inverter");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col items-center justify-start px-6 pt-24 pb-24 selection:bg-emerald-500 selection:text-black">
      
      {/* Top Pill / Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 text-xs text-neutral-300 mb-8 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>FrontForumFocus • The Verifiable Impact Layer</span>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          Turn clean energy data into <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            audit-ready carbon assets.
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Stripe for verifiable climate data. Connect solar inverters, microgrids, and mobile field contributors to automate dMRV, eliminate audit lag, and capture premium credit pricing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="mailto:george.karani@startupgrind.com?subject=Greta%20Telemetry%20%26%20Pilot%20Inquiry"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-sm transition-all duration-150 shadow-lg shadow-emerald-950/50 hover:scale-[1.02]"
          >
            Connect Your Telemetry →
          </Link>
          <Link
            href="/community"
            className="px-6 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 font-medium text-sm transition-all duration-150"
          >
            Join Builder Community
          </Link>
          <Link
            href="/products"
            className="px-6 py-3.5 rounded-xl border border-emerald-900/40 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-400 font-medium text-sm transition-all duration-150"
          >
            Get Greta App (APK Beta)
          </Link>
        </div>
      </div>

      {/* Interactive Telemetry & App Mockup */}
      <div className="w-full max-w-3xl mt-16 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab("inverter")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                activeTab === "inverter"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              ⚡ B2B Inverter dMRV Feed
            </button>
            <button
              onClick={() => setActiveTab("app")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                activeTab === "app"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              📱 Greta Mobile Contributor
            </button>
          </div>
          <span className="font-mono text-xs text-neutral-500">LIVE FEED • UTC</span>
        </div>

        {activeTab === "inverter" ? (
          <div className="pt-6 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Site ID</div>
                <div className="text-sm font-semibold text-neutral-200 mt-1">Solar_Microgrid_04</div>
              </div>
              <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Clean Output</div>
                <div className="text-xl font-bold font-mono text-white mt-1">24.6 MWh</div>
              </div>
              <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Carbon Abated</div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">17.2 tCO₂e</div>
              </div>
              <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Registry Status</div>
                <div className="text-xs font-semibold text-emerald-300 mt-2 inline-flex items-center gap-1 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  ✓ Audit-Ready
                </div>
              </div>
            </div>
            <div className="text-xs text-neutral-400 flex items-center justify-between font-mono bg-neutral-950/40 p-3 rounded-lg border border-neutral-800/50">
              <span>Telemetry: Modbus/RS485 → Greta dMRV Engine</span>
              <span className="text-emerald-400">0 ms latency to registry staging</span>
            </div>
          </div>
        ) : (
          <div className="pt-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Action Verified</div>
                <div className="text-sm font-semibold text-neutral-200 mt-1">E-Waste Dropoff (5.2kg)</div>
                <div className="text-xs text-neutral-400 mt-0.5">Verified via LiteRT on-device AI</div>
              </div>
              <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Contributor Reward</div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">+120 Impact Pts</div>
                <div className="text-xs text-neutral-400 mt-0.5">Redeemable for airtime &amp; tokens</div>
              </div>
              <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Corporate Buyer</div>
                <div className="text-sm font-semibold text-neutral-200 mt-1">Telco ESG Compliance</div>
                <div className="text-xs text-neutral-400 mt-0.5">Scope 3 supply chain proof</div>
              </div>
            </div>
            <div className="text-xs text-neutral-400 flex items-center justify-between font-mono bg-neutral-950/40 p-3 rounded-lg border border-neutral-800/50">
              <span>Greta APK: On-device Edge AI &amp; GPS geofencing</span>
              <span className="text-emerald-400">100% Anti-tamper proof</span>
            </div>
          </div>
        )}
      </div>

      {/* 3-Pillar Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mt-24">
        <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
            01
          </div>
          <h3 className="text-base font-semibold text-white">Direct Hardware Telemetry</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Directly connect solar inverters, smart meters, EV telemetry, and mobile field actions with zero manual data entry.
          </p>
        </div>
        
        <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
            02
          </div>
          <h3 className="text-base font-semibold text-white">Automated dMRV Engine</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Continuous standardization converting kilowatt-hours into UN SDG compliance records and registry-ready carbon tokens.
          </p>
        </div>
        
        <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">
            03
          </div>
          <h3 className="text-base font-semibold text-white">Monetize at a Premium</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Unlock 2x–5x price premiums on carbon marketplaces with tamper-proof provenance, while rewarding grassroots contributors.
          </p>
        </div>
      </div>

      {/* Transparent Pricing Section */}
      <div className="max-w-4xl w-full mt-24 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="text-sm text-neutral-400">Start with a 30-day pilot or scale across entire distributed infrastructure portfolios.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1 */}
          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-sm font-semibold text-neutral-300">Starter Pilot</div>
              <div className="text-3xl font-bold font-mono text-white">$500 <span className="text-sm font-normal text-neutral-400">/ site / mo</span></div>
              <p className="text-xs text-neutral-400">For clean energy developers running 1–2 test sites.</p>
              <ul className="text-xs text-neutral-300 space-y-2 pt-2 border-t border-neutral-800/80">
                <li>✓ Live solar inverter sync</li>
                <li>✓ Automated SDG dashboard</li>
                <li>✓ Monthly PDF audit reports</li>
              </ul>
            </div>
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Starter%20Pilot%20Inquiry"
              className="w-full py-2.5 rounded-lg border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-semibold text-white transition-colors"
            >
              Start Pilot
            </Link>
          </div>

          {/* Tier 2 */}
          <div className="p-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 flex flex-col justify-between space-y-6 relative shadow-lg shadow-emerald-950/30">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-neutral-950 text-[10px] font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <div className="space-y-3">
              <div className="text-sm font-semibold text-emerald-300">Commercial Developer</div>
              <div className="text-3xl font-bold font-mono text-white">$1,500 <span className="text-sm font-normal text-neutral-400">/ mo + usage</span></div>
              <p className="text-xs text-neutral-400">For regional C&amp;I solar and mini-grid operators.</p>
              <ul className="text-xs text-neutral-300 space-y-2 pt-2 border-t border-neutral-800/80">
                <li>✓ Multi-site API telemetry</li>
                <li>✓ Real-time dMRV verification</li>
                <li>✓ Registry-ready data packages</li>
                <li>✓ $0.05 / MWh verified</li>
              </ul>
            </div>
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Commercial%20Developer%20Inquiry"
              className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-center text-xs font-semibold text-neutral-950 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Tier 3 */}
          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-sm font-semibold text-neutral-300">Funds &amp; Portfolios</div>
              <div className="text-3xl font-bold font-mono text-white">Custom</div>
              <p className="text-xs text-neutral-400">For blended finance funds, banks, and registries.</p>
              <ul className="text-xs text-neutral-300 space-y-2 pt-2 border-t border-neutral-800/80">
                <li>✓ Multi-country portfolio pipelines</li>
                <li>✓ Direct Gold Standard / registry integrations</li>
                <li>✓ Custom SDG compliance covenants</li>
                <li>✓ Success fee on credit price delta</li>
              </ul>
            </div>
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Portfolio%20Partnership"
              className="w-full py-2.5 rounded-lg border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-semibold text-white transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
