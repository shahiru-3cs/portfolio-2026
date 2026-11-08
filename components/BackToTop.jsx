'use client';

import { useEffect, useRef, useState } from 'react';
import { scrollToId } from '../lib/scroll';

/** Round "back to top" button with a ring that fills as you scroll down the page. */
export default function BackToTop() {
  const [shown, setShown] = useState(false);
  const ring = useRef(null);

  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const k = max > 0 ? window.scrollY / max : 0;
      setShown(window.scrollY > window.innerHeight * 1.2);
      if (ring.current) ring.current.style.strokeDashoffset = String(100 - k * 100);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
    };
  }, []);

  return (
    <button
      type="button"
      className={`totop ${shown ? 'is-shown' : ''}`}
      onClick={() => scrollToId('top')}
      aria-label="Back to top"
      tabIndex={shown ? 0 : -1}
    >
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle className="totop__track" cx="20" cy="20" r="18" pathLength="100" />
        <circle ref={ring} className="totop__ring" cx="20" cy="20" r="18" pathLength="100" />
      </svg>
      <span className="totop__arrow" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
