import Image from 'next/image';
import classes from './FsaOutcome.module.css';

const IMG = '/case-studies/filter-smart-alerts';

// Phone image size from the Figma frame (source PNGs are 3x)
const PHONE_WIDTH = 300;
const PHONE_HEIGHT = 613;

const FINAL_SCREENS = [
  {
    src: `${IMG}/outcome-final-replace-filter.png`,
    alt: 'Replace your air filter screen with the last change date, the saved filter size and buttons to mark it replaced or set up a reminder',
  },
  {
    src: `${IMG}/outcome-final-past-changes.png`,
    alt: 'Past filter changes screen listing change dates by year with the money saved each year',
  },
  {
    src: `${IMG}/outcome-home-air-clean.png`,
    alt: 'Home Air screen with a blue air quality score of 8, Clean, the next estimated filter change and savings',
  },
  {
    src: `${IMG}/outcome-final-calendar.png`,
    alt: 'Air filter smart alerts settings with a calendar sheet asking when you changed your filter',
  },
  {
    src: `${IMG}/outcome-final-woosh.png`,
    alt: 'Woosh offer screen: better air at a cheaper price, $88 a year, with a smart filter and sensor',
  },
  {
    src: `${IMG}/outcome-final-change-guide.png`,
    alt: 'Step-by-step filter change guide showing a filter being slid into the furnace, with steps to check size and airflow direction',
  },
];

function TitleBlock({ label, children }: { label: string; children: string }) {
  return (
    <div className={classes.titleBlock}>
      <span className={classes.bar} aria-hidden="true" />
      <div className={classes.titleText}>
        <h3 className={classes.label}>{label}</h3>
        <p className={classes.body}>{children}</p>
      </div>
    </div>
  );
}

export function FsaOutcome() {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* 1.0 release */}
        <div className={classes.release}>
          <figure className={classes.prototype}>
            <Image
              className={classes.phone}
              src={`${IMG}/outcome-prototype-phone.png`}
              alt=""
              width={PHONE_WIDTH}
              height={PHONE_HEIGHT}
              unoptimized
            />
            {/* Placeholder from the Figma design, waiting on the prototype */}
            <figcaption className={classes.prototypePlaceholder}>ADD PROTOTYPE</figcaption>
          </figure>
          <div className={classes.releaseText}>
            <TitleBlock label="1.0">
              Enhanced and added the features above to create an experience that helps put filter
              care on autopilot.
            </TitleBlock>
          </div>
        </div>

        <section aria-labelledby="fsa-future-ideas-title">
          <hr className={classes.divider} />

          {/* Future ideas */}
          <div className={classes.future}>
            <div className={classes.titleCard}>
              <Image
                className={classes.titleIcon}
                src={`${IMG}/outcome-rocket.png`}
                alt=""
                width={90}
                height={158}
                unoptimized
              />
              <h2 id="fsa-future-ideas-title" className={classes.title}>
                Future ideas
              </h2>
              <p className={classes.titleSubtitle}>Potential for 2.0 and beyond</p>
            </div>
            <div className={classes.futureText}>
              <h3 className={classes.label}>HVAC expanded</h3>
              <p className={classes.body}>
                Filter smart alerts are just the beginning of home air and HVAC health to me. It’s
                the perfect feature to pioneer the introduction of accessible HVAC care, education
                around system health, and prevention of breakdowns because it takes minimal effort
                and cost to maintain.
              </p>
            </div>
          </div>

          {/* Home Air concept */}
          <div className={classes.homeAir}>
            <div className={classes.homeAirPhones}>
              <Image
                className={classes.homeAirPhone}
                src={`${IMG}/outcome-home-air-clean.png`}
                alt="Home Air concept with a blue air quality score of 8, Clean, the next estimated filter change and savings"
                width={PHONE_WIDTH}
                height={PHONE_HEIGHT}
                unoptimized
              />
              <Image
                className={classes.homeAirPhone}
                src={`${IMG}/outcome-home-air-poor.png`}
                alt="Home Air concept with a red air quality score of 2, Poor, and a banner saying your air filter is due for a change"
                width={PHONE_WIDTH}
                height={PHONE_HEIGHT}
                unoptimized
              />
            </div>
            <div className={classes.homeAirText}>
              <p className={classes.body}>
                There is so much potential to expand this feature into it’s own “Home Air” suite in
                the app. Here, we could include information about air quality in the home with cool
                data viz, savings from filter replacements &amp; basic HVAC maintenance, reminders,
                change guides, etc.
              </p>
              <p className={classes.body}>
                People care about the air that they breathe at home. Expanding awareness and
                surfacing wanted data is something I think Vivint could excel at if we choose to
                pursue this terriroty.
              </p>
            </div>
          </div>

          {/* Partnership with Woosh */}
          <div className={classes.partnership}>
            <TitleBlock label="Partnership with Woosh">
              The foundation of our current detection model measures and flags when a system’s
              runtime has reached a point where the filter needs replacing. Though runtime is a much
              more accurate measure of filter contamination compared to estimated calendar time that
              most people typically use, filters embedded with sensors detect when a filter needs
              changing with the most accuracy. Woosh provides the opportunity to expanded our
              detection accuracy with it’s smart filter frame and increase ease with filter care
              through their delivery system.
            </TitleBlock>
          </div>

          {/* Adoption vs accuracy matrix; scrolls sideways on small screens */}
          <div className={classes.matrixScroll}>
            <figure
              className={classes.matrix}
              aria-label="Filter change detection methods plotted from easy to harder to adopt and from inaccurate to accurate"
            >
              <span className={classes.axisVertical} aria-hidden="true" />
              <span className={classes.axisHorizontal} aria-hidden="true" />
              <p className={`${classes.axisLabel} ${classes.axisTop}`}>Easy to adopt</p>
              <p className={`${classes.axisLabel} ${classes.axisBottom}`}>Harder to adopt</p>
              <p className={`${classes.axisLabel} ${classes.axisLeft}`}>Inaccurate</p>
              <p className={`${classes.axisLabel} ${classes.axisRight}`}>Accurate</p>

              <ul className={classes.methods}>
                <li className={`${classes.method} ${classes.calendar}`}>
                  <Image
                    className={classes.calendarIcon}
                    src={`${IMG}/outcome-calendar-icon.png`}
                    alt=""
                    width={59}
                    height={59}
                    unoptimized
                  />
                  <div>
                    <p className={classes.methodName}>Calendar</p>
                    <p className={classes.methodNote}>Relies on manual effort</p>
                  </div>
                </li>
                <li className={`${classes.method} ${classes.runtime}`}>
                  <Image
                    className={classes.runtimeIcon}
                    src={`${IMG}/outcome-runtime-icon.png`}
                    alt=""
                    width={55}
                    height={50}
                    unoptimized
                  />
                  <div>
                    <p className={classes.methodName}>Runtime</p>
                    <p className={classes.methodNote}>Measures system use</p>
                  </div>
                </li>
                <li className={`${classes.method} ${classes.woosh}`}>
                  <Image
                    className={classes.wooshIcon}
                    src={`${IMG}/outcome-woosh-sensor.png`}
                    alt=""
                    width={58}
                    height={58}
                    unoptimized
                  />
                  <div>
                    <p className={classes.methodName}>Woosh Air Filter Sensor</p>
                    <p className={classes.methodNote}>Measures airflow restriction directly</p>
                  </div>
                </li>
              </ul>
            </figure>
          </div>
        </section>

        {/* Final designs */}
        <section className={classes.experience} aria-labelledby="fsa-outcome-experience-title">
          <hr className={classes.divider} />
          <header className={classes.header}>
            <h2 id="fsa-outcome-experience-title" className={classes.experienceTitle}>
              <span className={classes.eyebrow}>Vivint’s</span>
              <span className={classes.name}>Filter Smart Alerts</span>
            </h2>
            <p className={classes.label}>Experience</p>
          </header>

          <ul className={classes.phones}>
            {FINAL_SCREENS.map((screen) => (
              <li key={screen.src}>
                <Image
                  className={classes.phone}
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
