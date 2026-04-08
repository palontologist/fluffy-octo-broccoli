import { NextResponse } from "next/server";
import { Resend } from "resend";
import { WelcomeEmailHtml } from "@/app/emails/WelcomeEmail";

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ROUTER_API_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { to } = body as { to?: string | string[] };

  if (!to) {
    return NextResponse.json({ error: "Recipient(s) required" }, { status: 400 });
  }

  const recipients = Array.isArray(to) ? to : [to];

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const results = await Promise.allSettled(
      recipients.map((email) =>
        resend.emails.send({
          from: "FrontForumFocus <support@frontforumfocus.com>",
          to: email,
          subject: "When value becomes legible, capital can follow.",
          html: WelcomeEmailHtml(),
        })
      )
    );

    const sent = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.filter((r) => r.status === "rejected").length;

    return NextResponse.json({ ok: true, sent, failed });
  } catch (err) {
    console.error("[send-launch-email] Resend error:", err);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
