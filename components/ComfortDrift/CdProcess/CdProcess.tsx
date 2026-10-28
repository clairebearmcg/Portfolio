import { Fragment } from 'react';
import Image from 'next/image';
import classes from './CdProcess.module.css';

const IMG = '/case-studies/comfort-drift';

const PHONES = [
  {
    src: `${IMG}/process-phone-anomaly.png`,
    alt: 'Anomaly Detection alert: “Your AC is running 8 hours longer than expected”, with bars comparing 4 hours of normal activity to 12 hours of current activity',
  },
  {
    src: `${IMG}/process-phone-skeleton.png`,
    alt: 'The same screen as a grey wireframe: title, text lines, a bar chart, question chips and two buttons',
  },
  {
    src: `${IMG}/process-phone-comfort-drift.png`,
    alt: 'Comfort Drift alert: “Your AC system failed to cool your home”, with a line chart of your home warming to 74° while the expected temperature drops',
  },
];

interface Visual {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Four columns of two screens each, in Figma's column order. The white filler under the
// last screen of a column lines the column up with the tallest one.
const VISUAL_COLUMNS: Visual[][] = [
  [
    {
      src: `${IMG}/process-visual-01.png`,
      alt: '“Cooling problem” screen with a thermostat reading 72 and a house icon',
      width: 759,
      height: 900,
    },
    {
      src: `${IMG}/process-visual-02.png`,
      alt: '“Cooling problem” screen with a shaded line chart and a “3° up” badge',
      width: 688,
      height: 900,
    },
  ],
  [
    {
      src: `${IMG}/process-visual-03.png`,
      alt: '“Cooling problem” screen with a “3° than expected” badge and a chart of your home against a typical home',
      width: 713,
      height: 900,
    },
    {
      src: `${IMG}/process-visual-04.png`,
      alt: '“Room temp dropped 3°F while trying to heat” screen with a red line chart',
      width: 622,
      height: 900,
    },
  ],
  [
    {
      src: `${IMG}/process-visual-05.png`,
      alt: '“Room temp rose 3°F while trying to cool” screen with a blue line chart',
      width: 622,
      height: 900,
    },
    {
      src: `${IMG}/process-visual-06.png`,
      alt: '“Heating problem” screen with a glowing thermostat reading 72 and a house icon',
      width: 759,
      height: 900,
    },
  ],
  [
    {
      src: `${IMG}/process-visual-07.png`,
      alt: '“Heating problem” screen with a chart marking the starting temperature, the target and your home at 69°',
      width: 737,
      height: 900,
    },
    {
      src: `${IMG}/process-visual-08.png`,
      alt: '“Cooling problem” screen with a chart labelling your home at 74° and typical at 68°',
      width: 704,
      height: 900,
    },
  ],
];

const BOARDS = [
  {
    src: `${IMG}/process-board-01.jpg`,
    alt: 'Design review board with heating and cooling screen flows and sticky-note comments',
    width: 1200,
    height: 992,
  },
  {
    src: `${IMG}/process-board-02.jpg`,
    alt: 'Design review board with chart screens surrounded by sticky-note feedback',
    width: 1460,
    height: 1131,
  },
  {
    src: `${IMG}/process-board-03.jpg`,
    alt: 'Design review board of visual style explorations with sticky-note comments',
    width: 1460,
    height: 829,
  },
];

const CHARTS = [
  {
    src: `${IMG}/process-chart-heating.png`,
    alt: 'Line chart: your home drops from 71° to below 68° while the expected temperature rises toward 74°',
    width: 439,
    height: 193,
    caption: 'Heating failure',
  },
  {
    src: `${IMG}/process-chart-cooling.png`,
    alt: 'Line chart: your home rises from 71° to above 74° while the expected temperature drops toward 68°',
    width: 438,
    height: 196,
    caption: 'Cooling failure',
  },
];

export function CdProcess() {
  return (
    <div className={classes.process}>
      <div className={classes.container}>
        {/* Framework */}
        <section aria-labelledby="cd-framework">
          <div className={classes.header}>
            <div className={classes.titleCard}>
              <Image
                className={classes.frameworkIcon}
                src={`${IMG}/process-framework-icon.png`}
                alt=""
                width={333}
                height={360}
                unoptimized
              />
              <h2 id="cd-framework" className={classes.title}>
                Framework
              </h2>
            </div>
            <div className={classes.intro}>
              <h3 className={classes.introTitle}>Same layout, different data</h3>
              <p className={classes.body}>
                Used the existing layout and user journey of Anomaly Detection because the
                experiences are trying to solve the same problem.
              </p>
            </div>
          </div>

          {/* Anomaly Detection screen → shared skeleton → Comfort Drift screen */}
          <div className={classes.flow}>
            {PHONES.map((phone, i) => (
              <Fragment key={phone.src}>
                {i > 0 && (
                  <Image
                    className={classes.arrow}
                    src={`${IMG}/process-arrow.svg`}
                    alt=""
                    width={88}
                    height={17}
                    unoptimized
                  />
                )}
                <Image
                  className={classes.phone}
                  src={phone.src}
                  alt={phone.alt}
                  width={811}
                  height={1760}
                  unoptimized
                />
              </Fragment>
            ))}
          </div>
        </section>

        {/* Visuals */}
        <section className={classes.visuals} aria-labelledby="cd-visuals">
          <div className={classes.header}>
            <div className={classes.titleCard}>
              <Image
                className={classes.visualsIcon}
                src={`${IMG}/process-visuals-icon.png`}
                alt=""
                width={450}
                height={450}
                unoptimized
              />
              <h2 id="cd-visuals" className={classes.title}>
                Visuals
              </h2>
            </div>
            <div className={classes.intro}>
              <h3 className={classes.introTitle}>Showing the gap visually</h3>
              <p className={classes.body}>
                Because this experience is temperature based, the data visualization needed to be
                different than the runtime data shown on Anomaly Detection. Finding the balance
                between simple visuals vs intricate graphs took multiple iterations.
              </p>
            </div>
          </div>

          <ul className={classes.explorations} aria-label="Data visualization explorations">
            {VISUAL_COLUMNS.map((column) => (
              <li key={column[0].src} className={classes.column}>
                {column.map((visual) => (
                  <div key={visual.src} className={classes.card}>
                    <Image
                      className={classes.visual}
                      src={visual.src}
                      alt={visual.alt}
                      width={visual.width}
                      height={visual.height}
                      unoptimized
                    />
                  </div>
                ))}
              </li>
            ))}
          </ul>

          <div className={classes.review}>
            <div className={classes.barTitle}>
              <h3 className={classes.label}>Classic design review roast sesh</h3>
              <p className={`${classes.barText} ${classes.oneLine}`}>
                Feedback and comments made by the UX team about the flow and visual style.
              </p>
            </div>
            <div className={classes.boards}>
              {BOARDS.map((board) => (
                <Image
                  key={board.src}
                  className={classes.board}
                  src={board.src}
                  alt={board.alt}
                  width={board.width}
                  height={board.height}
                  unoptimized
                />
              ))}
            </div>
          </div>

          <div className={classes.finals}>
            <div className={classes.barTitle}>
              <h3 className={classes.label}>The finals</h3>
              <p className={`${classes.barText} ${classes.twoLines}`}>
                An incredibly simple design with intentional use of color to show the gap between
                how a home’s temperature was expected to change vs how it actually changed.
              </p>
            </div>
            <div className={classes.charts}>
              {CHARTS.map((chart) => (
                <figure key={chart.src} className={classes.chartFigure}>
                  <div className={classes.chartCard}>
                    <Image
                      className={classes.chart}
                      src={chart.src}
                      alt={chart.alt}
                      width={chart.width}
                      height={chart.height}
                      unoptimized
                    />
                  </div>
                  <figcaption className={classes.chartCaption}>{chart.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
