'use client';

import React, { useState, useMemo } from 'react';
import { NewsArticle } from '@/content';
import { NewsCard } from '@/components/cards/NewsCard';
import { Pagination } from '@/components/ui/Pagination';
import { Search, Filter, Newspaper } from 'lucide-react';

interface NewsDirectoryProps {
  initialArticles: NewsArticle[];
}

const PAGE_SIZE = 6;

export function NewsDirectory({ initialArticles }: NewsDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Derive categories
  const categories = useMemo(() => {
    const set = new Set(initialArticles.map((a) => a.category));
    return ['All', ...Array.from(set)];
  }, [initialArticles]);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const contentStr = Array.isArray(article.content)
        ? article.content.join(' ')
        : (article.content || '');

      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contentStr.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialArticles, searchQuery, selectedCategory]);

  // Reset to page 1 on filter change
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredArticles.slice(start, start + PAGE_SIZE);
  }, [filteredArticles, currentPage]);

  return (
    <div className="space-y-8">
      {/* Interactive Controls & Filters */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search news, reports, conferences..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results */}
      {paginatedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8 space-y-3">
          <Newspaper className="w-10 h-10 text-slate-300 mx-auto" />
          <h4 className="text-base font-bold text-slate-900">No articles found</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            We couldn't find any news articles matching "{searchQuery}". Try searching with different keywords or clearing filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredArticles.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
