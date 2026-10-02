'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Globe2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Users,
} from 'lucide-react';
import { Button } from '../ui/Button';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs md:text-sm font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Continental TVET Coordinating Body</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
            >
              Transforming Youth Potential Through{' '}
              <span className="text-[#003366]">Quality TVET in Africa</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              Don Bosco Tech Africa coordinates <strong>119 technical centres</strong> across{' '}
              <strong>35 African countries and Madagascar</strong>, equipping over 45,000 young people annually with market-driven technical, green, and digital skills.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                href="/network"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore 119 TVET Centres
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Our Key Programmes
              </Button>
            </motion.div>

            {/* Quick credibility points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-left"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Salesian Preventive System</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">57% Employment Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">15 Salesian Provinces</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Editorial Visual Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white"
            >
              {/* Authentic DBTA photo */}
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
                  alt="Don Bosco TVET technical training in solar and mechanics"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Light Stat Strip */}
              <div className="p-6 bg-white border-t border-slate-100 grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-2xl font-black text-[#003366]">119</span>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">TVET Centres</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-2xl font-black text-orange-600">35</span>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">African Nations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
