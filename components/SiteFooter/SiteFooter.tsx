'use client';

import classes from './SiteFooter.module.css';

interface SiteFooterProps {
  /** "dark" for when the footer sits on a dark band */
  tone?: 'light' | 'dark';
  /** false on short pages that only show the wordmark; the page provides the space above it */
  backToTop?: boolean;
}

export function SiteFooter({ tone = 'light', backToTop = true }: SiteFooterProps) {
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
        <button type="button" className={classes.backToTop} onClick={scrollToTop}>
          BACK TO TOP
        </button>
      )}
      <p className={classes.wordmark}>CLAIRE MCGREGOR</p>
    </footer>
  );
}
