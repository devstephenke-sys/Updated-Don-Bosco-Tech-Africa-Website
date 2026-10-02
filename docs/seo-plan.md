# DBTA SEO, Metadata & Structured Data Strategy

## 1. Global Metadata & Canonical Standard
Every route in the Next.js App Router exports typed metadata compliant with Next.js 14+:
- Unique, keyword-rich `<title>`: `[Page Title] | Don Bosco Tech Africa (DBTA)`
- Descriptive `<meta name="description">` (140–160 characters).
- Canonical URL generation based on canonical domain `https://dbtechafrica.org`.
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:site_name`).
- Twitter Card tags (`twitter:card`, `twitter:site: @boscotechafrica`).

## 2. Structured Data (JSON-LD)
We inject schema.org structured data on key templates:
- **Homepage**: `Organization` & `EducationalOrganization` schema with headquarters in Nairobi, social links, contact point, and continental network coordinates.
- **Projects**: `Project` & `Course` schema with objectives, partner funders, and beneficiary demographics.
- **News**: `NewsArticle` schema with publisher info, datePublished, author, and featured image.
- **Events**: `EducationEvent` schema with location, start/end dates, and description.
- **Knowledge Resources**: `DigitalDocument` / `ScholarlyArticle` schema.
- **Breadcrumbs**: `BreadcrumbList` on all hierarchical subroutes.

## 3. Sitemap & Robots
- Dynamically generated `sitemap.ts` at `/sitemap.xml` indexing all static pages, active project routes, news articles, and country network pages.
- `robots.ts` at `/robots.txt` allowing indexing for search engine crawlers.
