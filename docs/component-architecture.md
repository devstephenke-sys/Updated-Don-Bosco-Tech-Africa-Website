# DBTA Component Architecture & Layout Specifications

## 1. Directory Structure

```
components/
├── layout/
│   ├── Header.tsx              // Sticky institutional navigation & top contact utility bar
│   ├── Footer.tsx              // Continental comprehensive footer navigation system
│   ├── Breadcrumb.tsx          // Accessible semantic breadcrumb trail
│   └── SectionHeader.tsx       // Standardized eyebrow, title, subtitle & action container
├── navigation/
│   ├── MegaMenu.tsx            // Rich desktop dropdown menus
│   ├── MobileMenu.tsx          // Accessible drawer navigation
│   └── TopBar.tsx              // Contact info, language indicator & portal shortcuts
├── hero/
│   ├── HomeHero.tsx            // Continental narrative video/visual hero with stats pills
│   └── PageHero.tsx            // High-impact subpage banner with contextual badges
├── network/
│   ├── NetworkExplorer.tsx     // Signature interactive map & country filter explorer
│   ├── CountryCard.tsx         // Country TVET metric card
│   ├── CentreDirectory.tsx     // Searchable TVET centres list
│   └── ProvinceGrid.tsx        // 15 Salesian P-TVET provinces
├── cards/
│   ├── ProjectCard.tsx         // Thematic programme/project card
│   ├── StoryCard.tsx           // Editorial human impact story card
│   ├── ResourceCard.tsx        // Knowledge hub publication card with format download
│   ├── NewsCard.tsx            // Editorial news article card
│   ├── EventCard.tsx           // Assembly & event calendar card
│   └── OpportunityCard.tsx     // Job/tender card with active status badge
├── sections/
│   ├── StatsSection.tsx        // Animated counter indicators (119 Centres, 35 Countries, etc.)
│   ├── ThematicStreams.tsx     // Visual cards for 7 What We Do operational pillars
│   ├── PartnerCarousel.tsx     // Strategic institutional donor & partner logo ribbon
│   ├── DigitalEcosystemGrid.tsx// 6 core DBTA digital services gateways
│   ├── SuccessStoriesShowcase.tsx
│   └── LatestNewsSection.tsx
├── knowledge/
│   ├── KnowledgeHubExplorer.tsx// Multi-facet filter (Type, Topic, Year, Search)
│   └── ResourceDetailModal.tsx
├── forms/
│   ├── ContactForm.tsx         // Categorized inquiry form with validation
│   └── SearchInput.tsx         // Debounced search query bar
└── ui/
    ├── Button.tsx
    ├── Badge.tsx
    └── Modal.tsx
```

---

## 2. Reusability Principles
- Server Components by default for optimal SEO, zero hydration overhead, and instant load time.
- Interactive client islands (`"use client"`) only where real-time user state is required (Network Explorer, Knowledge Hub facet filters, search input, mobile menu drawer).
