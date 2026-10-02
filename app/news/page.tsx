import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { newsArticles } from '@/content/news';
import { NewsDirectory } from '@/components/news/NewsDirectory';

export const metadata: Metadata = {
  title: 'News & Announcements | Don Bosco Tech Africa',
  description: 'Latest news, press releases, workshop updates, and continental announcements from Don Bosco Tech Africa.',
};

export default function NewsPage() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            title="Latest Dispatches"
            subtitle="Verified reports and stories from the Don Bosco Tech Africa network."
            badge="Newsroom"
          />

          <NewsDirectory initialArticles={newsArticles} />
        </div>
      </section>
    </div>
  );
}
