"use client";

import { useState } from "react";

export function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

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
    <section className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-8 md:p-10">
      <h2 className="font-serif text-xl font-semibold text-white md:text-2xl">
        Subscribe to the newsletter & podcast
      </h2>
      <p className="font-sans mt-2 text-zinc-400">
        Get impact intelligence in your inbox. No spam.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-wrap gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "loading"}
          className="min-w-[220px] flex-1 rounded-lg border border-zinc-600 bg-zinc-800/80 px-4 py-3 font-sans text-sm text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:opacity-50"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-zinc-600 px-5 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-zinc-500 disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {status === "success" && (
        <p className="font-sans mt-3 text-sm text-emerald-400">
          Thanks! Check your inbox to confirm.
        </p>
      )}
      {status === "error" && (
        <p className="font-sans mt-3 text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </section>
  );
}
