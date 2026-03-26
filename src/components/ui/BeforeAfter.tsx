'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';

const BLUR_DARK = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 5%27%3E%3Cfilter id=%27b%27 color-interpolation-filters=%27sRGB%27%3E%3CfeGaussianBlur stdDeviation=%271%27/%3E%3C/filter%3E%3Crect filter=%27url(%23b)%27 width=%27100%25%27 height=%27100%25%27 fill=%27%230b1219%27/%3E%3C/svg%3E';

interface BeforeAfterProps {
  before: string;
  after: string;
  alt?: string;
}

export function BeforeAfter({ before, after, alt = 'Project transformation' }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const onPointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] overflow-hidden rounded-sm select-none cursor-col-resize"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-label={`Before and after comparison: ${alt}`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ touchAction: 'none' }}
    >
      {/* After image (full, bottom layer) */}
      <Image
        src={after}
        alt={`After: ${alt}`}
        fill
        sizes="(max-width: 1024px) 90vw, 45vw"
        quality={80}
        placeholder="blur"
        blurDataURL={BLUR_DARK}
        className="object-cover object-center"
      />

      {/* Before image (clipped, top layer) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`Before: ${alt}`}
          fill
          sizes="(max-width: 1024px) 90vw, 45vw"
          quality={80}
          placeholder="blur"
          blurDataURL={BLUR_DARK}
          className="object-cover object-center"
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-10 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-glow-sm flex items-center justify-center pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-ink-800">
          <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 z-10 px-2 py-1 bg-ink-950/70 backdrop-blur-sm rounded text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-white/80 pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 z-10 px-2 py-1 bg-ink-950/70 backdrop-blur-sm rounded text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-white/80 pointer-events-none">
        After
      </span>
    </div>
  );
}
