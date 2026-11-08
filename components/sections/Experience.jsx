'use client';

import { useRef } from 'react';
import { experience } from '../../data/portfolio';
import { useScrollProgress } from '../../lib/scroll';
import { Chapter, Reveal } from '../ui/Motion';
import PatternTile from '../ui/PatternTile';

export default function Experience() {
  const ref = useRef(null);
  useScrollProgress(ref, 'enter');
  let n = 0;

  return (
    <section id="experience" className="xp" ref={ref}>
      <div className="xp__card">
        <Chapter label={experience.label} chapter={experience.chapter} className="chap--dark" />

        <Reveal as="h2" className="display xp__title split">
          <span className="split__line">
            <span className="split__inner" style={{ '--d': '0s' }}>
              {experience.headingStart}{' '}
              <PatternTile type="checker" palette="ink" shape="shield" className="xp__shield" />{' '}
              {experience.headingEnd}
            </span>
          </span>
          <span className="split__line">
            <span className="split__inner" style={{ '--d': '0.1s' }}>
              {experience.headingLine2}
            </span>
          </span>
        </Reveal>
        <Reveal as="p" className="fade-up xp__sub">
          {experience.sub}
        </Reveal>

        {experience.roles.map((role) => (
          <div className="xp__role" key={role.company}>
            <Reveal className="xp__roleHead fade-up">
              <span className="xp__period">{role.period}</span>
              <strong>{role.title}</strong>
              <span className="xp__company">{role.company}</span>
            </Reveal>

            {(role.points || role.projects).map((p) => {
              n += 1;
              return (
                <Reveal as="article" className="xp__row" key={p.name} threshold={0.35}>
                  <div className="xp__meta">
                    <span className="xp__kicker">At {role.company}</span>
                    <h3>{p.name}</h3>
                    <span className="xp__num">{String(n).padStart(2, '0')}</span>
                  </div>
                  <div className="xp__desc">
                    <p>{p.desc}</p>
                    <div className="tags">
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
