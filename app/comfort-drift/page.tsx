import { CaseStudyShell } from '@/components/CaseStudyShell/CaseStudyShell';
import { CdIntro } from '@/components/ComfortDrift/CdIntro/CdIntro';
import { CdProcess } from '@/components/ComfortDrift/CdProcess/CdProcess';
import { CdVerdict } from '@/components/ComfortDrift/CdVerdict/CdVerdict';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import classes from './page.module.css';

export const metadata = {
  title: 'Comfort Drift — Claire McGregor',
  description:
    'Case study: helping homeowners catch temperature issues and inefficiencies before they snowball.',
};

// Sections run top to bottom in the order of the Figma frame (24519:3733)
export default function ComfortDriftPage() {
  return (
    <CaseStudyShell>
      <CdIntro />
      {/* One dark band behind everything after the intro, including the footer */}
      <div className={classes.band}>
        <CdProcess />
        <CdVerdict />
        <SiteFooter tone="dark" />
      </div>
    </CaseStudyShell>
  );
}
