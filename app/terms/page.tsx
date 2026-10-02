import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Use & Resource Licensing | Don Bosco Tech Africa',
  description: 'Terms and conditions governing the use of the Don Bosco Tech Africa digital platform and open-access publications.',
};

export default function TermsPage() {
  return (
    <div>
      <PageHero
        title="Terms of Use & Open Access"
        subtitle="Guidelines governing website usage, intellectual property, open-access curriculum materials, and institutional trademarks."
        badge="Legal & Licensing"
        breadcrumbs={[
          { label: 'Terms of Use' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-slate-700 leading-relaxed">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h3>
          <p>
            By accessing or using the Don Bosco Tech Africa digital portal, you agree to comply with and be bound by these Terms of Use. If you do not agree, please discontinue use immediately.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Open Access Publications & Educational Use</h3>
          <p>
            Research reports, green TVET training manuals, toolkits, and policy documents published in the Knowledge Hub are provided under open-access principles for educational, academic, and non-commercial development use, provided proper attribution is given to Don Bosco Tech Africa.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Trademarks & Brand Assets</h3>
          <p>
            The Don Bosco Tech Africa name, logo, Salesian emblems, and associated brand identifiers are protected intellectual property. They may not be used without prior written authorization from the DBTA Secretariat.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. External Links & Partner Portals</h3>
          <p>
            This website connects to external partner portals (including Inserjeune Tracer, DBTVET, and Don Bosco Mondo). DBTA is not responsible for the content or privacy practices of external websites.
          </p>
        </div>
      </section>
    </div>
  );
}
