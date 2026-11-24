import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Impact Brain by FrontForumFocus",
  description:
    "Privacy Policy for Impact Brain (Greta) by FrontForumFocus. Learn how we handle your data.",
  alternates: {
    canonical: "https://frontforumfocus.com/privacy",
  },
};

const effectiveDate = "November 24, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 pb-32 pt-24 text-neutral-100 selection:bg-emerald-500 selection:text-black">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            Legal
          </p>
          <h1 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-400">
            Effective date: {effectiveDate}
          </p>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            This Privacy Policy explains how FrontForumFocus (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) handles information when you use the{" "}
            <strong className="text-white">Impact Brain</strong> mobile application
            (also referred to as &quot;Greta&quot;) and related services available at{" "}
            <a
              href="https://frontforumfocus.com"
              className="text-emerald-400 hover:text-emerald-300"
            >
              frontforumfocus.com
            </a>
            .
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Who we are</h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            FrontForumFocus builds Impact Brain, an app that helps freelancers,
            founders, and impact changemakers turn activities into measurable impact
            scores across the 17 UN Sustainable Development Goals (SDGs). If you have
            questions about this policy, contact us at{" "}
            <a
              href="mailto:hello@frontforumfocus.com"
              className="text-emerald-400 hover:text-emerald-300"
            >
              hello@frontforumfocus.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Information we collect</h2>
          <div className="space-y-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <div>
              <h3 className="font-medium text-white">Information you provide in the app</h3>
              <p className="mt-1">
                Impact Brain lets you enter activities, hours, rates, and related
                impact inputs to calculate scores. These entries are stored locally on
                your device so the app can function. We do not require you to create an
                account to use the core app.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white">Information collected automatically</h3>
              <p className="mt-1">
                The app itself does not require you to provide personal information. We
                do not intentionally collect personal data such as your name, precise
                location, contacts, photos, microphone recordings, or camera data through
                the Impact Brain app. If you choose to contact us by email or subscribe
                to updates on our website, we collect the information you voluntarily
                provide, such as your email address.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white">Device and app data</h3>
              <p className="mt-1">
                Google Play and the Android operating system may collect certain device,
                diagnostic, or installation data as part of providing app distribution,
                updates, and security. This data is handled according to Google&apos;s own
                policies. We may receive aggregated install or crash information from
                Google Play Console to understand app stability and distribution.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">How we use information</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <li>To provide the Impact Brain app and calculate impact scores on your device.</li>
            <li>To respond when you contact us or request beta/community updates.</li>
            <li>To maintain, improve, and secure our website and app.</li>
            <li>To understand aggregated app performance and fix issues.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Data storage and security</h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            Impact entries you create in the app are stored locally on your device unless
            a future feature explicitly states otherwise. We take reasonable measures to
            protect information we process, but no method of electronic storage or
            transmission is completely secure. You can remove locally stored app data by
            clearing the app&apos;s data or uninstalling the app.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Sharing of information</h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            We do not sell your personal information. We do not share your personal
            information with third parties for their own advertising purposes. We may share
            limited information only when necessary:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <li>
              <strong className="text-white">Service providers:</strong> such as email or
              website infrastructure providers, only to operate services you request.
            </li>
            <li>
              <strong className="text-white">Legal requirements:</strong> if required to
              comply with applicable law, regulation, legal process, or enforceable
              governmental request.
            </li>
            <li>
              <strong className="text-white">Business protection:</strong> to protect the
              rights, safety, and security of FrontForumFocus, our users, or the public.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Third-party services</h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            The app may be distributed through Google Play, and your use of Google Play is
            subject to Google&apos;s policies. Our website may use analytics or communication
            tools to understand usage and respond to inquiries. These third-party services
            have their own privacy policies governing their data practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Children&apos;s privacy</h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            Impact Brain is not directed to children under 13, and we do not knowingly
            collect personal information from children under 13. If you believe a child has
            provided personal information to us, please contact us at{" "}
            <a
              href="mailto:hello@frontforumfocus.com"
              className="text-emerald-400 hover:text-emerald-300"
            >
              hello@frontforumfocus.com
            </a>{" "}
            so we can take appropriate action.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Your choices and rights</h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            Depending on your location, you may have rights to access, correct, or delete
            personal information you have provided to us. Because the app stores impact
            entries locally on your device, you can manage or delete that data directly on
            your device. For requests related to information you submitted through our
            website or email, contact us at{" "}
            <a
              href="mailto:hello@frontforumfocus.com"
              className="text-emerald-400 hover:text-emerald-300"
            >
              hello@frontforumfocus.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Changes to this policy</h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            We may update this Privacy Policy from time to time. When we do, we will revise
            the effective date at the top of this page. We encourage you to review this
            policy periodically.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Contact us</h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            For privacy questions or requests, contact:{" "}
            <a
              href="mailto:hello@frontforumfocus.com"
              className="text-emerald-400 hover:text-emerald-300"
            >
              hello@frontforumfocus.com
            </a>
            .
          </p>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            FrontForumFocus<br />
            <a
              href="https://frontforumfocus.com"
              className="text-emerald-400 hover:text-emerald-300"
            >
              https://frontforumfocus.com
            </a>
          </p>
        </section>

        <div className="border-t border-neutral-800 pt-6 text-sm text-neutral-500">
          <Link href="/" className="hover:text-neutral-300">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
