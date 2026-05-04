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
const WHATSAPP_URL = "https://chat.whatsapp.com/IPyovK0eXwoKFdfUlpCMOA";
const DISCORD_URL = "https://discord.gg/qpV9Gg3S54";

const offerings = [
  {
    name: "Media",
    tagline: "Open intelligence for the impact economy",
    href: "/impact-intelligence",
    cta: "Read Briefings",
    features: [
      "Weekly intelligence briefings on capital flows",
      "Impact investing market analysis",
      "Open-source research and data",
      "Podcast episodes with impact founders",
      "No paywall, no registration required",
    ],
    pricing: "Free / Open",
    popular: false,
    badge: "Freemium",
  },
  {
    name: "Community",
    tagline: "High-value network for impact builders",
    href: "#join",
    cta: "Join Community",
    features: [
      "Monthly founder video calls",
      "Curated introductions to members",
      "Private WhatsApp & Discord groups",
      "Early access to deal flow",
      "Pressure-tested: inactive members removed",
    ],
    pricing: "$49/mo or $400/yr",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Greta",
    tagline: "Know your real hourly rate & impact score",
    href: "/products/greta",
    cta: "Learn More",
    features: [
      "Calculate your effective hourly rate",
      "Track impact-aligned activities",
      "Get your personal Impact Score",
      "Data-driven pricing decisions",
      "$20 one-time or $9/month Pro",
    ],
    pricing: "From $20",
    popular: false,
    badge: "Tool",
  },
  {
    name: "Impact Intelligence Platform",
    tagline: "Operational carbon intelligence & ESG reporting",
    href: "/for-organizations",
    cta: "Learn More",
    features: [
      "Unified impact dashboard",
      "Operational carbon tracking",
      "ESG & CSRD compliance reporting",
      "Real-time monitoring",
      "Audit-ready reports",
    ],
    pricing: "From $299/mo",
    popular: false,
    badge: "Enterprise",
  },
];

const communityLinks = [
  {
    name: "WhatsApp",
    href: WHATSAPP_URL,
    description: "Daily discussions with impact founders",
  },
  {
    name: "Discord",
    href: DISCORD_URL,
    description: "Async community & resource sharing",
  },
];

const faqs = [
  {
    question: "What's the difference between Media and Community?",
    answer: "Media is completely open — anyone can read our briefings and listen to podcasts. Community is our curated network where we do monthly calls, make introductions, and share deal flow. We keep quality high by removing inactive members.",
  },
  {
    question: "How does the 'pressure test' work for Community?",
    answer: "We review member activity quarterly. If someone hasn't participated in calls, discussions, or introductions for 3 months, we remove them. This keeps the network valuable for everyone. You can rejoin anytime when you're ready to engage.",
  },
  {
    question: "Is Greta really just $20 one-time?",
    answer: "Yes. One payment of $20. No subscription, no recurring charges. You get lifetime access to the tool and any updates we make.",
  },
  {
    question: "Can I try the Community before paying?",
    answer: "Yes — join our WhatsApp group to get a feel for the community. If you find it valuable, upgrade to the full membership for the monthly calls and curated introductions.",
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
        {/* Hero */}
        <section className="text-center animate-on-scroll">
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Products & Pricing
          </h1>
          <p className="font-sans mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 animate-on-scroll">
            Media is free. Community is high-value. Tools are affordable. Enterprise is powerful.
          </p>
        </section>

        {/* Philosophy */}
        <section className="mt-12 animate-on-scroll">
          <div className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 md:p-8">
            <p className="font-sans text-zinc-300 leading-relaxed">
              We believe impact work should be measurable. Our pricing reflects this: 
              <span className="text-emerald-400"> open media</span> to spread knowledge, 
              <span className="text-emerald-400"> a curated community</span> for serious builders, 
              <span className="text-emerald-400"> affordable tools</span> for individual changemakers, and 
              <span className="text-emerald-400"> enterprise platforms</span> for organizations.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {offerings.map((product) => (
              <div
                key={product.name}
                className={`product-card relative flex flex-col rounded-2xl border bg-zinc-900/40 p-6 ${
                  product.popular
                    ? "border-emerald-500/50"
                    : "border-zinc-700/50"
                }`}
              >
                {product.badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 font-sans text-xs font-medium ${
                    product.popular
                      ? "bg-emerald-600 text-white"
                      : "bg-zinc-700 text-zinc-300"
                  }`}>
                    {product.badge}
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
                {product.name === "Community" ? (
                  <div className="mt-6">
                    <EmailSubscribe />
                  </div>
                ) : product.name === "Greta" ? (
                  <div className="mt-6 flex flex-col gap-2">
                    <Link
                      href={product.href}
                      className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500"
                    >
                      {product.cta}
                    </Link>
                    <a
                      href={GRETA_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 font-sans text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                    >
                      Get Greta for $20 →
                    </a>
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

        {/* Community Links */}
        <section className="mt-20 animate-on-scroll">
          <h2 className="font-serif text-2xl font-semibold text-white">
            Community Channels
          </h2>
          <p className="font-sans mt-2 max-w-2xl text-zinc-400">
            Join the conversation. These are open — no membership required.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {communityLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 transition-colors hover:border-emerald-500/30"
              >
                <h3 className="font-serif text-lg font-semibold text-white flex items-center gap-2">
                  {link.name === "WhatsApp" ? (
                    <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.72 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
                    </svg>
                  )}
                  {link.name}
                </h3>
                <p className="font-sans mt-2 text-sm text-zinc-400">
                  {link.description}
                </p>
                <span className="mt-4 inline-flex items-center font-sans text-sm text-emerald-400 hover:text-emerald-300">
                  Join →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
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
      </div>
    </main>
  );
}
