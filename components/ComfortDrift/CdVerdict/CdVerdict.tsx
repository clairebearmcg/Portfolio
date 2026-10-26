import Image from 'next/image';
import classes from './CdVerdict.module.css';

const IMG = '/case-studies/comfort-drift';

// Explorations for "serial homes" (Figma 24519:3894, source PNGs are 786 × 1704)
const EXPLORATIONS = [
  'Your home struggles to reach the right temperature, with a line chart of indoor temperature against the set temp and a list of upgrades to consider',
  'Your home struggles to reach the right temperature, comparing your home with an efficient one, and a list of upgrades to consider',
  'Your home struggles to reach the right temperature, with a slider from your home to an efficient home and a list of upgrades to consider',
  'Save about $42 a month, comparing current and upgraded monthly costs with icons and a list of upgrades to consider',
  'Save about $42 a month, comparing $124 and $82 monthly costs with a list of upgrades to consider',
  'Improve your home to save $160 a month, with an illustration of someone pumping air and suggestions of what you can do',
  'Your home struggles to reach the right temperature, with an illustration of a house losing heat and what you can do',
  'Your home struggles to reach the right temperature, comparing your home at 65% with the expected 96%, and what you can do',
  'Save about $42 a month, showing the cost dropping from $124 to $82 a month with upgrades to consider',
  'Your home struggles to keep up with heating and cooling demand, with a line chart and ways to save money and energy',
  'Your HVAC system is working harder than it needs to, with an HVAC efficiency bar comparing your home with the expected level',
  'Your HVAC is inefficient, comparing your monthly cost with what it could be and a button to view recommendations',
];

const EXPLORATION_WIDTH = 786;
const EXPLORATION_HEIGHT = 1704;

const FINAL_SCREENS = [
  {
    src: `${IMG}/verdict-final-heating.png`,
    alt: 'Your heating system failed to heat your home: a chart of indoor temperature falling below the set temp, with a button to connect with a local technician',
  },
  {
    src: `${IMG}/verdict-final-cooling.png`,
    alt: 'Your AC system failed to cool your home: a chart of indoor temperature rising above the set temp, with a button to connect with a local technician',
  },
  {
    src: `${IMG}/verdict-final-tips.png`,
    alt: 'Swipeable tip cards to upgrade insulation and adjust your temperature, each with its estimated monthly savings',
  },
];

// Phone image size from the Figma frame (source PNGs are 3x)
const PHONE_WIDTH = 300;
const PHONE_HEIGHT = 613;

export function CdVerdict() {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* Serial homes */}
        <section aria-labelledby="cd-serial-homes-title">
          <div className={classes.titleBlock}>
            <span className={classes.bar} aria-hidden="true" />
            <div className={classes.titleText}>
              <h2 id="cd-serial-homes-title" className={classes.label}>
                What if this is a common occurrence for certain homes?
              </h2>
              <p className={classes.body}>
                Some homes are just generally inefficient and commonly face issues where their home
                either takes forever to reach their set temp, or never reaches their set temp at
                all. Typically, this happens to older homes with bad insulation or old HVAC systems.
                We labeled these homes as “serial homes” and set out to find a way to help mitigate
                their inefficiency and discomfort.
              </p>
            </div>
          </div>

          <ul className={classes.explorations}>
            {EXPLORATIONS.map((alt, index) => (
              <li key={alt}>
                <Image
                  className={classes.exploration}
                  src={`${IMG}/verdict-explore-${String(index + 1).padStart(2, '0')}.png`}
                  alt={`Exploration: ${alt}`}
                  width={EXPLORATION_WIDTH}
                  height={EXPLORATION_HEIGHT}
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </section>

        {/* The verdict: annotated final screens (Figma 24519:3909) */}
        <section className={classes.verdict} aria-labelledby="cd-verdict-title">
          <h2 id="cd-verdict-title" className={`${classes.label} ${classes.verdictTitle}`}>
            The verdict
          </h2>

          <figure className={classes.annotated}>
            {/* Leader lines from each note to the screen, drawn in Figma's 1031 × 959 box */}
            <svg
              className={classes.lines}
              viewBox="0 0 1031 959"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M510.5 121L648 35" />
              <path d="M460 268L643 238" />
              <path d="M218 544L361 504" />
              <path d="M526 504L690 646" />
              <path d="M600.5 843.5L702.5 803" />
            </svg>

            <Image
              className={`${classes.phone} ${classes.phoneAlert}`}
              src={`${IMG}/verdict-phone-alert.png`}
              alt="Your HVAC system is working harder than it needs to: an HVAC efficiency bar showing your home at 44% against the expected 90%, with a banner to save $142 a month"
              width={PHONE_WIDTH}
              height={PHONE_HEIGHT}
              unoptimized
            />
            <p className={`${classes.note} ${classes.noteLanguage}`}>
              Used gentle language instead of stating the word “inefficiency” and making people
              think there’s an immediate issue with their system.
            </p>
            <p className={`${classes.note} ${classes.noteGap}`}>
              Clear indication of the gap with color and icons.
            </p>
            <p className={`${classes.note} ${classes.noteSavings}`}>
              Incentivized fixing the issue by labeling the estimated savings by doing so.
            </p>

            <Image
              className={`${classes.phone} ${classes.phoneTips}`}
              src={`${IMG}/verdict-phone-tips.png`}
              alt="Tip card to upgrade insulation, saving about $33 a month, explaining that poor insulation can lead to warm or cool air leaking in or out of your home"
              width={PHONE_WIDTH}
              height={PHONE_HEIGHT}
              unoptimized
            />
            <figcaption className={`${classes.note} ${classes.noteTips}`}>
              Provided tips prioritized from easy→hard for users to start resolving the issue on
              their own.
            </figcaption>
          </figure>
        </section>

        {/* Final designs (same layout as the Anomaly Detection outro) */}
        <section className={classes.experience} aria-labelledby="cd-experience-title">
          <hr className={classes.divider} />
          <header className={classes.header}>
            <h2 id="cd-experience-title" className={classes.experienceTitle}>
              <span className={classes.eyebrow}>Vivint’s</span>
              <span className={classes.name}>Comfort Drift</span>
            </h2>
            <p className={classes.label}>Experience</p>
          </header>

          <ul className={classes.phones}>
            {FINAL_SCREENS.map((screen) => (
              <li key={screen.src} className={classes.finalPhone}>
                <Image
                  className={classes.finalImage}
                  src={screen.src}
                  alt={screen.alt}
                  width={PHONE_WIDTH}
                  height={PHONE_HEIGHT}
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
