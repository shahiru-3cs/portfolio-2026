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
  sub: 'Two companies, five projects. Here’s the path so far.',
  roles: [
    {
      company: '3CS Asia',
      title: 'Associate React Developer',
      period: '2023 — Present', // DUMMY dates
      projects: [
        // DUMMY projects
        {
          name: 'Client Admin Dashboard',
          desc: 'A React dashboard with role-based access, filterable data tables and live charts for a logistics client.',
          tech: ['React', 'Tailwind CSS', 'REST API'],
          mock: 'table',
          pattern: 'checker',
          palette: 'ink',
        },
        {
          name: 'Corporate Website Revamp',
          desc: 'Rebuilt a slow multi-page site in Next.js. Lighthouse performance went from the 50s to the high 90s.',
          tech: ['Next.js', 'SEO', 'Vercel'],
          mock: 'hero',
          pattern: 'waves',
          palette: 'cobalt',
        },
        {
          name: 'Booking Platform UI',
          desc: 'A reusable Tailwind component library and a three-step booking flow shared across two products.',
          tech: ['React', 'Tailwind CSS', 'Storybook'],
          mock: 'grid',
          pattern: 'dots',
          palette: 'mustard',
        },
      ],
    },
    {
      company: 'Syeta Labs',
      title: 'Software Engineer Intern',
      period: '2022 — 2023', // DUMMY dates
      projects: [
        // DUMMY projects
        {
          name: 'Internal HR Portal',
          desc: 'React front end for leave requests, attendance and approvals, used by the whole office every day.',
          tech: ['React', 'JavaScript', 'Firebase'],
          mock: 'chart',
          pattern: 'zigzag',
          palette: 'blush',
        },
        {
          name: 'Landing Page Builder',
          desc: 'Configurable page sections so the marketing team could launch new pages without waiting on a developer.',
          tech: ['React', 'CSS Modules', 'Netlify'],
          mock: 'columns',
          pattern: 'scallop',
          palette: 'ember',
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
      glow: '#1DB954',
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
      glow: '#E8442E',
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
      glow: '#2F5BFF',
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
