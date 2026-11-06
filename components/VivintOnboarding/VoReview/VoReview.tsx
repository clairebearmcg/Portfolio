import Image from 'next/image';
import classes from './VoReview.module.css';

const IMG = '/case-studies/vivint-onboarding';
// Same prototype phone as the Filter Smart Alerts page
const PHONE = '/case-studies/filter-smart-alerts/outcome-prototype-phone.png';

// Two columns of gaps, left then right, as in the Figma frame
const GAPS = [
  [
    {
      title: 'Doesn’t orient the user',
      text: 'There’s no introduction into the app, users are just thrown in there. Additionally, once a user finishes a task, there’s no indication of where it relates to their homepage or where they can find it again. We could use tooltips but I think there’s a better approach.',
    },
    {
      title: 'Makes the user work',
      text: 'Education and orientation of the app relies entirely on the user right now. That’s not right! They shouldn’t be obligated to finish this list on their own in order to be set up for success.',
    },
    {
      title: 'Copy is misleading',
      text: '“Set up your camera” actually leads to just the camera view, you’re not setting anything up. “Security system overview” is so technical compared to something like “how to arm/disarm your system”.',
    },
  ],
  [
    {
      title: 'Options are not flexible',
      text: '“Add a user to your system” shouldn’t be a required task if you live alone. We need to make this checklist flexible for all users.',
    },
    {
      title: 'Lacks an element of fun',
      text: 'We have some really cool features in the Vivint app (like the personalized HomeView feature)! Why not focus on including some of those in set up and showing the unique capabilities of Vivint to users?',
    },
    {
      title: 'Tapping into delight',
      text: 'I think that showing the “Claim reward” at the end of the checklist is less effective as an incentive for users to complete it. I think users suspect it’s something lame from the start. Instead, let’s surprise them with a free trial of a feature or some $ credit to their account after they’ve completed the set up. I think they will look at it as something that they were “graciously given” instead of “worked to earn”.',
    },
  ],
];

function Prototype({ className }: { className?: string }) {
  return (
    <figure className={[classes.prototype, className].filter(Boolean).join(' ')}>
      <Image className={classes.phone} src={PHONE} alt="" width={300} height={613} unoptimized />
      {/* Placeholder from the Figma design, waiting on the prototype */}
      <figcaption className={classes.placeholder}>ADD PROTOTYPE</figcaption>
    </figure>
  );
}

function SectionHeader({ id, title, note }: { id: string; title: string; note: string }) {
  return (
    <header className={classes.sectionHeader}>
      <h2 id={id} className={classes.sectionTitle}>
        {title}
      </h2>
      <p className={classes.note}>{note}</p>
    </header>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className={classes.callout}>
      <h2 className={classes.label}>{label}</h2>
      <div className={classes.calloutText}>{children}</div>
    </section>
  );
}

export function VoReview() {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* The MVP: someone else's design and the gaps in it */}
        <section aria-labelledby="vo-mvp-title">
          <SectionHeader id="vo-mvp-title" title="The MVP" note="not my work" />
          <div className={classes.row}>
            <Prototype className={classes.mvpPhone} />
            <div>
              <h3 className={classes.verdict}>
                <span className={`${classes.badge} ${classes.badgeGap}`} aria-hidden="true">
                  <Image src={`${IMG}/gaps-x.svg`} alt="" width={13} height={12} unoptimized />
                </span>
                Gaps
              </h3>
              <div className={classes.gaps}>
                {GAPS.map((column, i) => (
                  <ul key={i} className={classes.gapColumn}>
                    {column.map((gap) => (
                      <li key={gap.title} className={classes.gap}>
                        <h4 className={classes.label}>{gap.title}</h4>
                        <p className={classes.body}>{gap.text}</p>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className={classes.divider} />

        {/* 1.0: my proposal */}
        <section aria-labelledby="vo-proposal-title">
          <SectionHeader id="vo-proposal-title" title="1.0" note="my work" />
          <div className={classes.row}>
            <Prototype />
            <div className={classes.proposal}>
              <h3 className={classes.verdict}>
                <span className={`${classes.badge} ${classes.badgeCheck}`} aria-hidden="true">
                  <Image
                    className={classes.check}
                    src={`${IMG}/proposal-check.svg`}
                    alt=""
                    width={12}
                    height={13}
                    unoptimized
                  />
                </span>
                My proposal
              </h3>
              <div className={classes.proposalText}>
                <h4 className={classes.label}>Making it mandatory (in a good way)</h4>
                <p className={classes.body}>
                  I’m typically against making things mandatory in UX but I think this is a use case
                  that could benefit greatly from a constrained flow.
                </p>
                <p className={classes.body}>
                  Based on observation, users are less likely to finish set up if it’s optional. By
                  making it more of an introductory experience instead of an attached checklist
                  after we drop them into the app, we are able to:
                </p>
                <ol className={`${classes.body} ${classes.steps}`}>
                  <li>1) Orient the user with the app.</li>
                  <li>
                    2) Create excitement, congratulations and tap into the feeling of
                    accomplishment.
                  </li>
                  <li>
                    3) Make learning about the app/set up easy and personalized so customers are set
                    up for success right from the start.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <div className={classes.callouts}>
          <Callout label="In all honesty">
            <p className={classes.body}>
              What I think this project needs is to start from the beginning. There has been no
              research done about the general experiences customers have had with their install. We
              don’t even know the key problems to solve with the experience yet and that’s why it’s
              currently not as effective.
            </p>
            <p className={classes.body}>
              Second, I think we need to A/B test a direction to take Arming/Disarming education.
              This seems to be the feature that causes the most confusion with users and eventually
              leads to them opting out. If we can better target what is making it confusing and
              provide a more engaging, guiding experience, I think this will greatly improve
              customer confusion and retention.
            </p>
          </Callout>
          <Callout label="Why was my proposal a hot take?">
            <p className={classes.body}>
              The MVP was designed by a Lead Designer. It took some courage to challenge a
              “superior” designer to me and I was unsure of how my feedback and proposals would be
              taken. This project taught me a good lesson in trusting your skills and instincts as a
              designer, no matter your level.
            </p>
          </Callout>
        </div>
      </div>
    </div>
  );
}
