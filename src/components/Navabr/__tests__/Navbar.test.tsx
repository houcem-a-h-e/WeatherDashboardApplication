import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  const mockSetCity = jest.fn();
  const mockSetUnit = jest.fn();
  const mockSetNumberOfDays = jest.fn();
  const mockFetchWeatherData = jest.fn();

  const defaultProps = {
    city: 'New York',
    setCity: mockSetCity,
    unit: 'celsius',
    setUnit: mockSetUnit,
    numberOfDays: 7,
    setNumberOfDays: mockSetNumberOfDays,
    fetchWeatherData: mockFetchWeatherData,
  };

  it('renders form elements with correct initial values and classes', () => {
    const { getByRole, getByText } = render(<Navbar {...defaultProps} />);
    const cityInput = getByRole('textbox') as HTMLInputElement;
    const unitSelect = getByRole('combobox') as HTMLSelectElement;
    const numberOfDaysInput = getByRole('spinbutton') as HTMLInputElement;
    const button = getByRole('button');

    expect(cityInput.value).toBe('New York');
    expect(unitSelect.value).toBe('celsius');
    expect(numberOfDaysInput.value).toBe('7');
    expect(cityInput.className).toBe('navbar-input');
    expect(unitSelect.className).toBe('custom-select navbar-input');
    expect(numberOfDaysInput.className).toBe('navbar-input');
    expect(button.textContent).toBe('Check');
  });

  it('calls setCity, setUnit, setNumberOfDays, and fetchWeatherData functions on form submission', () => {
    const { getByRole } = render(<Navbar {...defaultProps} />);
    const form = getByRole('form');

    fireEvent.submit(form);

    expect(mockSetCity).toHaveBeenCalledWith('New York');
    expect(mockSetUnit).toHaveBeenCalledWith('celsius');
    expect(mockSetNumberOfDays).toHaveBeenCalledWith(7);
    expect(mockFetchWeatherData).toHaveBeenCalledWith('New York', 'celsius', 7);
  });
});
