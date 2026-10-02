'use client';

import React, { useState, useMemo } from 'react';
import { Opportunity } from '@/content';
import { OpportunityCard } from '@/components/cards/OpportunityCard';
import { Pagination } from '@/components/ui/Pagination';
import { Search, Briefcase } from 'lucide-react';

interface OpportunitiesDirectoryProps {
  initialOpportunities: Opportunity[];
}

const PAGE_SIZE = 6;

export function OpportunitiesDirectory({ initialOpportunities }: OpportunitiesDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'OPEN' | 'CLOSED'>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Derive distinct categories
  const categories: string[] = useMemo(() => {
    const list = initialOpportunities
      .map((o) => o.category)
      .filter((c): c is string => Boolean(c));
    return ['All', ...Array.from(new Set(list))];
  }, [initialOpportunities]);

  // Filtered
  const filteredOpportunities = useMemo(() => {
    return initialOpportunities.filter((opp) => {
      const titleMatch = opp.title.toLowerCase().includes(searchQuery.toLowerCase());
      const summaryMatch = (opp.summary || '').toLowerCase().includes(searchQuery.toLowerCase());
      const locMatch = opp.location.toLowerCase().includes(searchQuery.toLowerCase());

      const statusMatch =
        statusFilter === 'All' || opp.status.toUpperCase() === statusFilter;

      const categoryMatch =
        categoryFilter === 'All' || opp.category === categoryFilter;

      return (titleMatch || summaryMatch || locMatch) && statusMatch && categoryMatch;
    });
  }, [initialOpportunities, searchQuery, statusFilter, categoryFilter]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleStatusChange = (status: 'All' | 'OPEN' | 'CLOSED') => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredOpportunities.length / PAGE_SIZE);
  const paginatedOpportunities = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredOpportunities.slice(start, start + PAGE_SIZE);
  }, [filteredOpportunities, currentPage]);

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by job title, tender, or location..."
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

          {/* Status Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl self-start md:self-auto">
            {(['All', 'OPEN', 'CLOSED'] as const).map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  statusFilter === status
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {status === 'All' ? 'All Calls' : status === 'OPEN' ? 'Open Calls' : 'Archived'}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
            Category:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                categoryFilter === category
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results */}
      {paginatedOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedOpportunities.map((opp) => (
            <OpportunityCard key={opp.id} opportunity={opp} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8 space-y-3">
          <Briefcase className="w-10 h-10 text-slate-300 mx-auto" />
          <h4 className="text-base font-bold text-slate-900">No opportunities found</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No vacancies or tenders match your selected filters. Try searching with different keywords.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setStatusFilter('All');
              setCategoryFilter('All');
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
        totalItems={filteredOpportunities.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
