import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/content';
import { Badge } from '../ui/Badge';
import { ArrowRight, Globe2, Building2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isActive = project.status === 'Active';

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute top-3.5 left-3.5">
            <Badge variant="blue" size="sm">
              {project.thematicArea}
            </Badge>
          </div>
          <div className="absolute top-3.5 right-3.5">
            <span
              className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-2xs backdrop-blur-xs ${
                isActive
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          {/* Metrics snippet */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">{project.targetCountries.length} Countries</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="truncate">{project.targetCentresCount} TVET Centres</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action footer */}
      <div className="p-6 pt-0">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-bold transition-all group-hover:bg-blue-600 group-hover:text-white"
        >
          <span>Explore Project Charter</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
