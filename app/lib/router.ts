const ENDPOINT = process.env.ROUTER_ENDPOINT_URL;
const API_KEY = process.env.ROUTER_API_KEY;

export type RouterResult =
  | { ok: true; id: string }
  | { ok: false; status: number; fieldErrors?: Record<string, string[]> };

/**
 * Forwards a lead to the Router.so endpoint. Called only from the server route
 * so the bearer token never reaches the browser.
 */
export async function sendToRouter(
  payload: Record<string, unknown>,
  signal?: AbortSignal
): Promise<RouterResult> {
  if (!ENDPOINT || !API_KEY) {
    console.error("[router] Missing ROUTER_ENDPOINT_URL or ROUTER_API_KEY");
    return { ok: false, status: 0 };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
      signal,
    });

    const text = await res.text();
    let parsed: unknown = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = null;
    }

    if (!res.ok) {
      const body = parsed as { fields?: Record<string, string[]> } | null;
      console.error(`[router] ${res.status}`, text.slice(0, 300));
      return { ok: false, status: res.status, fieldErrors: body?.fields };
    }

    const body = parsed as { id?: string } | null;
    return { ok: true, id: body?.id ?? "unknown" };
  } catch (err) {
    console.error("[router] request failed:", err);
    return { ok: false, status: 0 };
  }
}