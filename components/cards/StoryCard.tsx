import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImpactStory } from '@/content';
import { Badge } from '../ui/Badge';
import { ArrowRight, Quote, MapPin, Award } from 'lucide-react';

interface StoryCardProps {
  story: ImpactStory;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md hover:border-orange-300 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Cover Photo */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-100">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute top-3.5 left-3.5">
            <Badge variant="orange" size="sm">
              {story.country}
            </Badge>
          </div>
        </div>

        {/* Story Metadata & Text */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-bold text-slate-900">{story.protagonistName}</span>
            <span>·</span>
            <span className="text-orange-600 font-semibold truncate">{story.role}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
            <Link href={`/stories/${story.slug}`}>{story.title}</Link>
          </h3>

          {/* Quote block */}
          <div className="p-3 bg-amber-50/40 rounded-xl border border-amber-100/80 relative">
            <Quote className="w-4 h-4 text-orange-400 absolute top-2 right-2 opacity-40" />
            <p className="text-xs text-slate-700 italic line-clamp-3 leading-relaxed">
              "{story.quote}"
            </p>
          </div>

          <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{story.centre}</span>
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={`/stories/${story.slug}`}
          className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-orange-500 text-slate-700 hover:text-white text-xs font-bold transition-all group-hover:bg-orange-500 group-hover:text-white"
        >
          <span>Read Full Story</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
