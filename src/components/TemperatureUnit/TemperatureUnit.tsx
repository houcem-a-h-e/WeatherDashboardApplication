import React from 'react';

import "./TemperatureUnit.css"
type Props = {
  unit: string;
  setUnit: (unit: string) => void;
  inputClassName: string;
};

const TemperatureUnit = ({ unit, setUnit, inputClassName }: Props) => {
  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value);
  };

  return (
    <select
  value={unit}
  onChange={handleUnitChange}
  className={`custom-select ${inputClassName}`} 
>
  <option className="dropdown-item" value="celsius">°C</option>
  <option className="dropdown-item" value="fahrenheit">°F</option>
</select>

  );
};

export default TemperatureUnit;
