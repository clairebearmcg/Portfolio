import { fireEvent, render, screen } from '@/test-utils';
import { activeIndexFor, SiteNav } from './SiteNav';

let mockPathname = '/';
jest.mock('next/navigation', () => ({ usePathname: () => mockPathname }));

const nav = () => screen.getByRole('navigation');

describe('SiteNav', () => {
  it('links each item to its page', () => {
    render(<SiteNav />);
    expect(screen.getByRole('link', { name: 'UX' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'ME' })).toHaveAttribute('href', '/me');
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute('href', '/cv');
  });

  it('puts the pill on the current section', () => {
    mockPathname = '/cv';
    render(<SiteNav />);
    expect(nav().style.getPropertyValue('--active')).toBe('2');
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute('aria-current', 'page');
  });

  it('shows no pill on case study pages', () => {
    mockPathname = '/anomaly-detection';
    render(<SiteNav />);
    expect(nav()).toHaveAttribute('data-empty');
    expect(screen.getByRole('link', { name: 'UX' })).not.toHaveAttribute('aria-current');
  });

  it('moves the pill as soon as an item is clicked', () => {
    mockPathname = '/';
    render(<SiteNav />);
    fireEvent.click(screen.getByRole('link', { name: 'ME' }));
    expect(nav().style.getPropertyValue('--active')).toBe('1');
  });

  it('keeps ME active on the Why I design page', () => {
    expect(activeIndexFor('/why-i-design')).toBe(1);
    expect(activeIndexFor('/filter-smart-alerts')).toBeNull();
  });
});
