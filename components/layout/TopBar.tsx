import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, ExternalLink, Globe2 } from 'lucide-react';
import { aboutDBTA } from '@/content';

export function TopBar() {
  return (
    <div className="bg-slate-50 text-slate-600 text-xs py-2 px-4 border-b border-slate-200 hidden lg:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Contact info */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${aboutDBTA.headquarters.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 hover:text-blue-900 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-700" />
            <span>{aboutDBTA.headquarters.phone}</span>
          </a>
          <a
            href={`mailto:${aboutDBTA.headquarters.email}`}
            className="flex items-center gap-1.5 hover:text-blue-900 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-blue-700" />
            <span>{aboutDBTA.headquarters.email}</span>
          </a>
          <div className="flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Mon - Fri: 8:00 AM - 5:00 PM EAT</span>
          </div>
        </div>

        {/* Digital ecosystem shortcuts & network tag */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 border-r border-slate-200 pr-5">
            <a
              href="https://www.digitallibrary.dbtechafrica.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors flex items-center gap-1 font-medium"
            >
              Digital Library <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://tvet.dbtechafrica.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors flex items-center gap-1 font-medium"
            >
              DBTVET Portal <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://dbtechafricatracer.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors flex items-center gap-1 font-medium"
            >
              Inserjeune <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-slate-600">
            <Globe2 className="w-3.5 h-3.5 text-blue-700" />
            <span className="font-medium text-slate-800">35 African Nations & Madagascar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
