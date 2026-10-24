import type { ReactNode } from 'react';
import Image from 'next/image';
import classes from './AdImprovements.module.css';

const IMG = '/case-studies/anomaly-detection';

const LEARNINGS = [
  {
    title: 'Vague copy & visuals don’t drive action',
    body: '24/31 participants preferred Comfort Drift for it’s plain language, specification of the problem, and visual data.',
  },
  {
    title: 'Self-help steps build trust',
    body: '“Things to try yourself” was praised in all 31 sessions it appeared. Without it, ‘connect with a pro’ reads as a money grab.',
  },
  {
    title: 'Proactive alerts are highly valued',
    body: 'All 31 users reacted positively to the push notification across both flows, with most requesting this before even seeing the proposed experience. Given its high priority, users want the notification to be prominent and reinforced throughout the app to ensure it’s hard to miss.',
  },
  {
    title: 'The form is the biggest friction point',
    body: 'People found it easy to fill out but hesitated to do so, commonly asking: who gets this? when do they respond? what does it cost? Prefill + transparency will convert.',
  },
];

interface Screen {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Some screenshots in the Figma frame have rounded corners, others are square
  rounded?: boolean;
}

interface Row {
  id: string;
  before?: Screen;
  after: Screen[];
  // Draws the bracket arrows from the first after-screen down to the ones below it
  connectors?: boolean;
  notes: ReactNode;
}

function Note({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className={classes.note}>
      <h3 className={classes.noteTitle}>{title}</h3>
      {children}
    </div>
  );
}

const ROWS: Row[] = [
  {
    id: 'notification',
    before: {
      src: `${IMG}/improve-before-lock-screen.png`,
      alt: 'Lock screen notification reading “Possible HVAC issue: Your system ran longer than expected.”',
      width: 804,
      height: 1748,
      rounded: true,
    },
    after: [
      {
        src: `${IMG}/improve-after-lock-screen.png`,
        alt: 'Lock screen notification reading “AC running too long: It ran 8 hours longer than expected to hit your set temp.”',
        width: 800,
        height: 1740,
        rounded: true,
      },
    ],
    notes: (
      <Note title="Added context and specificity to system issue.">
        <p className={classes.noteBody}>
          “Possible issue” → “AC running too long”. Users immediately know what is wrong.
        </p>
      </Note>
    ),
  },
  {
    id: 'home',
    before: {
      src: `${IMG}/improve-before-home.png`,
      alt: 'Home screen with a “Possible HVAC issue” banner in the thermostat section',
      width: 804,
      height: 1744,
      rounded: true,
    },
    after: [
      {
        src: `${IMG}/improve-after-home.png`,
        alt: 'Home screen with a “High runtime” status chip, a warning on the house illustration and an “AC running longer than expected” banner',
        width: 804,
        height: 1744,
        rounded: true,
      },
    ],
    notes: (
      <Note title="Increased multi-surface awareness to lock screen, Adaptive Home, thermostats page, Energy Insights, & Activity.">
        <p className={classes.noteBody}>
          A high-priority notification is more likely to capture users’ attention when surfaced
          prominently in relevant areas of the app, increasing its discoverability.
        </p>
      </Note>
    ),
  },
  {
    id: 'activity',
    before: {
      src: `${IMG}/improve-before-activity.png`,
      alt: 'Activity history with no record of the HVAC alert',
      width: 1182,
      height: 2556,
    },
    after: [
      {
        src: `${IMG}/improve-after-activity.png`,
        alt: 'Activity history listing “AC is running longer than expected” with a warning icon',
        width: 1182,
        height: 2556,
        rounded: true,
      },
    ],
    notes: (
      <Note title="Alerts stay dismissed, not forgotten">
        <p className={`${classes.noteBody} ${classes.narrow}`}>
          Alerts stay recoverable in Activity tab, even after removal
        </p>
      </Note>
    ),
  },
  {
    id: 'alert-detail',
    before: {
      src: `${IMG}/improve-before-alert-detail.png`,
      alt: '“Possible cooling issue detected” screen with an AC unit illustration and a “Connect with a trusted HVAC pro” button',
      width: 393,
      height: 882,
      rounded: true,
    },
    after: [
      {
        src: `${IMG}/improve-after-alert-detail.png`,
        alt: '“Your AC is running 8 hours longer than expected” screen with a bar chart comparing normal and current runtime and question chips',
        width: 402,
        height: 872,
        rounded: true,
      },
      {
        src: `${IMG}/improve-after-severity.png`,
        alt: '“How severe is this?” sheet rating the issue as moderate and recommending a fix within 3–5 days',
        width: 402,
        height: 872,
        rounded: true,
      },
      {
        src: `${IMG}/improve-after-self-help.png`,
        alt: '“Can I fix it myself?” sheet with four numbered self-help checks and a “Find a tech” button',
        width: 393,
        height: 852,
      },
    ],
    connectors: true,
    notes: (
      <>
        <Note title="Clarified and added supporting data verbally and visually.">
          <p className={`${classes.noteBody} ${classes.narrow}`}>
            Users like evidence (24/31 Comfort Drift for it’s visual graph)
          </p>
        </Note>
        <Note title="Better use of progressive disclosure">
          <p className={classes.noteBody}>
            Primary actions are surfaced first, secondary actions (like removing the alert) are
            hidden behind the ellipsis icon.
          </p>
        </Note>
        <div className={classes.flowNote}>
          <Note title="Reassessed and reorganized to better fit the user thought process">
            <p className={`${classes.noteBody} ${classes.narrow}`}>
              Explanation → visual data → questions → how to get help
            </p>
          </Note>
          <div className={classes.flow}>
            <h4 className={classes.flowLabel}>User flow</h4>
            <ol className={classes.flowSteps}>
              <li>Open notification</li>
              <li>Read what the issue is</li>
              <li>Scan what the issue looks like (data viz)</li>
              <li>
                Have a lot of questions that need answering:
                <ul className={classes.flowQuestions}>
                  <li>why did this happen?</li>
                  <li>How much time do I have to fix this? (severity)</li>
                  <li>How legitimate is this alert?</li>
                  <li>Can I still run my system?</li>
                  <li>Can I try to fix this myself first?</li>
                  <li>What technician should I use?</li>
                  <li>What other data can I see?</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        <Note title="Self-help precedes “connect with a technician”">
          <p className={classes.noteBody}>
            A sequence that increases user trust. Shows customer care over business motives
          </p>
        </Note>
      </>
    ),
  },
  {
    id: 'technician',
    before: {
      src: `${IMG}/improve-before-technician.png`,
      alt: 'Alert screen highlighting the “Connect with a trusted HVAC pro” button',
      width: 393,
      height: 852,
      rounded: true,
    },
    after: [
      {
        src: `${IMG}/improve-after-technician.png`,
        alt: 'Alert screen highlighting the “Connect with a local technician” button',
        width: 402,
        height: 872,
      },
    ],
    notes: (
      <Note title="Copy change to increase engagement">
        <ul className={classes.noteList}>
          <li>“Trusted HVAC pro” sounds too marketing-heavy.</li>
          <li>“HVAC pro” doesn’t communicate clearly as technician</li>
          <li>
            “Local technician” makes me think Vivint is helping me search for help instead of taking
            advantage of me.
          </li>
        </ul>
      </Note>
    ),
  },
  {
    id: 'confirmation',
    before: {
      src: `${IMG}/improve-before-confirmation.png`,
      alt: 'Home screen with a toast reading “Your schedule request was submitted”',
      width: 804,
      height: 1744,
      rounded: true,
    },
    after: [
      {
        src: `${IMG}/improve-after-confirmation.png`,
        alt: 'Home screen with a toast explaining the request was submitted and a confirmation email and response will follow',
        width: 804,
        height: 1744,
        rounded: true,
      },
    ],
    notes: (
      <>
        <Note title="Surfacing more information about the form">
          <p className={classes.noteBody}>
            diagnostic-fee range and confirmation toasts, answering “who gets this, when, and what
            does it cost.”
          </p>
        </Note>
        <aside className={classes.callout}>
          <svg
            className={classes.calloutIcon}
            viewBox="0 0 30 30"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M23.8064 25.2035C25.1559 25.2035 26.25 24.1094 26.25 22.7599C26.25 22.3928 26.1674 22.0309 26.0088 21.7012L25.9363 21.5622L17.2433 6.10871C16.7873 5.29822 15.9299 4.79647 15 4.79647C14.1281 4.79647 13.32 5.23751 12.8467 5.96051L12.7567 6.10871L4.0637 21.5622C3.85802 21.9278 3.74998 22.3404 3.74996 22.7599C3.74996 24.1094 4.84405 25.2035 6.19353 25.2035H23.8064ZM15 17.6163C14.422 17.6163 13.9535 17.1478 13.9535 16.5698V11.8605C13.9535 11.2825 14.422 10.8139 15 10.8139C15.578 10.8139 16.0465 11.2825 16.0465 11.8605V16.5698C16.0465 17.1478 15.578 17.6163 15 17.6163ZM15 21.2893C14.422 21.2893 13.9535 20.8208 13.9535 20.2428V20.2326C13.9535 19.6546 14.422 19.1861 15 19.1861C15.578 19.1861 16.0465 19.6546 16.0465 20.2326V20.2428C16.0465 20.8208 15.578 21.2893 15 21.2893Z" />
          </svg>
          <p className={classes.calloutText}>
            We could not make a lot of design decisions or include much information with this form
            because it strictly owned and operated by our parent company, NRG, providing the
            services.
          </p>
        </aside>
      </>
    ),
  },
  {
    id: 'booking',
    before: {
      src: `${IMG}/improve-before-form.png`,
      alt: 'Long service request form asking for address, phone, email, preferred contact date and time, service type and unit brand',
      width: 786,
      height: 1704,
      rounded: true,
    },
    after: [
      {
        src: `${IMG}/improve-after-pricing.png`,
        alt: 'Sheet showing service starting from $99, response in 24–48 hours, and buttons to request service online or by phone',
        width: 402,
        height: 872,
        rounded: true,
      },
    ],
    notes: (
      <Note title="In an ideal world...">
        <p className={classes.noteBody}>
          I would love to be able to give customers more information before they book and multiple
          ways to schedule service.
        </p>
        <p className={classes.noteBody}>
          From users testing, it was clear that users favor native booking. I feel like the current
          format and flow of the form causes hesitation that will inevitably result in user distrust
          and missed revenue opportunities. I continue to challenge the constraints of the form and
          advocate for a better user experience.
        </p>
      </Note>
    ),
  },
  {
    id: 'seasonal',
    after: [
      {
        src: `${IMG}/improve-after-seasonal.png`,
        alt: '“Seasonal maintenance alerts” screen listing savings, comfort and environmental benefits with a “Set up alerts” button',
        width: 402,
        height: 874,
      },
    ],
    notes: (
      <Note title="Helping prevent future issues">
        <p className={classes.noteBody}>
          Getting routine maintenance before seasonal changes is an accessible way to prevent future
          HVAC issues. We implemented Seasonal Maintenance Alerts in the app to help homeowners be
          proactive about HVAC health and keep their system running smoothly.
        </p>
      </Note>
    ),
  },
];

function ScreenImage({ screen }: { screen: Screen }) {
  return (
    <Image
      className={classes.screen}
      data-rounded={screen.rounded || undefined}
      src={screen.src}
      alt={screen.alt}
      width={screen.width}
      height={screen.height}
      // The optimizer palette-reduces PNGs, which blurs the small UI text in these screenshots
      unoptimized
    />
  );
}

export function AdImprovements() {
  return (
    <section className={classes.root}>
      <div className={classes.band}>
        <div className={classes.container}>
          <div className={classes.bandHeader}>
            <h2 className={classes.bandTitle}>Key learnings</h2>
            <p className={classes.bandSubtitle}>
              User behaviors an reactions that sparked change in the designs.
            </p>
          </div>
          <ol className={classes.learnings}>
            {LEARNINGS.map((learning, index) => (
              <li key={learning.title} className={classes.learning}>
                <span className={classes.learningNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={classes.learningText}>
                  <h3 className={classes.learningTitle}>{learning.title}</h3>
                  <p className={classes.learningBody}>{learning.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.intro}>
          <Image
            className={classes.introIcon}
            src={`${IMG}/improve-phone-check.png`}
            alt=""
            width={654}
            height={1024}
            unoptimized
          />
          <h2 className={classes.introTitle}>Improvements</h2>
          <p className={classes.introSubtitle}>
            Implementing the findings from user testing into the experience.
          </p>
        </div>

        <div className={classes.comparison}>
          <div className={classes.headerRow} aria-hidden="true">
            <p className={`${classes.columnLabel} ${classes.before}`}>Before</p>
            <p className={`${classes.columnLabel} ${classes.after}`}>After</p>
            <p className={`${classes.columnLabel} ${classes.changed}`}>What changed</p>
          </div>
          <ol className={classes.rows}>
            {ROWS.map((row) => (
              <li key={row.id} className={classes.row}>
                <div
                  className={`${classes.cell} ${classes.before}`}
                  data-empty={!row.before || undefined}
                >
                  {row.before && (
                    <>
                      <p className={classes.mobileLabel}>Before</p>
                      <ScreenImage screen={row.before} />
                    </>
                  )}
                </div>
                <div className={`${classes.cell} ${classes.after}`}>
                  <p className={classes.mobileLabel}>After</p>
                  <div className={classes.screens}>
                    {row.after.map((screen) => (
                      <ScreenImage key={screen.src} screen={screen} />
                    ))}
                    {row.connectors && (
                      <>
                        <span className={classes.connector} data-to="2" aria-hidden="true" />
                        <span className={classes.connector} data-to="3" aria-hidden="true" />
                      </>
                    )}
                  </div>
                </div>
                <div className={classes.notes}>
                  <p className={classes.mobileLabel}>What changed</p>
                  {row.notes}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
