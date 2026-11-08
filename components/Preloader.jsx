'use client';

import { useEffect, useState } from 'react';
import { site } from '../data/portfolio';
import { Chars } from './ui/Motion';

const PANELS = 5;
const COUNT_MS = 1600; // how long the 0 → 100 counter runs
const CLOSE_MS = 900; // how long each panel takes to close
const STAGGER_MS = 90; // gap between panels

/**
 * Full-screen intro: name in the centre over 5 panels.
 * When loading finishes the name lifts away and the panels close upward one after another.
 * <html> carries the `is-loading` class until the panels start closing (pauses hero animations, locks scroll).
 */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('in'); // in -> out -> done

  useEffect(() => {
    const root = document.documentElement;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const total = reduce ? 200 : COUNT_MS;
    let raf;
    let t1;
    let t2;
    const t0 = performance.now();

    const tick = (t) => {
      const k = Math.min(1, (t - t0) / total);
      setCount(Math.round((1 - Math.pow(1 - k, 2.2)) * 100));
      if (k < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      // wait for fonts so the reveal never shows a font swap
      const ready = document.fonts ? document.fonts.ready : Promise.resolve();
      ready.then(() => {
        t1 = setTimeout(() => {
          setPhase('out');
          root.classList.remove('is-loading');
          if (window.__lenis) window.__lenis.start();
          t2 = setTimeout(() => setPhase('done'), CLOSE_MS + STAGGER_MS * PANELS + 500);
        }, 250);
      });
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      root.classList.remove('is-loading');
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`loader ${phase === 'out' ? 'is-out' : ''}`} aria-hidden={phase === 'out'} role="status">
      <div className="loader__panels">
        {Array.from({ length: PANELS }).map((_, i) => (
          <span key={i} style={{ '--i': i, '--close': `${CLOSE_MS}ms`, '--stagger': `${STAGGER_MS}ms` }} />
        ))}
      </div>
      <div className="loader__center">
        <p className="display loader__name">
          <Chars text={site.name.toUpperCase()} />
        </p>
        <p className="loader__role">{site.role}</p>
      </div>
      <span className="loader__count">{String(count).padStart(3, '0')}</span>
      <span className="loader__label">Loading portfolio</span>
    </div>
  );
}
