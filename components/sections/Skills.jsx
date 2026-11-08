'use client';

import { skills } from '../../data/portfolio';
import { Chapter, Counter, Reveal, SplitLines } from '../ui/Motion';
import PatternTile from '../ui/PatternTile';

// Bubble pile layout: x / y = % of the pile box, s = % width. Labelled ones get a skill name.
const SLOTS = [
  { x: -3, y: 0, s: 13, t: 'checker', p: 'ember' },
  { x: 10, y: 0, s: 12.5, t: 'waves', p: 'cobalt', label: true },
  { x: 22.5, y: 0, s: 13.5, t: 'scallop', p: 'mustard', label: true },
  { x: 36, y: 0, s: 12, t: 'dots', p: 'blush', label: true },
  { x: 48, y: 0, s: 13, t: 'checker', p: 'ink', label: true },
  { x: 61, y: 0, s: 12.5, t: 'zigzag', p: 'sky', label: true },
  { x: 73.5, y: 0, s: 13, t: 'cross', p: 'ember', label: true },
  { x: 86.5, y: 0, s: 12, t: 'stripes', p: 'cream' },
  { x: 97, y: 0, s: 11, t: 'waves', p: 'mustard' },
  { x: 4.5, y: 48, s: 9, t: 'dots', p: 'mustard' },
  { x: 29.5, y: 52, s: 10, t: 'stripes', p: 'ember' },
  { x: 54.5, y: 50, s: 10.5, t: 'scallop', p: 'cobalt', label: true },
  { x: 80, y: 50, s: 9.5, t: 'checker', p: 'blush' },
];

export default function Skills() {
  const names = skills.groups.flatMap((g) => g.items);
  let k = 0;
  const bubbles = SLOTS.map((s) => ({ ...s, name: s.label ? names[k++] : null }));

  return (
    <section id="skills" className="skills">
      <div className="skills__glow" />
      <Chapter label={skills.label} chapter={skills.chapter} />

      <div className="skills__head">
        <SplitLines className="display skills__title" lines={skills.heading} />
        <Reveal as="p" className="fade-up skills__text">
          {skills.text}
        </Reveal>
      </div>

      <div className="skills__stats">
        {skills.stats.map((s) => (
          <div className="skills__stat" key={s.label}>
            <span>{s.label}</span>
            <strong>
              <Counter value={s.value} suffix={s.suffix} />
            </strong>
          </div>
        ))}
      </div>

      <div className="skills__groups">
        {skills.groups.map((g) => (
          <p key={g.label}>
            <span>{g.label}</span> {g.items.join(' · ')}
          </p>
        ))}
      </div>

      <Reveal className="pile" threshold={0.3}>
        {bubbles.map((b, i) => (
          <div
            key={i}
            className={`bub ${b.name ? 'bub--label' : ''}`}
            style={{ '--x': `${b.x}%`, '--y': `${b.y}%`, '--s': `${b.s}%`, '--d': `${(i % 9) * 0.09 + (b.y ? 0.6 : 0)}s` }}
          >
            <PatternTile type={b.t} palette={b.p} shape="circle" className="bub__svg" />
            {b.name && <span className="bub__name">{b.name}</span>}
          </div>
        ))}
      </Reveal>
    </section>
  );
}
