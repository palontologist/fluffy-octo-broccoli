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
    window.location.href = "/impact-brain.apk";
  };
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 pt-24 pb-24 selection:bg-emerald-500 selection:text-black">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-emerald-400">
            FrontForumFocus Products
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Impact App
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
            Turn what you did into proof. Type an activity, get its impact across the 17 UN SDGs. Runs on your phone.
          </p>
        </div>

        {/* The calculator */}
        <div className="p-8 sm:p-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">The calculator</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How the impact score is calculated</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            You type what you did. Impact App maps it to all 17 UN SDGs and scores it across four dimensions: economic, social, environmental, and time. Time is money, so hours times your rate. Every assessment comes with a confidence score.
          </p>
          <div className="space-y-2">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Why you can trust it</div>
            <ul className="text-sm sm:text-base text-neutral-300 leading-relaxed space-y-2 list-disc list-inside">
              <li>Rules are open and inspectable — each SDG has a documented rationale.</li>
              <li>Scores are bounded (-100 to 100) and confidence is reported with every result.</li>
              <li>It runs on your phone. No cloud, no hidden black box.</li>
              <li>Inputs are your own words and your own hours. Nothing is estimated behind your back.</li>
            </ul>
          </div>
        </div>

        {/* Product: Impact App (APK Beta) */}
        <div className="p-8 sm:p-10 rounded-2xl border border-emerald-900/40 bg-emerald-950/10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">Individuals &amp; Communities</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Impact App</h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800/80 text-teal-400 text-xs font-mono">
              Android APK Beta
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Type what you did. Get its impact across the 17 UN SDGs. Scores economic, social, environmental, and time. Runs on your phone, no cloud.
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
            <a
              href="/impact-brain.apk"
              download
              onClick={handleDownload}
              className="inline-flex px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-xs transition-colors"
            >
              Download Impact App APK (Beta) →
            </a>
            <p className="mt-2 text-xs text-neutral-500">
              {downloadCount === null ? "Loading downloads…" : `${downloadCount} beta download${downloadCount === 1 ? "" : "s"}`}
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
