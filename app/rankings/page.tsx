import React from 'react';
import { institutions } from '@/content/institutions';
import { BenchmarkTable } from '@/components/observatory/BenchmarkTable';
import { Award, ShieldCheck, TrendingUp, HelpCircle, Download } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Pan-African TVET Rankings & Performance Benchmarks 2024/2025 | Don Bosco Tech Africa',
  description:
    'Comprehensive institutional benchmarking and quality ratings for 119 Salesian TVET colleges across 35 African countries. Evaluated on verified graduate employment rates, workshop infrastructure, green transition, and gender inclusivity.',
};

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* ── Page Header & Institutional Authority Bar ── */}
      <div className="bg-[#061830] text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-400">TVET Benchmarks & Rankings</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                Continental Quality & Employability Index 2024/2025
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Pan-African TVET Institutional Rankings
              </h1>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Objective, verified performance metrics across 119 technical and vocational training institutions in 35 African nations. Grounded in DBTA Graduate Tracer Studies, employer feedback surveys, and international workshop certification standards.
              </p>
            </div>

            {/* Quick stats badges */}
            <div className="flex items-center gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-700/60">
              <div className="text-center px-3 border-r border-slate-700">
                <div className="text-2xl font-mono font-bold text-amber-400">119</div>
                <div className="text-[11px] text-slate-400 uppercase">Institutions</div>
              </div>
              <div className="text-center px-3 border-r border-slate-700">
                <div className="text-2xl font-mono font-bold text-emerald-400">81.4%</div>
                <div className="text-[11px] text-slate-400 uppercase">Top Quartile Placement</div>
              </div>
              <div className="text-center px-3">
                <div className="text-2xl font-mono font-bold text-blue-400">34</div>
                <div className="text-[11px] text-slate-400 uppercase">Green TVET Hubs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Methodological Transparency Strip */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-blue-50 text-[#003366]">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <div>
              <span className="font-semibold text-slate-800">4-Pillar Evaluation Methodology: </span>
              <span className="text-slate-500">
                Graduate Employability (40%) • Modern Workshop Infrastructure (25%) • Green & Renewable TVET (20%) • Gender Inclusion & Accessibility (15%).
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 text-[#003366] hover:underline font-semibold"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Read Tracer Methodology</span>
            </Link>
          </div>
        </div>

        {/* The Core Benchmark Table */}
        <BenchmarkTable institutions={institutions} showFilters={true} />

        {/* Editorial Explainer Footer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Tier 1: Centers of Excellence
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Designated institutional flagships equipped with state-of-the-art diagnostic labs (Schneider Electric, Bosch), verified graduate tracer employment rates &gt;80%, and regional masterclass capacity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Gold Green TVET Status
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Awarded to TVET institutions operating active solar microgrids, off-grid training testbenches, campus waste-to-energy systems, and harmonized ecological curricula.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              Institutional Audit Process
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Data is audited annually by the Don Bosco Tech Africa Planning and Development Offices (PDOs) and verified against national TVET regulator registrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
