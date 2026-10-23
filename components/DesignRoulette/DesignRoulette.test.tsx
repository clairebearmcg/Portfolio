import { fireEvent, render, screen } from '@/test-utils';
import { DesignRoulette } from './DesignRoulette';

describe('DesignRoulette', () => {
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
