import { NextResponse } from "next/server";
import { Resend } from "resend";
import { WelcomeEmailHtml } from "@/app/emails/WelcomeEmail";
import { sendToRouter } from "@/app/lib/router";
import { captureServerEvent } from "@/app/lib/posthog-server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email } = body as { email?: string };

  if (!email || !EMAIL_RE.test(email)) {
    captureServerEvent("lead_rejected", { reason: "invalid_email" });
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();
  const domain = normalized.split("@")[1];
  const source = new URL(req.url).searchParams.get("source") ?? "newsletter";
  const timeout = AbortSignal.timeout(8000);

  const routerResult = await sendToRouter(
    { Email: normalized, Source: source },
    timeout
  );

  captureServerEvent(
    routerResult.ok ? "lead_captured_server" : "lead_capture_failed_server",
    {
      distinct_id: domain,
      email_domain: domain,
      lead_location: source,
      router_id: routerResult.ok ? routerResult.id : undefined,
      router_status: routerResult.ok ? 200 : routerResult.status,
    }
  );

  if (!routerResult.ok) {
    if (routerResult.fieldErrors) {
      return NextResponse.json(
        { error: "Invalid submission", fields: routerResult.fieldErrors },
        { status: 422 }
      );
    }
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 502 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "FrontForumFocus <support@frontforumfocus.com>",
      to: normalized,
      subject: "When value becomes legible, capital can follow.",
      html: WelcomeEmailHtml(),
    });
  } catch (err) {
    console.error("[subscribe] Resend error (lead already captured):", err);
  }

  return NextResponse.json({ ok: true, id: routerResult.id });
}
