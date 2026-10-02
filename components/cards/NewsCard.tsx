import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/content';
import { ArrowUpRight } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group flex flex-col justify-between border border-neutral-200 bg-white hover:border-neutral-400 transition-colors">
      <div>
        {/* Cover Photo */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-white/95 text-neutral-900 backdrop-blur-xs border border-neutral-200/80">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono mb-2">
            <time dateTime={article.publishedDate}>{article.publishedDate}</time>
            <span>·</span>
            <span>{article.readTimeMinutes} min read</span>
            {article.location && (
              <>
                <span>·</span>
                <span>{article.location}</span>
              </>
            )}
          </div>

          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#003366] transition-colors leading-snug line-clamp-2">
            <Link href={`/news/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-neutral-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-[#003366] group-hover:gap-2 transition-all uppercase tracking-wider"
        >
          <span>Read Article</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
