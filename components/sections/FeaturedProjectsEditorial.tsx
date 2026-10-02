import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function FeaturedProjectsEditorial() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/70" id="featured-projects">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-[680px]">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block mb-3">
              FEATURED PROGRAMMES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Initiatives Transforming African TVET
            </h2>
          </div>
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#003366] hover:text-[#D32F2F] transition-colors group"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Editorial Project Grid: 1 Large Hero Card + 2 Supporting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Large Featured Project */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 group">
            <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
              <Image
                src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
                alt="Green TVET and Solar PV Training"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-8 sm:p-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Green TVET
                </span>
                <span className="text-xs text-slate-400">8 countries · 28 centres</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#003366] transition-colors">
                Green TVET & Solar Energy Initiative
              </h3>

              <p className="text-base text-slate-600 leading-relaxed max-w-[620px]">
                Equipping Salesian TVET institutions across Africa with certified solar PV training equipment, eco-friendly campus practices, and green curricula supported by BMZ and Jugend Eine Welt.
              </p>

              <div className="pt-2">
                <Link
                  href="/projects/green-tvet-renewable-energy"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#D32F2F] hover:text-[#B71C1C] transition-colors group/link"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Supporting 2 Projects */}
          <div className="lg:col-span-5 space-y-6">
            {/* Supporting 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-xs border border-slate-200/80 space-y-3 group hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  Agribusiness
                </span>
                <span className="text-xs text-slate-400">5 countries · 12 centres</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#003366] transition-colors">
                Agriculture for Life Project
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modernizing agro-pastoral training with climate-smart drip irrigation, automated weather stations, and greenhouse technology across pilot centres.
              </p>
              <div className="pt-1">
                <Link
                  href="/projects/agriculture-for-life"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003366] hover:text-[#D32F2F] transition-colors"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Supporting 2 */}
            <div className="bg-white rounded-2xl p-7 shadow-xs border border-slate-200/80 space-y-3 group hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
                  Youth Employment
                </span>
                <span className="text-xs text-slate-400">Continental · 15 Provinces</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#003366] transition-colors">
                Job Service Offices & Graduate Tracking
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Establishing dedicated JSOs at every Salesian TVET centre and utilizing digital platforms like Inserjeune to track employment outcomes.
              </p>
              <div className="pt-1">
                <Link
                  href="/projects/job-service-offices"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003366] hover:text-[#D32F2F] transition-colors"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
