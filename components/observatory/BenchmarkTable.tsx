'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { InstitutionBenchmark } from '@/content/types';
import { 
  Building2, 
  Search, 
  ArrowUpDown, 
  ChevronRight, 
  ChevronDown,
  Award, 
  Leaf, 
  Briefcase, 
  Users, 
  SlidersHorizontal,
  CheckCircle2,
  Scale,
  RotateCcw,
  Globe2,
  Wrench,
  ShieldCheck
} from 'lucide-react';

interface BenchmarkTableProps {
  institutions: InstitutionBenchmark[];
  isCompact?: boolean;
  limit?: number;
  showFilters?: boolean;
}

type SortOption = 'overallScore-desc' | 'overallScore-asc' | 'employment-desc' | 'trainees-desc' | 'female-desc';

export const BenchmarkTable: React.FC<BenchmarkTableProps> = ({
  institutions,
  isCompact = false,
  limit,
  showFilters = true,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dropdown menu state
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedTrade, setSelectedTrade] = useState<string>('all');
  const [selectedGreenRating, setSelectedGreenRating] = useState<string>('all');
  const [selectedMinEmployment, setSelectedMinEmployment] = useState<string>('all');
  const [sortOption, setSortOption] = useState<SortOption>('overallScore-desc');
  
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  // Calculate active filter count
  const activeFilterCount = [
    selectedProvince !== 'all',
    selectedTier !== 'all',
    selectedTrade !== 'all',
    selectedGreenRating !== 'all',
    selectedMinEmployment !== 'all',
    searchQuery.trim().length > 0,
  ].filter(Boolean).length;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedProvince('all');
    setSelectedTier('all');
    setSelectedTrade('all');
    setSelectedGreenRating('all');
    setSelectedMinEmployment('all');
    setSortOption('overallScore-desc');
  };

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

  // Derive unique trade options from institutions
  const tradeOptions = useMemo(() => {
    const tradeSet = new Set<string>();
    institutions.forEach((inst) => {
      inst.keyTrades.forEach((t) => tradeSet.add(t));
    });
    return Array.from(tradeSet).sort();
  }, [institutions]);

  // Derive unique province options
  const provinceOptions = useMemo(() => {
    const provMap = new Map<string, string>();
    institutions.forEach((inst) => {
      provMap.set(inst.provinceCode, `${inst.provinceName} (${inst.provinceCode})`);
    });
    return Array.from(provMap.entries()).sort();
  }, [institutions]);

  const filteredAndSorted = useMemo(() => {
    let result = [...institutions];

    // Filter by Province Dropdown
    if (selectedProvince !== 'all') {
      result = result.filter((i) => i.provinceCode === selectedProvince);
    }

    // Filter by Accreditation Tier Dropdown
    if (selectedTier !== 'all') {
      result = result.filter((i) => i.tier === selectedTier);
    }

    // Filter by Trade Dropdown
    if (selectedTrade !== 'all') {
      result = result.filter((i) => 
        i.keyTrades.some((t) => t.toLowerCase() === selectedTrade.toLowerCase())
      );
    }

    // Filter by Green TVET Status Dropdown
    if (selectedGreenRating !== 'all') {
      result = result.filter((i) => i.metrics.greenTVETRating === selectedGreenRating);
    }

    // Filter by Minimum Employment Rate Dropdown
    if (selectedMinEmployment !== 'all') {
      const minRate = parseInt(selectedMinEmployment, 10);
      result = result.filter((i) => i.metrics.employmentRate >= minRate);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.countryName.toLowerCase().includes(q) ||
          i.city.toLowerCase().includes(q) ||
          i.provinceName.toLowerCase().includes(q) ||
          i.keyTrades.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    result.sort((a, b) => {
      switch (sortOption) {
        case 'overallScore-desc':
          return b.overallScore - a.overallScore;
        case 'overallScore-asc':
          return a.overallScore - b.overallScore;
        case 'employment-desc':
          return b.metrics.employmentRate - a.metrics.employmentRate;
        case 'trainees-desc':
          return b.metrics.annualTrainees - a.metrics.annualTrainees;
        case 'female-desc':
          return b.metrics.femaleEnrollmentPct - a.metrics.femaleEnrollmentPct;
        default:
          return b.overallScore - a.overallScore;
      }
    });

    if (limit) {
      return result.slice(0, limit);
    }

    return result;
  }, [
    institutions, 
    selectedProvince, 
    selectedTier, 
    selectedTrade, 
    selectedGreenRating, 
    selectedMinEmployment, 
    searchQuery, 
    sortOption, 
    limit
  ]);

  return (
    <div className="w-full">
      {/* ── Dropdown Filters & Search Terminal ── */}
      {showFilters && (
        <div className="mb-6 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-4">
          {/* Top Line: Search Bar + Filter Status */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search TVET center, country, city, or trade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
              />
            </div>

            {/* Active filter count & reset */}
            {activeFilterCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters ({activeFilterCount})</span>
              </button>
            )}
          </div>

          {/* Bottom Grid: Dropdown Selectors (QS / THE Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2 border-t border-slate-100 text-xs">
            {/* 1. Region / Province Dropdown */}
            <div className="relative">
              <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Region / Province
              </label>
              <div className="relative">
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium py-2.5 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-colors cursor-pointer"
                >
                  <option value="all">All Provinces (Continental)</option>
                  {provinceOptions.map(([code, label]) => (
                    <option key={code} value={code}>
                      {label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* 2. Accreditation Tier Dropdown */}
            <div className="relative">
              <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Accreditation Tier
              </label>
              <div className="relative">
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium py-2.5 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-colors cursor-pointer"
                >
                  <option value="all">All Accreditation Tiers</option>
                  <option value="Tier 1 - Center of Excellence">Tier 1: Center of Excellence (CoE)</option>
                  <option value="Tier 2 - Regional Hub">Tier 2: Regional Hub</option>
                  <option value="Accredited TVET Center">Accredited TVET Center</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* 3. Trade / Discipline Dropdown */}
            <div className="relative">
              <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Vocational Trade
              </label>
              <div className="relative">
                <select
                  value={selectedTrade}
                  onChange={(e) => setSelectedTrade(e.target.value)}
                  className="w-full appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium py-2.5 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-colors cursor-pointer"
                >
                  <option value="all">All Vocational Trades</option>
                  {tradeOptions.map((trade) => (
                    <option key={trade} value={trade}>
                      {trade}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* 4. Green TVET Rating Dropdown */}
            <div className="relative">
              <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Green TVET Status
              </label>
              <div className="relative">
                <select
                  value={selectedGreenRating}
                  onChange={(e) => setSelectedGreenRating(e.target.value)}
                  className="w-full appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium py-2.5 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-colors cursor-pointer"
                >
                  <option value="all">All Green Ratings</option>
                  <option value="Gold">Gold Rating (Renewable Leader)</option>
                  <option value="Silver">Silver Rating</option>
                  <option value="Bronze">Bronze Rating</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* 5. Sort By Dropdown */}
            <div className="relative">
              <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Sort Rankings By
              </label>
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="w-full appearance-none bg-blue-50/70 hover:bg-blue-50 border border-blue-200 text-[#003366] font-bold py-2.5 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-colors cursor-pointer"
                >
                  <option value="overallScore-desc">Index Score (Highest First)</option>
                  <option value="employment-desc">Placement Rate (Highest First)</option>
                  <option value="trainees-desc">Annual Trainees (Highest First)</option>
                  <option value="female-desc">Female Inclusion % (Highest First)</option>
                  <option value="overallScore-asc">Index Score (Lowest First)</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#003366] pointer-events-none" />
              </div>
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
                <th className="py-3.5 px-4 text-right">
                  <span>Placement %</span>
                </th>
                <th className="py-3.5 px-4 text-right">
                  <span>Trainees</span>
                </th>
                <th className="py-3.5 px-4 text-center">Green TVET</th>
                <th className="py-3.5 px-4 text-right font-bold text-[#003366]">
                  <span>Index Score</span>
                </th>
                <th className="py-3.5 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAndSorted.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500">
                    <Building2 className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="font-medium text-slate-700">No TVET institutions match the selected dropdown filters.</p>
                    <p className="text-xs text-slate-400 mt-1">Try resetting the dropdown filters or adjusting the search keywords.</p>
                    <button
                      onClick={handleResetFilters}
                      className="mt-3 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#003366] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                    >
                      Reset All Filters
                    </button>
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
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-wider shrink-0">
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
