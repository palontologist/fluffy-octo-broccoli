"use client";

import Link from "next/link";
import { trackCtaClick, type CtaKind } from "@/app/lib/analytics";

type TrackedCtaProps = {
  href: string;
  label: string;
  location: string;
  kind?: CtaKind;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * Wraps a CTA so every conversion link reports to PostHog with a consistent
 * shape. Renders next/link for internal hrefs and a plain anchor for external
 * ones, preserving existing behaviour either way.
 */
export function TrackedCta({
  href,
  label,
  location,
  kind,
  className,
  onClick,
  children,
}: TrackedCtaProps) {
  const handleClick = () => {
    trackCtaClick({ label, location, kind, href });
    onClick?.();
  };
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
        data-analytics="cta"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className} data-analytics="cta">
      {children}
    </Link>
  );
}