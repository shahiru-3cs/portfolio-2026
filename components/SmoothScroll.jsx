'use client';

import { useEffect } from 'react';

/** Lenis smooth scrolling (skipped for reduced-motion users). */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    // Disable Lenis on touch devices where native momentum scrolling is hardware-accelerated
    // and Lenis rAF conflicts, causing stutter and flickering across sections
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) return undefined;

    let lenis;
    let raf = 0;
    let cancelled = false;
    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 });
      window.__lenis = lenis;
      if (document.documentElement.classList.contains('is-loading')) lenis.stop();
      const loop = (t) => {
        lenis.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);
  return null;
}
