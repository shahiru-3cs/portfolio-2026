'use client';

import { useEffect, useRef, useState } from 'react';

// One shared requestAnimationFrame loop for scroll-driven elements.
const subs = new Set();
let raf = 0;
let isListening = false;

// Each subscriber MEASURES (reads layout) and may return a function that WRITES.
// All reads run first, then all writes, so the browser computes layout once per frame.
// (Reading after another section's style write forces a full re-layout: with 8 animated
// sections that was up to 8 layouts per frame, which made phones stutter while scrolling.)
const writes = [];

function tick() {
  raf = 0;
  subs.forEach((fn) => {
    const w = fn();
    if (typeof w === 'function') writes.push(w);
  });
  for (let i = 0; i < writes.length; i++) writes[i]();
  writes.length = 0;
}

export function requestTick() {
  if (!raf) {
    raf = requestAnimationFrame(tick);
  }
}

function ensureListeners() {
  if (typeof window === 'undefined' || isListening) return;
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick, { passive: true });
  isListening = true;
}

export function subscribe(fn) {
  subs.add(fn);
  ensureListeners();
  const w = fn();
  if (typeof w === 'function') w();
  // If Lenis or smooth scroll is running, schedule a frame
  requestTick();
  return () => {
    subs.delete(fn);
    if (!subs.size && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

/**
 * Writes a 0..1 scroll progress to the element as a CSS variable (default `--p`).
 *  mode 'pin'   : progress through a tall section with a sticky child (0 = top hits top, 1 = bottom hits bottom)
 *  mode 'enter' : 0 when the top edge is at the bottom of the viewport, 1 when it reaches the top
 *  mode 'view'  : 0 when the element enters at the bottom, 1 when it leaves at the top
 */
export function useScrollProgress(ref, mode = 'view', onChange, varName = '--p') {
  const cb = useRef(onChange);
  cb.current = onChange;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let last = -1;
    const pinEl = mode === 'pin' ? el.firstElementChild : null;
    return subscribe(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let p;
      // Measure pinned sections against the sticky panel's own height (100svh), not
      // window.innerHeight: on phones innerHeight jumps when the address bar shows or
      // hides, which made the progress (and every pinned animation) jump with it.
      if (mode === 'pin') p = -r.top / Math.max(1, r.height - ((pinEl && pinEl.offsetHeight) || vh));
      else if (mode === 'enter') p = (vh - r.top) / vh;
      else p = (vh - r.top) / (vh + r.height);
      p = clamp01(p);
      if (Math.abs(p - last) <= 0.0004) return undefined;
      last = p;
      return () => {
        el.style.setProperty(varName, p.toFixed(4));
        if (cb.current) cb.current(p);
      };
    });
  }, [ref, mode, varName]);
}

/** true once the element has scrolled into view */
export function useInView(ref, { once = true, threshold = 0.2, rootMargin = '0px 0px -8% 0px' } = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) setInView(false);
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, once, threshold, rootMargin]);
  return inView;
}

/** Smooth-scroll to a section id (uses Lenis when it is running). */
export function scrollToId(id) {
  const el = typeof id === 'string' ? document.getElementById(id) : id;
  if (!el) return;
  scrollToY(el.getBoundingClientRect().top + window.scrollY);
}

export function scrollToY(y) {
  if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.4 });
  else window.scrollTo({ top: y, behavior: 'smooth' });
}
