// ─────────────────────────────────────────────────────────────
//  JSON-LD structured data (schema.org), built from data/portfolio.js.
//  One connected @graph: WebSite → ProfilePage → Person, plus the
//  person's employer, school, services, projects and FAQ.
//  Validate at https://validator.schema.org and
//  https://search.google.com/test/rich-results
// ─────────────────────────────────────────────────────────────
import { site, seo, education, projects, services, skills, faq } from '../data/portfolio';

const base = site.url.replace(/\/$/, '');
const home = `${base}/`;
const id = (name) => `${base}/#${name}`;
const abs = (path) => (path.startsWith('http') ? path : `${base}${path.startsWith('/') ? '' : '/'}${path}`);
const [givenName, ...rest] = site.name.split(' ');
const phone = site.phone.replace(/\s/g, '');

const clean = (obj) => JSON.parse(JSON.stringify(obj, (_, v) => (v === '' || v === undefined ? undefined : v)));

export function buildSchema() {
  const modified = new Date().toISOString();

  const person = {
    '@type': 'Person',
    '@id': id('person'),
    name: site.name,
    givenName,
    familyName: rest.join(' '),
    url: home,
    image: { '@id': id('primaryimage') },
    description: seo.summary,
    disambiguatingDescription: `${seo.jobTitle} at ${seo.employer.name}, based in ${site.location}.`,
    jobTitle: seo.jobTitle,
    worksFor: { '@id': id('employer') },
    alumniOf: { '@id': id('school') },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: `${education.degree} ${education.field}`,
      credentialCategory: 'degree',
      educationalLevel: 'Bachelor’s degree',
      recognizedBy: { '@id': id('school') },
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Front-end Web Developer',
      occupationalCategory: '15-1254.00', // O*NET-SOC: Web Developers
      occupationLocation: { '@type': 'Country', name: 'Sri Lanka' },
      skills: skills.groups.flatMap((g) => g.items).join(', '),
    },
    knowsAbout: seo.knowsAbout,
    email: `mailto:${site.email}`,
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: seo.locality,
      addressCountry: seo.country,
    },
    homeLocation: { '@type': 'Place', name: site.location },
    sameAs: site.socials.map((s) => s.href).filter((h) => h && h !== '#'),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'freelance enquiries',
      email: site.email,
      telephone: phone,
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    makesOffer: services.items.map((s, i) => ({
      '@type': 'Offer',
      itemOffered: { '@id': id(`service-${i + 1}`) },
    })),
  };

  const employer = {
    '@type': 'Organization',
    '@id': id('employer'),
    name: seo.employer.name,
    url: seo.employer.url,
  };

  const school = {
    '@type': 'CollegeOrUniversity',
    '@id': id('school'),
    name: seo.school.name,
    url: seo.school.url,
  };

  const primaryImage = {
    '@type': 'ImageObject',
    '@id': id('primaryimage'),
    url: abs(seo.ogImage),
    contentUrl: abs(seo.ogImage),
    width: 1200,
    height: 630,
    caption: seo.ogImageAlt,
  };

  const website = {
    '@type': 'WebSite',
    '@id': id('website'),
    url: home,
    name: site.name,
    alternateName: [`${site.name} Portfolio`, `${site.firstName} Roshen — React Developer`],
    description: seo.description,
    inLanguage: seo.language,
    publisher: { '@id': id('person') },
    author: { '@id': id('person') },
    copyrightHolder: { '@id': id('person') },
  };

  const webpage = {
    '@type': 'ProfilePage',
    '@id': id('webpage'),
    url: home,
    name: seo.title,
    description: seo.description,
    inLanguage: seo.language,
    isPartOf: { '@id': id('website') },
    about: { '@id': id('person') },
    mainEntity: { '@id': id('person') },
    primaryImageOfPage: { '@id': id('primaryimage') },
    image: { '@id': id('primaryimage') },
    dateModified: modified,
    breadcrumb: { '@id': id('breadcrumb') },
    hasPart: [{ '@id': id('projects') }, { '@id': id('faq') }],
    // Tells voice assistants which parts of the page answer "who is…" questions.
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.about__bio', '.faq__a'],
    },
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': id('breadcrumb'),
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: home }],
  };

  const serviceNodes = services.items.map((s, i) => ({
    '@type': 'Service',
    '@id': id(`service-${i + 1}`),
    name: s.name,
    serviceType: s.name,
    description: s.desc,
    provider: { '@id': id('person') },
    areaServed: [{ '@type': 'Country', name: 'Sri Lanka' }, 'Worldwide'],
    url: `${home}#services`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${s.name} services`,
      itemListElement: s.points.map((pt) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: pt },
      })),
    },
  }));

  const projectList = {
    '@type': 'ItemList',
    '@id': id('projects'),
    name: `Projects by ${site.name}`,
    numberOfItems: projects.items.length,
    itemListElement: projects.items.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        '@id': id(`project-${i + 1}`),
        name: p.name,
        headline: p.short,
        description: p.desc,
        url: p.live && p.live !== '#' ? p.live : `${home}#projects`,
        image: p.image ? abs(p.image) : undefined,
        keywords: p.tech.join(', '),
        creator: { '@id': id('person') },
        author: { '@id': id('person') },
        genre: 'Website',
      },
    })),
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': id('faq'),
    url: `${home}#faq`,
    name: `Frequently asked questions about ${site.name}`,
    inLanguage: seo.language,
    isPartOf: { '@id': id('webpage') },
    about: { '@id': id('person') },
    mainEntity: faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return clean({
    '@context': 'https://schema.org',
    '@graph': [website, webpage, breadcrumb, primaryImage, person, employer, school, ...serviceNodes, projectList, faqPage],
  });
}

/** Safe for dangerouslySetInnerHTML inside <script type="application/ld+json">. */
export function schemaJson() {
  return JSON.stringify(buildSchema()).replace(/</g, '\\u003c');
}
