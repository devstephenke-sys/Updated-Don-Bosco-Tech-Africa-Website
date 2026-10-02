import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollRevealProvider } from '@/hooks/useScrollReveal';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://dbtechafrica.org'),
  title: {
    default: 'Don Bosco Tech Africa — Continental TVET & Knowledge Platform',
    template: '%s | Don Bosco Tech Africa (DBTA)',
  },
  description:
    'Coordinating 119 Salesian TVET institutions across 35 African countries and Madagascar. Empowering over 45,000 marginalized youth annually with industry-demanded technical, green, and digital skills.',
  keywords: [
    'Don Bosco Tech Africa',
    'DBTA',
    'TVET Africa',
    'Vocational Training Africa',
    'Salesians of Don Bosco',
    'Green TVET',
    'Solar PV Training',
    'Recognition of Prior Learning',
    'Youth Employability',
    'Inserjeune',
    'TVET Kenya',
    'TVET Rwanda',
    'TVET Nigeria',
    'TVET DRC',
  ],
  authors: [{ name: 'Don Bosco Tech Africa' }],
  creator: 'Don Bosco Tech Africa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dbtechafrica.org',
    siteName: 'Don Bosco Tech Africa',
    title: 'Don Bosco Tech Africa — Continental TVET & Knowledge Platform',
    description:
      'Coordinating 119 Salesian TVET institutions across 35 African countries and Madagascar. Transforming youth lives through quality vocational education.',
    images: [
      {
        url: 'https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png',
        width: 1200,
        height: 630,
        alt: 'Don Bosco Tech Africa Continental TVET Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@boscotechafrica',
    creator: '@boscotechafrica',
    title: 'Don Bosco Tech Africa — Quality TVET for Youth',
    description: 'Coordinating 119 TVET Centres across 35 African countries.',
    images: ['https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        <ScrollRevealProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
