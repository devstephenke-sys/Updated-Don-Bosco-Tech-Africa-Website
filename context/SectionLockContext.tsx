'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export interface SectionMetadata {
  id: string;
  number: string;
  label: string;
  subtitle: string;
  summary: string;
  tags: string[];
}

export const SECTIONS_META: Record<string, SectionMetadata> = {
  'who-we-are': {
    id: 'who-we-are',
    number: '01',
    label: 'Who We Are',
    subtitle: "Empowering Africa's Next Generation of Technical Leaders",
    summary: 'Continental Salesian TVET coordination across 35 countries, rooted in Don Bosco values.',
    tags: ['45,000+ Youth Yearly', '35 Countries', 'Salesian Preventive System'],
  },
  'our-numbers': {
    id: 'our-numbers',
    number: '02',
    label: 'Our Numbers',
    subtitle: 'Continental Footprint & Measurable TVET Outcomes',
    summary: 'Real-time verified impact statistics across 119 centres and 15 Salesian provinces.',
    tags: ['119 TVET Centres', '35 Countries', '57% Employment Rate', '15 Provinces'],
  },
  'network-overview': {
    id: 'network-overview',
    number: '03',
    label: 'Our Network',
    subtitle: '35 African Nations & Madagascar Across 4 Continental Hubs',
    summary: 'Explore our regional TVET centres across Eastern, Western, Central, and Southern Africa.',
    tags: ['Interactive Map', 'Regional Hubs', '34+ Eastern Centres', '35 Nations'],
  },
  'thematic-streams': {
    id: 'thematic-streams',
    number: '04',
    label: 'What We Do',
    subtitle: 'How DBTA Transforms Vocational Training Across Africa',
    summary: 'Quality TVET, Green TVET & Solar PV, Youth Employability (JSO), and Institutional Capacity.',
    tags: ['Quality TVET', 'Green Energy', 'Job Services Offices', 'Capacity Building'],
  },
  'featured-programmes': {
    id: 'featured-programmes',
    number: '05',
    label: 'Programmes',
    subtitle: 'Continental Flagship Initiatives Driving Systemic Change',
    summary: 'From Renewable Energy & Solar PV to Climate-Smart Agriculture and RPL certifications.',
    tags: ['Solar PV & Green TVET', 'Agriculture for Life', 'RPL Certification'],
  },
  'impact-story': {
    id: 'impact-story',
    number: '06',
    label: 'Impact Story',
    subtitle: 'Real Journeys of African Youth Transforming Communities',
    summary: 'Spotlighting Esther Chebet — Solar PV Technician and DBTA Green TVET graduate in Nairobi.',
    tags: ['Esther Chebet', 'Solar Technician', 'Nairobi, Kenya', 'Gender Inclusion'],
  },
  'insights-updates': {
    id: 'insights-updates',
    number: '07',
    label: 'Insights & News',
    subtitle: 'Policy Briefs, Curricula, Reports & Continental News',
    summary: 'Continental TVET strategy reports, solar manuals, and verified continental news.',
    tags: ['Continental TVET Strategy', 'RPL Manuals', 'Solar PV Curriculum'],
  },
  'partners-section': {
    id: 'partners-section',
    number: '08',
    label: 'Our Partners',
    subtitle: 'International Development Agencies, Donors & Allies',
    summary: 'Collaborating with global partners to scale high-impact TVET outcomes for African youth.',
    tags: ['BMZ Germany', 'Misean Cara', 'Don Bosco Mondo', 'Salesian Missions'],
  },
};

export const SECTION_KEYS = Object.keys(SECTIONS_META);

interface SectionLockContextType {
  unlockedSections: Record<string, boolean>;
  activeId: string;
  setActiveId: (id: string) => void;
  isUnlocked: (id: string) => boolean;
  unlockSection: (id: string, scroll?: boolean) => void;
  lockSection: (id: string) => void;
  toggleSection: (id: string, scroll?: boolean) => void;
  unlockAll: () => void;
  lockAll: () => void;
  navigateToSection: (id: string) => void;
  unlockedCount: number;
  totalSections: number;
}

const SectionLockContext = createContext<SectionLockContextType | null>(null);

export function SectionLockProvider({ children }: { children: React.ReactNode }) {
  // Start with landing hero (always unlocked). Sections 1-8 are initially locked,
  // allowing visitors to selectively unlock them via the quick links dock.
  const [unlockedSections, setUnlockedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = { 'landing-hero': true };
    SECTION_KEYS.forEach((key) => {
      initial[key] = false;
    });
    return initial;
  });

  const [activeId, setActiveId] = useState<string>('landing-hero');

  const isUnlocked = useCallback(
    (id: string) => {
      if (id === 'landing-hero') return true;
      return !!unlockedSections[id];
    },
    [unlockedSections]
  );

  const scrollToEl = useCallback((id: string) => {
    // Delay slightly to allow DOM layout to update if just unlocked
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  }, []);

  const unlockSection = useCallback(
    (id: string, scroll = true) => {
      setUnlockedSections((prev) => ({ ...prev, [id]: true }));
      setActiveId(id);
      if (scroll) {
        scrollToEl(id);
      }
    },
    [scrollToEl]
  );

  const lockSection = useCallback((id: string) => {
    if (id === 'landing-hero') return; // Cannot lock hero
    setUnlockedSections((prev) => ({ ...prev, [id]: false }));
  }, []);

  const toggleSection = useCallback(
    (id: string, scroll = true) => {
      if (id === 'landing-hero') {
        scrollToEl('landing-hero');
        return;
      }
      setUnlockedSections((prev) => {
        const nextState = !prev[id];
        if (nextState && scroll) {
          scrollToEl(id);
        }
        return { ...prev, [id]: nextState };
      });
      setActiveId(id);
    },
    [scrollToEl]
  );

  const unlockAll = useCallback(() => {
    setUnlockedSections((prev) => {
      const updated: Record<string, boolean> = { ...prev, 'landing-hero': true };
      SECTION_KEYS.forEach((key) => {
        updated[key] = true;
      });
      return updated;
    });
  }, []);

  const lockAll = useCallback(() => {
    setUnlockedSections(() => {
      const updated: Record<string, boolean> = { 'landing-hero': true };
      SECTION_KEYS.forEach((key) => {
        updated[key] = false;
      });
      return updated;
    });
    setActiveId('landing-hero');
    scrollToEl('landing-hero');
  }, [scrollToEl]);

  const navigateToSection = useCallback(
    (id: string) => {
      if (id === 'landing-hero') {
        setActiveId('landing-hero');
        scrollToEl('landing-hero');
        return;
      }
      // Unlock if not already unlocked
      setUnlockedSections((prev) => {
        if (!prev[id]) {
          return { ...prev, [id]: true };
        }
        return prev;
      });
      setActiveId(id);
      scrollToEl(id);
    },
    [scrollToEl]
  );

  const unlockedCount = useMemo(() => {
    return SECTION_KEYS.filter((key) => unlockedSections[key]).length;
  }, [unlockedSections]);

  return (
    <SectionLockContext.Provider
      value={{
        unlockedSections,
        activeId,
        setActiveId,
        isUnlocked,
        unlockSection,
        lockSection,
        toggleSection,
        unlockAll,
        lockAll,
        navigateToSection,
        unlockedCount,
        totalSections: SECTION_KEYS.length,
      }}
    >
      {children}
    </SectionLockContext.Provider>
  );
}

export function useSectionLock() {
  const context = useContext(SectionLockContext);
  if (!context) {
    throw new Error('useSectionLock must be used within a SectionLockProvider');
  }
  return context;
}
