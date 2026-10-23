'use client';

import { useRef, useState, type CSSProperties } from 'react';
import classes from './SiteNav.module.css';

const ITEMS = ['UX', 'ME', 'CV'] as const;
const DURATION = 360;
// How far the trailing droplet lags behind the pill; long enough for it to break away mid-slide
const TRAIL_LAG = 120;
const EASE = 'cubic-bezier(0.5, 0, 0.2, 1)';

// The ME and CV pages don't exist yet, so for now the items only move the pill
export function SiteNav() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const pill = useRef<HTMLSpanElement>(null);
  const droplet = useRef<HTMLSpanElement>(null);

  // Liquid slide: the pill slides across, squashing slightly, while a droplet trails behind it,
  // breaks away mid-slide and merges back in on arrival.
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
    const xMid = `translateX(${(fromEl.offsetLeft + toEl.offsetLeft) / 2}px)`;

    pill.current.animate(
      [
        { transform: `${x0} scale(1)` },
        { transform: `${xMid} scale(1.06, 0.86)` },
        { transform: `${x1} scale(1)` },
      ],
      { duration: DURATION, easing: EASE }
    );
    droplet.current?.animate(
      [
        { opacity: 1, transform: `${x0} scale(0.35, 0.6)` },
        { opacity: 1, transform: `${x1} scale(0.35, 0.6)` },
      ],
      { duration: DURATION, delay: TRAIL_LAG, easing: EASE, fill: 'backwards' }
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
