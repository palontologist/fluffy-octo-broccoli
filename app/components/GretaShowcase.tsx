import Image from "next/image";

const screenshots = [
  { src: "/Screenshot_20261124_150946_greta.jpg", alt: "Greta app - impact logging" },
  { src: "/Screenshot_20261124_150955_greta.jpg", alt: "Greta app - SDG scoring" },
  { src: "/Screenshot_20261124_150959_greta.jpg", alt: "Greta app - impact proof" },
  { src: "/Screenshot_20261124_151003_greta.jpg", alt: "Greta app - dashboard" },
  { src: "/Screenshot_20261124_151028_greta.jpg", alt: "Greta app - activity details" },
  { src: "/Screenshot_20261124_151039_greta.jpg", alt: "Greta app - impact summary" },
];

export function GretaShowcase() {
  return (
    <section className="mt-24 w-full max-w-6xl space-y-8">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">See it in action</div>
        <h2 className="font-serif text-3xl text-white sm:text-4xl text-balance">Greta, on your phone.</h2>
        <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
          Real screenshots from Impact Brain. Log what you did, see the SDG score, and share your proof.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#07090b] to-transparent z-10 sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#07090b] to-transparent z-10 sm:w-16" />
        <div className="flex gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {screenshots.map((shot, i) => (
            <div
              key={shot.src}
              className="snap-center shrink-0 w-[220px] sm:w-[250px] md:w-[270px]"
            >
              <div className="glass-card rounded-[2rem] p-2.5 sm:p-3">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 aspect-[9/19.5]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 270px"
                    priority={i < 2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
