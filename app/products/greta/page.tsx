"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../../components/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);


const GRETA_APP_URL = "https://greta.frontforumfocus.com";

const features = [
  {
    title: "Know Your Real Rate",
    description:
      "Enter your hourly rate and billable hours. Greta tracks the time you spend on meetings, emails, and admin. Then it shows you what you're actually earning per hour.",
  },
  {
    title: "Impact Score",
    description:
      "Track activities aligned with your Life Mission. Greta gives you an Impact Score based on how much of your time goes toward what actually matters to you.",
  },
  {
    title: "Data-Driven Pricing",
    description:
      "Stop guessing what to charge. See what your effective rate is after non-billable time, and price your services based on real data.",
  },
  {
    title: "Weekly Calibration",
    description:
      "A simple weekly check-in. What did you work on? Was it high-impact? Greta helps you spot patterns and optimize where your time goes.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Set Your Rate",
    description: "Enter your hourly or project rate. Be honest — this is just for you.",
  },
  {
    step: "02",
    title: "Track Your Time",
    description: "Log billable hours and the time you spend on non-billable work.",
  },
  {
    step: "03",
    title: "See Your Real Rate",
    description: "Greta calculates your effective hourly rate after all costs.",
  },
  {
    step: "04",
    title: "Optimize for Impact",
    description: "Use your Impact Score to focus on what moves the needle.",
  },
];

const tiers = [
  {
    name: "Core",
    price: "$20",
    period: "one-time",
    description: "The full Greta tool. Calculate your real rate, track your Impact Score, and make data-driven pricing decisions.",
    features: [
      "Real rate calculator",
      "Impact Score tracking",
      "Weekly calibration",
      "Data export",
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
    description: "Everything in Core, plus advanced analytics, community access, and impact benchmarking.",
    features: [
      "Everything in Core",
      "Advanced analytics dashboard",
      "Community access",
      "Impact benchmarking",
      "Weekly impact reports",
      "Priority support",
    ],
    cta: "Start Pro",
    href: GRETA_APP_URL,
    popular: false,
  },
];

export default function GretaPage() {
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
            Greta
          </h1>
          <p className="font-sans mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            The Impact Instrument for changemakers. Know what your work is really worth.
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
              "Most freelancers don't know what they actually earn. They charge $100/hour, work 40 hours, and think they made $4,000. But after meetings, emails, revisions, and chasing invoices, their real rate is closer to $40."
            </blockquote>
            <p className="mt-4 font-sans text-zinc-400">
              — The problem Greta solves
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-white animate-on-scroll">
            What Greta Does
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
                <strong className="text-white">$20 one-time</strong> gets you the core tool. It's enough to make you value it, cheap enough to be an impulse decision.
              </p>
              <p>
                <strong className="text-white">$9/month</strong> gets you compounding value. Advanced analytics, community access, and weekly reports that actually improve your pricing over time.
              </p>
              <p className="text-zinc-400">
                We want startups, not lifestyle businesses. Recurring revenue lets us invest in the product. One-time purchases don't.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center animate-on-scroll">
          <h2 className="font-serif text-2xl font-semibold text-white">
            Stop Guessing. Know Your Rate.
          </h2>
          <p className="mt-4 font-sans text-zinc-400">
            Start with Core. Upgrade when you see the value.
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
