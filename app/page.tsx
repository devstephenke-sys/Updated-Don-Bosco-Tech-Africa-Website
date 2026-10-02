import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomeHero } from '@/components/hero/HomeHero';
import { StatsSection } from '@/components/sections/StatsSection';
import { ThematicStreams } from '@/components/sections/ThematicStreams';
import { NetworkExplorer } from '@/components/network/NetworkExplorer';
import { PartnerCarousel } from '@/components/sections/PartnerCarousel';
import { DigitalEcosystemGrid } from '@/components/sections/DigitalEcosystemGrid';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { StoryCard } from '@/components/cards/StoryCard';
import { NewsCard } from '@/components/cards/NewsCard';
import { EventCard } from '@/components/cards/EventCard';
import { ResourceCard } from '@/components/cards/ResourceCard';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/Button';
import {
  projects,
  impactStories,
  newsArticles,
  dbtaEvents,
  knowledgeResources,
  aboutDBTA,
} from '@/content';
import {
  ArrowRight,
  Eye,
  HeartHandshake,
  CheckCircle2,
  Building2,
} from 'lucide-react';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredStories = impactStories.slice(0, 3);
  const featuredNews = newsArticles.slice(0, 2);
  const upcomingEvents = dbtaEvents.slice(0, 2);
  const featuredResources = knowledgeResources.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Network Stats at a Glance */}
      <StatsSection />

      {/* 3. Who is DBTA? Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-4/3">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Pan-African-Network.png"
                  alt="Don Bosco TVET African Network"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Secretariat Location Badge */}
              <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                <Building2 className="w-5 h-5 text-blue-700 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Secretariat Headquarters</span>
                  <span className="text-slate-600">Applewood Adams, Ngong Road, Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Narrative Info */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 block">
                  About the Network
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Who is Don Bosco Tech Africa?
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Don Bosco Tech Africa is the coordinating body for Salesian Technical and Vocational Education
                and Training (TVET) centres in the Africa-Madagascar region. We coordinate{' '}
                <strong>119 TVET institutions</strong> across{' '}
                <strong>35 African countries</strong>, empowering young people
                with demand-driven technical mastery and Salesian moral values.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#003366] font-bold text-sm">
                    <Eye className="w-4 h-4" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    "{aboutDBTA.vision}"
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    "{aboutDBTA.mission}"
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="/about" variant="primary" size="md">
                  Who We Are
                </Button>
                <Button href="/about/board" variant="outline" size="md">
                  Board & Governance
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Do Across Africa */}
      <ThematicStreams />

      {/* 5. Signature Continental Network Explorer */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80" id="network-explorer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Interactive Directory"
            title="Continental TVET Network"
            subtitle="Explore 119 technical training institutions and provincial coordination across Africa and Madagascar."
          />

          <NetworkExplorer />
        </div>
      </section>

      {/* 6. Flagship Projects & Programmes */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Flagship Programmes"
            title="Multi-Country Projects"
            subtitle="Key interventions in solar energy, digital skills, agriculture, and artisan certification."
            action={
              <Button href="/projects" variant="outline" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                All Projects
              </Button>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Success Stories & Human Impact */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Graduate Impact"
            title="Student Success Stories"
            subtitle="Real outcomes: how technical training empowers youth with dignified employment."
            action={
              <Button href="/stories" variant="outline" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                All Stories
              </Button>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Knowledge Hub Highlight (Clean Light Theme) */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Publications & Research"
            title="Knowledge Hub"
            subtitle="Access policy briefs, green TVET manuals, tracer reports, and training toolkits."
            action={
              <Button href="/knowledge" variant="outline" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                All Publications
              </Button>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Latest News & Upcoming Events */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* News Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-xl font-bold text-slate-900">Latest News</h3>
                <Link href="/news" className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1">
                  View All <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredNews.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Events Col */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-xl font-bold text-slate-900">Upcoming Events</h3>
                <Link href="/events" className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1">
                  Calendar <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Partner & Donor Carousel */}
      <PartnerCarousel />

      {/* 11. Digital Ecosystem Grid */}
      <DigitalEcosystemGrid />

      {/* 12. Final Clean Light Call To Action */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Partner With Don Bosco Tech Africa
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Collaborate with our continental secretariat on green energy, TVET curriculum upgrade, tracer studies, or youth skills development across 35 countries.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="md">
              Contact Secretariat
            </Button>
            <Button href="/opportunities" variant="outline" size="md">
              View Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
