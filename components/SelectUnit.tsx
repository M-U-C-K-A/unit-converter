"use client"
import { ChangeEvent } from 'react';

type SelectUnitProps = {
  value: string;
  options: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectUnit = ({ value, options, onChange }: SelectUnitProps) => {
  return (
    <select value={value} onChange={onChange} className="w-1/2 p-2 border border-gray-300 rounded">
      {options.map((unit) => (
        <option key={unit} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  );
};

export default SelectUnit;
