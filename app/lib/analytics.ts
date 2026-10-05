"use client";

import posthog from "posthog-js";

export type CtaKind = "demo_booking" | "product" | "internal" | "community";

export type CtaClickProps = {
  label: string;
  location: string;
  kind?: CtaKind;
  href: string;
};

/**
 * Resolves a CTA href into a stable, low-cardinality destination so funnels
 * stay groupable. Internal paths collapse to the path; external links collapse
 * to the hostname plus the booking slug, so `cal.com/georgeka` and
 * `cal.com/georgekarani` remain distinguishable instead of merging.
 */
function resolveDestination(href: string): string {
  if (href.startsWith("/")) return href;
  try {
    const url = new URL(href);
    const booking = url.pathname.replace(/^\/+|\/+$/g, "");
    return booking ? `${url.hostname}/${booking}` : url.hostname;
  } catch {
    return "unknown";
  }
}

export function trackCtaClick({ label, location, kind, href }: CtaClickProps) {
  posthog.capture("cta_clicked", {
    cta_label: label,
    cta_location: location,
    cta_kind: kind ?? "internal",
    cta_destination: resolveDestination(href),
  });
}

export function trackDemoBooking({ label, location, href }: Omit<CtaClickProps, "kind">) {
  trackCtaClick({ label, location, kind: "demo_booking", href });
}

/**
 * Derives the domain only. Raw emails are never sent to PostHog, but the
 * domain still segments B2B leads (acme.com vs gmail.com) for pricing.
 */
export function emailDomain(email: string): string | undefined {
  const domain = email.trim().toLowerCase().split("@")[1];
  return domain?.includes(".") ? domain : undefined;
}

export function trackLeadSubmitted(email: string, location: string) {
  posthog.capture("lead_submitted", {
    lead_location: location,
    email_domain: emailDomain(email) ?? "unknown",
  });
}

export function trackLeadSucceeded(email: string, location: string) {
  posthog.capture("lead_succeeded", {
    lead_location: location,
    email_domain: emailDomain(email) ?? "unknown",
  });
}

export function trackLeadFailed(email: string, location: string, status: number) {
  posthog.capture("lead_failed", {
    lead_location: location,
    email_domain: emailDomain(email) ?? "unknown",
    status_code: status,
  });
}

export function trackCalculatorAdjusted(params: {
  activity: string;
  amount: number;
  contribution: number;
  sdg: string;
}) {
  posthog.capture("calculator_adjusted", {
    activity: params.activity,
    amount: params.amount,
    contribution: Number(params.contribution.toFixed(2)),
    sdg: params.sdg,
  });
}