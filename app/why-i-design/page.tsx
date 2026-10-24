import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import { WhyIDesign } from '@/components/WhyIDesign/WhyIDesign';

export const metadata = {
  title: 'Why I design — Claire McGregor',
  description: 'The story behind why Claire McGregor designs.',
};

export default function WhyIDesignPage() {
  return (
    <>
      <main>
        <WhyIDesign />
      </main>
      <SiteFooter backToTop={false} />
    </>
  );
}
