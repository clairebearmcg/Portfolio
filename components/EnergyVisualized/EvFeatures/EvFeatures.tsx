import type { CSSProperties } from 'react';
import Image from 'next/image';
import classes from './EvFeatures.module.css';

const IMG = '/case-studies/energy-visualized';

// Figma's design canvas for this section is 1180px wide (x130–1310)
const CANVAS_WIDTH = 1180;

interface Shot {
  src: string;
  alt: string;
  // Source pixel size
  width: number;
  height: number;
}

interface PlacedShot extends Shot {
  // Figma position inside the collage (px from x130, y7156) and display size
  x: number;
  y: number;
  w: number;
  h: number;
  // Rounded with a hairline border in Figma
  framed?: boolean;
}

interface PlacedNote {
  text: string;
  y: number;
  w: number;
}

// Space between a note and the screen before it, as on the tomorrow cards
const NOTE_GAP = 30;

// Each group stacks together on small screens (screens, then their note)
const COLLAGE: { shots: PlacedShot[]; note?: PlacedNote }[] = [
  {
    shots: [
      {
        src: `${IMG}/feat-victorian.png`,
        alt: '“This month, you lived in the Victorian Era” screen with a candle illustration, a table of utility uses and monthly cost cards',
        width: 786,
        height: 1704,
        x: 0,
        y: 3,
        w: 200,
        h: 434,
        framed: true,
      },
      {
        src: `${IMG}/feat-future.png`,
        alt: '“This month, you lived in the 3000s” screen with a winged sneaker illustration, a table of utility uses and a Tips to save more card',
        width: 786,
        height: 1704,
        x: 230,
        y: 106,
        w: 200,
        h: 434,
        framed: true,
      },
    ],
  },
  {
    shots: [
      {
        src: `${IMG}/feat-ask.png`,
        alt: '“Ask anything about your energy” input next to a sparkle assistant button',
        width: 1044,
        height: 196,
        x: 255,
        y: 3,
        w: 266,
        h: 50,
      },
    ],
    note: { text: 'Personalized energy assistant and energy saving coach', y: 0, w: 235 },
  },
  {
    shots: [
      {
        src: `${IMG}/feat-sources.png`,
        alt: 'Energy source card: 56% solar, 38% grid, 6% battery, with a split progress bar',
        width: 354,
        height: 324,
        x: 507,
        y: 119,
        w: 141,
        h: 130,
      },
    ],
    note: {
      text: 'Increasing transparency about where user’s energy is actually coming from',
      y: 119,
      w: 205,
    },
  },
  {
    shots: [
      {
        src: `${IMG}/feat-coaster.png`,
        alt: '“+20 points, 5 coaster rides powered” card with a roller coaster illustration: you saved enough energy to power 5 Space Mountain rides',
        width: 740,
        height: 884,
        x: 955,
        y: 7,
        w: 221,
        h: 264,
      },
    ],
  },
  {
    shots: [
      {
        src: `${IMG}/feat-tomorrow-usage.png`,
        alt: '“Usage tomorrow, $30 est.” card with a 75° forecast and 3h 40m of runtime at 72°',
        width: 406,
        height: 346,
        x: 487,
        y: 367,
        w: 203,
        h: 173,
      },
      {
        src: `${IMG}/feat-tomorrow-runtime.png`,
        alt: '“Tomorrow, 3h est.” runtime card with a bar and weather icon for each part of the day',
        width: 354,
        height: 422,
        x: 707,
        y: 367,
        w: 145,
        h: 173,
      },
    ],
    note: {
      text: 'Estimated runtime/cost based on weather patterns and your average system use',
      y: 367,
      w: 217,
    },
  },
];

// Collage coordinates become CSS custom properties: x as a share of the canvas width, the rest in px
function placement(item: { x: number; y: number; w: number; h?: number }): CSSProperties {
  return {
    '--x': `${(item.x / CANVAS_WIDTH) * 100}%`,
    '--y': item.y,
    '--w': item.w,
    ...(item.h !== undefined && { '--h': item.h }),
  } as CSSProperties;
}

// A note starts NOTE_GAP after the right edge of the screen before it
function notePlacement(note: PlacedNote, shot: PlacedShot): CSSProperties {
  return {
    ...placement({ x: shot.x, y: note.y, w: note.w }),
    '--after': shot.w + NOTE_GAP,
  } as CSSProperties;
}

interface MediumStep extends Shot {
  captions: string[];
  // Figma display size
  w: number;
  h: number;
}

const MEDIUMS: MediumStep[] = [
  {
    src: `${IMG}/feat-music-chart.png`,
    alt: 'Heating and AC runtime screen: 18h 42m for the week, shown as an orange bar chart',
    width: 786,
    height: 1326,
    w: 220,
    h: 371,
    captions: ['Your runtime data/energy data laid out in a bar chart'],
  },
  {
    src: `${IMG}/feat-music-notes.png`,
    alt: 'The same bar chart with each bar topped by a musical note from A to G',
    width: 786,
    height: 632,
    w: 257,
    h: 207,
    captions: [
      'The bar chart is converted into musical notes on a scale.',
      'The height of the bar determines the note.',
    ],
  },
  {
    src: `${IMG}/feat-music-riff.png`,
    alt: 'The notes written out on a treble clef staff',
    width: 786,
    height: 632,
    w: 250,
    h: 201,
    captions: ['A little musical riff of what your energy “sounds like” is created.'],
  },
  {
    src: `${IMG}/feat-music-doorbell.png`,
    alt: 'Line drawing of a front door with a doorbell camera playing music notes',
    width: 786,
    height: 632,
    w: 250,
    h: 201,
    captions: ['Users have the option to make this their doorbell chime.'],
  },
];

interface Activity {
  src: string;
  alt: string;
  // Rounded with a hairline border in Figma (175 × 81 instead of 170 × 79)
  framed?: boolean;
}

const activity = (name: string, alt: string, framed?: boolean): Activity => ({
  src: `${IMG}/feat-la-${name}.png`,
  alt: `Live activity: ${alt}`,
  framed,
});

// Rows of live activity widgets, centred as in Figma, with their gaps
const ACTIVITY_ROWS: { gap: number; items: Activity[] }[] = [
  {
    gap: 64,
    items: [
      activity('1-1', 'sharing home access with Ellie, temporary passcode shared, 8m left', true),
      activity('1-2', 'preparing for sleep in 12m: set to 68°, arm stay, deter on'),
      activity('1-3', 'car charging at 32%, 120 miles, 42m left'),
      activity('1-4', 'energy saving event, thermostat temporarily adjusted to 76°, 8m left'),
    ],
  },
  {
    gap: 73,
    items: [
      activity(
        '2-1',
        'preparing home for sleep in 8m, cooling to 68°, with Edit schedule and Postpone buttons',
        true
      ),
      activity(
        '2-2',
        'home to sleep at 9pm: home will be at 68°, arm stay will be active, deter will turn on'
      ),
      activity('2-3', 'arming soon, home to sleep in 26m, 72°'),
      activity('2-4', '75°, estimated to be 72° on arrival, 12m to home'),
      activity('2-5', 'event active, thermostat temporarily adjusted to 76°, 54m left', true),
    ],
  },
  {
    gap: 64,
    items: [
      activity('3-1', 'car at 80% on a green road, 42m and 120 miles'),
      activity(
        '3-2',
        'heading home? Welcome back from your trip, with No thanks and Adjust temp buttons'
      ),
      activity('3-3', 'sleep in 8m: arming soon, deter soon, 72° to 68°'),
      activity('3-4', 'Tesla Model Y at 80%, 120 miles'),
    ],
  },
];

const SLEEP_SWITCH = activity('4-1', 'sleep, switching home soon in 26m: 72°, armed, locked, on');

// Countdown sequence joined by arrows in Figma
const SLEEP_COUNTDOWN = [
  activity('4-2', 'preparing home for sleep in 8m, cooling to 68°'),
  activity('4-3', 'preparing home for sleep in 6m, cooling to 68°'),
  activity('4-4', 'preparing home for sleep in 1m, cooling to 68°'),
];

function ActivityImage({ item, className }: { item: Activity; className?: string }) {
  return (
    <Image
      className={[classes.activity, item.framed && classes.activityFramed, className]
        .filter(Boolean)
        .join(' ')}
      src={item.src}
      alt={item.alt}
      width={748}
      height={348}
      unoptimized
    />
  );
}

const EV_REIMAGINED = [
  {
    src: `${IMG}/feat-ev-charging-8.png`,
    alt: 'Reimagined EV screen: charging at 8%, 10 miles, 4h 35m to full, ready at 7am, with a Charge now button',
  },
  {
    src: `${IMG}/feat-ev-charging-80.png`,
    alt: 'Reimagined EV screen: charging at 80%, 120 miles, the green ring around the car mostly filled',
  },
  {
    src: `${IMG}/feat-ev-ready.png`,
    alt: 'Reimagined EV screen: ready at 100%, fully charged, the ring around the car complete',
  },
];

function SectionLabel({ id, children }: { id: string; children: string }) {
  return (
    <div className={classes.labelRow}>
      <h2 id={id} className={classes.label}>
        {children}
      </h2>
      <span className={classes.dots} aria-hidden="true" />
    </div>
  );
}

export function EvFeatures() {
  return (
    <div className={classes.features}>
      <div className={classes.container}>
        {/* Translating energy into understandable concepts */}
        <section aria-labelledby="ev-features-concepts">
          <SectionLabel id="ev-features-concepts">
            Translating energy into understandable concepts
          </SectionLabel>

          <div className={classes.collage}>
            {COLLAGE.map((group) => (
              <div key={group.shots[0].src} className={classes.collageGroup}>
                <div className={classes.collageShots}>
                  {group.shots.map((shot) => (
                    <Image
                      key={shot.src}
                      className={
                        shot.framed
                          ? `${classes.collageShot} ${classes.framed}`
                          : classes.collageShot
                      }
                      style={placement(shot)}
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      unoptimized
                    />
                  ))}
                </div>
                {group.note && (
                  <p
                    className={classes.collageNote}
                    style={notePlacement(group.note, group.shots[group.shots.length - 1])}
                  >
                    {group.note.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Exploring data translating between mediums */}
          <div className={classes.mediums}>
            <h3 className={classes.mediumsTitle}>Exploring data translating between mediums...</h3>
            <ol className={classes.mediumSteps}>
              {MEDIUMS.map((step) => (
                <li key={step.src} className={classes.mediumStep}>
                  <figure className={classes.mediumFigure}>
                    {/* Every image sits on the same baseline, so the captions all start level */}
                    <div className={classes.mediumFrame}>
                      <Image
                        className={classes.mediumImage}
                        style={{ '--w': step.w, '--h': step.h } as CSSProperties}
                        src={step.src}
                        alt={step.alt}
                        width={step.width}
                        height={step.height}
                        unoptimized
                      />
                    </div>
                    <figcaption className={classes.mediumCaption}>
                      {step.captions.map((caption) => (
                        <p key={caption}>{caption}</p>
                      ))}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Energy savings in live activities */}
        <section className={classes.liveSection} aria-labelledby="ev-features-live">
          <SectionLabel id="ev-features-live">Energy savings in live activities</SectionLabel>

          <div className={classes.activityRows}>
            {ACTIVITY_ROWS.map((row) => (
              <ul
                key={row.items[0].src}
                className={classes.activityRow}
                style={{ '--gap': row.gap } as CSSProperties}
              >
                {row.items.map((item) => (
                  <li key={item.src}>
                    <ActivityImage item={item} />
                  </li>
                ))}
              </ul>
            ))}

            <ul
              className={`${classes.activityRow} ${classes.activityRowLast}`}
              style={{ '--gap': 64 } as CSSProperties}
            >
              <li>
                <ActivityImage item={SLEEP_SWITCH} className={classes.activitySwitch} />
              </li>
              <li className={classes.countdown}>
                <ol className={classes.countdownList} aria-label="Sleep countdown">
                  {SLEEP_COUNTDOWN.map((item) => (
                    <li key={item.src}>
                      <ActivityImage item={item} />
                    </li>
                  ))}
                </ol>
                <Image
                  className={`${classes.arrow} ${classes.arrowBottom}`}
                  src={`${IMG}/feat-la-arrow.svg`}
                  alt=""
                  width={88}
                  height={17}
                  unoptimized
                />
                <Image
                  className={`${classes.arrow} ${classes.arrowTop}`}
                  src={`${IMG}/feat-la-arrow.svg`}
                  alt=""
                  width={88}
                  height={17}
                  unoptimized
                />
              </li>
            </ul>
          </div>
        </section>

        {/* EV reimagined */}
        <section className={classes.evSection} aria-labelledby="ev-features-ev">
          <SectionLabel id="ev-features-ev">EV reimagined</SectionLabel>

          <div className={classes.ev}>
            <figure className={classes.evGroup}>
              <Image
                className={classes.evPhone}
                src={`${IMG}/feat-ev-before.png`}
                alt="Before: Tesla Model Y charging screen at 90% charged with a car photo, ready weekdays by 7am and a Charge now button"
                width={786}
                height={1704}
                unoptimized
              />
              <figcaption className={classes.evCaption}>
                <strong>Before</strong>
                <em>A teammates design</em>
              </figcaption>
            </figure>

            <figure className={`${classes.evGroup} ${classes.evGroupWide}`}>
              <ul className={classes.evPhones}>
                {EV_REIMAGINED.map((phone) => (
                  <li key={phone.src}>
                    <Image
                      className={`${classes.evPhone} ${classes.evPhoneRounded}`}
                      src={phone.src}
                      alt={phone.alt}
                      width={786}
                      height={1704}
                      unoptimized
                    />
                  </li>
                ))}
              </ul>
              <figcaption className={classes.evCaption}>
                <strong>Reimagined</strong>
                <em>My take on EV</em>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Closing statement */}
        <div className={classes.closing}>
          <p className={classes.closingLead}>
            This project got deprioritized after a couple weeks #RIPenergy
          </p>
          <p className={classes.closingBody}>
            Though my work remained conceptual and never got to see the eyes of users, this project
            converted me personally to believe in the importance and impact that energy has on our
            world and our lifestyles. It’s important to be informed and educated about how your
            energy use makes a difference, both to the grid and to your wallet. Additionally, I felt
            that this project really pushed me as a designer to help solve a complex and interesting
            problem. I hope one day it gets reprioritized.
          </p>
        </div>
      </div>
    </div>
  );
}
