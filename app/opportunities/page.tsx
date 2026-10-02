import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { opportunities } from '@/content/opportunities';
import { OpportunityCard } from '@/components/cards/OpportunityCard';
import { Briefcase, FileCheck, GraduationCap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Opportunities, Careers & Tenders | Don Bosco Tech Africa',
  description: 'Explore career openings, procurement tenders, research consultancies, and student scholarships across Don Bosco Tech Africa.',
};

export default function OpportunitiesPage() {
  const activeOpportunities = opportunities.filter((o) => o.status === 'Open');
  const closedOpportunities = opportunities.filter((o) => o.status === 'Closed');

  return (
    <div>
      <PageHero
        title="Opportunities, Careers & Tenders"
        subtitle="Join our continental mission: discover employment vacancies, international procurement tenders, expert consultancies, and youth TVET scholarships."
        badge="Join Our Network"
        breadcrumbs={[
          { label: 'Opportunities' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Open Calls & Vacancies"
            subtitle="Current opportunities with the Don Bosco Tech Africa Secretariat and regional provincial offices."
            badge="Current Calls"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {activeOpportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>

          {closedOpportunities.length > 0 && (
            <div className="mt-20">
              <SectionHeader
                title="Archived & Concluded Calls"
                subtitle="Recently closed opportunities and award notices."
                badge="Archive"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {closedOpportunities.map((opp) => (
                  <OpportunityCard key={opp.id} opportunity={opp} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Procurement Integrity Notice */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-slate-900 text-lg">
                Procurement Integrity & Equal Opportunity Policy
              </h4>
              <p className="text-slate-600 text-sm mt-1 max-w-3xl">
                Don Bosco Tech Africa is committed to transparent, competitive, and zero-tolerance procurement and hiring practices. DBTA does not charge application fees at any stage of recruitment or tendering.
              </p>
            </div>
            <a
              href="mailto:procurement@dbtechafrica.org"
              className="px-5 py-2.5 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              Procurement Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
