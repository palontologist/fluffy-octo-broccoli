'use client';

import { useEffect, useState } from 'react';

type Heading = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ contentRef }: { contentRef: React.RefObject<HTMLElement | null> }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // Extract headings from article content
  useEffect(() => {
    if (!contentRef.current) return;

    const headingElements = contentRef.current.querySelectorAll('h2, h3');
    const extractedHeadings: Heading[] = [];

    headingElements.forEach((el, index) => {
      const id = el.id || `heading-${index}`;
      if (!el.id) el.id = id;

      extractedHeadings.push({
        id,
        text: el.textContent || '',
        level: parseInt(el.tagName[1]),
      });
    });

    setHeadings(extractedHeadings);
  }, [contentRef]);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-8 mb-8 hidden max-h-[calc(100vh-4rem)] w-56 overflow-auto xl:block">
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-zinc-500">
        In this article
      </p>
      <ul className="space-y-2 border-l border-zinc-700">
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ paddingLeft: level === 3 ? '1rem' : '0' }}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block py-1 text-sm transition-colors ${
                activeId === id
                  ? 'text-white font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {activeId === id && (
                <span className="mr-2 inline-block h-1 w-1 rounded-full bg-white" />
              )}
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
