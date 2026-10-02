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
import {
  projects,
  impactStories,
  newsArticles,
  dbtaEvents,
  knowledgeResources,
  aboutDBTA,
} from '@/content';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredStories = impactStories.slice(0, 3);
  const featuredNews = newsArticles.slice(0, 2);
  const upcomingEvents = dbtaEvents.slice(0, 2);
  const featuredResources = knowledgeResources.slice(0, 3);

  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Key Impact Figures */}
      <StatsSection />

      {/* 3. About Don Bosco Tech Africa */}
      <section className="py-20 md:py-28 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] w-full border border-neutral-200 bg-neutral-100 overflow-hidden">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Pan-African-Network.png"
                  alt="Don Bosco TVET African Network"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
              <div className="p-4 border border-neutral-200 text-xs font-mono space-y-1">
                <span className="font-bold text-neutral-900 block">
                  Continental Secretariat Headquarters
                </span>
                <span className="text-neutral-500 block">
                  Applewood Adams, Ngong Road, Nairobi, Kenya
                </span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  About The Network
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                  Coordinating Salesian Technical Training Across Africa
                </h2>
              </div>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                Don Bosco Tech Africa is the coordinating body for Salesian Technical and Vocational Education
                and Training (TVET) centres across the Africa-Madagascar region. We unite{' '}
                <strong className="text-neutral-950 font-semibold">119 TVET institutions</strong> in{' '}
                <strong className="text-neutral-950 font-semibold">35 African nations</strong>, equipping youth with market-driven artisan skills, green technologies, and lifelong human values.
              </p>

              {/* Vision & Mission blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 border border-neutral-200 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 block">
                    Our Vision
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed italic">
                    "{aboutDBTA.vision}"
                  </p>
                </div>

                <div className="p-5 border border-neutral-200 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 block">
                    Our Mission
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed italic">
                    "{aboutDBTA.mission}"
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#003366] transition-colors"
                >
                  <span>Institutional Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/about/board"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <span>Governance & Leadership</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Focus Areas */}
      <ThematicStreams />

      {/* 5. Continental TVET Network Explorer */}
      <section className="py-20 md:py-28 border-t border-neutral-200" id="network-explorer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Interactive Directory"
            title="Continental TVET Network"
            subtitle="Explore 119 technical training institutions and provincial coordination across Africa and Madagascar."
          />
          <NetworkExplorer />
        </div>
      </section>

      {/* 6. Flagship Programmes */}
      <section className="py-20 md:py-28 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Flagship Programmes"
            title="Multi-Country Projects"
            subtitle="Strategic interventions in solar energy, digital certification, sustainable agriculture, and female artisan inclusion."
            action={
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#003366] transition-colors"
              >
                <span>All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Student & Graduate Impact */}
      <section className="py-20 md:py-28 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Human Impact"
            title="Student Success Stories"
            subtitle="Direct accounts of youth empowerment, technical excellence, and dignified employment across the continent."
            action={
              <Link
                href="/stories"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#003366] transition-colors"
              >
                <span>All Stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Knowledge Hub Highlight */}
      <section className="py-20 md:py-28 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Research & Policy"
            title="Publications & Toolkits"
            subtitle="Access policy briefs, tracer studies, green TVET curricula, and institutional toolkits."
            action={
              <Link
                href="/knowledge"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#003366] transition-colors"
              >
                <span>All Publications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. News & Upcoming Events */}
      <section className="py-20 md:py-28 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* News Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                  Latest News
                </h3>
                <Link
                  href="/news"
                  className="text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#003366] flex items-center gap-1"
                >
                  <span>All News</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredNews.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Events Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                  Upcoming Events
                </h3>
                <Link
                  href="/events"
                  className="text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#003366] flex items-center gap-1"
                >
                  <span>Calendar</span>
                  <ArrowRight className="w-3 h-3" />
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

      {/* 10. Strategic Partners */}
      <PartnerCarousel />

      {/* 11. Digital Ecosystem */}
      <DigitalEcosystemGrid />

      {/* 12. Minimal Editorial Call to Action */}
      <section className="py-24 border-t border-neutral-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Continental Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Partner With Don Bosco Tech Africa
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Collaborate with our continental secretariat on green energy transitions, TVET curriculum reform, tracer research, or youth artisan skills development across 35 countries.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-neutral-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Contact Secretariat
            </Link>
            <Link
              href="/opportunities"
              className="px-6 py-3 border border-neutral-200 text-neutral-900 text-xs font-mono uppercase tracking-wider hover:bg-neutral-50 transition-colors"
            >
              View Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
