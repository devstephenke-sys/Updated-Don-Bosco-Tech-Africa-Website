import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { opportunities } from '@/content/opportunities';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  Clock, 
  FileText,
  AlertCircle 
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return opportunities.map((o) => ({
    slug: o.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const opp = opportunities.find((o) => o.slug === slug);
  if (!opp) return { title: 'Opportunity Not Found | Don Bosco Tech Africa' };

  return {
    title: `${opp.title} | Opportunities | Don Bosco Tech Africa`,
    description: opp.description,
  };
}

export default async function OpportunityDetailPage({ params }: Props) {
  const { slug } = await params;
  const opp = opportunities.find((o) => o.slug === slug);

  if (!opp) {
    notFound();
  }

  const isClosed = opp.status === 'Closed';

  return (
    <div>
      <PageHero
        title={opp.title}
        subtitle={opp.description}
        badge={opp.type}
        breadcrumbs={[
          { label: 'Opportunities', href: '/opportunities' },
          { label: opp.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-navy mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all opportunities
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Terms of Reference */}
            <div className="lg:col-span-8">
              {isClosed && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-amber-900 text-sm font-semibold mb-8">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>This opportunity has closed and is no longer accepting applications.</span>
                </div>
              )}

              <div className="prose max-w-none text-slate-700 text-base sm:text-lg leading-relaxed mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Terms of Reference & Scope of Work
                </h3>
                <p>{opp.description}</p>
                <p className="mt-4">
                  Don Bosco Tech Africa is seeking qualified candidates/bidders who demonstrate a proven track record of excellence, cultural competence in African TVET contexts, and adherence to safeguarding and ethical standards.
                </p>
              </div>

              {/* Requirements & Qualifications */}
              {opp.requirements && opp.requirements.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                    Required Qualifications & Criteria
                  </h3>
                  <ul className="space-y-3">
                    {opp.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How to Apply Section */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Submission Guidelines & Deadline
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Interested and eligible applicants should submit their comprehensive CV, cover letter, and technical/financial proposals (if applicable) clearly referencing the opportunity title in the subject line.
                </p>
                <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 text-sm">
                  <span className="font-bold text-brand-navy block">Send Submissions To:</span>
                  <span className="font-semibold text-brand-accent text-base mt-1 block">
                    {opp.applicationEmail || 'recruitment@dbtechafrica.org'}
                  </span>
                </div>
              </div>
            </div>

            {/* Sidebar Summary Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
                <h4 className="font-bold text-slate-900 text-base mb-6 border-b border-slate-200 pb-3">
                  Call Key Details
                </h4>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Status</span>
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mt-1 ${
                      opp.status === 'Open' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {opp.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Category</span>
                    <span className="font-semibold text-brand-navy mt-1 block">
                      {opp.type}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Duty Station / Location</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                      {opp.location}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Application Deadline</span>
                    <span className="font-bold text-red-600 flex items-center gap-1.5 mt-1">
                      <Clock className="w-4 h-4" />
                      {new Date(opp.deadline).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                {!isClosed && (
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <a
                      href={`mailto:${opp.applicationEmail || 'recruitment@dbtechafrica.org'}?subject=Application for ${encodeURIComponent(opp.title)}`}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" /> Apply via Email
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
