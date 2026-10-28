import Image from 'next/image';
import classes from './CdIntro.module.css';

const IMG = '/case-studies/comfort-drift';

const SUMMARY = [
  {
    title: 'WHAT IS IT',
    text: 'A fault detection alert surfaced when a home’s temperature drifts opposite of what a set temperature called for.',
    quote: '“Your home warmed 3° while the AC was on from 12:43pm-4:15pm on Monday, June 15th”.',
  },
  {
    title: 'WHY IT MATTERS',
    text: 'This is typically an indicator of an early issue and can be compared very similarly to the Anomaly Detection feature, the only difference being that this alert is based on a delta in temperature rather than runtime and therefore has different data to show.',
  },
  {
    title: 'SNAPSHOT I’M SHOWING',
    text: 'How I worked through creating a flexible design that could nest different types of the same problem.',
  },
];

export function CdIntro() {
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Comfort Drift</h1>
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
        </div>

        <div className={classes.summary}>
          {SUMMARY.map(({ title, text, quote }) => (
            <section key={title} className={classes.block}>
              <h2 className={classes.kicker}>{title}</h2>
              <p className={classes.body}>{text}</p>
              {quote && <p className={classes.quote}>{quote}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
