'use client';

import { contact, site } from '../../data/portfolio';
import { Chapter, Chars, Reveal } from '../ui/Motion';
import { Mark } from '../ui/Mockups';

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="contact">
      <div className="contact__glow" />
      <Chapter label={contact.label} chapter={contact.chapter} />

      <div className="contact__inner">
        <Reveal className="contact__icon pop">
          <Mark initials={site.initials} className="mark--xl" />
        </Reveal>
        <Reveal as="p" className="fade-up contact__kicker">
          {contact.kicker}
        </Reveal>
        <Reveal as="p" className="fade-up contact__text">
          {contact.text}
        </Reveal>

        <Reveal className="contact__ctaWrap">
          <a href={`mailto:${site.email}`} className="display contact__cta" data-cursor="Email">
            <Chars text={contact.cta} />
          </a>
          <span className="contact__line" />
        </Reveal>
        <p className="contact__note">{contact.note}</p>

        <div className="contact__details">
          <a href={`mailto:${site.email}`}>
            <span>Email</span>
            {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
            <span>Phone</span>
            {site.phone}
          </a>
          <p>
            <span>Based in</span>
            {site.location}
          </p>
        </div>
      </div>

      <footer className="foot">
        <div className="foot__l">
          <span>Designed &amp; built by {site.name}</span>
          <span suppressHydrationWarning>© {year}</span>
        </div>
        <div className="foot__c">
          <span className="brand">
            <Mark initials={site.initials} />
            <span className="brand__word">{site.firstName.toUpperCase()}</span>
          </span>
          <span>{contact.footerLine}</span>
        </div>
        <div className="foot__r">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
