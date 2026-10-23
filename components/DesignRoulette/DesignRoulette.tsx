'use client';

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import classes from './DesignRoulette.module.css';

// Clockwise from the top of the wheel; each slice is 45°
const SLICES = [
  'comfort-drift',
  'home',
  'ev-smart-charging',
  'solar-lead-gen',
  'filter-smart-alerts',
  'thermostat-alerts',
  'anomaly-detection',
  'energy-visualized',
];
const SLICE_ANGLE = 360 / SLICES.length;
const FULL_TURNS = 5;
const SPIN_MS = 4000;

// Wheel angle (0 = top, clockwise) that should end under the pointer.
// The design asks that it never lands on "home", and stays clear of slice edges.
function pickLandingAngle() {
  const choices = SLICES.map((_, i) => i).filter((i) => SLICES[i] !== 'home');
  const slice = choices[Math.floor(Math.random() * choices.length)];
  const margin = SLICE_ANGLE * 0.15;
  return slice * SLICE_ANGLE + margin + Math.random() * (SLICE_ANGLE - 2 * margin);
}

export function DesignRoulette() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const spin = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = (360 - pickLandingAngle()) % 360;
    const delta = ((target - (rotation % 360) + 360) % 360) + 360 * FULL_TURNS;

    setReduceMotion(prefersReduced);
    setRotation(rotation + delta);
    // With no transition, transitionend never fires
    setSpinning(!prefersReduced);
  };

  return (
    <section className={classes.card} aria-labelledby="design-roulette-title">
      <div className={classes.text}>
        <h2 id="design-roulette-title" className={classes.title}>
          Design Roulette!
        </h2>
        <p className={classes.description}>Spin the wheel for a project.</p>
      </div>
      <button type="button" className={classes.spin} onClick={spin} disabled={spinning}>
        Spin
      </button>
      <div className={classes.stage}>
        <div
          className={classes.wheel}
          data-testid="roulette-wheel"
          style={{
            transform: `rotate(${rotation}deg)`,
            transitionDuration: reduceMotion ? '0ms' : `${SPIN_MS}ms`,
          }}
          onTransitionEnd={() => setSpinning(false)}
        >
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
