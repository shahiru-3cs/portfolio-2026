// /llms.txt — a plain-text summary of the site for AI assistants and answer engines
// (proposed standard: https://llmstxt.org). Generated from data/portfolio.js at build time.
import { site, seo, about, experience, education, projects, services, skills, faq } from '../../data/portfolio';

export const dynamic = 'force-static';

export function GET() {
  const base = site.url.replace(/\/$/, '');
  const lines = [
    `# ${site.name}`,
    '',
    `> ${seo.summary}`,
    '',
    about.bio,
    '',
    '## Key facts',
    `- Name: ${site.name}`,
    `- Role: ${seo.jobTitle} at ${seo.employer.name}`,
    `- Location: ${site.location} (works remotely)`,
    `- Availability: ${site.availability}`,
    `- Education: ${education.degree} ${education.field}, ${education.school}`,
    `- Core skills: ${skills.groups.flatMap((g) => g.items).join(', ')}`,
    `- Email: ${site.email}`,
    `- Phone: ${site.phone}`,
    `- Website: ${base}/`,
    ...site.socials.filter((s) => s.href && s.href !== '#').map((s) => `- ${s.label}: ${s.href}`),
    '',
    '## Experience',
    ...experience.roles.map((r) => `- ${r.title}, ${r.company} (${r.period.replace('—', '-')}): ${r.points.map((p) => p.name).join('; ')}`),
    '',
    '## Services',
    ...services.items.map((s) => `- [${s.name}](${base}/#services): ${s.desc} Includes ${s.points.join(', ')}.`),
    '',
    '## Projects',
    ...projects.items.map((p) => `- [${p.name}](${p.live}): ${p.desc} Built with ${p.tech.join(', ')}.`),
    '',
    '## FAQ',
    ...faq.items.flatMap((f) => [`### ${f.q}`, f.a, '']),
    '## Pages',
    `- [Home](${base}/): portfolio, experience, projects, services and contact`,
    `- [Sitemap](${base}/sitemap.xml)`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
