import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { events } from '@/content/events';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowLeft, 
  Share2, 
  Building2, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({
    slug: e.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: 'Event Not Found | Don Bosco Tech Africa' };

  return {
    title: `${event.title} | Events | Don Bosco Tech Africa`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const formattedDate = new Date(event.startDate || event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <PageHero
        title={event.title}
        subtitle={event.description}
        badge={event.category || event.type}
        breadcrumbs={[
          { label: 'Events', href: '/events' },
          { label: event.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-navy mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Event Details */}
            <div className="lg:col-span-8">
              {event.featuredImage && (
                <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden mb-10 shadow-md border border-slate-200">
                  <Image
                    src={event.featuredImage}
                    alt={event.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                      event.status === 'Upcoming' || event.isUpcoming ? 'bg-brand-accent text-white' : 'bg-slate-800 text-white'
                    }`}>
                      {event.status || (event.isUpcoming ? 'Upcoming' : 'Concluded')}
                    </span>
                  </div>
                </div>
              )}

              <div className="prose max-w-none text-slate-700 text-base sm:text-lg leading-relaxed mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Event Programme & Objectives
                </h3>
                <p>{event.description}</p>
                <p className="mt-4">
                  Participants will engage with provincial coordinators, master trainers, and development partners on key agenda topics including curriculum modernization, labor market intelligence, and sustainable institutional financing.
                </p>
              </div>

              {/* Target Audience */}
              {event.targetAudience && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
                  <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-navy" />
                    Target Audience & Eligibility
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {event.targetAudience}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Event Metadata & RSVP */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
                <h4 className="font-bold text-slate-900 text-base mb-6 border-b border-slate-200 pb-3">
                  Event Logistics
                </h4>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Date</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-brand-navy" />
                      {formattedDate}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Format & Location</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                      {event.location} ({event.isOnline ? 'Online / Hybrid' : 'In-Person'})
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Category</span>
                    <span className="font-semibold text-brand-navy mt-1 block">
                      {event.category || event.type}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  {event.registrationUrl ? (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      Register Now <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href="/contact?interest=events"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      Inquire for Attendance
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
