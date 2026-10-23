'use client';

import classes from './SiteFooter.module.css';

export function SiteFooter() {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className={classes.footer}>
      <button type="button" className={classes.backToTop} onClick={scrollToTop}>
        BACK TO TOP
      </button>
      <p className={classes.wordmark}>CLAIRE MCGREGOR</p>
    </footer>
  );
}
