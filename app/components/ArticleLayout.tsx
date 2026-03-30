'use client';

import { useRef } from 'react';
import { ReadingProgress } from './ReadingProgress';
import { TableOfContents } from './TableOfContents';

type ArticleLayoutProps = {
  children: React.ReactNode;
};

export function ArticleLayout({ children }: ArticleLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ReadingProgress />
      <div className="flex gap-12">
        {/* Table of Contents - desktop only */}
        <aside className="hidden xl:block">
          <TableOfContents contentRef={contentRef} />
        </aside>

        {/* Main article content */}
        <div ref={contentRef} className="min-w-0 flex-1">
          {children}
        </div>
      </div>
    </>
  );
}
