import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Newspaper } from 'lucide-react';
import { newsArticles, knowledgeResources } from '@/content';

export function KnowledgeAndNewsEditorial() {
  const latestNews = newsArticles.slice(0, 2);
  const keyResources = knowledgeResources.slice(0, 2);

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/70" id="knowledge-news">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 reveal">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block mb-3">
            INSIGHTS & UPDATES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Knowledge & Continental News
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Latest News */}
          <div className="lg:col-span-6 space-y-6 reveal reveal-left">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-[#003366]" />
                <span>Latest from DBTA</span>
              </h3>
              <Link
                href="/news"
                className="text-xs font-bold text-[#D32F2F] hover:text-[#B71C1C] flex items-center gap-1 transition-colors"
              >
                <span>View all news</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-slate-200">
              {latestNews.map((article) => (
                <article key={article.id} className="py-6 first:pt-2 space-y-2 group card-lift rounded-lg px-1">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    {article.publishedDate || article.publishDate} · {article.category}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug">
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="pt-1">
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 group-hover:text-[#D32F2F] transition-colors"
                    >
                      <span>Read article</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Explore Knowledge Hub */}
          <div className="lg:col-span-6 space-y-6 reveal reveal-right">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#003366]" />
                <span>Publications & Toolkits</span>
              </h3>
              <Link
                href="/knowledge"
                className="text-xs font-bold text-[#D32F2F] hover:text-[#B71C1C] flex items-center gap-1 transition-colors"
              >
                <span>Visit Knowledge Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-slate-200">
              {keyResources.map((resource) => (
                <div key={resource.id} className="py-6 first:pt-2 space-y-2 group">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-sm bg-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                      {resource.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {resource.format} · {resource.fileSize}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug">
                    <Link href={`/knowledge/${resource.slug}`}>
                      {resource.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="pt-1">
                    <Link
                      href={`/knowledge/${resource.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 group-hover:text-[#D32F2F] transition-colors"
                    >
                      <span>Access document</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
