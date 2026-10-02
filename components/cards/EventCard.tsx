import React from 'react';
import Link from 'next/link';
import { DBTAEvent } from '@/content';
import { Badge } from '../ui/Badge';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface EventCardProps {
  event: DBTAEvent;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant={event.type === 'Annual Stakeholders Assembly' ? 'orange' : 'blue'} size="sm">
            {event.type}
          </Badge>
          {event.isUpcoming && <Badge variant="green" size="sm">Upcoming</Badge>}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-600">
            <Calendar className="w-4 h-4 text-orange-500" />
            <span>{event.date} {event.endDate ? `— ${event.endDate}` : ''}</span>
          </div>

          <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {event.title}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {event.description}
          </p>

          <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{event.location}</span>
          </p>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-slate-100">
        <Link
          href={event.registrationUrl || '/contact'}
          className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-orange-500 text-slate-700 hover:text-white text-xs font-bold transition-all group-hover:bg-orange-500 group-hover:text-white"
        >
          <span>Register / Inquire</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
