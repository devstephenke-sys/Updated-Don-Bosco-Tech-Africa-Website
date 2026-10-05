export interface NetworkStat {
  id: string;
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
  prefix?: string;
  description: string;
}

export interface TVETCentre {
  id: string;
  name: string;
  city: string;
  countryName: string;
  countryCode: string;
  provinceCode: string;
  courses: string[];
  studentCount?: number;
  establishedYear?: number;
  contactEmail?: string;
  contactPhone?: string;
  isFlagship?: boolean;
  address?: string;
}

export interface Country {
  code: string;
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

export interface Province {
  code: string;
  name: string;
  fullName: string;
  coordinatorName: string;
  coordinatorTitle: string;
  coordinatorImage?: string;
  countries: string[];
  centreCount: number;
  headquarters: string;
  description: string;
  region?: string;
}

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  title: string;
  province?: string;
  provinceOrOrganization: string;
  bio: string;
  image: string;
}

export interface ThematicArea {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  shortDesc: string;
  fullDesc: string;
  description?: string;
  icon: string;
  keyPillars: string[];
  objectives: string[];
  impactMetric: string;
  impactLabel: string;
  keyMetrics: Array<{ value: string; label: string; description: string }>;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  thematicArea: string;
  status: 'Active' | 'Completed' | 'Multi-Year Flagship' | string;
  leadPartner?: string;
  partners: string[];
  targetCountries: string[];
  countries?: string[];
  duration?: string;
  beneficiaries?: string;
  targetCentresCount?: number;
  beneficiariesTarget?: string;
  summary: string;
  description?: string;
  objectives: string[];
  keyActivities?: string[];
  expectedOutcomes?: string[];
  milestones?: string[];
  coverImage: string;
  featuredImage?: string;
  publishedDate?: string;
}

export interface ImpactStory {
  id: string;
  slug: string;
  title: string;
  name?: string;
  protagonistName: string;
  role: string;
  trade: string;
  course?: string;
  country: string;
  year?: string;
  centre: string;
  challenge: string;
  intervention: string;
  outcome: string;
  quote: string;
  excerpt?: string;
  image?: string;
  coverImage: string;
  fullStory: string[] | string;
  date: string;
  projectSlug?: string;
}

export interface KnowledgeResource {
  id: string;
  slug: string;
  title: string;
  type: 'Report' | 'Research Paper' | 'Toolkit' | 'Policy Brief' | 'Strategic Plan' | 'Manual' | string;
  topic: string;
  category?: string;
  thematicArea?: string;
  year: number;
  publishDate?: string;
  authorOrIssuer?: string;
  authors?: string[];
  country?: string;
  programme?: string;
  abstract?: string;
  description: string;
  fileFormat: 'PDF' | 'DOCX' | 'External Gateway' | string;
  format?: string;
  fileSize?: string;
  fileSizeBytes?: string;
  downloadUrl?: string;
  featuredImage?: string;
  tags?: string[];
  tableOfContents?: string[];
  isExternalLink?: boolean;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[] | string;
  category: 'Press Release' | 'Conference' | 'Assembly' | 'Green TVET' | 'Training' | 'Partnership' | string;
  coverImage: string;
  featuredImage?: string;
  publishedDate: string;
  publishDate?: string;
  author: string;
  location?: string;
  province?: string;
  readTimeMinutes?: number;
  tags: string[];
}

export interface DBTAEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  startDate?: string;
  endDate?: string;
  location: string;
  type: 'Annual Stakeholders Assembly' | 'Training Workshop' | 'Conference' | 'Webinar' | string;
  category?: string;
  status?: string;
  isOnline?: boolean;
  targetAudience?: string;
  featuredImage?: string;
  description: string;
  isUpcoming?: boolean;
  registrationUrl?: string;
}

export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  type?: string;
  category?: 'Job Vacancy' | 'Consultancy' | 'Procurement / Tender' | 'Call for Proposals' | string;
  department?: string;
  location: string;
  deadline: string;
  status: 'OPEN' | 'CLOSED' | 'ARCHIVED' | 'Open' | 'Closed' | string;
  summary?: string;
  description?: string;
  requirements: string[];
  applicationEmail?: string;
  applicationInstructions?: string;
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
  status: string;
}

export interface Partner {
  id: string;
  name: string;
  category: 'Strategic Donor' | 'Technical Partner' | 'International Network' | string;
  logo: string;
  description: string;
  website: string;
}

export type AccreditationTier = 'Tier 1 - Center of Excellence' | 'Tier 2 - Regional Hub' | 'Accredited TVET Center';
export type GreenRating = 'Gold' | 'Silver' | 'Bronze' | 'Standard';

export interface InstitutionBenchmark {
  id: string;
  name: string;
  shortName?: string;
  slug: string;
  city: string;
  countryName: string;
  countryCode: string;
  flagEmoji: string;
  provinceCode: string;
  provinceName: string;
  tier: AccreditationTier;
  overallScore: number; // 0 - 100 benchmark score
  rankBand: string; // e.g. '#1', '#2', 'Top 10%', 'Top 25%'
  establishedYear: number;
  metrics: {
    employmentRate: number; // e.g. 84 (%)
    annualTrainees: number; // e.g. 1250
    femaleEnrollmentPct: number; // e.g. 42 (%)
    greenTVETRating: GreenRating;
    industryPartnerships: number; // e.g. 24
    workshopQualityScore: number; // 0 - 100
  };
  keyTrades: string[];
  tradeIds: string[];
  facilities: string[];
  accreditationBody: string;
  leadPartners: string[];
  contact: {
    email: string;
    phone: string;
    website?: string;
    address: string;
  };
  summary: string;
  featured: boolean;
}

export interface TradeBenchmark {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Clean Energy & Green' | 'Industrial Engineering' | 'Digital & ICT' | 'Agribusiness & Food' | 'Construction & Civil' | 'Hospitality & Services';
  icon: string;
  curriculumFramework: string;
  averageEmploymentRate: number;
  totalAccreditedCentres: number;
  annualTraineesTrained: number;
  topPerformingCentres: Array<{
    institutionId: string;
    institutionName: string;
    countryName: string;
    flagEmoji: string;
    placementRate: number;
  }>;
  leadIndustryPartner: string;
  description: string;
  laborDemandOutlook: 'Very High' | 'High' | 'Expanding';
}
