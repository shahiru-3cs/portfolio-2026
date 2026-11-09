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
  // Used by the live "clock's running" counter (your first day as a developer). DUMMY date.
  careerStart: '2022-06-01T09:00:00+05:30',
  socials: [
    { label: 'GitHub', href: 'https://github.com/shahirur' }, // DUMMY
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shahiru93/' }, // DUMMY
  ],
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
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

export const contact = {
  label: 'Contact',
  chapter: '08',
  kicker: 'Stop scrolling. Start building.',
  text: 'I’m taking on a small number of freelance projects. Tell me what you’re building and I’ll get back to you within a day.',
  cta: 'LET’S TALK',
  note: 'Freelance · Remote · Replies within 24h',
  footerLine: 'Real code. Shipped fast.',
};
