export interface Certification {
  name: string;
  issuer: string;
  year: string;
  category: 'Data Analytics' | 'Python' | 'Data Science';
}

export const certifications: Certification[] = [
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera',
    year: '2024',
    category: 'Data Analytics'
  },
  {
    name: 'Data Science: Beginner to Advanced',
    issuer: 'GUVI',
    year: '2025',
    category: 'Data Science'
  },
  {
    name: 'Joy of Computing Using Python',
    issuer: 'NPTEL',
    year: '2024',
    category: 'Python'
  },
  {
    name: 'Data Analytics Virtual Internship',
    issuer: 'Deloitte',
    year: '2024',
    category: 'Data Analytics'
  }
];
