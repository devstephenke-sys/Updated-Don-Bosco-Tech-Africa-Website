import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/content';
import { Badge } from '../ui/Badge';
import { Calendar, Clock, ArrowRight, MapPin } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Cover Photo */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="blue" size="sm">
              {article.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.publishedDate}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTimeMinutes} min read
            </span>
          </div>

          <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            <Link href={`/news/${article.slug}`}>{article.title}</Link>
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          {article.location && (
            <p className="text-xs text-slate-500 flex items-center gap-1 pt-1">
              <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate">{article.location}</span>
            </p>
          )}
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-bold transition-all group-hover:bg-blue-600 group-hover:text-white"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
