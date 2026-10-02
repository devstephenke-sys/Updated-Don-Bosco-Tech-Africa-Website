import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Globe2,
  ArrowUpRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { aboutDBTA, provinces } from '@/content';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Top Banner / Continental Identity Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-black text-2xl shadow-inner">
              DB
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Don Bosco Tech Africa</h3>
              <p className="text-sm text-blue-200/80">
                Coordinating 119 TVET Centres across 35 African Countries & Madagascar
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/network"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg transition-colors"
            >
              <Globe2 className="w-4 h-4" />
              <span>Explore Network</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold px-5 py-2.5 rounded-xl backdrop-blur-sm transition-colors"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: About & Institutional Purpose */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-orange-400" />
              <span>Institutional Gateway</span>
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Don Bosco Tech Africa is the continental coordinating body for Salesian Technical and Vocational
              Education and Training (TVET) institutions across Africa and Madagascar. Our mission is to empower
              marginalized youth with high-calibre, market-driven technical, digital, and green skills.
            </p>

            {/* Headquarters details */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  {aboutDBTA.headquarters.building}, {aboutDBTA.headquarters.street}, {aboutDBTA.headquarters.city},{' '}
                  {aboutDBTA.headquarters.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`tel:${aboutDBTA.headquarters.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {aboutDBTA.headquarters.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`mailto:${aboutDBTA.headquarters.email}`} className="hover:text-white transition-colors">
                  {aboutDBTA.headquarters.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-slate-400">{aboutDBTA.headquarters.hours}</span>
              </div>
            </div>

            {/* Social Media Links with SVG */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={aboutDBTA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={aboutDBTA.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={aboutDBTA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={aboutDBTA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={aboutDBTA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: About & What We Do */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Organisation & Focus</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/about/history" className="hover:text-orange-400 transition-colors">
                  Our History & Heritage
                </Link>
              </li>
              <li>
                <Link href="/about/board" className="hover:text-orange-400 transition-colors">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/about/p-tvet-network" className="hover:text-orange-400 transition-colors">
                  P-TVET Offices Network
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#quality-tvet" className="hover:text-orange-400 transition-colors">
                  Quality TVET & QMS
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#employability-jso" className="hover:text-orange-400 transition-colors">
                  Employability & JSOs
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#green-sustainable-tvet" className="hover:text-orange-400 transition-colors">
                  Green TVET & Solar
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#recognition-of-prior-learning" className="hover:text-orange-400 transition-colors">
                  Recognition of Prior Learning
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#capacity-building" className="hover:text-orange-400 transition-colors">
                  Capacity Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Work, Impact & Knowledge */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Work & Knowledge</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/network" className="hover:text-orange-400 transition-colors">
                  Continental Network Directory
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-orange-400 transition-colors">
                  Flagship Programmes & Projects
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-orange-400 transition-colors">
                  Impact Metrics & Results
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-orange-400 transition-colors">
                  Graduate Success Stories
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-orange-400 transition-colors">
                  Research Papers & Publications
                </Link>
              </li>
              <li>
                <Link href="/knowledge?type=toolkit" className="hover:text-orange-400 transition-colors">
                  Training Toolkits & Manuals
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-orange-400 transition-colors">
                  News & Press Releases
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-orange-400 transition-colors">
                  Annual Stakeholders Assembly
                </Link>
              </li>
              <li>
                <Link href="/opportunities" className="hover:text-orange-400 transition-colors">
                  Vacancies & Procurement
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Digital Services Ecosystem */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Digital Ecosystem</h4>
            <p className="text-xs text-slate-400">Integrated DBTA digital services for TVET centres, staff, and youth:</p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.digitallibrary.dbtechafrica.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-orange-400 transition-colors"
                >
                  <span>DBTA Digital Library</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://tvet.dbtechafrica.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-orange-400 transition-colors"
                >
                  <span>DBTVET Centre Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://dbtechafricatracer.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-orange-400 transition-colors"
                >
                  <span>Inserjeune Tracer</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://office.dbtechafrica.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-orange-400 transition-colors"
                >
                  <span>Staff Office Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://toolkit.dbtechafrica.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-orange-400 transition-colors"
                >
                  <span>Instructional Toolkit</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 15 Provinces Footprint Ribbon */}
        <div className="mt-14 pt-8 border-t border-slate-900">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Salesian Provinces Represented in DBTA
          </p>
          <div className="flex flex-wrap gap-2">
            {provinces.map((p) => (
              <Link
                key={p.code}
                href={`/network#province-${p.code}`}
                className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <span className="font-bold text-orange-400">{p.code}</span> — {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="bg-black/80 py-6 px-4 sm:px-6 lg:px-8 border-t border-slate-900 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Don Bosco Tech Africa (DBTA). All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-slate-300 transition-colors">
              Accessibility
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
