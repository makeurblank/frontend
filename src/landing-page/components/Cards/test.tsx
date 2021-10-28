import { render, screen, fireEvent } from '@testing-library/react';
import Cards from '.';

describe('Cards Component is', () => {
  const givenValues: string[] = ['card1', 'card2'];

  context('When click delete button', () => {
    const onClick: () => void = jest.fn();

    it('Should be calls onClick', () => {
      render(<Cards onClick={onClick} values={givenValues} />);

      givenValues.forEach((_, index: number) => {
        fireEvent.click(screen.getAllByRole('button')[index]);

        expect(onClick).toBeCalled();
      });
    });
  });

  it('Should renders given values to Card components', () => {
    render(<Cards values={givenValues} />);

    givenValues.forEach((value: string) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});
