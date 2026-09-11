import Link from "next/link";
import Image from "next/image";
import { EmailSubscribe } from "./EmailSubscribe";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="max-w-sm space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo.svg" alt="FrontForumFocus" width={176} height={80} className="h-8 w-auto" />
              <span className="font-mono text-sm font-semibold tracking-tight text-neutral-200">
                frontforumfocus
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              The intelligence layer for measurable impact, verifiable
              infrastructure, and the people building what matters.
            </p>
            <a
              href="https://cal.com/georgeka/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-emerald-500/40 px-4 py-2 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-500/10"
            >
              Book a demo
            </a>
          </div>
          <EmailSubscribe />
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-neutral-800/80 pt-8 text-sm sm:grid-cols-4">
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">Explore</h2>
            <Link className="block text-neutral-400 hover:text-white" href="/products">Products</Link>
            <Link className="block text-neutral-400 hover:text-white" href="/community">Community</Link>
            <Link className="block text-neutral-400 hover:text-white" href="/impact-intelligence">Impact Intelligence</Link>
          </div>
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">For</h2>
            <Link className="block text-neutral-400 hover:text-white" href="/for-founders">Founders</Link>
            <Link className="block text-neutral-400 hover:text-white" href="/for-organizations">Organizations</Link>
            <Link className="block text-neutral-400 hover:text-white" href="/team">Team</Link>
          </div>
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">Connect</h2>
            <a className="block text-neutral-400 hover:text-white" href="https://www.linkedin.com/company/frontforumfocus/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="block text-neutral-400 hover:text-white" href="https://x.com/frontforumfocus" target="_blank" rel="noopener noreferrer">X / Twitter</a>
            <a className="block text-neutral-400 hover:text-white" href="mailto:hello@frontforumfocus.com">Email us</a>
          </div>
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">Start</h2>
            <a className="block text-neutral-400 hover:text-white" href="https://cal.com/georgeka/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a demo</a>
            <a className="block text-neutral-400 hover:text-white" href="https://greta.frontforumfocus.com" target="_blank" rel="noopener noreferrer">Open Greta</a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-neutral-800/80 pt-6 text-xs text-neutral-500 sm:flex-row">
          <span>© {new Date().getFullYear()} FrontForumFocus. All rights reserved.</span>
          <span>Built for proof, not performance.</span>
        </div>
      </div>
    </footer>
  );
}
