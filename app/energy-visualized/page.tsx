import { CaseStudyShell } from '@/components/CaseStudyShell/CaseStudyShell';
import { EvFeatures } from '@/components/EnergyVisualized/EvFeatures/EvFeatures';
import { EvIntro } from '@/components/EnergyVisualized/EvIntro/EvIntro';
import { EvOverview } from '@/components/EnergyVisualized/EvOverview/EvOverview';
import { EvPlayground } from '@/components/EnergyVisualized/EvPlayground/EvPlayground';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import classes from './page.module.css';

export const metadata = {
  title: 'Energy Visualized — Claire McGregor',
  description:
    'Case study: rethinking how people experience energy data through creative, intuitive visualizations.',
};

// Sections run top to bottom in the order of the Figma frame (24519:3410)
export default function EnergyVisualizedPage() {
  return (
    <CaseStudyShell>
      <EvIntro />
      {/* One dark band behind everything after the intro, including the footer */}
      <div className={classes.band}>
        <EvOverview />
        <EvPlayground />
        <EvFeatures />
        <SiteFooter tone="dark" />
      </div>
    </CaseStudyShell>
  );
}
