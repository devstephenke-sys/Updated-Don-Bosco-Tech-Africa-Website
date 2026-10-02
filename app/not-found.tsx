import Link from 'next/link';
import { Compass, Home, Search, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-brand-navy/5 text-brand-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
          404 Error
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          The requested resource could not be located. It may have been relocated or updated as part of the new Don Bosco Tech Africa digital platform.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            <Home className="w-4 h-4" /> Return Home
          </Link>
          <Link
            href="/search"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Search className="w-4 h-4" /> Global Search
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-xs text-slate-500">
          Looking for a specific province or centre?{' '}
          <Link href="/network" className="text-brand-navy font-bold hover:underline">
            Browse Network Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
