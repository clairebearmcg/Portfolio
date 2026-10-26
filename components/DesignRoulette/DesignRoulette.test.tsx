import { projects } from '@/data/projects';
import { fireEvent, render, screen } from '@/test-utils';
import { DesignRoulette, SLICE_ANGLE, SLICES } from './DesignRoulette';

// The slice under the pointer (top of the wheel) for a given CSS rotation
function landedSlice(transform: string) {
  const rotation = parseFloat(transform.replace('rotate(', ''));
  const wheelAngle = (((360 - rotation) % 360) + 360) % 360;
  return SLICES[Math.floor(wheelAngle / SLICE_ANGLE)];
}

function spinAndLand(wheel: HTMLElement) {
  fireEvent.click(screen.getByRole('button', { name: /^Spin( again)?$/ }));
  fireEvent.transitionEnd(wheel);
}

describe('DesignRoulette', () => {
  afterEach(() => jest.restoreAllMocks());

  it('disables Spin while the wheel turns', () => {
    render(<DesignRoulette />);
    const button = screen.getByRole('button', { name: 'Spin' });

    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(screen.getByTestId('roulette-wheel').style.transform).not.toBe('rotate(0deg)');
  });

  it('shows the landed project with Spin again and View project', () => {
    // 0 picks the first non-home slice: Comfort Drift
    jest.spyOn(Math, 'random').mockReturnValue(0);
    render(<DesignRoulette />);
    spinAndLand(screen.getByTestId('roulette-wheel'));

    const comfortDrift = projects.find((p) => p.slug === 'comfort-drift')!;
    expect(screen.getByRole('heading', { name: comfortDrift.title })).toBeInTheDocument();
    expect(screen.getByText(comfortDrift.rouletteBlurb)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Spin again' })).toBeEnabled();
    // Projects with a case study link to it; the rest link to their homepage card
    expect(screen.getByRole('link', { name: 'View project' })).toHaveAttribute(
      'href',
      comfortDrift.href ?? '#comfort-drift'
    );
  });

  it('never lands on the house', () => {
    render(<DesignRoulette />);
    const wheel = screen.getByTestId('roulette-wheel');
    const landed = new Set<string>();

    // Random spins, then the extreme random values
    const randoms = [...Array.from({ length: 400 }, () => Math.random()), 0, 0.999999];
    for (const value of randoms) {
      jest.spyOn(Math, 'random').mockReturnValue(value);
      spinAndLand(wheel);
      const slug = landedSlice(wheel.style.transform);
      landed.add(slug);
      // The heading always names the slice under the pointer
      expect(screen.getByRole('heading').textContent).toBe(
        projects.find((p) => p.slug === slug)?.title
      );
    }

    expect(landed.has('home')).toBe(false);
    expect(landed.size).toBe(SLICES.length - 1);
  });
});
