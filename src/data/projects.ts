import { BrainCircuit, Scissors, CloudCog, Rocket, AudioLines, Flag } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  tech: string[];
  icon: typeof BrainCircuit;
}

export const projects: Project[] = [
  { id: 'agns', title: 'AGNS', tech: ['AI & LLMs', 'Python'], icon: BrainCircuit },
  { id: 'klipso', title: 'Klipso', tech: ['AI & LLMs', 'Python', 'Cloud'], icon: Scissors },
  { id: 'lithops', title: 'Lithops', tech: ['Serverless', 'Python', 'Cloud'], icon: CloudCog },
  { id: 'pyrun', title: 'PyRun Cloud', tech: ['Serverless', 'Cloud', 'Kubernetes'], icon: Rocket },
  { id: 'soundless', title: 'Soundless', tech: ['Cloud', 'Python'], icon: AudioLines },
  { id: 'f1', title: 'F1 Oracle', tech: ['AI & LLMs', 'Python'], icon: Flag },
  { id: 'core', title: 'Core Contributions', tech: ['AI & LLMs', 'Rust'], icon: BrainCircuit },
  { id: 'speaking', title: 'Technical Speaking', tech: ['Cloud', 'Python'], icon: BrainCircuit },
];

export const techFilters = ['Cloud', 'AI & LLMs', 'Python', 'Serverless', 'Rust', 'Kubernetes'] as const;

export function isProjectVisible(projectId: string, activeFilter: string | null): boolean {
  if (!activeFilter) return true;
  return projects.find((p) => p.id === projectId)?.tech.includes(activeFilter) ?? false;
}
