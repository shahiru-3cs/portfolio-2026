'use client';

import { useRef } from 'react';
import { services } from '../../data/portfolio';
import { useScrollProgress } from '../../lib/scroll';
import { Chapter, Chars, Reveal, SplitLines, Words } from '../ui/Motion';
import PatternTile from '../ui/PatternTile';

const FLOATERS = [
  { x: 4, y: 6, w: 9, r: -14, t: 'checker', p: 'mustard', sp: -60 },
  { x: 84, y: 2, w: 10, r: 12, t: 'cross', p: 'ember', sp: -110 },
  { x: -2, y: 58, w: 11, r: 16, t: 'checker', p: 'ink', sp: 40 },
  { x: 88, y: 52, w: 9, r: -10, t: 'waves', p: 'sky', sp: -30 },
  { x: 22, y: 86, w: 7, r: 8, t: 'dots', p: 'blush', sp: 70 },
  { x: 70, y: 88, w: 8, r: -6, t: 'stripes', p: 'mustard', sp: 90 },
];

export default function Services() {
  const ref = useRef(null);
  const closing = useRef(null);
  useScrollProgress(ref, 'enter');
  useScrollProgress(closing, 'view');

  const last = services.closing[services.closing.length - 1];
  const firstLines = services.closing.slice(0, -1);

  return (
    <section id="services" className="svc" ref={ref}>
      <div className="svc__card">
        <Chapter label={services.label} chapter={services.chapter} className="chap--dark" />

        <Reveal as="p" className="fade-up svc__kicker">
          {services.kicker}
        </Reveal>
        <SplitLines className="display svc__title" lines={services.heading} />

        <div className="svc__list">
          {services.items.map((s, i) => (
            <Reveal as="article" className="svc__item fade-up" key={s.name} style={{ '--i': i }}>
              <div className="svc__shieldWrap">
                <PatternTile type={s.pattern} palette={s.palette} shape="shield" className="svc__shield" />
                <span className="svc__no">0{i + 1}</span>
              </div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="svc__closing" ref={closing}>
          {FLOATERS.map((f, i) => (
            <PatternTile
              key={i}
              type={f.t}
              palette={f.p}
              shape="shield"
              className="svc__floater"
              style={{ '--x': `${f.x}%`, '--y': `${f.y}%`, '--w': `${f.w}%`, '--r': `${f.r}deg`, '--sp': f.sp }}
            />
          ))}
          <p className="svc__kicker svc__kicker--center">{services.closingKicker}</p>
          <h2 className="display svc__closingTitle" aria-label={services.closing.join(' ')}>
            {firstLines.map((l) => (
              <span key={l} className="svc__cl" aria-hidden="true">
                {l}
              </span>
            ))}
            <span className="svc__cl svc__cl--drop" aria-hidden="true">
              <Chars text={last} />
            </span>
          </h2>
          <p className="svc__closingText">
            <Words text={services.closingText} />
          </p>
        </div>
      </div>
    </section>
  );
}
