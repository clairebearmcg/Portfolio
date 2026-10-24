'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './SiteNav.module.css';

const ITEMS = [
  { label: 'UX', href: '/' },
  { label: 'ME', href: '/me' },
  { label: 'CV', href: '/cv' },
] as const;

// Which item the pill sits on for a page: none on case studies, ME also covers "Why I design"
export function activeIndexFor(pathname: string): number | null {
  if (pathname === '/') {
    return 0;
  }
  if (pathname === '/me' || pathname === '/why-i-design') {
    return 1;
  }
  if (pathname === '/cv') {
    return 2;
  }
  return null;
}
const DURATION = 290;
const EASE = 'cubic-bezier(0.5, 0, 0.2, 1)';
// Blobs that follow the pill, each smaller and later; the goo filter blends them into one tapering tail
const TAIL = [
  { lag: 25, scale: 'scale(0.8, 0.85)' },
  { lag: 50, scale: 'scale(0.6, 0.7)' },
  { lag: 75, scale: 'scale(0.42, 0.55)' },
];

// Rendered once in the site layout so the pill can slide between pages
export function SiteNav() {
  const pathname = usePathname();
  const [active, setActive] = useState<number | null>(() => activeIndexFor(pathname));
  const items = useRef<(HTMLElement | null)[]>([]);
  const pill = useRef<HTMLSpanElement>(null);
  const tail = useRef<(HTMLSpanElement | null)[]>([]);

  // Liquid slide: the pill slides across, squashing slightly, and stretches a tail behind it
  // that pulls back in when it stops. The gooey SVG filter on the layer merges the shapes.
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
    TAIL.forEach(({ lag, scale }, i) => {
      tail.current[i]?.animate(
        [
          { opacity: 1, transform: `${x0} ${scale}` },
          { opacity: 1, transform: `${x1} ${scale}` },
        ],
        { duration: DURATION, delay: lag, easing: EASE, fill: 'backwards' }
      );
    });
  };

  const moveTo = (i: number | null) => {
    if (i === active) {
      return;
    }
    // From or to "nothing active" there's nowhere to slide, so the pill just appears or goes
    if (active !== null && i !== null) {
      animate(active, i);
    }
    setActive(i);
  };

  // Clicking moves the pill straight away; this keeps it right after back/forward and other navigation
  useEffect(() => {
    moveTo(activeIndexFor(pathname));
  }, [pathname]);

  return (
    <div className={classes.bar}>
      <nav
        aria-label="Main"
        className={classes.nav}
        data-empty={active === null || undefined}
        style={{ '--active': active ?? 0 } as CSSProperties}
      >
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
          {TAIL.map(({ lag }, i) => (
            <span
              key={lag}
              ref={(el) => {
                tail.current[i] = el;
              }}
              className={classes.blob}
            />
          ))}
          <span ref={pill} className={classes.pill} />
        </span>
        {ITEMS.map(({ label, href }, i) => (
          <Link
            key={label}
            ref={(el) => {
              items.current[i] = el;
            }}
            href={href}
            className={classes.item}
            data-active={i === active || undefined}
            aria-current={pathname === href ? 'page' : undefined}
            onClick={() => moveTo(i)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
