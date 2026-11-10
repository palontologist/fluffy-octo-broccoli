"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/downloads")
      .then((r) => r.json())
      .then((d) => setDownloadCount(typeof d.count === "number" ? d.count : 0))
      .catch(() => setDownloadCount(0));
  }, []);

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/downloads", { method: "POST" });
      const d = await res.json();
      if (typeof d.count === "number") setDownloadCount(d.count);
    } catch {
      // ignore
    }
    window.location.href = "https://github.com/palontologist/fluffy-octo-broccoli/releases/download/v0.1.0-beta/app-debug.apk";
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 pt-24 pb-24 selection:bg-emerald-500 selection:text-black">
      <div className="max-w-3xl mx-auto space-y-16">

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-emerald-400">
            About
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Impact Brain
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl">
            Turn what you did into proof.
          </p>
        </div>

        {/* Philosophy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">The philosophy</h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Every existing tool treats humans like stopwatches instead of value creators. Impact Brain does the opposite. You type what you did, and it turns that into an outcome you can show. The north star is simple: translate your work into outcomes.
          </p>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            The core loop is universal. One log, one translation, one counter. Surface copy varies lightly depending on what you want to do, but the engine underneath is the same for everyone.
          </p>
        </section>

        {/* How it came to be */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">How it came to be</h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            It started as a way to prove value. Freelancers and founders do real work, then have nothing to show for it. Hours disappear into meetings and emails, and the actual outcome never gets written down. Impact Brain fixes that: you type what you did, it maps it to the 17 UN SDGs and scores it.
          </p>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Then it became clear the same loop works for impact. An individual contributor tracking real contributions toward a goal uses the exact same log. So instead of two products, there is one, with intent-aware copy on top.
          </p>
        </section>

        {/* Who it is for */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Who it is for</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
              <h3 className="text-sm font-semibold text-white">Freelancers and founders (prove value)</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Turn hours worked into outcomes you can pitch, invoice, or share. See your real effective rate after meetings, emails, and admin. Client and value proof, built from the same translated outcomes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
              <h3 className="text-sm font-semibold text-white">Individual contributors (track and grow impact)</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Count real contributions toward goals. Build proof for collaborations, brands, and rewards. Impact proof, derived from the same log, with SDG counter contributions attached.
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Founders of ventures are coming next. Your proof carries forward.
          </p>
        </section>

        {/* The calculator */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">The calculator</h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Type an activity. Impact App maps it to all 17 UN SDGs and scores it across four dimensions: economic, social, environmental, and time. Time is money, so hours times your rate. Every result comes with a confidence score.
          </p>
          <div className="space-y-2">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Why you can trust it</div>
            <ul className="text-sm sm:text-base text-neutral-300 leading-relaxed space-y-2 list-disc list-inside">
              <li>Rules are open and inspectable. Each SDG has a documented rationale.</li>
              <li>Scores are bounded, from -100 to 100, and confidence is reported with every result.</li>
              <li>It runs on your phone. No cloud, no hidden black box.</li>
              <li>Inputs are your own words and your own hours. Nothing is estimated behind your back.</li>
            </ul>
          </div>
        </section>

        {/* Share Proof */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Share Proof</h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Pitch became Share Proof. Two formats, one log: Client and value proof for pitches, invoices, renewals, and collaborations. Impact proof for SDG-aligned partners, brands, and rewards, with SDG counter contributions attached. The founder view is deferred, and framed as coming next.
          </p>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Coming later: opportunities and rewards from impact-focused brands, powered by the same verified translated outcomes and SDG counters. A layer on top, not a new identity system or a separate app.
          </p>
        </section>

        {/* Marketplace layer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">The marketplace layer</h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Brands and private buyers onboard as Partners, not as a separate product. They post outcome-based briefs. Individuals apply with Share Proof generated from relevant translated outcomes. Brands evaluate fit and evidence, not a score. No fake universal impact price. Pricing is agreed per engagement, and the log is the system of record.
          </p>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Start narrow. Pilot with one segment, curate the first matches by hand, learn what pricing impact means in practice before building open discovery.
          </p>
        </section>

        {/* Onboarding as intent */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Onboarding as intent</h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Onboarding asks what you want to use this for, not who you are. Prove my value to clients and collaborators. Track and grow my impact. Show progress for my venture, coming next. Everyone gets the same tools. The intent only tailors prompts and defaults.
          </p>
        </section>

        {/* Download */}
        <section className="space-y-4 text-center">
          <a
            href="https://github.com/palontologist/fluffy-octo-broccoli/releases/download/v0.1.0-beta/app-debug.apk"
            download
            onClick={handleDownload}
            className="inline-flex px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-sm transition-colors"
          >
            Download Impact App APK (Beta) →
          </a>
          <p className="text-xs text-neutral-500">
            {downloadCount === null ? "Loading downloads…" : `${downloadCount} beta download${downloadCount === 1 ? "" : "s"}`}
          </p>
        </section>

      </div>
    </main>
  );
}
