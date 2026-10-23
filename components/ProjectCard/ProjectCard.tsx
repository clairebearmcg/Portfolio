import Image from 'next/image';
import type { Project } from '@/data/projects';
import classes from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Pick<Project, 'title' | 'description' | 'image'>;
  variant?: 'featured' | 'compact';
}

// Preview image sizes from the Figma frame
const IMAGE_SIZE = {
  featured: { width: 619, height: 250 },
  compact: { width: 485, height: 250 },
};

export function ProjectCard({ project, variant = 'compact' }: ProjectCardProps) {
  const { width, height } = IMAGE_SIZE[variant];

  return (
    <article className={classes.card} data-variant={variant}>
      <div className={classes.text}>
        <h2 className={classes.title}>{project.title}</h2>
        <p className={classes.description}>{project.description}</p>
      </div>
      <Image
        className={classes.image}
        src={project.image}
        alt={project.title}
        width={width}
        height={height}
        // The optimizer palette-reduces PNGs, which blurs the small UI text in these previews
        unoptimized
      />
    </article>
  );
}
