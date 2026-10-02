import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote } from 'lucide-react';

export function ImpactStoryFeatured() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/70" id="impact-story">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block mb-2">
            FROM TRAINING TO OPPORTUNITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Real Outcomes, Dignified Lives
          </h2>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Large Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-200 shadow-sm border border-slate-200/60">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
                  alt="Esther Mwangi working on solar installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Large Editorial Quote & Human Story */}
            <div className="lg:col-span-7 space-y-6">
              <Quote className="w-10 h-10 text-[#003366]/20" />

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif text-slate-900 leading-snug font-medium italic">
                “Don Bosco didn’t just teach me how to connect solar panels—they gave me the confidence, technical rigor, and values to run an ethical business that brings light to my own community.”
              </blockquote>

              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-lg font-bold text-slate-900">Esther Mwangi</h4>
                <p className="text-sm text-slate-600">
                  Certified Solar PV Installer & Entrepreneur · Don Bosco Boys Town Karen, Kenya
                </p>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-[560px]">
                  Following graduation, Esther founded her clean energy venture, installing off-grid solar power for 120+ households and employing three fellow Salesian TVET alumni.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6">
                <Link
                  href="/stories/esther-solar-technician-kenya"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold text-sm transition-colors shadow-xs group"
                >
                  <span>Read Esther’s Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/stories"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>View all impact stories</span>
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
