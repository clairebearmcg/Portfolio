import { AboutMe } from '@/components/AboutMe/AboutMe';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';

export const metadata = {
  title: 'About me — Claire McGregor',
  description: 'A bit about Claire McGregor beyond the design work.',
};

export default function AboutMePage() {
  return (
    <>
      <main>
        <AboutMe />
      </main>
      <SiteFooter backToTop={false} />
    </>
  );
}
