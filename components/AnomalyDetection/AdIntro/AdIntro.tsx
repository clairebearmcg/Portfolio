import Image from 'next/image';
import { SiteNav } from '../../SiteNav/SiteNav';
import classes from './AdIntro.module.css';

const IMG = '/case-studies/anomaly-detection';

const STATS = [
  { value: 'LEAD DESIGNER', label: 'ROLE' },
  { value: '$200/YEAR', label: 'SAVINGS' },
  { value: '$40K', label: 'REVENUE' },
  { value: '30K', label: 'USERS' },
];

const MISSIONS = [
  {
    number: '01',
    title: 'EDUCATE',
    lines: [
      'Help homeowners understand when there’s an issue, how to fix it, and how to care for their system and prevent future issues.',
    ],
  },
  {
    number: '02',
    title: 'INNOVATE',
    lines: [
      'Create solutions with space to evolve with access to resources.',
      'Challenge a mundane problem with novel solutions.',
    ],
  },
  {
    number: '03',
    title: 'PROMOTE',
    lines: [
      'Spark customer interest and care for HVAC health.',
      'Seek opportunities for company growth within the HVAC industry.',
    ],
  },
];

const RESEARCH_METHODS = [
  'Watched old Vivint interviews & read transcripts to understand existing relationships between customers & their HVACs.',
  'Studied car breakdowns, medical devices, and other similar products that warn users of early issues.',
  'Competitive analysis of Ecobee & Nest.',
];

export function AdIntro() {
  return (
    <div className={classes.intro}>
      <header className={`${classes.container} ${classes.top}`}>
        <SiteNav homeHref="/" />
      </header>

      <div className={classes.container}>
        <p className={classes.tag}>
          <Image
            className={classes.tagIcon}
            src={`${IMG}/intro-vivint-app-icon.svg`}
            alt=""
            width={40}
            height={40}
            unoptimized
          />
          <span className={classes.tagText}>A Vivint project</span>
        </p>

        <section className={classes.topper} aria-labelledby="ad-title">
          <div className={classes.lead}>
            <div className={classes.header}>
              <h1 id="ad-title" className={classes.title}>
                Anomaly detection
              </h1>
              <p className={classes.summary}>
                I led the design for HVAC Anomaly Detection, a top-priority initiative saving Vivint
                customers $x a year by detecting potential system faults and guiding users to a
                resolution before a high-cost failure occurs. Evolving the product from an early
                MVP, I am now defining the version 2 vision to integrate more proactive, data-driven
                features across the experience.
              </p>
            </div>

            {/* No recording yet: the card is shown as designed but can't be played */}
            <button
              type="button"
              className={classes.listen}
              disabled
              aria-label="Listen to a 2 minute audio version (coming soon)"
            >
              <span className={classes.listenText}>
                <span className={classes.listenKicker}>ANTI-READING?</span>
                <span className={classes.listenHint}>Same!!! Listen to me instead!</span>
              </span>
              <span className={classes.listenPlay}>
                <Image
                  className={classes.playIcon}
                  src={`${IMG}/intro-play.svg`}
                  alt=""
                  width={23}
                  height={20}
                  unoptimized
                />
                2 min
              </span>
            </button>
          </div>

          <dl className={classes.stats}>
            {STATS.map(({ value, label }) => (
              <div key={label} className={classes.stat}>
                <dt className={classes.statLabel}>{label}</dt>
                <dd className={classes.statValue}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={classes.hero} aria-label="Problem and proposal">
          <Image
            className={classes.shadow}
            src={`${IMG}/intro-phone-shadow.svg`}
            alt=""
            width={978}
            height={154}
            unoptimized
          />
          <Image
            className={classes.phone}
            src={`${IMG}/intro-phone-hero.png`}
            alt="Vivint app alert reading “Your AC is running 8 hours longer than expected”, with a chart comparing 4 hours of normal activity to 12 hours of current activity and a button to connect with a local technician"
            width={908}
            height={1670}
            unoptimized
            priority
          />
          <div className={classes.heroText}>
            <div className={classes.block}>
              <h2 className={classes.kicker}>PROBLEM</h2>
              <p className={classes.body}>
                An HVAC (Heating &amp; Cooling) System is the most expensive and essential appliance
                in the home, while also being the most energy intensive, yet homeowners lack
                visibility until failures happen. Poor performance impacts comfort &amp; budgets,
                while Vivint &amp; NRG miss opportunities for proactive service &amp; recurring
                revenue.
              </p>
            </div>
            <div className={`${classes.block} ${classes.proposal}`}>
              <h2 className={classes.kicker}>PROPOSAL</h2>
              <p className={classes.body}>
                A detailed, data-backed app experience clearly informing users what happened to
                their HVAC system, what to do about it, and how to prevent future issues from
                happening.
              </p>
            </div>
          </div>
        </section>

        <section className={classes.research} aria-labelledby="ad-research">
          <hr className={classes.divider} />
          <div className={classes.researchRow}>
            <div className={classes.researchCard}>
              <Image
                className={classes.hvac}
                src={`${IMG}/intro-hvac-exploded.png`}
                alt="Exploded view of an outdoor HVAC unit: fan grille, fan, coil and compressor"
                width={584}
                height={1024}
                unoptimized
              />
              <div className={classes.researchHeading}>
                <h2 id="ad-research" className={classes.researchTitle}>
                  Research
                </h2>
                <p className={classes.researchLede}>
                  Breaking it down to understand the problem at it’s core.
                </p>
              </div>
            </div>

            <div className={classes.missions}>
              <h3 className={classes.missionsTitle}>Missions</h3>
              <ol className={classes.missionList}>
                {MISSIONS.map(({ number, title, lines }) => (
                  <li key={number} className={classes.mission}>
                    <h4 className={classes.missionHeading}>
                      <span>{number}</span>
                      <span>{title}</span>
                    </h4>
                    <div className={classes.missionBody}>
                      {lines.map((line) => (
                        <p key={line} className={classes.missionLine}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <ul className={classes.methods}>
          {RESEARCH_METHODS.map((method) => (
            <li key={method}>{method}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
