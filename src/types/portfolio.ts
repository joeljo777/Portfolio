export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Automotive / V2X' | 'Real-Time / Safety-Critical' | 'Biomedical / Wearable' | 'Power Electronics';
  timeline: string;
  status: 'Hardware Prototype' | 'Validated System' | 'Simulation Validated' | 'National Podium';
  hardware: string[];
  mcu: string;
  protocols: string[];
  firmwareStack: string[];
  summary: string;
  problemStatement: string;
  architectureDetails: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  resultsAndValidation: string[];
  githubUrl?: string;
  paperUrl?: string;
  featured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  date: string;
  organizer: string;
  prize: string;
  team?: string;
  description: string;
  image: string;
  thumbnail?: string;
  aspectRatio?: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Familiar' | 'Exploring';
    note?: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  timeline: string;
  expectedGraduation: string;
  cgpa: string;
  coursework: string[];
}

export interface Experience {
  role: string;
  organization: string;
  timeline: string;
  location: string;
  highlights: string[];
}

export interface Publication {
  title: string;
  conference: string;
  year: number;
  authors: string[];
  publisher: string;
  doi?: string;
  abstract: string;
}
