'use client';

import { useRef } from 'react';
import { about, site, hero } from '../../data/portfolio';
import { useScrollProgress } from '../../lib/scroll';
import { Chapter, Reveal, SplitLines } from '../ui/Motion';
import PatternTile from '../ui/PatternTile';

const INDENTS = ['30%', '14%', '6%', '30%'];

export default function About() {
  const ref = useRef(null);
  useScrollProgress(ref, 'view');

  return (
    <section id="about" className="about" ref={ref}>
      <Chapter label={about.label} chapter={about.chapter} />
      <div className="about__inner">
        <SplitLines
          className="display about__title"
          lines={about.lines.map((text, i) => ({ text, indent: INDENTS[i % INDENTS.length] }))}
        />
        <div className="about__body">
          <Reveal as="p" className="fade-up about__bio">
            {about.bio}
          </Reveal>

          <Reveal className="fade-up about__cardWrap">
            <article className="qcard qcard--profile">
              <header className="qcard__head">
                <PatternTile type="checker" palette="ink" shape="square" className="qcard__icon" />
                <span>{site.role}</span>
                <span className="status">
                  <i /> Available
                </span>
              </header>
              <h3 className="qcard__title">{site.name}</h3>
              <p className="qcard__body">{site.availability}. Based in {site.location}.</p>
              <div className="qcard__chips">
                {hero.cards[0].chips.concat('JavaScript').map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
