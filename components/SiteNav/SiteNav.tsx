'use client';

import { useState, type CSSProperties } from 'react';
import classes from './SiteNav.module.css';

const ITEMS = ['UX', 'ME', 'CV'] as const;

// The ME and CV pages don't exist yet, so for now the items only move the pill
export function SiteNav() {
  const [active, setActive] = useState(0);

  return (
    <nav aria-label="Main" className={classes.nav} style={{ '--active': active } as CSSProperties}>
      <span className={classes.pill} aria-hidden />
      {ITEMS.map((label, i) => (
        <button
          key={label}
          type="button"
          className={classes.item}
          data-active={i === active || undefined}
          aria-current={i === active ? 'page' : undefined}
          onClick={() => setActive(i)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
