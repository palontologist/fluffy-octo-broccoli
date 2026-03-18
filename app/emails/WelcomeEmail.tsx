export function WelcomeEmailHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Impact Intelligence</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Georgia', serif; color: #e4e4e7; }
    .container { max-width: 620px; margin: 0 auto; padding: 48px 32px; }
    .logo { font-family: 'Georgia', serif; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #71717a; margin-bottom: 48px; }
    h1 { font-size: 26px; font-weight: 600; color: #ffffff; line-height: 1.35; margin: 0 0 24px; }
    p { font-family: 'Arial', sans-serif; font-size: 15px; line-height: 1.75; color: #a1a1aa; margin: 0 0 20px; }
    strong { color: #e4e4e7; }
    .stat-row { display: flex; gap: 24px; margin: 32px 0; }
    .stat { flex: 1; border: 1px solid #27272a; border-radius: 12px; padding: 20px; text-align: center; }
    .stat-value { font-family: 'Georgia', serif; font-size: 22px; font-weight: 600; color: #34d399; }
    .stat-label { font-family: 'Arial', sans-serif; font-size: 12px; color: #71717a; margin-top: 4px; }
    .divider { border: none; border-top: 1px solid #27272a; margin: 32px 0; }
    .cta { display: inline-block; background-color: #3f3f46; color: #ffffff; padding: 14px 28px; border-radius: 8px; font-family: 'Arial', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none; margin: 8px 8px 8px 0; }
    .cta-outline { background-color: transparent; border: 1px solid #52525b; color: #d4d4d8; }
    .footer { margin-top: 48px; font-family: 'Arial', sans-serif; font-size: 12px; color: #52525b; line-height: 1.6; }
    .footer a { color: #71717a; }
    blockquote { border-left: 2px solid #52525b; margin: 24px 0; padding: 0 0 0 20px; font-style: italic; color: #a1a1aa; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">FrontForumFocus</div>

    <h1>When value becomes legible,<br/>capital can follow.</h1>

    <p>
      By turning task‑level data into a transparent <strong>"value ledger,"</strong>
      FrontForumFocus creates an Internet of Value—a programmable, auditable layer
      where impact‑driven capital behaves like blockchain transactions:
      <strong>immutable, traceable, and automatically aligned with mission outcomes.</strong>
    </p>

    <hr class="divider" />

    <p>
      The African impact‑tech market faces a <strong>$4B+ infrastructure gap</strong>,
      yet more than <strong>$10B of impact capital</strong> flows annually without
      affordable measurement tools. By providing a unified OS that speaks both the
      language of founders and the metrics demanded by investors, FrontForumFocus
      bridges that gap and unlocks a new wave of capital distribution anchored in
      real human contribution.
    </p>

    <div class="stat-row">
      <div class="stat">
        <div class="stat-value">$4B+</div>
        <div class="stat-label">Infrastructure gap</div>
      </div>
      <div class="stat">
        <div class="stat-value">$10B+</div>
        <div class="stat-label">Impact capital flowing annually</div>
      </div>
      <div class="stat">
        <div class="stat-value">0</div>
        <div class="stat-label">Affordable measurement tools</div>
      </div>
    </div>

    <blockquote>
      "A programmable, auditable layer where impact‑driven capital behaves like
      blockchain transactions: immutable, traceable, and automatically aligned
      with mission outcomes."
    </blockquote>

    <hr class="divider" />

    <p>This is Impact Intelligence—where every story is backed by proof.</p>

    <a href="https://frontforumfocus.com/impact-intelligence" class="cta">
      Read Impact Intelligence
    </a>
    <a href="https://frontforumfocus.com/for-founders" class="cta cta-outline">
      Try Greta free
    </a>

    <div class="footer">
      <p>You're receiving this because you subscribed to Impact Intelligence from FrontForumFocus.</p>
      <p>© 2026 FrontForumFocus · <a href="https://frontforumfocus.com">frontforumfocus.com</a></p>
    </div>
  </div>
</body>
</html>`;
}
