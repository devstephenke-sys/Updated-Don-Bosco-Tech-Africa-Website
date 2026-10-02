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
  Sparkles,
  Eye,
  HeartHandshake,
  CheckCircle2,
  Globe2,
  Building2,
  BookOpen,
} from 'lucide-react';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredStories = impactStories.slice(0, 3);
  const featuredNews = newsArticles.slice(0, 3);
  const upcomingEvents = dbtaEvents.slice(0, 2);
  const featuredResources = knowledgeResources.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Network Stats at a Glance */}
      <StatsSection />

      {/* 3. Who is DBTA? Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 aspect-4/3">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Pan-African-Network.png"
                  alt="Don Bosco TVET African Network"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Overlapping Emblem Badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl border border-slate-800 max-w-xs space-y-1 hidden sm:block">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-xs">
                  <Building2 className="w-4 h-4" />
                  <span>Continental Headquarters</span>
                </div>
                <p className="text-xs text-slate-300">Applewood Adams, Ngong Road, Nairobi, Kenya</p>
              </div>
            </div>

            {/* Narrative Info */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs md:text-sm font-bold tracking-wider text-orange-600 uppercase mb-2 block">
                  Institutional Identity & Heritage
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Who is Don Bosco Tech Africa?
                </h2>
              </div>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Don Bosco Tech Africa is the coordinating body for Salesian Technical and Vocational Education
                and Training (TVET) centres in the Africa-Madagascar region. We coordinate{' '}
                <strong className="text-slate-900 font-semibold">119 TVET institutions</strong> across{' '}
                <strong className="text-slate-900 font-semibold">35 African countries</strong>, empowering young people
                with demand-driven technical mastery and Salesian moral values.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Eye className="w-4 h-4" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    "{aboutDBTA.vision}"
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-100 space-y-2">
                  <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    "{aboutDBTA.mission}"
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button href="/about" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Learn More About DBTA
                </Button>
                <Button href="/about/board" variant="outline" size="md">
                  Governance & Board
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Do Across Africa */}
      <ThematicStreams />

      {/* 5. Signature Continental Network Explorer */}
      <section className="py-20 md:py-28 bg-white" id="network-explorer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Signature Interactive Feature"
            title="Our Continental Network Explorer"
            subtitle="Discover Salesian TVET institutions, key trade specializations, and provincial coordination across 35 African countries and Madagascar."
          />

          <NetworkExplorer />
        </div>
      </section>

      {/* 6. Flagship Projects & Programmes */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Measurable Actions"
            title="Flagship Programmes & Projects"
            subtitle="Structured multi-country interventions in renewable energy, digital fabrication, agriculture, and informal artisan accreditation."
            action={
              <Button href="/projects" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All Programmes
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Voices of Transformation"
            title="Real Lives, Real Impact"
            subtitle="From informal mechanics to certified solar entrepreneurs—discover how Salesian TVET equips African youth with sustainable careers."
            action={
              <Button href="/stories" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Read All Success Stories
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

      {/* 8. Knowledge Hub Highlight */}
      <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Institutional Knowledge Hub"
            title="Research, Publications & Toolkits"
            subtitle="Open-access research papers, policy briefs, training manuals, and Quality Management System (QMS) frameworks published by DBTA."
            className="[&>h2]:text-white [&>p]:text-slate-300"
            action={
              <Button href="/knowledge" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Knowledge Hub
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* News Col (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">News & Press</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Latest News</h3>
                </div>
                <Button href="/news" variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  All News
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredNews.slice(0, 2).map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Events Col (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Convocations</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Upcoming Events</h3>
                </div>
                <Button href="/events" variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Calendar
                </Button>
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

      {/* 12. Final Continental Call To Action */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Partner for Continental Transformation
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Join Hands With Don Bosco Tech Africa
          </h2>
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Whether you are a government agency, development donor, TVET institution, or industrial employer—collaborate
            with us to build a skilled, self-reliant African youth.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Get in Touch with Secretariat
            </Button>
            <Button href="/opportunities" variant="white" size="lg">
              Explore Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
