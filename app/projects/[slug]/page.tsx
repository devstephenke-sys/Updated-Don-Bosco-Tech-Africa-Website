import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { projects } from '@/content/projects';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Target, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Building2,
  Share2,
  Download,
  FileText
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found | Don Bosco Tech Africa' };

  return {
    title: `${project.title} | Projects | Don Bosco Tech Africa`,
    description: project.summary,
  };
}

export default async function ProjectCharterPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectImage = project.featuredImage || project.coverImage || 'https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png';
  const projectCountries = project.countries || project.targetCountries || [];

  return (
    <div>
      <PageHero
        title={project.title}
        subtitle={project.tagline || project.summary}
        badge={project.thematicArea}
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          { label: project.title },
        ]}
      />

      {/* Main Project Details Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              {/* Featured Project Banner */}
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden mb-10 shadow-lg border border-slate-200">
                <Image
                  src={projectImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                    project.status === 'Active' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-slate-700 text-white'
                  }`}>
                    {project.status} Project
                  </span>
                </div>
              </div>

              {/* Project Executive Summary */}
              <div className="prose max-w-none text-slate-700 text-base sm:text-lg leading-relaxed mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Project Overview & Strategic Context
                </h3>
                <p>{project.summary}</p>
                {project.description && <p className="mt-4">{project.description}</p>}
              </div>

              {/* Key Objectives */}
              {project.objectives && project.objectives.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-brand-accent" />
                    Key Objectives & Target Outcomes
                  </h3>
                  <ul className="space-y-3">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Milestones / Impact Indicators */}
              {project.milestones && project.milestones.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Key Milestones & Delivered Outputs
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.milestones.map((m, i) => (
                      <div key={i} className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs">
                        <div className="text-brand-accent font-bold text-xs uppercase tracking-wider">
                          Milestone {i + 1}
                        </div>
                        <div className="text-slate-800 font-semibold text-sm mt-1">{m}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Charter Metadata */}
            <div className="lg:col-span-4 space-y-6">
              {/* Project Quick Facts Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
                <h4 className="font-bold text-slate-900 text-base mb-6 border-b border-slate-200 pb-3">
                  Project Charter Summary
                </h4>

                <div className="space-y-5 text-sm">
                  {project.duration && (
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Timeline</span>
                      <span className="font-semibold text-slate-800 flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4 text-brand-navy" />
                        {project.duration}
                      </span>
                    </div>
                  )}

                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Thematic Area</span>
                    <span className="font-semibold text-slate-800 mt-1 block">
                      {project.thematicArea}
                    </span>
                  </div>

                  {(project.beneficiaries || project.beneficiariesTarget) && (
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Direct Beneficiaries</span>
                      <span className="font-bold text-brand-navy flex items-center gap-2 mt-1 text-base">
                        <Users className="w-4 h-4 text-brand-accent" />
                        {project.beneficiaries || project.beneficiariesTarget}
                      </span>
                    </div>
                  )}

                  {projectCountries.length > 0 && (
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Target Countries</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {projectCountries.map((c) => (
                          <span key={c} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-xs font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.partners && project.partners.length > 0 && (
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Partners & Donors</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.partners.map((p) => (
                          <span key={p} className="px-2.5 py-1 rounded-md bg-brand-navy text-white text-xs font-semibold">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
                  <Link
                    href="/contact?interest=project_collaboration"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    Inquire About Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Other Projects */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6">
                <h4 className="font-bold text-slate-900 text-sm mb-4">
                  Other Continental Projects
                </h4>
                <div className="space-y-3">
                  {projects
                    .filter((p) => p.slug !== project.slug)
                    .slice(0, 4)
                    .map((other) => (
                      <Link
                        key={other.id}
                        href={`/projects/${other.slug}`}
                        className="block p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all group"
                      >
                        <span className="text-xs text-brand-accent font-semibold block">{other.thematicArea}</span>
                        <span className="text-sm font-bold text-slate-800 group-hover:text-brand-navy line-clamp-1 mt-0.5">
                          {other.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
