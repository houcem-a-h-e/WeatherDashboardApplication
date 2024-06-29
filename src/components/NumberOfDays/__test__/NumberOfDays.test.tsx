import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberOfDays from '../NumberOfDays';

describe('NumberOfDays component', () => {
  const mockSetNumberOfDays = jest.fn();
  const defaultProps = {
    numberOfDays: 7,
    setNumberOfDays: mockSetNumberOfDays,
    inputClassName: 'number-of-days-input',
  };

  it('renders input element with correct initial value and class', () => {
    const { getByRole } = render(<NumberOfDays {...defaultProps} />);
    const inputElement = getByRole('spinbutton') as HTMLInputElement;

    expect(inputElement.value).toBe('7');
    expect(inputElement.className).toBe('number-of-days-input');
  });

  it('calls setNumberOfDays function when input value changes', () => {
    const { getByRole } = render(<NumberOfDays {...defaultProps} />);
    const inputElement = getByRole('spinbutton') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: '5' } });

    expect(mockSetNumberOfDays).toHaveBeenCalledWith(5);
  });
});
