"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );

      // Parallax background on scroll
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Subtle scale on background
      gsap.to(".hero-bg", {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/b.jpg')",
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      
      {/* Subtle vertical light streaks */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)`,
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-16 text-center md:px-12">
        {/* Abstract focal element - minimal sphere-like gradient */}

        {/* Hero text */}
        <h1
          ref={titleRef}
          className="font-serif max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white"
        >
          Human Intelligence Infrastructure
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 max-w-md text-sm md:text-base text-zinc-300 font-sans font-normal"
        >
          Building the tools that show you what your work is compounding into — and connect you with the people building alongside you.
        </p>
        <div ref={ctaRef} className="mt-8 flex justify-center">
          <Link
            href="https://greta.frontforumfocus.com"
            className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-600 transition-colors"
          >
            Try now for free
          </Link>
        </div>

        
      </div>
    </main>
  );
}