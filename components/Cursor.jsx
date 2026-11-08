'use client';

import { useEffect, useRef } from 'react';

/** Soft follower cursor for mouse users. Grows over links/buttons; shows a label over [data-cursor]. */
export default function Cursor() {
  const ref = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    const el = ref.current;
    let x = -100;
    let y = -100;
    let tx = -100;
    let ty = -100;
    let raf;
    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = e.target instanceof Element ? e.target : null;
      const tagged = t && t.closest('[data-cursor]');
      const link = t && t.closest('a, button');
      el.classList.toggle('is-label', !!tagged);
      el.classList.toggle('is-link', !tagged && !!link);
      if (tagged) label.current.textContent = tagged.getAttribute('data-cursor');
      el.classList.add('is-on');
    };
    const leave = () => el.classList.remove('is-on');
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cursor" ref={ref} aria-hidden="true">
      <span className="cursor__dot" />
      <span className="cursor__label" ref={label} />
    </div>
  );
}
