'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const BLUR_DARK =
  'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 5%27%3E%3Cfilter id=%27b%27 color-interpolation-filters=%27sRGB%27%3E%3CfeGaussianBlur stdDeviation=%271%27/%3E%3C/filter%3E%3Crect filter=%27url(%23b)%27 width=%27100%25%27 height=%27100%25%27 fill=%27%230b1219%27/%3E%3C/svg%3E';

interface BeforeAfterProps {
  before: string;
  after: string;
  alt?: string;
  /** Initial divider position 0–100 from the left. Defaults to 50. */
  initial?: number;
}

const clamp = (n: number) => Math.max(0, Math.min(100, n));

/**
 * Single source of truth: `position` is the divider's percent from the LEFT (0–100).
 * - Bottom layer: AFTER (always full-bleed).
 * - Top layer: BEFORE, clipped from the right by (100 − position)% so it occupies the left `position`% of the frame.
 * - Handle and divider line sit at `position`% from the left, which is exactly where the cursor is during a drag.
 */
export function BeforeAfter({ before, after, alt = 'Project transformation', initial = 50 }: BeforeAfterProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState<number>(clamp(initial));

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(pct));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      const el = wrapRef.current;
      if (!el) return;
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        // ignore — capture is best-effort
      }
      draggingRef.current = true;
      setFromClientX(e.clientX);
    },
    [setFromClientX]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    },
    [setFromClientX]
  );

  const stopDragging = useCallback((pointerId?: number) => {
    draggingRef.current = false;
    const el = wrapRef.current;
    if (el && pointerId != null && el.hasPointerCapture(pointerId)) {
      el.releasePointerCapture(pointerId);
    }
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => stopDragging(e.pointerId),
    [stopDragging]
  );

  useEffect(() => {
    const onWindowUp = () => stopDragging();
    window.addEventListener('pointerup', onWindowUp);
    window.addEventListener('pointercancel', onWindowUp);
    return () => {
      window.removeEventListener('pointerup', onWindowUp);
      window.removeEventListener('pointercancel', onWindowUp);
    };
  }, [stopDragging]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      setPosition((p) => clamp(p - (e.shiftKey ? 10 : 2)));
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      setPosition((p) => clamp(p + (e.shiftKey ? 10 : 2)));
      e.preventDefault();
    } else if (e.key === 'Home') {
      setPosition(0);
      e.preventDefault();
    } else if (e.key === 'End') {
      setPosition(100);
      e.preventDefault();
    }
  }, []);

  // Inset from the right by (100 − position)% leaves the LEFT `position`% of the BEFORE layer visible.
  const beforeClipInsetRight = `${(100 - position).toFixed(2)}%`;
  const beforeClip = `inset(0 ${beforeClipInsetRight} 0 0)`;

  return (
    <div
      ref={wrapRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-sm select-none touch-none cursor-ew-resize bg-ink-950"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDragStart={(e) => e.preventDefault()}
      onKeyDown={onKeyDown}
      role="slider"
      tabIndex={0}
      aria-label={`Before and after comparison: ${alt}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      <Image
        src={after}
        alt={`After: ${alt}`}
        fill
        sizes="(max-width: 1024px) 90vw, 45vw"
        quality={80}
        priority={false}
        placeholder="blur"
        blurDataURL={BLUR_DARK}
        draggable={false}
        className="object-cover object-center pointer-events-none select-none"
      />

      <div
        className="absolute inset-0 will-change-[clip-path]"
        style={{ clipPath: beforeClip, WebkitClipPath: beforeClip }}
      >
        <Image
          src={before}
          alt={`Before: ${alt}`}
          fill
          sizes="(max-width: 1024px) 90vw, 45vw"
          quality={80}
          priority={false}
          placeholder="blur"
          blurDataURL={BLUR_DARK}
          draggable={false}
          className="object-cover object-center pointer-events-none select-none"
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/95 z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      <div
        className="absolute top-1/2 z-20 w-11 h-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.35)] flex items-center justify-center pointer-events-none"
        style={{ left: `${position}%` }}
        aria-hidden
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-ink-900">
          <path d="M6 4L2 9L6 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 4L16 9L12 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <span className="absolute top-3 left-3 z-10 px-2 py-1 bg-ink-950/70 backdrop-blur-sm rounded text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-white/85 pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 z-10 px-2 py-1 bg-ink-950/70 backdrop-blur-sm rounded text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-white/85 pointer-events-none">
        After
      </span>
    </div>
  );
}
