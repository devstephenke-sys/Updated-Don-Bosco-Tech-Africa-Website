import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Image as ImageIcon, Video, Download, ExternalLink, Sparkles, FolderDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Media Center & Gallery | Don Bosco Tech Africa',
  description: 'High-resolution photo galleries, field video documentaries, official brand assets, and press resources.',
};

const photoGalleries = [
  {
    title: 'Solar Photovoltaic & Green TVET Training',
    location: 'Kakuma & Nairobi, Kenya',
    image: 'https://dbtechafrica.org/wp-content/uploads/2023/11/IMG_7809-scaled.jpg',
    category: 'Solar Energy',
    itemCount: 14,
  },
  {
    title: 'Agriculture for Life Greenhouse & Hydroponics',
    location: 'Embu, Kenya & Kigali, Rwanda',
    image: 'https://dbtechafrica.org/wp-content/uploads/2024/02/IMG_1234-scaled.jpg',
    category: 'Smart Agriculture',
    itemCount: 18,
  },
  {
    title: 'Recognition of Prior Learning (RPL) Assessment',
    location: 'Antananarivo, Madagascar',
    image: 'https://dbtechafrica.org/wp-content/uploads/2023/08/rpl-madagascar.jpg',
    category: 'Certification',
    itemCount: 12,
  },
  {
    title: 'Women in Technical Trades Workshop',
    location: 'Ashaiman, Ghana',
    image: 'https://dbtechafrica.org/wp-content/uploads/2023/05/women-welding-ghana.jpg',
    category: 'Gender Inclusion',
    itemCount: 16,
  },
  {
    title: 'Inserjeune Job Service Officers Conference',
    location: 'Johannesburg, South Africa',
    image: 'https://dbtechafrica.org/wp-content/uploads/2023/09/jso-conference-sa.jpg',
    category: 'Job Services',
    itemCount: 22,
  },
  {
    title: 'Continental TVET Coordinators Assembly',
    location: 'DBTA Secretariat, Nairobi',
    image: 'https://dbtechafrica.org/wp-content/uploads/2024/01/coordinators-assembly.jpg',
    category: 'Governance',
    itemCount: 25,
  },
];

export default function MediaPage() {
  return (
    <div>
      <PageHero
        title="Media Center & Digital Assets"
        subtitle="Explore high-resolution photography from our 119 TVET centres, documentary videos, press kits, and official Don Bosco Tech Africa branding guidelines."
        badge="Press & Multimedia"
        breadcrumbs={[
          { label: 'Media Center' },
        ]}
      />

      {/* Photo Galleries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Field Photography & Galleries"
            subtitle="Authentic visual documentation of technical training, student innovation, and workshop life across Africa."
            badge="Photo Archive"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {photoGalleries.map((gallery, i) => (
              <div
                key={i}
                className="group bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                  <Image
                    src={gallery.image}
                    alt={gallery.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-brand-navy/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                      {gallery.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-brand-gold font-semibold block">{gallery.location}</span>
                    <h3 className="text-lg font-bold leading-snug mt-0.5">
                      {gallery.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ImageIcon className="w-4 h-4 text-brand-accent" />
                    {gallery.itemCount} Photos
                  </span>
                  <span className="font-semibold text-brand-navy group-hover:text-brand-accent transition-colors flex items-center gap-1">
                    View Gallery <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Resources & Press Kit */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-brand-accent font-bold text-xs uppercase tracking-wider">
                Official Press Kit
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Brand Assets & Editorial Guidelines
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Journalists, partners, and media outlets may download official Don Bosco Tech Africa vector logos, institutional boilerplate summaries, executive portraits, and high-resolution brand assets.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FolderDown className="w-5 h-5 text-brand-navy" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Official Logo Pack (SVG, PNG, EPS)</div>
                      <div className="text-xs text-slate-500">Primary navy/gold, white monochrome, and icon mark</div>
                    </div>
                  </div>
                  <a
                    href="https://dbtechafrica.org"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    Download (ZIP)
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FolderDown className="w-5 h-5 text-brand-navy" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">DBTA Brand Identity Manual</div>
                      <div className="text-xs text-slate-500">Typography, color palette tokens, and co-branding guidelines</div>
                    </div>
                  </div>
                  <a
                    href="https://dbtechafrica.org"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    Download (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-navy rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Media Inquiries
              </span>
              <h3 className="text-2xl font-bold mt-2">
                Press & Communications Desk
              </h3>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                For interview requests with the Executive Director, TVET experts, or provincial coordinators, contact our media team:
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="text-slate-300">
                  <span className="font-bold text-white">Email:</span> communications@dbtechafrica.org
                </div>
                <div className="text-slate-300">
                  <span className="font-bold text-white">Phone:</span> +254 782 747 500
                </div>
                <div className="text-slate-300">
                  <span className="font-bold text-white">Headquarters:</span> Applewood Adams, Ngong Road, Nairobi, Kenya
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/contact?interest=media"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Submit Media Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
