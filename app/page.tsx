"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function JoinCommunity() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscribe failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        disabled={status === "loading"}
        className="flex-1 rounded-lg border border-zinc-600 bg-zinc-800/80 px-4 py-3 font-sans text-sm text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:opacity-50"
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-emerald-600 px-5 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-emerald-500 disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Join Community"}
      </button>
      {status === "success" && (
        <p className="font-sans mt-2 text-sm text-emerald-400 sm:absolute sm:bottom-[-2rem]">
          Thanks! Check your inbox to confirm.
        </p>
      )}
      {status === "error" && (
        <p className="font-sans mt-2 text-sm text-red-400 sm:absolute sm:bottom-[-2rem]">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/b.jpg')",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)`,
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-16 text-center md:px-12">
        <h1
          ref={titleRef}
          className="font-serif max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white"
        >
          Where changemakers connect, compound, and unlock what's next.
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 max-w-md text-sm md:text-base text-zinc-300 font-sans font-normal"
        >
          $49/month or $400/year. Curated introductions, private community, podcast guest network, weekly intelligence on capital flows, and early access to deal flow.
        </p>
        <div ref={ctaRef} className="mt-8 flex justify-center">
          <JoinCommunity />
        </div>
      </div>
    </main>
  );
}