import React from 'react';
import Link from 'next/link';
import { institutions } from '@/content/institutions';
import { Award, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';

export const RankingsSnapshotSection: React.FC = () => {
  const topFive = institutions.slice(0, 5);

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-amber-500" />
              Pan-African TVET Benchmark Preview
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Top Ranked TVET Institutions 2024/2025
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Evaluated on audited graduate placement %, modern workshop infrastructure, and green transition.
            </p>
          </div>

          <Link
            href="/rankings"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold transition-all shadow-sm self-start md:self-auto shrink-0"
          >
            <span>Explore Full Rankings (119 Centres)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Compact Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <th className="py-3 px-4 w-12 text-center">Rank</th>
                  <th className="py-3 px-4">TVET Institution & Campus</th>
                  <th className="py-3 px-4">Country</th>
                  <th className="py-3 px-4 text-right">Placement Rate</th>
                  <th className="py-3 px-4 text-center">Green Status</th>
                  <th className="py-3 px-4 text-right">Index Score</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topFive.map((inst, index) => (
                  <tr key={inst.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-700 text-xs">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-md ${
                        index === 0
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : index === 1
                          ? 'bg-slate-200 text-slate-800'
                          : 'bg-amber-50 text-amber-800'
                      }`}>
                        {inst.rankBand}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <Link
                        href={`/institutions/${inst.id}`}
                        className="font-semibold text-slate-900 hover:text-[#003366] text-sm block"
                      >
                        {inst.name}
                      </Link>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {inst.city} • Prov. {inst.provinceCode}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="text-base mr-1.5">{inst.flagEmoji}</span>
                      <span className="font-medium text-slate-700 text-xs">{inst.countryName}</span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="font-mono font-bold text-emerald-600">
                        {inst.metrics.employmentRate}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Leaf className="w-3 h-3 text-emerald-600" />
                        {inst.metrics.greenTVETRating}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-[#003366]">
                      {inst.overallScore.toFixed(1)}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Link
                        href={`/institutions/${inst.id}`}
                        className="text-xs text-[#003366] font-semibold hover:underline"
                      >
                        View Dossier
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="py-3 px-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Showing top 5 of 119 evaluated Salesian TVET institutions across Africa.</span>
            <Link href="/rankings" className="font-bold text-[#003366] hover:underline flex items-center gap-1">
              <span>View complete rankings table</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
