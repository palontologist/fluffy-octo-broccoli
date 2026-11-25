"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TrackedCta } from "./components/TrackedCta";
import { EmailSubscribe } from "./components/EmailSubscribe";
import { TrustedBy } from "./components/TrustedBy";
import { GretaShowcase } from "./components/GretaShowcase";
import { trackCalculatorAdjusted } from "./lib/analytics";

export default function Home() {
  const activities = {
    solar: {
      label: "Clean energy generated",
      unit: "MWh",
      sdg: "SDG 7 · Affordable & Clean Energy",
      coefficient: 0.72,
      outcome: "tonnes of CO₂e avoided",
      equivalent: (value: number) => {
        const km = Math.round(value * 4023); // ~4,023 km per tonne CO2e (avg passenger car)
        const bottles = Math.round(value * 12195); // ~0.082kg CO2e per 500ml PET bottle
        return `≈ ${km.toLocaleString()} km in a petrol car · ≈ ${bottles.toLocaleString()} plastic bottles worth of emissions`;
      },
    },
    education: {
      label: "Learner hours supported",
      unit: "hours",
      sdg: "SDG 4 · Quality Education",
      coefficient: 0.04,
      outcome: "learners reached",
      equivalent: (value: number) => {
        const classrooms = Math.max(1, Math.round(value / 30));
        return `≈ ${classrooms.toLocaleString()} classroom${classrooms === 1 ? "" : "s"} of learners (30 per class)`;
      },
    },
    waste: {
      label: "Waste diverted",
      unit: "tonnes",
      sdg: "SDG 12 · Responsible Consumption",
      coefficient: 18,
      outcome: "household-equivalent waste days avoided",
      equivalent: (value: number) => {
        const bins = Math.round(value * 2); // rough: ~240L wheelie bin per 0.5 household-day equiv
        return `≈ ${bins.toLocaleString()} wheelie bins kept out of landfill`;
      },
    },
  } as const;
  type ActivityKey = keyof typeof activities;
  const [activity, setActivity] = useState<ActivityKey>("solar");
  const [activityAmount, setActivityAmount] = useState(45);
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



  const faqJsonLd = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Impact Brain?","acceptedAnswer":{"@type":"Answer","text":"Impact Brain turns what you did into a score across the 17 UN SDGs. Type an activity, get its impact. Runs on your phone."}},{"@type":"Question","name":"How does the impact calculator work?","acceptedAnswer":{"@type":"Answer","text":"You type an activity. Impact Brain maps it to all 17 UN SDGs and scores it across four dimensions: economic, social, environmental, and time. Time is money, so hours times your rate. Every result comes with a confidence score."}},{"@type":"Question","name":"Why can I trust the calculations?","acceptedAnswer":{"@type":"Answer","text":"Rules are open and inspectable, each SDG has a documented rationale, scores are bounded from -100 to 100, confidence is reported with every result, and it runs on your phone with no cloud black box."}},{"@type":"Question","name":"Who is Impact Brain for?","acceptedAnswer":{"@type":"Answer","text":"Freelancers and founders who want to prove their value, and individual contributors who want to track and grow their impact."}}]};

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 pt-20 pb-32 font-sans">
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="relative isolate w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0f0c] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_120px_rgba(0,0,0,0.55)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(52,211,153,0.16),transparent_35%),radial-gradient(ellipse_at_80%_20%,rgba(52,211,153,0.08),transparent_30%),linear-gradient(180deg,rgba(7,9,11,0.2),rgba(7,9,11,0.65))]" />
        <div className="brand-grid pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative z-10 grid min-h-[680px] items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_0.95fr] lg:px-14 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              frontforumfocus | impact OS
            </div>

            <h1 className="mt-8 font-serif text-5xl font-normal leading-[0.93] tracking-tight text-white sm:text-7xl md:text-8xl">
              Greta
            </h1>

            <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-neutral-300 sm:text-lg md:text-xl">
              An impact brain that lives on your phone.
              <span className="block text-white">Turn what you did into proof.</span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/apps/internaltest/4699935012830144337"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_8px_30px_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-100"
              >
                Join the Android beta
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] px-6 py-3 text-sm font-medium text-neutral-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                How it works
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-500">
              <span>17 UN SDGs</span>
              <span className="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block" />
              <span>On-device scoring</span>
              <span className="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block" />
              <span>Proof, not promises</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]">
            <div className="absolute -inset-8 rounded-[3rem] bg-emerald-400/12 blur-3xl" />
            <div className="glass-card relative rounded-[2.5rem] p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 aspect-[9/19.5]">
                <Image
                  src="/Screenshot_20261124_150946_greta.jpg"
                  alt="Greta app screenshot"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 360px, 420px"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-left-6 glass-card rounded-2xl px-4 py-3 shadow-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">Live proof</p>
              <p className="mt-1 text-xs text-neutral-300">Log → SDG score → share</p>
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* Log → Translate → Proof */}
      <section className="mt-24 w-full max-w-5xl space-y-8">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">How it works</div>
          <h2 className="font-serif text-3xl text-white sm:text-4xl text-balance">Log. Translate. Proof.</h2>
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            One simple loop. Type what you did, and Impact Brain turns it into impact you can show.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Log",
              body: "Type what you did in your own words. “Spent 3 hours mentoring two founders on clean energy pricing.”",
              proof: "Your input: real work, real hours.",
            },
            {
              step: "02",
              title: "Translate",
              body: "Impact Brain maps the activity across the 17 UN SDGs and scores it across economic, social, environmental, and time dimensions.",
              proof: "Output: SDG mapping + confidence score.",
            },
            {
              step: "03",
              title: "Proof",
              body: "Share a clear proof card with clients, collaborators, or your community. The same log becomes value proof or impact proof.",
              proof: "Result: evidence you can show.",
            },
          ].map((item) => (
            <div key={item.step} className="glass-card rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">{item.step}</span>
                <span className="h-px flex-1 mx-4 bg-white/10" />
                <span className="text-sm font-medium text-white">{item.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">{item.body}</p>
              <div className="rounded-2xl border border-emerald-400/12 bg-emerald-400/[0.04] px-4 py-3 text-xs text-emerald-200/90">
                {item.proof}
              </div>
            </div>
          ))}
        </div>
      </section>

      <GretaShowcase />

      {/* Interactive SDG impact calculator */}
      <section className="glass-card mt-24 w-full max-w-3xl rounded-3xl p-6 sm:p-8">
        <div className="space-y-3 text-center">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">Try the impact mapper</div>
          <h2 className="font-serif text-3xl text-white sm:text-4xl text-balance">See how an activity becomes proof</h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-neutral-400">
            Choose an activity, add a measured amount, and see the SDG outcome it can help evidence.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-[1.35fr_1fr]">
          <label className="space-y-2 text-xs text-neutral-400">
            <span className="font-mono uppercase tracking-wider text-neutral-500">Activity</span>
            <select
              value={activity}
              onChange={(event) => setActivity(event.target.value as ActivityKey)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-400/50"
            >
              {Object.entries(activities).map(([key, item]) => (
                <option key={key} value={key} className="bg-neutral-950">{item.label}</option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-xs text-neutral-400">
            <span className="font-mono uppercase tracking-wider text-neutral-500">Measured amount</span>
            <div className="flex items-center rounded-xl border border-white/10 bg-black/20 px-3 transition-colors focus-within:border-emerald-400/50">
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
        <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.06] p-5 space-y-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Mapped SDG contribution</div>
              <div className="mt-2 text-sm font-semibold text-emerald-300">{selectedActivity.sdg}</div>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-mono text-3xl font-bold text-white">{contribution.toFixed(1)}</div>
              <div className="text-xs text-neutral-400">{selectedActivity.outcome}</div>
            </div>
          </div>
          <div className="border-t border-emerald-400/10 pt-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-500">Actionable equivalent</div>
            <p className="mt-1 text-sm text-neutral-300">{selectedActivity.equivalent(contribution)}</p>
          </div>
        </div>
        <p className="mt-4 text-center text-[11px] leading-relaxed text-neutral-500">
          Illustrative conversion for exploration. Verified impact depends on methodology, baseline, geography, and supporting evidence.
        </p>
      </section>

      {/* Visual proof */}
      <section className="mt-24 w-full max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/event.jpg"
              alt="FrontForumFocus community event"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090b] via-[#07090b]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-300">In the real world</p>
              <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">Impact you can see.</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-300">
                From community events to field projects, FrontForumFocus helps people turn real work into verifiable proof.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-center space-y-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">Proof card</p>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 space-y-4">
              <div>
                <p className="text-xs text-neutral-500">Activity logged</p>
                <p className="mt-1 text-sm text-white">“Ran an electric vehicle impact measurement session with Skill Shark and community members.”</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] p-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">SDG</p>
                  <p className="mt-1 text-sm font-medium text-emerald-300">13 · Climate Action</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Confidence</p>
                  <p className="mt-1 text-sm font-medium text-white">High</p>
                </div>
              </div>
              <div className="border-t border-white/8 pt-4">
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Actionable equivalent</p>
                <p className="mt-1 text-sm text-neutral-300">≈ 18 km in a petrol car avoided · ≈ 220 plastic bottles worth of emissions</p>
              </div>
            </div>
            <p className="text-xs text-neutral-500">Sample proof card for illustration — real proofs come from your logged activities.</p>
          </div>
        </div>
      </section>

      <section className="mt-24 w-full max-w-3xl space-y-6">
        <div className="space-y-3 text-center">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">Questions, answered</div>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Frequently asked questions</h2>
        </div>
        <div className="glass-card divide-y divide-white/8 rounded-3xl overflow-hidden">
          {[
            ["What is Impact Brain?", "Impact Brain turns what you did into a score across the 17 UN SDGs. Type an activity, get its impact. Runs on your phone."],
            ["How does the impact calculator work?", "You type an activity. Impact Brain maps it to all 17 UN SDGs and scores it across four dimensions: economic, social, environmental, and time. Time is money, so hours times your rate. Every result comes with a confidence score."],
            ["Why can I trust the calculations?", "Rules are open and inspectable, each SDG has a documented rationale, scores are bounded from -100 to 100, confidence is reported with every result, and it runs on your phone with no cloud black box."],
            ["Who is Impact Brain for?", "Freelancers and founders who want to prove their value, and individual contributors who want to track and grow their impact."],
          ].map(([question, answer]) => (
            <details key={question} className="group p-5 sm:p-6">
              <summary className="cursor-pointer list-none text-sm font-medium text-white marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {question}
                  <span className="text-lg text-emerald-400 transition-transform duration-200 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <div className="glass-card mt-24 w-full max-w-3xl rounded-3xl p-6 sm:p-8 space-y-6 text-center">
        <div className="space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">Beta</div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">Get Impact Brain</h2>
          <p className="text-sm text-neutral-400">Free. Runs on your phone. Join the Android beta on Google Play.</p>
        </div>
        <div className="mt-4 text-left">
          <EmailSubscribe />
        </div>
      </div>

      {/* Community Section */}
      <div className="glass-card mt-6 w-full max-w-3xl rounded-3xl p-6 sm:p-8 space-y-5 text-center">
        <div className="space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">Community</div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">Join the global impact community</h2>
          <p className="text-sm text-neutral-400">Connect with impact changemakers and freelancers building with FrontForumFocus.</p>
        </div>
        <a
          href="https://ubqt.joinubqt.com/l/E820fYTD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-100"
        >
          Join the community →
        </a>
      </div>

    </main>
  );
}
