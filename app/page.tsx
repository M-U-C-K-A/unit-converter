"use client"
import { useState, ChangeEvent } from 'react';
import InputField from '@/components/InputField';
import SelectUnit from '@/components/SelectUnit';
import converter from '@/components/converter';

const units: string[] = [
  'Celsius',
  'Fahrenheit',
  'Kelvin',
  'Meters',
  'Yards',
  'Feet',
  'Kilograms',
  'Pounds',
  'Ounces',
];

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');
  const [inputUnit, setInputUnit] = useState<string>('Celsius');
  const [outputUnit, setOutputUnit] = useState<string>('Fahrenheit');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setOutputValue(converter(e.target.value, inputUnit, outputUnit));
  };

  const handleInputUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputUnit(e.target.value);
    setOutputValue(converter(inputValue, e.target.value, outputUnit));
  };

  const handleOutputUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOutputUnit(e.target.value);
    setOutputValue(converter(inputValue, inputUnit, e.target.value));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl mb-6">Unit Converter</h1>
          <InputField value={inputValue} onChange={handleInputChange} />
          <div className="flex justify-between mb-4">
            <SelectUnit value={inputUnit} options={units} onChange={handleInputUnitChange} />
            <span className="text-2xl">=</span>
            <input
              type="text"
              value={outputValue}
              readOnly
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <SelectUnit value={outputUnit} options={units} onChange={handleOutputUnitChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
