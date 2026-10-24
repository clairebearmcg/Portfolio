import { AdFirstDesigns } from '@/components/AnomalyDetection/AdFirstDesigns/AdFirstDesigns';
import { AdImprovements } from '@/components/AnomalyDetection/AdImprovements/AdImprovements';
import { AdIntro } from '@/components/AnomalyDetection/AdIntro/AdIntro';
import { AdOutro } from '@/components/AnomalyDetection/AdOutro/AdOutro';
import { AdResearch } from '@/components/AnomalyDetection/AdResearch/AdResearch';
import { AdUserTesting } from '@/components/AnomalyDetection/AdUserTesting/AdUserTesting';
import { CaseStudyShell } from '@/components/CaseStudyShell/CaseStudyShell';

export const metadata = {
  title: 'Anomaly Detection — Claire McGregor',
  description:
    'Case study: guiding Vivint customers through the stressful situation of a heating & cooling breakdown.',
};

// Sections run top to bottom in the order of the Figma frame; AdOutro includes the footer
export default function AnomalyDetectionPage() {
  return (
    <CaseStudyShell>
      <AdIntro />
      <AdResearch />
      <AdFirstDesigns />
      <AdUserTesting />
      <AdImprovements />
      <AdOutro />
    </CaseStudyShell>
  );
}
