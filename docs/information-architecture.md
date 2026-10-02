# DBTA Information Architecture (IA) Specification

## 1. Navigational Philosophy
The primary navigation is organized around how key audiences (Governments, Donors, TVET Leaders, Employers, Youth, Researchers) comprehend Don Bosco Tech Africa:
- **Identity & Governance**: Who DBTA is and how it is led.
- **Continental Network**: The physical presence across 35 countries and 119 TVET centres.
- **Strategic Thematic Areas**: Core operational domains.
- **Work & Projects**: Active and legacy multi-country programmes.
- **Impact & Evidence**: Verifiable outcomes and human success stories.
- **Knowledge & Policy**: Research, publications, manuals, and toolkits.
- **News & Media**: Press releases, assemblies, galleries, videos.
- **Digital Services**: Gateways to DBTA's integrated digital applications.
- **Opportunities & Contact**: Careers, partnerships, tenders, and inquiries.

---

## 2. Sitemap & Hierarchy

```
/
├── /about
│   ├── /about/who-we-are
│   ├── /about/history
│   ├── /about/mission-vision
│   ├── /about/values
│   ├── /about/leadership
│   ├── /about/board
│   ├── /about/governance
│   └── /about/p-tvet-network
│
├── /what-we-do
│   ├── Quality TVET & Standards
│   ├── Employability & Job Placement
│   ├── Digital Skills & Innovation
│   ├── Green TVET & Solar Energy
│   ├── Capacity Building & Teacher Training
│   ├── Recognition of Prior Learning (RPL)
│   └── Continental Policy & Advocacy
│
├── /network
│   ├── /network/countries (Interactive Continental Directory)
│   ├── /network/provinces (15 Salesian Provinces)
│   └── /network/centres (119 TVET Centres)
│
├── /projects
│   ├── /projects (Filterable Directory)
│   └── /projects/[slug] (Detailed Project Charter)
│
├── /impact
│   ├── /impact (Continental Indicators & Thematic Results)
│   └── /stories (Success Stories & Testimonials)
│       └── /stories/[slug]
│
├── /knowledge
│   ├── /knowledge (Multi-facet Knowledge Hub)
│   ├── /knowledge/reports
│   ├── /knowledge/research
│   ├── /knowledge/toolkits
│   └── /knowledge/policy
│
├── /news
│   ├── /news (Editorial News Listing)
│   ├── /news/[slug] (Article Detail)
│   ├── /events (Calendar & Assembly)
│   └── /media (Photos, Videos, Brand Assets)
│
├── /opportunities
│   ├── /opportunities (Vacancies, Calls for Proposals, Tenders)
│   └── /opportunities/[slug]
│
├── /resources (DBTA Digital Ecosystem Gateway)
│   ├── DBTVET Center Portal
│   ├── Digital Library
│   ├── Inserjeune Tracer System
│   ├── Staff Office Portal
│   ├── Instructional Toolkit
│   └── DBVTI Platform
│
└── /contact
    ├── General Contact & Headquarters
    ├── Departmental Routing (Partnerships, Media, Careers)
    └── Frequently Asked Questions
```

---

## 3. Global Header & Mega Menu Breakdown

| Menu Item | Direct Link / Dropdown Items | Key Featured Content |
| :--- | :--- | :--- |
| **Home** | `/` | Instant Continental Gateway |
| **About** | Who We Are, History, Mission & Vision, Core Values, Leadership & Board, P-TVET Offices | Salesian Heritage & Continental Reach |
| **What We Do** | Quality TVET, Employability, Green TVET, Digital Skills, RPL, Capacity Building, Advocacy | 7 Thematic Work Streams |
| **Our Network** | Continental Explorer, 35 Countries, 15 Provinces, 119 TVET Centres | Interactive Network Map & Data |
| **Projects & Impact** | Active Projects, Impact Indicators, Success Stories | Measurable Transformations |
| **Knowledge Hub** | Digital Library Gateway, Reports, Research Papers, Training Toolkits | Searchable Open Access Archive |
| **News & Media** | Latest News, Upcoming Events, Photo Gallery, Video Repository | Press & Communications |
| **Opportunities** | Job Vacancies, Partnerships, Procurement | Open Calls & Tenders |
| **Digital Services** | DBTVET Portal, Inserjeune, Staff Portal, Toolkit, Digital Library | One-click service links |
| **Contact** | Contact Form, Headquarters Details, Regional Office Directory | Nairobi HQ & Inquiries |

---

## 4. Breadcrumb Standards
Every subpage contains semantic, accessible breadcrumb schema navigation:
`Home > [Parent Category] > [Current Page]`
