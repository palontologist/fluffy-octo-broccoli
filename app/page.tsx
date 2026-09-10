"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"inverter" | "app">("inverter");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-start px-6 pt-32 pb-32 selection:bg-neutral-800 selection:text-white font-sans antialiased">
      
      {/* Top Subtle Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-800/80 bg-neutral-900/60 text-xs text-neutral-400 mb-8 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="tracking-wide">frontforumfocus • the verifiable impact layer</span>
      </div>

      {/* Hero Section */}
      <div className="max-w-3xl text-center space-y-5">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white font-normal tracking-tight leading-[1.18]">
          Turn clean energy data into <br className="hidden sm:inline" />
          <span className="italic font-serif text-emerald-400">
            audit-ready carbon assets.
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-xl mx-auto font-normal leading-relaxed">
          Connect solar inverters, microgrids, and mobile field contributors to automate dMRV, eliminate audit lag, and capture premium credit pricing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <Link
            href="mailto:george.karani@startupgrind.com?subject=Greta%20Telemetry%20Pilot"
            className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-neutral-950 font-medium text-xs sm:text-sm transition-all duration-150 shadow-md hover:scale-[1.01]"
          >
            Connect Your Telemetry →
          </Link>
          <Link
            href="/products"
            className="px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 font-medium text-xs sm:text-sm transition-all duration-150"
          >
            Explore Greta App
          </Link>
        </div>
      </div>

      {/* Interactive Telemetry & Contributor Card */}
      <div className="w-full max-w-2xl mt-16 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-5 sm:p-6 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("inverter")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeTab === "inverter"
                  ? "bg-neutral-800 text-white border border-neutral-700"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              ⚡ Inverter dMRV Feed
            </button>
            <button
              onClick={() => setActiveTab("app")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeTab === "app"
                  ? "bg-neutral-800 text-white border border-neutral-700"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              📱 Mobile Contributor
            </button>
          </div>
          <span className="font-mono text-[11px] text-neutral-500">LIVE FEED</span>
        </div>

        {activeTab === "inverter" ? (
          <div className="pt-5 space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-neutral-950/70 p-3.5 rounded-xl border border-neutral-800/60">
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono">Site Source</div>
                <div className="text-sm font-semibold text-neutral-200 mt-1">Solar Microgrid #04</div>
              </div>
              <div className="bg-neutral-950/70 p-3.5 rounded-xl border border-neutral-800/60">
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono">Clean Output</div>
                <div className="text-base font-bold font-mono text-white mt-1">24.6 MWh</div>
              </div>
              <div className="bg-neutral-950/70 p-3.5 rounded-xl border border-neutral-800/60 col-span-2 sm:col-span-1">
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono">Abatement Status</div>
                <div className="text-xs font-medium text-emerald-400 mt-1 inline-flex items-center gap-1">
                  ✓ 17.2 tCO₂e Audit-Ready
                </div>
              </div>
            </div>
            <div className="text-[11px] text-neutral-400 flex items-center justify-between font-mono bg-neutral-950/40 p-2.5 rounded-lg border border-neutral-800/40">
              <span>Telemetry: Modbus/RS485 → Greta dMRV Engine</span>
              <span className="text-emerald-400">Stream synced</span>
            </div>
          </div>
        ) : (
          <div className="pt-5 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-neutral-950/70 p-3.5 rounded-xl border border-neutral-800/60">
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono">Action Logged</div>
                <div className="text-sm font-semibold text-neutral-200 mt-1">E-Waste Dropoff (5.2kg)</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Verified on-device (LiteRT)</div>
              </div>
              <div className="bg-neutral-950/70 p-3.5 rounded-xl border border-neutral-800/60">
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono">Contributor Reward</div>
                <div className="text-base font-bold font-mono text-emerald-400 mt-1">+120 Impact Pts</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Airtime &amp; token payout</div>
              </div>
              <div className="bg-neutral-950/70 p-3.5 rounded-xl border border-neutral-800/60">
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono">Buyer Proof</div>
                <div className="text-sm font-semibold text-neutral-200 mt-1">Corporate Scope 3</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Tamper-proof GPS audit</div>
              </div>
            </div>
            <div className="text-[11px] text-neutral-400 flex items-center justify-between font-mono bg-neutral-950/40 p-2.5 rounded-lg border border-neutral-800/40">
              <span>Greta APK: On-device Edge AI &amp; GPS verification</span>
              <span className="text-emerald-400">Verified</span>
            </div>
          </div>
        )}
      </div>

      {/* Visual Telemetry Architecture Diagram */}
      <div className="max-w-3xl w-full mt-20 p-6 sm:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/20 space-y-6">
        <div className="text-center space-y-1">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">End-to-End Architecture</div>
          <h2 className="text-xl sm:text-2xl font-serif text-white">How Physical Telemetry Becomes Bankable Capital</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
              <span>☀️ 01. Physical Assets</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Solar inverters, mini-grids, smart meters, and mobile field actions stream continuous operational data.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 space-y-2">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-mono">
              <span>⚙️ 02. Greta dMRV</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Edge AI and standardizers map kWh generation into UN SDG taxonomies with cryptographic tamper resistance.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
              <span>🏛️ 03. Institutional Exit</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Audit-ready logs feed directly into carbon registries, blended finance covenants, and corporate ESG portfolios.
            </p>
          </div>
        </div>
      </div>

      {/* 3-Pillar Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mt-16">
        <div className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/30 space-y-2">
          <div className="text-xs font-mono text-neutral-500 font-bold">01</div>
          <h3 className="text-sm font-semibold text-white">Direct Telemetry</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Ingest live feeds from inverters, smart meters, and field sensors with zero manual data entry.
          </p>
        </div>
        
        <div className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/30 space-y-2">
          <div className="text-xs font-mono text-neutral-500 font-bold">02</div>
          <h3 className="text-sm font-semibold text-white">Automated dMRV</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Standardize raw generation logs into UN SDG compliance metrics and registry-ready carbon proof.
          </p>
        </div>
        
        <div className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/30 space-y-2">
          <div className="text-xs font-mono text-neutral-500 font-bold">03</div>
          <h3 className="text-sm font-semibold text-white">Monetize Premium</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Eliminate audit latency and unlock 2x–5x price premiums on environmental commodity exchanges.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-3xl w-full mt-20 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-serif text-white">Pricing &amp; Pilot Deployment</h2>
          <p className="text-xs text-neutral-400">Deploy on 1–2 test sites or scale across distributed regional portfolios.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-neutral-300">Starter Pilot</div>
              <div className="text-2xl font-bold font-mono text-white">$500 <span className="text-xs font-normal text-neutral-500">/ site / mo</span></div>
              <p className="text-[11px] text-neutral-400">For clean energy developers running initial test sites.</p>
              <ul className="text-[11px] text-neutral-300 space-y-1.5 pt-2 border-t border-neutral-800/80">
                <li>✓ Live inverter sync</li>
                <li>✓ Automated SDG dashboard</li>
                <li>✓ Monthly PDF audit reports</li>
              </ul>
            </div>
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Starter%20Pilot%20Inquiry"
              className="w-full py-2 rounded-lg border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-medium text-white transition-colors"
            >
              Start Pilot
            </Link>
          </div>

          <div className="p-5 rounded-xl border border-emerald-500/40 bg-emerald-950/20 flex flex-col justify-between space-y-4 relative shadow-lg shadow-emerald-950/20">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-emerald-300">Commercial Developer</div>
              <div className="text-2xl font-bold font-mono text-white">$1,500 <span className="text-xs font-normal text-neutral-400">/ mo + usage</span></div>
              <p className="text-[11px] text-neutral-400">For regional C&amp;I solar and mini-grid operators.</p>
              <ul className="text-[11px] text-neutral-300 space-y-1.5 pt-2 border-t border-neutral-800/80">
                <li>✓ Multi-site API telemetry</li>
                <li>✓ Real-time dMRV verification</li>
                <li>✓ Registry-ready packages</li>
                <li>✓ $0.05 / MWh verified</li>
              </ul>
            </div>
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Commercial%20Developer%20Inquiry"
              className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-center text-xs font-semibold text-neutral-950 transition-colors"
            >
              Deploy Fleet
            </Link>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-neutral-300">Portfolios &amp; Funds</div>
              <div className="text-2xl font-bold font-mono text-white">Custom</div>
              <p className="text-[11px] text-neutral-400">For blended finance facilities and carbon registries.</p>
              <ul className="text-[11px] text-neutral-300 space-y-1.5 pt-2 border-t border-neutral-800/80">
                <li>✓ Multi-country pipelines</li>
                <li>✓ Direct registry integrations</li>
                <li>✓ Custom SDG covenants</li>
                <li>✓ Success fee on credit delta</li>
              </ul>
            </div>
            <Link
              href="mailto:george.karani@startupgrind.com?subject=Portfolio%20Partnership"
              className="w-full py-2 rounded-lg border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-medium text-white transition-colors"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
