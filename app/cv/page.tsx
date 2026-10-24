import { Resume } from '@/components/Resume/Resume';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';

export const metadata = {
  title: 'CV — Claire McGregor',
  description: 'Experience, education, skills and accolades of UX designer Claire McGregor.',
};

export default function CvPage() {
  return (
    <>
      <main>
        <Resume />
      </main>
      <SiteFooter backToTop={false} />
    </>
  );
}
