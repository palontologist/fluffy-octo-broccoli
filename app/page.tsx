"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const activities = {
    solar: { label: "Clean energy generated", unit: "MWh", sdg: "SDG 7 · Affordable & Clean Energy", coefficient: 0.72, outcome: "tonnes of CO₂e avoided" },
    education: { label: "Learner hours supported", unit: "hours", sdg: "SDG 4 · Quality Education", coefficient: 0.04, outcome: "learners reached" },
    waste: { label: "Waste diverted", unit: "tonnes", sdg: "SDG 12 · Responsible Consumption", coefficient: 18, outcome: "household-equivalent waste days avoided" },
  } as const;
  type ActivityKey = keyof typeof activities;
  const [activity, setActivity] = useState<ActivityKey>("solar");
  const [activityAmount, setActivityAmount] = useState(45);
  const selectedActivity = activities[activity];
  const contribution = activityAmount * selectedActivity.coefficient;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-start px-6 pt-20 pb-32 selection:bg-neutral-800 selection:text-white font-sans antialiased">
      
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[2rem] border border-neutral-800/80 bg-neutral-900 shadow-2xl">
        <iframe
          src="https://player.mux.com/LnNXvJqpq6Q9bZ02uChMl6Ib16DHbaeLs9nO5kOP7bQ00?autoplay=true&muted=true&loop=true&controls=false"
          title="FrontForumFocus brand film"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-[1.08] border-0 opacity-50"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_45%),linear-gradient(90deg,rgba(10,10,10,0.98),rgba(10,10,10,0.7),rgba(10,10,10,0.86))]" />
        <div className="relative z-10 flex min-h-[560px] w-full flex-col items-center justify-center px-6 py-20 text-center sm:px-12">
          <h1 className="max-w-4xl font-serif text-3xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Turn clean energy data into
            <br />
            <span className="italic text-emerald-300">audit-ready carbon assets.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-neutral-200 sm:text-base md:text-lg">
            Connect solar inverters, microgrids, and mobile field contributors
            to automate dMRV, eliminate audit lag, and capture premium credit
            pricing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-8">
            <Link
              href="https://cal.com/georgeka/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-neutral-950 shadow-md transition-all duration-150 hover:scale-[1.01] hover:bg-neutral-200 sm:text-sm"
            >
              Book a demo →
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-neutral-600/80 bg-neutral-950/50 px-5 py-2.5 text-xs font-medium text-neutral-100 transition-all duration-150 hover:bg-neutral-800 sm:text-sm"
            >
              Explore Greta App
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive SDG impact calculator */}
      <section className="mt-20 w-full max-w-3xl rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="space-y-2 text-center">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">Try the impact mapper</div>
          <h2 className="font-serif text-2xl text-white sm:text-3xl">See how an activity contributes to global goals</h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-neutral-400 sm:text-sm">
            Choose an activity, add a measured amount, and see the SDG outcome
            it can help evidence.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-[1.35fr_1fr]">
          <label className="space-y-2 text-xs text-neutral-400">
            <span>Activity</span>
            <select
              value={activity}
              onChange={(event) => setActivity(event.target.value as ActivityKey)}
              className="w-full rounded-xl border border-neutral-800 bg-neutral-950/70 px-3 py-3 text-sm text-white outline-none focus:border-emerald-500/60"
            >
              {Object.entries(activities).map(([key, item]) => (
                <option key={key} value={key}>{item.label}</option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-xs text-neutral-400">
            <span>Measured amount</span>
            <div className="flex items-center rounded-xl border border-neutral-800 bg-neutral-950/70 px-3 focus-within:border-emerald-500/60">
              <input
                type="number"
                min="0"
                step="1"
                value={activityAmount}
                onChange={(event) => setActivityAmount(Math.max(0, Number(event.target.value) || 0))}
                className="w-full bg-transparent py-3 text-sm text-white outline-none"
              />
              <span className="text-neutral-500">{selectedActivity.unit}</span>
            </div>
          </label>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-5 sm:flex-row sm:items-center">
          <div>
            <div className="text-xs text-neutral-400">Mapped SDG contribution</div>
            <div className="mt-1 text-sm font-semibold text-emerald-300">{selectedActivity.sdg}</div>
          </div>
          <div className="text-left sm:text-right">
            <div className="font-mono text-2xl font-bold text-white">{contribution.toFixed(1)}</div>
            <div className="text-xs text-neutral-400">{selectedActivity.outcome}</div>
          </div>
        </div>
        <p className="mt-4 text-center text-[11px] leading-relaxed text-neutral-500">
          Illustrative conversion for exploration. Verified impact depends on
          methodology, baseline, geography, and supporting evidence.
        </p>
      </section>

      <section className="mt-20 w-full max-w-3xl space-y-4">
        <div className="space-y-2 text-center">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">Questions, answered</div>
          <h2 className="font-serif text-2xl text-white sm:text-3xl">Frequently asked questions</h2>
        </div>
        <div className="divide-y divide-neutral-800/80 rounded-2xl border border-neutral-800/80 bg-neutral-900/30">
          {[
            ["What is Greta?", "Greta turns activity and telemetry data into measurable impact signals, including SDG mappings and evidence-ready reports."],
            ["Who is the pilot for?", "The pilot is designed for clean-energy developers, microgrid operators, and organizations that need reliable impact evidence."],
            ["How does the impact calculator work?", "It maps a measured activity to an SDG and applies an illustrative conversion. Verified results require an agreed methodology, baseline, geography, and supporting evidence."],
            ["Can I see a demo before sharing data?", "Yes. Book a 30-minute call and we can walk through the workflow before discussing a pilot or integration."],
          ].map(([question, answer]) => (
            <details key={question} className="group p-5">
              <summary className="cursor-pointer list-none pr-6 text-sm font-medium text-white marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {question}
                  <span className="text-lg text-emerald-400 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">{answer}</p>
            </details>
          ))}
        </div>
      </section>

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
              href="https://cal.com/georgeka/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-lg border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-medium text-white transition-colors"
            >
              Book a demo
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
              href="https://cal.com/georgeka/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-center text-xs font-semibold text-neutral-950 transition-colors"
            >
              Book a demo
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
