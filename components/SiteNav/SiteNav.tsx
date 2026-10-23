'use client';

import { useRef, useState, type CSSProperties } from 'react';
import classes from './SiteNav.module.css';

const ITEMS = ['UX', 'ME', 'CV'] as const;
const DURATION = 440;

// The ME and CV pages don't exist yet, so for now the items only move the pill
export function SiteNav() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const pill = useRef<HTMLSpanElement>(null);
  const leaving = useRef<HTMLSpanElement>(null);
  const droplet = useRef<HTMLSpanElement>(null);

  // Liquid hop: the old pill shrinks away, a droplet pulls off it, travels, and swells into the new pill.
  // The gooey SVG filter on the layer makes shapes merge where they touch.
  const animate = (from: number, to: number) => {
    const fromEl = items.current[from];
    const toEl = items.current[to];
    if (
      !fromEl ||
      !toEl ||
      !pill.current?.animate ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const x0 = `translateX(${fromEl.offsetLeft}px)`;
    const x1 = `translateX(${toEl.offsetLeft}px)`;

    leaving.current?.animate(
      [
        { opacity: 1, transform: `${x0} scale(1)` },
        { opacity: 1, transform: `${x0} scale(0.55, 0.7)`, offset: 0.35 },
        { opacity: 1, transform: `${x0} scale(0)` },
      ],
      { duration: DURATION * 0.5, easing: 'ease-in' }
    );
    droplet.current?.animate(
      [
        { opacity: 1, transform: `${x0} scale(0.5, 0.7)` },
        {
          opacity: 1,
          transform: `translateX(${(fromEl.offsetLeft + toEl.offsetLeft) / 2}px) scale(0.3, 0.45)`,
        },
        { opacity: 1, transform: `${x1} scale(0.5, 0.7)` },
      ],
      { duration: DURATION, easing: 'ease-in-out' }
    );
    pill.current.animate(
      [
        { transform: `${x1} scale(0)` },
        { transform: `${x1} scale(0)`, offset: 0.5 },
        { transform: `${x1} scale(0.6, 0.75)`, offset: 0.8 },
        { transform: `${x1} scale(1)` },
      ],
      { duration: DURATION, easing: 'linear' }
    );
  };

  const select = (i: number) => {
    if (i === active) {
      return;
    }
    animate(active, i);
    setActive(i);
  };

  return (
    <nav aria-label="Main" className={classes.nav} style={{ '--active': active } as CSSProperties}>
      <svg className={classes.filter} aria-hidden>
        <filter id="nav-goo" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
          />
        </filter>
      </svg>
      <span className={classes.liquid} aria-hidden>
        <span ref={leaving} className={classes.blob} />
        <span ref={droplet} className={classes.blob} />
        <span ref={pill} className={classes.pill} />
      </span>
      {ITEMS.map((label, i) => (
        <button
          key={label}
          ref={(el) => {
            items.current[i] = el;
          }}
          type="button"
          className={classes.item}
          data-active={i === active || undefined}
          aria-current={i === active ? 'page' : undefined}
          onClick={() => select(i)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
