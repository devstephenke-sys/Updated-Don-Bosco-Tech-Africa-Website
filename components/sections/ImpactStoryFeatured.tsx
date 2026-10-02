import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function ImpactStoryFeatured() {
  return (
    <section
      className="py-20 md:py-28 bg-white border-t border-slate-200/70"
      id="impact-story"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 reveal">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block mb-2">
            FROM TRAINING TO OPPORTUNITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Real Outcomes, Dignified Lives
          </h2>
        </div>

        {/* Cinematic impact card — dark bg, full image, overlaid quote */}
        <div className="relative rounded-3xl overflow-hidden reveal">
          {/* Background photo */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-slate-900 img-zoom-wrap">
            <Image
              src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
              alt="Esther Mwangi, solar technician and DBTA graduate"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover opacity-60"
            />
            {/* Gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/90 via-[#001a33]/60 to-transparent" />
          </div>

          {/* Overlaid content */}
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="p-8 sm:p-12 lg:p-16 max-w-[700px]">
              {/* Giant quote mark */}
              <div className="text-[80px] leading-none font-serif text-[#D32F2F] opacity-80 mb-2 select-none" aria-hidden>
                "
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-white leading-snug mb-6">
                Don Bosco didn't just teach me how to connect solar panels—they gave me the confidence, technical rigor, and values to run an ethical business that brings light to my own community.
              </blockquote>

              <div className="border-t border-white/20 pt-5 space-y-1 mb-6">
                <div className="text-white font-bold text-base">Esther Mwangi</div>
                <div className="text-white/70 text-sm">
                  Certified Solar PV Installer & Entrepreneur · Don Bosco Boys Town Karen, Kenya
                </div>
                <div className="text-white/60 text-xs mt-2 max-w-[500px] leading-relaxed">
                  Following graduation, Esther founded her clean energy venture — installing off-grid solar for 120+ households and employing three fellow Salesian TVET alumni.
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/stories/esther-solar-technician-kenya"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  <span>Read Esther's Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/stories"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors"
                >
                  <span>View all impact stories</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
