'use client';

import { useRef } from 'react';
import { education, site } from '../../data/portfolio';
import { useScrollProgress } from '../../lib/scroll';
import { Chapter, Reveal } from '../ui/Motion';
import { MacBook } from '../ui/Mockups';
import PatternTile from '../ui/PatternTile';

const DOCK = [
  { t: 'checker', p: 'ember' },
  { t: 'waves', p: 'sky' },
  { t: 'scallop', p: 'mustard' },
  { t: 'dots', p: 'blush' },
  { t: 'cross', p: 'ink' },
];

export default function Education() {
  const ref = useRef(null);
  useScrollProgress(ref, 'view');

  const words = (list, side) =>
    list.map((w, i) => (
      <span key={w} className={`edu__word ${i === list.length - 1 ? 'is-soft' : ''}`} style={{ '--i': i }} data-side={side}>
        {w}
      </span>
    ));

  return (
    <section id="education" className="edu" ref={ref}>
      <div className="edu__bg grain" />
      <Chapter label={education.label} chapter={education.chapter} className="chap--dark" />

      <div className="edu__grid">
        <h2 className="display edu__words edu__words--left" aria-label={`${education.left.join(' ')} ${education.right.join(' ')}`}>
          {words(education.left, 'l')}
        </h2>
        <div className="display edu__words edu__words--right" aria-hidden="true">
          {words(education.right, 'r')}
        </div>

        <div className="edu__mac">
          <MacBook>
            <div className="macui">
              <div className="macui__menubar">
                <strong>{site.initials}</strong>
                <span>Degree</span>
                <span>File</span>
                <span>View</span>
                <span className="macui__clock">{education.period}</span>
              </div>

              <div className="macui__window">
                <div className="macui__bar">
                  <i />
                  <i />
                  <i />
                  <span>{education.school}</span>
                </div>
                <div className="macui__body">
                  <div className="macui__art">
                    <PatternTile type="scallop" palette="mustard" shape="shield" className="macui__shield" />
                    <span>{education.period}</span>
                  </div>
                  <div className="macui__info">
                    <div className="macui__dots">
                      <i className="on" />
                      <i />
                      <i />
                    </div>
                    <p className="macui__title">
                      {education.degree}
                      <br />
                      {education.field}
                    </p>
                    <p className="macui__sub">{education.school}</p>
                    <div className="macui__pills">
                      {education.focus.map((f, i) => (
                        <span key={f} className={i === 0 ? 'on' : ''}>
                          {f}
                        </span>
                      ))}
                    </div>
                    <ul className="macui__modules">
                      {education.modules.map((m, i) => (
                        <li key={m} style={{ '--i': i }}>
                          <span>{String(i + 1).padStart(2, '0')}</span>
                          {m}
                          <b>✓</b>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="macui__dock">
                {DOCK.map((d, i) => (
                  <PatternTile key={i} type={d.t} palette={d.p} shape="square" className="macui__app" />
                ))}
              </div>
            </div>
          </MacBook>
        </div>

        <Reveal as="p" className="fade-up edu__text edu__text--l">
          {education.leftText}
        </Reveal>
        <Reveal as="p" className="fade-up edu__text edu__text--r">
          {education.rightText}
        </Reveal>
      </div>
    </section>
  );
}
