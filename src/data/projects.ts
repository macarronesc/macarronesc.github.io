import { Brain, Clapperboard, CloudCog, Rocket, AudioLines, Flag } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  tech: string[];
  icon: typeof Brain;
}

export const projects: Project[] = [
  { id: 'agns', title: 'AGNS', tech: ['AI & LLMs', 'Research'], icon: Brain },
  { id: 'klipso', title: 'Klipso', tech: ['AI & LLMs', 'Personal', 'Cloud'], icon: Clapperboard },
  { id: 'lithops', title: 'Lithops', tech: ['Serverless', 'Research', 'Cloud'], icon: CloudCog },
  { id: 'pyrun', title: 'PyRun Cloud', tech: ['AI & LLMs', 'Research', 'Serverless', 'Cloud'], icon: Rocket },
  { id: 'soundless', title: 'Soundless', tech: ['Cloud', 'Research'], icon: AudioLines },
  { id: 'f1', title: 'F1 Oracle', tech: ['AI & LLMs', 'Personal'], icon: Flag },
  { id: 'core', title: 'Core Contributions', tech: ['AI & LLMs', 'Personal'], icon: Brain },
  { id: 'speaking', title: 'Technical Speaking', tech: ['Cloud', 'Serverless', 'Research'], icon: Brain },
];

export const techFilters = ['Cloud', 'AI & LLMs', 'Research', 'Personal', 'Serverless', ] as const;

export function isProjectVisible(projectId: string, activeFilter: string | null): boolean {
  if (!activeFilter) return true;
  return projects.find((p) => p.id === projectId)?.tech.includes(activeFilter) ?? false;
}
