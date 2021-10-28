import { render, screen, fireEvent } from '@testing-library/react';
import CreateCardButton from '.';

describe('CreateCardButton Component is', () => {
  context('When click button', () => {
    const onClick: () => void = jest.fn();

    it('Should be calls onClick', () => {
      render(<CreateCardButton onClick={onClick} />);

      fireEvent.click(screen.getByRole('button'));

      expect(onClick).toBeCalled();
    });
  });
});
