import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { CheckCircle2, Eye, ShieldCheck, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accessibility Statement (WCAG 2.1 AA) | Don Bosco Tech Africa',
  description: 'Our commitment to digital accessibility, inclusive design, and WCAG 2.1 AA standards across all web surfaces.',
};

export default function AccessibilityPage() {
  return (
    <div>
      <PageHero
        title="Accessibility Statement"
        subtitle="Don Bosco Tech Africa is dedicated to ensuring that digital TVET knowledge, news, and services are accessible to all people, including persons with disabilities."
        badge="Inclusion & Standards"
        breadcrumbs={[
          { label: 'Accessibility' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate text-slate-700 leading-relaxed max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Conformance Status</h3>
            <p>
              We strive to meet or exceed **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standards across all digital pages. Our engineering design system incorporates the following principles:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-8">
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  High Contrast Text Ratios
                </div>
                <p className="text-xs text-slate-600">
                  All body text meets minimum 4.5:1 contrast ratios (and 3:1 for large text) against backgrounds.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Full Keyboard Navigation
                </div>
                <p className="text-xs text-slate-600">
                  Every interactive button, dropdown, search input, and modal can be navigated using Tab and Enter keys.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Semantic HTML & ARIA
                </div>
                <p className="text-xs text-slate-600">
                  Screen readers receive accurate landmarks, heading hierarchies (h1-h4), and descriptive alt tags.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Reduced Motion Support
                </div>
                <p className="text-xs text-slate-600">
                  All animations respect the user's `prefers-reduced-motion` operating system preference.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Feedback & Assistance</h3>
            <p>
              If you experience any accessibility barrier while browsing our platform, please notify our web team so we can address it promptly:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 not-prose text-sm text-slate-800">
              <strong>Digital Inclusion Team</strong><br />
              Email: <a href="mailto:accessibility@dbtechafrica.org" className="text-brand-accent font-semibold">accessibility@dbtechafrica.org</a><br />
              Telephone: +254 782 747 500
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
