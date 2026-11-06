import Image from 'next/image';
import classes from './VoIntro.module.css';

const IMG = '/case-studies/vivint-onboarding';

const SUMMARY = [
  {
    title: 'WHAT IS IT',
    text: 'There is no existing introduction to the Vivint app after an install is completed (shocking right!?). Customers are forced to rely on the limited explanation from their technician and trial and error to learn how to navigate their system.',
  },
  {
    title: 'WHY IT MATTERS',
    text: 'Customers miss out on knowing how to maximize their system’s capabilities, retention rates drop, and Vivint looses referrals.',
  },
  {
    title: 'SNAPSHOT I’M SHOWING',
    text: 'Gaps I saw in a previous designer’s work on this project and ways I sought to improve it.',
  },
];

export function VoIntro() {
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Vivint Onboarding</h1>
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
