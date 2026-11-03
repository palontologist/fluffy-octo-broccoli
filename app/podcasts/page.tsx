"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { podcastEpisodes as staticEpisodes, PODCAST_CHANNEL } from "@/app/data/podcast-episodes";

export default function PodcastPage() {
  const [episodes, setEpisodes] = useState(staticEpisodes);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(staticEpisodes[0]);
  const [modalEpisode, setModalEpisode] = useState<(typeof staticEpisodes)[number] | null>(null);

  useEffect(() => {
    fetch("/api/podcasts")
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d.episodes) && d.episodes.length > 0) {
          setEpisodes(d.episodes);
          setSelectedEpisode(d.episodes[0]);
        }
      })
      .catch(() => {
        // keep static fallback
      });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalEpisode(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isYouTubeId = (value: string | undefined) =>
    !!value && /^[A-Za-z0-9_-]{11}$/.test(value);

  const episodeVideoId = (ep: typeof selectedEpisode) =>
    isYouTubeId(ep.youtubeId) ? ep.youtubeId! : isYouTubeId(ep.id) ? ep.id : null;

  // Sort episodes by pubDate descending (newest first)
  // Only keep episodes that actually play (valid YouTube id)
  const playableEpisodes = useMemo(
    () => episodes.filter((ep) => episodeVideoId(ep) !== null),
    [episodes]
  );

  const sortedEpisodes = useMemo(() => {
    return [...playableEpisodes].sort(
      (a, b) =>
        new Date(b.pubDate || "0").getTime() -
        new Date(a.pubDate || "0").getTime()
    );
  }, [playableEpisodes]);

  // Filter episodes based on search query
  const filteredEpisodes = useMemo(() => {
    if (!searchQuery.trim()) return sortedEpisodes;
    const query = searchQuery.toLowerCase();
    return sortedEpisodes.filter(
      (ep) =>
        ep.title.toLowerCase().includes(query) ||
        ep.guest.toLowerCase().includes(query) ||
        ep.description.toLowerCase().includes(query) ||
        (ep.category || "").toLowerCase().includes(query)
    );
  }, [searchQuery, sortedEpisodes]);

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

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
              {PODCAST_CHANNEL.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={PODCAST_CHANNEL.youtubeUrl}
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
                href={PODCAST_CHANNEL.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-colors px-6 py-3 rounded-lg font-sans font-semibold text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Spotify
              </a>
              <a
                href={PODCAST_CHANNEL.rssUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors px-6 py-3 rounded-lg font-sans font-semibold text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0v6h6m0-6v3c2.485 0 4.5-2.015 4.5-4.5S8.485 0 6 0zM3.697 10.798C2.533 10.798 1.604 11.727 1.604 12.89s0.929 2.092 2.093 2.092c1.163 0 2.092-0.929 2.092-2.092s-0.929-2.092-2.092-2.092zM18.303 10.798c-1.164 0-2.093 0.929-2.093 2.092s0.929 2.092 2.093 2.092c1.164 0 2.092-0.929 2.092-2.092s-0.928-2.092-2.092-2.092zM20.397 17.82c0 2.843-2.31 5.153-5.153 5.153-2.843 0-5.153-2.31-5.153-5.153S10.397 12.667 13.24 12.667s5.157 2.31 5.157 5.153z" />
                </svg>
                RSS Feed
              </a>
            </div>
          </div>

          {/* Featured Episode */}
          <div className="bg-zinc-900/80 border border-zinc-700/50 rounded-2xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-6 p-6 lg:p-10">
              {/* Video Player */}
              <div className="flex flex-col justify-center">
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                {episodeVideoId(selectedEpisode) ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${episodeVideoId(selectedEpisode)}?autoplay=0&rel=0`}
                    title={selectedEpisode.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm">
                    No playable video for this episode.
                  </div>
                )}
                </div>
              </div>

              {/* Episode Info */}
              <div className="flex flex-col justify-center">
                <div className="mb-2 inline-block">
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded text-xs font-semibold">
                    FEATURED EPISODE
                  </span>
                </div>
                {selectedEpisode.category && (
                  <span className="inline-block mb-3 px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] uppercase tracking-wider font-sans">
                    {selectedEpisode.category}
                  </span>
                )}
                <h2 className="font-serif text-3xl font-bold text-white mb-3">
                  {selectedEpisode.title}
                </h2>
                <p className="text-lg text-zinc-300 font-sans font-semibold mb-2">
                  Guest: {selectedEpisode.guest}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-6">
                  {selectedEpisode.duration && (
                    <span>⏱ {selectedEpisode.duration}</span>
                  )}
                  {selectedEpisode.pubDate && (
                    <span>📅 {formatDate(selectedEpisode.pubDate)}</span>
                  )}
                </div>
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  {selectedEpisode.description}
                </p>
                <div className="flex gap-3">
                  {episodeVideoId(selectedEpisode) && (
                    <a
                      href={`https://youtu.be/${episodeVideoId(selectedEpisode)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-2 rounded-lg font-sans font-semibold text-white inline-block"
                    >
                      Watch Full Episode
                    </a>
                  )}
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
              {filteredEpisodes.length} episode{
                filteredEpisodes.length !== 1 ? "s" : ""
              } found
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
                    onClick={() => { setSelectedEpisode(ep); setModalEpisode(ep); }}
                    className="text-left group rounded-xl border border-zinc-700/50 bg-zinc-900/80 overflow-hidden transition-all hover:border-zinc-500 hover:bg-zinc-800/80"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-black overflow-hidden">
                      {episodeVideoId(ep) ? (
                        <img
                          src={`https://img.youtube.com/vi/${episodeVideoId(ep)}/mqdefault.jpg`}
                          alt={ep.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-500 text-xs">
                          No preview
                        </div>
                      )}
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
                      {ep.category && (
                        <span className="inline-block mb-2 px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] uppercase tracking-wider font-sans">
                          {ep.category}
                        </span>
                      )}
                      <h3 className="font-sans font-semibold text-white line-clamp-2 group-hover:text-red-400 transition-colors mb-2">
                        {ep.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-medium mb-2">
                        {ep.guest}
                      </p>
                      <div className="flex items-center gap-3 text-[10px] text-zinc-500 mb-2">
                        {ep.duration && <span>⏱ {ep.duration}</span>}
                        {ep.pubDate && <span>📅 {formatDate(ep.pubDate)}</span>}
                      </div>
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
                  {sortedEpisodes.length}+
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
                  href={PODCAST_CHANNEL.youtubeUrl}
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
                  href={PODCAST_CHANNEL.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-colors px-6 py-3 rounded-lg font-sans font-semibold text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Spotify
                </a>
                <a
                  href={PODCAST_CHANNEL.rssUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors px-6 py-3 rounded-lg font-sans font-semibold text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0v6h6m0-6v3c2.485 0 4.5-2.015 4.5-4.5S8.485 0 6 0zM3.697 10.798C2.533 10.798 1.604 11.727 1.604 12.89s0.929 2.092 2.093 2.092c1.163 0 2.092-0.929 2.092-2.092s-0.929-2.092-2.092-2.092zM18.303 10.798c-1.164 0-2.093 0.929-2.093 2.092s0.929 2.092 2.093 2.092c1.164 0 2.092-0.929 2.092-2.092s-0.928-2.092-2.092-2.092zM20.397 17.82c0 2.843-2.31 5.153-5.153 5.153-2.843 0-5.153-2.31-5.153-5.153S10.397 12.667 13.24 12.667s5.157 2.31 5.157 5.153z" />
                  </svg>
                  RSS Feed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalEpisode && episodeVideoId(modalEpisode) && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setModalEpisode(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalEpisode(null)}
              className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-black/70 text-white text-xl leading-none hover:bg-black"
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${episodeVideoId(modalEpisode)}?autoplay=1&rel=0`}
              title={modalEpisode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
