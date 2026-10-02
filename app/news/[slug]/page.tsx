import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { newsArticles } from '@/content/news';
import { 
  Calendar, 
  MapPin, 
  Tag, 
  ArrowLeft, 
  Share2, 
  User, 
  Building2 
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((n) => ({
    slug: n.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((n) => n.slug === slug);
  if (!article) return { title: 'Article Not Found | Don Bosco Tech Africa' };

  return {
    title: `${article.title} | News | Don Bosco Tech Africa`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedNews = newsArticles
    .filter((n) => n.slug !== article.slug)
    .slice(0, 3);

  const articleImage = article.coverImage || article.featuredImage || 'https://dbtechafrica.org/wp-content/uploads/2026/04/Pan-African-Network.png';
  const articleDate = article.publishedDate || article.publishDate || '2026-04-01';

  return (
    <div>
      <PageHero
        title={article.title}
        subtitle={article.excerpt}
        badge={article.category}
        breadcrumbs={[
          { label: 'News', href: '/news' },
          { label: article.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-navy mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Newsroom
          </Link>

          {/* Featured Image */}
          <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden mb-8 shadow-md border border-slate-200">
            <Image
              src={articleImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Meta Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 mb-10 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                <Calendar className="w-4 h-4 text-brand-navy" />
                {new Date(articleDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {article.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-slate-400" />
                  {article.author}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                {article.category}
              </span>
              {article.province && (
                <span className="px-2.5 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold">
                  {article.province}
                </span>
              )}
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed text-slate-700">
            <p className="font-semibold text-slate-900 text-xl leading-relaxed mb-6">
              {article.excerpt}
            </p>
            {Array.isArray(article.content) ? (
              article.content.map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))
            ) : (
              <div className="whitespace-pre-line">
                {article.content}
              </div>
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-slate-200 flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-bold text-slate-400 uppercase">Tags:</span>
              {article.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Related News */}
          {relatedNews.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Related Dispatches
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedNews.map((other) => (
                  <Link
                    key={other.id}
                    href={`/news/${other.slug}`}
                    className="block p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-brand-navy/40 hover:shadow-md transition-all group"
                  >
                    <span className="text-xs font-bold text-brand-accent uppercase block">
                      {other.category}
                    </span>
                    <h4 className="font-bold text-slate-900 group-hover:text-brand-navy mt-1 text-sm line-clamp-2">
                      {other.title}
                    </h4>
                    <span className="text-xs text-slate-400 mt-2 block">
                      {new Date(other.publishedDate || other.publishDate || '2026-01-01').toLocaleDateString()}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
