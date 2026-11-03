import { NextResponse } from "next/server";

const CHANNEL_ID = "UCRLh0JhKndUJppDIBegrRSg";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

type Episode = {
  id: string;
  title: string;
  guest: string;
  description: string;
  pubDate?: string;
  youtubeId: string;
  category?: string;
};

function decodeXml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
}

function parseEntries(xml: string): Episode[] {
  const entries: Episode[] = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let m: RegExpExecArray | null;
  while ((m = entryRegex.exec(xml)) !== null) {
    const block = m[1];
    const videoId = (block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1];
    const title = (block.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
    const published = (block.match(/<published>([^<]+)<\/published>/) || [])[1];
    const descMatch = block.match(/<media:description>([\s\S]*?)<\/media:description>/);
    const description = descMatch ? descMatch[1] : "";
    if (!videoId || !title) continue;
    entries.push({
      id: videoId,
      title: decodeXml(title).trim(),
      guest: "FrontForumFocus",
      description: decodeXml(description).trim(),
      pubDate: published,
      youtubeId: videoId,
      category: "Impact",
    });
  }
  return entries;
}

export async function GET() {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch feed" }, { status: 502 });
    }
    const xml = await res.text();
    const episodes = parseEntries(xml);
    return NextResponse.json({ episodes });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
