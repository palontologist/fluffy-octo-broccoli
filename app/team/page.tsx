"use client";

import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 pt-32 pb-32 selection:bg-emerald-500 selection:text-black font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-neutral-400">
            Leadership &amp; Differentiation
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Built by operators at the intersection of <br className="hidden sm:inline" />
            <span className="italic font-serif text-emerald-400">hardware, edge AI &amp; climate finance.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            We build the technical and operational bridge between physical emerging market infrastructure and global capital.
          </p>
        </div>

        {/* Founder Card */}
        <div className="p-8 sm:p-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <h2 className="text-2xl font-bold text-white">George Karani</h2>
              <p className="text-xs sm:text-sm text-emerald-400 font-mono mt-0.5">Founder &amp; CTO, FrontForumFocus</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/george-karani"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://x.com/frontforumfocus"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 transition-colors"
              >
                X (Twitter) ↗
              </a>
              <a
                href="https://instagram.com/frontforumfocus"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            <p>
              Ecosystem builder and hardware technologist leading developer and frontier tech initiatives across Africa. Chapter Director at Startup Grind (Kabarak) and organizer of ClawCamp Nairobi.
            </p>
            <p>
              Ambassador at Omi (Edge AI &amp; Wearables), host of the Frontforumfocus podcast (40+ deep-dive episodes), and architect of the Greta dMRV platform.
            </p>
          </div>
        </div>

        {/* How We Differ from Competitors */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">How We Differentiate</h2>
            <p className="text-xs text-neutral-400">Why legacy ESG software and traditional MRV fail in the real economy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/30 space-y-3">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">vs. Enterprise ESG SaaS (Watershed, Persefoni)</div>
              <h3 className="text-base font-semibold text-white">Hardware-Grounded vs. Invoice Estimates</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Legacy enterprise ESG tools estimate emissions using corporate credit card spend and annual utility bills. Greta plugs directly into live solar inverters, smart meters, and edge sensors for tamper-proof telemetry.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/30 space-y-3">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">vs. Traditional MRV (Verra / Gold Standard Auditors)</div>
              <h3 className="text-base font-semibold text-white">Zero Lag vs. 6–18 Month Audits</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Traditional carbon accreditation costs $30k+ per audit and takes over a year of manual consultant reviews. Greta automates dMRV continuously, standardizing daily telemetry into registry-ready data packages.
              </p>
            </div>
          </div>
        </div>

        {/* Connect & Social Footer Callout */}
        <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 text-center space-y-4">
          <h3 className="text-lg font-semibold text-white">Connect with the Network</h3>
          <p className="text-xs text-neutral-400 max-w-md mx-auto">
            Explore our open developer workshops, listen to our podcasts, or join our community of technical builders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://www.linkedin.com/company/frontforumfocus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-300 hover:text-emerald-400 font-mono transition-colors"
            >
              LinkedIn Page ↗
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="https://x.com/frontforumfocus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-300 hover:text-emerald-400 font-mono transition-colors"
            >
              X (Twitter) ↗
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="https://instagram.com/frontforumfocus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-300 hover:text-emerald-400 font-mono transition-colors"
            >
              Instagram ↗
            </a>
            <span className="text-neutral-700">•</span>
            <Link
              href="mailto:george.karani@startupgrind.com"
              className="text-xs text-neutral-300 hover:text-emerald-400 font-mono transition-colors"
            >
              Email Direct ↗
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
