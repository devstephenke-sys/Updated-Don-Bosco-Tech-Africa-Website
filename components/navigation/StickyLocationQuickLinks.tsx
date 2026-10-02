'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MapPin,
  ExternalLink,
  Layers,
  Globe2,
  BookOpen,
  Briefcase,
  Users2,
  Calendar,
  Phone,
  ChevronDown,
} from 'lucide-react';

interface QuickLinkItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const defaultLinks: QuickLinkItem[] = [
  { label: 'Strategic Pillars', href: '#thematic-streams', icon: Layers },
  { label: 'TVET Directory', href: '#network-explorer', icon: Globe2 },
  { label: 'Flagship Projects', href: '#flagship-projects', icon: Briefcase },
  { label: 'Impact Stories', href: '#impact-stories', icon: Users2 },
  { label: 'Knowledge Hub', href: '#knowledge-resources', icon: BookOpen },
  { label: 'Events', href: '#upcoming-events', icon: Calendar },
];

export function StickyLocationQuickLinks() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = defaultLinks.map((l) => l.href.replace('#', ''));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="sticky top-[73px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-12">
            {/* Locked Location Widget */}
            <div className="flex items-center gap-2 text-xs shrink-0">
              <button
                onClick={() => setIsLocationModalOpen(!isLocationModalOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold transition-colors border border-blue-100 group"
                title="View Continental Secretariat Address & Map"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="font-bold">Secretariat:</span>
                <span className="hidden sm:inline text-slate-700">Nairobi, Kenya</span>
                <ChevronDown className="w-3 h-3 text-blue-500" />
              </button>

              <span className="hidden lg:inline text-slate-300">|</span>

              <span className="hidden lg:inline text-slate-500 font-medium">
                119 TVET Centres · 35 African Countries
              </span>
            </div>

            {/* Quick Jump Links Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 hidden xl:inline mr-1">
                Jump to:
              </span>
              {defaultLinks.map((item) => {
                const Icon = item.icon;
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100/80 hover:bg-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Location Details Dropdown / Popover Modal */}
      {isLocationModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsLocationModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Don Bosco Tech Africa</h4>
                  <p className="text-xs text-slate-500">Continental Secretariat Headquarters</p>
                </div>
              </div>
              <button
                onClick={() => setIsLocationModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <p className="font-bold text-slate-900">Physical Location:</p>
                <p>Applewood Adams, 6th Floor, Room 614</p>
                <p>Ngong Road, Adams Arcade, Nairobi, Kenya</p>
                <p className="text-slate-400">Postal: P.O. Box 21255-00505, Nairobi</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="tel:+254782747500"
                  className="p-2.5 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <div>
                    <span className="block font-bold text-slate-900">Call Office</span>
                    <span className="text-[11px] text-slate-500">+254 782 747 500</span>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Applewood+Adams+Ngong+Road+Nairobi+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  <div>
                    <span className="block font-bold text-slate-900">Google Maps</span>
                    <span className="text-[11px] text-slate-500">Get Directions</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsLocationModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
