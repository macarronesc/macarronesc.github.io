import { Brain, Clapperboard, CloudCog, Rocket, AudioLines, Flag, Swords, Stethoscope, Video, Music, GitPullRequest, Mic } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  tech: string[];
  icon: typeof Brain;
  stack: string[];
  contentId?: string;
  stats?: string[];
}

export const projects: Project[] = [
  { id: 'klipso', title: 'Klipso', tech: ['AI & LLMs', 'Personal', 'Cloud'], icon: Clapperboard, stack: ['Whisper + Gemini', 'FFmpeg', 'React + Python'], stats: ['users', 'clips', 'hours'] },
  { id: 'invade', title: 'Invade.io', tech: ['Game Development', 'Personal'], icon: Swords, stack: ['Godot 4', 'GDScript', 'Android / iOS'], stats: ['campaign'] },
  { id: 'literag', title: 'LiteRAG', tech: ['AI & LLMs', 'Research'], icon: Brain, stack: ['Neo4j', 'NetworkX', 'PyTorch'], stats: ['latency'] },
  { id: 'pyrun', title: 'PyRun Cloud', tech: ['AI & LLMs', 'Research', 'Serverless', 'Cloud'], icon: Rocket, stack: ['AWS', 'IBM Code Engine', 'MCP'] },
  { id: 'lithops', title: 'Lithops', tech: ['Serverless', 'Research', 'Cloud'], icon: CloudCog, stack: ['Python', 'Kubernetes', 'Singularity'] },
  { id: 'medground', title: 'MedGround', tech: ['AI & LLMs', 'Personal'], icon: Stethoscope, stack: ['FastAPI', 'ChromaDB', 'Gemini'] },
  { id: 'research-to-ai-video', title: 'Research to AI Video', tech: ['AI & LLMs', 'Personal'], icon: Video, stack: ['NotebookLM', 'Gemini', 'YouTube API'] },
  { id: 'spotify-to-apple-music', title: 'Spotify to Apple Music', tech: ['Personal'], icon: Music, stack: ['Python', 'GitHub Actions', 'Telegram'] },
  { id: 'soundless', title: 'Soundless', tech: ['Cloud', 'Research'], icon: AudioLines, stack: ['Kotlin', 'Fitbit API', 'GCP'] },
  { id: 'f1', title: 'F1 Oracle', tech: ['AI & LLMs', 'Personal', 'Research'], icon: Flag, stack: ['TensorFlow', 'FastF1', 'Pandas'], contentId: 'f1-oracle' },
  { id: 'core', title: 'Open Source Contributions', tech: ['AI & LLMs', 'Serverless', 'Cloud'], icon: GitPullRequest, stack: ['Ollama', 'Gemini CLI', 'Dask', 'MCP'] },
  { id: 'speaking', title: 'Technical Speaking', tech: ['Cloud', 'Serverless', 'Research'], icon: Mic, stack: ['PyConES', 'EuroSciPy'] },
];

export const techFilters = ['Cloud', 'AI & LLMs', 'Research', 'Personal', 'Serverless', 'Game Development'] as const;

export const timelineOrder = ['invade', 'research-to-ai-video', 'medground', 'klipso', 'literag', 'pyrun', 'f1', 'speaking', 'spotify-to-apple-music', 'soundless', 'lithops', 'core'];

export function isProjectVisible(projectId: string, activeFilter: string | null): boolean {
  if (!activeFilter) return true;
  return projects.find((p) => p.id === projectId)?.tech.includes(activeFilter) ?? false;
}
