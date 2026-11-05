import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import classes from './EvscCompare.module.css';

const IMG = '/case-studies/ev-smart-charging';

interface Shot {
  src: string;
  alt: string;
  // Source pixel size
  width: number;
  height: number;
  // Figma display width
  w: number;
  // Green arrow pointing back at the card's "5m ago" line
  arrow?: boolean;
}

interface Side {
  shot: Shot;
  notes: string[];
}

interface Row {
  id: string;
  before: Side & { heatmap?: boolean };
  after: Side;
}

const phone = (name: string, alt: string, height = 1704, width = 786): Shot => ({
  src: `${IMG}/${name}.png`,
  alt,
  width,
  height,
  w: 200,
});

const card = (name: string, alt: string, height = 427, arrow = false): Shot => ({
  src: `${IMG}/${name}.png`,
  alt,
  width: 726,
  height,
  w: 284,
  arrow,
});

// Rows top to bottom as in Figma (24551:268, y1862–4321)
const ROWS: Row[] = [
  {
    id: 'schedule',
    before: {
      shot: phone(
        'before-schedule',
        'Scheduled charging screen with four boxed sections: 1AM to 1PM, You’re in control, Location based and Ensure optimal performance',
        1420,
        834
      ),
      notes: ['Users thought the sections were tappable.'],
      heatmap: true,
    },
    after: {
      shot: phone(
        'after-schedule',
        'Schedule & Save screen listing a fixed 1AM–1PM discount window, one tap override, no public chargers and other apps block charging as plain rows',
        1352,
        834
      ),
      notes: [
        'Eliminated visuals cues of tappability, or choice.',
        'Specified the hours discounted charing occurs.',
      ],
    },
  },
  {
    id: 'promo',
    before: {
      shot: phone(
        'before-promo',
        'Promo screen with a dark photo of a garage at night: “Get a full charge for less”, with Get started and How it works'
      ),
      notes: [
        'Users were getting confused because of “setting up” copy.',
        'Picture doesn’t even represent an EV car',
        'Looks like an ad',
      ],
    },
    after: {
      shot: phone(
        'after-promo',
        'Sheet over the home screen with an electric car on a forest road: “Charge cheaper”, save up to $240 a year, with Get started and How it works'
      ),
      notes: [
        'Changed confusing language like “setting up a charging schedule” to “opt in”.',
        'Make a promo page that looked more like an invitation state and less like an ad',
      ],
    },
  },
  {
    id: 'zero-state',
    before: {
      shot: phone(
        'before-zero-state',
        'Home screen reading “Welcome home, Ellen” with three cars and “A full charge for less” above a Connect your vehicle button'
      ),
      notes: ['Zero state looks like an ad also', 'Copy is still misleading'],
    },
    after: {
      shot: phone(
        'after-zero-state',
        'Home screen reading “Welcome home Cara” with a white electric car, save $200 a year, a 1AM to 1PM window and a Connect my vehicle button'
      ),
      notes: ['Friendly and inviting zero state with better communication and visual summary.'],
    },
  },
  {
    id: 'status-card',
    before: {
      shot: card(
        'before-card-scheduled',
        'Tesla Model Y card: scheduled, 80%, 120 miles, with “Home” and “5m ago” above a charge bar',
        455,
        true
      ),
      notes: [
        'Users thought 5m meant when the car last arrived, when it was last charged, how long it would take to charge, etc.',
      ],
    },
    after: {
      shot: card(
        'after-card-scheduled',
        'Tesla Model Y card: scheduled, 80%, 120 miles, “Last updated 5m ago”',
        427,
        true
      ),
      notes: ['Adding language to clear up confusion'],
    },
  },
  {
    id: 'opt-in',
    before: {
      shot: phone(
        'before-opt-in',
        '“Save even more money with EV Schedule & Save” sheet with a car plugged into a home charger and Schedule charging and Skip schedule buttons'
      ),
      notes: ['Users thought they were setting up their own custom schedule because of button CTA'],
    },
    after: {
      shot: phone(
        'after-opt-in',
        '“Schedule & Save” sheet with the same photo and Opt into Schedule & Save and Skip buttons'
      ),
      notes: [
        'Altered button CTA to clarify that this is a schedule being opted into, not personally set.',
      ],
    },
  },
  {
    id: 'charging-card',
    before: {
      shot: card(
        'before-card-charging',
        'Tesla Model Y card: charging, 80%, 120 miles, 4h 35m to charge'
      ),
      notes: ['No transparency about when charging was on-peak vs off peak'],
    },
    after: {
      shot: card(
        'after-card-charging',
        'Dark Land Rover card: discounted charging, 80%, 120 miles, 4h 35m to charge'
      ),
      notes: ['Specifying the charging type'],
    },
  },
];

function ShotImage({ shot }: { shot: Shot }) {
  return (
    <figure className={classes.shot} style={{ '--w': shot.w } as CSSProperties}>
      <Image
        className={classes.shotImage}
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        unoptimized
      />
      {shot.arrow && (
        <Image
          className={classes.arrow}
          src={`${IMG}/arrow.svg`}
          alt=""
          width={22}
          height={11}
          unoptimized
        />
      )}
    </figure>
  );
}

function Notes({ notes, children }: { notes: string[]; children?: ReactNode }) {
  return (
    <div className={classes.notes}>
      {notes.map((note) => (
        <p key={note} className={classes.note}>
          {note}
        </p>
      ))}
      {children}
    </div>
  );
}

export function EvscCompare() {
  return (
    <section className={classes.root} aria-label="Before and after user testing">
      <div className={classes.container}>
        <div className={classes.headerRow} aria-hidden="true">
          <p className={`${classes.columnLabel} ${classes.before}`}>Before</p>
          <p className={`${classes.columnLabel} ${classes.after}`}>After</p>
        </div>
        <ol className={classes.rows}>
          {ROWS.map(({ id, before, after }) => (
            <li key={id} className={classes.row}>
              <div className={`${classes.cell} ${classes.before}`}>
                <p className={classes.mobileLabel}>Before</p>
                <Notes notes={before.notes}>
                  {before.heatmap && (
                    <Image
                      className={classes.heatmap}
                      src={`${IMG}/before-heatmap.png`}
                      alt="Heatmap of taps on the scheduled charging screen, clustered on the first section"
                      width={478}
                      height={834}
                      unoptimized
                    />
                  )}
                </Notes>
                <ShotImage shot={before.shot} />
              </div>
              <div className={`${classes.cell} ${classes.after}`}>
                <p className={classes.mobileLabel}>After</p>
                <ShotImage shot={after.shot} />
                <Notes notes={after.notes} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
