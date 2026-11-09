'use client';

import { useRef, useState } from 'react';
import { projects } from '../../data/portfolio';
import { useScrollProgress, scrollToY } from '../../lib/scroll';
import { Chapter, Chars } from '../ui/Motion';
import { BrowserMock } from '../ui/Mockups';

export default function Projects() {
  const ref = useRef(null);
  const items = projects.items;
  const n = items.length;
  const [active, setActive] = useState(0);

  useScrollProgress(ref, 'pin', (p) => {
    const idx = Math.min(n - 1, Math.floor(p * n));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const jump = (i) => {
    const el = ref.current;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const range = el.offsetHeight - window.innerHeight;
    scrollToY(top + range * ((i + 0.5) / n));
  };

  const p = items[active];

  return (
    <section id="projects" className="proj" ref={ref} style={{ '--n': n }}>
      <div className="proj__sticky" style={{ '--glow': p.glow }}>
        <div className="proj__glow" />
        <Chapter label={projects.label} chapter={projects.chapter} />

        {/* <p className="proj__short" key={`s${active}`}>
          {p.short}
        </p> */}
        <div className="proj__count" key={`c${active}`} aria-hidden="true">
          ({active + 1})
        </div>

        <div className="proj__visual" data-cursor="View">
          {items.map((it, i) => (
            <div key={it.name} className={`proj__shot ${i === active ? 'is-active' : ''}`} aria-hidden={i !== active}>
              <BrowserMock variant={it.mock} pattern={it.pattern} palette={it.palette} image={it.image} alt={`${it.name} website screenshot: ${it.short}`} dark />
            </div>
          ))}
        </div>

        <h2 className="display proj__title" key={`t${active}`} aria-live="polite">
          {p.lines.map((l) => (
            <span className="proj__line" key={l}>
              <Chars text={l} />
            </span>
          ))}
        </h2>

        <h3 className="display proj__closing">
          {projects.closing.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h3>

        <div className="proj__info">
          {/* <p key={`d${active}`} className="proj__desc">
            {p.desc}
          </p> */}
          <div className="tags tags--dark">
            {p.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="proj__links">
            <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit the ${p.name} live site`}>
              Live site ↗
            </a>
            {/* <a href={p.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a> */}
          </div>
          <div className="proj__pills" role="tablist" aria-label="Projects">
            {items.map((it, i) => (
              <button
                type="button"
                role="tab"
                aria-selected={i === active}
                key={it.name}
                className={i === active ? 'is-active' : ''}
                onClick={() => jump(i)}
              >
                {it.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
