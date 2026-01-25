
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
