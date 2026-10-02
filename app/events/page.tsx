import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { events } from '@/content/events';
import { EventCard } from '@/components/cards/EventCard';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events & Conferences | Don Bosco Tech Africa',
  description: 'Upcoming and past continental TVET conferences, regional workshops, training webinars, and partner forums.',
};

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === 'Upcoming');
  const pastEvents = events.filter((e) => e.status === 'Past');

  return (
    <div>
      <PageHero
        title="Events & Conferences"
        subtitle="Convening TVET leaders, provincial coordinators, instructors, and international partners to shape the future of African youth skills."
        badge="Continental Gatherings"
        breadcrumbs={[
          { label: 'Events' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Upcoming Gatherings & Workshops"
            subtitle="Register for upcoming webinars, leadership forums, and regional technical summits."
            badge="Calendar"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {pastEvents.length > 0 && (
            <div className="mt-20">
              <SectionHeader
                title="Past Events & Conferences"
                subtitle="Review past proceedings, workshop summaries, and continental communiqués."
                badge="Archive"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
