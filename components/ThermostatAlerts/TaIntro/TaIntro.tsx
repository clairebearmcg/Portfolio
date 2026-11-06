import Image from 'next/image';
import classes from './TaIntro.module.css';

const IMG = '/case-studies/thermostat-alerts';

const SUMMARY = [
  {
    title: 'WHAT IS IT',
    text: 'Expanding notification reach beyond the mobile app in an effort to increase the visibility of alerts from critical actions to simple recommendations.',
  },
  {
    title: 'WHY IT MATTERS',
    text: 'The thermostat is a shared interface in the home. Surfacing notifications on it in addition to the mobile app provides a higher chance of visibility and accompanying action.',
  },
  {
    title: 'SNAPSHOT I’M SHOWING',
    text: 'A breadth of explorations',
  },
];

export function TaIntro() {
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Thermostat Alerts</h1>
          <p className={classes.tag}>
            <Image
              className={classes.tagIcon}
              src={`${IMG}/vivint-app.svg`}
              alt=""
              width={40}
              height={40}
              unoptimized
            />
            <span className={classes.tagText}>A Vivint project</span>
          </p>
        </div>

        <div className={classes.summary}>
          {SUMMARY.map(({ title, text }) => (
            <section key={title} className={classes.block}>
              <h2 className={classes.kicker}>{title}</h2>
              <p className={classes.body}>{text}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
