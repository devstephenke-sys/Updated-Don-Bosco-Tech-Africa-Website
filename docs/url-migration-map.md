# DBTA URL Migration & Redirect Strategy

## 1. Overview
This document maps legacy WordPress URLs from `https://dbtechafrica.org/` to the modern Next.js routes, guaranteeing zero broken bookmarks, preserved SEO link equity, and seamless user redirection.

---

## 2. URL Mapping Table

| Legacy URL | Modern Route | Migration Action | Redirect Status | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `/` | KEEP | 200 OK | Primary Continental Homepage |
| `/who-we-are/` | `/about` | REPLACE | 301 Permanent | Consolidated About DBTA experience |
| `/where-we-work/` | `/network` | REPLACE | 301 Permanent | Interactive Continental Network Explorer |
| `/dbta-board/` | `/about/board` | REPLACE | 301 Permanent | Dedicated Board of Governance page |
| `/p-tvet-office/` | `/about/p-tvet-network`| REPLACE | 301 Permanent | Provincial TVET Coordination Network |
| `/blog/` | `/news` | REPLACE | 301 Permanent | Modern Editorial News Hub |
| `/vacancies/` | `/opportunities` | REPLACE | 301 Permanent | Unified Opportunities Hub (Jobs, Tenders) |
| `/contact-us/` | `/contact` | REPLACE | 301 Permanent | Professional Contact & Routing page |
| `/events/` | `/events` | KEEP | 200 OK | Assembly & Events Calendar |
| `/donate/` | `/contact?intent=partner` | REDIRECT | 301 Permanent | Partnership & Institutional Support |
| `/conference-on-accelerating.../` | `/news/conference-continental-tvet-strategy` | REDIRECT | 301 Permanent | Clean semantic URL for flagship news |
| `/from-commitment-to-practice.../` | `/news/deepening-inclusivity-sustainability-african-tvet` | REDIRECT | 301 Permanent | Clean semantic URL for ASA report |
| `/malawi-and-burkina-faso-advance-recognition.../` | `/news/malawi-burkina-faso-rpl-frameworks` | REDIRECT | 301 Permanent | Clean semantic URL for RPL milestone |
| `/agriculture-for-life-project/` | `/projects/agriculture-for-life` | REPLACE | 301 Permanent | Elevated from news post to dedicated Project charter |

---

## 3. Next.js Redirect Implementation
Configured via `next.config.ts` redirects array:
```ts
async redirects() {
  return [
    { source: '/who-we-are', destination: '/about', permanent: true },
    { source: '/where-we-work', destination: '/network', permanent: true },
    { source: '/dbta-board', destination: '/about/board', permanent: true },
    { source: '/p-tvet-office', destination: '/about/p-tvet-network', permanent: true },
    { source: '/blog', destination: '/news', permanent: true },
    { source: '/vacancies', destination: '/opportunities', permanent: true },
    { source: '/contact-us', destination: '/contact', permanent: true },
  ];
}
```
