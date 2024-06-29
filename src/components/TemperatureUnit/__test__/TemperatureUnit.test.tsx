import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TemperatureUnit from '../TemperatureUnit';

describe('TemperatureUnit component', () => {
  const mockSetUnit = jest.fn();
  const defaultProps = {
    unit: 'celsius',
    setUnit: mockSetUnit,
    inputClassName: 'temperature-unit-select',
  };

  it('renders select element with correct initial value and class', () => {
    const { getByRole } = render(<TemperatureUnit {...defaultProps} />);
    const selectElement = getByRole('combobox') as HTMLSelectElement;

    expect(selectElement.value).toBe('celsius');
    expect(selectElement.className).toBe('custom-select temperature-unit-select');
  });

  it('calls setUnit function when unit selection changes', () => {
    const { getByRole } = render(<TemperatureUnit {...defaultProps} />);
    const selectElement = getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: 'fahrenheit' } });

    expect(mockSetUnit).toHaveBeenCalledWith('fahrenheit');
  });
});
