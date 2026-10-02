'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Network', href: '/network' },
  { label: 'Projects', href: '/projects' },
  { label: 'Impact', href: '/impact' },
  { label: 'Knowledge', href: '/knowledge' },
  { label: 'News', href: '/news' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-[0_1px_0_0_#e5e7eb]' : 'border-b border-[#e5e7eb]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center h-16 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Don Bosco Tech Africa"
              width={130}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
            <span className="hidden md:block text-sm font-semibold text-[#111111] leading-tight whitespace-nowrap">
              Don Bosco<br />
              <span className="text-[#003366] font-bold">Tech Africa</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-[#374151] hover:text-[#003366] font-medium rounded transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 ml-auto">
            <Link
              href="/search"
              className="p-2 text-[#6b7280] hover:text-[#111111] transition-colors"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5" strokeWidth={1.75} />
            </Link>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#003366] hover:bg-[#002244] rounded-lg transition-colors duration-150"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-[#374151]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb]">
            <Image
              src="/images/logo.png"
              alt="Don Bosco Tech Africa"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-[#374151]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={1.75} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-base font-medium text-[#111111] border-b border-[#f3f4f6] hover:text-[#003366] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3 text-sm font-semibold text-white bg-[#003366] rounded-lg"
              >
                Contact Us
              </Link>
            </div>
          </nav>
          <div className="px-5 py-4 border-t border-[#e5e7eb] text-xs text-[#9ca3af]">
            35 African Countries · 119 TVET Centres
          </div>
        </div>
      )}
    </>
  );
}
