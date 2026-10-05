"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PosthogProvider({ children }: { children: React.ReactNode }) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

  useEffect(() => {
    if (!key) {
      console.warn("Missing NEXT_PUBLIC_POSTHOG_KEY. PostHog analytics is disabled.");
      return;
    }
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false,
      capture_pageleave: true,
      persistence: "localStorage",
    });
  }, [key]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
