import { render, screen, fireEvent } from '@testing-library/react';

import TodoInput from './index';

describe('TodoInput Component is', () => {
  context('When value is changed', () => {
    const givenValue: string = 'todo';
    const onChange: () => void = jest.fn();

    it('Must be call onChange', () => {
      render(<TodoInput
        value=""
        onChange={onChange}
      />);

      fireEvent.change(
        screen.getByRole('textbox'),
        { target: { value: givenValue } },
      );

      expect(onChange).toBeCalled();
    });
  });
});
