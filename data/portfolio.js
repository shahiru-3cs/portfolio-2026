// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit this file to change text, projects, links and contacts.
//  Items marked "DUMMY" are placeholders: replace with real data.
//
//  Patterns:  checker | waves | dots | stripes | zigzag | scallop | cross
//  Palettes:  ember | ink | mustard | sky | blush | cobalt | cream | forest
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Shahiru Roshen',
  firstName: 'Shahiru',
  initials: 'SR',
  role: 'Associate Developer',
  tagline: 'Associate React Developer building fast, accessible interfaces. Open to freelance work.',
  availability: 'Open to freelance work',
  url: 'https://shahiruroshen.com', // DUMMY: your final domain
  location: 'Gampaha, Sri Lanka', // DUMMY
  email: 'connect.shahiru@gmail.com', // DUMMY
  phone: '+94 77 009 7728', // DUMMY
  whatsappMessage: 'Hi Shahiru, I visited your portfolio and would like to start a Web Development / SEO project.',
  // Used by the live "clock's running" counter (your first day as a developer). DUMMY date.
  careerStart: '2022-06-01T09:00:00+05:30',
  socials: [
    { label: 'GitHub', href: 'https://github.com/shahirur' }, // DUMMY
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shahiru93/' }, // DUMMY
  ],
};

// ─────────────────────────────────────────────────────────────
//  SEO / AEO SETTINGS
//  Used by app/layout.jsx (meta tags), lib/schema.js (JSON-LD),
//  app/sitemap.js, app/robots.js and app/llms.txt.
// ─────────────────────────────────────────────────────────────
export const seo = {
  // <title>: keep it under ~60 characters. Name first, then what you do and where.
  title: 'Shahiru Roshen — React & Next.js Developer, Sri Lanka',
  // Meta description: 140–160 characters, answer-first.
  description:
    'Shahiru Roshen is a React & Next.js developer in Sri Lanka building fast, accessible, SEO-friendly websites. Associate Developer at 3CS Asia. Open to freelance.',
  // Longer summary used in structured data and llms.txt.
  summary:
    'Shahiru Roshen is a React and Next.js developer based in Gampaha, Sri Lanka. He works as an Associate React Developer at 3CS Asia, holds a BEng (Hons) in Software Engineering from the University of Westminster, and builds fast, accessible, SEO-friendly websites and web apps for freelance clients worldwide.',
  jobTitle: 'Associate React Developer',
  keywords: [
    'Shahiru Roshen',
    'React developer Sri Lanka',
    'Next.js developer Sri Lanka',
    'freelance web developer Sri Lanka',
    'frontend developer Gampaha',
    'React developer',
    'Next.js developer',
    'Tailwind CSS developer',
    'Figma to React',
    'website speed optimisation',
    'Core Web Vitals',
    'technical SEO',
    'web accessibility',
    'hire React developer',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'HTML5',
    'CSS3',
    'REST APIs',
    'Responsive web design',
    'Web accessibility (WCAG)',
    'Core Web Vitals',
    'Technical SEO',
    'Web performance optimisation',
    'Component architecture',
    'Git',
  ],
  locale: 'en_US',
  language: 'en',
  country: 'LK',
  region: 'LK-12', // ISO 3166-2 code for Gampaha District
  locality: 'Gampaha',
  ogImage: '/og-image.png', // 1200×630, in /public
  ogImageAlt: 'Shahiru Roshen — React & Next.js Developer. Fast, accessible, SEO-ready websites and web apps.',
  twitterHandle: '', // e.g. '@shahiru' — leave empty if you don't use X/Twitter
  // Paste the codes from Google Search Console / Bing Webmaster Tools (HTML tag method).
  googleVerification: '',
  bingVerification: '',
  employer: { name: '3CS Asia', url: '' }, // add the company URL if it has one
  school: { name: 'University of Westminster', url: 'https://www.westminster.ac.uk' },
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  title: 'SHAHIRU ROSHEN',
  cards: [
    {
      kicker: '3CS Asia · Now',
      title: 'Shipping React interfaces that feel effortless.',
      body: 'Associate React Developer turning Figma files into production UI.',
      chips: ['React', 'Next.js', 'Tailwind'],
      pattern: 'waves',
      palette: 'sky',
    },
    {
      kicker: 'Freelance · Open',
      title: 'Got a project? Let’s build it together.',
      body: 'Available for websites, landing pages and React apps.',
      chips: ['Remote', 'Fast replies'],
      pattern: 'checker',
      palette: 'ink',
    },
    {
      kicker: 'Syeta Labs · Day one',
      title: 'It started with a year-long internship.',
      body: 'Where I wrote my first production React code.',
      chips: ['Internship', '1 year'],
      pattern: 'scallop',
      palette: 'ember',
    },
  ],
};

export const about = {
  label: 'About Me',
  chapter: '01',
  lines: ['GOOD INTERFACES', 'FEEL EFFORTLESS.', 'BUILDING THEM', 'IS THE HARD PART.'],
  bio: 'I’m a React developer with over two years of professional experience building fast, responsive and accessible web applications. I currently work as an Associate React Developer at 3CS Asia, where I turn designs into production-ready interfaces with React, Next.js and Tailwind CSS. My career started with a year-long software engineering internship at Syeta Labs. I care about clean, maintainable code and good user experience, and I’m always looking for interesting freelance projects.',
};

export const uptime = {
  label: 'Since Day One',
  chapter: '02',
  heading: ['FIRST COMMIT IN.', 'CLOCK’S RUNNING.'],
  counterLabel: 'days · hours · minutes · seconds since my first day as a developer',
  left: 'It started with a one-year internship at Syeta Labs. The clock hasn’t stopped since: more components, more pages, more shipped work.',
  right: 'That counter is live. It’s the time since my first day writing code for a living, and it ticks a little further every time you look. Two-plus years of React, Next.js and Tailwind, and still learning something new every week.',
  phone: {
    title: 'Currently building',
    body: 'Associate React Developer at 3CS Asia. Open to freelance work on the side.',
    listTitle: 'This week', // DUMMY list
    list: ['Shipped a booking flow', 'Reviewed 6 pull requests', 'Fixed 12 a11y issues', 'Lighthouse score: 98'],
  },
};

export const experience = {
  label: 'Experience',
  chapter: '03',
  headingStart: 'IT STARTED AS ONE',
  headingEnd: 'INTERNSHIP.',
  headingLine2: 'IT RARELY STAYS THAT WAY.',
  sub: 'Two companies, continuous growth. Here’s the path so far.',
  roles: [
    {
      company: '3CS Asia',
      title: 'Associate React Developer',
      period: '2023 — Present',
      points: [
        {
          name: 'Create Next.js & React Websites',
          desc: 'Architecting and developing fast, responsive web applications with Next.js and React, prioritizing clean code, structured routing, SEO, and accessible user experiences.',
          tech: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'],
        },
        {
          name: 'Create Reusable Components',
          desc: 'Designing modular, scalable UI component libraries with Tailwind CSS to ensure design consistency, streamline feature delivery, and eliminate code duplication.',
          tech: ['React', 'Tailwind CSS', 'Component Architecture', 'UI/UX'],
        },
        {
          name: 'Improve Web Performance',
          desc: 'Auditing bundle sizes, code-splitting, lazy-loading assets, and optimizing Core Web Vitals to deliver smooth interactions and 90+ Lighthouse performance scores.',
          tech: ['Performance', 'Core Web Vitals', 'Lighthouse', 'SEO'],
        },
      ],
    },
    {
      company: 'Syeta Labs',
      title: 'Software Engineer Intern',
      period: '2022 — 2023',
      points: [
        {
          name: 'Build Responsive Interfaces',
          desc: 'Transformed Figma design concepts into mobile-first, pixel-accurate web interfaces using React, HTML5, and modern CSS/Tailwind.',
          tech: ['React', 'JavaScript', 'HTML5 & CSS3', 'Responsive Design'],
        },
        {
          name: 'State Management & React Hooks',
          desc: 'Implemented interactive UI workflows, state handling, and client-side form validations using React hooks and functional component best practices.',
          tech: ['React Hooks', 'State Management', 'ES6+'],
        },
        {
          name: 'API Integration & Async Flows',
          desc: 'Connected frontend components with backend REST APIs, handled async data loading states, resolved cross-browser defects, and collaborated with Git.',
          tech: ['REST APIs', 'Git', 'Debugging', 'Async/Await'],
        },
      ],
    },
  ],
};

export const education = {
  label: 'Education',
  chapter: '04',
  left: ['LEARNED', 'THE', 'BASICS'],
  right: ['THEN', 'BUILT', 'ON THEM'],
  degree: 'BEng (Hons)',
  field: 'Software Engineering',
  school: 'University of Westminster',
  period: '2019 — 2023', // DUMMY dates
  focus: ['Frontend', 'Algorithms', 'Architecture'],
  // DUMMY modules, shown on the MacBook screen
  modules: ['Web Development', 'Data Structures & Algorithms', 'Software Architecture', 'Databases', 'Human-Computer Interaction'],
  leftText: 'A BEng (Hons) in Software Engineering from the University of Westminster gave me the foundations: data structures, software design, testing, and how real teams ship software.',
  rightText: 'The degree taught me how to think about problems. The internship and two years at 3CS Asia taught me how to ship. Both show up in every pull request I open.',
};

export const projects = {
  label: 'Projects',
  chapter: '05',
  closing: ['THREE PROJECTS.', 'ALL SHIPPED.'],
  items: [
    // DUMMY projects
    {
      name: 'Ramidu',
      lines: ['RAMIDU'],
      short: 'Live music, Spotify streaming, and artist releases in one place.',
      desc: 'An artist website integrating Spotify Web APIs to stream tracks, display official discography, and showcase upcoming events with Next.js and Tailwind CSS.',
      tech: ['Next.JS', 'Tailwind CSS', 'Spotify APIs'],
      live: 'https://ramidu.pages.dev/',
      github: '#',
      image: '/ramidu.webp',
      mock: 'chart',
      pattern: 'dots',
      palette: 'mustard',
      glow: '#E8442E',
    },
    {
      name: 'Nimroo Bridal',
      lines: ['NIMROO BRIDAL'],
      short: 'A luxury bridal couture catalog and appointment booking experience.',
      desc: 'A bespoke bridal wear platform built with Next.js and Node.js, featuring high-resolution collection lookbooks, intuitive styling inquiries, and fast load times.',
      tech: ['Next.js', 'Tailwind CSS', 'Node.JS'],
      live: 'https://nimroobridal.lk/',
      github: '#',
      image: '/nimroo.webp',
      mock: 'grid',
      pattern: 'checker',
      palette: 'ember',
      glow: '#fef1f2',
    },
    {
      name: 'Alokana Red',
      lines: ['ALOKANA RED'],
      short: 'An apparel storefront with PayHere checkout and KOKO installment plans.',
      desc: 'A high-performance modern fashion store featuring dynamic product catalogs and smooth checkout flows powered by PayHere and KOKO installment payments.',
      tech: ['Next.JS', 'Tailwind CSS', 'Node.JS', 'PayHere', "KOKO"],
      live: 'https://www.alokanaverse.com/',
      github: '#',
      image: '/alokana.webp',
      mock: 'columns',
      pattern: 'waves',
      palette: 'cobalt',
      glow: '#7f0002ff',
    },
  ],
};

export const skills = {
  label: 'Skills',
  chapter: '06',
  heading: ['EVERY PROJECT', 'LANDS SOMEWHERE.'],
  text: 'Each build adds to the stack. Some tools I reach for every day, some I picked up because a project needed them. Either way, it adds up to a developer who can take a design from Figma to a live URL.',
  stats: [
    { label: 'Years building', value: 2, suffix: '+' },
    { label: 'Projects shipped', value: 12, suffix: '' }, // DUMMY
    { label: 'Core technologies', value: 7, suffix: '' },
    { label: 'Companies', value: 2, suffix: '' },
  ],
  groups: [
    { label: 'Languages', items: ['JavaScript'] },
    { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
    { label: 'Tools', items: ['Git', 'Vercel', 'Netlify'] },
  ],
};

export const services = {
  label: 'Services',
  chapter: '07',
  kicker: 'Pick one. Or tell me what you need.',
  heading: ['PICK A SERVICE.', 'I’LL HANDLE', 'THE REST.'],
  items: [
    // DUMMY services
    {
      name: 'Web Development',
      desc: 'Responsive websites and web apps built with React and Next.js, from first commit to deploy.',
      points: ['Next.js & React builds', 'CMS & API integration', 'Deploys to Vercel, Netlify or Cloudflare'],
      pattern: 'cross',
      palette: 'ember',
    },
    {
      name: 'Frontend Development',
      desc: 'Your Figma designs turned into pixel-accurate, accessible, reusable components.',
      points: ['Figma to code', 'Component libraries', 'Animations & interactions'],
      pattern: 'waves',
      palette: 'sky',
    },
    {
      name: 'Website Optimisation',
      desc: 'Faster load times, better SEO and fewer accessibility issues on the site you already have.',
      points: ['Core Web Vitals', 'Technical SEO', 'Accessibility fixes'],
      pattern: 'checker',
      palette: 'ink',
    },
  ],
  closingKicker: 'How I work',
  closing: ['EVERY BUILD IS', 'CENTERED ON', 'THE PEOPLE USING IT.'],
  closingText: 'Clear updates. Clean, readable code. Interfaces that work on every screen and for every user, not just on my laptop. You get a site you can maintain after I hand it over, and a developer who answers messages.',
};

export const faq = {
  label: 'FAQ',
  chapter: '08',
  heading: ['QUESTIONS,', 'ANSWERED.'],
  text: 'Short answers to what people usually ask before we start working together.',
  // Each answer starts with the direct answer in the first sentence. Search engines
  // and AI assistants (ChatGPT, Perplexity, Gemini, Google AI Overviews) quote these.
  items: [
    {
      q: 'Who is Shahiru Roshen?',
      a: 'Shahiru Roshen is a React and Next.js developer based in Gampaha, Sri Lanka. He works as an Associate React Developer at 3CS Asia, holds a BEng (Hons) in Software Engineering from the University of Westminster, and takes on freelance web projects.',
    },
    {
      q: 'What services does Shahiru Roshen offer?',
      a: 'Shahiru offers three services: web development (React and Next.js websites and web apps), frontend development (turning Figma designs into accessible, reusable components), and website optimisation (Core Web Vitals, technical SEO and accessibility fixes for existing sites).',
    },
    {
      q: 'Is Shahiru Roshen available for freelance work?',
      a: 'Yes. Shahiru takes on a small number of freelance projects alongside his role at 3CS Asia. He works remotely with clients in Sri Lanka and abroad and replies to new enquiries within 24 hours.',
    },
    {
      q: 'Which technologies does Shahiru Roshen work with?',
      a: 'Shahiru works mainly with React, Next.js, JavaScript and Tailwind CSS, with Node.js for back-end work and REST APIs for integrations. He uses Git for version control and deploys to Vercel, Netlify and Cloudflare.',
    },
    {
      q: 'What websites has Shahiru Roshen built?',
      a: 'Recent projects include Ramidu, an artist website that streams music through the Spotify Web API; Nimroo Bridal, a bridal couture catalogue with appointment enquiries; and Alokana Red, a fashion store with PayHere checkout and KOKO instalment payments.',
    },
    {
      q: 'How much experience does Shahiru Roshen have?',
      a: 'Shahiru has over two years of professional experience. He started with a year-long software engineering internship at Syeta Labs in 2022 and has worked as an Associate React Developer at 3CS Asia since 2023.',
    },
    {
      q: 'Can Shahiru Roshen improve my website’s speed and SEO?',
      a: 'Yes. Shahiru audits existing sites for Core Web Vitals, bundle size, image loading, technical SEO and accessibility, then fixes the issues he finds. His own builds target Lighthouse performance scores of 90 or higher.',
    },
    {
      q: 'How do I hire Shahiru Roshen?',
      a: 'Email connect.shahiru@gmail.com or call +94 77 009 7728 with a short description of your project, your timeline and your budget. Shahiru replies within 24 hours.',
    },
  ],
};

export const contact = {
  label: 'Contact',
  chapter: '09',
  kicker: 'Stop scrolling. Start building.',
  text: 'I’m taking on a small number of freelance projects. Tell me what you’re building and I’ll get back to you within a day.',
  cta: 'LET’S TALK',
  note: 'Freelance · Remote · Replies within 24h',
  footerLine: 'Real code. Shipped fast.',
};
