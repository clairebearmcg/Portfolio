import { CaseStudyShell } from '@/components/CaseStudyShell/CaseStudyShell';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import { TaIntro } from '@/components/ThermostatAlerts/TaIntro/TaIntro';
import { TaScreens } from '@/components/ThermostatAlerts/TaScreens/TaScreens';
import classes from './page.module.css';

export const metadata = {
  title: 'Thermostat Alerts — Claire McGregor',
  description:
    'Case study: a pattern for thermostat notifications, from critical alerts to simple recommendations.',
};

// Sections run top to bottom in the order of the Figma frame (24556:4134)
export default function ThermostatAlertsPage() {
  return (
    <CaseStudyShell>
      <TaIntro />
      {/* One grey band behind the screens and the footer */}
      <div className={classes.band}>
        <TaScreens />
        <SiteFooter tone="dark" />
      </div>
    </CaseStudyShell>
  );
}
