"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/community", label: "Community" },
    { href: "/impact-intelligence", label: "Impact Intelligence" },
    { href: "/team", label: "Team" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 py-3 sm:p-4">
      <nav className="w-full max-w-fit rounded-2xl border border-neutral-800/80 bg-neutral-900/90 p-2 shadow-2xl backdrop-blur-xl sm:rounded-full sm:px-4 sm:py-2">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex min-w-0 items-center gap-2 px-1 sm:border-r sm:border-neutral-800/80 sm:pr-3"
            title="FrontForumFocus (FO3)"
          >
            <img src="/logo.svg" alt="FO3 Logo" className="h-5 w-auto sm:h-6" />
            <span className="hidden font-mono text-xs font-semibold tracking-tight text-neutral-300 md:inline">frontforumfocus</span>
          </Link>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white sm:hidden"
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="text-lg leading-none">{isOpen ? "×" : "☰"}</span>
          </button>
          <div id="site-navigation" className="hidden items-center gap-1 text-xs sm:flex sm:gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return <Link key={link.href} href={link.href} className={`rounded-full px-2.5 py-1 transition-all duration-150 ${isActive ? "bg-neutral-800 font-medium text-emerald-400" : "text-neutral-400 hover:text-white"}`}>{link.label}</Link>;
            })}
          </div>
        </div>
        {isOpen && (
          <div className="mt-2 grid gap-1 border-t border-neutral-800/80 pt-2 sm:hidden">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`rounded-xl px-3 py-2.5 text-sm ${isActive ? "bg-neutral-800 font-medium text-emerald-400" : "text-neutral-300 hover:bg-neutral-800"}`}>{link.label}</Link>;
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
