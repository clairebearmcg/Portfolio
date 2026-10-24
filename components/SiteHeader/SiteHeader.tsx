import classes from './SiteHeader.module.css';

export function SiteHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.intro}>
        <p className={classes.name}>
          {/* A plain link (not next/link) so clicking does a full page load of the homepage */}
          <a href="/" className={classes.home}>
            Claire <span className={classes.surname}>McGregor</span>
          </a>
        </p>
        <p className={classes.tagline}>
          I aim to create things the world needs, not things it simply desires.
        </p>
      </div>
    </header>
  );
}
