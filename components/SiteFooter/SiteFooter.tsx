'use client';

import classes from './SiteFooter.module.css';

interface SiteFooterProps {
  /** "dark" for when the footer sits on a dark band */
  tone?: 'light' | 'dark';
}

export function SiteFooter({ tone = 'light' }: SiteFooterProps) {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className={classes.footer} data-tone={tone}>
      <button type="button" className={classes.backToTop} onClick={scrollToTop}>
        BACK TO TOP
      </button>
      <p className={classes.wordmark}>CLAIRE MCGREGOR</p>
    </footer>
  );
}
