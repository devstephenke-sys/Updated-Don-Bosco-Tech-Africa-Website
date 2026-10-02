'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Building2,
  Globe2,
  Users2,
  GraduationCap,
  Sparkles,
  Award,
  SunMedium,
  BookOpen,
  Newspaper,
  Calendar,
  Briefcase,
  FileText,
  HelpCircle,
  Wrench,
  ShieldCheck,
  TrendingUp,
  MapPin,
  ExternalLink,
} from 'lucide-react';

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {/* Home */}
      <Link
        href="/"
        className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        Home
      </Link>

      {/* About */}
      <div
        className="relative group"
        onMouseEnter={() => setActiveMenu('about')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'about'}
        >
          <span>About</span>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:rotate-180 transition-transform duration-200" />
        </button>

        {activeMenu === 'about' && (
          <div className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Institutional Identity</p>
                <div className="space-y-2">
                  <Link
                    href="/about"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                  >
                    <Building2 className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">Who We Are</p>
                      <p className="text-xs text-slate-500">Continental Salesian TVET coordinating body</p>
                    </div>
                  </Link>
                  <Link
                    href="/about/history"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                  >
                    <Award className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">Our History</p>
                      <p className="text-xs text-slate-500">Salesian legacy & TVET modernization</p>
                    </div>
                  </Link>
                  <Link
                    href="/about/mission-vision"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                  >
                    <Sparkles className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">Mission & Vision</p>
                      <p className="text-xs text-slate-500">Core purpose and strategic horizon</p>
                    </div>
                  </Link>
                  <Link
                    href="/about/values"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                  >
                    <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">Our Core Values</p>
                      <p className="text-xs text-slate-500">Integrity, professionalism & efficiency</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Governance & Structure</p>
                <div className="space-y-2">
                  <Link
                    href="/about/board"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                  >
                    <Users2 className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">DBTA Board</p>
                      <p className="text-xs text-slate-500">Board of Directors & Governance</p>
                    </div>
                  </Link>
                  <Link
                    href="/about/p-tvet-network"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                  >
                    <Globe2 className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">P-TVET Offices</p>
                      <p className="text-xs text-slate-500">15 Provincial Coordinators across Africa</p>
                    </div>
                  </Link>
                  <Link
                    href="/about/governance"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                  >
                    <Building2 className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">Executive Structure</p>
                      <p className="text-xs text-slate-500">Secretariat & Operational Leadership</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* What We Do */}
      <div
        className="relative group"
        onMouseEnter={() => setActiveMenu('what-we-do')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'what-we-do'}
        >
          <span>What We Do</span>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:rotate-180 transition-transform duration-200" />
        </button>

        {activeMenu === 'what-we-do' && (
          <div className="absolute top-full left-0 w-[620px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/what-we-do#quality-tvet"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Award className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">Quality TVET & QMS</p>
                  <p className="text-xs text-slate-500">Standardizing workshop curricula & audits</p>
                </div>
              </Link>
              <Link
                href="/what-we-do#employability-jso"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Briefcase className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">Employability & JSO</p>
                  <p className="text-xs text-slate-500">Job Service Offices & graduate tracer</p>
                </div>
              </Link>
              <Link
                href="/what-we-do#green-sustainable-tvet"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <SunMedium className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600">Green TVET & Solar</p>
                  <p className="text-xs text-slate-500">Solar PV, water pumping & clean energy</p>
                </div>
              </Link>
              <Link
                href="/what-we-do#digital-skills"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <GraduationCap className="w-5 h-5 text-indigo-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600">Digital Skills</p>
                  <p className="text-xs text-slate-500">Automation, ICT & Cisco Academies</p>
                </div>
              </Link>
              <Link
                href="/what-we-do#recognition-of-prior-learning"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Wrench className="w-5 h-5 text-purple-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-600">Recognition of Prior Learning</p>
                  <p className="text-xs text-slate-500">Certifying informal artisans & workers</p>
                </div>
              </Link>
              <Link
                href="/what-we-do#capacity-building"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Users2 className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-amber-600">Capacity Building</p>
                  <p className="text-xs text-slate-500">Instructor upskilling & leadership seminars</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Network */}
      <Link
        href="/network"
        className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        Our Network
      </Link>

      {/* Projects */}
      <Link
        href="/projects"
        className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        Projects
      </Link>

      {/* Impact */}
      <div
        className="relative group"
        onMouseEnter={() => setActiveMenu('impact')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'impact'}
        >
          <span>Impact</span>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:rotate-180 transition-transform duration-200" />
        </button>

        {activeMenu === 'impact' && (
          <div className="absolute top-full left-0 w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              <Link
                href="/impact"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">Impact Indicators</p>
                  <p className="text-xs text-slate-500">Continental results & metrics across 35 nations</p>
                </div>
              </Link>
              <Link
                href="/stories"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Sparkles className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">Success Stories</p>
                  <p className="text-xs text-slate-500">Inspiring human stories from graduates & artisans</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Knowledge */}
      <Link
        href="/knowledge"
        className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        Knowledge Hub
      </Link>

      {/* News & Media */}
      <div
        className="relative group"
        onMouseEnter={() => setActiveMenu('news')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'news'}
        >
          <span>News & Media</span>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:rotate-180 transition-transform duration-200" />
        </button>

        {activeMenu === 'news' && (
          <div className="absolute top-full left-0 w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              <Link
                href="/news"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Newspaper className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">Latest News</p>
                  <p className="text-xs text-slate-500">Official updates, assemblies & milestones</p>
                </div>
              </Link>
              <Link
                href="/events"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Calendar className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">Events & Assembly</p>
                  <p className="text-xs text-slate-500">Annual Stakeholders Assembly & seminars</p>
                </div>
              </Link>
              <Link
                href="/media"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <BookOpen className="w-5 h-5 text-purple-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-600">Photo & Video Gallery</p>
                  <p className="text-xs text-slate-500">Visual documentation from TVET workshops</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Digital Services */}
      <Link
        href="/resources"
        className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        Digital Services
      </Link>

      {/* Opportunities */}
      <Link
        href="/opportunities"
        className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        Opportunities
      </Link>

      {/* Contact */}
      <Link
        href="/contact"
        className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
}
