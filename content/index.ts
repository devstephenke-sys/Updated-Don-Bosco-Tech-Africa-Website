export * from './types';
export * from './stats';
export * from './about';
export * from './governance';
export * from './provinces';
export * from './countries';
export * from './thematicAreas';
export * from './projects';
export * from './stories';
export * from './knowledge';
export * from './news';
export * from './events';
export * from './opportunities';
export * from './digitalServices';
export * from './partners';

import { countries } from './countries';
import { provinces } from './provinces';
import { projects } from './projects';
import { impactStories } from './stories';
import { newsArticles } from './news';
import { knowledgeResources } from './knowledge';
import { opportunities } from './opportunities';

export function getCountryBySlug(slug: string) {
  return countries.find((c) => c.slug === slug || c.code.toLowerCase() === slug.toLowerCase());
}

export function getProvinceByCode(code: string) {
  return provinces.find((p) => p.code.toLowerCase() === code.toLowerCase());
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getStoryBySlug(slug: string) {
  return impactStories.find((s) => s.slug === slug);
}

export function getNewsBySlug(slug: string) {
  return newsArticles.find((n) => n.slug === slug);
}

export function getOpportunityBySlug(slug: string) {
  return opportunities.find((o) => o.slug === slug);
}

export function getResourceBySlug(slug: string) {
  return knowledgeResources.find((k) => k.slug === slug);
}

export function searchGlobal(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: Array<{
    title: string;
    description: string;
    url: string;
    category: string;
    badge?: string;
  }> = [];

  // Search countries
  countries.forEach((c) => {
    if (c.name.toLowerCase().includes(q) || c.keyTrades.some((t) => t.toLowerCase().includes(q)) || c.summary.toLowerCase().includes(q)) {
      results.push({
        title: `${c.name} TVET Network`,
        description: `${c.centreCount} TVET centres in ${c.provinceName}. Key trades: ${c.keyTrades.slice(0, 3).join(', ')}.`,
        url: `/network?country=${c.slug}`,
        category: 'Country Network',
        badge: `${c.centreCount} Centres`,
      });
    }
  });

  // Search projects
  projects.forEach((p) => {
    if (p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q) || p.thematicArea.toLowerCase().includes(q)) {
      results.push({
        title: p.title,
        description: p.summary,
        url: `/projects/${p.slug}`,
        category: 'Projects & Programmes',
        badge: p.thematicArea,
      });
    }
  });

  // Search stories
  impactStories.forEach((s) => {
    if (s.title.toLowerCase().includes(q) || s.protagonistName.toLowerCase().includes(q) || s.trade.toLowerCase().includes(q) || s.challenge.toLowerCase().includes(q)) {
      results.push({
        title: s.title,
        description: `${s.protagonistName} (${s.role}, ${s.country}) - ${s.outcome}`,
        url: `/stories/${s.slug}`,
        category: 'Impact Story',
        badge: s.country,
      });
    }
  });

  // Search news
  newsArticles.forEach((n) => {
    if (n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q) || n.tags.some((t) => t.toLowerCase().includes(q))) {
      results.push({
        title: n.title,
        description: n.excerpt,
        url: `/news/${n.slug}`,
        category: 'News & Media',
        badge: n.category,
      });
    }
  });

  // Search knowledge resources
  knowledgeResources.forEach((k) => {
    if (k.title.toLowerCase().includes(q) || k.topic.toLowerCase().includes(q) || k.description.toLowerCase().includes(q)) {
      results.push({
        title: k.title,
        description: k.description,
        url: `/knowledge?search=${encodeURIComponent(k.title)}`,
        category: 'Knowledge Hub',
        badge: k.type,
      });
    }
  });

  return results;
}
