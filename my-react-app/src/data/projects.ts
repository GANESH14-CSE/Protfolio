export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  status: string;
  statusColor: string;
  gradient: string;
  accentColor: string;
  stack: string[];
  github: string | null;
  live: string | null;
  overview: string;
  features: string[];
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: 'karur-grievance-portal',
    title: 'Karur Municipal Corporation – Public Grievance Portal',
    shortDesc: 'Production-ready citizen grievance portal enabling users to register and track municipal complaints online, with Tamil/English support.',
    status: 'LIVE IN PRODUCTION',
    statusColor: 'green',
    gradient: 'from-[#050816] via-[#041f2e] to-[#050816]',
    accentColor: '#06B6D4',
    stack: ['React.js', 'Django', 'REST API', 'MySQL'],
    github: null,
    live: 'https://karurcorp.m7.digital/',
    overview: 'Developed a production-ready citizen grievance portal enabling users to register and track municipal complaints online, with Tamil/English support and REST API-based backend integration.',
    features: [
      'Online municipal complaint registration and real-time status tracking',
      'Bilingual support (Tamil and English) for broader citizen accessibility',
      'RESTful API architecture integrating React.js frontend with Django backend',
      'MySQL database schema for complaint categories, departments, and user tracking',
      'Responsive UI design optimized for both desktop and mobile users',
    ],
    challenge: 'Delivering an intuitive bilingual user interface while ensuring efficient API response times for grievance tracking.',
    solution: 'Designed modular React components with Django REST Framework endpoints and structured MySQL indexing for quick complaint retrieval.',
  },
  {
    id: 'grace-ngo',
    title: 'Grace Service Charitable Trust',
    shortDesc: 'Production NGO website handling real donations, 80-G tax certificates, and cause management. Live users. Real transactions.',
    status: 'LIVE IN PRODUCTION',
    statusColor: 'green',
    gradient: 'from-[#050816] via-[#2a0a1a] to-[#050816]',
    accentColor: '#EC4899',
    stack: ['Django', 'Python', 'Razorpay', 'JavaScript', 'HTML/CSS'],
    github: null,
    live: 'https://gracesocialworldtrust.com/',
    overview: 'Production website for a registered NGO. Real donors fund causes for food, education, animals, and Indian Defence families.',
    features: [
      'Live Razorpay integration (UPI, card, netbanking)',
      '80-G tax certificate generation with Aadhaar/PAN verification',
      'Recurring monthly donation subscriptions',
      'Cause management: Food, Water, Education, Animals, Defence',
      'Volunteer registration and tracking system',
      'Mobile-responsive with gallery and contact modules',
    ],
    challenge: '80-G certificates legally require verified ID — cannot be auto-generated without validation.',
    solution: 'Built a validation pipeline requiring Aadhaar OR PAN before certificate generation, with legal disclaimers.',
  },
  {
    id: 'lms',
    title: 'LMS',
    shortDesc: 'Full-featured school ERP — students, teachers, attendance, grades, and admin dashboard in one Django backend.',
    status: 'COMPLETED',
    statusColor: 'blue',
    gradient: 'from-[#050816] via-[#041f2e] to-[#050816]',
    accentColor: '#06B6D4',
    stack: ['Python', 'Django', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/thaagamfoundationngo/LMS',
    live: null,
    overview: 'Complete school administration system built solo. Handles student enrollment, class assignment, attendance, and academic records.',
    features: [
      'Student and teacher profile management (full CRUD)',
      'Class and subject assignment system with scheduling',
      'Daily attendance marking with automated report generation',
      'Grade entry and cumulative academic record tracking',
      'Role-based dashboards: Admin, Teacher, Student',
      'Responsive Django-templated frontend',
    ],
    challenge: 'Students belonging to multiple classes across academic years without data duplication.',
    solution: 'Normalized schema with junction tables for student-class-year relationships.',
  },
  {
    id: 'job-portal',
    title: 'AI-Powered Smart Job Portal',
    shortDesc: 'AI recruitment platform using BERT + spaCy to screen resumes and match candidates to job descriptions automatically.',
    status: 'IN DEVELOPMENT',
    statusColor: 'cyan',
    gradient: 'from-[#050816] via-[#0f1f4a] to-[#050816]',
    accentColor: '#3B82F6',
    stack: ['Python', 'Django', 'BERT', 'spaCy', 'REST API', 'MySQL', 'PyMuPDF'],
    github: 'https://github.com/GANESH14-CSE/smart-job-portal',
    live: null,
    overview: 'End-to-end AI recruitment pipeline. PDF resume ingestion, BERT-powered semantic matching, automated feedback generation.',
    features: [
      'PDF resume parsing with PyMuPDF + pdfminer + text normalization',
      'Semantic job–resume matching via sentence-transformers (BERT)',
      'spaCy NER for skill, experience, and education entity extraction',
      'Automated candidate feedback based on match score and skill gaps',
      'REST API (Django REST Framework) with JWT authentication',
      'MySQL database with optimized indexing for fast candidate ranking',
    ],
    challenge: 'Inconsistent PDF formatting across resume templates broke naive text extraction.',
    solution: 'Built a multi-pass extractor: PyMuPDF → pdfminer fallback → regex normalization pipeline.',
  },
];
export type { Project as ProjectType };
