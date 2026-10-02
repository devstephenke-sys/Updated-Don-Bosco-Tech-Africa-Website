import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/hero/PageHero';
import { aboutDBTA, boardMembers, provinces } from '@/content';
import { Button } from '@/components/ui/Button';
import {
  Building2,
  Award,
  Sparkles,
  ShieldCheck,
  Users2,
  Globe2,
  ArrowRight,
  Eye,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'About Don Bosco Tech Africa (DBTA)',
  description:
    'Learn about Don Bosco Tech Africa (DBTA), the continental coordinating body for 119 Salesian TVET institutions across 35 African countries and Madagascar.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Hero */}
      <PageHero
        eyebrow="Institutional Profile"
        title="About Don Bosco Tech Africa"
        subtitle="Uniting 119 TVET institutions across 35 African countries to deliver market-driven, dignifying technical education for marginalized youth."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Main Narrative & Identity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">
              Continental Mandate
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              A Continental Network Empowering African Youth
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Don Bosco Tech Africa (DBTA) is the coordinating body for all Don Bosco Technical and Vocational
              Education and Training (TVET) institutions across the Africa-Madagascar region.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Operating under the Salesian philosophy of holistic education and youth accompaniment, DBTA unites
              15 Salesian Provinces to standardize vocational curricula, upgrade workshop technologies, implement
              Quality Management Systems (QMS), and bridge the gap between education and employment through Job Service
              Offices (JSOs).
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                <span className="text-2xl font-black text-blue-700 block">119</span>
                <span className="text-xs font-semibold text-slate-600">TVET Centres</span>
              </div>
              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                <span className="text-2xl font-black text-orange-700 block">35</span>
                <span className="text-xs font-semibold text-slate-600">African Countries</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-4/3 bg-slate-100">
              <Image
                src="https://dbtechafrica.org/wp-content/uploads/2026/04/Quality-Education-Innovation.png"
                alt="Don Bosco TVET Workshop in Africa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                "{aboutDBTA.vision}"
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                "{aboutDBTA.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Our Principles</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Our Core Institutional Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutDBTA.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-blue-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Subpages Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 text-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Explore More
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Governance & Network Structure</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/about/history"
              className="p-5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 transition-colors space-y-2 group shadow-sm"
            >
              <Award className="w-6 h-6 text-orange-500" />
              <p className="text-base font-bold text-slate-900 group-hover:text-blue-600">Our History</p>
              <p className="text-xs text-slate-500">Salesian TVET origins & milestone timeline</p>
            </Link>
            <Link
              href="/about/board"
              className="p-5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 transition-colors space-y-2 group shadow-sm"
            >
              <Users2 className="w-6 h-6 text-blue-600" />
              <p className="text-base font-bold text-slate-900 group-hover:text-blue-600">DBTA Board</p>
              <p className="text-xs text-slate-500">Board Chairman & governance directors</p>
            </Link>
            <Link
              href="/about/p-tvet-network"
              className="p-5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 transition-colors space-y-2 group shadow-sm"
            >
              <Globe2 className="w-6 h-6 text-emerald-600" />
              <p className="text-base font-bold text-slate-900 group-hover:text-blue-600">P-TVET Offices</p>
              <p className="text-xs text-slate-500">15 Provincial TVET Coordinators across Africa</p>
            </Link>
            <Link
              href="/about/governance"
              className="p-5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 transition-colors space-y-2 group shadow-sm"
            >
              <Building2 className="w-6 h-6 text-indigo-600" />
              <p className="text-base font-bold text-slate-900 group-hover:text-indigo-600">Secretariat</p>
              <p className="text-xs text-slate-500">Executive operations & Nairobi office</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
