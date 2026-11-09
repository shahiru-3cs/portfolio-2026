'use client';

import { useEffect, useRef } from 'react';
import { hero, site } from '../../data/portfolio';
import { useScrollProgress } from '../../lib/scroll';
import PatternTile from '../ui/PatternTile';
import { Chars } from '../ui/Motion';

// x / y = offset from centre in vw / vh, z = depth in px, rz / ry = rotation in deg, w = width in px
const TILES = [
  { x: -43, y: -6, z: -380, rz: -10, ry: 24, w: 120, t: 'checker', p: 'mustard' },
  { x: -31, y: -24, z: -650, rz: 8, ry: 18, w: 104, t: 'dots', p: 'blush' },
  { x: -14, y: -30, z: -520, rz: -4, ry: 6, w: 92, t: 'scallop', p: 'mustard' },
  { x: 13, y: -27, z: -560, rz: 6, ry: -10, w: 96, t: 'cross', p: 'ember' },
  { x: 33, y: -20, z: -700, rz: -6, ry: -20, w: 110, t: 'stripes', p: 'cream' },
  { x: 45, y: 4, z: -300, rz: 9, ry: -28, w: 118, t: 'checker', p: 'ink' },
  { x: -46, y: 28, z: -160, rz: 14, ry: 30, w: 132, t: 'zigzag', p: 'ember' },
  { x: -18, y: 34, z: -260, rz: -12, ry: 10, w: 112, t: 'checker', p: 'ink' },
  { x: 8, y: 36, z: -420, rz: 4, ry: -4, w: 104, t: 'scallop', p: 'blush' },
  { x: 28, y: 30, z: -120, rz: -8, ry: -22, w: 128, t: 'dots', p: 'mustard' },
  { x: 41, y: 38, z: 60, rz: 16, ry: -30, w: 150, t: 'checker', p: 'ember' },
  { x: -36, y: 8, z: -900, rz: 3, ry: 12, w: 100, t: 'waves', p: 'sky' },
  { x: 22, y: -6, z: -980, rz: -5, ry: -8, w: 96, t: 'zigzag', p: 'mustard' },
  { x: -6, y: -12, z: -1100, rz: 7, ry: 0, w: 90, t: 'cross', p: 'blush' },
  { x: -52, y: -30, z: 120, rz: -18, ry: 34, w: 140, t: 'waves', p: 'cobalt' },
  { x: 52, y: -34, z: 40, rz: 12, ry: -34, w: 130, t: 'scallop', p: 'ember' },
];

// gx / gy / grz / gz = where each card ends up when they gather into a stack on scroll
const CARDS = [
  { x: 0, y: 6, z: 40, rz: 0, ry: 0, gx: 0, gy: 8, grz: 1, gz: 30 },
  { x: -25, y: 12, z: -90, rz: -3, ry: 14, gx: -1.2, gy: 9, grz: -6, gz: 0 },
  { x: 25, y: -1, z: -170, rz: 3, ry: -14, gx: 1.2, gy: 7, grz: 7, gz: 15 },
];

export default function Hero() {
  const ref = useRef(null);
  useScrollProgress(ref, 'pin');

  // Mouse parallax: eased --mx / --my in -1..1
  useEffect(() => {
    const el = ref.current;
    if (!window.matchMedia('(hover: hover)').matches) return undefined;
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    let raf;
    const move = (e) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const loop = () => {
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      el.style.setProperty('--mx', mx.toFixed(4));
      el.style.setProperty('--my', my.toFixed(4));
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  const pos = (o, i) => ({
    '--x': o.x,
    '--y': o.y,
    '--z': o.z,
    '--rz': `${o.rz}deg`,
    '--ry': `${o.ry}deg`,
    '--w': o.w ? `${o.w}px` : undefined,
    '--gx': o.gx,
    '--gy': o.gy,
    '--gz': o.gz,
    '--grz': o.grz !== undefined ? `${o.grz}deg` : undefined,
    '--delay': `${0.35 + i * 0.05}s`,
    '--fd': `${-i * 0.9}s`,
  });

  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero__sticky">
        <h1 className="hero__title">
          <span className="sr-only">{site.name}: React &amp; Next.js Developer in Sri Lanka </span>
          <Chars text={hero.title} className="hero__chars" />
        </h1>

        <div className="hero__scene">
          <div className="hero__stage">
            {TILES.map((t, i) => (
              <div className="hero__item" style={pos(t, i)} key={`t${i}`}>
                <div className="hero__float">
                  <PatternTile type={t.t} palette={t.p} shape="card" className="hero__tile" />
                </div>
              </div>
            ))}
            {hero.cards.map((c, i) => (
              <div className="hero__item hero__item--card" style={pos(CARDS[i], i + 4)} key={`c${i}`}>
                <div className="hero__float">
                  <article className="qcard">
                    <header className="qcard__head">
                      <PatternTile type={c.pattern} palette={c.palette} shape="square" className="qcard__icon" />
                      <span>{c.kicker}</span>
                    </header>
                    <h3 className="qcard__title">{c.title}</h3>
                    <p className="qcard__body">{c.body}</p>
                    <div className="qcard__chips">
                      {c.chips.map((ch) => (
                        <span key={ch}>{ch}</span>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
