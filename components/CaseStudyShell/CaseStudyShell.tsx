import type { ReactNode } from 'react';
import classes from './CaseStudyShell.module.css';

// Frame shared by case study pages: room for the floating site nav, then the scaled content
export function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={classes.navSpace} aria-hidden />
      <main className={classes.content}>{children}</main>
    </>
  );
}
