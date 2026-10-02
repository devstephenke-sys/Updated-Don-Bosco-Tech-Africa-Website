import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImpactStory } from '@/content';
import { ArrowUpRight } from 'lucide-react';

interface StoryCardProps {
  story: ImpactStory;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="group flex flex-col justify-between border border-neutral-200 bg-white hover:border-neutral-400 transition-colors">
      <div>
        {/* Cover Photo */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-white/95 text-neutral-900 backdrop-blur-xs border border-neutral-200/80">
              {story.country}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono mb-2">
            {story.protagonistName} — {story.role}
          </div>

          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#003366] transition-colors leading-snug line-clamp-2">
            <Link href={`/stories/${story.slug}`}>
              {story.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-neutral-600 line-clamp-3 leading-relaxed italic border-l-2 border-neutral-300 pl-3">
            "{story.quote}"
          </p>

          <p className="mt-4 text-xs text-neutral-500 font-mono">
            {story.centre}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/stories/${story.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-[#003366] group-hover:gap-2 transition-all uppercase tracking-wider"
        >
          <span>Read Story</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
