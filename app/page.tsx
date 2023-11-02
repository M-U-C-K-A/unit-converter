import { useState, ChangeEvent } from 'react';

const units: string[] = ['Celsius', 'Fahrenheit', 'Kelvin'];

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');
  const [inputUnit, setInputUnit] = useState<string>('Celsius');
  const [outputUnit, setOutputUnit] = useState<string>('Fahrenheit');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    convert(e.target.value);
  };

  const handleInputUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputUnit(e.target.value);
    convert(inputValue, e.target.value, outputUnit);
  };

  const handleOutputUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOutputUnit(e.target.value);
    convert(inputValue, inputUnit, e.target.value);
  };

  const convert = (value: string, from: string = inputUnit, to: string = outputUnit) => {
    if (from === 'Celsius' && to === 'Fahrenheit') {
      setOutputValue(((parseFloat(value) * 9) / 5 + 32).toString());
    } else if (from === 'Celsius' && to === 'Kelvin') {
      setOutputValue((parseFloat(value) + 273.15).toString());
    } else if (from === 'Fahrenheit' && to === 'Celsius') {
      setOutputValue((((parseFloat(value) - 32) * 5) / 9).toString());
    } else if (from === 'Fahrenheit' && to === 'Kelvin') {
      setOutputValue((((parseFloat(value) - 32) * 5) / 9 + 273.15).toString());
    } else if (from === 'Kelvin' && to === 'Celsius') {
      setOutputValue((parseFloat(value) - 273.15).toString());
    } else if (from === 'Kelvin' && to === 'Fahrenheit') {
      setOutputValue((((parseFloat(value) - 273.15) * 9) / 5 + 32).toString());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl mb-6">Unit Converter</h1>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <div className="flex justify-between mb-4">
            <select
              value={inputUnit}
              onChange={handleInputUnitChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <span className="text-2xl">=</span>
            <input
              type="text"
              value={outputValue}
              readOnly
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <select
              value={outputUnit}
              onChange={handleOutputUnitChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
