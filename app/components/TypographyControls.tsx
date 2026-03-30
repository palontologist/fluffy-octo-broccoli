'use client';

import { useState, useEffect } from 'react';

type FontSize = 'sm' | 'md' | 'lg' | 'xl';
type LineHeight = 'tight' | 'normal' | 'relaxed';
type LetterSpacing = 'tight' | 'normal' | 'wide';

const fontSizes: Record<FontSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const lineHeights: Record<LineHeight, string> = {
  tight: 'leading-tight',
  normal: 'leading-relaxed',
  relaxed: 'leading-loose',
};

const letterSpacings: Record<LetterSpacing, string> = {
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
};

export function TypographyControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>('md');
  const [lineHeight, setLineHeight] = useState<LineHeight>('normal');
  const [letterSpacing, setLetterSpacing] = useState<LetterSpacing>('normal');

  // Load saved preferences
  useEffect(() => {
    const saved = localStorage.getItem('typography-prefs');
    if (saved) {
      const prefs = JSON.parse(saved);
      if (prefs.fontSize) setFontSize(prefs.fontSize);
      if (prefs.lineHeight) setLineHeight(prefs.lineHeight);
      if (prefs.letterSpacing) setLetterSpacing(prefs.letterSpacing);
    }
  }, []);

  // Save preferences
  useEffect(() => {
    localStorage.setItem(
      'typography-prefs',
      JSON.stringify({ fontSize, lineHeight, letterSpacing })
    );
  }, [fontSize, lineHeight, letterSpacing]);

  // Apply to body
  useEffect(() => {
    document.body.className = [
      fontSizes[fontSize],
      lineHeights[lineHeight],
      letterSpacings[letterSpacing],
    ].join(' ');
  }, [fontSize, lineHeight, letterSpacing]);

  const sizes: FontSize[] = ['sm', 'md', 'lg', 'xl'];
  const heights: LineHeight[] = ['tight', 'normal', 'relaxed'];
  const spacings: LetterSpacing[] = ['tight', 'normal', 'wide'];

  return (
    <div className="fixed bottom-20 right-4 z-40">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white shadow-lg hover:bg-zinc-700 transition-colors"
        aria-label="Typography settings"
      >
        <span className="text-lg">Aa</span>
      </button>

      {/* Settings panel */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-64 rounded-lg border border-zinc-700 bg-zinc-900 p-4 shadow-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
            Reading Settings
          </p>

          {/* Font Size */}
          <div className="mb-4">
            <label className="mb-2 block text-xs text-zinc-400">Size</label>
            <div className="flex gap-1">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`flex-1 rounded px-2 py-1 text-xs transition-colors ${
                    fontSize === size
                      ? 'bg-white text-black'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Line Height */}
          <div className="mb-4">
            <label className="mb-2 block text-xs text-zinc-400">Line Height</label>
            <div className="flex gap-1">
              {heights.map((height) => (
                <button
                  key={height}
                  onClick={() => setLineHeight(height)}
                  className={`flex-1 rounded px-2 py-1 text-xs capitalize transition-colors ${
                    lineHeight === height
                      ? 'bg-white text-black'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {height}
                </button>
              ))}
            </div>
          </div>

          {/* Letter Spacing */}
          <div>
            <label className="mb-2 block text-xs text-zinc-400">Spacing</label>
            <div className="flex gap-1">
              {spacings.map((spacing) => (
                <button
                  key={spacing}
                  onClick={() => setLetterSpacing(spacing)}
                  className={`flex-1 rounded px-2 py-1 text-xs capitalize transition-colors ${
                    letterSpacing === spacing
                      ? 'bg-white text-black'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {spacing}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
