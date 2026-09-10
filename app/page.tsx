"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"inverter" | "app">("inverter");
  const [energyMWh, setEnergyMWh] = useState<number>(45);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Dynamic calculations based on slider
  const carbonAbated = (energyMWh * 0.72).toFixed(1);
  const premiumRevenue = Math.round(energyMWh * 42);
  const contributorRewards = Math.round(energyMWh * 18);

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

      {/* 1. Authentic Documentary Brand Film Window */}
      <div className="w-full max-w-3xl mt-14 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 overflow-hidden shadow-2xl relative group">
        <div className="relative aspect-video w-full bg-neutral-900">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
            poster="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-solar-panels-in-a-field-at-sunset-42861-large.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Subtle Video Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent pointer-events-none" />

          {/* Documentary Title Tag */}
          <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pointer-events-auto">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                Ground-Truth Film
              </span>
              <p className="text-sm sm:text-base font-serif text-white font-medium">
                “The people building what matters.”
              </p>
              <p className="text-xs text-neutral-400 font-light max-w-md">
                Continuous IoT telemetry from East African microgrids and field builders to institutional registries.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="px-3 py-1.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 text-[11px] text-neutral-300 backdrop-blur-md transition-colors"
              >
                {isMuted ? "🔇 Unmute" : "🔊 Mute"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Impact Pulse Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full mt-10">
        <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/30 text-center space-y-1">
          <div className="text-xs font-mono text-neutral-500 uppercase">Energy Telemetry</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white">54.8 MWh</div>
          <div className="text-[10px] text-emerald-400">● Live Ingesting</div>
        </div>
        <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/30 text-center space-y-1">
          <div className="text-xs font-mono text-neutral-500 uppercase">Verified Abated</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">38.2 tCO₂e</div>
          <div className="text-[10px] text-neutral-400">Registry-Ready</div>
        </div>
        <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/30 text-center space-y-1">
          <div className="text-xs font-mono text-neutral-500 uppercase">Hardware Nodes</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white">120+ Sites</div>
          <div className="text-[10px] text-neutral-400">Modbus &amp; Smart IoT</div>
        </div>
        <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/30 text-center space-y-1">
          <div className="text-xs font-mono text-neutral-500 uppercase">Manual Audit Lag</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white">0 Days</div>
          <div className="text-[10px] text-emerald-400">Automated dMRV</div>
        </div>
      </div>

      {/* 3. Interactive Greta Dashboard & Value Calculator */}
      <div className="w-full max-w-3xl mt-16 p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Interactive Calculator</div>
          <h2 className="text-xl sm:text-2xl font-serif text-white">Estimate Your Verifiable Impact &amp; Revenue Delta</h2>
          <p className="text-xs text-neutral-400">Adjust your clean energy generation to see real-time carbon abatement and financial upside.</p>
        </div>

        {/* Slider Input */}
        <div className="space-y-3 pt-2 bg-neutral-950/60 p-5 rounded-2xl border border-neutral-800/60">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-neutral-300 font-medium">Monthly Clean Energy Telemetry:</span>
            <span className="font-mono font-bold text-emerald-400 text-base">{energyMWh} MWh</span>
          </div>
          <input
            type="range"
            min="5"
            max="250"
            step="5"
            value={energyMWh}
            onChange={(e) => setEnergyMWh(Number(e.target.value))}
            className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
            <span>5 MWh (1 microgrid)</span>
            <span>125 MWh (Regional Fleet)</span>
            <span>250 MWh (C&amp;I Portfolio)</span>
          </div>
        </div>

        {/* Dynamic Calculator Results */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/50 space-y-1">
            <div className="text-[11px] font-mono text-neutral-500 uppercase">Verified Carbon Abated</div>
            <div className="text-xl font-bold font-mono text-emerald-400">{carbonAbated} tCO₂e</div>
            <div className="text-[10px] text-neutral-400">Audit-ready compliance</div>
          </div>
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/50 space-y-1">
            <div className="text-[11px] font-mono text-neutral-500 uppercase">Premium Credit Delta</div>
            <div className="text-xl font-bold font-mono text-white">+${premiumRevenue.toLocaleString()}</div>
            <div className="text-[10px] text-neutral-400">2x–5x price premium unlocked</div>
          </div>
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/50 space-y-1">
            <div className="text-[11px] font-mono text-neutral-500 uppercase">Contributor Rewards</div>
            <div className="text-xl font-bold font-mono text-teal-400">${contributorRewards.toLocaleString()}</div>
            <div className="text-[10px] text-neutral-400">Distributed to field users</div>
          </div>
        </div>
      </div>

      {/* 4. Real People Building What Matters (Founder & Partner Stories) */}
      <div className="max-w-3xl w-full mt-24 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Case Studies &amp; Ecosystem</div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">People Building What Matters</h2>
          <p className="text-xs text-neutral-400 max-w-md mx-auto">
            How clean energy operators and edge AI developers use FrontForumFocus to verify physical impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Story 1 */}
          <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-xs font-bold text-emerald-400">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">East Africa Solar C&amp;I</div>
                  <div className="text-[10px] text-neutral-500">Commercial Mini-grid Fleet</div>
                </div>
              </div>
              <p className="text-xs text-neutral-300 italic leading-relaxed">
                “Greta plugged into our smart inverters via Modbus in under an hour. We eliminated 8 months of third-party audit delays.”
              </p>
            </div>
            <div className="text-[10px] font-mono text-emerald-400 border-t border-neutral-800/80 pt-2">
              Outcome: 100% automated dMRV
            </div>
          </div>

          {/* Story 2 */}
          <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-950 border border-teal-700/60 flex items-center justify-center text-xs font-bold text-teal-400">
                  📱
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">ClawCamp Nairobi</div>
                  <div className="text-[10px] text-neutral-500">Edge AI &amp; Hardware Hackers</div>
                </div>
              </div>
              <p className="text-xs text-neutral-300 italic leading-relaxed">
                “We deployed LiteRT micro-models on Android devices to verify e-waste and battery drop-offs with zero cloud dependencies.”
              </p>
            </div>
            <div className="text-[10px] font-mono text-teal-400 border-t border-neutral-800/80 pt-2">
              Outcome: Offline-first verification
            </div>
          </div>

          {/* Story 3 */}
          <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-700/60 flex items-center justify-center text-xs font-bold text-cyan-400">
                  🌿
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Carbon Market Advisory</div>
                  <div className="text-[10px] text-neutral-500">Gold Standard Origination</div>
                </div>
              </div>
              <p className="text-xs text-neutral-300 italic leading-relaxed">
                “Tamper-proof telemetry allowed our developer clients to sell verified credits at 3.2x over baseline commodity offsets.”
              </p>
            </div>
            <div className="text-[10px] font-mono text-cyan-400 border-t border-neutral-800/80 pt-2">
              Outcome: 3.2x Price Premium
            </div>
          </div>
        </div>
      </div>

      {/* 5. End-to-End Visual Architecture */}
      <div className="max-w-3xl w-full mt-24 p-6 sm:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/20 space-y-6">
        <div className="text-center space-y-1">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Technical Data Pipeline</div>
          <h2 className="text-xl sm:text-2xl font-serif text-white">How Ground-Truth Telemetry Becomes Bankable Capital</h2>
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

      {/* 6. Pricing Section */}
      <div className="max-w-3xl w-full mt-24 space-y-6">
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
