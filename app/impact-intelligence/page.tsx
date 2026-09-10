"use client";

import Link from "next/link";
import { useState } from "react";

export default function ImpactIntelligencePage() {
  const [activeEdition, setActiveEdition] = useState<"final" | "part2" | "part1">("final");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 pt-32 pb-32 selection:bg-emerald-500 selection:text-black font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-emerald-400">
            Impact Intelligence • Publication Archive
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Where changemakers connect, compound, <br className="hidden sm:inline" />
            <span className="italic font-serif text-emerald-400">and unlock what's next.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Read the complete trilogy exploring the death of performative ESG and the rise of verifiable sovereign infrastructure.
          </p>
        </div>

        {/* Edition Selector Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl border border-neutral-800 bg-neutral-900/60 max-w-2xl mx-auto backdrop-blur-md">
          <button
            onClick={() => setActiveEdition("final")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeEdition === "final"
                ? "bg-emerald-500 text-neutral-950 font-semibold shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Final Edition: The Death of Performative Impact
          </button>
          <button
            onClick={() => setActiveEdition("part2")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeEdition === "part2"
                ? "bg-emerald-500 text-neutral-950 font-semibold shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Part II: dMRV &amp; Sovereign Data
          </button>
          <button
            onClick={() => setActiveEdition("part1")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeEdition === "part1"
                ? "bg-emerald-500 text-neutral-950 font-semibold shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Part I: The Great Reallocation
          </button>
        </div>

        {/* Reader Container */}
        <article className="p-8 sm:p-12 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-xl shadow-2xl space-y-8">
          
          {activeEdition === "final" && (
            <div className="space-y-8">
              <div className="space-y-2 border-b border-neutral-800 pb-6">
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  <span>Impact Intelligence • Final Edition</span>
                  <span>Published on LinkedIn</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal pt-2">
                  The Death of Performative Impact
                </h2>
                <p className="text-sm sm:text-base text-neutral-400 italic">
                  Why resilience, sovereignty, and infrastructure became the new language of impact in 2026.
                </p>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                <p>
                  For nearly a decade, global impact was defined by narrative. Organizations spent millions on glossy annual PDF reports, self-reported carbon spreadsheets, and PR-driven pledges. By 2026, that era ended decisively.
                </p>
                <p>
                  Skeptical capital markets, stringent regulatory scrutiny (EU SFDR, SEC disclosures), and the collapse of low-integrity voluntary carbon credits exposed a fundamental truth: <strong className="text-white font-medium">if impact cannot be measured in real-time from physical hardware, it does not exist on a balance sheet.</strong>
                </p>

                <div className="p-6 rounded-2xl border border-emerald-900/40 bg-emerald-950/20 space-y-3">
                  <h3 className="text-base font-semibold text-emerald-300 font-serif">The Three Structural Pillars of 2026 Impact:</h3>
                  <ul className="text-xs sm:text-sm text-neutral-300 space-y-2.5">
                    <li>
                      <strong className="text-white">1. Energy &amp; Resource Security:</strong> Impact is no longer a corporate philanthropy budget—it is the physical resilience of microgrids, solar storage, and local food supply chains.
                    </li>
                    <li>
                      <strong className="text-white">2. Continuous Digital Verification (dMRV):</strong> Moving from annual consultant audits to continuous telemetry feeds directly from inverters, smart meters, and edge sensors.
                    </li>
                    <li>
                      <strong className="text-white">3. Economic Sovereignty for Contributors:</strong> Distributing value back to grassroots individuals and local operators generating ground-truth data.
                    </li>
                  </ul>
                </div>

                <p>
                  Impact has ceased to be an external disclosure document. It has been absorbed into the core architecture of energy, compute, and physical infrastructure.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://www.linkedin.com/pulse/death-performative-impact-frontforumfocus-wgbsf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs transition-colors"
                >
                  Read &amp; Discuss on LinkedIn ↗
                </a>
                <span className="text-xs font-mono text-neutral-500">Edition 3 of 3 • Series Complete</span>
              </div>
            </div>
          )}

          {activeEdition === "part2" && (
            <div className="space-y-8">
              <div className="space-y-2 border-b border-neutral-800 pb-6">
                <div className="flex items-center justify-between text-xs font-mono text-teal-400 uppercase tracking-wider">
                  <span>Impact Intelligence • Part II</span>
                  <span>Technical &amp; Data Layer</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal pt-2">
                  dMRV &amp; The Sovereign Data Layer
                </h2>
                <p className="text-sm sm:text-base text-neutral-400 italic">
                  How on-device AI and edge IoT replace manual ESG consulting bottlenecks.
                </p>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                <p>
                  The bottleneck in climate finance has never been capital deployment alone; it has been the verification gap. When a solar mini-grid generates 100 MWh in rural Kenya, verifying that generation for international carbon buyers historically required an auditor on an airplane with a clipboard months after the fact.
                </p>
                <p>
                  Part II explores how edge intelligence transforms this dynamic. By running micro-models (LiteRT / sub-3B micro-LLMs) directly on smart inverters and field mobile devices, telemetry is validated at the edge before syncing to cloud registries.
                </p>
                
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/60 font-mono text-xs text-neutral-300 space-y-2">
                  <div className="text-emerald-400">// The dMRV Pipeline Architecture</div>
                  <div>[Solar Inverter / Microgrid] → (Modbus RS485) → [Greta Engine] → (UN SDG Mapping) → [Audit-Ready Registry API]</div>
                </div>

                <p>
                  The result is zero-latency verification and carbon credits that trade at a 2x–5x premium because their provenance is unassailable.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveEdition("final")}
                  className="text-xs font-mono text-emerald-400 hover:underline"
                >
                  Next: Read Final Edition →
                </button>
                <span className="text-xs font-mono text-neutral-500">Edition 2 of 3</span>
              </div>
            </div>
          )}

          {activeEdition === "part1" && (
            <div className="space-y-8">
              <div className="space-y-2 border-b border-neutral-800 pb-6">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <span>Impact Intelligence • Part I</span>
                  <span>Macroeconomic Shift</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal pt-2">
                  The Great Reallocation
                </h2>
                <p className="text-sm sm:text-base text-neutral-400 italic">
                  Capital moving from corporate pledges to physical energy and sovereign capabilities.
                </p>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                <p>
                  In the opening installment of Impact Intelligence, we examined the macro capital rotation. The era of low interest rates permitted companies to spend heavily on symbolic CSR. But as capital costs rose and climate events accelerated, institutional LPs demanded tangible, cash-flow-generative infrastructure.
                </p>
                <p>
                  Clean energy, decentralized microgrids, local manufacturing, and verifiable data infrastructure became the core recipients of global blended finance.
                </p>
                <p>
                  Part I sets the foundation: impact is not an expense line item; it is the most lucrative operational infrastructure of the next century.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveEdition("part2")}
                  className="text-xs font-mono text-emerald-400 hover:underline"
                >
                  Next: Read Part II →
                </button>
                <span className="text-xs font-mono text-neutral-500">Edition 1 of 3</span>
              </div>
            </div>
          )}

        </article>

        {/* Community & Social Links */}
        <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 text-center space-y-3">
          <p className="text-xs text-neutral-400">
            Share and follow FrontForumFocus publications:
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-neutral-300">
            <a href="https://www.linkedin.com/pulse/death-performative-impact-frontforumfocus-wgbsf/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">LinkedIn Article ↗</a>
            <span>•</span>
            <a href="https://x.com/frontforumfocus" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">X (Twitter) ↗</a>
            <span>•</span>
            <a href="https://instagram.com/frontforumfocus" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Instagram ↗</a>
          </div>
        </div>

      </div>
    </main>
  );
}
