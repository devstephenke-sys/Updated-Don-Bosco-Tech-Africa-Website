# DBTA Design System Specification

## 1. Visual Philosophy: African · Institutional · Modern · Educational · Human
The DBTA visual identity blends authentic Salesian institutional heritage with modern pan-African digital excellence.

### Core Colour Palette

| Token Name | Hex Code | Purpose & Semantic Role |
| :--- | :--- | :--- |
| **dbta-blue-900** | `#0a2540` | Deep Institutional Navy (Headers, Hero backgrounds, Primary text) |
| **dbta-blue-700** | `#1e429f` | Rich Continental Blue (Interactive states, Secondary badges) |
| **dbta-blue-600** | `#2563eb` | Classic Salesian Blue (Primary CTAs, Link highlights) |
| **dbta-orange-500** | `#f97316` | Energetic Salesian Orange (Accent buttons, Stat highlights, Badges) |
| **dbta-orange-600** | `#ea580c` | Warm Amber Hover State |
| **dbta-green-600** | `#16a34a` | Green TVET & Sustainability Badge Accent |
| **dbta-surface-50** | `#f8fafc` | Clean Warm Background Surface |
| **dbta-surface-100**| `#f1f5f9` | Card and Filter Bar Surface |
| **dbta-neutral-800**| `#1e293b` | Body Heading Text |
| **dbta-neutral-600**| `#475569` | Body Paragraph Text |

---

## 2. Typography Hierarchy

- **Primary Font Family**: `Inter` / `Plus Jakarta Sans` / `system-ui` for modern, razor-sharp institutional legibility on mobile and desktop.
- **Display Headings**:
  - `Display 1`: `text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900`
  - `Display 2`: `text-3xl md:text-5xl font-bold tracking-tight text-slate-900`
  - `Section Heading`: `text-2xl md:text-3xl font-bold text-slate-900`
  - `Card Heading`: `text-lg md:text-xl font-semibold text-slate-900`
  - `Body Regular`: `text-base text-slate-600 leading-relaxed`
  - `Caption / Eyebrow`: `text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-600`

---

## 3. Spacing & Elevation Tokens
- **Container Max-Width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding**: `py-16 md:py-24`
- **Card Radius**: `rounded-2xl` for modern, elegant tactility.
- **Card Shadow**: `shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100`

---

## 4. Animation & Motion Guidelines
- Subtle, controlled reveals via Framer Motion / Motion.
- Respects `prefers-reduced-motion: reduce`.
- Hover micro-interactions: `scale-[1.02]`, `translate-y-[-2px]`.
