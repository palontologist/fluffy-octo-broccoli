"use client";

import { useState } from "react";
import {
  trackLeadFailed,
  trackLeadSubmitted,
  trackLeadSucceeded,
} from "@/app/lib/analytics";

function currentSource() {
  if (typeof window === "undefined") return "newsletter";
  return window.location.pathname.replace(/^\//, "").replace(/\//g, "_") || "home";
}

type EmailSubscribeProps = {
  title?: string;
  description?: string;
};

export function EmailSubscribe({
  title = "Subscribe for beta updates",
  description = "Get updates on the Impact Brain beta. No spam.",
}: EmailSubscribeProps = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    const submitted = email;
    const source = currentSource();
    setStatus("loading");
    trackLeadSubmitted(submitted, source);
    try {
      const res = await fetch(`/api/subscribe?source=${encodeURIComponent(source)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: submitted }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        trackLeadFailed(submitted, source, res.status);
        throw new Error(body?.error || "Subscribe failed");
      }
      trackLeadSucceeded(submitted, source);
      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setErrorMessage(err?.message || "");
      setStatus("error");
    }
  }

  return (
    <section className="rounded-2xl border border-white/8 bg-black/20 p-6 sm:p-8">
      <h2 className="font-serif text-2xl font-normal text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-wrap gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "loading"}
          className="min-w-[220px] flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-emerald-400/40 focus:outline-none focus:ring-1 focus:ring-emerald-400/20 disabled:opacity-50"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition-all duration-200 hover:bg-neutral-100 disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-3 text-sm text-emerald-400">
          Thanks! Check your inbox to confirm.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}
    </section>
  );
}
