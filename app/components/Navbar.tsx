"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/impact-intelligence", label: "Impact Intelligence" },
  { href: "/products", label: "Products" },
  { href: "mailto:hello@frontforumfocus.com", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center py-5">
      <div className="flex items-center gap-8 text-sm tracking-wide text-zinc-400">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors hover:text-white ${
              pathname === href || (href !== "/" && pathname.startsWith(href))
                ? "text-white"
                : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
