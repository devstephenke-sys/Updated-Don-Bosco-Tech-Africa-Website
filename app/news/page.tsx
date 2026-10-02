import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { newsArticles } from '@/content/news';
import { NewsCard } from '@/components/cards/NewsCard';
import { Newspaper } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Announcements | Don Bosco Tech Africa',
  description: 'Latest news, press releases, workshop updates, and continental announcements from Don Bosco Tech Africa.',
};

export default function NewsPage() {
  const featuredNews = newsArticles[0];
  const remainingNews = newsArticles.slice(1);

  return (
    <div>
      <PageHero
        title="News & Updates"
        subtitle="Stay updated on TVET programme milestones, provincial conferences, capacity-building workshops, and donor partnerships across Africa."
        badge="Press & Dispatches"
        breadcrumbs={[
          { label: 'News' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest Dispatches"
            subtitle="Verified reports and stories from the Don Bosco Tech Africa network."
            badge="Newsroom"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
