"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../components/useScrollReveal";
import { EmailSubscribe } from "../components/EmailSubscribe";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CAL_DEMO_URL = "https://cal.com/georgekarani/30min";
const GRETA_APP_URL = "https://greta.frontforumfocus.com";

const products = [
  {
    name: "Membership",
    tagline: "The community for impact founders & changemakers",
    href: "#join",
    cta: "Join Now",
    features: [
      "Curated introductions to members building in adjacent spaces",
      "Access to the podcast guest network",
      "Private community of impact founders",
      "Weekly intelligence briefing on capital flows into African impact",
      "Early access to deal flow from DFIs & impact investors",
    ],
    pricing: "$49/mo or $400/yr",
    popular: true,
  },
  {
    name: "Greta",
    tagline: "Freelancers: know your real hourly rate",
    href: GRETA_APP_URL,
    cta: "Try Greta Free",
    features: [
      "Enter your rate and billable hours",
      "Track hours spent on meetings & emails",
      "Auto-calculate your effective hourly rate",
      "See what you're really earning after non-billable time",
      "Make data-driven pricing decisions",
    ],
    pricing: "Free",
    popular: false,
  },
  {
    name: "Impact Dashboard",
    tagline: "Operational carbon intelligence, ESG reporting, and CSRD compliance",
    href: "/for-organizations",
    cta: "Learn More",
    features: [
      "Unified impact dashboard",
      "Operational carbon intelligence",
      "ESG & impact reporting",
      "CSRD compliance",
      "Real-time monitoring",
      "Audit-ready reports",
    ],
    pricing: "From $299/mo",
    popular: false,
  },
];

const services = [
  {
    name: "For Founders",
    description: "Tools and programs designed specifically for impact founders building in Africa and the global south.",
    href: "/for-founders",
    cta: "Explore",
  },
  {
    name: "For Organizations",
    description: "Enterprise-grade impact measurement, ESG reporting, and sustainability solutions for organizations.",
    href: "/for-organizations",
    cta: "Explore",
  },
];

const faqs = [
  {
    question: "What's included in the membership?",
    answer: "Members get curated introductions to other impact founders, access to our podcast guest network, a private community, weekly intelligence on capital flows into African impact, and early access to deal flow from DFIs and impact investors.",
  },
  {
    question: "How does Greta calculate effective rate?",
    answer: "You enter your hourly rate and the hours you spend on meetings and emails each month. Greta automatically computes your effective rate after subtracting non-billable time, helping you price your services more accurately.",
  },
  {
    question: "What's included in the Impact Dashboard?",
    answer: "The Impact Dashboard includes operational carbon intelligence, ESG and impact reporting, CSRD compliance, real-time monitoring, and audit-ready reports. It's designed for organizations that need comprehensive sustainability tracking.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes, you can cancel your membership at any time. Annual subscriptions can be refunded prorated at our discretion.",
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
                {product.name === "Membership" ? (
                  <div className="mt-6">
                    <EmailSubscribe />
                  </div>
                ) : (
                  <Link
                    href={product.href}
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500"
                  >
                    {product.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 animate-on-scroll">
          <h2 className="font-serif text-2xl font-semibold text-white">
            Services
          </h2>
          <p className="font-sans mt-2 max-w-2xl text-zinc-400">
            Additional programs and solutions tailored to your needs.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="product-card rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-white">
                  {service.name}
                </h3>
                <p className="font-sans mt-2 text-sm text-zinc-400">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center font-sans text-sm text-emerald-400 hover:text-emerald-300"
                >
                  {service.cta} →
                </Link>
              </div>
            ))}
          </div>
        </section>

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