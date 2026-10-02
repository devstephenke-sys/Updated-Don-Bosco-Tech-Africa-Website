import { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { knowledgeItems } from '@/content/knowledge';
import { newsArticles } from '@/content/news';
import { events } from '@/content/events';
import { stories } from '@/content/stories';
import { thematicAreas } from '@/content/thematicAreas';
import { opportunities } from '@/content/opportunities';

const BASE_URL = 'https://dbtechafrica.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/about/who-we-are',
    '/about/history',
    '/about/mission-vision',
    '/about/values',
    '/about/board',
    '/about/p-tvet-network',
    '/about/governance',
    '/what-we-do',
    '/network',
    '/projects',
    '/impact',
    '/stories',
    '/knowledge',
    '/news',
    '/events',
    '/media',
    '/opportunities',
    '/resources',
    '/contact',
    '/search',
    '/privacy',
    '/terms',
    '/accessibility',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const thematicRoutes = thematicAreas.map((t) => ({
    url: `${BASE_URL}/what-we-do/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const knowledgeRoutes = knowledgeItems.map((k) => ({
    url: `${BASE_URL}/knowledge/${k.slug}`,
    lastModified: k.publishDate ? new Date(k.publishDate) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const newsRoutes = newsArticles.map((n) => ({
    url: `${BASE_URL}/news/${n.slug}`,
    lastModified: n.publishedDate ? new Date(n.publishedDate) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const eventRoutes = events.map((e) => ({
    url: `${BASE_URL}/events/${e.slug}`,
    lastModified: e.date ? new Date(e.date) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const storyRoutes = stories.map((s) => ({
    url: `${BASE_URL}/stories/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const oppRoutes = opportunities.map((o) => ({
    url: `${BASE_URL}/opportunities/${o.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...thematicRoutes,
    ...knowledgeRoutes,
    ...newsRoutes,
    ...eventRoutes,
    ...storyRoutes,
    ...oppRoutes,
  ];
}
