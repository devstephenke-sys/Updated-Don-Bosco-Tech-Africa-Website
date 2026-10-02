import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { stories } from '@/content/stories';
import { 
  MapPin, 
  Building2, 
  GraduationCap, 
  Quote, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return stories.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) return { title: 'Story Not Found | Don Bosco Tech Africa' };

  const storyName = story.name || story.protagonistName;

  return {
    title: `${storyName} - ${story.title} | Don Bosco Tech Africa`,
    description: story.excerpt || story.outcome,
  };
}

export default async function StoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  const otherStories = stories.filter((s) => s.slug !== story.slug).slice(0, 3);
  const storyName = story.name || story.protagonistName;
  const storyCourse = story.course || story.trade;
  const storyImage = story.image || story.coverImage || 'https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png';

  return (
    <div>
      <PageHero
        title={story.title}
        subtitle={`${storyName} • ${storyCourse} at ${story.centre}, ${story.country}`}
        badge="Success Story"
        breadcrumbs={[
          { label: 'Impact', href: '/impact' },
          { label: 'Stories', href: '/stories' },
          { label: storyName },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-navy mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all stories
          </Link>

          {/* Featured Image */}
          <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-10 shadow-lg border border-slate-200">
            <Image
              src={storyImage}
              alt={storyName}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Profile Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 mb-10 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 font-bold uppercase block text-xs">Graduate</span>
              <span className="font-bold text-slate-900 mt-0.5 block">{storyName}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold uppercase block text-xs">Trade / Course</span>
              <span className="font-semibold text-slate-800 mt-0.5 block">{storyCourse}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold uppercase block text-xs">Centre & Country</span>
              <span className="font-semibold text-slate-800 mt-0.5 block">{story.centre}, {story.country}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold uppercase block text-xs">Role</span>
              <span className="font-bold text-brand-accent mt-0.5 block">{story.role}</span>
            </div>
          </div>

          {/* Pull Quote */}
          {story.quote && (
            <div className="relative my-10 p-8 bg-gradient-to-r from-brand-navy/5 to-brand-accent/5 rounded-2xl border-l-4 border-brand-accent">
              <Quote className="w-8 h-8 text-brand-accent/40 mb-2" />
              <p className="text-lg sm:text-xl font-medium text-slate-800 italic leading-relaxed">
                "{story.quote}"
              </p>
              <div className="mt-3 font-bold text-sm text-brand-navy">
                — {storyName}
              </div>
            </div>
          )}

          {/* Narrative Content */}
          <div className="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed text-slate-700">
            {story.excerpt && (
              <p className="font-semibold text-slate-900 text-xl leading-relaxed mb-6">
                {story.excerpt}
              </p>
            )}
            {Array.isArray(story.fullStory) ? (
              story.fullStory.map((paragraph, pIdx) => (
                <p key={pIdx} className="mb-4">{paragraph}</p>
              ))
            ) : (
              <p>{story.fullStory}</p>
            )}
          </div>

          {/* Other stories recommendations */}
          {otherStories.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                More Inspiring Graduate Journeys
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {otherStories.map((other) => (
                  <Link
                    key={other.id}
                    href={`/stories/${other.slug}`}
                    className="block p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-brand-navy/40 hover:shadow-md transition-all group"
                  >
                    <span className="text-xs font-bold text-brand-accent uppercase block">
                      {other.country}
                    </span>
                    <h4 className="font-bold text-slate-900 group-hover:text-brand-navy mt-1 text-base">
                      {other.name || other.protagonistName}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {other.course || other.trade}
                    </p>
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
