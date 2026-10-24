import type { CSSProperties } from 'react';
import Image from 'next/image';
import classes from './FsaIntro.module.css';

const IMG = '/case-studies/filter-smart-alerts';

const STATS = [
  { value: 'LEAD DESIGNER', label: 'ROLE' },
  { value: '$200/YEAR', label: 'SAVINGS' },
  { value: '$40K', label: 'REVENUE' },
  { value: '30K', label: 'USERS' },
];

const COMPARISON = [
  {
    variant: 'traditional',
    title: 'TRADITIONAL',
    cube: `${IMG}/intro-cube-traditional.svg`,
    points: [
      ['Dependent on memory'],
      ['Reminders typically every 3 mo', '(rec for the avg household)'],
      ['Vague/inaccurate'],
    ],
  },
  {
    variant: 'vivint',
    title: 'VIVINT',
    cube: `${IMG}/intro-cube-vivint.svg`,
    points: [
      ['Personalized to your system'],
      ['Dependent on system use'],
      ['Accurate & cost saving'],
    ],
  },
];

const REMEMBER_ANSWERS = [
  { value: '32%', label: 'Physical calendar' },
  { value: '24%', label: 'Phone reminder' },
  { value: '17%', label: 'Changed w/seasons' },
  { value: '12%', label: 'When remembered' },
  { value: '8%', label: 'Signs of dust/allergies' },
  { value: '5%', label: 'HVAC not working efficiently' },
  { value: '16%', label: 'Other' },
];

const JOURNEY = [
  {
    src: `${IMG}/intro-user-filter-dirty.png`,
    width: 50.36,
    height: 50.14,
    alt: 'Dirty air filter',
    text: 'My system has run long enough that it is time for a filter change.',
  },
  {
    src: `${IMG}/intro-user-phone-alert.png`,
    width: 58.83,
    height: 60.09,
    alt: 'Phone showing a notification',
    text: 'I receive a push notification reminding me to change my filter.',
  },
  {
    src: `${IMG}/intro-user-filter-clean.png`,
    width: 50.36,
    height: 50.14,
    alt: 'Clean air filter',
    text: 'I change my filter with the help of the change guide and log it right in the app.',
  },
  {
    src: `${IMG}/intro-user-vent.png`,
    width: 67,
    height: 44.67,
    alt: 'Air vent',
    text: 'My HVAC is running smoothly and my air quality has improved now that my filter is changed.',
  },
];

const MISSIONS = [
  {
    number: '01',
    title: 'INCREASE AWARENESS',
    text: 'Filter maintenance is the most accessible way for homeowners to maintain or improve their HVAC system’s health. Create an experience that streamlines the process of remembering, tracking, and guiding replacements so upkeep takes minimal work.',
  },
  {
    number: '02',
    title: 'MAXIMIZE EASE',
    text: 'Include step-by-step guides for filter replacement, manual logging at any time, and ability to order a new filter within 2 taps.',
  },
];

export function FsaIntro() {
  return (
    <div className={classes.intro}>
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

        <section className={classes.topper} aria-labelledby="fsa-title">
          <div className={classes.lead}>
            <div className={classes.header}>
              <h1 id="fsa-title" className={classes.title}>
                Filter Smart Alerts
              </h1>
              <p className={classes.summary}>
                I led the design of Filter Replacement Smart Alerts, a pioneering HVAC feature that
                helps homeowners extend filter life and replace filters at the right time, saving
                both time and money. Unlike traditional reminders based on a fixed three-month
                schedule, Vivint’s Filter Smart Alerts use a more accurate individual system runtime
                to determine when a filter actually needs to be replaced. This means customers
                replace their filters based on their home’s unique usage, rather than an arbitrary
                calendar date. This approach introduces a new framework for filter replacement that
                no competitor currently offers. The innovation was approved for patent protection
                and is pending publication.
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
            src={`${IMG}/intro-filter-phone.png`}
            alt="Vivint app screen titled “Replace your air filter”, explaining the heating and cooling system has been running for a while and the filter is getting dirty, with the last change date, a reminder in 3 days, an “I’ve replaced my filter” button and a link to a filter change guide"
            width={420}
            height={816}
            unoptimized
            priority
          />
          <div className={classes.heroText}>
            <div className={classes.block}>
              <h2 className={classes.kicker}>PROBLEM</h2>
              <p className={classes.body}>
                Regular replacement of an HVAC system’s filter is essential in maintaining/improving
                overall system health and efficiency. Homeowners lack a reliable way to understand
                when their HVAC filter needs replacing. Traditional time-based reminders offer
                little insight into actual filter usage, leaving customers to rely on guesswork and
                manage filter maintenance without knowing when a replacement is truly necessary.
              </p>
            </div>
            <div className={`${classes.block} ${classes.proposal}`}>
              <h2 className={classes.kicker}>PROPOSAL</h2>
              <p className={classes.body}>
                A runtime-based reminder experience that guides and tracks a customer’s filter
                changes. This experience makes HVAC care feel approachable and actionable empowering
                customers to take small steps that lead to better long-term system performance.
              </p>
            </div>
          </div>
        </section>

        <section className={classes.research} aria-labelledby="fsa-research">
          <hr className={classes.divider} />
          <div className={classes.row}>
            <div className={classes.researchCard}>
              <Image
                className={classes.researchImage}
                src={`${IMG}/intro-research-filter.png`}
                alt="Pleated HVAC air filter with a diamond grid frame"
                width={178}
                height={178}
                unoptimized
              />
              <div className={classes.researchHeading}>
                <h2 id="fsa-research" className={classes.researchTitle}>
                  Research
                </h2>
                <p className={classes.researchLede}>
                  Breaking it down to understand the problem at its core.
                </p>
              </div>
            </div>

            <div className={classes.why}>
              <h3 className={classes.sideTitle}>Why is filter replacement important?</h3>
              <div className={classes.whyBody}>
                <p className={classes.whyText}>
                  Clogged filters make your system work harder which increases your energy bills and
                  wears out your system faster.
                </p>
                <p className={`${classes.whyText} ${classes.whyAside}`}>
                  Additionally, regular replacement maintains air quality which can affect health,
                  comfort, sleep, focus, and long-term well-being.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ul className={classes.comparison} aria-label="Traditional reminders compared to Vivint">
          {COMPARISON.map(({ variant, title, cube, points }) => (
            <li key={variant} className={classes.compare}>
              <Image
                className={classes.cube}
                src={cube}
                alt=""
                width={183}
                height={198}
                unoptimized
              />
              <div className={classes.compareText}>
                <h3 className={classes.compareTitle}>{title}</h3>
                <ul className={classes.points}>
                  {points.map(([line, note]) => (
                    <li key={line}>
                      {line}
                      {note && <span className={classes.pointNote}>{note}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <section className={classes.survey} aria-labelledby="fsa-survey">
          <div className={classes.heading}>
            <h3 id="fsa-survey" className={classes.eyebrow}>
              BEHAVIORS &amp; DEMAND
            </h3>
            <p className={classes.headingLede}>Findings from a Vivint customer survey.</p>
          </div>

          <div className={classes.chart}>
            <Image
              className={classes.rings}
              src={`${IMG}/intro-survey-rings.svg`}
              alt=""
              width={1098}
              height={612}
              unoptimized
            />
            <figure className={classes.remember}>
              <ul className={classes.answers}>
                {REMEMBER_ANSWERS.map(({ value, label }) => (
                  <li key={label} className={classes.answer}>
                    <span className={classes.answerValue}>{value}</span>
                    <span className={classes.answerLabel}>{label}</span>
                  </li>
                ))}
              </ul>
              <figcaption className={`${classes.caption} ${classes.rememberCaption}`}>
                How do you remember to change your HVAC filter?
              </figcaption>
            </figure>
            <figure className={classes.interest}>
              <p className={classes.interestStat}>
                <span className={classes.interestValue}>60%</span>
                <span className={classes.interestLabel}>Interest</span>
              </p>
              <figcaption className={`${classes.caption} ${classes.interestCaption}`}>
                How likely are you to consider opting into HVAC filter replacement reminders?
              </figcaption>
            </figure>
          </div>
        </section>

        <div className={`${classes.row} ${classes.userRow}`}>
          <section className={classes.userCard} aria-labelledby="fsa-user">
            <div className={classes.userHeading}>
              <h3 id="fsa-user" className={classes.eyebrow}>
                IF I WAS A USER...
              </h3>
              <p className={classes.headingLede}>
                What I imagine the ideal user experience to look like.
              </p>
            </div>
            <ol className={classes.journey}>
              {JOURNEY.map((step) => (
                <li key={step.src} className={classes.step}>
                  <span className={classes.stepIconBox}>
                    <Image
                      className={classes.stepIcon}
                      src={step.src}
                      width={Math.round(step.width)}
                      height={Math.round(step.height)}
                      alt={step.alt}
                      unoptimized
                      style={
                        {
                          '--icon-w': `${step.width}px`,
                          '--icon-h': `${step.height}px`,
                        } as CSSProperties
                      }
                    />
                  </span>
                  <p className={classes.stepText}>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={classes.missions} aria-labelledby="fsa-missions">
            <h3 id="fsa-missions" className={classes.sideTitle}>
              Missions
            </h3>
            <ol className={classes.missionList}>
              {MISSIONS.map(({ number, title, text }) => (
                <li key={number} className={classes.mission}>
                  <h4 className={classes.missionHeading}>
                    <span>{number}</span>
                    <span>{title}</span>
                  </h4>
                  <p className={classes.missionText}>{text}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
