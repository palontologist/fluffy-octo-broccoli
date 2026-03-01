"use client";

import { podcastEpisodes } from "@/app/data/podcast-episodes";

function EpisodeCard({
  id,
  title,
  guest,
  description,
}: {
  id: string;
  title: string;
  guest: string;
  description: string;
}) {
  return (
    <div className="flex-shrink-0 w-[320px] rounded-xl border border-zinc-700/50 bg-zinc-900/80 overflow-hidden transition-all hover:border-zinc-500">
      <div className="relative aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="p-4">
        <h3 className="font-sans text-sm font-semibold text-white line-clamp-2">
          {title}
        </h3>
        <p className="mt-1 text-xs text-zinc-400">{guest}</p>
        <p className="mt-2 text-xs text-zinc-500 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export function PodcastCarousel() {
  const duplicated = [...podcastEpisodes, ...podcastEpisodes];

  return (
    <section className="w-full overflow-hidden py-12">
      <h2 className="font-serif mb-8 text-center text-2xl font-medium text-white md:text-3xl">
        Podcast Episodes
      </h2>
      <div className="relative">
        <div className="flex w-max animate-scroll-left gap-6 pb-4 pt-2">
          {duplicated.map((ep, i) => (
            <EpisodeCard
              key={`${ep.id}-${i}`}
              id={ep.id}
              title={ep.title}
              guest={ep.guest}
              description={ep.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
