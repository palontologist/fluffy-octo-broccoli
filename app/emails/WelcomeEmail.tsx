export function WelcomeEmailHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Impact Intelligence</title>
  <style>
    @keyframes fade-slide-in {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0); }
      50%       { box-shadow: 0 0 16px 4px rgba(52,211,153,0.18); }
    }
    body { margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Georgia', serif; color: #e4e4e7; }
    .container { max-width: 620px; margin: 0 auto; padding: 48px 32px; animation: fade-slide-in 0.8s ease-out both; }
    .logo { font-family: 'Georgia', serif; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #71717a; margin-bottom: 12px; }
    .logo-accent { display: inline-block; width: 6px; height: 6px; background: #34d399; border-radius: 50%; margin-right: 8px; vertical-align: middle; }
    .hero-band { background: linear-gradient(135deg, #111827 0%, #0a0a0a 100%); border: 1px solid #1f2937; border-radius: 16px; padding: 32px 28px; margin: 24px 0 36px; }
    h1 { font-size: 28px; font-weight: 600; color: #ffffff; line-height: 1.3; margin: 0 0 16px; }
    .tagline { font-family: 'Arial', sans-serif; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: #34d399; margin: 0 0 20px; }
    p { font-family: 'Arial', sans-serif; font-size: 15px; line-height: 1.75; color: #a1a1aa; margin: 0 0 20px; }
    strong { color: #e4e4e7; }
    .stat-row { display: flex; gap: 16px; margin: 32px 0; }
    .stat { flex: 1; border: 1px solid #27272a; border-radius: 12px; padding: 20px 12px; text-align: center; background: #111; animation: pulse-glow 3s ease-in-out infinite; }
    .stat:nth-child(2) { animation-delay: 1s; }
    .stat:nth-child(3) { animation-delay: 2s; }
    .stat-value { font-family: 'Georgia', serif; font-size: 22px; font-weight: 600; color: #34d399; }
    .stat-label { font-family: 'Arial', sans-serif; font-size: 11px; color: #71717a; margin-top: 4px; }
    .divider { border: none; border-top: 1px solid #1f2937; margin: 32px 0; }
    .highlight-box { background: #0d1117; border-left: 3px solid #34d399; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0; }
    .cta { display: inline-block; background-color: #059669; color: #ffffff; padding: 14px 28px; border-radius: 8px; font-family: 'Arial', sans-serif; font-size: 14px; font-weight: 600; text-decoration: none; margin: 8px 8px 8px 0; letter-spacing: 0.02em; }
    .cta-outline { background-color: transparent; border: 1px solid #374151; color: #d4d4d8; }
    .footer { margin-top: 48px; font-family: 'Arial', sans-serif; font-size: 12px; color: #4b5563; line-height: 1.6; border-top: 1px solid #1f2937; padding-top: 24px; }
    .footer a { color: #6b7280; }
    blockquote { border-left: 2px solid #34d399; margin: 24px 0; padding: 4px 0 4px 20px; font-style: italic; color: #9ca3af; background: #0d1117; border-radius: 0 8px 8px 0; }
    .chapter-label { font-family: 'Arial', sans-serif; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #4b5563; margin: 0 0 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo"><span class="logo-accent"></span>FrontForumFocus</div>

    <div class="hero-band">
      <div class="tagline">Impact Intelligence · Issue</div>
      <h1>When value becomes legible,<br/>capital can follow.</h1>
      <p style="margin:0; color:#9ca3af; font-size:14px;">
        You do the work. Then someone asks what it was worth. Impact Brain turns
        what you did into proof — across the 17 UN SDGs, on your phone.
      </p>
    </div>

    <div class="chapter-label">The problem</div>
    <p>
      Every existing tool treats humans like stopwatches instead of value creators.
      Freelancers and changemakers do real work, then have nothing to show for it.
      Hours disappear into meetings and emails, and the actual outcome never gets
      written down. Impact Brain fixes that: you type what you did, it maps it to
      the 17 UN SDGs and scores it.
    </p>

    <hr class="divider" />

    <div class="chapter-label">The idea</div>
    <p>
      Translate your work into outcomes. The core loop is universal: one log, one
      translation, one counter. Surface copy varies lightly depending on what you
      want to do — prove your value to clients, or track and grow your impact —
      but the engine underneath is the same for everyone.
    </p>

    <div class="stat-row">
      <div class="stat">
        <div class="stat-value">17</div>
        <div class="stat-label">UN SDGs scored</div>
      </div>
      <div class="stat">
        <div class="stat-value">4</div>
        <div class="stat-label">Dimensions</div>
      </div>
      <div class="stat">
        <div class="stat-value">10s</div>
        <div class="stat-label">To get a score</div>
      </div>
    </div>

    <div class="highlight-box">
      <blockquote style="border:none; background:none; padding:0; margin:0;">
        "Every existing tool treats humans like stopwatches instead of value
        creators. Impact Brain shows founders, freelancers, and mission-driven
        organizations exactly what their impact is worth."
      </blockquote>
    </div>

    <hr class="divider" />

    <div class="chapter-label">What's next</div>
    <p>This is Impact Intelligence — where every story is backed by proof.</p>

    <a href="https://frontforumfocus.com/impact-intelligence" class="cta">
      Read Impact Intelligence
    </a>
    <a href="https://github.com/palontologist/fluffy-octo-broccoli/releases/download/v0.1.0-beta/app-debug.apk" class="cta cta-outline">
      Try Impact Brain free
    </a>

    <div class="footer">
      <p>You're receiving this because you subscribed to Impact Intelligence from FrontForumFocus.</p>
      <p>© 2026 FrontForumFocus · <a href="https://frontforumfocus.com">frontforumfocus.com</a></p>
    </div>
  </div>
</body>
</html>`;
}
