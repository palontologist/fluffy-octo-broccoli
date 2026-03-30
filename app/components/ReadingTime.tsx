// Calculate reading time from HTML content
export function calculateReadingTime(html: string): number {
  // Strip HTML tags and get plain text
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').filter(Boolean).length;
  const wordsPerMinute = 200;
  return Math.ceil(words / wordsPerMinute);
}

// Format reading time for display
export function formatReadingTime(minutes: number): string {
  if (minutes < 1) return '< 1 min read';
  if (minutes === 1) return '1 min read';
  return `${minutes} min read`;
}
