import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/content';
import { ArrowUpRight, Globe2, Building2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between border border-neutral-200 bg-white hover:border-neutral-400 transition-colors">
      <div>
        {/* Cover Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-white/95 text-neutral-900 backdrop-blur-xs border border-neutral-200/80">
              {project.thematicArea}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono mb-2">
            <span>{project.status}</span>
            <span>·</span>
            <span>{project.targetCountries.length} Countries</span>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#003366] transition-colors leading-snug line-clamp-2">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-neutral-600 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-[#003366] group-hover:gap-2 transition-all uppercase tracking-wider"
        >
          <span>View Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
