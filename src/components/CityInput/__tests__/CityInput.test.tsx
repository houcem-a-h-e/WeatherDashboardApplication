import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityInput from '../CityInput'; // Adjust the import path based on your project structure

describe('CityInput component', () => {
  const mockSetCity = jest.fn();
  const defaultProps = {
    city: 'New York',
    setCity: mockSetCity,
    inputClassName: 'city-input',
  };

  it('renders input element with correct initial value and class', () => {
    const { getByRole } = render(<CityInput {...defaultProps} />);
    const inputElement = getByRole('textbox') as HTMLInputElement;

    expect(inputElement.value).toBe('New York');
    expect(inputElement.className).toBe('city-input');
  });

  it('calls setCity function when input value changes', () => {
    const { getByRole } = render(<CityInput {...defaultProps} />);
    const inputElement = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'London' } });

    expect(mockSetCity).toHaveBeenCalledWith('London');
  });
});
