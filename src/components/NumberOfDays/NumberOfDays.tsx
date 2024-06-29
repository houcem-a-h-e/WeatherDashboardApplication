import React from 'react';

type Props = {
  numberOfDays: number;
  setNumberOfDays: (numberOfDays: number) => void;
  inputClassName: string;
};

const NumberOfDays = ({ numberOfDays, setNumberOfDays, inputClassName }: Props) => {
  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfDays(parseInt(e.target.value) || 0);
  };

  return (
    <input
      type="number"
      value={numberOfDays}
      onChange={handleDaysChange}
      className={inputClassName}
    />
  );
};

export default NumberOfDays;
