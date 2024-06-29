import React from 'react';
import { render } from '@testing-library/react';
import ForeCastWeather from '../ForeCastWeather';
import '@testing-library/jest-dom';

describe('ForeCastWeather component', () => {
  const defaultProps = {
    weatherData: null,
    loading: true,
    error: null,
  };

  it('renders loading state initially', () => {
    const { getByText } = render(<ForeCastWeather {...defaultProps} />);
    const loadingElement = getByText('Loading...');

    expect(loadingElement).toBeInTheDocument();
  });

  // Add more tests based on different states (loading, error, data present)
});
