import { faq } from '../../data/portfolio';
import { Chapter, Reveal, SplitLines } from '../ui/Motion';

// Answers live in the HTML (native <details>), so search engines and AI crawlers
// read them without running JavaScript. Mirrors the FAQPage JSON-LD in lib/schema.js.
export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="faq__glow" />
      <Chapter label={faq.label} chapter={faq.chapter} />

      <div className="faq__inner">
        <div className="faq__head">
          <SplitLines className="display faq__title" lines={faq.heading} />
          <Reveal as="p" className="fade-up faq__text">
            {faq.text}
          </Reveal>
        </div>

        <div className="faq__list">
          {faq.items.map((f, i) => (
            <details className="faq__item" key={f.q} open={i === 0}>
              <summary className="faq__q">
                <span className="faq__no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.q}</h3>
                <i className="faq__icon" aria-hidden="true" />
              </summary>
              <p className="faq__a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
