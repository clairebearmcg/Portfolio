import { CaseStudyShell } from '@/components/CaseStudyShell/CaseStudyShell';
import { EvscCompare } from '@/components/EvSmartCharging/EvscCompare/EvscCompare';
import { EvscIntro } from '@/components/EvSmartCharging/EvscIntro/EvscIntro';
import { EvscTesting } from '@/components/EvSmartCharging/EvscTesting/EvscTesting';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import classes from './page.module.css';

export const metadata = {
  title: 'EV Smart Charging — Claire McGregor',
  description:
    'Case study: turning user testing findings into a clearer EV scheduled charging experience.',
};

// Sections run top to bottom in the order of the Figma frame (24551:268)
export default function EvSmartChargingPage() {
  return (
    <CaseStudyShell>
      <EvscIntro />
      {/* One dark band behind everything after the intro, including the footer */}
      <div className={classes.band}>
        <EvscTesting />
        <EvscCompare />
        <SiteFooter tone="dark" />
      </div>
    </CaseStudyShell>
  );
}
