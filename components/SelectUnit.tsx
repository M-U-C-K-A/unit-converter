"use client"
import { ChangeEvent } from 'react';

type SelectUnitProps = {
  value: string;
  options: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectUnit = ({ value, options, onChange }: SelectUnitProps) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((unit) => (
        <option key={unit} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  );
};

export default SelectUnit;
