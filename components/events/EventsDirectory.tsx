'use client';

import React, { useState, useMemo } from 'react';
import { DBTAEvent } from '@/content';
import { EventCard } from '@/components/cards/EventCard';
import { Pagination } from '@/components/ui/Pagination';
import { Search, Calendar } from 'lucide-react';

interface EventsDirectoryProps {
  initialEvents: DBTAEvent[];
}

const PAGE_SIZE = 6;

export function EventsDirectory({ initialEvents }: EventsDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState<'All' | 'Upcoming' | 'Past'>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Derive distinct event types
  const types = useMemo(() => {
    const set = new Set(initialEvents.map((e) => e.type));
    return ['All', ...Array.from(set)];
  }, [initialEvents]);

  // Filtered
  const filteredEvents = useMemo(() => {
    return initialEvents.filter((event) => {
      const titleMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
      const descMatch = event.description.toLowerCase().includes(searchQuery.toLowerCase());
      const locMatch = event.location.toLowerCase().includes(searchQuery.toLowerCase());

      const timeMatch =
        timeFilter === 'All'
          ? true
          : timeFilter === 'Upcoming'
          ? event.isUpcoming
          : !event.isUpcoming;

      const typeMatch = typeFilter === 'All' || event.type === typeFilter;

      return (titleMatch || descMatch || locMatch) && timeMatch && typeMatch;
    });
  }, [initialEvents, searchQuery, timeFilter, typeFilter]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleTimeChange = (filter: 'All' | 'Upcoming' | 'Past') => {
    setTimeFilter(filter);
    setCurrentPage(1);
  };

  const handleTypeChange = (type: string) => {
    setTypeFilter(type);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredEvents.length / PAGE_SIZE);
  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredEvents.slice(start, start + PAGE_SIZE);
  }, [filteredEvents, currentPage]);

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
              placeholder="Search by event title, location, or workshop..."
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

          {/* Time Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl self-start md:self-auto">
            {(['All', 'Upcoming', 'Past'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => handleTimeChange(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  timeFilter === filter
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter} Events
              </button>
            ))}
          </div>
        </div>

        {/* Type pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
            Category:
          </span>
          {types.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                typeFilter === type
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results */}
      {paginatedEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8 space-y-3">
          <Calendar className="w-10 h-10 text-slate-300 mx-auto" />
          <h4 className="text-base font-bold text-slate-900">No events found</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No events match your current filter. Try selecting "All Events" or clearing search terms.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setTimeFilter('All');
              setTypeFilter('All');
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
        totalItems={filteredEvents.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
