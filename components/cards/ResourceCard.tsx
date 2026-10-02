import React from 'react';
import { KnowledgeResource } from '@/content';
import { Badge } from '../ui/Badge';
import { FileText, Download, ExternalLink, Calendar, BookOpen } from 'lucide-react';

interface ResourceCardProps {
  resource?: KnowledgeResource;
  item?: KnowledgeResource;
}

export function ResourceCard({ resource, item }: ResourceCardProps) {
  const data = resource || item;
  if (!data) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-3">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant={data.type === 'Report' ? 'blue' : data.type === 'Toolkit' ? 'orange' : 'green'} size="sm">
            {data.type}
          </Badge>
          <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {data.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {data.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
          {data.description || data.abstract}
        </p>

        {/* Topic Pill */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="font-semibold text-slate-700 truncate">{data.topic || data.category}</span>
          <span className="text-[11px] font-bold text-slate-400">{data.fileFormat || data.format}</span>
        </div>
      </div>

      {/* Download or Gateway Action */}
      <div className="pt-5 mt-4 border-t border-slate-100">
        <a
          href={data.downloadUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-bold transition-all group-hover:bg-blue-600 group-hover:text-white"
        >
          <span>{data.isExternalLink ? 'Access Digital Library' : `Download (${data.fileSizeBytes || data.fileSize || 'PDF'})`}</span>
          {data.isExternalLink ? <ExternalLink className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
        </a>
      </div>
    </div>
  );
}
