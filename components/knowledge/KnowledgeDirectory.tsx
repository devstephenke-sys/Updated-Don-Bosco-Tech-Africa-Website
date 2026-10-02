'use client';

import React, { useState, useMemo } from 'react';
import { KnowledgeResource } from '@/content';
import { ResourceCard } from '@/components/cards/ResourceCard';
import { Pagination } from '@/components/ui/Pagination';
import { Search, BookOpen } from 'lucide-react';

interface KnowledgeDirectoryProps {
  initialResources: KnowledgeResource[];
}

const PAGE_SIZE = 6;

export function KnowledgeDirectory({ initialResources }: KnowledgeDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Distinct topics & types
  const topics: string[] = useMemo(() => {
    const list = initialResources
      .map((r) => r.topic || r.category)
      .filter((t): t is string => Boolean(t));
    return ['All', ...Array.from(new Set(list))];
  }, [initialResources]);

  const types: string[] = useMemo(() => {
    const list = initialResources
      .map((r) => r.type)
      .filter((t): t is string => Boolean(t));
    return ['All', ...Array.from(new Set(list))];
  }, [initialResources]);

  // Filtered
  const filteredResources = useMemo(() => {
    return initialResources.filter((res) => {
      const titleMatch = res.title.toLowerCase().includes(searchQuery.toLowerCase());
      const descMatch = (res.description || res.abstract || '').toLowerCase().includes(searchQuery.toLowerCase());
      const topicMatch = selectedTopic === 'All' || (res.topic || res.category) === selectedTopic;
      const typeMatch = selectedType === 'All' || res.type === selectedType;

      return (titleMatch || descMatch) && topicMatch && typeMatch;
    });
  }, [initialResources, searchQuery, selectedTopic, selectedType]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentPage(1);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredResources.length / PAGE_SIZE);
  const paginatedResources = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredResources.slice(start, start + PAGE_SIZE);
  }, [filteredResources, currentPage]);

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
              placeholder="Search reports, curriculum, guidelines..."
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

          {/* Type filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
              Format:
            </span>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedType === type
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Topic filter pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
            Topic:
          </span>
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => handleTopicChange(topic)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTopic === topic
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results */}
      {paginatedResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h4 className="text-base font-bold text-slate-900">No resources found</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No research papers or manuals matched your filter. Try adjusting your query or resetting filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTopic('All');
              setSelectedType('All');
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
        totalItems={filteredResources.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
