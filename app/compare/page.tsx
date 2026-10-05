import React, { Suspense } from 'react';
import Link from 'next/link';
import { institutions } from '@/content/institutions';
import { Scale, Check, X, Award, Leaf, Building2, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Side-by-Side TVET Institution Benchmark Comparator | Don Bosco Tech Africa',
  description:
    'Compare performance indicators, workshop equipment, accredited trades, and graduate employment outcomes across Salesian TVET institutions.',
};

function CompareContent({ searchParams }: { searchParams: { ids?: string } }) {
  const ids = searchParams?.ids ? searchParams.ids.split(',').filter(Boolean) : [];
  
  // Default to first 2 institutions if none specified
  const selectedInstitutions = ids.length > 0 
    ? institutions.filter((i) => ids.includes(i.id))
    : institutions.slice(0, 3);

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
            <Link href="/rankings" className="hover:text-white transition-colors">
              Rankings
            </Link>
            <span>/</span>
            <span className="text-amber-400">Institutional Comparator</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5" />
              Side-by-Side TVET Benchmark Matrix
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Compare TVET Centres & Standards
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Examine comparative employment placement rates, equipment certification levels, green campus transitions, and vocational trades side by side.
            </p>
          </div>
        </div>
      </div>

      {/* ── Comparison Table Matrix ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50/90 border-b border-slate-200">
                  <th className="py-5 px-6 font-semibold text-slate-500 text-xs uppercase tracking-wider w-64 min-w-[200px]">
                    Comparative Indicator
                  </th>
                  {selectedInstitutions.map((inst) => (
                    <th key={inst.id} className="py-5 px-6 min-w-[260px] align-top">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{inst.flagEmoji}</span>
                        <span className="text-xs font-mono font-bold text-amber-600">
                          {inst.rankBand}
                        </span>
                      </div>
                      <Link
                        href={`/institutions/${inst.id}`}
                        className="font-bold text-slate-900 hover:text-[#003366] text-base leading-snug block"
                      >
                        {inst.shortName || inst.name}
                      </Link>
                      <div className="text-xs text-slate-500 font-normal mt-1">
                        {inst.city}, {inst.countryName} • Prov. {inst.provinceCode}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {/* 1. Overall Score */}
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-700 bg-slate-50/40">
                    Overall Index Score
                  </td>
                  {selectedInstitutions.map((inst) => (
                    <td key={inst.id} className="py-4 px-6 font-mono font-bold text-xl text-[#003366]">
                      {inst.overallScore.toFixed(1)} <span className="text-xs text-slate-400 font-sans">/ 100</span>
                    </td>
                  ))}
                </tr>

                {/* 2. Accreditation Tier */}
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-700 bg-slate-50/40">
                    Accreditation Level
                  </td>
                  {selectedInstitutions.map((inst) => (
                    <td key={inst.id} className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold ${
                        inst.tier.includes('Center of Excellence')
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-blue-50 text-blue-800'
                      }`}>
                        {inst.tier}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* 3. Graduate Placement Rate */}
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-700 bg-slate-50/40">
                    Graduate Placement Rate
                  </td>
                  {selectedInstitutions.map((inst) => (
                    <td key={inst.id} className="py-4 px-6">
                      <div className="font-mono font-bold text-emerald-600 text-lg">
                        {inst.metrics.employmentRate}%
                      </div>
                      <div className="text-xs text-slate-400">Audited tracer data 2024</div>
                    </td>
                  ))}
                </tr>

                {/* 4. Annual Trainee Capacity */}
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-700 bg-slate-50/40">
                    Annual Trainee Capacity
                  </td>
                  {selectedInstitutions.map((inst) => (
                    <td key={inst.id} className="py-4 px-6 font-mono font-medium text-slate-800">
                      {inst.metrics.annualTrainees.toLocaleString()} trainees/year
                    </td>
                  ))}
                </tr>

                {/* 5. Female Inclusion in STEM */}
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-700 bg-slate-50/40">
                    Female Inclusion %
                  </td>
                  {selectedInstitutions.map((inst) => (
                    <td key={inst.id} className="py-4 px-6 font-mono font-semibold text-blue-700">
                      {inst.metrics.femaleEnrollmentPct}%
                    </td>
                  ))}
                </tr>

                {/* 6. Green TVET Rating */}
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-700 bg-slate-50/40">
                    Green TVET Status
                  </td>
                  {selectedInstitutions.map((inst) => (
                    <td key={inst.id} className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                        {inst.metrics.greenTVETRating} Rating
                      </span>
                    </td>
                  ))}
                </tr>

                {/* 7. Key Vocational Disciplines */}
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-700 bg-slate-50/40 align-top">
                    Accredited Trades
                  </td>
                  {selectedInstitutions.map((inst) => (
                    <td key={inst.id} className="py-4 px-6 align-top">
                      <ul className="space-y-1">
                        {inst.keyTrades.map((t, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* 8. Workshop Labs & Facilities */}
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-700 bg-slate-50/40 align-top">
                    Diagnostic Labs & Infrastructure
                  </td>
                  {selectedInstitutions.map((inst) => (
                    <td key={inst.id} className="py-4 px-6 align-top">
                      <ul className="space-y-1">
                        {inst.facilities.map((f, idx) => (
                          <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* 9. Action Buttons */}
                <tr className="bg-slate-50/40">
                  <td className="py-5 px-6 font-semibold text-slate-700">
                    Institutional Actions
                  </td>
                  {selectedInstitutions.map((inst) => (
                    <td key={inst.id} className="py-5 px-6">
                      <Link
                        href={`/institutions/${inst.id}`}
                        className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-[#003366] hover:bg-[#002244] text-white text-xs font-semibold transition-colors"
                      >
                        View Full Dossier
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/rankings"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003366] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to TVET Rankings Table</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>;
}) {
  const resolvedParams = await searchParams;
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading comparison matrix...</div>}>
      <CompareContent searchParams={resolvedParams} />
    </Suspense>
  );
}
