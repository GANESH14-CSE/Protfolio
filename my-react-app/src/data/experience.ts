export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  details: string[];
  iconType: 'python' | 'code';
  glowColor: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Python Django Developer Intern',
    company: 'M7 Corporation',
    location: 'Chennai, Tamil Nadu',
    duration: 'Mar 2026 – Aug 2026',
    details: [
      'Developed and maintained the backend of an LMS using Django and MySQL for student and course management.',
      'Integrated Razorpay payment gateway, WhatsApp API, and email automation to streamline operations.',
      'Built REST APIs and optimized database queries to improve application performance.'
    ],
    iconType: 'python',
    glowColor: '#3B82F6' // Electric Blue glow
  },
  {
    role: 'Web Development Intern',
    company: 'NSIC',
    location: 'Chennai, Tamil Nadu',
    duration: 'Feb 2024 – Mar 2024',
    details: [
      'Developed responsive web pages using HTML, CSS, JavaScript, and Bootstrap.',
      'Improved website usability through reusable UI components and responsive design.'
    ],
    iconType: 'code',
    glowColor: '#06B6D4' // Neon Cyan glow
  }
];
