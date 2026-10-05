'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Filter,
  Sparkles,
  Layers,
  FileCheck2,
} from 'lucide-react';
import { knowledgeResources } from '@/content/knowledge';
import type { KnowledgeResource } from '@/content/types';

export function KnowledgeRepositorySection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Policy & Advocacy',
    'Curriculum & Toolkits',
    'Green TVET & Solar',
    'Tracer Studies',
  ];

  const filtered = knowledgeResources.filter((res) => {
    if (activeCategory === 'All') return true;
    return res.category === activeCategory || res.type.toLowerCase().includes(activeCategory.toLowerCase());
  }).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D32F2F]/10 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Continental TVET Knowledge Repository</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Featured Curricula, Policy Briefs & Toolkits
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Open-access technical manuals, African Union policy domestication reports, and standardized diagnostic assessment guides.
            </p>
          </div>

          <Link
            href="/knowledge"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#003366] hover:text-[#002244] bg-slate-50 hover:bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200 transition-all shrink-0"
          >
            <span>Search All 2,500+ Publications</span>
            <ArrowRight className="w-4 h-4 text-[#F5A623]" />
          </Link>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#003366] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* High-Density Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#003366]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Meta row: Type badge, Year, Format */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md font-mono font-bold bg-[#003366]/10 text-[#003366] text-[11px] uppercase">
                      {item.type}
                    </span>
                    <span className="text-slate-400 font-medium font-mono">
                      {item.year}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.format || item.fileFormat} · {item.fileSize || item.fileSizeBytes}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug">
                  <Link href={`/knowledge/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                {/* Authors / Issuer */}
                <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <span>Issued by:</span>
                  <span className="text-slate-800">{item.authorOrIssuer || item.authors?.[0]}</span>
                </div>

                {/* Abstract */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {item.abstract || item.description}
                </p>

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between gap-3">
                <Link
                  href={`/knowledge/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#003366] hover:text-[#002244]"
                >
                  <span>Read Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Download Document</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
