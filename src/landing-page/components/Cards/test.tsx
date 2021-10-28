import { render, screen } from '@testing-library/react';
import Cards from '.';

describe('Cards Component is', () => {
  const givenValues: string[] = ['card1', 'card2'];

  it('Should renders given values to Card components', () => {
    render(<Cards values={givenValues} />);

    givenValues.forEach((value: string) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});
