"use client"
import { useState, ChangeEvent } from 'react';
import InputField from './InputField';
import SelectUnit from './SelectUnit';
import useConversion from './useConversion';


const WeightConverter = () => {
  const {
    inputValue,
    outputValue,
    inputUnit,
    outputUnit,
    handleInputChange,
    handleInputUnitChange,
    handleOutputUnitChange,
  } = useConversion('Kilograms', 'Pounds');

  return (
    <div className="join mb-8">
      <div>
        <InputField value={inputValue} onChange={handleInputChange} placeholder="Enter poids" />
        <span className="text-gray-500">Poids</span>
      </div>
      <SelectUnit
        value={inputUnit}
        options={['Kilograms', 'Pounds', 'Ounces']}
        onChange={handleInputUnitChange}
        className="join-item"
      />
      <button className="btn btn-circle btn-ghost join-item" onClick={() => {
        const temp = inputUnit;
        setInputUnit(outputUnit);
        setOutputUnit(temp);
        setOutputValue(converter(inputValue, outputUnit, inputUnit));
      }}>
        <span>&#8644;</span>
      </button>
      <div>
        <input
          type="text"
          value={outputValue}
          readOnly
          className="input input-bordered join-item"
          placeholder="Result"
        />
        <span className="text-gray-500">Converted</span>
      </div>
      <SelectUnit
        value={outputUnit}
        options={['Kilograms', 'Pounds', 'Ounces']}
        onChange={handleOutputUnitChange}
        className="select select-bordered join-item"
      />
    </div>
  );
};

export default WeightConverter;
