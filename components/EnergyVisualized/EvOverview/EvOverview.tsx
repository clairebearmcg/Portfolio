import type { CSSProperties } from 'react';
import Image from 'next/image';
import classes from './EvOverview.module.css';

const IMG = '/case-studies/energy-visualized';

const GOALS = [
  {
    title: 'Overarching goal',
    text: 'Provide awareness and insights about energy to help customers feel that their family is safe, their home is secure, they’re comfortable, and they’re saving money.',
    src: `${IMG}/overview-rainbow.png`,
    width: 70,
    height: 74,
    narrow: false,
  },
  {
    title: 'Longterm goal',
    text: 'Bringing energy education, awareness, and insights to everybody (50 state plan).',
    src: `${IMG}/overview-rocket.png`,
    width: 58,
    height: 102,
    narrow: true,
  },
  {
    title: 'UX goal',
    text: 'Pioneer an energy experience that informs, delights, and encourages action about energy use.',
    src: `${IMG}/overview-phone.png`,
    width: 50,
    height: 91,
    narrow: false,
  },
];

export function EvOverview() {
  return (
    <section className={classes.overview} aria-label="Goals and framing">
      <div className={classes.container}>
        <ul className={classes.goals}>
          {GOALS.map(({ title, text, src, width, height, narrow }) => (
            <li key={title} className={classes.goal}>
              <span className={classes.iconBox}>
                <Image
                  className={classes.icon}
                  src={src}
                  alt=""
                  width={width}
                  height={height}
                  unoptimized
                  style={{ '--icon-w': `${width}px`, '--icon-h': `${height}px` } as CSSProperties}
                />
              </span>
              {/* Heading first for screen readers; shown under the text as designed */}
              <div className={`${classes.goalText} ${narrow ? classes.narrow : ''}`}>
                <h2 className={classes.goalTitle}>{title}</h2>
                <p className={classes.goalBody}>{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <Image
          className={classes.funnel}
          src={`${IMG}/overview-energy-funnel.png`}
          alt="Energy Funnel: our goal is to drive customer engagement and progression across the energy funnel from Awareness (here’s what your energy looks like), to Insights (here’s what to do with this data), to Automation (now trust us to take control of your insights, for example smart comfort, the orchestration of energy)"
          width={1180}
          height={523}
          unoptimized
        />

        <hr className={classes.divider} />

        <Image
          className={classes.spectrum}
          src={`${IMG}/overview-energy-spectrum.png`}
          alt="The Spectrum of the energy experience, with the goal in the middle. Passive use: users only enter the experience to loosely monitor their system, be aware when issues or inefficiencies arise, and take action to fix; basic data, minimal delight, simple and sterile; comparison: a banking app. Obsessive use: users are addicted to checking the app daily and are enticed to stay in the energy experience; intense data, maximum delight, gamification; comparison: Duolingo."
          width={1140}
          height={824}
          unoptimized
        />
      </div>
    </section>
  );
}
