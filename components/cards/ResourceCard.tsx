import React from 'react';
import { KnowledgeResource } from '@/content';
import { Download, ExternalLink, FileText } from 'lucide-react';

interface ResourceCardProps {
  resource?: KnowledgeResource;
  item?: KnowledgeResource;
}

export function ResourceCard({ resource, item }: ResourceCardProps) {
  const data = resource || item;
  if (!data) return null;

  return (
    <article className="group p-6 border border-neutral-200 bg-white hover:border-neutral-400 transition-colors flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span className="uppercase tracking-wider font-semibold text-neutral-800">
            {data.type}
          </span>
          <span>{data.year}</span>
        </div>

        <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#003366] transition-colors leading-snug line-clamp-2">
          {data.title}
        </h3>

        <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
          {data.description || data.abstract}
        </p>

        <div className="pt-2 text-[11px] text-neutral-500 font-mono">
          <span>{data.topic || data.category}</span>
          <span className="mx-1.5">·</span>
          <span>{data.fileFormat || data.format || 'PDF'}</span>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-neutral-100">
        <a
          href={data.downloadUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-[#003366] uppercase tracking-wider transition-colors"
        >
          <span>
            {data.isExternalLink
              ? 'Access Digital Library'
              : `Download (${data.fileSizeBytes || data.fileSize || 'PDF'})`}
          </span>
          {data.isExternalLink ? (
            <ExternalLink className="w-3.5 h-3.5" />
          ) : (
            <Download className="w-3.5 h-3.5" />
          )}
        </a>
      </div>
    </article>
  );
}
