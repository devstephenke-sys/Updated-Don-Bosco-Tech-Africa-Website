import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { knowledgeItems } from '@/content/knowledge';
import { 
  Download, 
  FileText, 
  Calendar, 
  Tag, 
  Globe, 
  ArrowLeft, 
  Share2, 
  Layers, 
  ExternalLink 
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return knowledgeItems.map((k) => ({
    slug: k.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = knowledgeItems.find((k) => k.slug === slug);
  if (!item) return { title: 'Publication Not Found | Don Bosco Tech Africa' };

  return {
    title: `${item.title} | Knowledge Hub | Don Bosco Tech Africa`,
    description: item.abstract || item.description,
  };
}

export default async function KnowledgeDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = knowledgeItems.find((k) => k.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedItems = knowledgeItems
    .filter((k) => k.slug !== item.slug && (k.category === item.category || k.topic === item.topic))
    .slice(0, 3);

  const formattedDate = item.publishDate
    ? new Date(item.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : `${item.year}`;

  return (
    <div>
      <PageHero
        title={item.title}
        subtitle={item.abstract || item.description}
        badge={item.category || item.type}
        breadcrumbs={[
          { label: 'Knowledge Hub', href: '/knowledge' },
          { label: item.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-navy mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Publication Overview */}
            <div className="lg:col-span-8">
              {item.featuredImage && (
                <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden mb-10 shadow-md border border-slate-200">
                  <Image
                    src={item.featuredImage}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="prose max-w-none text-slate-700 text-base sm:text-lg leading-relaxed">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Executive Summary & Abstract
                </h3>
                <p>{item.abstract || item.description}</p>

                {item.tableOfContents && item.tableOfContents.length > 0 && (
                  <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl not-prose">
                    <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-brand-accent" />
                      Table of Contents
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
                      {item.tableOfContents.map((ch, i) => (
                        <li key={i} className="font-medium">{ch}</li>
                      ))}
                    </ol>
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  Policy & Implementation Context
                </h3>
                <p>
                  This publication was commissioned and standardized by Don Bosco Tech Africa for use across all 119 TVET centres, Provincial TVET secretariats, and development partners. It reflects field-tested methodologies grounded in technical vocational realities across Africa and Madagascar.
                </p>
              </div>
            </div>

            {/* Sidebar Metadata & Download Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
                <h4 className="font-bold text-slate-900 text-base mb-6 border-b border-slate-200 pb-3">
                  Document Specifications
                </h4>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Document Format</span>
                    <span className="font-semibold text-slate-800 uppercase flex items-center gap-1.5 mt-1">
                      <FileText className="w-4 h-4 text-brand-accent" />
                      {item.format || item.fileFormat} ({item.fileSize || item.fileSizeBytes || 'PDF'})
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Publication Date</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5 mt-1">
                      <Calendar className="w-4 h-4 text-brand-navy" />
                      {formattedDate}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Publisher & Authors</span>
                    <span className="font-semibold text-slate-800 mt-1 block">
                      {item.authors ? item.authors.join(', ') : (item.authorOrIssuer || 'Don Bosco Tech Africa Secretariat')}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Category / Stream</span>
                    <span className="font-semibold text-brand-navy mt-1 block">
                      {item.category || item.topic}
                    </span>
                  </div>

                  {item.tags && (
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Subject Tags</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-xs font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a
                    href={item.downloadUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <Download className="w-4 h-4" /> Download Full Document
                  </a>
                </div>
              </div>

              {/* Related Resources */}
              {relatedItems.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-3xl p-6">
                  <h4 className="font-bold text-slate-900 text-sm mb-4">
                    Related Publications
                  </h4>
                  <div className="space-y-3">
                    {relatedItems.map((r) => (
                      <Link
                        key={r.id}
                        href={`/knowledge/${r.slug}`}
                        className="block p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all group"
                      >
                        <span className="text-xs text-brand-accent font-semibold block">{r.category || r.topic}</span>
                        <span className="text-sm font-bold text-slate-800 group-hover:text-brand-navy line-clamp-2 mt-0.5">
                          {r.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
