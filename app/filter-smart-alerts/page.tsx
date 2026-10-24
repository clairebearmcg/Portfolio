import { CaseStudyShell } from '@/components/CaseStudyShell/CaseStudyShell';
import { FsaDesigns } from '@/components/FilterSmartAlerts/FsaDesigns/FsaDesigns';
import { FsaIntro } from '@/components/FilterSmartAlerts/FsaIntro/FsaIntro';
import { FsaOutcome } from '@/components/FilterSmartAlerts/FsaOutcome/FsaOutcome';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import classes from './page.module.css';

export const metadata = {
  title: 'Filter Smart Alerts — Claire McGregor',
  description:
    'Case study: bringing education and ease into filter alerts triggered by actual system usage, not just time passed.',
};

// Sections run top to bottom in the order of the Figma frame (24510:2264)
export default function FilterSmartAlertsPage() {
  return (
    <CaseStudyShell>
      <FsaIntro />
      {/* One dark band behind both lower sections and the footer, so its gradient runs unbroken */}
      <div className={classes.band}>
        <FsaDesigns />
        <FsaOutcome />
        <SiteFooter tone="dark" />
      </div>
    </CaseStudyShell>
  );
}
