import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { thematicAreas } from '@/content/thematicAreas';
import { projects } from '@/content/projects';
import { knowledgeItems } from '@/content/knowledge';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ResourceCard } from '@/components/cards/ResourceCard';
import { 
  Building2, 
  Sun, 
  Briefcase, 
  Users, 
  Wrench, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FileText,
  Layers
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Building2,
  Sun,
  Briefcase,
  Users,
  Wrench,
  GraduationCap,
  BookOpen,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return thematicAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = thematicAreas.find((a) => a.slug === slug);
  if (!area) return { title: 'Thematic Area Not Found | DBTA' };

  return {
    title: `${area.title} | What We Do | Don Bosco Tech Africa`,
    description: area.shortDesc || area.description || area.fullDesc,
  };
}

export default async function ThematicDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = thematicAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const IconComponent = iconMap[area.icon] || BookOpen;

  // Find related projects and knowledge resources
  const relatedProjects = projects.filter((p) => 
    p.thematicArea.toLowerCase().includes(area.title.toLowerCase()) ||
    area.title.toLowerCase().includes(p.thematicArea.toLowerCase()) ||
    (area.slug.includes('green') && p.thematicArea.includes('Green')) ||
    (area.slug.includes('employability') && p.thematicArea.includes('Employability')) ||
    (area.slug.includes('quality') && p.thematicArea.includes('Quality'))
  );

  const relatedKnowledge = knowledgeItems.filter((k) =>
    (k.thematicArea && k.thematicArea.toLowerCase().includes(area.title.toLowerCase())) ||
    (k.category && k.category.toLowerCase().includes(area.title.toLowerCase())) ||
    (k.topic && k.topic.toLowerCase().includes(area.title.toLowerCase())) ||
    (k.tags && k.tags.some((t: string) => area.title.toLowerCase().includes(t.toLowerCase())))
  );

  return (
    <div>
      <PageHero
        title={area.title}
        subtitle={area.fullDesc || area.description || area.shortDesc}
        badge={area.tagline || 'Strategic Work Stream'}
        breadcrumbs={[
          { label: 'What We Do', href: '/what-we-do' },
          { label: area.title },
        ]}
      />

      {/* Main Stream Blueprint */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center font-bold shadow-md">
                  <IconComponent className="w-8 h-8 text-brand-gold" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block">
                    Strategic Stream
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Operational Blueprint & Delivery
                  </h2>
                </div>
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                {area.fullDesc || area.description || area.shortDesc}
              </p>

              {area.objectives && area.objectives.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-10">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-brand-accent" />
                    Key Strategic Objectives
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {area.objectives.map((obj: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-snug">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Projects in this Area */}
              {relatedProjects.length > 0 && (
                <div className="mt-12">
                  <SectionHeader
                    title="Active Continental Projects"
                    subtitle="Initiatives currently being implemented across centres under this thematic stream."
                    badge="Operations"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {relatedProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar with Key Metrics & Quick Actions */}
            <div className="lg:col-span-4 space-y-6">
              {area.keyMetrics && area.keyMetrics.length > 0 && (
                <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-brand-gold" />
                    Impact & Focus Metrics
                  </h3>
                  <div className="space-y-6">
                    {area.keyMetrics.map((metric: { value: string; label: string; description: string }, i: number) => (
                      <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <div className="text-3xl font-black text-brand-gold">
                          {metric.value}
                        </div>
                        <div className="text-sm font-semibold text-white mt-1">
                          {metric.label}
                        </div>
                        <div className="text-xs text-slate-300 mt-0.5">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
                <h4 className="font-bold text-slate-900 text-sm mb-4">
                  Explore Other Thematic Streams
                </h4>
                <div className="space-y-2">
                  {thematicAreas.map((other) => {
                    const OtherIcon = iconMap[other.icon] || BookOpen;
                    const isActive = other.slug === area.slug;
                    return (
                      <Link
                        key={other.id}
                        href={`/what-we-do/${other.slug}`}
                        className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-brand-navy text-white shadow-sm'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                        }`}
                      >
                        <span className="flex items-center gap-2 truncate">
                          <OtherIcon className="w-4 h-4 shrink-0 text-brand-accent" />
                          <span className="truncate">{other.title}</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Publications / Toolkits */}
      {relatedKnowledge.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Knowledge Hub & Publications"
              subtitle="Research reports, manuals, and policy documents supporting this thematic area."
              badge="Knowledge Transfer"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {relatedKnowledge.map((item) => (
                <ResourceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
