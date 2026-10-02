'use client';

import React, { useState, useMemo } from 'react';
import { Project } from '@/content';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Pagination } from '@/components/ui/Pagination';
import { Search, Layers, Briefcase } from 'lucide-react';

interface ProjectsDirectoryProps {
  initialProjects: Project[];
}

const PAGE_SIZE = 6;

export function ProjectsDirectory({ initialProjects }: ProjectsDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Completed'>('All');
  const [thematicFilter, setThematicFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Derive distinct thematic areas
  const thematicAreas: string[] = useMemo(() => {
    const list = initialProjects
      .map((p) => p.thematicArea)
      .filter((t): t is string => Boolean(t));
    return ['All', ...Array.from(new Set(list))];
  }, [initialProjects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.targetCountries.some((c: string) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesStatus =
        statusFilter === 'All' || project.status === statusFilter;

      const matchesThematic =
        thematicFilter === 'All' || project.thematicArea === thematicFilter;

      return matchesSearch && matchesStatus && matchesThematic;
    });
  }, [initialProjects, searchQuery, statusFilter, thematicFilter]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleStatusChange = (status: 'All' | 'Active' | 'Completed') => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handleThematicChange = (theme: string) => {
    setThematicFilter(theme);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProjects.slice(start, start + PAGE_SIZE);
  }, [filteredProjects, currentPage]);

  return (
    <div className="space-y-8">
      {/* Interactive Controls & Filters */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        {/* Top bar: Search + Status Tabs */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by project name, trade, or country..."
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
            {(['All', 'Active', 'Completed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  statusFilter === status
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {status} Projects
              </button>
            ))}
          </div>
        </div>

        {/* Thematic Area Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
            Thematic Area:
          </span>
          {thematicAreas.map((theme) => (
            <button
              key={theme}
              onClick={() => handleThematicChange(theme)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                thematicFilter === theme
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results */}
      {paginatedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8 space-y-3">
          <Briefcase className="w-10 h-10 text-slate-300 mx-auto" />
          <h4 className="text-base font-bold text-slate-900">No projects found</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No projects matched your criteria. Try adjusting your search keywords or resetting filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setStatusFilter('All');
              setThematicFilter('All');
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
        totalItems={filteredProjects.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
