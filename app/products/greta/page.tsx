"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../../components/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);


const GRETA_APP_URL = "https://play.google.com/apps/internaltest/4699935012830144337";

const features = [
  {
    title: "Catch Forgotten Evidence",
    description:
      "Log activities manually, paste an M-Pesa message, or add quick notes after the day is done. Greta turns forgotten work, travel, and spending into evidence cards you can confirm in seconds.",
  },
  {
    title: "Weekly Impact Proof Report",
    description:
      "Get a client-ready weekly report with what you did, what it enabled, and the SDG/impact signals behind it. Use it in proposals, invoices, check-ins, or reviews.",
  },
  {
    title: "Defensible Metrics, Not Guesses",
    description:
      "Greta labels every metric as Confirmed, Estimated, or Unknown. Transport can show estimated CO2e avoided vs a baseline; work and spending can be logged as SDG-aligned evidence.",
  },
  {
    title: "Built for Painful Moments",
    description:
      "When you need to justify your rate, win a client, pass a review, or report ESG, Greta gives you proof from activities you already did — before they disappear from memory.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Capture",
    description: "Add an activity manually, paste an M-Pesa message, or drop a quick note from your day.",
  },
  {
    step: "02",
    title: "Confirm",
    description: "Greta drafts an evidence card. You confirm the details, edit assumptions, and choose what counts.",
  },
  {
    step: "03",
    title: "Measure",
    description: "Greta maps confirmed activities to SDGs and defensible metrics, with confidence labels.",
  },
  {
    step: "04",
    title: "Prove",
    description: "Export a Weekly Impact Proof Report you can send to a client, funder, reviewer, or team.",
  },
];

const tiers = [
  {
    name: "Core",
    price: "$20",
    period: "one-time",
    description: "Capture forgotten activities and turn them into clear impact evidence you can keep and share.",
    features: [
      "Manual activity capture",
      "M-Pesa/message paste draft flow",
      "SDG impact mapping",
      "Confirmed / Estimated / Unknown labels",
      "Lifetime access",
    ],
    cta: "Get Core",
    href: GRETA_APP_URL,
    popular: true,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "Everything in Core, plus recurring proof reports and smarter capture for people who need to show value often.",
    features: [
      "Everything in Core",
      "Weekly Impact Proof Reports",
      "Client/review-ready share links",
      "Advanced analytics & trends",
      "Priority capture features (GPS/day review, coming soon)",
    ],
    cta: "Start Pro",
    href: GRETA_APP_URL,
    popular: false,
  },
];

export default function ImpactBrainPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(".animate-on-scroll", { start: "top 80%" });

  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <section className="text-center animate-on-scroll">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Now Available
          </div>
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Impact Brain
          </h1>
          <p className="font-sans mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            The evidence tool for freelancers and changemakers. Capture forgotten activities. Turn them into Weekly Impact Proof Reports.
          </p>
        </section>

        {/* Pricing Tiers */}
        <section className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border bg-zinc-900/40 p-6 ${
                  tier.popular
                    ? "border-emerald-500/50"
                    : "border-zinc-700/50"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 font-sans text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-xl font-semibold text-white">
                  {tier.name}
                </h3>
                <p className="font-sans mt-2 text-sm text-zinc-400">
                  {tier.description}
                </p>
                <div className="mt-4">
                  <span className="font-mono text-3xl font-bold text-emerald-400">
                    {tier.price}
                  </span>
                  <span className="font-sans text-zinc-500">
                    {tier.period}
                  </span>
                </div>
                <ul className="mt-4 flex-1 space-y-2">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 font-sans text-sm text-zinc-300"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-3 font-sans text-sm font-medium transition-colors ${
                    tier.popular
                      ? "bg-emerald-600 text-white hover:bg-emerald-500"
                      : "border border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof / Philosophy */}
        <section className="mt-16 animate-on-scroll">
          <div className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-8 md:p-12">
            <blockquote className="font-serif text-xl font-medium text-white md:text-2xl leading-relaxed">
              &ldquo;Most freelancers and changemakers do valuable work every week, but forget to capture the evidence. When it&apos;s time to justify a rate, win a client, pass a review, or report impact, the proof is gone.&rdquo;
            </blockquote>
            <p className="mt-4 font-sans text-zinc-400">
              — The problem Impact Brain solves
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-white animate-on-scroll">
            What Impact Brain Does
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-card rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-white animate-on-scroll">
            How It Works
          </h2>
          <div className="mt-8 space-y-4">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className="animate-on-scroll flex items-start gap-4 rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-400">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Pricing */}
        <section className="mt-16 animate-on-scroll">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 md:p-12">
            <h2 className="font-serif text-2xl font-semibold text-white">
              Why This Pricing?
            </h2>
            <div className="mt-6 space-y-4 font-sans text-zinc-300">
              <p>
                <strong className="text-white">$20 one-time</strong> gets you the core capture and impact-mapping tool. It&apos;s enough to start building a proof habit without a big commitment.
              </p>
              <p>
                <strong className="text-white">$9/month</strong> is for people who need to prove value regularly. Weekly Impact Proof Reports, shareable outputs, and smarter capture compound over time.
              </p>
              <p className="text-zinc-400">
                The goal isn&apos;t to track more. It&apos;s to make sure the value you already create doesn&apos;t disappear when you need to prove it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center animate-on-scroll">
          <h2 className="font-serif text-2xl font-semibold text-white">
            Don&apos;t Lose the Proof.
          </h2>
          <p className="mt-4 font-sans text-zinc-400">
            Capture forgotten activities. Send a Weekly Impact Proof Report when it matters.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={GRETA_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 font-sans text-base font-medium text-white transition-colors hover:bg-emerald-500"
            >
              Get Core for $20 →
            </a>
            <a
              href={GRETA_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 px-8 py-4 font-sans text-base font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              Start Pro $9/mo →
            </a>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            30-day money-back guarantee on both tiers.
          </p>
        </section>
      </div>
    </main>
  );
}