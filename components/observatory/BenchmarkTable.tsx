'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { InstitutionBenchmark } from '@/content/types';
import { 
  Building2, 
  Search, 
  ArrowUpDown, 
  ChevronRight, 
  Award, 
  Leaf, 
  Briefcase, 
  Users, 
  SlidersHorizontal,
  CheckCircle2,
  Scale
} from 'lucide-react';

interface BenchmarkTableProps {
  institutions: InstitutionBenchmark[];
  isCompact?: boolean;
  limit?: number;
  showFilters?: boolean;
}

type SortField = 'overallScore' | 'employmentRate' | 'annualTrainees' | 'femaleEnrollmentPct';

export const BenchmarkTable: React.FC<BenchmarkTableProps> = ({
  institutions,
  isCompact = false,
  limit,
  showFilters = true,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'tier1' | 'green' | 'highEmployment' | 'eastern' | 'western'>('all');
  const [sortField, setSortField] = useState<SortField>('overallScore');
  const [sortAsc, setSortAsc] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  const handleToggleCompare = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedForCompare((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 4) {
        alert('You can compare a maximum of 4 institutions at once.');
        return prev;
      }
      return [...prev, id];
    });
  };

  const filteredAndSorted = useMemo(() => {
    let result = [...institutions];

    // Filter by tab
    if (activeTab === 'tier1') {
      result = result.filter((i) => i.tier.includes('Center of Excellence'));
    } else if (activeTab === 'green') {
      result = result.filter((i) => i.metrics.greenTVETRating === 'Gold');
    } else if (activeTab === 'highEmployment') {
      result = result.filter((i) => i.metrics.employmentRate >= 80);
    } else if (activeTab === 'eastern') {
      result = result.filter((i) => i.provinceCode === 'AFE' || i.provinceCode === 'AGL');
    } else if (activeTab === 'western') {
      result = result.filter((i) => i.provinceCode === 'AOS' || i.provinceCode === 'AON');
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.countryName.toLowerCase().includes(q) ||
          i.city.toLowerCase().includes(q) ||
          i.keyTrades.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    result.sort((a, b) => {
      let valA = 0;
      let valB = 0;
      if (sortField === 'overallScore') {
        valA = a.overallScore;
        valB = b.overallScore;
      } else if (sortField === 'employmentRate') {
        valA = a.metrics.employmentRate;
        valB = b.metrics.employmentRate;
      } else if (sortField === 'annualTrainees') {
        valA = a.metrics.annualTrainees;
        valB = b.metrics.annualTrainees;
      } else if (sortField === 'femaleEnrollmentPct') {
        valA = a.metrics.femaleEnrollmentPct;
        valB = b.metrics.femaleEnrollmentPct;
      }
      return sortAsc ? valA - valB : valB - valA;
    });

    if (limit) {
      return result.slice(0, limit);
    }

    return result;
  }, [institutions, activeTab, searchQuery, sortField, sortAsc, limit]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="w-full">
      {/* ── Filters & Search Header ── */}
      {showFilters && (
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search TVET center, country, or trade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all shadow-sm"
              />
            </div>

            {/* Indicator Quick Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-medium">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-[#003366] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Centres ({institutions.length})
              </button>
              <button
                onClick={() => setActiveTab('tier1')}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'tier1'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                Centres of Excellence
              </button>
              <button
                onClick={() => setActiveTab('green')}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'green'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                Gold Green TVET
              </button>
              <button
                onClick={() => setActiveTab('highEmployment')}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'highEmployment'
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                Employment ≥80%
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Table Container (Desktop & Tablet) ── */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4 w-14 text-center">Rank</th>
                <th className="py-3.5 px-4">TVET Institution & Campus</th>
                <th className="py-3.5 px-4">Country & Province</th>
                <th className="py-3.5 px-4">Key Accredited Trades</th>
                <th 
                  className="py-3.5 px-4 cursor-pointer hover:bg-slate-100 transition-colors select-none text-right"
                  onClick={() => handleSort('employmentRate')}
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Placement %</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </th>
                <th 
                  className="py-3.5 px-4 cursor-pointer hover:bg-slate-100 transition-colors select-none text-right"
                  onClick={() => handleSort('annualTrainees')}
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Trainees</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-4 text-center">Green TVET</th>
                <th 
                  className="py-3.5 px-4 cursor-pointer hover:bg-slate-100 transition-colors select-none text-right"
                  onClick={() => handleSort('overallScore')}
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Index Score</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#003366]" />
                  </div>
                </th>
                <th className="py-3.5 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAndSorted.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500">
                    <Building2 className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="font-medium">No TVET institutions match the selected criteria.</p>
                    <p className="text-xs text-slate-400 mt-1">Try resetting search filters or keywords.</p>
                  </td>
                </tr>
              ) : (
                filteredAndSorted.map((item, index) => {
                  const isTier1 = item.tier.includes('Center of Excellence');
                  const isChecked = selectedForCompare.includes(item.id);

                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-blue-50/40 transition-colors group"
                    >
                      {/* Rank Position */}
                      <td className="py-4 px-4 text-center font-mono font-bold text-slate-700">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-semibold ${
                          index === 0
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : index === 1
                            ? 'bg-slate-200 text-slate-800'
                            : index === 2
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'text-slate-600'
                        }`}>
                          {item.rankBand}
                        </span>
                      </td>

                      {/* Institution Name */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-slate-900 group-hover:text-[#003366] transition-colors flex items-center gap-2">
                          <Link href={`/institutions/${item.id}`} className="hover:underline">
                            {item.name}
                          </Link>
                          {isTier1 && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-wider">
                              <Award className="w-3 h-3 text-amber-600" />
                              CoE
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Est. {item.establishedYear} • Accredited by {item.accreditationBody.split('(')[0]}
                        </div>
                      </td>

                      {/* Country & Province */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 font-medium text-slate-800">
                          <span className="text-base">{item.flagEmoji}</span>
                          <span>{item.countryName}</span>
                        </div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">
                          {item.city} • Prov. {item.provinceCode}
                        </div>
                      </td>

                      {/* Key Trades Badges */}
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {item.keyTrades.slice(0, 3).map((trade, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium"
                            >
                              {trade}
                            </span>
                          ))}
                          {item.keyTrades.length > 3 && (
                            <span className="px-1.5 py-0.5 text-[11px] text-slate-400">
                              +{item.keyTrades.length - 3} more
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Employment Placement % */}
                      <td className="py-4 px-4 text-right">
                        <div className="font-mono font-bold text-slate-900 text-sm">
                          {item.metrics.employmentRate}%
                        </div>
                        <div className="w-20 ml-auto bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                          <div
                            className={`h-full rounded-full ${
                              item.metrics.employmentRate >= 85
                                ? 'bg-emerald-500'
                                : item.metrics.employmentRate >= 78
                                ? 'bg-blue-600'
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${item.metrics.employmentRate}%` }}
                          />
                        </div>
                      </td>

                      {/* Annual Trainees */}
                      <td className="py-4 px-4 text-right font-mono text-slate-700">
                        {item.metrics.annualTrainees.toLocaleString()}
                        <div className="text-[10px] text-slate-400 font-sans">
                          {item.metrics.femaleEnrollmentPct}% female
                        </div>
                      </td>

                      {/* Green TVET Rating */}
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            item.metrics.greenTVETRating === 'Gold'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : item.metrics.greenTVETRating === 'Silver'
                              ? 'bg-slate-100 text-slate-700 border border-slate-300'
                              : 'bg-amber-50 text-amber-700'
                          }`}
                        >
                          <Leaf className="w-3 h-3" />
                          {item.metrics.greenTVETRating}
                        </span>
                      </td>

                      {/* Overall Index Score */}
                      <td className="py-4 px-4 text-right font-mono font-bold text-base text-[#003366]">
                        {item.overallScore.toFixed(1)}
                      </td>

                      {/* Action & Compare Check */}
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/institutions/${item.id}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#003366] text-slate-700 hover:text-white text-xs font-medium transition-colors"
                          >
                            <span>Dossier</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={(e) => handleToggleCompare(item.id, e)}
                            title={isChecked ? 'Remove from comparison' : 'Add to side-by-side comparison'}
                            className={`p-1.5 rounded-lg border transition-colors ${
                              isChecked
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-slate-400 hover:text-slate-700 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <Scale className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info strip */}
        <div className="py-3 px-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            Showing <span className="font-semibold text-slate-700">{filteredAndSorted.length}</span> of{' '}
            <span className="font-semibold text-slate-700">{institutions.length}</span> accredited TVET institutions.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Verified by DBTA Graduate Tracer Studies 2024
            </span>
          </div>
        </div>
      </div>

      {/* ── Persistent Floating Comparison Drawer ── */}
      {selectedForCompare.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#061830] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold">
              Comparing <span className="text-amber-400">{selectedForCompare.length}</span>/4 Centres
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {selectedForCompare.map((id) => {
              const inst = institutions.find((i) => i.id === id);
              return (
                <span
                  key={id}
                  className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1"
                >
                  <span>{inst?.flagEmoji}</span>
                  <span className="max-w-[100px] truncate">{inst?.shortName || inst?.name}</span>
                </span>
              );
            })}
          </div>

          <div className="flex items-center gap-2 ml-2">
            <Link
              href={`/compare?ids=${selectedForCompare.join(',')}`}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors"
            >
              Compare Now →
            </Link>
            <button
              onClick={() => setSelectedForCompare([])}
              className="text-xs text-slate-400 hover:text-white px-2 py-1"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
