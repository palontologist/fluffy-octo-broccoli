"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hourlyRate, setHourlyRate] = useState(100);
  const [billableHours, setBillableHours] = useState(24);
  const [nonBillableHours, setNonBillableHours] = useState(16);

  const totalHours = billableHours + nonBillableHours;
  const revenue = hourlyRate * billableHours;
  const effectiveRate = totalHours > 0 ? revenue / totalHours : 0;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-start px-6 pt-32 pb-32 selection:bg-neutral-800 selection:text-white font-sans antialiased">
      
      {/* Top Subtle Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-800/80 bg-neutral-900/60 text-xs text-neutral-400 mb-8 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="tracking-wide">frontforumfocus • the verifiable impact layer</span>
      </div>

      {/* Hero Section */}
      <section className="relative isolate w-full max-w-6xl overflow-hidden rounded-[2rem] border border-neutral-800/80 bg-neutral-900 shadow-2xl">
        <iframe
          src="https://player.mux.com/LnNXvJqpq6Q9bZ02uChMl6Ib16DHbaeLs9nO5kOP7bQ00?autoplay=true&muted=true&loop=true&controls=false"
          title="FrontForumFocus brand film"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-[1.08] border-0 opacity-50"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_45%),linear-gradient(90deg,rgba(10,10,10,0.98),rgba(10,10,10,0.7),rgba(10,10,10,0.86))]" />
        <div className="relative z-10 flex min-h-[560px] flex-col items-center justify-center px-6 py-20 text-center sm:px-12">
          <h1 className="max-w-4xl font-serif text-3xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Make your work count.
            <br />
            <span className="italic text-emerald-300">Know your real impact.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-neutral-200 sm:text-base md:text-lg">
            Greta helps founders and changemakers see what their time is really
            worth, focus on meaningful work, and build with proof.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-8">
            <Link
              href="/products/greta"
              className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-neutral-950 shadow-md transition-all duration-150 hover:scale-[1.01] hover:bg-neutral-200 sm:text-sm"
            >
              Explore Greta →
            </Link>
            <Link
              href="/community"
              className="rounded-full border border-neutral-600/80 bg-neutral-950/50 px-5 py-2.5 text-xs font-medium text-neutral-100 transition-all duration-150 hover:bg-neutral-800 sm:text-sm"
            >
              Meet the community
            </Link>
          </div>
        </div>
      </section>

      {/* Transparent real-rate calculator */}
      <section className="mt-20 w-full max-w-3xl rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="space-y-2 text-center">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">Try Greta</div>
          <h2 className="font-serif text-2xl text-white sm:text-3xl">What is your real hourly rate?</h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-neutral-400 sm:text-sm">
            Your effective rate includes every hour spent delivering the work,
            not only the hours you can invoice.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Hourly rate", hourlyRate, setHourlyRate, "$"],
            ["Billable hours", billableHours, setBillableHours, "h"],
            ["Other hours", nonBillableHours, setNonBillableHours, "h"],
          ].map(([label, value, setter, suffix]) => (
            <label key={label as string} className="space-y-2 text-xs text-neutral-400">
              <span>{label as string}</span>
              <div className="flex items-center rounded-xl border border-neutral-800 bg-neutral-950/70 px-3 focus-within:border-emerald-500/60">
                <span className="text-neutral-500">{suffix as string}</span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={value as number}
                  onChange={(event) => (setter as (value: number) => void)(Math.max(0, Number(event.target.value) || 0))}
                  className="w-full bg-transparent px-2 py-3 text-sm text-white outline-none"
                />
              </div>
            </label>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-5 sm:flex-row">
          <div>
            <div className="text-xs text-neutral-400">Effective hourly rate</div>
            <div className="mt-1 font-mono text-3xl font-bold text-emerald-300">
              ${effectiveRate.toFixed(2)}
            </div>
          </div>
          <div className="text-right text-xs text-neutral-400">
            <div>${revenue.toFixed(2)} revenue ÷ {totalHours.toFixed(1)} total hours</div>
            <div className="mt-1 text-neutral-500">A transparent estimate, not financial advice.</div>
          </div>
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
