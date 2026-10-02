import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock, Globe2, Building2, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Don Bosco Tech Africa',
  description: 'Get in touch with Don Bosco Tech Africa Coordinating Office in Nairobi, Kenya. Contact secretariats, partnerships, and provincial offices.',
};

const faqs = [
  {
    q: 'Where is the Don Bosco Tech Africa headquarters located?',
    a: 'Our continental coordinating office is situated at Applewood Adams, along Ngong Road in Nairobi, Kenya.',
  },
  {
    q: 'How can our institution or organization partner with DBTA?',
    a: 'We collaborate with international development partners, industry employers, bilateral donors, and educational agencies. You can use the contact form above selecting "Strategic Partnership" or email dbta@dbtechafrica.org directly.',
  },
  {
    q: 'How do students apply to individual Don Bosco TVET Centres?',
    a: 'Student admissions are handled directly by each local TVET centre according to national academic calendars. You can find centre details and provincial office contacts in our Continental Network directory.',
  },
  {
    q: 'How does DBTA support Job Placement & Tracer Studies?',
    a: 'Every Don Bosco TVET centre has a dedicated Job Service Officer (JSO) supported by our Inserjeune Tracer platform to facilitate industry internships, employer partnerships, and career tracing.',
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact & Global Secretariat"
        subtitle="Connect with our continental coordinating team in Nairobi or locate your regional Salesian Provincial TVET Office."
        badge="Get In Touch"
        breadcrumbs={[
          { label: 'Contact' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Direct Contacts */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-brand-accent font-bold text-xs uppercase tracking-wider">
                  Coordinating Office
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                  Nairobi Secretariat
                </h2>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  The executive hub overseeing continental strategy, cross-border donor programmes, curriculum harmonisation, and institutional monitoring.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Physical Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">
                      Applewood Adams, Ngong Road<br />
                      P.O. Box 25698 - 00603<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Telephone Contacts</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      <a href="tel:+254782747500" className="hover:text-brand-navy font-semibold text-slate-800">
                        +254 782 747 500
                      </a>
                    </p>
                    <span className="text-xs text-slate-400 block mt-0.5">Monday to Friday, 8:00 AM – 5:00 PM (EAT)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Official Email Channels</h4>
                    <div className="mt-1 space-y-1 text-xs sm:text-sm">
                      <div>
                        <span className="text-slate-500">General Secretariat: </span>
                        <a href="mailto:dbta@dbtechafrica.org" className="font-semibold text-brand-navy hover:underline">
                          dbta@dbtechafrica.org
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-500">Communications: </span>
                        <a href="mailto:communications@dbtechafrica.org" className="font-semibold text-brand-navy hover:underline">
                          communications@dbtechafrica.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common institutional, student, and partnership inquiries."
            badge="Help & FAQs"
            align="center"
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  {faq.q}
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
