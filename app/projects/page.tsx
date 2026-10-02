import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Layers, CheckCircle2, Clock, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Continental Projects & Initiatives | Don Bosco Tech Africa',
  description: 'Explore flagship TVET development projects implemented across Africa by Don Bosco Tech Africa and international partners.',
};

export default function ProjectsPage() {
  const activeProjects = projects.filter((p) => p.status === 'Active');
  const completedProjects = projects.filter((p) => p.status === 'Completed');

  return (
    <div>
      <PageHero
        title="Continental Projects & Programmes"
        subtitle="Multi-country initiatives advancing renewable energy, greening TVET, digital job placement, modern agriculture, and recognition of prior learning."
        badge="Strategic Interventions"
        breadcrumbs={[
          { label: 'Projects' },
        ]}
      />

      {/* Projects List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Active Flagship Projects"
            subtitle="Current multi-stakeholder programmes operating across our 15 Salesian Provinces."
            badge="Ongoing Programmes"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {activeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {completedProjects.length > 0 && (
            <div className="mt-20">
              <SectionHeader
                title="Completed & Institutionalised Initiatives"
                subtitle="High-impact projects whose frameworks and best practices are now sustained across the network."
                badge="Legacy & Scaled Impact"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {completedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Project Governance & Partnership Strip */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">
                Funding & Donor Partnership
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                Co-Design High-Impact TVET Projects With Us
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                DBTA provides turnkey project management, verified procurement governance, on-the-ground presence in 35 countries, and rigorous M&E reporting adhering to international development standards.
              </p>
            </div>
            <a
              href="/contact?interest=project_partnership"
              className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-sm transition-all shadow-lg shrink-0"
            >
              Partner on a Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
