import Image from 'next/image';
import classes from './EvscIntro.module.css';

const IMG = '/case-studies/ev-smart-charging';

const SUMMARY = [
  {
    title: 'WHAT IS IT',
    text: 'An NRG (parent company/energy provider) commissioned project to design an experience for users to opt into a preset scheduled charge during 1AM-1PM to minimize strain on the grid and maximize their savings.',
  },
  {
    title: 'WHY IT MATTERS',
    text: 'Homeowners are missing out on savings and adding excess strain on the grid by charging during high-demand hours.',
  },
  {
    title: 'SNAPSHOT I’M SHOWING',
    text: 'Learnings and implementations of key user test findings.',
  },
];

export function EvscIntro() {
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>EV Smart Charging</h1>
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
