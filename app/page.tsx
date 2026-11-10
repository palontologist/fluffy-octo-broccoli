"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TrackedCta } from "./components/TrackedCta";
import { trackCalculatorAdjusted } from "./lib/analytics";

export default function Home() {
  const activities = {
    solar: { label: "Clean energy generated", unit: "MWh", sdg: "SDG 7 · Affordable & Clean Energy", coefficient: 0.72, outcome: "tonnes of CO₂e avoided" },
    education: { label: "Learner hours supported", unit: "hours", sdg: "SDG 4 · Quality Education", coefficient: 0.04, outcome: "learners reached" },
    waste: { label: "Waste diverted", unit: "tonnes", sdg: "SDG 12 · Responsible Consumption", coefficient: 18, outcome: "household-equivalent waste days avoided" },
  } as const;
  type ActivityKey = keyof typeof activities;
  const [activity, setActivity] = useState<ActivityKey>("solar");
  const [activityAmount, setActivityAmount] = useState(45);
  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  const selectedActivity = activities[activity];
  const contribution = activityAmount * selectedActivity.coefficient;

  const lastTracked = useRef<string>("");
  useEffect(() => {
    const key = `${activity}:${activityAmount}`;
    if (key === lastTracked.current) return;
    lastTracked.current = key;
    trackCalculatorAdjusted({
      activity,
      amount: activityAmount,
      contribution,
      sdg: selectedActivity.sdg,
    });
  }, [activity, activityAmount, contribution, selectedActivity.sdg]);

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

  const faqJsonLd = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Impact Brain?","acceptedAnswer":{"@type":"Answer","text":"Impact Brain turns what you did into a score across the 17 UN SDGs. Type an activity, get its impact. Runs on your phone."}},{"@type":"Question","name":"How does the impact calculator work?","acceptedAnswer":{"@type":"Answer","text":"You type an activity. Impact Brain maps it to all 17 UN SDGs and scores it across four dimensions: economic, social, environmental, and time. Time is money, so hours times your rate. Every result comes with a confidence score."}},{"@type":"Question","name":"Why can I trust the calculations?","acceptedAnswer":{"@type":"Answer","text":"Rules are open and inspectable, each SDG has a documented rationale, scores are bounded from -100 to 100, confidence is reported with every result, and it runs on your phone with no cloud black box."}},{"@type":"Question","name":"Who is Impact Brain for?","acceptedAnswer":{"@type":"Answer","text":"Freelancers and founders who want to prove their value, and individual contributors who want to track and grow their impact."}}]};

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-start px-6 pt-20 pb-32 selection:bg-neutral-800 selection:text-white font-sans antialiased">
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
            Greta
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-neutral-200 sm:text-base md:text-lg">
            an impact brain that lives on your phone. turn what you did into proof.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-8">
            <TrackedCta
              href="https://cal.com/georgeka/30min?overlayCalendar=true"
              label="Book a demo"
              location="homepage:hero"
              kind="demo_booking"
              className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-neutral-950 shadow-md transition-all duration-150 hover:scale-[1.01] hover:bg-neutral-200 sm:text-sm"
            >
              Book a demo →
            </TrackedCta>

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
            ["What is Impact Brain?", "Impact Brain turns what you did into a score across the 17 UN SDGs. Type an activity, get its impact. Runs on your phone."],
            ["How does the impact calculator work?", "You type an activity. Impact Brain maps it to all 17 UN SDGs and scores it across four dimensions: economic, social, environmental, and time. Time is money, so hours times your rate. Every result comes with a confidence score."],
            ["Why can I trust the calculations?", "Rules are open and inspectable, each SDG has a documented rationale, scores are bounded from -100 to 100, confidence is reported with every result, and it runs on your phone with no cloud black box."],
            ["Who is Impact Brain for?", "Freelancers and founders who want to prove their value, and individual contributors who want to track and grow their impact."],
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

      {/* Download Section */}
      <div className="max-w-3xl w-full mt-20 p-6 sm:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/20 space-y-6 text-center">
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Beta</div>
          <h2 className="text-xl sm:text-2xl font-serif text-white">Download Impact Brain</h2>
          <p className="text-xs text-neutral-400">Free. Runs on your phone. Android APK.</p>
        </div>
        <p className="text-xs text-neutral-500">
          {downloadCount === null ? "Loading downloads…" : `${downloadCount} beta download${downloadCount === 1 ? "" : "s"}`}
        </p>
      </div>

    </main>
  );
}
