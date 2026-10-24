import type { ReactNode } from 'react';
import Image from 'next/image';
import classes from './FsaDesigns.module.css';

const IMG = '/case-studies/filter-smart-alerts';

interface Screen {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Every app screen is a 786 × 1704 export shown at 200 × 434 unless noted
function screen(name: string, alt: string, width = 786, height = 1704): Screen {
  return { src: `${IMG}/designs-${name}.png`, alt, width, height };
}

const SETTINGS_LOG = screen(
  'settings-log',
  'Air filter smart alerts settings screen with a Log a filter change button'
);
const LOG_CALENDAR = screen(
  'log-calendar',
  '“When did you change your filter?” calendar sheet with August 27 selected and a Save button'
);
const LOG_CALENDAR_ERROR = screen(
  'log-calendar-error',
  'The same calendar sheet in July with an error: choose a date later than the last filter replacement'
);
const SETTINGS_SAVINGS = screen(
  'settings-savings',
  'Air filter smart alerts settings with a “$125 saved from filter changes” banner'
);
const FILTER_HISTORY = screen(
  'filter-history',
  'Past filter changes screen with the next estimated change and change dates grouped by year with the amount saved'
);
const REPLACE_ORDER = screen(
  'replace-order',
  '“Replace your air filter” reminder with an Order button next to My filter'
);
const MY_FILTER = screen(
  'my-filter',
  'My filter screen with fields for filter type, MERV rating, filter size and an optional link'
);
const REPLACE_REMINDER = screen(
  'replace-reminder',
  '“Replace your air filter” reminder with My filter and its Order button, plus I’ve replaced my filter and Set up a reminder buttons'
);
const SAVINGS_YEAR = screen(
  'savings-year',
  '“$36 saved this year” celebration sheet over the home screen',
  804,
  1744
);

const GUIDE: Screen[] = [
  'Filter replacement guide intro: how long it takes and what you will need',
  'Guide step 1: turn off the system at the circuit breaker',
  'Guide step 2: locate your air filter panel, open it and remove the old filter',
  'Guide step 3: check the filter sizes match, check airflow direction and insert the new filter',
  'Guide step 4: restore power and check it’s running',
].map((alt, i) => screen(`guide-${i + 1}`, alt, 524, 1137));

// Arrow pointing at a new feature: `y` is its height on the 434px-tall screen, `side` which edge it sits on
interface Arrow {
  y: number;
  side: 'left' | 'right';
}

function Shot({ image, arrow, className }: { image: Screen; arrow?: Arrow; className?: string }) {
  return (
    <div className={[classes.shot, className].filter(Boolean).join(' ')}>
      <Image
        className={classes.shotImage}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        unoptimized
      />
      {arrow && (
        <Image
          className={arrow.side === 'right' ? classes.arrowRight : classes.arrowLeft}
          style={{ top: `${(arrow.y / 434) * 100}%` }}
          src={`${IMG}/designs-arrow.svg`}
          alt=""
          width={22}
          height={11}
          unoptimized
        />
      )}
    </div>
  );
}

function Block({ id, question, children }: { id: string; question: string; children: ReactNode }) {
  return (
    <article className={classes.block} aria-labelledby={id}>
      <h3 id={id} className={classes.question}>
        {question}
      </h3>
      <div className={classes.panel}>
        <div className={classes.panelContent}>{children}</div>
        <p className={classes.afterLabel}>After</p>
      </div>
    </article>
  );
}

// One screen, then a pair of screens; captions sit under the first screen and the right half
function FilterDetailsFlow() {
  return (
    <div className={classes.flow}>
      <div className={classes.row}>
        <Shot image={SETTINGS_LOG} arrow={{ y: 274, side: 'right' }} />
        <div className={classes.pair}>
          <Shot image={MY_FILTER} />
          <Shot image={REPLACE_REMINDER} arrow={{ y: 277, side: 'right' }} />
        </div>
      </div>
      <div className={classes.captions}>
        <p className={classes.caption}>
          Add a way to log your filter details, including a space to paste a link to your preferred
          type.
        </p>
        <p className={`${classes.caption} ${classes.captionNarrow}`}>
          Eliminate the need for a user to know their filter- include a space for them to paste a
          link to their preferred type and order straight from the app.
        </p>
      </div>
    </div>
  );
}

export function FsaDesigns() {
  return (
    <section className={classes.section} aria-labelledby="fsa-designs-title">
      <div className={classes.container}>
        {/* Section header */}
        <div className={classes.header}>
          <div className={classes.titleCard}>
            <div className={classes.titleRow}>
              <Image
                className={classes.titleIcon}
                src={`${IMG}/designs-brush.png`}
                alt=""
                width={270}
                height={564}
                unoptimized
              />
              <div className={classes.titleText}>
                <h2 id="fsa-designs-title" className={classes.title}>
                  Designs
                </h2>
                <p className={classes.body}>The evolution of my iterations.</p>
              </div>
            </div>

            <div className={classes.mvp}>
              <h3 className={classes.label}>MVP</h3>
              <ul className={classes.mvpList}>
                <li>Feature education and basic set up</li>
                <li>Reminder preference selection</li>
                <li>Filter replacement reminder prompt</li>
              </ul>
            </div>
          </div>

          <figure className={classes.headerPhone}>
            <Image
              className={classes.headerPhoneImage}
              src={`${IMG}/designs-header-phone.png`}
              alt="Phone showing an alert screen: “Handle your HVAC issue to avoid further costs and damage”"
              width={900}
              height={1840}
              unoptimized
            />
            {/* Placeholder from the Figma file, waiting on the prototype */}
            <div className={classes.prototypePlaceholder}>
              <span>ADD PROTOTYPE</span>
            </div>
          </figure>
        </div>

        {/* But it could be better */}
        <div className={classes.betterTitle}>
          <h3 className={classes.label}>But it could be better</h3>
          <p className={classes.betterSubtitle}>
            The MVP was great at tackling some of the basic needs of users, but it lacked solutions
            to existing problems and an innovative touch to evoke satisfaction and ease. Some common
            questions that came up while designing for 1.0:
          </p>
        </div>

        <div className={classes.blocks}>
          {/* Before / after copy comparison */}
          <article className={classes.block} aria-labelledby="fsa-designs-q1">
            <h3 id="fsa-designs-q1" className={classes.question}>
              What if a user has more than one HVAC?
            </h3>
            <div className={classes.compare}>
              <div className={`${classes.compareCell} ${classes.compareBefore}`}>
                <p className={classes.body}>
                  “It’s time to replace your HVAC system’s air filter”.
                </p>
                <p className={`${classes.compareLabel} ${classes.beforeLabel}`}>Before</p>
              </div>
              <div className={`${classes.compareCell} ${classes.compareAfter}`}>
                <div className={classes.compareText}>
                  <p className={classes.body}>
                    “[Thermostat] detected it’s time to replace your HVAC system’s air filter”.
                  </p>
                  <p className={classes.body}>
                    Specifying which thermostat the filter change is attributed to.
                  </p>
                </div>
                <p className={classes.afterLabel}>After</p>
              </div>
            </div>
          </article>

          <Block
            id="fsa-designs-q2"
            question="What if a user has changed their filter unprompted by the reminder?"
          >
            <div className={`${classes.flow} ${classes.flowLow}`}>
              <div className={classes.row}>
                <Shot image={SETTINGS_LOG} arrow={{ y: 367, side: 'right' }} />
                <div className={classes.pair}>
                  <Shot image={LOG_CALENDAR} />
                  <Shot image={LOG_CALENDAR_ERROR} />
                </div>
              </div>
              <div className={classes.captions}>
                <p className={classes.caption}>
                  Add a way to log manual changes in the experience.
                </p>
              </div>
            </div>
          </Block>

          <Block
            id="fsa-designs-q3"
            question="How do we get people motivated to change their filter?"
          >
            <div className={classes.motivate}>
              <div className={classes.group}>
                <div className={classes.groupShots}>
                  <Shot image={SETTINGS_SAVINGS} arrow={{ y: 98, side: 'left' }} />
                  <Shot image={FILTER_HISTORY} arrow={{ y: 153, side: 'right' }} />
                </div>
                <p className={`${classes.caption} ${classes.captionMotivate1}`}>
                  Show how much a customer estimated to have saved by changing their filter.
                </p>
              </div>
              <div className={classes.group}>
                <div className={classes.groupShots}>
                  <Shot image={REPLACE_ORDER} arrow={{ y: 290, side: 'right' }} />
                </div>
                <p className={`${classes.caption} ${classes.captionMotivate2}`}>
                  Allow them to order a new filter directly from the notification. Ease from the
                  first tap.
                </p>
              </div>
            </div>
          </Block>

          <Block
            id="fsa-designs-q4"
            question="How can we help users who can never remember what filter they have?"
          >
            <FilterDetailsFlow />
          </Block>

          <Block
            id="fsa-designs-q5"
            question="How can we help users who don’t know how or always forget how to change their filter?"
          >
            <div className={`${classes.flow} ${classes.flowGuide}`}>
              <div className={classes.guide}>
                {GUIDE.map((image) => (
                  <Shot key={image.src} image={image} className={classes.guideShot} />
                ))}
              </div>
              <p className={classes.caption}>
                Provide a step-by-step filter replacement guide prompted with every filter reminder.
              </p>
            </div>
          </Block>

          <Block
            id="fsa-designs-q6"
            question="What about the users that can’t remember when they last changed their filter or when they should next?"
          >
            <div className={`${classes.flow} ${classes.flowWide}`}>
              <div className={classes.split}>
                <div className={classes.splitItem}>
                  <Shot image={FILTER_HISTORY} />
                  <p className={classes.caption}>
                    Include a simple filter log history with a spot for the estimated next change.
                  </p>
                </div>
                <div className={classes.splitItem}>
                  <Shot image={SAVINGS_YEAR} />
                  <p className={classes.caption}>
                    Estimate savings each year as a delightful motivator.
                  </p>
                </div>
              </div>
            </div>
          </Block>
        </div>
      </div>
    </section>
  );
}
