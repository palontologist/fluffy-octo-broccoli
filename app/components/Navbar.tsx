"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const GET_STARTED_HREF = "https://play.google.com/apps/internaltest/4699935012830144337";
const GET_STARTED_LABEL = "Join beta";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "About" },
    { href: "/community", label: "Community" },
    { href: "/podcasts", label: "Podcast" },
    { href: "/impact-intelligence", label: "Impact Intelligence" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 py-3 sm:p-4">
      <nav className="w-full max-w-fit rounded-2xl border border-white/10 bg-[#0b0f0c]/80 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-full sm:px-4 sm:py-2">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex min-w-0 items-center gap-2 px-1 sm:border-r sm:border-white/10 sm:pr-3"
            title="FrontForumFocus"
          >
            <img src="/logo.svg" alt="FO3 Logo" className="h-5 w-auto sm:h-6" />
            <span className="hidden font-mono text-[11px] font-semibold tracking-[0.08em] text-neutral-300 md:inline">frontforumfocus</span>
          </Link>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-white/5 hover:text-white sm:hidden"
          >
            <span aria-hidden="true" className="text-lg leading-none">{isOpen ? "×" : "☰"}</span>
          </button>

          <div id="site-navigation" className="hidden items-center gap-1 text-xs sm:flex sm:gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-2.5 py-1.5 transition-all duration-150 ${
                    isActive
                      ? "bg-white/[0.06] font-medium text-emerald-300"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={GET_STARTED_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 rounded-full bg-emerald-400 px-3.5 py-1.5 font-medium text-neutral-950 transition-colors hover:bg-emerald-300"
            >
              {GET_STARTED_LABEL}
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="mt-2 grid gap-1 border-t border-white/10 pt-2 sm:hidden">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-3 py-2.5 text-sm ${
                    isActive ? "bg-white/[0.05] font-medium text-emerald-300" : "text-neutral-300 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={GET_STARTED_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-1 rounded-xl bg-emerald-400 px-3 py-2.5 text-center text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-300"
            >
              {GET_STARTED_LABEL}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
