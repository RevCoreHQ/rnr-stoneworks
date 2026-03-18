'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { serviceAreas } from '@/data/service-areas';

// Project geo coordinates to SVG space
// Colorado Front Range bounding box (approx)
const BOUNDS = {
  minLat: 39.75,
  maxLat: 40.25,
  minLng: -105.35,
  maxLng: -104.85,
};

const SVG_W = 500;
const SVG_H = 400;

function project(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * SVG_W;
  const y = ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * SVG_H;
  return { x, y };
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ServiceAreaMap() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const hq = project(39.9936, -105.1019); // Lafayette HQ

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="w-full h-auto"
        aria-label="Rock N Roll Stoneworks service area map showing Colorado Front Range communities"
      >
        {/* Background grid */}
        <defs>
          <pattern id="map-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-200/30" />
          </pattern>
          <radialGradient id="hq-pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(26, 171, 227)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(26, 171, 227)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width={SVG_W} height={SVG_H} fill="url(#map-grid)" rx="8" />

        {/* Service radius circle */}
        <circle cx={hq.x} cy={hq.y} r="160" fill="url(#hq-pulse)" stroke="rgb(26, 171, 227)" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
        <circle cx={hq.x} cy={hq.y} r="100" fill="none" stroke="rgb(26, 171, 227)" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="4 4" />

        {/* Connection lines from HQ to each area */}
        {serviceAreas.map((area) => {
          const p = project(area.geo.lat, area.geo.lng);
          const isHovered = hoveredSlug === area.slug;
          return (
            <line
              key={`line-${area.slug}`}
              x1={hq.x}
              y1={hq.y}
              x2={p.x}
              y2={p.y}
              stroke="rgb(26, 171, 227)"
              strokeWidth={isHovered ? 1.5 : 0.5}
              strokeOpacity={isHovered ? 0.6 : 0.15}
              strokeDasharray="3 3"
              style={{ transition: 'all 0.3s ease' }}
            />
          );
        })}

        {/* Area pins */}
        {serviceAreas.map((area) => {
          const p = project(area.geo.lat, area.geo.lng);
          const isHovered = hoveredSlug === area.slug;
          const isHQ = area.slug === 'lafayette';
          return (
            <g key={area.slug}>
              {/* Pulse ring on hover */}
              <circle
                cx={p.x}
                cy={p.y}
                r={isHovered ? 18 : 0}
                fill="rgb(26, 171, 227)"
                fillOpacity={isHovered ? 0.1 : 0}
                style={{ transition: 'all 0.3s ease' }}
              />
              {/* Pin dot */}
              <circle
                cx={p.x}
                cy={p.y}
                r={isHQ ? 6 : isHovered ? 5 : 4}
                fill={isHQ ? 'rgb(26, 171, 227)' : isHovered ? 'rgb(26, 171, 227)' : area.isPrimary ? 'rgb(26, 171, 227)' : 'rgb(156, 163, 175)'}
                fillOpacity={isHovered || isHQ ? 1 : 0.7}
                stroke="white"
                strokeWidth={isHQ ? 2.5 : 2}
                style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={() => setHoveredSlug(area.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              />
              {/* HQ inner ring */}
              {isHQ && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="10"
                  fill="none"
                  stroke="rgb(26, 171, 227)"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                >
                  <animate attributeName="r" values="8;14;8" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                </circle>
              )}
              {/* Label */}
              <text
                x={p.x}
                y={p.y - (isHQ ? 16 : 12)}
                textAnchor="middle"
                fill={isHovered || isHQ ? 'rgb(15, 23, 42)' : 'rgb(100, 116, 139)'}
                fontSize={isHQ ? 12 : 11}
                fontWeight={isHQ || isHovered ? 600 : 400}
                fontFamily="DM Sans, system-ui, sans-serif"
                style={{ transition: 'all 0.3s ease' }}
              >
                {area.city}
              </text>
              {isHQ && (
                <text
                  x={p.x}
                  y={p.y + 18}
                  textAnchor="middle"
                  fill="rgb(26, 171, 227)"
                  fontSize="8"
                  fontWeight="600"
                  fontFamily="DM Sans, system-ui, sans-serif"
                  letterSpacing="1.5"
                >
                  HQ
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip card */}
      {hoveredSlug && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-lg border border-cream-200 shadow-elevate px-4 py-3 max-w-xs pointer-events-none"
        >
          {(() => {
            const area = serviceAreas.find(a => a.slug === hoveredSlug);
            if (!area) return null;
            return (
              <div>
                <p className="font-display font-semibold text-ink-900 text-sm">
                  {area.city}, {area.state}
                  {area.isPrimary && <span className="ml-2 text-[10px] text-gold-600 font-body tracking-wider uppercase">Primary</span>}
                </p>
                <p className="text-xs text-ink-400 mt-1 line-clamp-2 font-body">{area.intro.slice(0, 120)}...</p>
              </div>
            );
          })()}
        </motion.div>
      )}
    </div>
  );
}
