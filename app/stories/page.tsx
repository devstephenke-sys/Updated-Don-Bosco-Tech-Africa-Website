import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { stories } from '@/content/stories';
import { StoryCard } from '@/components/cards/StoryCard';
import { Quote, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Graduate & Student Stories | Don Bosco Tech Africa',
  description: 'Real stories of youth empowerment, technical excellence, entrepreneurship, and employment across Africa.',
};

export default function StoriesPage() {
  return (
    <div>
      <PageHero
        title="Impact & Success Stories"
        subtitle="Behind every statistic is a human journey: discover how young people across Africa are mastering technical trades, breaking gender barriers, and building viable enterprises."
        badge="Human Impact"
        breadcrumbs={[
          { label: 'Stories' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Voices of Don Bosco Graduates"
            subtitle="Explore how practical TVET training transforms youth into industry leaders and community job creators."
            badge="Inspiring Journeys"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
