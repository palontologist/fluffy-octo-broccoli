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
      {/* Hero with Gallery - Full Width */}
      <div className="mx-auto max-w-6xl">
        {/* 1. Hero / Top Section with Gallery */}
        <section className="text-center animate-on-scroll">
          <p className="mx-auto text-base text-zinc-300">
            I&apos;m <strong className="text-white">George Karani</strong>, founder of FrontForumFocus.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            We turn your impact into numbers investors actually trust — revenue, lives changed, and verified outcomes. 
           
          </p>
        </section>

        {/* Events Gallery - Hero Section */}
        <section className="mt-12 animate-on-scroll">


          {/* Photo Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 stagger-children">
            {/* Large feature image - group event */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-700/50 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/event.jpg"
                  alt="FrontForumFocus community event with team and participants"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 font-sans text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Community event bringing together impact builders
                </p>
              </div>
            </div>

            {/* Presentation image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-700/50 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/pres.jpg"
                alt="Workshop and training session"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 font-sans text-xs text-zinc-200">
                Leading workshops
              </p>
            </div>

            {/* Team selfie */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-700/50 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/seeee.jpeg"
                alt="Team moment at event"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 font-sans text-xs text-zinc-200">
                Team moments
              </p>
            </div>

            {/* Remote collaboration */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-700/50 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/eth.jpg"
                alt="Remote collaboration and virtual sessions"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 font-sans text-xs text-zinc-200">
                Virtual collaboration
              </p>
            </div>

            {/* Personal photo */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-700/50 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/selfie.jpeg"
                alt="At the workspace"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 font-sans text-xs text-zinc-200">
                In the field
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800 animate-on-scroll" />
      </div>

      {/* Story and Details - Narrower Width */}
      <div className="mx-auto max-w-3xl">
        {/* What We Do / Identity Block */}
       

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800" />

        {/* 4. Vision / Where We're Headed Strip */}
     
      </div>
    </main>
  );
}