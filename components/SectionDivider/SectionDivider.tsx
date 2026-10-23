import classes from './SectionDivider.module.css';

interface SectionDividerProps {
  title: string;
  subtitle: string;
}

export function SectionDivider({ title, subtitle }: SectionDividerProps) {
  return (
    <div className={classes.root}>
      <hr className={classes.rule} />
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.subtitle}>{subtitle}</p>
    </div>
  );
}
