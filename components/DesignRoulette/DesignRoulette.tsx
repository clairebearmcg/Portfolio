'use client';

import { useState, type CSSProperties, type MouseEvent, type TransitionEvent } from 'react';
import Image from 'next/image';
import { projects, type Project } from '@/data/projects';
import classes from './DesignRoulette.module.css';

// Clockwise from the top of the wheel; each slice is 45°
export const SLICES = [
  'comfort-drift',
  'home',
  'ev-smart-charging',
  'solar-lead-gen',
  'filter-smart-alerts',
  'thermostat-alerts',
  'anomaly-detection',
  'energy-visualized',
];
export const SLICE_ANGLE = 360 / SLICES.length;
const FULL_TURNS = 5;
const SPIN_MS = 4000;

// The design asks that the wheel never lands on "home"
function pickSlice() {
  const choices = SLICES.map((_, i) => i).filter((i) => SLICES[i] !== 'home');
  return choices[Math.floor(Math.random() * choices.length)];
}

export function DesignRoulette() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [slice, setSlice] = useState<number | null>(null);

  const landed: Project | undefined =
    !spinning && slice !== null ? projects.find((p) => p.slug === SLICES[slice]) : undefined;

  const spin = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const next = pickSlice();
    // Rotate so the middle of the chosen slice ends under the pointer at the top
    const target = (360 - (next * SLICE_ANGLE + SLICE_ANGLE / 2)) % 360;
    const delta = ((target - (rotation % 360) + 360) % 360) + 360 * FULL_TURNS;

    setReduceMotion(prefersReduced);
    setSlice(next);
    setRotation(rotation + delta);
    // With no transition, transitionend never fires
    setSpinning(!prefersReduced);
  };

  const onWheelTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    // Ignore transitions bubbling up from the slice highlight
    if (event.target === event.currentTarget) {
      setSpinning(false);
    }
  };

  // Scroll smoothly to the project's card; the href stays as a fallback without JS
  const viewProject = (event: MouseEvent<HTMLAnchorElement>) => {
    const card = landed && document.getElementById(landed.slug);
    if (!card) {
      return;
    }
    event.preventDefault();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    card.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' });
    window.history.replaceState(null, '', `#${card.id}`);
  };

  return (
    <section className={classes.card} aria-labelledby="design-roulette-title">
      <div className={classes.text} aria-live="polite">
        <h2 id="design-roulette-title" className={classes.title}>
          {landed ? landed.title : 'Design Roulette!'}
        </h2>
        <p className={classes.description}>
          {landed ? landed.rouletteBlurb : 'Spin the wheel for a project.'}
        </p>
      </div>
      <div className={classes.buttons}>
        {landed ? (
          <>
            <button type="button" className={classes.secondary} onClick={spin}>
              Spin again
            </button>
            <a href={`#${landed.slug}`} className={classes.primary} onClick={viewProject}>
              View project
            </a>
          </>
        ) : (
          <button type="button" className={classes.primary} onClick={spin} disabled={spinning}>
            Spin
          </button>
        )}
      </div>
      <div className={classes.stage}>
        <div
          className={classes.wheel}
          data-testid="roulette-wheel"
          style={{
            transform: `rotate(${rotation}deg)`,
            transitionDuration: reduceMotion ? '0ms' : `${SPIN_MS}ms`,
          }}
          onTransitionEnd={onWheelTransitionEnd}
        >
          <div
            className={classes.highlight}
            data-visible={landed ? true : undefined}
            style={{ '--from': `${(slice ?? 0) * SLICE_ANGLE}deg` } as CSSProperties}
          />
          {SLICES.map((slug, i) => (
            <Image
              key={slug}
              className={classes.icon}
              src={`/roulette/${slug}.png`}
              alt=""
              width={52}
              height={52}
              unoptimized
              style={{ '--angle': `${i * SLICE_ANGLE + SLICE_ANGLE / 2}deg` } as CSSProperties}
            />
          ))}
        </div>
        <Image
          className={classes.pointer}
          src="/roulette/pointer.svg"
          alt=""
          width={55}
          height={82}
        />
      </div>
    </section>
  );
}
