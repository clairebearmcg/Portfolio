import type { CSSProperties } from 'react';
import Image from 'next/image';
import classes from './AdResearch.module.css';

const IMG = '/case-studies/anomaly-detection';

const alertTypes = [
  {
    variant: 'spike',
    title: 'Spike',
    timeframe: 'A couple days - a week',
    description:
      'When the HVAC runs much longer than normal to reach a temperature in a short period of time, this typically indicates the start of an urgent issue. The model flags this and we push a warning notification to the user.',
    example: 'Your A/C was on but your home failed to cool down.',
  },
  {
    variant: 'gradual',
    title: 'Gradual',
    timeframe: 'A couple weeks - a few months',
    description:
      'If an HVAC is running longer over time, it’s working harder to reach your temperature and slowly becoming less efficient. Issues gradually arising are usually early warning signs of potential bigger problems. The model flags this and we push a warning notification to the user.',
    example: 'Your heat pump has a potential problem.',
  },
];

const journey = [
  {
    src: `${IMG}/research-hvac.png`,
    width: 56,
    height: 56,
    alt: 'HVAC unit',
    text: 'My HVAC starts acting much differently than normal. I have no clue, everything feels normal at home.',
  },
  {
    src: `${IMG}/research-phone-alert.png`,
    width: 56,
    height: 58,
    alt: 'Phone showing a warning alert',
    text: 'Vivint flags this as an early sign of an issue and sends me a notification explaining what’s going on and how I can fix it.',
  },
  {
    src: `${IMG}/research-toolbox.png`,
    width: 68,
    height: 68,
    alt: 'Technician’s toolbox',
    text: 'Vivint helps me feel reassured and calm despite the stressful situation. I easily book with a technician right in the app.',
  },
  {
    src: `${IMG}/research-hvac-healthy.png`,
    width: 56,
    height: 56,
    alt: 'Healthy HVAC unit',
    text: 'Because the issue was caught early, I saved money and energy. I don’t have to worry about future issues because I now get maintenance reminders and I know Vivint will catch them early.',
  },
];

const stats = [
  {
    icon: { src: `${IMG}/research-icon-refrigerant.png`, width: 178, height: 182 },
    stat: '2/3',
    title: 'AC systems are running less efficiently than they could',
    body: 'This is caused by incorrect refrigerant charge, which can reduce system performance. I want to help people not only catch issues, but realize gaps in order to maximize their HVAC use.',
    sourcePrefix: 'According to an',
    sourceLabel: 'HVAC Fault Detection Study',
    sourceHref: 'https://ashraephilly.starchapter.com/images/downloads/CTTC_Articles/1409_cttc.pdf',
  },
  {
    icon: { src: `${IMG}/research-icon-globe.png`, width: 173, height: 182 },
    stat: '~65%',
    title: 'Of the population are visual learners',
    body: 'As a visual learner myself, I felt it was important to show the problem in addition to telling it. I pushed to include data visualization in the experience because it added reinforcement for explaining the issue in an understandable way as well as giving the impression that this diagnosis was serious and backed by legitimate, personalized data.',
    sourcePrefix: 'According to the',
    sourceLabel: 'National Library of Medicine',
    sourceHref: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6513874/',
  },
  {
    icon: { src: `${IMG}/research-icon-building.png`, width: 141, height: 170 },
    stat: '40%',
    title: 'Of commercial HVACs are operating with at least one active fault',
    body: 'Most go undetected for months. This indicates a huge opportunity to expand our market and model use from residential homes to commercial buildings.',
    sourcePrefix: 'According to',
    sourceLabel: 'HVAC Fault Detection & Diagnostics',
    sourceHref: 'https://oxmaint.com/industries/hvac/hvac-fault-detection-diagnostics-guide',
  },
];

export function AdResearch() {
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div className={classes.block}>
          <div className={classes.heading}>
            <h2 className={classes.eyebrow}>How do we catch alerts early?</h2>
            <p className={classes.lead}>
              HVAC anomaly detection is supported by a model that knows the average time it
              typically takes for a customer’s home to reach a set temperature. When a customer’s
              runtime is abnormal, the model flags this as an issue. The experience is reserved for
              high priority situations that could not be triggered just by an open door or
              fluctuation in outdoor weather. Still with me? Now… there are two types of situations
              that trigger an alert:
            </p>
          </div>

          <div className={classes.alertTypes}>
            <Image
              className={classes.graphs}
              src={`${IMG}/research-graphs.svg`}
              width={383}
              height={553}
              alt="Two runtime graphs: a blue line that rises sharply then drops (spike), and an orange line that climbs unevenly over time (gradual)"
              unoptimized
            />
            <div className={classes.alertList}>
              {alertTypes.map((type) => (
                <div key={type.variant} className={classes.alert}>
                  <div className={classes.alertTitle}>
                    <h3 className={classes.alertName} data-variant={type.variant}>
                      {type.title}
                    </h3>
                    <p className={classes.timeframe}>{type.timeframe}</p>
                  </div>
                  <div className={classes.alertBody}>
                    <p className={classes.alertDescription}>{type.description}</p>
                    <p className={classes.example}>“{type.example}”</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.journeyBlock}>
          <div className={classes.heading}>
            <h2 className={classes.eyebrow}>If I was a user...</h2>
            <p className={classes.lead}>What I imagine the ideal user experience to look like.</p>
          </div>
          <ol className={classes.journey}>
            {journey.map((step) => (
              <li key={step.src} className={classes.step}>
                <div className={classes.stepTop}>
                  <Image
                    className={classes.stepIcon}
                    src={step.src}
                    width={step.width}
                    height={step.height}
                    alt={step.alt}
                    unoptimized
                    style={
                      {
                        '--icon-w': `${step.width}px`,
                        '--icon-h': `${step.height}px`,
                      } as CSSProperties
                    }
                  />
                </div>
                <p className={classes.stepText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className={classes.sketchWrap}>
        <Image
          className={classes.sketch}
          src={`${IMG}/research-sketch.png`}
          width={1436}
          height={781}
          alt="Early sketch of the alert screen on a phone, annotated with questions: specify if heating or cooling issue, what data do users understand and want to see, is this too overwhelming in a high stakes scenario, and what if we include more info about booking with a tech. Faded sketches of runtime charts, a house and an outdoor unit surround it."
          unoptimized
        />
      </div>

      <div className={classes.container}>
        <p className={classes.statsIntro}>
          These important statistics and facts influenced many of my design decisions...
        </p>
        <ul className={classes.stats}>
          {stats.map((item) => (
            <li key={item.stat} className={classes.card}>
              <div className={classes.cardIcon}>
                <Image
                  src={item.icon.src}
                  width={item.icon.width}
                  height={item.icon.height}
                  alt=""
                  unoptimized
                />
              </div>
              <div className={classes.cardText}>
                <div className={classes.cardHeading}>
                  <p className={classes.stat}>{item.stat}</p>
                  <h3 className={classes.cardTitle}>{item.title}</h3>
                </div>
                <p className={classes.cardBody}>{item.body}</p>
                <p className={classes.source}>
                  {item.sourcePrefix}{' '}
                  <a href={item.sourceHref} target="_blank" rel="noopener noreferrer">
                    {item.sourceLabel}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
