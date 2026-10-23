import { DesignRoulette } from '../components/DesignRoulette/DesignRoulette';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { SectionDivider } from '../components/SectionDivider/SectionDivider';
import { SiteFooter } from '../components/SiteFooter/SiteFooter';
import { SiteHeader } from '../components/SiteHeader/SiteHeader';
import { projects } from '../data/projects';
import classes from './page.module.css';

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);
  const compact = projects.filter((project) => !project.featured);

  return (
    <div className={classes.container}>
      <SiteHeader />
      <main>
        <section className={classes.featured} aria-label="Featured projects">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </section>
        <section className={classes.charcuterie} aria-label="Charcuterie">
          <SectionDivider title="Charcuterie" subtitle="Bite-sized UX stories worth savoring." />
          <div className={classes.grid}>
            {compact.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
            <DesignRoulette />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
