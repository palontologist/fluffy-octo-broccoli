"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { podcastEpisodes } from "@/app/data/podcast-episodes";

export default function PodcastPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(podcastEpisodes[0]);

  // Filter episodes based on search query
  const filteredEpisodes = useMemo(() => {
    if (!searchQuery.trim()) return podcastEpisodes;
    const query = searchQuery.toLowerCase();
    return podcastEpisodes.filter(
      (ep) =>
        ep.title.toLowerCase().includes(query) ||
        ep.guest.toLowerCase().includes(query) ||
        ep.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black pt-24">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              FrontForumFocus Podcast
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Conversations with founders, innovators, and changemakers shaping
              the future of the impact economy
            </p>
            <a
              href="https://youtube.com/@frontforumfocus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-lg font-sans font-semibold text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
            </a>
          </div>

          {/* Featured Episode */}
          <div className="bg-zinc-900/80 border border-zinc-700/50 rounded-2xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-6 p-6 lg:p-10">
              {/* Video Player */}
              <div className="flex flex-col justify-center">
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedEpisode.id}?autoplay=0`}
                    title={selectedEpisode.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>

              {/* Episode Info */}
              <div className="flex flex-col justify-center">
                <div className="mb-2 inline-block">
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded text-xs font-semibold">
                    FEATURED EPISODE
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-white mb-3">
                  {selectedEpisode.title}
                </h2>
                <p className="text-lg text-zinc-300 font-sans font-semibold mb-2">
                  Guest: {selectedEpisode.guest}
                </p>
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  {selectedEpisode.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={`https://youtu.be/${selectedEpisode.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-2 rounded-lg font-sans font-semibold text-white inline-block"
                  >
                    Watch Full Episode
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="mb-12">
            <div className="relative max-w-2xl">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search episodes by title, guest, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/80 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors font-sans"
              />
            </div>
            <p className="text-sm text-zinc-500 mt-2">
              {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Episodes Grid */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-8">
              All Episodes
            </h2>
            {filteredEpisodes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEpisodes.map((ep) => (
                  <button
                    key={ep.id}
                    onClick={() => setSelectedEpisode(ep)}
                    className="text-left group rounded-xl border border-zinc-700/50 bg-zinc-900/80 overflow-hidden transition-all hover:border-zinc-500 hover:bg-zinc-800/80"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-black overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${ep.id}/mqdefault.jpg`}
                        alt={ep.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white/80 group-hover:text-white transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-sans font-semibold text-white line-clamp-2 group-hover:text-red-400 transition-colors mb-2">
                        {ep.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-medium mb-2">
                        {ep.guest}
                      </p>
                      <p className="text-xs text-zinc-500 line-clamp-2">
                        {ep.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-zinc-400">
                  No episodes found. Try adjusting your search.
                </p>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div className="mt-20 pt-12 border-t border-zinc-700/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  {podcastEpisodes.length}+
                </div>
                <p className="text-zinc-400 font-sans">Inspiring Episodes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  Global
                </div>
                <p className="text-zinc-400 font-sans">Audience Reach</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  Founders &amp; Leaders
                </div>
                <p className="text-zinc-400 font-sans">Featured Guests</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-red-600/20 to-red-600/10 border border-red-600/30 rounded-2xl p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Never Miss an Episode
              </h3>
              <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
                Subscribe to FrontForumFocus on your favorite platform and get notified when we release new conversations with builders shaping the future of the impact economy.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://youtube.com/@frontforumfocus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-lg font-sans font-semibold text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
                <a
                  href="https://open.spotify.com/show/3JYdrrutXduvpqTnoK9odt?si=021910ad5e2a4878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-colors px-6 py-3 rounded-lg font-sans font-semibold text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.315-.74.42-1.14.175-3.12-1.93-7.04-2.365-11.665-1.295-.42.12-.81-.066-.93-.46-.12-.42.066-.81.46-.93 5.142-1.147 9.335-.67 12.813 1.515.39.24.465.74.175 1.14m1.44-3.3c-.305.39-.93.515-1.405.21-3.55-2.17-8.95-2.8-13.06-1.345-.48.144-1.01-.156-1.154-.635-.144-.48.156-1.01.635-1.154 4.702-1.512 10.545-.738 14.46 1.53.475.29.61.91.21 1.405m.25-3.44C15.04 9.405 8.054 9.03 5.047 10.36c-.525.165-1.08-.165-1.24-.645-.165-.525.165-1.08.645-1.24 3.289-1.487 10.86-1.088 15.113 1.324.435.27.555.975.285 1.41-.27.435-.975.555-1.41.285z" />
                  </svg>
                  Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
