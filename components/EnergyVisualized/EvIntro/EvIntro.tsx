import Image from 'next/image';
import classes from './EvIntro.module.css';

const IMG = '/case-studies/energy-visualized';

const SUMMARY = [
  {
    title: 'WHAT IS IT',
    text: 'An exploration of how to create an experience that balances simplifying, surfacing, and promoting action about useful energy insights in an enticing way to customers.',
  },
  {
    title: 'WHY IT MATTERS',
    text: 'Energy is something everyone uses, yet homeowners are often left in the dark about their use and impact. Whether it’s surfacing individual usage percentages, estimated bill costs, when energy savings events are likely to occur due to grid overload, translating kWh into an understandable metric, or simply comparing one customer’s use to a neighbor’s, no platform exists that provides this information in a coherent and engaging way. Time to change that!',
  },
  {
    title: 'SNAPSHOT I’M SHOWING',
    text: 'High fidelity UI explorations of the energy data Vivint has access to.',
  },
];

export function EvIntro() {
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Energy Visualized</h1>
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
