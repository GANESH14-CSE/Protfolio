export interface Skill {
  name: string;
  desc: string;
  rating: number; // 1 to 5 stars
  usedIn: string[];
}

export interface SkillCategory {
  name: string;
  color: 'blue' | 'cyan' | 'green' | 'purple' | 'pink' | 'orange';
  colorHex: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend Development',
    color: 'blue',
    colorHex: '#3B82F6',
    skills: [
      { 
        name: 'Python', 
        desc: 'Primary programming language for system logic.', 
        rating: 5, 
        usedIn: ['AI Smart Job Portal', 'Karur Grievance Portal', 'LMS', 'M7 Corporation Intern'] 
      },
      { 
        name: 'Django', 
        desc: 'Principal backend web framework for large architectures.', 
        rating: 5, 
        usedIn: ['AI Smart Job Portal', 'Karur Grievance Portal', 'LMS', 'M7 Corporation Intern'] 
      },
      { 
        name: 'Flask', 
        desc: 'Micro-framework for serving lightweight machine learning models.', 
        rating: 4, 
        usedIn: ['AI Smart Job Portal', 'AI Systems'] 
      },
      { 
        name: 'REST API', 
        desc: 'Building optimized endpoints using Django REST Framework.', 
        rating: 5, 
        usedIn: ['AI Smart Job Portal', 'Karur Grievance Portal', 'M7 Corporation Intern'] 
      },
    ],
  },
  {
    name: 'Frontend Development',
    color: 'cyan',
    colorHex: '#06B6D4',
    skills: [
      { 
        name: 'React.js', 
        desc: 'SPA client rendering with hook states and component design.', 
        rating: 5, 
        usedIn: ['Karur Grievance Portal', 'Portfolio App'] 
      },
      { 
        name: 'JavaScript', 
        desc: 'Asynchronous event pipelines and DOM interaction.', 
        rating: 4, 
        usedIn: ['Karur Grievance Portal', 'NSIC Internship'] 
      },
      { 
        name: 'HTML5 & CSS3', 
        desc: 'Semantic, accessible layouts and responsive styling.', 
        rating: 5, 
        usedIn: ['LMS', 'Karur Grievance Portal', 'NSIC Internship'] 
      },
      { 
        name: 'Bootstrap', 
        desc: 'Responsive utility styling and grid layouts.', 
        rating: 4, 
        usedIn: ['NSIC Internship'] 
      },
    ],
  },
  {
    name: 'Database',
    color: 'green',
    colorHex: '#10B981',
    skills: [
      { 
        name: 'MySQL', 
        desc: 'Relational storage schema design and query execution optimization.', 
        rating: 5, 
        usedIn: ['AI Smart Job Portal', 'LMS', 'M7 Corporation Intern', 'Karur Grievance Portal'] 
      },
      { 
        name: 'SQL', 
        desc: 'Complex SQL queries, joins, indices, and database procedures.', 
        rating: 5, 
        usedIn: ['Karur Grievance Portal', 'LMS', 'M7 Corporation Intern'] 
      },
    ],
  },
  {
    name: 'Artificial Intelligence & Data',
    color: 'purple',
    colorHex: '#8B5CF6',
    skills: [
      { 
        name: 'BERT', 
        desc: 'Transformer embeddings for resume semantic matching.', 
        rating: 5, 
        usedIn: ['AI Smart Job Portal'] 
      },
      { 
        name: 'spaCy & NLP', 
        desc: 'Natural Language Processing and Named Entity Extraction (NER).', 
        rating: 5, 
        usedIn: ['AI Smart Job Portal'] 
      },
      { 
        name: 'NumPy & Pandas', 
        desc: 'Data frame manipulation, vector mathematics, and array parsing.', 
        rating: 5, 
        usedIn: ['AI Smart Job Portal', 'Data Analytics'] 
      },
      { 
        name: 'Matplotlib & Seaborn', 
        desc: 'Data charting, visualization, and metric rendering.', 
        rating: 4, 
        usedIn: ['Data Analytics Labs'] 
      },
    ],
  },
  {
    name: 'Realtime & Media Tools',
    color: 'pink',
    colorHex: '#EC4899',
    skills: [
      { 
        name: 'ElevenLabs', 
        desc: 'AI voice synthesis and audio generation integration.', 
        rating: 4, 
        usedIn: ['AI Audio Pipelines'] 
      },
      { 
        name: 'LiveKit & SIP Protocol', 
        desc: 'Real-time WebRTC audio/video sessions and SIP telephony integrations.', 
        rating: 4, 
        usedIn: ['Realtime Voice & Media Apps'] 
      },
    ],
  },
  {
    name: 'Developer Tools',
    color: 'orange',
    colorHex: '#F97316',
    skills: [
      { 
        name: 'Git & GitHub', 
        desc: 'Version control, commit workflows, and remote repository pipelines.', 
        rating: 5, 
        usedIn: ['All Production and Academic Projects'] 
      },
      { 
        name: 'VS Code & Jupyter', 
        desc: 'Primary development IDE and interactive Python data notebooks.', 
        rating: 5, 
        usedIn: ['Used across all development workflows'] 
      },
    ],
  },
];
