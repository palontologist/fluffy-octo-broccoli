import { NextResponse } from "next/server";
import { podcastEpisodes, PODCAST_CHANNEL } from "@/app/data/podcast-episodes";

const baseUrl = "https://frontforumfocus.com";

function escapeXml(unsafe: string | undefined): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rssDate(dateString: string | undefined): string {
  if (!dateString) return new Date().toUTCString();
  return new Date(dateString).toUTCString();
}

export async function GET() {
  const episodes = podcastEpisodes.filter(
    (ep) => ep.episodeType !== "trailer"
  );

  const items = episodes
    .map((ep) => {
      const audioUrl = ep.audioUrl || `https://anchor.fm/s/40344dc0/podcast/play/${ep.id}`;
      return `
    <item>
      <title><![CDATA[${escapeXml(ep.title)}]]></title>
      <description><![CDATA[${escapeXml(ep.description)}]]></description>
      <link>${baseUrl}/podcasts</link>
      <guid isPermaLink="false">${ep.id}</guid>
      <pubDate>${rssDate(ep.pubDate)}</pubDate>
      <enclosure url="${escapeXml(audioUrl)}" length="0" type="audio/mpeg"/>
      <itunes:duration>${escapeXml(ep.duration)}</itunes:duration>
      <itunes:explicit>false</itunes:explicit>
      <itunes:image href="${escapeXml(PODCAST_CHANNEL.image)}"/>
      ${ep.season ? `<itunes:season>${ep.season}</itunes:season>` : ""}
      ${ep.episode ? `<itunes:episode>${ep.episode}</itunes:episode>` : ""}
      <itunes:episodeType>${ep.episodeType || "full"}</itunes:episodeType>
    </item>
    `;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:anchor="https://anchor.fm/xmlns">
  <channel>
    <title><![CDATA[${PODCAST_CHANNEL.title}]]></title>
    <description><![CDATA[${PODCAST_CHANNEL.description}]]></description>
    <link>${baseUrl}</link>
    <language>en</language>
    <author>${PODCAST_CHANNEL.author}</author>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <itunes:author>${PODCAST_CHANNEL.author}</itunes:author>
    <itunes:summary><![CDATA[${PODCAST_CHANNEL.description}]]></itunes:summary>
    <itunes:type>episodic</itunes:type>
    <itunes:explicit>false</itunes:explicit>
    <itunes:category text="Business">
      <itunes:category text="Entrepreneurship"/>
    </itunes:category>
    <itunes:image href="${escapeXml(PODCAST_CHANNEL.image)}"/>
    <itunes:owner>
      <itunes:name>${PODCAST_CHANNEL.author}</itunes:name>
      <itunes:email>podcasts@frontforumfocus.com</itunes:email>
    </itunes:owner>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
