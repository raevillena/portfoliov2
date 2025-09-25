// Core data interfaces for the portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  resumeUrl?: string;
  contact: {
    email: string;
    phone?: string;
    location: string;
    website?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Competency {
  category: string;
  skills: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  images?: string[];
  status: 'completed' | 'in-progress' | 'planned';
  isPrivate?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  field?: string;
  period: string;
  status: 'completed' | 'ongoing';
  gpa?: string;
  relevantCoursework?: string[];
}

export interface WorkExperience {
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Seminar {
  title: string;
  type: 'presenter' | 'participant';
  organization: string;
  date: string;
  location?: string;
  description?: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
  url?: string;
}

export interface ResearchInvolvement {
  title: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Membership {
  organization: string;
  memberId: string;
  type: string;
  status: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Additional interfaces from portfoliov1
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  icon?: string;
}

export interface Affiliation {
  id: string;
  organization: string;
  role: string;
  memberId?: string;
  status: string;
  description?: string;
}

export interface Conference {
  id: string;
  title: string;
  type: 'International' | 'National' | 'Regional';
  role: 'Presenter' | 'Participant' | 'Speaker' | 'Attendee';
  date: string;
  location: string;
  description?: string;
}

export interface Training {
  id: string;
  title: string;
  date: string;
  duration?: string;
  provider?: string;
  description?: string;
}

// Theme context interface
export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Developer mode context interface
export interface DeveloperModeContextType {
  isDeveloperMode: boolean;
  toggleDeveloperMode: () => void;
  showTerminal: boolean;
  toggleTerminal: () => void;
  showMatrix: boolean;
  toggleMatrix: () => void;
  showCodeRain: boolean;
  toggleCodeRain: () => void;
  showGlitch: boolean;
  toggleGlitch: () => void;
}

// Navigation interface
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}
