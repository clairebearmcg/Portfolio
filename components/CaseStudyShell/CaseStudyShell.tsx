import type { ReactNode } from 'react';
import { SiteNav } from '../SiteNav/SiteNav';
import classes from './CaseStudyShell.module.css';

// Frame shared by case study pages: the site nav (inactive, UX links home) and the scaled content
export function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className={classes.top}>
        <SiteNav homeHref="/" />
      </header>
      <main className={classes.content}>{children}</main>
    </>
  );
}
