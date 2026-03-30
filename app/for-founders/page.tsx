"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../components/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const GRETA_APP_URL = "https://greta.frontforumfocus.com";
const CAL_DEMO_URL = "https://cal.com/georgekarani/30min";

export default function ForFoundersPage() {
  useScrollReveal(".animate-on-scroll", { start: "top 80%" });

  useEffect(() => {
    // Animate phone screenshots on scroll
    const screenshots = document.querySelectorAll(".phone-screenshot");
    screenshots.forEach((shot, i) => {
      gsap.fromTo(
        shot,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: shot,
            start: "top 85%",
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
            For Founders
          </h1>
          <p className="font-sans mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 animate-on-scroll">
            Greta maps your calendar, tasks, and payments into a live picture of
            how your time turns into revenue, runway, and valuation—so you can
            stop guessing and start compounding on purpose.
          </p>
        </section>

        {/* Three screenshots - layout like reference (static, side by side) */}
        <section className="mt-16 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          <div className="phone-screenshot flex-shrink-0 w-[280px] overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/40 shadow-xl md:w-[240px]">
            <div className="relative aspect-[9/19] w-full">
              <Image
                src="/n.png"
                alt="Greta – Define your mission and North Star"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
          <div className="phone-screenshot flex-shrink-0 w-[280px] overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/40 shadow-xl md:w-[240px]">
            <div className="relative aspect-[9/19] w-full">
              <Image
                src="/nn.png"
                alt="Greta – See your alignment and insights"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
          <div className="phone-screenshot flex-shrink-0 w-[280px] overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/40 shadow-xl md:w-[240px]">
            <div className="relative aspect-[9/19] w-full">
              <Image
                src="/screenshot.png"
                alt="Greta – Set up and measure your impact"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
        </section>

        {/* CTAs */}
        <div className="cta-group mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={GRETA_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500"
          >
            Try Greta free
          </a>
          <Link
            href="/for-founders/use-cases"
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