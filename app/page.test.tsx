import { render, screen } from '@/test-utils';
import { projects } from '../data/projects';
import HomePage from './page';

describe('HomePage', () => {
  it('renders every project title', () => {
    render(<HomePage />);
    for (const project of projects) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    }
    expect(projects).toHaveLength(7);
  });
});
