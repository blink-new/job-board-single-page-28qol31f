export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  category: string;
  postedDate: string;
  featured: boolean;
  companyLogo?: string;
}

export interface JobFilters {
  search: string;
  location: string;
  category: string;
  type: string;
  salaryRange: [number, number];
}