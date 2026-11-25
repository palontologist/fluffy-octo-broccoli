import Image from "next/image";

const logos = [
  { name: "ISVR", src: "/isvr-logo.png", href: "https://isvr.org" },
  { name: "Startup Grind", src: "/startupgrind-logo.svg", href: "https://www.startupgrind.com" },
  { name: "UBQT", src: "/ubqt-logo.svg", href: "https://ubqt.joinubqt.com" },
];

export function TrustedBy() {
  // Duplicate for seamless marquee
  const items = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full max-w-5xl mt-16 sm:mt-20">
      <div className="text-center mb-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">Trusted by &amp; building with</p>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#07090b] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#07090b] to-transparent z-10" />
        <div className="flex w-max animate-scroll-left items-center gap-12 sm:gap-16 px-8" style={{ animationDuration: "28s" }}>
          {items.map((logo, i) => (
            <a
              key={`${logo.name}-${i}`}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={logo.name}
              className="flex-shrink-0 opacity-60 grayscale brightness-200 transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:brightness-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={44}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
