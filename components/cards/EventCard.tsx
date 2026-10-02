import React from 'react';
import Link from 'next/link';
import { DBTAEvent } from '@/content';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface EventCardProps {
  event: DBTAEvent;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group p-5 border border-neutral-200 bg-white hover:border-neutral-400 transition-colors flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ea580c] font-mono">
            {event.date} {event.endDate ? `— ${event.endDate}` : ''}
          </span>
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-neutral-200 text-neutral-600 font-mono">
            {event.type}
          </span>
        </div>

        <div>
          <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#003366] transition-colors leading-snug">
            {event.title}
          </h3>

          <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
            {event.description}
          </p>

          <p className="mt-3 text-xs text-neutral-500 font-mono flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="truncate">{event.location}</span>
          </p>
        </div>
      </div>

      <div className="pt-4 mt-3 border-t border-neutral-100">
        <Link
          href={event.registrationUrl || '/contact'}
          className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 group-hover:text-[#003366] uppercase tracking-wider"
        >
          <span>Register / Inquire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
