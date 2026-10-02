import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/content';
import { Badge } from '../ui/Badge';
import { ArrowRight, Users2, Globe2, Building2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Cover Image */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="blue" size="sm">
              {project.thematicArea}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          {/* Metrics snippet */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="truncate">{project.targetCountries.length} Countries</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">{project.targetCentresCount} TVET Centres</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action footer */}
      <div className="p-6 pt-0">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-sm font-semibold transition-all group-hover:bg-blue-600 group-hover:text-white"
        >
          <span>Explore Project Charter</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
