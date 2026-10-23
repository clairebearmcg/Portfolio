import { render, screen } from '@/test-utils';
import { ProjectCard } from './ProjectCard';

const project = {
  slug: 'comfort-drift',
  title: 'Comfort Drift',
  description: 'Helping homeowners catch temperature issues.',
  image: '/projects/comfort-drift.png',
};

describe('ProjectCard', () => {
  it('renders its title, description and image', () => {
    render(<ProjectCard project={project} variant="featured" />);
    expect(screen.getByRole('heading', { name: 'Comfort Drift' })).toBeInTheDocument();
    expect(screen.getByText('Helping homeowners catch temperature issues.')).toBeInTheDocument();
    expect(screen.getByAltText('Comfort Drift')).toBeInTheDocument();
  });
});
