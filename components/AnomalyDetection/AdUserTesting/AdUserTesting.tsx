import Image from 'next/image';
import classes from './AdUserTesting.module.css';

const STATS = [
  { value: '31', label: 'Participants' },
  { value: '2', label: 'Experiences' },
  { value: '46', label: 'Q/session' },
] as const;

const COHORTS = ['10 - Had a prior HVAC issue', '21 - Had no prior HVAC issue'];

const PHONES = [
  { caption: 'Comfort Drift', alt: 'Comfort Drift prototype on a phone' },
  { caption: 'Anomaly Detection', alt: 'Anomaly Detection prototype on a phone' },
] as const;

const EXPERIENCES = [
  {
    title:
      'Comfort Drift (separate project focused on anomalies related to temperature not runtime)',
    quote: '“Cooling issue — your home failed to cool while the AC was running.”',
    points: [
      'Expected-vs-actual temperature graph',
      'Specific evidence: warmed 3° from 12:45–4:15',
      '“Things to try yourself” — self-help steps first',
      'Connect with a trusted HVAC pro (form)',
    ],
  },
  {
    title: 'Anomaly Detection',
    quote: '“Possible HVAC issue — your system ran 12 hours longer than expected.”',
    points: [
      'No data viz on main alert (drill down available)',
      'No stated cause or consequence',
      'No self-help steps',
      'Connect with a trusted HVAC pro',
    ],
  },
];

interface Bar {
  value: number;
  label: string;
  color: string;
}

// Each chart always shows three panels; empty panels are left as plain dotted cards
const CHARTS: { id: string; question: string; bars: Bar[] }[] = [
  {
    id: 'familiarity',
    question: "How familiar are people with their HVAC system's health?",
    bars: [
      { value: 50, label: 'Had a prior HVAC issue', color: '#d5e6ff' },
      { value: 51, label: 'No prior HVAC issue', color: '#ff6b6b' },
      { value: 50.7, label: 'Everyone', color: '#89a2ff' },
    ],
  },
  {
    id: 'familiarity-repeat',
    question: "How familiar are people with their HVAC system's health?",
    bars: [
      { value: 50, label: 'Had a prior HVAC issue', color: '#d5e6ff' },
      { value: 51, label: 'No prior HVAC issue', color: '#ff6b6b' },
      { value: 50.7, label: 'Everyone', color: '#89a2ff' },
    ],
  },
  {
    id: 'act-on-alert',
    question: 'How likely are people to act on the alert?',
    bars: [
      { value: 89, label: 'Anomaly Detection', color: '#ffbe92' },
      { value: 97, label: 'Comfort Drift', color: '#caeae9' },
      { value: 93, label: 'Combined', color: '#89a2ff' },
    ],
  },
  {
    id: 'request-form',
    question: 'How likely are people to fill out the technician request form?',
    bars: [{ value: 80.71, label: 'Everyone', color: '#89a2ff' }],
  },
  {
    id: 'find-alert',
    question: 'How easy was it to find the alert?',
    bars: [{ value: 93, label: 'Everyone', color: '#89a2ff' }],
  },
];

const PANELS_PER_CHART = 3;

export function AdUserTesting() {
  return (
    <section className={classes.root} aria-labelledby="ad-user-testing-title">
      <div className={classes.container}>
        <div className={classes.intro}>
          <div className={`${classes.card} ${classes.titleCard}`}>
            <Image
              className={classes.clipboard}
              src="/case-studies/anomaly-detection/testing-clipboard.png"
              alt=""
              width={200}
              height={200}
              unoptimized
            />
            <div>
              <h2 id="ad-user-testing-title" className={classes.title}>
                User Testing
              </h2>
              <p className={classes.subtitle}>Getting feedback from real users.</p>
            </div>
          </div>

          <ul className={`${classes.card} ${classes.stats}`}>
            {STATS.map((stat) => (
              <li key={stat.label} className={classes.stat}>
                <span className={classes.statValue}>{stat.value}</span>
                <span className={classes.label}>{stat.label}</span>
              </li>
            ))}
            <li className={classes.stat}>
              <span className={classes.statValue}>4</span>
              <div>
                <span className={classes.label}>Cohorts</span>
                <ul className={classes.cohorts}>
                  {COHORTS.map((cohort) => (
                    <li key={cohort}>{cohort}</li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <dl className={classes.details}>
          <dt className={classes.label}>Type</dt>
          <dd className={classes.body}>Unmoderated usability test</dd>
          <dt className={classes.label}>Where</dt>
          <dd className={classes.body}>Dscout</dd>
          <dt className={classes.label}>Flow</dt>
          <dd className={classes.body}>
            <p className={classes.flowLine}>
              <strong>Project 1</strong> (Anomaly Detection){' '}
              <strong>
                <em>VS</em>
              </strong>{' '}
              <strong>Project 2</strong> (Comfort Drift)
            </p>
            <p className={classes.flowLine}>
              2x: Find the alert → understand the issue → contact a technician → react to the form →
              push notification → head-to-head comparison.
            </p>
          </dd>
        </dl>

        <div className={classes.phones}>
          {PHONES.map((phone) => (
            <figure key={phone.caption} className={classes.phone}>
              <div className={classes.phoneFrame}>
                <Image
                  className={classes.phoneImage}
                  src="/case-studies/anomaly-detection/testing-phone.png"
                  alt={phone.alt}
                  width={300}
                  height={613}
                  unoptimized
                />
                <p className={classes.placeholder}>Prototype incoming</p>
              </div>
              <figcaption className={classes.label}>{phone.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className={classes.compare}>
          {EXPERIENCES.map((experience) => (
            <article key={experience.title} className={classes.compareCard}>
              <div className={classes.compareTop}>
                <h3 className={classes.compareTitle}>{experience.title}</h3>
                <p className={classes.compareQuote}>{experience.quote}</p>
              </div>
              <ul className={classes.comparePoints}>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={`${classes.callout} ${classes.why}`}>
          <h3 className={classes.label}>Why didn’t we test Anomaly Detection by itself?</h3>
          <p className={classes.calloutText}>
            Comfort Drift and Anomaly Detection are incredibly similar experiences in the HVAC
            services family, they’re basically cousins! Though they both deal with fault detection,
            Comfort Drift’s model is a bit simpler, can be directly pinpointed, and flags when a
            home drifts from its set temperature. Anomaly Detection’s model is more complex and
            relies on an excessive increase in runtime to justify an issue. The core elements of
            these experiences are the same, however. The goal is to notify the customer of the
            issue, show the experience visually, provide information and DIY strategies, and
            encourage the user to book with a technician if their situation calls for it.
          </p>
          <p className={classes.calloutText}>
            There were many different ways I could represent these elements throughout both
            situations. The opportunity to A/B test with different elements on different experiences
            gave us the opportunity to see where each experience succeeded and fell short compared
            to one another.
          </p>
        </div>

        <div className={`${classes.callout} ${classes.statsHeading}`}>
          <h3 className={classes.label}>It’s raining stats</h3>
          <p className={classes.calloutText}>Findings from the user testing.</p>
        </div>

        <div className={classes.charts}>
          {CHARTS.map((chart) => (
            <div key={chart.id} className={classes.chart}>
              <h4 className={classes.question}>{chart.question}</h4>
              <ul className={classes.panels}>
                {Array.from({ length: PANELS_PER_CHART }, (_, panel) => {
                  const bar = chart.bars[panel];
                  if (!bar) {
                    return <li key={panel} className={classes.panel} aria-hidden="true" />;
                  }
                  return (
                    <li key={bar.label} className={classes.panel}>
                      <div className={classes.track}>
                        <div
                          className={classes.fill}
                          style={{ height: `${bar.value}%`, backgroundColor: bar.color }}
                        />
                      </div>
                      <div className={classes.barText}>
                        <span className={classes.label}>{bar.value}%</span>
                        <span className={classes.barLabel}>{bar.label}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
