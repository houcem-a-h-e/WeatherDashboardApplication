import React from 'react';

type Props = {
  city: string;
  setCity: (city: string) => void;
  inputClassName: string;
};

const CityInput = ({ city, setCity, inputClassName }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <input
      type="text"
      value={city}
      onChange={handleInputChange}
      className={inputClassName}
    />
  );
};

export default CityInput;
