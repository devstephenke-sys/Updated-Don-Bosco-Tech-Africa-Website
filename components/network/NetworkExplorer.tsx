'use client';

import React, { useState, useMemo } from 'react';
import { countries, provinces } from '@/content';
import { Search, MapPin, Globe2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function NetworkExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activeCountryCode, setActiveCountryCode] = useState<string>('KE'); // Default to Kenya

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
    <div className="border border-neutral-200 bg-white">
      {/* Top Filter and Search Bar */}
      <div className="p-6 border-b border-neutral-200 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
              Continental TVET Network Directory
            </h3>
            <p className="text-xs text-neutral-500 font-mono mt-0.5">
              119 centres across 35 countries in Africa and Madagascar
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search country, city, or trade..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 pl-9 pr-4 py-2 text-xs font-mono text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Region Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1 text-xs font-mono whitespace-nowrap transition-colors border ${
                selectedRegion === region
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border-neutral-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dual-Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
        {/* Left Pane: Countries Scrollable Directory */}
        <div className="lg:col-span-5 p-4 max-h-[500px] overflow-y-auto space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2 px-1">
            Matching Countries ({filteredCountries.length})
          </div>

          {filteredCountries.length === 0 ? (
            <div className="text-center py-10 text-neutral-400">
              <Globe2 className="w-8 h-8 mx-auto text-neutral-300 mb-2 stroke-1" />
              <p className="text-xs font-mono">No matching country found</p>
            </div>
          ) : (
            filteredCountries.map((c) => {
              const isSelected = c.code === activeCountryCode;

              return (
                <button
                  key={c.code}
                  onClick={() => setActiveCountryCode(c.code)}
                  className={`w-full text-left p-3 transition-colors flex items-center justify-between border ${
                    isSelected
                      ? 'bg-neutral-100/70 border-neutral-900'
                      : 'bg-white border-neutral-200/60 hover:bg-neutral-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-neutral-900">
                        {c.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 border border-neutral-200 text-neutral-500">
                        {c.provinceCode}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 font-mono mt-0.5">
                      {c.capital} · {c.region}
                    </p>
                  </div>

                  <span className="text-xs font-mono font-semibold text-neutral-900">
                    {c.centreCount} {c.centreCount === 1 ? 'Centre' : 'Centres'}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Right Pane: Selected Country TVET Profile */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Country Header */}
            <div className="flex items-start justify-between border-b border-neutral-200 pb-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                  {activeCountry.region} — Province {activeCountry.provinceCode}
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  {activeCountry.name}
                </h4>
              </div>

              <div className="text-right">
                <span className="text-3xl font-bold text-neutral-900 leading-none block font-mono">
                  {activeCountry.centreCount}
                </span>
                <span className="text-[11px] text-neutral-400 font-mono uppercase">
                  Centres
                </span>
              </div>
            </div>

            {/* Overview text */}
            <p className="text-sm text-neutral-600 leading-relaxed">
              {activeCountry.summary}
            </p>

            {/* Provincial Leadership Info */}
            {activeProvince && (
              <div className="p-4 border border-neutral-200 text-xs space-y-1">
                <p className="font-bold text-neutral-900">
                  {activeProvince.fullName} ({activeProvince.code})
                </p>
                <p className="text-neutral-600">
                  <strong>Coordinator:</strong> {activeProvince.coordinatorName} ({activeProvince.coordinatorTitle})
                </p>
                <p className="text-neutral-500 font-mono text-[11px]">
                  HQ: {activeProvince.headquarters}
                </p>
              </div>
            )}

            {/* Key Trades in this country */}
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Specialized Technical Trades
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeCountry.keyTrades.map((trade, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 border border-neutral-200 text-neutral-700 bg-neutral-50"
                  >
                    {trade}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Centres */}
            {activeCountry.featuredCentres && activeCountry.featuredCentres.length > 0 && (
              <div className="space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Featured Centres
                </p>
                <div className="space-y-2">
                  {activeCountry.featuredCentres.map((centre) => (
                    <div
                      key={centre.id}
                      className="p-3 border border-neutral-200 text-xs"
                    >
                      <div className="flex items-center justify-between font-bold text-neutral-900">
                        <span>{centre.name}</span>
                        <span className="text-neutral-400 font-mono text-[11px] font-normal">{centre.city}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {centre.courses.map((course, cIdx) => (
                          <span key={cIdx} className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-1.5 py-0.5">
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

          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
            <span className="text-xs text-neutral-500 font-mono">Admissions & local coordination</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#003366]"
            >
              <span>Contact Provincial Office</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
