'use client';

import { useEffect, useState } from 'react';
import { site, nav } from '../data/portfolio';
import { scrollToId } from '../lib/scroll';
import { Mark } from './ui/Mockups';

export default function Header() {
  const [docked, setDocked] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => {
      const d = window.scrollY > window.innerHeight * 0.55;
      setDocked(d);
      if (!d) setOpen(false);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header className={`topbar ${docked ? 'is-hidden' : ''}`}>
        <a href="#top" className="brand" onClick={go('top')} aria-label={`${site.name}, back to top`}>
          <Mark initials={site.initials} />
          <span className="brand__word">{site.firstName.toUpperCase()}</span>
        </a>
        <p className="topbar__tag">{site.tagline}</p>
        <a href="#contact" className="pill pill--pink" onClick={go('contact')}>
          Hire Me
        </a>
      </header>

      <div className={`dock ${docked ? 'is-shown' : ''} ${open ? 'is-open' : ''}`}>
        <nav className="dock__menu" aria-label="Sections" aria-hidden={!open}>
          {nav.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={go(n.id)}
              style={{ '--i': i }}
              tabIndex={open ? 0 : -1}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="dock__bar">
          <button
            type="button"
            className="dock__menuBtn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Mark initials={site.initials} />
            <span className="dock__burger">
              <i />
              <i />
            </span>
          </button>
          <a href="#contact" className="pill pill--pink" onClick={go('contact')}>
            Let’s Talk
          </a>
        </div>
      </div>
    </>
  );
}
