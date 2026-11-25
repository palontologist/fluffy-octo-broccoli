import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#07090b] px-4 pb-10 pt-14 sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="max-w-sm space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo.svg" alt="FrontForumFocus" width={176} height={80} className="h-8 w-auto" />
              <span className="font-mono text-sm font-semibold tracking-tight text-neutral-200">
                frontforumfocus
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              Impact Brain turns what you did into proof. An impact OS for freelancers, founders, and changemakers.
            </p>
            <a
              href="https://play.google.com/apps/internaltest/4699935012830144337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/[0.04] px-4 py-2 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-400/10"
            >
              Join the Android beta →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-white/8 pt-8 text-sm sm:grid-cols-4">
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">Explore</h2>
            <Link className="block text-neutral-400 transition-colors hover:text-white" href="/products">About</Link>
            <Link className="block text-neutral-400 transition-colors hover:text-white" href="/community">Community</Link>
            <Link className="block text-neutral-400 transition-colors hover:text-white" href="/podcasts">Podcasts</Link>
            <Link className="block text-neutral-400 transition-colors hover:text-white" href="/impact-intelligence">Impact Intelligence</Link>
          </div>
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">For</h2>
            <Link className="block text-neutral-400 transition-colors hover:text-white" href="/for-founders">Founders</Link>
            <Link className="block text-neutral-400 transition-colors hover:text-white" href="/use-cases">Use Cases</Link>
          </div>
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">Connect</h2>
            <a className="block text-neutral-400 transition-colors hover:text-white" href="https://www.linkedin.com/company/frontforumfocus/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="block text-neutral-400 transition-colors hover:text-white" href="https://instagram.com/frontforumfocus" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="block text-neutral-400 transition-colors hover:text-white" href="https://x.com/frontforumfocus" target="_blank" rel="noopener noreferrer">X</a>
            <a className="block text-neutral-400 transition-colors hover:text-white" href="https://www.youtube.com/channel/UCRLh0JhKndUJppDIBegrRSg" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a className="block text-neutral-400 transition-colors hover:text-white" href="mailto:hello@frontforumfocus.com">Email us</a>
          </div>
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">Start</h2>
            <a className="block text-neutral-400 transition-colors hover:text-white" href="https://play.google.com/apps/internaltest/4699935012830144337" target="_blank" rel="noopener noreferrer">Join the Android beta</a>
            <Link className="block text-neutral-400 transition-colors hover:text-white" href="/products">Open Impact Brain</Link>
            <Link className="block text-neutral-400 transition-colors hover:text-white" href="/privacy">Privacy Policy</Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/8 pt-6 text-xs text-neutral-500 sm:flex-row">
          <span>© {new Date().getFullYear()} FrontForumFocus. All rights reserved.</span>
          <span className="font-mono tracking-wide text-neutral-600">Built for proof, not performance.</span>
        </div>
      </div>
    </footer>
  );
}
