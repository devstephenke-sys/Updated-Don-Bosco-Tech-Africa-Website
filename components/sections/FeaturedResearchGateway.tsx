import React from 'react';
import Link from 'next/link';
import { knowledgeResources } from '@/content/knowledge';
import { FileText, Download, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

export const FeaturedResearchGateway: React.FC = () => {
  const featuredThree = knowledgeResources.slice(0, 3);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              Pan-African TVET Evidence & Insights
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Tracer Studies, Toolkits & Policy Briefs
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Audited empirical evidence tracking graduate employment, Green TVET frameworks, and informal sector certification.
            </p>
          </div>

          <Link
            href="/knowledge"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003366] hover:underline"
          >
            <span>Explore All Research & Publications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredThree.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-md transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#003366] border border-blue-100">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {item.abstract}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  {item.fileFormat} • {item.fileSize}
                </span>
                <a
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#003366] hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
