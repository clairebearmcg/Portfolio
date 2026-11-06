import { CaseStudyShell } from '@/components/CaseStudyShell/CaseStudyShell';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import { VoIntro } from '@/components/VivintOnboarding/VoIntro/VoIntro';
import { VoReview } from '@/components/VivintOnboarding/VoReview/VoReview';
import classes from './page.module.css';

export const metadata = {
  title: 'Vivint Onboarding — Claire McGregor',
  description:
    'Case study: challenging an existing onboarding design on how well it solves the user problem.',
};

// Sections run top to bottom in the order of the Figma frame (24563:5060)
export default function VivintOnboardingPage() {
  return (
    <CaseStudyShell>
      <VoIntro />
      {/* One dark band behind the review and the footer, so its gradient runs unbroken */}
      <div className={classes.band}>
        <VoReview />
        <SiteFooter tone="dark" />
      </div>
    </CaseStudyShell>
  );
}
