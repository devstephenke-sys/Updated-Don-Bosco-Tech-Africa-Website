import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection | Don Bosco Tech Africa',
  description: 'Data protection standards, student privacy policies, and institutional confidentiality at Don Bosco Tech Africa.',
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        title="Privacy & Data Protection Policy"
        subtitle="How Don Bosco Tech Africa safeguards personal information, student tracer survey data, and institutional records across all operations."
        badge="Data Protection"
        breadcrumbs={[
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-slate-700 leading-relaxed">
          <p className="lead text-lg font-medium text-slate-900">
            Don Bosco Tech Africa (DBTA) is committed to protecting the privacy, confidentiality, and data rights of students, TVET staff, partner organisations, and website visitors across all 35 African countries of operation.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Scope of Data Collection</h3>
          <p>
            We collect personal data only when voluntarily provided (e.g., through contact inquiries, newsletter registrations, job applications, or tracer study surveys) or through standard anonymized website analytics to improve user experience.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Student & Tracer Study Protection</h3>
          <p>
            Data gathered through the **Inserjeune Tracer Study Platform** and TVET Management Information Systems (MIS) is strictly anonymized when aggregated for public reporting. Individual student identities, contact details, and employer reviews are kept confidential and accessed only by authorized Job Service Officers (JSOs).
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Data Sharing & Third Parties</h3>
          <p>
            DBTA does not sell, rent, or lease personal information to third parties. Data is shared with international development partners (e.g., BMZ, Don Bosco Mondo) solely in the form of aggregated monitoring and evaluation metrics.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Data Subject Rights & Contact</h3>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data held by DBTA. Direct all privacy inquiries to:
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 not-prose text-sm text-slate-800">
            <strong>Data Protection Officer</strong><br />
            Don Bosco Tech Africa Secretariat<br />
            Applewood Adams, Ngong Road, Nairobi, Kenya<br />
            Email: <a href="mailto:privacy@dbtechafrica.org" className="text-brand-accent font-semibold">privacy@dbtechafrica.org</a>
          </div>
        </div>
      </section>
    </div>
  );
}
