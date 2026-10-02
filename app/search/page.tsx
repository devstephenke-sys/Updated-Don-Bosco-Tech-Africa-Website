'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { searchGlobal } from '@/content';
import { 
  Search as SearchIcon, 
  FileText, 
  Newspaper, 
  Layers, 
  Building2, 
  Calendar, 
  Briefcase,
  ArrowRight,
  Globe
} from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const rawResults = useMemo(() => {
    if (!query.trim()) return [];
    return searchGlobal(query);
  }, [query]);

  const results = useMemo(() => {
    if (selectedCategory === 'all') return rawResults;
    return rawResults.filter((r) => r.category.toLowerCase().includes(selectedCategory.toLowerCase()));
  }, [rawResults, selectedCategory]);

  return (
    <div>
      <PageHero
        title="Global Search"
        subtitle="Search across all Don Bosco Tech Africa publications, projects, news dispatches, events, and provincial TVET networks."
        badge="Unified Index"
        breadcrumbs={[
          { label: 'Search' },
        ]}
      />

      <section className="py-16 bg-slate-50 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Input Bar */}
          <div className="relative mb-8">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for solar PV, agriculture, RPL, tracer studies, Kenya, AFE..."
              className="w-full pl-13 pr-4 py-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 text-base sm:text-lg shadow-sm transition-all"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-brand-navy text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Categories
            </button>
            {[
              { id: 'projects', label: 'Projects & Programmes' },
              { id: 'knowledge', label: 'Knowledge Hub' },
              { id: 'news', label: 'News & Media' },
              { id: 'country', label: 'Country Networks' },
              { id: 'impact', label: 'Impact Stories' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          {query.trim() && (
            <div className="mb-6 text-xs sm:text-sm text-slate-500 font-semibold">
              Found {results.length} result{results.length === 1 ? '' : 's'} for "{query}"
            </div>
          )}

          {/* Results List */}
          <div className="space-y-4">
            {results.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className="block p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-navy/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-semibold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-xs font-bold text-brand-navy group-hover:text-brand-accent transition-colors">
                  View Record <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

            {query.trim() && results.length === 0 && (
              <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8">
                <SearchIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-800">No results found</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
                  Try adjusting your search terms or exploring by topic like "Green TVET", "Solar", "Tracer", or "Kenya".
                </p>
              </div>
            )}

            {!query.trim() && (
              <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8">
                <SearchIcon className="w-12 h-12 text-brand-navy/30 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-800">Search the Continental Platform</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
                  Enter keywords above to find research papers, project details, news dispatches, or provincial office information.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
