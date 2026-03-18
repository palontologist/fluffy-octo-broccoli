import { NextResponse } from "next/server";
import { Resend } from "resend";
import { WelcomeEmailHtml } from "@/app/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email } = body as { email?: string };

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "FrontForumFocus <support@frontforumfocus.com>",
      to: email,
      subject: "When value becomes legible, capital can follow.",
      html: WelcomeEmailHtml(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] Resend error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
