"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../components/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function OurStoryPage() {
  useScrollReveal(".animate-on-scroll", { start: "top 80%" });
  useScrollReveal(".stagger-children", { start: "top 75%" });

  useEffect(() => {
    // Stagger animation for children within stagger-children containers
    const staggerContainers = document.querySelectorAll(".stagger-children");
    staggerContainers.forEach((container) => {
      const children = container.children;
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
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
      <div className="mx-auto max-w-3xl">
        {/* 1. Hero / Top Section */}
        <section className="text-center animate-on-scroll">
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            From impact to impact intelligence.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 animate-on-scroll">
            Most impact organisations don&apos;t fail on impact.
            <br />
            They fail on the <em>translation</em> — from work on the ground to
            numbers and narratives that capital actually understands.
            <br />
            FrontForumFocus exists to fix that gap.
          </p>
        </section>

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800 animate-on-scroll" />

        {/* 2. Founder Story Block */}
        <section>
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 animate-on-scroll">
            Our Story
          </p>

          {/* Founder photo + text side by side */}
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:gap-12 stagger-children">
            {/* Photo */}
            <div className="mx-auto flex-shrink-0 animate-on-scroll">
              <div className="animate-float relative h-64 w-48 overflow-hidden rounded-2xl border border-zinc-700/60 shadow-2xl md:h-72 md:w-52">
                <Image
                  src="/george.jpg"
                  alt="George Karani – Founder of FrontForumFocus"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 208px"
                  priority
                />
              </div>
              <p className="mt-3 text-center font-mono text-xs text-zinc-500">
                George Karani, Founder
              </p>
            </div>

            {/* Story text */}
            <div className="space-y-5 text-base leading-relaxed text-zinc-300">
              <p className="animate-on-scroll">
                I&apos;m <strong className="text-white">George Karani</strong>,
                founder of FrontForumFocus. I grew up in Kenya, studied IT, and
                spent the last years building at the intersection of technology,
                youth organising and startups — from the original FrontForumFocus
                as a youth platform and podcast, to working with founders and
                communities across Africa.
              </p>
              <p className="animate-on-scroll">
                Along the way I kept seeing the same pattern:
              </p>
              <p className="animate-on-scroll">
                brilliant teams doing serious work — microfinance, climate, jobs,
                education — but when it was time to talk to donors, DFIs or
                investors, the story was scattered across PDFs, Excel sheets and
                last‑minute slides.
              </p>
              <p className="text-zinc-400 animate-on-scroll">
                The work was strong.
                <br />
                The narrative and data layer weren&apos;t.
                <br />
                FrontForumFocus is my answer to that.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800" />

        {/* Community image */}
        <section className="animate-on-scroll">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Community
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-700/50 shadow-xl">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/sea.jpg"
                alt="FrontForumFocus community — impact builders across Africa and the global south"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-6 font-sans text-sm text-zinc-200">
                Building together — Africa &amp; the global south
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800" />

        {/* 3. What We Do / Identity Block */}
        <section className="animate-on-scroll">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            How we&apos;re different
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300">
            <p>
              We{" "}
              <strong className="text-white">
                think like a CFO and speak like a storyteller
              </strong>
              .
            </p>
            <p>
              We sit with your impact data, your financials, and your field
              stories and turn them into a live{" "}
              <strong className="text-white">impact intelligence layer</strong>{" "}
              — dashboards and narratives that help you see, tell and decide,
              especially when you&apos;re in the room with capital.
            </p>
            <p>
              We&apos;re building first with impact organisations in Africa and
              the global south, because that&apos;s home — and because this is
              where the gap between real work and perceived value is the widest.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800" />

        {/* 4. Vision / Where We're Headed Strip */}
        <section className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 px-8 py-10 animate-on-scroll">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Where we&apos;re headed
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-200">
            We&apos;re building a simple, honest{" "}
            <strong className="text-white">impact OS</strong> for
            mission‑driven teams — so the people closest to the problem can
            also be the sharpest in the boardroom.
          </p>
        </section>
      </div>
    </main>
  );
}