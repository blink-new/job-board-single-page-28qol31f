import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹15L - ₹25L',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for building user-facing features and ensuring the technical feasibility of UI/UX designs.',
    requirements: [
      '5+ years of experience with React',
      'Strong knowledge of TypeScript',
      'Experience with modern CSS frameworks',
      'Understanding of responsive design principles'
    ],
    benefits: [
      'Health and medical insurance',
      'Flexible working hours',
      'Work from home options',
      'Professional development budget',
      'Annual performance bonus'
    ],
    category: 'Technology',
    postedDate: '2024-01-15',
    featured: true,
    companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateLabs India',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹18L - ₹35L',
    description: 'Join our product team to drive the development of cutting-edge solutions. You will work closely with engineering, design, and business teams to deliver exceptional products.',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with agile methodologies',
      'Excellent communication skills'
    ],
    benefits: [
      'Competitive salary and ESOP',
      'Comprehensive health benefits',
      'Flexible leave policy',
      'Learning and development opportunities',
      'Quarterly team outings'
    ],
    category: 'Product',
    postedDate: '2024-01-14',
    featured: false
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'DesignStudio India',
    location: 'Remote (India)',
    type: 'Remote',
    salary: '₹8L - ₹18L',
    description: 'We are seeking a talented UX/UI Designer to create intuitive and engaging user experiences. You will be responsible for the entire design process from concept to implementation.',
    requirements: [
      '4+ years of UX/UI design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio showcasing design process',
      'Understanding of user-centered design principles'
    ],
    benefits: [
      'Fully remote position',
      'Flexible schedule',
      'Health and wellness allowance',
      'Top-tier equipment provided',
      'Internet and workspace allowance'
    ],
    category: 'Design',
    postedDate: '2024-01-13',
    featured: true,
    companyLogo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=64&h=64&fit=crop&crop=center'
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'DataTech Solutions India',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    salary: '₹12L - ₹28L',
    description: 'Join our data science team to extract insights from complex datasets and build predictive models that drive business decisions.',
    requirements: [
      'Masters/PhD in Data Science, Statistics, or related field',
      'Strong programming skills in Python and R',
      'Experience with machine learning frameworks',
      'Knowledge of SQL and database systems'
    ],
    benefits: [
      'Competitive compensation package',
      'Research and conference budget',
      'Flexible work arrangements',
      'Stock options',
      'Relocation assistance'
    ],
    category: 'Data Science',
    postedDate: '2024-01-12',
    featured: false
  },
  {
    id: '5',
    title: 'Digital Marketing Specialist',
    company: 'GrowthCo India',
    location: 'Delhi, NCR',
    type: 'Part-time',
    salary: '₹8L - ₹15L',
    description: 'We are looking for a creative Digital Marketing Specialist to develop and execute marketing campaigns that drive brand awareness and customer acquisition.',
    requirements: [
      '2+ years of digital marketing experience',
      'Knowledge of SEO and SEM',
      'Experience with social media platforms',
      'Strong writing and communication skills'
    ],
    benefits: [
      'Flexible part-time schedule',
      'Professional development opportunities',
      'Health insurance coverage',
      'Creative and collaborative environment',
      'Performance-based incentives'
    ],
    category: 'Marketing',
    postedDate: '2024-01-11',
    featured: false
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'CloudFirst India',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    salary: '₹20L - ₹45L',
    description: 'Join our infrastructure team to build and maintain scalable cloud solutions. You will work with cutting-edge technologies to ensure high availability and performance.',
    requirements: [
      '4+ years of DevOps experience',
      'Strong knowledge of AWS/Azure/GCP',
      'Experience with containerization (Docker, Kubernetes)',
      'Proficiency in Infrastructure as Code'
    ],
    benefits: [
      'Top-tier compensation',
      'Comprehensive benefits package',
      'Remote work flexibility',
      'Technical conference attendance',
      'Annual foreign training opportunity'
    ],
    category: 'Technology',
    postedDate: '2024-01-10',
    featured: true,
    companyLogo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=64&h=64&fit=crop&crop=center'
  },
  {
    id: '7',
    title: 'Full Stack Developer',
    company: 'StartupHub India',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    salary: '₹10L - ₹22L',
    description: 'Join our fast-growing startup to build end-to-end web applications. You will work on both frontend and backend technologies in an agile environment.',
    requirements: [
      '3+ years of full stack development experience',
      'Proficiency in React and Node.js',
      'Experience with databases (MongoDB/PostgreSQL)',
      'Knowledge of cloud platforms'
    ],
    benefits: [
      'Equity participation',
      'Health insurance',
      'Flexible working hours',
      'Learning budget',
      'Startup culture and growth opportunities'
    ],
    category: 'Technology',
    postedDate: '2024-01-09',
    featured: false
  },
  {
    id: '8',
    title: 'Business Analyst',
    company: 'FinTech Solutions India',
    location: 'Gurgaon, Haryana',
    type: 'Full-time',
    salary: '₹12L - ₹25L',
    description: 'We are seeking a Business Analyst to bridge the gap between business needs and technical solutions in the fintech domain.',
    requirements: [
      '3+ years of business analysis experience',
      'Strong analytical and problem-solving skills',
      'Experience in financial services domain',
      'Knowledge of SQL and data analysis tools'
    ],
    benefits: [
      'Competitive salary package',
      'Performance bonuses',
      'Health and life insurance',
      'Professional certification support',
      'Cab facility'
    ],
    category: 'Operations',
    postedDate: '2024-01-08',
    featured: true
  },
  {
    id: '9',
    title: 'Chief Technology Officer',
    company: 'UnicornTech India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹150L - ₹300L',
    description: 'Lead our technology vision and strategy as we scale to become India\'s next unicorn. You will oversee all technical aspects and build world-class engineering teams.',
    requirements: [
      '15+ years of technology leadership experience',
      'Experience scaling engineering teams (100+ engineers)',
      'Strong background in system architecture',
      'Previous CTO/VP Engineering experience at scale'
    ],
    benefits: [
      'Significant equity package',
      'Comprehensive executive benefits',
      'Flexible work arrangements',
      'Global conference speaking opportunities',
      'Executive coaching and development'
    ],
    category: 'Technology',
    postedDate: '2024-01-07',
    featured: true,
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=64&h=64&fit=crop&crop=center'
  },
  {
    id: '10',
    title: 'Senior Principal Engineer',
    company: 'GlobalTech India',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹80L - ₹150L',
    description: 'Join our elite engineering team to solve complex technical challenges at massive scale. You will architect systems serving millions of users globally.',
    requirements: [
      '12+ years of software engineering experience',
      'Expert-level knowledge in distributed systems',
      'Experience with microservices architecture',
      'Strong leadership and mentoring skills'
    ],
    benefits: [
      'Top-tier compensation package',
      'Stock options and bonuses',
      'Sabbatical leave program',
      'Research and patent opportunities',
      'Global team collaboration'
    ],
    category: 'Technology',
    postedDate: '2024-01-06',
    featured: true,
    companyLogo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=64&h=64&fit=crop&crop=center'
  },
  {
    id: '11',
    title: 'VP of Product',
    company: 'InnovateScale India',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    salary: '₹100L - ₹200L',
    description: 'Drive product strategy and execution for our suite of enterprise products. Lead cross-functional teams to deliver innovative solutions.',
    requirements: [
      '10+ years of product management experience',
      'Experience leading product teams (20+ people)',
      'Strong background in B2B/Enterprise products',
      'MBA from top-tier institution preferred'
    ],
    benefits: [
      'Executive compensation package',
      'Equity and performance bonuses',
      'Executive health and wellness program',
      'Leadership development opportunities',
      'Flexible executive schedule'
    ],
    category: 'Product',
    postedDate: '2024-01-05',
    featured: true
  }
];

export const jobCategories = [
  'All Categories',
  'Technology',
  'Design',
  'Product',
  'Marketing',
  'Data Science',
  'Sales',
  'Operations',
  'Finance',
  'Human Resources'
];

export const jobTypes = [
  'All Types',
  'Full-time',
  'Part-time',
  'Contract',
  'Remote'
];