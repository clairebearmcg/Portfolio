import { fireEvent, render, screen } from '@/test-utils';
import { DesignRoulette, SLICE_ANGLE, SLICES } from './DesignRoulette';

// The slice under the pointer (top of the wheel) for a given CSS rotation
function landedSlice(transform: string) {
  const rotation = parseFloat(transform.replace('rotate(', ''));
  const wheelAngle = (((360 - rotation) % 360) + 360) % 360;
  return SLICES[Math.floor(wheelAngle / SLICE_ANGLE)];
}

describe('DesignRoulette', () => {
  afterEach(() => jest.restoreAllMocks());

  it('never lands on the house', () => {
    render(<DesignRoulette />);
    const button = screen.getByRole('button', { name: 'Spin' });
    const wheel = screen.getByTestId('roulette-wheel');
    const landed = new Set<string>();

    // Random spins, then the extreme random values that would land on slice edges
    const randoms = [...Array.from({ length: 400 }, () => Math.random()), 0, 0.999999];
    for (const value of randoms) {
      jest.spyOn(Math, 'random').mockReturnValue(value);
      fireEvent.click(button);
      fireEvent.transitionEnd(wheel);
      landed.add(landedSlice(wheel.style.transform));
    }

    expect(landed.has('home')).toBe(false);
    expect(landed.size).toBe(SLICES.length - 1);
  });

  it('disables Spin while the wheel turns', () => {
    render(<DesignRoulette />);
    const button = screen.getByRole('button', { name: 'Spin' });

    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(screen.getByTestId('roulette-wheel').style.transform).not.toBe('rotate(0deg)');

    fireEvent.transitionEnd(screen.getByTestId('roulette-wheel'));
    expect(button).toBeEnabled();
  });
});
