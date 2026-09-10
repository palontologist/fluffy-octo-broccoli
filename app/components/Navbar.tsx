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
      <nav className="inline-flex items-center gap-1 sm:gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/80 backdrop-blur-xl shadow-xl">
        <Link
          href="/"
          className="font-serif font-bold text-xs sm:text-sm text-white pr-2 border-r border-neutral-800 tracking-tight"
        >
          fff
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
                    ? "bg-neutral-800 text-white font-medium"
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
