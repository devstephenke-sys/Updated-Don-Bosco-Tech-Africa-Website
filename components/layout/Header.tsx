'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, Globe, ChevronRight } from 'lucide-react';
import { TopBar } from './TopBar';
import { MegaMenu } from '../navigation/MegaMenu';
import { MobileMenu } from '../navigation/MobileMenu';
import { Button } from '../ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Utility Top Bar */}
      <TopBar />

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="tracking-tighter">DB</span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-[8px] font-black text-white">
                ★
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-base md:text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                  Don Bosco Tech Africa
                </span>
              </div>
              <span className="text-[10px] md:text-xs text-orange-600 font-bold tracking-wider uppercase block">
                Continental TVET Platform
              </span>
            </div>
          </Link>

          {/* Desktop Mega Menu Navigation */}
          <MegaMenu />

          {/* Right Action Icons & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Global Search trigger */}
            <Link
              href="/search"
              aria-label="Search"
              className="p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            >
              <Search className="w-5 h-5" />
            </Link>

            {/* Desktop CTA */}
            <div className="hidden sm:block">
              <Button href="/network" variant="primary" size="sm" rightIcon={<ChevronRight className="w-4 h-4" />}>
                Our Network
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
