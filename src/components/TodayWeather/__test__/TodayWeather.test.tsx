import React from 'react';
import { render } from '@testing-library/react';
import TodayWeather from '../TodayWeather';


describe('TodayWeather component', () => {
  const defaultProps = {
    city: 'New York',
    unit: 'celsius',
  };

  it('renders loading state initially', () => {
    const { getByText } = render(<TodayWeather {...defaultProps} />);
    const loadingElement = getByText('Loading...');

    expect(loadingElement).toBeInTheDocument();
  });

  // Add more tests based on different states (loading, error, data present)
});
