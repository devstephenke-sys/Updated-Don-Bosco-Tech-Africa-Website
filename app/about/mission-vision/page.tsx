import React from 'react';
import { PageHero } from '@/components/hero/PageHero';
import { aboutDBTA } from '@/content';
import { Eye, HeartHandshake, Target, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Mission & Vision',
  description: 'The vision, mission, and strategic objectives guiding Don Bosco Tech Africa across the continent.',
};

export default function MissionVisionPage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      <PageHero
        eyebrow="Purpose & Orientation"
        title="Mission & Vision"
        subtitle="Our institutional mandate for transforming marginalized youth through holistic, demand-driven technical and vocational training."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Mission & Vision' }]}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-md space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-lg text-slate-800 leading-relaxed font-semibold">
              "{aboutDBTA.vision}"
            </p>
            <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
              We envision a self-reliant, industrially vibrant African continent where every young person—regardless of social or economic origin—has access to dignifying vocational pathways that unlock their potential.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-md space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-800 leading-relaxed font-semibold">
              "{aboutDBTA.mission}"
            </p>
            <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
              By harmonizing technical competence with Salesian values of integrity, respect, and social solidarity, we prepare graduates who excel in the labor market and uplift their wider communities.
            </p>
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="bg-slate-50 text-slate-900 rounded-3xl p-8 md:p-10 border border-slate-200 space-y-6">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>Strategic Pillars</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Our 4 Continental Commitments</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
              <p className="font-bold text-slate-900 text-sm">1. Demand-Driven Training Quality</p>
              <p className="text-slate-600 leading-relaxed">
                Continually revising technical curricula to meet industry needs in solar, automation, ICT, and civil trades.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
              <p className="font-bold text-slate-900 text-sm">2. School-to-Work Placement</p>
              <p className="text-slate-600 leading-relaxed">
                Institutionalizing Job Service Offices (JSOs) and tracer systems to maximize graduate employment.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
              <p className="font-bold text-slate-900 text-sm">3. Green & Digital TVET Migration</p>
              <p className="text-slate-600 leading-relaxed">
                Pioneering renewable energy installations and digital skills across all Salesian TVET campuses.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
              <p className="font-bold text-slate-900 text-sm">4. Advocacy & Continental Policy</p>
              <p className="text-slate-600 leading-relaxed">
                Aligning institutional practice with the African Union Continental TVET Strategy 2025–2034.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
