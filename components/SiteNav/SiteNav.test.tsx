import { fireEvent, render, screen } from '@/test-utils';
import { SiteNav } from './SiteNav';

describe('SiteNav', () => {
  it('moves the active item to the one clicked', () => {
    render(<SiteNav />);
    expect(screen.getByRole('button', { name: 'UX' })).toHaveAttribute('aria-current', 'page');

    fireEvent.click(screen.getByRole('button', { name: 'CV' }));
    expect(screen.getByRole('button', { name: 'CV' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: 'UX' })).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('navigation').style.getPropertyValue('--active')).toBe('2');
  });

  it('on other pages starts with nothing active and links UX home', () => {
    render(<SiteNav homeHref="/" />);
    expect(screen.getByRole('link', { name: 'UX' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('navigation')).toHaveAttribute('data-empty');
    expect(screen.getByRole('button', { name: 'ME' })).not.toHaveAttribute('aria-current');
  });
});
