'use client';

import React, { useState, useMemo } from 'react';
import { ImpactStory } from '@/content';
import { StoryCard } from '@/components/cards/StoryCard';
import { Pagination } from '@/components/ui/Pagination';
import { Search, Users } from 'lucide-react';

interface StoriesDirectoryProps {
  initialStories: ImpactStory[];
}

const PAGE_SIZE = 6;

export function StoriesDirectory({ initialStories }: StoriesDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Derive distinct countries
  const countries = useMemo(() => {
    const set = new Set(initialStories.map((s) => s.country));
    return ['All', ...Array.from(set)];
  }, [initialStories]);

  // Filtered stories
  const filteredStories = useMemo(() => {
    return initialStories.filter((story) => {
      const titleMatch = story.title.toLowerCase().includes(searchQuery.toLowerCase());
      const nameMatch = story.protagonistName.toLowerCase().includes(searchQuery.toLowerCase());
      const quoteMatch = story.quote.toLowerCase().includes(searchQuery.toLowerCase());
      const roleMatch = story.role.toLowerCase().includes(searchQuery.toLowerCase());
      const centreMatch = story.centre.toLowerCase().includes(searchQuery.toLowerCase());

      const countryMatch = selectedCountry === 'All' || story.country === selectedCountry;

      return (titleMatch || nameMatch || quoteMatch || roleMatch || centreMatch) && countryMatch;
    });
  }, [initialStories, searchQuery, selectedCountry]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredStories.length / PAGE_SIZE);
  const paginatedStories = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredStories.slice(start, start + PAGE_SIZE);
  }, [filteredStories, currentPage]);

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search by student name, trade, or TVET centre..."
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

        {/* Country filter pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
            Country:
          </span>
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => handleCountryChange(country)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCountry === country
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results */}
      {paginatedStories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8 space-y-3">
          <Users className="w-10 h-10 text-slate-300 mx-auto" />
          <h4 className="text-base font-bold text-slate-900">No stories found</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No graduate stories matched your search. Try different terms or reset your filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCountry('All');
            }}
            className="px-4 py-2 bg-orange-50 text-orange-700 text-xs font-bold rounded-lg hover:bg-orange-100 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredStories.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
