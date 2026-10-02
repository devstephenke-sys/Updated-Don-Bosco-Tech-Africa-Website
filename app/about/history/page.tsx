import React from 'react';
import { PageHero } from '@/components/hero/PageHero';
import { aboutDBTA } from '@/content';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Our History & Heritage',
  description: 'The history, origins, and milestones of Don Bosco Tech Africa in modernizing vocational training across Africa.',
};

export default function HistoryPage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      <PageHero
        eyebrow="Origins & Milestones"
        title="Our History & Heritage"
        subtitle="From Saint John Bosco’s 19th-century apprenticeship workshops in Turin to a continental network of 119 TVET institutions across Africa."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Our History' }]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">The Salesian Vocational Tradition</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            {aboutDBTA.historySummary}
          </p>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-6">
          <h3 className="text-2xl font-extrabold text-slate-900">Key Continental Milestones</h3>

          <div className="space-y-6 border-l-2 border-blue-600 pl-6 md:pl-8 ml-2 md:ml-4">
            {aboutDBTA.milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Marker Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm" />

                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-wider block">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
