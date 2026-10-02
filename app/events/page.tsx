import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { events } from '@/content/events';
import { EventsDirectory } from '@/components/events/EventsDirectory';

export const metadata: Metadata = {
  title: 'Events & Conferences | Don Bosco Tech Africa',
  description: 'Upcoming and past continental TVET conferences, regional workshops, training webinars, and partner forums.',
};

export default function EventsPage() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            title="Continental Gatherings & Workshops"
            subtitle="Explore upcoming webinars, leadership forums, and past regional technical summits."
            badge="Calendar & Archive"
          />

          <EventsDirectory initialEvents={events} />
        </div>
      </section>
    </div>
  );
}
