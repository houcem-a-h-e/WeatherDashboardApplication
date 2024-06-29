import React, { useState } from 'react';
import CityInput from '../CityInput/CityInput';
import TemperatureUnit from '../TemperatureUnit/TemperatureUnit';
import NumberOfDays from '../NumberOfDays/NumberOfDays';
import "./Navbar.css";

type Props = {
  city: string;
  setCity: (city: string) => void;
  unit: string;
  setUnit: (unit: string) => void;
  numberOfDays: number;
  setNumberOfDays: (numberOfDays: number) => void;
  fetchWeatherData: (city: string, unit: string, numberOfDays: number) => void;
};

const Navbar = ({ city, setCity, unit, setUnit, numberOfDays, setNumberOfDays, fetchWeatherData }: Props) => {
  const [localCity, setLocalCity] = useState(city);
  const [localUnit, setLocalUnit] = useState(unit);
  const [localNumberOfDays, setLocalNumberOfDays] = useState(numberOfDays);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(localCity);
    setUnit(localUnit);
    setNumberOfDays(localNumberOfDays);
    fetchWeatherData(localCity, localUnit, localNumberOfDays);
  };

  return (
    <form className="navbar" onSubmit={handleSubmit}>
      <CityInput city={localCity} setCity={setLocalCity} inputClassName="navbar-input" />
      <TemperatureUnit unit={localUnit} setUnit={setLocalUnit} inputClassName="navbar-input"  />
      <NumberOfDays numberOfDays={localNumberOfDays} setNumberOfDays={setLocalNumberOfDays} inputClassName="navbar-input" />
      <button type="submit" className="navbar-button">Check</button>
    </form>
  );
};

export default Navbar;
