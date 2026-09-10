"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/community", label: "Community" },
    { href: "/impact-intelligence", label: "Impact Intelligence" },
    { href: "/team", label: "Team" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="inline-flex items-center gap-1.5 sm:gap-3 px-3.5 sm:px-4 py-2 rounded-full border border-neutral-800/80 bg-neutral-900/85 backdrop-blur-xl shadow-2xl">
        <Link
          href="/"
          className="flex items-center gap-2 pr-3 border-r border-neutral-800/80 group"
          title="FrontForumFocus (FO3)"
        >
          <img
            src="/logo.svg"
            alt="FO3 Logo"
            className="h-5 sm:h-6 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden md:inline font-mono text-xs font-semibold text-neutral-300 tracking-tight">
            frontforumfocus
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2 text-xs">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
                  isActive
                    ? "bg-neutral-800 text-emerald-400 font-medium"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
