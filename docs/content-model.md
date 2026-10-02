# DBTA Content Models & Structured Data Architecture

## 1. Structured TypeScript Data Models

### 1.1 Country & TVET Centre
```typescript
export interface TVETCentre {
  id: string;
  name: string;
  city: string;
  countryCode: string;
  provinceCode: string;
  courses: string[];
  studentCount?: number;
  establishedYear?: number;
  contactEmail?: string;
  contactPhone?: string;
  isFlagship?: boolean;
}

export interface Country {
  code: string; // ISO 2
  name: string;
  slug: string;
  capital: string;
  region: 'East Africa' | 'West Africa' | 'Central Africa' | 'Southern Africa' | 'North Africa & Islands';
  provinceCode: string;
  provinceName: string;
  centreCount: number;
  featuredCentres: TVETCentre[];
  keyTrades: string[];
  summary: string;
}
```

### 1.2 Salesian Province
```typescript
export interface SalesianProvince {
  code: string; // e.g. AFE, AFC, AGL, AON, AOS, ZMB
  name: string;
  fullName: string;
  coordinatorName: string;
  coordinatorTitle: string;
  countries: string[];
  centreCount: number;
  headquarters: string;
  image?: string;
}
```

### 1.3 Governance & Leadership
```typescript
export interface BoardMember {
  id: string;
  name: string;
  role: string;
  title: string;
  provinceOrOrganization: string;
  bio: string;
  image: string;
}

export interface ExecutiveLeader {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  email?: string;
  image: string;
}
```

### 1.4 Programme & Project
```typescript
export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  thematicArea: 'Green TVET' | 'Employability & JSO' | 'Digital Skills' | 'Agriculture' | 'Quality Management' | 'RPL' | 'Capacity Building';
  status: 'Active' | 'Completed' | 'Multi-Year Flagship';
  leadPartner: string;
  partners: string[];
  targetCountries: string[];
  targetCentresCount: number;
  beneficiariesTarget: string;
  summary: string;
  objectives: string[];
  keyActivities: string[];
  expectedOutcomes: string[];
  coverImage: string;
  featuredImageGallery?: string[];
  relatedReports?: string[];
  publishedDate: string;
}
```

### 1.5 Impact Story
```typescript
export interface ImpactStory {
  id: string;
  slug: string;
  title: string;
  protagonistName: string;
  role: string; // Graduate, Instructor, Entrepreneur, Employer
  trade: string;
  country: string;
  centre: string;
  challenge: string;
  intervention: string;
  outcome: string;
  quote: string;
  fullStory: string;
  coverImage: string;
  date: string;
  projectSlug?: string;
}
```

### 1.6 Knowledge Hub Resource
```typescript
export interface KnowledgeResource {
  id: string;
  slug: string;
  title: string;
  type: 'Report' | 'Research Paper' | 'Toolkit' | 'Policy Brief' | 'Strategic Plan' | 'Curriculum Guide' | 'Manual';
  topic: string;
  year: number;
  authorOrIssuer: string;
  country?: string;
  programme?: string;
  description: string;
  fileFormat: 'PDF' | 'DOCX' | 'ZIP' | 'External Gateway';
  fileSizeBytes?: string;
  downloadUrl?: string;
  isExternalLink?: boolean;
}
```

### 1.7 News Article & Event
```typescript
export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Press Release' | 'Conference' | 'Assembly' | 'Green TVET' | 'Training' | 'Partnership';
  coverImage: string;
  publishedDate: string;
  author: string;
  location?: string;
  readTimeMinutes: number;
  tags: string[];
}

export interface DBTAEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  type: 'Annual Stakeholders Assembly' | 'Training Workshop' | 'Conference' | 'Webinar';
  description: string;
  isUpcoming: boolean;
  registrationUrl?: string;
}
```

### 1.8 Opportunity & Digital Ecosystem
```typescript
export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  category: 'Job Vacancy' | 'Consultancy' | 'Procurement / Tender' | 'Call for Proposals';
  department?: string;
  location: string;
  deadline: string;
  status: 'OPEN' | 'CLOSED' | 'ARCHIVED';
  summary: string;
  requirements: string[];
  applicationInstructions: string;
}

export interface DigitalService {
  id: string;
  name: string;
  badge: string;
  description: string;
  targetAudience: string;
  keyFeatures: string[];
  url: string;
  iconName: string;
  status: 'Live & Operational' | 'Institutional Gateway';
}
```
