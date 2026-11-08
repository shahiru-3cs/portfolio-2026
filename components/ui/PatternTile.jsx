'use client';

import { useId } from 'react';

export const PALETTES = {
  ember: ['#E8442E', '#F5C542'],
  ink: ['#E8442E', '#1A1018'],
  mustard: ['#E5B53A', '#5A3B2A'],
  sky: ['#4FA8F0', '#FFFFFF'],
  blush: ['#ECD2F3', '#6B4A5E'],
  cobalt: ['#2F5BFF', '#9FD4FF'],
  cream: ['#F3EBDD', '#1A1018'],
  forest: ['#2E7D5B', '#F3EBDD'],
};

function PatternDef({ id, type, a, b }) {
  switch (type) {
    case 'waves':
      return (
        <pattern id={id} width="24" height="14" patternUnits="userSpaceOnUse">
          <rect width="24" height="14" fill={a} />
          <path d="M0 9 Q6 2 12 9 T24 9" stroke={b} strokeWidth="3.4" fill="none" />
        </pattern>
      );
    case 'dots':
      return (
        <pattern id={id} width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill={a} />
          <circle cx="7" cy="7" r="3.8" fill={b} />
        </pattern>
      );
    case 'stripes':
      return (
        <pattern id={id} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
          <rect width="12" height="12" fill={a} />
          <rect width="6" height="12" fill={b} />
        </pattern>
      );
    case 'zigzag':
      return (
        <pattern id={id} width="16" height="12" patternUnits="userSpaceOnUse">
          <rect width="16" height="12" fill={a} />
          <path d="M0 9 L4 3 L8 9 L12 3 L16 9" stroke={b} strokeWidth="2.6" fill="none" strokeLinejoin="round" />
        </pattern>
      );
    case 'scallop':
      return (
        <pattern id={id} width="20" height="12" patternUnits="userSpaceOnUse">
          <rect width="20" height="12" fill={a} />
          <circle cx="10" cy="12" r="8" fill={b} />
          <circle cx="0" cy="0" r="8" fill={b} />
          <circle cx="20" cy="0" r="8" fill={b} />
        </pattern>
      );
    case 'cross':
      return (
        <pattern id={id} width="18" height="18" patternUnits="userSpaceOnUse">
          <rect width="18" height="18" fill={a} />
          <path d="M7 3h4v4h4v4h-4v4H7v-4H3V7h4z" fill={b} />
        </pattern>
      );
    case 'checker':
    default:
      return (
        <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="16" height="16" fill={a} />
          <rect width="8" height="8" fill={b} />
          <rect x="8" y="8" width="8" height="8" fill={b} />
        </pattern>
      );
  }
}

const SHAPES = {
  card: { vb: '0 0 100 130', el: (p) => <rect width="100" height="130" rx="9" {...p} /> },
  square: { vb: '0 0 100 100', el: (p) => <rect width="100" height="100" rx="20" {...p} /> },
  circle: { vb: '0 0 100 100', el: (p) => <circle cx="50" cy="50" r="50" {...p} /> },
  wide: { vb: '0 0 160 100', el: (p) => <rect width="160" height="100" {...p} /> },
  shield: {
    vb: '0 0 100 120',
    el: (p) => <path d="M6 6 H94 V56 C94 88 72 106 50 116 C28 106 6 88 6 56 Z" {...p} />,
  },
};

/** Decorative SVG tile filled with a repeating geometric pattern. */
export default function PatternTile({ type = 'checker', palette = 'ember', shape = 'card', className, style }) {
  const raw = useId();
  const base = `pt${raw.replace(/[^a-zA-Z0-9]/g, '')}`;
  const id = `${base}-fill`;
  const sheen = `${base}-sheen`;
  const [a, b] = PALETTES[palette] || PALETTES.ember;
  const s = SHAPES[shape] || SHAPES.card;
  return (
    <svg
      viewBox={s.vb}
      className={className}
      style={style}
      aria-hidden="true"
      preserveAspectRatio={shape === 'wide' ? 'xMidYMid slice' : 'xMidYMid meet'}
    >
      <defs>
        <PatternDef id={id} type={type} a={a} b={b} />
        <linearGradient id={sheen} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      {s.el({ fill: `url(#${id})` })}
      {s.el({ fill: `url(#${sheen})` })}
    </svg>
  );
}
