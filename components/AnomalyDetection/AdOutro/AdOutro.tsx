import Image from 'next/image';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import classes from './AdOutro.module.css';

const SCREENS = [
  {
    src: '/case-studies/anomaly-detection/outro-lock-screen.png',
    alt: 'Lock screen notification: AC is running too long, 8 hours longer than expected to hit your set temp',
  },
  {
    src: '/case-studies/anomaly-detection/outro-alert-detail.png',
    alt: 'Alert detail screen comparing normal and current AC runtime, with a button to connect with a local technician',
  },
  {
    src: '/case-studies/anomaly-detection/outro-service-pricing.png',
    alt: 'Service sheet showing service starting from $99 with options to request service online or by phone',
  },
  {
    src: '/case-studies/anomaly-detection/outro-things-to-try.png',
    alt: 'Things to try sheet listing steps: confirm airflow and basic settings, check your air filter, reset your HVAC',
  },
  {
    src: '/case-studies/anomaly-detection/outro-energy-insights.png',
    alt: 'Energy insights screen with an AC running longer than expected banner and a weekly heating and cooling chart',
  },
  {
    src: '/case-studies/anomaly-detection/outro-feedback.png',
    alt: 'Feedback form asking the customer to describe their recent HVAC issue and how long they waited to contact a technician',
  },
];

// Phone image size from the Figma frame (source PNGs are 3x)
const PHONE_WIDTH = 300;
const PHONE_HEIGHT = 613;

export function AdOutro() {
  return (
    <section className={classes.band} aria-labelledby="ad-outro-title">
      <div className={classes.inner}>
        <header className={classes.header}>
          <h2 id="ad-outro-title" className={classes.title}>
            <span className={classes.eyebrow}>Vivint’s</span>
            <span className={classes.name}>Anomaly Detection</span>
          </h2>
          <p className={classes.label}>Experience</p>
        </header>

        <ul className={classes.phones}>
          {SCREENS.map((screen) => (
            <li key={screen.src} className={classes.phone}>
              <Image
                className={classes.image}
                src={screen.src}
                alt={screen.alt}
                width={PHONE_WIDTH}
                height={PHONE_HEIGHT}
                unoptimized
              />
            </li>
          ))}
        </ul>
      </div>
      {/* The footer sits on the navy band, as in the design */}
      <SiteFooter tone="dark" />
    </section>
  );
}
