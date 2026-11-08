'use client';

import { useEffect, useRef, useState } from 'react';
import { uptime, site } from '../../data/portfolio';
import { subscribe } from '../../lib/scroll';
import { Chapter } from '../ui/Motion';
import { Phone, Mark } from '../ui/Mockups';
import PatternTile from '../ui/PatternTile';
import InkReveal from '../ui/InkReveal';

const pad = (n, l = 2) => String(n).padStart(l, '0');

function useElapsed(since) {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return '0000:00:00:00';
  let s = Math.max(0, Math.floor((now - new Date(since).getTime()) / 1000));
  const d = Math.floor(s / 86400);
  s -= d * 86400;
  const h = Math.floor(s / 3600);
  s -= h * 3600;
  const m = Math.floor(s / 60);
  s -= m * 60;
  return `${pad(d, 4)}:${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default function Uptime() {
  const ref = useRef(null);
  const ink = useRef(null);
  const clock = useElapsed(site.careerStart);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let lastP = -1;
    let lastInk = -1;

    return subscribe(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Pinned progress for CSS variables (--p: 0 when top hits top, 1 when bottom hits bottom)
      const pinDist = Math.max(1, r.height - vh);
      const pinP = Math.max(0, Math.min(1, -r.top / pinDist));

      if (Math.abs(pinP - lastP) > 0.0004) {
        lastP = pinP;
        el.style.setProperty('--p', pinP.toFixed(4));
      }

      // Ink splash starts as soon as Uptime pins at the top of the viewport (r.top <= 0),
      // ensuring the organic splash is NEVER cropped by the bottom edge of the previous section.
      // With the smooth quad ease curve, it starts expanding visibly on the very first scroll tick.
      const INK_PIN_END = 0.14;
      const inkP = r.top > 0 ? 0 : Math.min(1, pinP / INK_PIN_END);

      if (Math.abs(inkP - lastInk) > 0.0004) {
        lastInk = inkP;
        if (ink.current) {
          ink.current.setProgress(inkP);
        }
      }
    });
  }, []);

  return (
    <section id="uptime" className="uptime" ref={ref}>
      <div className="uptime__sticky">
        <div className="uptime__bg grain" />
        <InkReveal ref={ink} className="uptime__ink" />
        <div className="uptime__content">
          <Chapter label={uptime.label} chapter={uptime.chapter} className="chap--dark" />

          <h2 className="display uptime__title">
            {uptime.heading.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>

          <div className="uptime__clock" aria-label={`${clock.replace(/:/g, ' ')} — ${uptime.counterLabel}`}>
            {Array.from(clock).map((c, i) => (
              <span key={i} className={c === ':' ? 'colon' : 'dg'}>
                {c}
              </span>
            ))}
          </div>
          <p className="uptime__clockLabel">{uptime.counterLabel}</p>

          <div className="uptime__phone">
            <Phone>
              <div className="app">
                <div className="app__brand">
                  <Mark initials={site.initials} />
                  {site.firstName.toUpperCase()}
                </div>
                <div className="app__card">
                  <PatternTile type="waves" palette="sky" shape="square" className="app__icon" />
                  <small>{uptime.phone.title}</small>
                  <strong>{uptime.phone.body}</strong>
                  <div className="app__avatars">
                    <span>R</span>
                    <span>N</span>
                    <span>T</span>
                    <em>React · Next.js</em>
                  </div>
                </div>
                <div className="app__list">
                  <small>{uptime.phone.listTitle}</small>
                  {uptime.phone.list.map((item, i) => (
                    <div className="app__item" key={item} style={{ '--i': i }}>
                      <i />
                      <span>{item}</span>
                      <b>✓</b>
                    </div>
                  ))}
                </div>
                <div className="app__dock">
                  <span className="app__x">×</span>
                  <span className="app__time">{clock.slice(5)}</span>
                  <span className="app__ok">✓</span>
                </div>
              </div>
            </Phone>
          </div>

          <div className="uptime__texts">
            <p className="uptime__left">{uptime.left}</p>
            <p className="uptime__right">{uptime.right}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
