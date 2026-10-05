import { PostHog } from "posthog-node";

let client: PostHog | null = null;

/**
 * Server-side capture for events that must fire regardless of client JS, so a
 * blocked or failed bundle can't silently drop leads from the funnel.
 */
function getClient(): PostHog | null {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!apiKey) return null;
  if (!client) {
    client = new PostHog(apiKey, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    });
  }
  return client;
}

export function captureServerEvent(
  event: string,
  properties: Record<string, unknown> = {}
) {
  const ph = getClient();
  if (!ph) {
    console.warn("[posthog] Missing NEXT_PUBLIC_POSTHOG_KEY; skipping", event);
    return;
  }
  try {
    const result = ph.capture({
      distinctId: (properties.distinct_id as string) ?? "anonymous",
      event,
      properties,
    });
    void Promise.resolve(result).catch((err: unknown) =>
      console.error("[posthog] capture failed:", err)
    );
  } catch (err) {
    console.error("[posthog] capture threw:", err);
  }
}