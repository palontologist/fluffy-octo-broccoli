"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../components/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const CAL_DEMO_URL = "https://cal.com/georgekarani/30min";

export default function ForOrganizationsPage() {
  useScrollReveal(".animate-on-scroll", { start: "top 80%" });

  useEffect(() => {
    // Animate capability cards on scroll
    const capabilityCards = document.querySelectorAll(".capability-card");
    capabilityCards.forEach((card, i) => {
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

    // Animate stats on scroll with counter effect
    const stats = document.querySelectorAll(".stat-item");
    stats.forEach((stat, i) => {
      gsap.fromTo(
        stat,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate CTAs
    const ctas = document.querySelectorAll(".cta-button");
    gsap.fromTo(
      ctas,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctas[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <main className="min-h-screen px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <section className="text-center animate-on-scroll">
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            For Organizations
          </h1>
          <p className="font-sans mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 animate-on-scroll">
            Impact dashboard shows how trust and collaboration move across teams
            and programs. Helps enterprises, funds, or programs see where the
            real outcomes are happening.
          </p>
        </section>

        <p className="font-sans mx-auto mt-6 max-w-3xl text-center text-zinc-400 animate-on-scroll">
          A unified impact measurement platform that connects your operations,
          finances, and outcomes—giving you the real-time visibility you need to
          measure, report, and optimize.
        </p>

        {/* Core capabilities */}
        <section className="mt-16">
          <h2 className="font-serif text-xl font-semibold text-white md:text-2xl animate-on-scroll">
            Core capabilities
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="capability-card rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5">
              <h3 className="font-sans font-semibold text-white">
                Unified Impact Dashboard
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                Combine financial, operational, and program data in one place.
                See the complete picture of your impact.
              </p>
            </li>
            <li className="capability-card rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5">
              <h3 className="font-sans font-semibold text-white">
                ESG & Impact Reporting
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                Generate clear, audit-ready reports for investors, donors,
                boards, and regulators in minutes—not weeks.
              </p>
            </li>
            <li className="capability-card rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5">
              <h3 className="font-sans font-semibold text-white">
                Decision Support Analytics
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                See which programs, regions, or portfolios drive the strongest
                financial and social returns. Optimize intelligently.
              </p>
            </li>
            <li className="capability-card rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5">
              <h3 className="font-sans font-semibold text-white">
                Real-Time Monitoring
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                Track progress toward ESG targets, SDG commitments, and custom
                outcome metrics in real-time.
              </p>
            </li>
            <li className="capability-card rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-5 sm:col-span-2">
              <h3 className="font-sans font-semibold text-white">
                Integration Ready
              </h3>
              <p className="font-sans mt-1 text-sm text-zinc-400">
                Connect to your existing systems—Salesforce, accounting
                software, program management tools—seamlessly.
              </p>
            </li>
          </ul>
        </section>

        {/* Dashboard screenshot */}
        <section className="mt-16 animate-on-scroll">
          <h2 className="font-serif text-xl font-semibold text-white md:text-2xl">
            Dashboard Preview
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/40">
            <div className="relative aspect-video w-full md:aspect-[2/1]">
              <Image
                src="/impact-dash.png"
                alt="FrontForumFocus Impact Dashboard – AI Education Campaign example"
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </div>
        </section>

        {/* Products & Pricing */}
        <section className="mt-16 animate-on-scroll">
          <h2 className="font-serif text-xl font-semibold text-white md:text-2xl">
            Products & Pricing
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="capability-card rounded-xl border border-emerald-500/50 bg-zinc-900/40 p-6">
              <span className="font-mono text-xs font-medium text-emerald-400">
                FREE TOOL
              </span>
              <h3 className="font-sans mt-2 text-lg font-semibold text-white">
                Carbon Calculator
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400">
                Calculate your organization's carbon footprint instantly. 
                Free tool at our dashboard.
              </p>
              <a
                href="https://dashboard.frontforumfocus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-sans text-sm text-emerald-400 hover:text-emerald-300"
              >
                Access Calculator →
              </a>
            </div>
            <div className="capability-card rounded-xl border border-zinc-700/50 bg-zinc-900/40 p-6">
              <span className="font-mono text-xs font-medium text-amber-400">
                $500 / report
              </span>
              <h3 className="font-sans mt-2 text-lg font-semibold text-white">
                Custom Impact Reports
              </h3>
              <p className="font-sans mt-2 text-sm text-zinc-400">
                Tailored analysis with 3 key metrics specific to your industry. 
                Get actionable insights on what matters most to your stakeholders.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 font-sans text-xs text-zinc-400">
                  <span className="text-emerald-400">✓</span>
                  3 industry-specific metrics
                </li>
                <li className="flex items-center gap-2 font-sans text-xs text-zinc-400">
                  <span className="text-emerald-400">✓</span>
                  Custom analysis & recommendations
                </li>
                <li className="flex items-center gap-2 font-sans text-xs text-zinc-400">
                  <span className="text-emerald-400">✓</span>
                  PDF report with actionable insights
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <div className="cta-group mt-12 flex flex-wrap items-center justify-center gap-4 animate-on-scroll">
          <Link
            href="/for-organizations/use-cases"
            className="cta-button inline-flex items-center rounded-lg border border-zinc-600 bg-zinc-800/60 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            Explore use cases
          </Link>
          <a
            href={CAL_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center rounded-lg border border-zinc-600 bg-transparent px-6 py-3 font-sans text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Book a demo
          </a>
        </div>
      </div>
    </main>
  );
}