import React from 'react';
import { institutions } from '@/content/institutions';
import { BenchmarkTable } from '@/components/observatory/BenchmarkTable';
import { Building2, Globe2, Compass, Layers } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Pan-African TVET Institutions Directory | 119 Centres Across 35 Countries',
  description:
    'Searchable directory of all 119 Salesian TVET institutions across Africa. Filter by region, country, accredited trades, and workshop facilities.',
};

export default function InstitutionsDirectoryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* ── Page Header ── */}
      <div className="bg-[#061830] text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-blue-400">Institutional Directory</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              Pan-African TVET Institutional Directory
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              119 Accredited TVET Centres in 35 Countries
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Explore the continental network of Salesian Technical and Vocational Education and Training centers. Search by campus, country, province, and specialized vocational disciplines.
            </p>
          </div>
        </div>
      </div>

      {/* ── Directory Table Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <BenchmarkTable institutions={institutions} showFilters={true} />
      </div>
    </div>
  );
}
