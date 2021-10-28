import { render, screen, fireEvent } from '@testing-library/react';

import type { CardProps } from '.';

import Cards from '.';

describe('Cards Component is', () => {
  const givenValues: CardProps[] = [
    { id: 1, value: 'card1' },
    { id: 2, value: 'card2' },
  ];

  context('When click delete button', () => {
    const onClick: () => void = jest.fn();

    it('Should be calls onClick', () => {
      render(<Cards onClick={onClick} values={givenValues} />);

      givenValues.forEach((_, index) => {
        fireEvent.click(screen.getAllByRole('button')[index]);

        expect(onClick).toBeCalled();
      });
    });
  });

  it('Should renders given values to Card components', () => {
    render(<Cards onClick={jest.fn()} values={givenValues} />);

    givenValues.forEach(({ value }) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});
