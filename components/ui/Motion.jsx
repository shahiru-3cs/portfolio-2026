'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '../../lib/scroll';

/** Adds `is-in` to the element once it scrolls into view. */
export function Reveal({ as: Tag = 'div', className = '', children, threshold = 0.2, ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold });
  return (
    <Tag ref={ref} className={`${className} ${inView ? 'is-in' : ''}`} {...rest}>
      {children}
    </Tag>
  );
}

/**
 * Headline whose lines slide up out of a mask, one after another.
 * `lines` = array of strings or { text, indent } (indent = % left offset on desktop).
 */
export function SplitLines({ as = 'h2', lines, className = '', stagger = 0.09, delay = 0 }) {
  return (
    <Reveal as={as} className={`split ${className}`}>
      {lines.map((l, i) => {
        const line = typeof l === 'string' ? { text: l } : l;
        return (
          <span className="split__line" key={i} style={{ '--indent': line.indent || '0%' }}>
            <span className="split__inner" style={{ '--d': `${delay + i * stagger}s` }}>
              {line.text}
            </span>
          </span>
        );
      })}
    </Reveal>
  );
}

/** Splits text into per-character spans with a `--i` index (spaces preserved). */
export function Chars({ text, className = '' }) {
  const words = text.split(' ');
  let i = 0;
  return (
    <span className={className} aria-label={text} style={{ '--n': Array.from(text).length }}>
      {words.map((w, wi) => {
        const word = (
          <span className="chw" aria-hidden="true" key={`w${wi}`}>
            {Array.from(w).map((c) => {
              const idx = i++;
              return (
                <span key={idx} className="ch" style={{ '--i': idx }}>
                  {c}
                </span>
              );
            })}
          </span>
        );
        i++; // count the space
        return wi < words.length - 1 ? [word, ' '] : word;
      })}
    </span>
  );
}

/** Splits text into per-word spans with a `--i` index. */
export function Words({ text, className = '' }) {
  const words = text.split(' ');
  return (
    <span className={className} style={{ '--n': words.length }}>
      {words.map((w, i) => (
        <span key={i} className="wd" style={{ '--i': i }}>
          {w}{' '}
        </span>
      ))}
    </span>
  );
}

/** Top-of-section label row: "About Me ........ Chapter 01" */
export function Chapter({ label, chapter, className = '' }) {
  return (
    <div className={`chap ${className}`}>
      <span>{label}</span>
      <span>Chapter {chapter}</span>
    </div>
  );
}

/** Number that counts up when it scrolls into view. */
export function Counter({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      setN(Math.round(eased * value));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
