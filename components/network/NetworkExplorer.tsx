'use client';

import React, { useState, useMemo } from 'react';
import { countries, provinces } from '@/content';
import { Search, MapPin, Building2, BookOpen, Globe2, ArrowRight, CheckCircle2, Filter } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function NetworkExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activeCountryCode, setActiveCountryCode] = useState<string>('KE'); // Default to Kenya (DBTA HQ)

  const regions = ['All', 'East Africa', 'West Africa', 'Central Africa', 'Southern Africa', 'North Africa & Islands'];

  const filteredCountries = useMemo(() => {
    return countries.filter((c) => {
      const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.keyTrades.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        c.provinceName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [searchQuery, selectedRegion]);

  const activeCountry = useMemo(() => {
    return countries.find((c) => c.code === activeCountryCode) || countries[0];
  }, [activeCountryCode]);

  const activeProvince = useMemo(() => {
    return provinces.find((p) => p.code === activeCountry.provinceCode);
  }, [activeCountry]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
      {/* Top Filter Bar */}
      <div className="bg-slate-900 text-white p-6 md:p-8 space-y-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
              Continental TVET Explorer
            </span>
            <h3 className="text-2xl font-black tracking-tight text-white">
              Explore DBTA in 35 African Nations & Madagascar
            </h3>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search country, trade, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Region Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedRegion === region
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dual-Pane Layout: List of Countries + Interactive Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Pane: Countries Scrollable Directory */}
        <div className="lg:col-span-5 p-4 md:p-6 max-h-[580px] overflow-y-auto space-y-2.5">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Showing {filteredCountries.length} Countries
          </p>

          {filteredCountries.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Globe2 className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-semibold">No countries found</p>
              <p className="text-xs text-slate-400">Try adjusting your search or region filter</p>
            </div>
          ) : (
            filteredCountries.map((c) => {
              const isSelected = c.code === activeCountryCode;

              return (
                <button
                  key={c.code}
                  onClick={() => setActiveCountryCode(c.code)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 border-blue-300 shadow-sm'
                      : 'bg-white border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {c.name}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {c.provinceCode}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{c.capital} · {c.region}</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="inline-block font-black text-sm text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-blue-100 shadow-2xs">
                      {c.centreCount} {c.centreCount === 1 ? 'Centre' : 'Centres'}
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Right Pane: Selected Country TVET Profile */}
        <div className="lg:col-span-7 p-6 md:p-8 bg-slate-50/50 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Country Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="orange">{activeCountry.region}</Badge>
                  <Badge variant="blue">Salesian Province: {activeCountry.provinceCode}</Badge>
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  {activeCountry.name} TVET Network
                </h4>
              </div>

              <div className="text-left sm:text-right bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-2xl font-black text-blue-600 block leading-none">
                  {activeCountry.centreCount}
                </span>
                <span className="text-xs font-semibold text-slate-500 block mt-1">TVET Institutions</span>
              </div>
            </div>

            {/* Overview text */}
            <p className="text-sm text-slate-700 leading-relaxed">
              {activeCountry.summary}
            </p>

            {/* Provincial Leadership Info */}
            {activeProvince && (
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 text-xs">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>{activeProvince.fullName}</span>
                </p>
                <p className="text-slate-600">
                  <strong>P-TVET Coordinator:</strong> {activeProvince.coordinatorName} ({activeProvince.coordinatorTitle})
                </p>
                <p className="text-slate-500">
                  <strong>Provincial HQ:</strong> {activeProvince.headquarters}
                </p>
              </div>
            )}

            {/* Key Trades in this country */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                <span>Specialized Trade Disciplines</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {activeCountry.keyTrades.map((trade, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs"
                  >
                    {trade}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Centres */}
            {activeCountry.featuredCentres && activeCountry.featuredCentres.length > 0 && (
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Featured TVET Institutes in {activeCountry.name}</span>
                </p>
                <div className="space-y-2.5">
                  {activeCountry.featuredCentres.map((centre) => (
                    <div
                      key={centre.id}
                      className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900">{centre.name}</span>
                        {centre.isFlagship && <Badge variant="green" size="sm">Flagship Centre</Badge>}
                      </div>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{centre.city}</span>
                        {centre.studentCount && <span>· Approx {centre.studentCount} Students</span>}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {centre.courses.map((course, cIdx) => (
                          <span key={cIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">Need specific centre details or admissions?</span>
            <Button href="/contact" variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Contact P-TVET Office
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
