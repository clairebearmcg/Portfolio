import Image from 'next/image';
import classes from './EvscTesting.module.css';

const DETAILS = [
  { label: 'GROUP', value: '30 participants' },
  { label: 'TYPE', value: 'Unmoderated usability test' },
  { label: 'WHERE', value: 'Dscout' },
];

const GOALS = [
  'Are users able to enroll in scheduled charging',
  'Are users abl to understand the concept of the Reliant X Vivint Schedule & Save product',
  'Are users able to easily override schedule or change now',
  'Identify what is working well and what is not working well in the current Schedule & Save experience',
];

export function EvscTesting() {
  return (
    <section className={classes.root} aria-labelledby="evsc-testing-title">
      <div className={classes.container}>
        <div className={classes.cards}>
          <div className={`${classes.card} ${classes.titleCard}`}>
            <Image
              className={classes.icon}
              src="/case-studies/ev-smart-charging/testing-icon.png"
              alt=""
              width={1024}
              height={1024}
              unoptimized
            />
            <div className={classes.titleText}>
              <h2 id="evsc-testing-title" className={classes.title}>
                User Testing
              </h2>
              <p className={classes.subtitle}>Getting feedback from real users.</p>
            </div>
          </div>

          <dl className={`${classes.card} ${classes.details}`}>
            {DETAILS.map(({ label, value }) => (
              <div key={label} className={classes.detail}>
                <dt className={classes.label}>{label}</dt>
                <dd className={classes.value}>{value}</dd>
              </div>
            ))}
            <div className={classes.detail}>
              <dt className={classes.label}>GOALS</dt>
              <dd className={classes.value}>
                <ul className={classes.goals}>
                  {GOALS.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
