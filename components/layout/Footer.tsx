import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Globe2,
  ArrowRight,
} from 'lucide-react';
import { aboutDBTA, provinces } from '@/content';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Continental Strip */}
      <div className="bg-[#00274d] text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-2xl shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Don Bosco Tech Africa Logo"
                width={140}
                height={46}
                className="h-11 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Don Bosco Tech Africa</h3>
              <p className="text-xs text-blue-200 mt-0.5">
                Coordinating 119 TVET Centres across 35 African Countries & Madagascar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/network"
              className="inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>Explore Network</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Headquarters & Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Secretariat Headquarters
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Don Bosco Tech Africa is the continental coordinating body for Salesian TVET institutions across Africa and Madagascar.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Applewood Adams, Ngong Road, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:+254782747500" className="hover:text-white transition-colors">
                  +254 782 747 500
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:dbta@dbtechafrica.org" className="hover:text-white transition-colors">
                  dbta@dbtechafrica.org
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: About DBTA */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">About DBTA</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/about/who-we-are" className="hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/about/history" className="hover:text-white transition-colors">
                  History & Heritage
                </Link>
              </li>
              <li>
                <Link href="/about/board" className="hover:text-white transition-colors">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/about/p-tvet-network" className="hover:text-white transition-colors">
                  15 P-TVET Provinces
                </Link>
              </li>
              <li>
                <Link href="/about/governance" className="hover:text-white transition-colors">
                  Governance Structure
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Work & Knowledge */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Work & Knowledge</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/what-we-do" className="hover:text-white transition-colors">
                  7 Thematic Streams
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Flagship Projects
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition-colors">
                  Impact & Tracer Studies
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-white transition-colors">
                  Graduate Stories
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-white transition-colors">
                  Knowledge Hub & Manuals
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News & Announcements
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Digital Portals */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Digital Ecosystem</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://www.digitallibrary.dbtechafrica.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Digital Library <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://tvet.dbtechafrica.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  DBTVET Portal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://dbtechafricatracer.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Inserjeune Tracer <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://office.dbtechafrica.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Staff Portal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 15 Provinces Footprint Ribbon */}
        <div className="mt-12 pt-6 border-t border-slate-800">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
            15 Salesian Provinces
          </p>
          <div className="flex flex-wrap gap-1.5">
            {provinces.map((p) => (
              <Link
                key={p.code}
                href={`/network?province=${p.code}`}
                className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <span className="font-bold text-orange-400">{p.code}</span> — {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="bg-slate-950 py-5 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Don Bosco Tech Africa (DBTA). All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/accessibility" className="hover:text-slate-300 transition-colors">
              Accessibility
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
