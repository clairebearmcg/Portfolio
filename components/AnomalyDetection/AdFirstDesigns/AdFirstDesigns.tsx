import type { ReactNode } from 'react';
import Image from 'next/image';
import classes from './AdFirstDesigns.module.css';

const IMG = '/case-studies/anomaly-detection';

// The 20 early iterations in Figma's row order (5 per row): alt, pixel width, pixel height,
// and whether Figma crops it to its box instead of showing the whole image
const SCREEN_DATA: [alt: string, width: number, height: number, cropped?: boolean][] = [
  ['Heating and AC runtime screen with a monthly bar chart', 975, 2114],
  ['“Handle your HVAC issue” alert with a glowing broken unit illustration', 786, 1704],
  ['“Issue detected” screen with a temperature curve chart', 786, 1654],
  ['“HVAC issue” screen with a house illustration', 786, 1704],
  ['“Your AC ran 47% longer than expected” screen with a runtime comparison bar', 393, 827],
  ['“Issue detected” screen with an efficiency bar chart', 786, 1654],
  ['“Home failed to cool down in the expected period of time” screen', 786, 1704],
  ['“Unusual drop in heating & cooling system performance” efficiency line chart', 786, 1792, true],
  ['“Your HVAC needs help!” screen with an HVAC unit illustration', 786, 1704],
  ['“Your HVAC performance” calendar of daily emoji ratings', 786, 1704],
  ['Performance drop screen with a yellow line chart and emoji scale', 786, 1704],
  ['“Your HVAC needs help!” screen with a gauge reading Poor', 786, 1704],
  ['“Heating & cooling system issue” screen with efficiency stats', 786, 1704],
  ['HVAC Health dashboard over a house photo', 786, 1654],
  ['“Your heating & cooling system has a problem” screen with a runtime timeline', 786, 1704],
  ['Diagnostics screen with a daily runtime bar chart', 786, 1704],
  [
    '“Your heating & cooling system has a problem” screen with efficiency and runtime stats',
    786,
    1704,
  ],
  ['“Your system ran 47% longer than expected” screen with a runtime curve', 786, 1704],
  ['“We detected an issue” screen with a temperature chart', 786, 1704],
  ['Activity feed with a potential heating and cooling problem sheet', 786, 1664],
];

const SCREENS = SCREEN_DATA.map(([alt, width, height, cropped], i) => ({
  src: `${IMG}/designs-screen-${String(i + 1).padStart(2, '0')}.png`,
  alt: `Early iteration: ${alt}`,
  width,
  height,
  cropped,
}));

interface CellImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Display width in the Figma cell, in px
  displayWidth: number;
  // Sits on a white rounded card
  card?: boolean;
  className?: string;
}

interface Row {
  constraint: string;
  solution: ReactNode;
  before: string | CellImage;
  after: string | CellImage;
}

const ROWS: Row[] = [
  {
    constraint:
      'Runtime as a vague data point was not translating well. “Longer than expected” doesn’t mean much to the average homeowner nor does it provide any action.',
    solution: (
      <>
        <p>Instead of runtime, experiment with other types of data to show and ways to show it:</p>
        <ul>
          <li>system showing a decrease in efficiency</li>
          <li>System slower at reaching temp</li>
          <li>Emojis, color, line vs bar, etc.</li>
        </ul>
      </>
    ),
    before: {
      src: `${IMG}/designs-table-runtime-before.png`,
      alt: 'Weekly heating and AC runtime bar chart comparing a healthy HVAC to yours',
      width: 738,
      height: 536,
      displayWidth: 236,
      card: true,
    },
    after: {
      src: `${IMG}/designs-table-efficiency-after.png`,
      alt: 'Efficiency line chart dropping 70% over the last 7 days, with emoji faces on the scale',
      width: 721,
      height: 462,
      displayWidth: 233,
      card: true,
    },
  },
  {
    constraint:
      'People don’t know what an HVAC even IS let alone how it works. “Issue” is an unhelpful umbrella term, specify which system has an issue.',
    solution:
      'Explain it in a concise way or refer to “HVAC” as “heating & cooling system”, “AC”, “Heat”, etc.',
    before: '“HVAC issue”',
    after:
      '“Your heating & cooling system has worked harder than usual to reach your set temperature.”',
  },
  {
    constraint:
      'Visuals are good but only if they’re SIMPLE. Creating a graph that makes you work to understand it is not an effective visual aid.',
    solution: 'Pivot and go strictly visual. Tell the story just through description.',
    before: {
      src: `${IMG}/designs-table-visual-before.png`,
      alt: 'Runtime curve chart from 12pm to 4pm with a 68°F cooling marker',
      width: 722,
      height: 382,
      displayWidth: 266,
    },
    after: {
      src: `${IMG}/designs-table-visual-after.png`,
      alt: 'Illustration of an outdoor AC unit on a warm yellow background',
      width: 393,
      height: 852,
      displayWidth: 258,
      className: classes.acCrop,
    },
  },
  {
    constraint:
      'My PM says gradual detection is not in scope anymore, focus strictly on spike detection only.',
    solution:
      'Focus on spike detection, but create a flexible design that can easily fit both spike and gradual (when the timing is right).',
    before: {
      src: `${IMG}/designs-table-spike-before.png`,
      alt: 'Runtime card with a 154h 38m monthly chart behind an 18h 42m daily chart',
      width: 1142,
      height: 1036,
      displayWidth: 213,
    },
    after: {
      src: `${IMG}/designs-table-spike-after.png`,
      alt: 'The same runtime cards with the monthly gradual chart greyed out behind the daily spike chart',
      width: 1142,
      height: 1036,
      displayWidth: 213,
    },
  },
  {
    constraint:
      'My PM says we don’t have the capabilities to book in-app, estimate repair time and price, or even determine what part of the system is effected quite yet.',
    solution: 'Cut down on the vision while still making this alert as helpful as you can.',
    before: 'Estimated price = $187\nEstimated time = 3hrs',
    after:
      'What to do = we recommend booking with a local technician. This is unusual and indicates something may be wrong with your system.',
  },
  {
    constraint: 'For legal reasons, we cannot specify that what we detected is even an issue.',
    solution:
      'Since that’s unhelpful to the user, we will provide lots of information without directly stating the issue.',
    before: '“Refrigerant is running low”.',
    after:
      '“Your system ran 16 hours longer than expected. This could mean there’s a problem with your HVAC system”.',
  },
];

function CellContent({ value }: { value: string | CellImage }) {
  if (typeof value === 'string') {
    return <p className={classes.preLine}>{value}</p>;
  }

  const image = (
    <Image
      className={[classes.cellImage, value.className].filter(Boolean).join(' ')}
      src={value.src}
      alt={value.alt}
      width={value.width}
      height={value.height}
      // Figma box width, scaled like rem() in the CSS modules
      style={{ maxWidth: `calc(${value.displayWidth / 16}rem * var(--mantine-scale))` }}
      unoptimized
    />
  );

  return value.card ? <div className={classes.imageCard}>{image}</div> : image;
}

export function AdFirstDesigns() {
  return (
    <section className={classes.band} aria-labelledby="ad-first-designs-title">
      <div className={classes.container}>
        {/* Section header */}
        <div className={classes.header}>
          <div className={classes.titleCard}>
            <Image
              className={classes.titleIcon}
              src={`${IMG}/designs-phone-alert-icon.png`}
              alt=""
              width={1536}
              height={1024}
              unoptimized
            />
            <h2 id="ad-first-designs-title" className={classes.title}>
              1st Designs
            </h2>
            <p className={classes.titleSubtitle}>The evolution of my iterations.</p>
          </div>

          <div className={classes.issues}>
            <div className={classes.issuesHeading}>
              <span className={classes.issueBadge}>
                <Image
                  src={`${IMG}/designs-issue-x.svg`}
                  alt=""
                  width={13}
                  height={12}
                  unoptimized
                />
              </span>
              <h3 className={classes.issuesTitle}>Issues</h3>
            </div>
            <div className={classes.issueList}>
              <div className={classes.issue}>
                <h4 className={classes.label}>Information overload</h4>
                <p className={classes.body}>
                  My first iterations were showing too much extra information and not communicating
                  enough vital details to help the user.
                </p>
              </div>
              <div className={classes.issue}>
                <h4 className={classes.label}>Not consistent</h4>
                <p className={classes.body}>
                  My designs were not flexible to work with other issue detection notification
                  designs that needed to follow the same framework.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of early iterations */}
        <ul className={classes.screens} aria-label="Early design iterations">
          {SCREENS.map((screen) => (
            <li key={screen.src}>
              <Image
                className={
                  screen.cropped ? `${classes.screen} ${classes.screenCropped}` : classes.screen
                }
                src={screen.src}
                alt={screen.alt}
                width={screen.width}
                height={screen.height}
                unoptimized
              />
            </li>
          ))}
        </ul>

        {/* Claire vs constraints */}
        <div className={classes.constraintsTitle}>
          <h3 className={classes.label}>Claire vs constraints</h3>
          <p className={classes.constraintsSubtitle}>
            While trying to narrow down the right direction to take this diagnosis page, additional
            project constraints began to emerge.
          </p>
        </div>

        <div className={classes.tableScroll}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th scope="col">Constraint</th>
                <th scope="col">Solution</th>
                <th scope="col" className={classes.before}>
                  Before
                </th>
                <th scope="col" className={classes.after}>
                  After
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.constraint}>
                  <th scope="row">
                    <p>{row.constraint}</p>
                  </th>
                  <td>{typeof row.solution === 'string' ? <p>{row.solution}</p> : row.solution}</td>
                  <td
                    className={[classes.before, typeof row.before !== 'string' && classes.media]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <CellContent value={row.before} />
                  </td>
                  <td
                    className={[classes.after, typeof row.after !== 'string' && classes.media]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <CellContent value={row.after} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Final before/after */}
        <div className={classes.final}>
          <div className={classes.mockups}>
            <figure className={classes.mockup}>
              <Image
                className={classes.phone}
                src={`${IMG}/designs-final-before.png`}
                alt="Before: “Handle your HVAC issue to avoid further costs and damage” alert with a red warning illustration and a Book a technician button"
                width={900}
                height={1840}
                unoptimized
              />
              <figcaption className={`${classes.pill} ${classes.pillBefore}`}>Before</figcaption>
            </figure>
            <figure className={classes.mockup}>
              <Image
                className={classes.phone}
                src={`${IMG}/designs-final-after.png`}
                alt="After: “Possible cooling issue detected” screen with an AC unit illustration, a What to do card and a Connect with a trusted HVAC pro button"
                width={900}
                height={1840}
                unoptimized
              />
              <figcaption className={`${classes.pill} ${classes.pillAfter}`}>After</figcaption>
            </figure>
          </div>

          <div className={classes.calm}>
            <span className={classes.calmBadge}>
              <Image
                className={classes.calmIcon}
                src={`${IMG}/designs-calm-icon.svg`}
                alt=""
                width={12}
                height={13}
                unoptimized
              />
            </span>
            <div className={classes.calmText}>
              <h3 className={classes.label}>Calm &amp; guiding UX</h3>
              <p className={classes.body}>
                After multiple rounds of iteration and refinement, I landed on a diagnosis page that
                clearly communicates what happened to a user’s system and the steps they can take to
                address it. My focus was on making the information actionable and easy to understand
                without overwhelming the user (clean visuals, simple language).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
