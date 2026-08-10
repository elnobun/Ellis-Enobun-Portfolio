export type NavigationTab = 'projects' | 'about' | 'stack' | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Web App' | 'UI/UX' | 'Backend' | 'Backend & WebApp' | 'AI / Data';
  tags: string[];
  image: string;
  featured?: boolean;
  liveDemoUrl?: string;
  githubUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string;
    highlights: string[];
    codeSnippet?: {
      filename: string;
      language: string;
      code: string;
    };
  };
  interactiveDemoType?: 'analytics' | 'e-commerce' | 'serverless' | 'ai-assistant';
}

export interface TechItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database & Infra' | 'Tooling & AI';
  proficiency: number; // 0 - 100
  experienceYears: number;
  description: string;
  iconName: string;
  codeSnippet: {
    filename: string;
    code: string;
  };
  features: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievement: string;
}

export interface Hobby {
  title: string;
  icon: string;
  description: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}
