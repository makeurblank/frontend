import { render, screen, fireEvent } from '@testing-library/react';
import DeleteCardButton from '.';

describe('DeleteCardButton Component is', () => {
  context('When click button', () => {
    const onClick: () => void = jest.fn();

    it('Should be calls onClick', () => {
      render(<DeleteCardButton onClick={onClick} />);

      fireEvent.click(screen.getByRole('button'));

      expect(onClick).toBeCalled();
    });
  });
});
