export const metadata = {
  title: "Our Story | FrontForumFocus",
  description:
    "From impact to impact intelligence. The story of George Karani and FrontForumFocus — bridging the gap between real work on the ground and the narratives that capital understands.",
};

export default function OurStoryPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        {/* 1. Hero / Top Section */}
        <section className="text-center">
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            From impact to impact intelligence.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Most impact organisations don&apos;t fail on impact.
            <br />
            They fail on the <em>translation</em> — from work on the ground to
            numbers and narratives that capital actually understands.
            <br />
            FrontForumFocus exists to fix that gap.
          </p>
        </section>

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800" />

        {/* 2. Founder Story Block */}
        <section>
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Our Story
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300">
            <p>
              I&apos;m <strong className="text-white">George Karani</strong>,
              founder of FrontForumFocus. I grew up in Kenya, studied IT, and
              spent the last years building at the intersection of technology,
              youth organising and startups — from the original FrontForumFocus
              as a youth platform and podcast, to working with founders and
              communities across Africa.
            </p>
            <p>Along the way I kept seeing the same pattern:</p>
            <p>
              brilliant teams doing serious work — microfinance, climate, jobs,
              education — but when it was time to talk to donors, DFIs or
              investors, the story was scattered across PDFs, Excel sheets and
              last‑minute slides.
            </p>
            <p className="text-zinc-400">
              The work was strong.
              <br />
              The narrative and data layer weren&apos;t.
              <br />
              FrontForumFocus is my answer to that.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800" />

        {/* 3. What We Do / Identity Block */}
        <section>
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            How we&apos;re different
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300">
            <p>
              We{" "}
              <strong className="text-white">
                think like a CFO and speak like a storyteller
              </strong>
              .
            </p>
            <p>
              We sit with your impact data, your financials, and your field
              stories and turn them into a live{" "}
              <strong className="text-white">impact intelligence layer</strong>{" "}
              — dashboards and narratives that help you see, tell and decide,
              especially when you&apos;re in the room with capital.
            </p>
            <p>
              We&apos;re building first with impact organisations in Africa and
              the global south, because that&apos;s home — and because this is
              where the gap between real work and perceived value is the widest.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800" />

        {/* 4. Vision / Where We're Headed Strip */}
        <section className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 px-8 py-10">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Where we&apos;re headed
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-200">
            We&apos;re building a simple, honest{" "}
            <strong className="text-white">impact OS</strong> for
            mission‑driven teams — so the people closest to the problem can
            also be the sharpest in the boardroom.
          </p>
        </section>
      </div>
    </main>
  );
}
