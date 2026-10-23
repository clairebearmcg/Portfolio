import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export default {
  title: 'ProjectCard',
};

export const Featured = () => (
  <div style={{ maxWidth: 1180, padding: 40 }}>
    <ProjectCard project={projects[0]} variant="featured" />
  </div>
);

export const Compact = () => (
  <div style={{ maxWidth: 570, padding: 40 }}>
    <ProjectCard project={projects[2]} />
  </div>
);
