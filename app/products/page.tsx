"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../components/useScrollReveal";
import { EmailSubscribe } from "../components/EmailSubscribe";

gsap.registerPlugin(ScrollTrigger);

const CAL_DEMO_URL = "https://cal.com/georgekarani/30min";
const GRETA_APP_URL = "https://greta.frontforumfocus.com";

const products = [
  {
    name: "Greta",
    tagline: "The Impact Instrument for changemakers",
    href: GRETA_APP_URL,
    cta: "Get Your Verdict",
    features: [
      "Track activities against your Life Mission",
      "The Verdict: AI-powered Impact Score with brutal honesty",
      "Connect with people who share your goals",
      "Opportunity tab: exclusive communities & jobs",
      "Value over Noise — not a productivity app",
    ],
    pricing: "Free",
    popular: true,
  },
  {
    name: "Enterprise Dashboard",
    tagline: "Impact intelligence for organizations",
    href: CAL_DEMO_URL,
    cta: "Book a demo",
    features: [
      "Unified impact dashboard",
      "ESG & impact reporting",
      "Real-time monitoring",
      "Integration with existing systems",
      "Team collaboration",
      "Audit-ready reports",
    ],
    pricing: "Custom",
    popular: false,
  },
  {
    name: "Community Newsletter",
    tagline: "Impact intelligence in your inbox",
    href: "/#newsletter",
    cta: "Subscribe free",
    features: [
      "Weekly impact insights",
      "Founder & investor stories",
      "Product updates & features",
      "Early access to new tools",
    ],
    pricing: "Free",
    popular: false,
  },
];

const sponsorships = [
  {
    tier: "Partner",
    price: "$500/mo",
    features: [
      " Logo in newsletter footer",
      " Dedicated introduction email",
      " Quarterly sponsor spotlight",
    ],
  },
  {
    tier: "Featured",
    price: "$1,500/mo",
    features: [
      " Banner in newsletter",
      " Dedicated email to list",
      " Blog post feature",
      " Social media shoutout",
    ],
  },
];

const faqs = [
  {
    question: "What is an Impact Score?",
    answer: "The Impact Score is an AI-powered metric that evaluates your activities against your defined Life Mission. It provides blunt, honest feedback on how aligned your daily actions are with your core purpose.",
  },
  {
    question: "Is Greta a productivity app?",
    answer: "No. Greta is designed as an impact instrument, not a productivity tool. It focuses on value over noise, helping changemakers understand the quality and impact of their work, not just the quantity.",
  },
  {
    question: "How does The Verdict work?",
    answer: "The Verdict analyzes your activities, goals, and mission to generate a personalized Impact Score. It's designed to be brutally honest and sarcastic, cutting through self-deception to show you the truth about your impact.",
  },
  {
    question: "Can I connect with other changemakers?",
    answer: "Yes! Greta includes a social feature where you can connect with people who share similar goals and missions. Find your tribe of like-minded impact-driven individuals.",
  },
  {
    question: "What opportunities are available on Greta?",
    answer: "The Opportunity tab provides access to exclusive communities, job openings, and other opportunities tailored to your mission and impact goals.",
  },
];

export default function ProductsPage() {
  useScrollReveal(".animate-on-scroll", { start: "top 80%" });

  useEffect(() => {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.15,
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
    <main className="min-h-screen px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <section className="text-center animate-on-scroll">
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Products & Pricing
          </h1>
          <p className="font-sans mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 animate-on-scroll">
            Tools and programs to help you measure, report, and compound your impact.
          </p>
        </section>

        {/* Products */}
        <section className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className={`product-card relative flex flex-col rounded-2xl border bg-zinc-900/40 p-6 ${
                  product.popular
                    ? "border-emerald-500/50"
                    : "border-zinc-700/50"
                }`}
              >
                {product.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 font-sans text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-serif text-xl font-semibold text-white">
                  {product.name}
                </h3>
                <p className="font-sans mt-1 text-sm text-zinc-400">
                  {product.tagline}
                </p>
                <p className="font-mono mt-4 text-2xl font-semibold text-emerald-400">
                  {product.pricing}
                </p>
                <ul className="mt-4 flex-1 space-y-2">
                  {product.features.map((feature) => (
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
                {(product.name === "Community Newsletter" ? (
                  <div className="mt-6">
                    <EmailSubscribe />
                  </div>
                ) : (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500"
                  >
                    {product.cta}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorships */}
        <section className="mt-20 animate-on-scroll">
          <h2 className="font-serif text-2xl font-semibold text-white">
            Sponsor the newsletter
          </h2>
          <p className="font-sans mt-2 max-w-2xl text-zinc-400">
            Reach our community of founders, investors, and impact-driven
            organizations. Open for Q2 sponsorship.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {sponsorships.map((sponsorship, i) => (
              <div
                key={sponsorship.tier}
                className="product-card rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-white">
                  {sponsorship.tier}
                </h3>
                <p className="font-mono mt-2 text-xl font-semibold text-emerald-400">
                  {sponsorship.price}
                </p>
                <ul className="mt-4 space-y-2">
                  {sponsorship.features.map((feature) => (
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
                  href={CAL_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-lg border border-zinc-600 bg-zinc-800/60 px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
                >
                  Get in touch
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center animate-on-scroll">
          <p className="font-sans text-zinc-400">
            Questions about pricing or need a custom plan?{" "}
            <a
              href={CAL_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline hover:text-emerald-300"
            >
              Book a call
            </a>
          </p>
        </section>

        {/* FAQ Section for AEO */}
        <section className="mt-20 animate-on-scroll">
          <h2 className="font-serif text-2xl font-semibold text-white">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-zinc-700/50 bg-zinc-900/40"
              >
                <summary className="flex cursor-pointer items-center justify-between p-4 font-sans text-white">
                  <span>{faq.question}</span>
                  <svg
                    className="h-5 w-5 text-zinc-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="px-4 pb-4 font-sans text-sm text-zinc-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}