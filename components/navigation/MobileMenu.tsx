'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  X,
  ChevronRight,
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
  Wrench,
  Search,
  ExternalLink,
  Phone,
  Mail,
} from 'lucide-react';
import { aboutDBTA } from '@/content';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white overflow-y-auto animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 sticky top-0 bg-white z-10">
        <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Don Bosco Tech Africa Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <div className="border-l border-slate-200 pl-2.5">
            <span className="font-extrabold text-slate-900 text-xs tracking-tight block">Don Bosco Tech Africa</span>
            <span className="text-[9px] text-orange-600 font-bold tracking-wider uppercase block">Continental TVET</span>
          </div>
        </Link>

        <button
          onClick={onClose}
          className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Global Search Bar */}
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <Link
          href="/search"
          onClick={onClose}
          className="flex items-center gap-2.5 w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-500 shadow-sm"
        >
          <Search className="w-4 h-4 text-slate-400" />
          <span>Search programmes, countries, publications...</span>
        </Link>
      </div>

      {/* Navigation Links with Accordions */}
      <div className="flex-1 px-4 py-4 space-y-1">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
        >
          Home
        </Link>

        {/* About Accordion */}
        <div>
          <button
            onClick={() => toggleSection('about')}
            className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            <span>About DBTA</span>
            {expandedSection === 'about' ? (
              <ChevronDown className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
          </button>

          {expandedSection === 'about' && (
            <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl mb-1 border-l-2 border-blue-600">
              <Link
                href="/about"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Who We Are
              </Link>
              <Link
                href="/about/history"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Our History
              </Link>
              <Link
                href="/about/mission-vision"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Mission & Vision
              </Link>
              <Link
                href="/about/values"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Our Core Values
              </Link>
              <Link
                href="/about/board"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                DBTA Board of Directors
              </Link>
              <Link
                href="/about/p-tvet-network"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Provincial TVET (P-TVET) Offices
              </Link>
              <Link
                href="/about/governance"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Governance & Secretariat
              </Link>
            </div>
          )}
        </div>

        {/* What We Do Accordion */}
        <div>
          <button
            onClick={() => toggleSection('what-we-do')}
            className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            <span>What We Do</span>
            {expandedSection === 'what-we-do' ? (
              <ChevronDown className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
          </button>

          {expandedSection === 'what-we-do' && (
            <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl mb-1 border-l-2 border-blue-600">
              <Link
                href="/what-we-do#quality-tvet"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Quality TVET & QMS
              </Link>
              <Link
                href="/what-we-do#employability-jso"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Employability & Job Placement
              </Link>
              <Link
                href="/what-we-do#green-sustainable-tvet"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Green TVET & Solar
              </Link>
              <Link
                href="/what-we-do#digital-skills"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Digital Skills
              </Link>
              <Link
                href="/what-we-do#recognition-of-prior-learning"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Recognition of Prior Learning (RPL)
              </Link>
              <Link
                href="/what-we-do#capacity-building"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Capacity Building
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/network"
          onClick={onClose}
          className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
        >
          Our Continental Network
        </Link>

        <Link
          href="/projects"
          onClick={onClose}
          className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
        >
          Programmes & Projects
        </Link>

        {/* Impact */}
        <div>
          <button
            onClick={() => toggleSection('impact')}
            className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            <span>Impact & Stories</span>
            {expandedSection === 'impact' ? (
              <ChevronDown className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
          </button>

          {expandedSection === 'impact' && (
            <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl mb-1 border-l-2 border-blue-600">
              <Link
                href="/impact"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Impact Overview & Indicators
              </Link>
              <Link
                href="/stories"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Success Stories & Testimonials
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/knowledge"
          onClick={onClose}
          className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
        >
          Knowledge Hub & Publications
        </Link>

        {/* News */}
        <div>
          <button
            onClick={() => toggleSection('news')}
            className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            <span>News & Media</span>
            {expandedSection === 'news' ? (
              <ChevronDown className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
          </button>

          {expandedSection === 'news' && (
            <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl mb-1 border-l-2 border-blue-600">
              <Link
                href="/news"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                News & Press Releases
              </Link>
              <Link
                href="/events"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Events & Assembly
              </Link>
              <Link
                href="/media"
                onClick={onClose}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                Photo & Video Gallery
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/resources"
          onClick={onClose}
          className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
        >
          Digital Services Ecosystem
        </Link>

        <Link
          href="/opportunities"
          onClick={onClose}
          className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
        >
          Opportunities & Vacancies
        </Link>

        <Link
          href="/contact"
          onClick={onClose}
          className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
        >
          Contact DBTA
        </Link>
      </div>

      {/* External Portals Section */}
      <div className="p-4 bg-slate-50 border-t border-slate-200/80 space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">DBTA Digital Portals</p>
        <div className="grid grid-cols-2 gap-2">
          <a
            href="https://www.digitallibrary.dbtechafrica.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-700"
          >
            Digital Library <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <a
            href="https://tvet.dbtechafrica.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-700"
          >
            DBTVET Portal <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <a
            href="https://dbtechafricatracer.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-700"
          >
            Inserjeune <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <a
            href="https://toolkit.dbtechafrica.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-700"
          >
            Toolkit <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Footer CTA & Contact */}
      <div className="p-4 border-t border-slate-200 bg-white">
        <Button href="/network" variant="primary" className="w-full justify-center mb-3" onClick={onClose}>
          Explore Our Network (35 Countries)
        </Button>
        <div className="text-xs text-slate-500 text-center space-y-1">
          <p className="flex items-center justify-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-orange-500" /> {aboutDBTA.headquarters.phone}
          </p>
          <p className="flex items-center justify-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-orange-500" /> {aboutDBTA.headquarters.email}
          </p>
        </div>
      </div>
    </div>
  );
}
