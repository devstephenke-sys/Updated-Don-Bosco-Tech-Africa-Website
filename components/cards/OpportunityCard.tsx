import React from 'react';
import Link from 'next/link';
import { Opportunity } from '@/content';
import { Badge } from '../ui/Badge';
import { Briefcase, MapPin, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const isOpen = opportunity.status === 'OPEN';

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant={opportunity.category === 'Job Vacancy' ? 'blue' : opportunity.category === 'Consultancy' ? 'orange' : 'slate'}>
            {opportunity.category}
          </Badge>

          <Badge variant={isOpen ? 'green' : 'red'}>
            {opportunity.status}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          <Link href={`/opportunities/${opportunity.slug}`}>{opportunity.title}</Link>
        </h3>

        {/* Location & Deadline */}
        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {opportunity.location}
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-slate-700">
            <Calendar className="w-3.5 h-3.5 text-orange-500" />
            Deadline: {opportunity.deadline}
          </span>
        </div>

        {/* Summary */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {opportunity.summary}
        </p>

        {/* Requirements preview */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100">
          {opportunity.requirements.slice(0, 2).map((req, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{req}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/opportunities/${opportunity.slug}`}
          className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-bold transition-all group-hover:bg-blue-600 group-hover:text-white"
        >
          <span>{isOpen ? 'View Details & Apply' : 'View Archived Opportunity'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
