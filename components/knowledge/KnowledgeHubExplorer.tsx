'use client';

import React, { useState, useMemo } from 'react';
import { knowledgeResources, KnowledgeResource } from '@/content';
import { ResourceCard } from '../cards/ResourceCard';
import { Search, Filter, BookOpen, Download, ExternalLink, RefreshCw } from 'lucide-react';

export function KnowledgeHubExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const types = ['All', 'Report', 'Research Paper', 'Toolkit', 'Policy Brief', 'Strategic Plan', 'Manual'];
  const topics = [
    'All',
    'Continental TVET Policy',
    'Recognition of Prior Learning',
    'Renewable Energy & Green TVET',
    'Youth Employment & Labor Market',
    'Institutional Governance & Quality',
    'Agriculture & Food Security',
    'Digital Learning Resources',
  ];
  const years = ['All', '2026', '2025', '2024', '2023'];

  const filteredResources = useMemo(() => {
    return knowledgeResources.filter((r) => {
      const matchesSearch =
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.authorOrIssuer && r.authorOrIssuer.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = selectedType === 'All' || r.type === selectedType;
      const matchesTopic = selectedTopic === 'All' || r.topic === selectedTopic;
      const matchesYear = selectedYear === 'All' || r.year.toString() === selectedYear;

      return matchesSearch && matchesType && matchesTopic && matchesYear;
    });
  }, [searchQuery, selectedType, selectedTopic, selectedYear]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
    setSelectedTopic('All');
    setSelectedYear('All');
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls Panel */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          {/* Main Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reports, toolkits, policy briefs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={resetFilters}
            className="text-xs font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-1.5 self-end md:self-auto cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
          {/* Resource Type */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Document Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Topic Focus */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Topic / Discipline
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {topics.map((top) => (
                <option key={top} value={top}>
                  {top}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Publication Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-bold text-slate-600">
            Showing {filteredResources.length} Publications & Resources
          </p>

          <a
            href="https://www.digitallibrary.dbtechafrica.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <span>Visit Full Cloud Digital Library (2,500+ Items)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {filteredResources.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500">
            <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-3" />
            <h4 className="text-base font-bold text-slate-800">No resources found</h4>
            <p className="text-xs text-slate-500 mt-1">Try relaxing your search terms or filter selections.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
