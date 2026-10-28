'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nextProject } from '@/data/projects';
import classes from './SiteFooter.module.css';

interface SiteFooterProps {
  /** "dark" for when the footer sits on a dark band */
  tone?: 'light' | 'dark';
  /** false on short pages that only show the wordmark; the page provides the space above it */
  backToTop?: boolean;
}

export function SiteFooter({ tone = 'light', backToTop = true }: SiteFooterProps) {
  // Case study pages also link on to the next one
  const next = nextProject(usePathname());

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer
      className={classes.footer}
      data-tone={tone}
      data-wordmark-only={!backToTop || undefined}
    >
      {backToTop && (
        <div className={classes.links}>
          <button type="button" className={classes.backToTop} onClick={scrollToTop}>
            BACK TO TOP
          </button>
          {next?.href && (
            <Link href={next.href} className={classes.next}>
              NEXT PROJECT <span aria-hidden="true">→</span>
              <span className={classes.visuallyHidden}>: {next.title}</span>
            </Link>
          )}
        </div>
      )}
      <p className={classes.wordmark}>CLAIRE MCGREGOR</p>
    </footer>
  );
}
