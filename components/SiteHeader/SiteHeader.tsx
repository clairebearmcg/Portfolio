import classes from './SiteHeader.module.css';

export function SiteHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.intro}>
        <p className={classes.name}>
          Claire <span className={classes.surname}>McGregor</span>
        </p>
        <p className={classes.tagline}>
          I aim to create things the world needs, not things it simply desires.
        </p>
      </div>
      <nav aria-label="Main" className={classes.nav}>
        <span className={classes.active} aria-current="page">
          UX
        </span>
        <span className={classes.link}>ME</span>
        <span className={classes.link}>CV</span>
      </nav>
    </header>
  );
}
