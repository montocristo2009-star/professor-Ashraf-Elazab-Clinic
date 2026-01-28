export const APP_TYPES_VERSION = "1.0.0";

export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  icon: string;
  imageUrl?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface SuccessStory {
  id: string;
  condition: string;
  description: string;
  outcome: string;
  year: string;
}

export interface AcademicStat {
  label: string;
  value: string;
  icon: string;
}

export interface Review {
  id: string;
  patientName: string;
  text: string;
  rating: number;
  source: string;
  date: string;
}