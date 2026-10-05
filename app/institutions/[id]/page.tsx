import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { institutions } from '@/content/institutions';
import { 
  Building2, 
  MapPin, 
  Award, 
  Leaf, 
  Briefcase, 
  Users, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Globe, 
  Scale, 
  ArrowLeft,
  Wrench,
  ShieldCheck
} from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return institutions.map((inst) => ({
    id: inst.id,
  }));
}

export default async function InstitutionDossierPage({ params }: PageProps) {
  const resolvedParams = await params;
  const institution = institutions.find((i) => i.id === resolvedParams.id);

  if (!institution) {
    notFound();
  }

  const isTier1 = institution.tier.includes('Center of Excellence');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* ── Top Institutional Dossier Header ── */}
      <div className="bg-[#061830] text-white pt-10 pb-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/institutions" className="hover:text-white transition-colors">
              Institutions
            </Link>
            <span>/</span>
            <span className="text-amber-400">{institution.shortName || institution.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono font-bold text-xs">
                  Rank {institution.rankBand}
                </span>
                <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-semibold">
                  Province {institution.provinceCode} ({institution.provinceName})
                </span>
                {isTier1 && (
                  <span className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    Center of Excellence
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
                <span>{institution.flagEmoji}</span>
                <span>{institution.name}</span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {institution.city}, {institution.countryName}
                </span>
                <span>•</span>
                <span>Established {institution.establishedYear}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  Accredited by {institution.accreditationBody}
                </span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex items-center gap-3">
              <Link
                href={`/compare?ids=${institution.id}`}
                className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
              >
                <Scale className="w-4 h-4" />
                <span>Compare Institution</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticky Sub-Navigation Bar ── */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto text-xs font-semibold py-3 text-slate-600">
            <a href="#overview" className="text-[#003366] hover:underline">
              Overview
            </a>
            <a href="#metrics" className="hover:text-slate-900 transition-colors">
              Performance Indicators
            </a>
            <a href="#trades" className="hover:text-slate-900 transition-colors">
              Accredited Trades
            </a>
            <a href="#facilities" className="hover:text-slate-900 transition-colors">
              Workshops & Facilities
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">
              Contact & Location
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Dossier Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* 1. Overview Section */}
        <section id="overview" className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Institutional Profile & Strategic Mandate</h2>
          <p className="text-slate-700 leading-relaxed text-sm">{institution.summary}</p>
        </section>

        {/* 2. Performance Metrics Scorecard */}
        <section id="metrics">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Audited Performance Indicators (DBTA Tracer 2024)</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Placement Rate</div>
              <div className="mt-2 text-3xl font-mono font-bold text-emerald-600">
                {institution.metrics.employmentRate}%
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Within 6 months</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Annual Trainees</div>
              <div className="mt-2 text-3xl font-mono font-bold text-slate-900">
                {institution.metrics.annualTrainees.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Certified graduates</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Female Inclusion</div>
              <div className="mt-2 text-3xl font-mono font-bold text-blue-600">
                {institution.metrics.femaleEnrollmentPct}%
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Enrolled in trades</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Green TVET</div>
              <div className="mt-2 text-2xl font-bold text-emerald-700 flex items-center justify-center gap-1">
                <Leaf className="w-5 h-5 text-emerald-500" />
                <span>{institution.metrics.greenTVETRating}</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Renewable index</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Industry Links</div>
              <div className="mt-2 text-3xl font-mono font-bold text-purple-600">
                {institution.metrics.industryPartnerships}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">MOU partners</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Overall Score</div>
              <div className="mt-2 text-3xl font-mono font-bold text-[#003366]">
                {institution.overallScore.toFixed(1)}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Out of 100</div>
            </div>
          </div>
        </section>

        {/* 3. Key Accredited Trades */}
        <section id="trades" className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-600" />
            <span>Accredited Vocational Disciplines & Trades</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {institution.keyTrades.map((trade, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm text-slate-900">{trade}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Certified National & DBTA Curriculum</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Facilities & Diagnostic Labs */}
        <section id="facilities" className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-600" />
            <span>Verified Workshop Labs & Equipment Facilities</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {institution.facilities.map((fac, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#003366] flex items-center justify-center font-bold text-xs shrink-0">
                  0{idx + 1}
                </div>
                <div className="font-medium text-sm text-slate-800">{fac}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Strategic Technical Partners:</span>
            {institution.leadPartners.map((partner, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-slate-100 font-medium text-slate-700 border border-slate-200"
              >
                {partner}
              </span>
            ))}
          </div>
        </section>

        {/* 5. Contact & Location */}
        <section id="contact" className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Official Contact & Administration</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-900">Campus Address</div>
                <div className="text-slate-600 mt-1 text-xs leading-relaxed">{institution.contact.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-900">Inquiries & Admissions</div>
                <a
                  href={`mailto:${institution.contact.email}`}
                  className="text-[#003366] hover:underline mt-1 text-xs block font-mono"
                >
                  {institution.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-900">Telephone</div>
                <a
                  href={`tel:${institution.contact.phone}`}
                  className="text-slate-600 hover:text-slate-900 mt-1 text-xs block font-mono"
                >
                  {institution.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
