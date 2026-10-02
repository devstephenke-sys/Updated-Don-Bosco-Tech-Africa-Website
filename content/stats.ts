import { NetworkStat } from './types';

export const networkStats: NetworkStat[] = [
  {
    id: 'tvet-centres',
    label: 'TVET Centres',
    value: '119',
    numericValue: 119,
    description: 'Technical and vocational training institutes coordinated across Africa and Madagascar',
  },
  {
    id: 'countries',
    label: 'African Countries',
    value: '35',
    numericValue: 35,
    description: 'Continental footprint spanning Sub-Saharan Africa and island nations',
  },
  {
    id: 'enrolled-students',
    label: 'Students Enrolled p.a.',
    value: '45,000+',
    numericValue: 45000,
    suffix: '+',
    description: 'Young people undergoing industry-standard vocational education each year',
  },
  {
    id: 'courses-offered',
    label: 'Courses on Offer',
    value: '30+',
    numericValue: 30,
    suffix: '+',
    description: 'Specialized technical disciplines including solar, digital, electrical, and mechanics',
  },
  {
    id: 'placement-rate',
    label: 'Job Placement Rate',
    value: '57%',
    numericValue: 57,
    suffix: '%',
    description: 'Graduates successfully transitioned to employment or entrepreneurship via JSOs',
  },
  {
    id: 'staff-ratio',
    label: 'Staff to Student Ratio',
    value: '1:7',
    numericValue: 7,
    prefix: '1:',
    description: 'High-contact mentorship ensuring hands-on skills mastery and Salesian accompaniment',
  },
];

export const institutionalStats = networkStats;
export const quickHighlights = networkStats;
