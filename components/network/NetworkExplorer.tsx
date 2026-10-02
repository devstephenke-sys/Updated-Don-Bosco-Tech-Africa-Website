'use client';

import React, { useState, useMemo } from 'react';
import { countries, provinces } from '@/content';
import { Search, MapPin, Building2, BookOpen, Globe2, ArrowRight, Filter } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

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
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Clean Light Filter Bar */}
      <div className="bg-slate-50 p-6 border-b border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Continental TVET Network Directory
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Select a country or filter by region to view TVET centres and provincial offices.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search country, city, or trade..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
            />
          </div>
        </div>

        {/* Region Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedRegion === region
                  ? 'bg-[#003366] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dual-Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Pane: Countries Scrollable Directory */}
        <div className="lg:col-span-5 p-4 max-h-[520px] overflow-y-auto space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Countries ({filteredCountries.length})
          </p>

          {filteredCountries.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              <Globe2 className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-semibold">No countries found</p>
              <p className="text-xs text-slate-400">Try adjusting your search query.</p>
            </div>
          ) : (
            filteredCountries.map((c) => {
              const isSelected = c.code === activeCountryCode;

              return (
                <button
                  key={c.code}
                  onClick={() => setActiveCountryCode(c.code)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-colors flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-50 border-blue-400'
                      : 'bg-white border-slate-200/70 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">
                        {c.name}
                      </span>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {c.provinceCode}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{c.capital} · {c.region}</span>
                    </p>
                  </div>

                  <span className="font-bold text-xs text-blue-800 bg-blue-50 px-2 py-1 rounded">
                    {c.centreCount} {c.centreCount === 1 ? 'Centre' : 'Centres'}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Right Pane: Selected Country TVET Profile */}
        <div className="lg:col-span-7 p-6 bg-white flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            {/* Country Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-blue-700">{activeCountry.region}</span>
                  <span>•</span>
                  <span className="text-xs text-slate-500">Province {activeCountry.provinceCode}</span>
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900">
                  {activeCountry.name}
                </h4>
              </div>

              <div className="text-right">
                <span className="text-2xl font-black text-[#003366] leading-none block">
                  {activeCountry.centreCount}
                </span>
                <span className="text-xs text-slate-500 font-medium">Centres</span>
              </div>
            </div>

            {/* Overview text */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {activeCountry.summary}
            </p>

            {/* Provincial Leadership Info */}
            {activeProvince && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <p className="font-bold text-slate-900">
                  {activeProvince.fullName} ({activeProvince.code})
                </p>
                <p className="text-slate-600">
                  <strong>Coordinator:</strong> {activeProvince.coordinatorName} ({activeProvince.coordinatorTitle})
                </p>
                <p className="text-slate-500">
                  <strong>HQ:</strong> {activeProvince.headquarters}
                </p>
              </div>
            )}

            {/* Key Trades in this country */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Specialized Trade Courses
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeCountry.keyTrades.map((trade, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                  >
                    {trade}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Centres */}
            {activeCountry.featuredCentres && activeCountry.featuredCentres.length > 0 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Featured Centres
                </p>
                <div className="space-y-2">
                  {activeCountry.featuredCentres.map((centre) => (
                    <div
                      key={centre.id}
                      className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs"
                    >
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span>{centre.name}</span>
                        <span className="text-slate-500 font-normal">{centre.city}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {centre.courses.map((course, cIdx) => (
                          <span key={cIdx} className="text-[10px] bg-white text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
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

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Admissions & local coordination</span>
            <Button href="/contact" variant="primary" size="sm">
              Contact Office
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
