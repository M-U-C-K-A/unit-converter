"use client"
import { useState, ChangeEvent } from 'react';
import InputField from './InputField';
import SelectUnit from './SelectUnit';
import converter from './converter';

const TemperatureConverter = () => {
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
    <div className="join mb-8">
      <div>
        <InputField value={inputValue} onChange={handleInputChange} placeholder="Enter temperature" />
      </div>
      <SelectUnit
        value={inputUnit}
        options={['Celsius', 'Fahrenheit', 'Kelvin']}
        onChange={handleInputUnitChange}
        className="join-item"
      />
      <span className="indicator join-item">=</span>
      <input
        type="text"
        value={outputValue}
        readOnly
        className="input input-bordered join-item"
        placeholder="Result"
      />
      <SelectUnit
        value={outputUnit}
        options={['Celsius', 'Fahrenheit', 'Kelvin']}
        onChange={handleOutputUnitChange}
        className="select select-bordered join-item"
      />
    </div>
  );
};

export default TemperatureConverter;
