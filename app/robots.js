import { site } from '../data/portfolio';

export const dynamic = 'force-static';

// AI answer engines and assistants are allowed on purpose (AEO): being crawlable is
// what lets ChatGPT, Claude, Perplexity, Gemini and Copilot cite this site.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'DuckAssistBot',
  'Meta-ExternalAgent',
  'cohere-ai',
  'CCBot',
];

export default function robots() {
  const base = site.url.replace(/\/$/, '');
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_BOTS, allow: '/' },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
