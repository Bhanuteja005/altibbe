export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: 'full-time' | 'part-time' | 'remote' | 'contract';
  salary?: string;
  requirements?: string[];
  benefits?: string[];
  createdAt: string;
}

export interface Application {
  _id: string;
  job_id: string | Job;
  name: string;
  email: string;
  resume_link: string;
  cover_letter: string;
  phone?: string;
  createdAt: string;
}

export interface JobFilters {
  type?: string;
  location?: string;
  company?: string;
}

export interface ApplicationForm {
  name: string;
  email: string;
  resume_link: string;
  cover_letter: string;
  phone?: string;
}
