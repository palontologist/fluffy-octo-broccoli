import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "downloads.json");

function readCount(): number {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      return typeof parsed.count === "number" ? parsed.count : 0;
    }
  } catch {
    // ignore
  }
  return 0;
}

function writeCount(count: number) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify({ count }, null, 2));
  } catch {
    // ignore
  }
}

export async function GET() {
  return NextResponse.json({ count: readCount() });
}

export async function POST() {
  const count = readCount() + 1;
  writeCount(count);
  return NextResponse.json({ count });
}
