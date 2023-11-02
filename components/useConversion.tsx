"use client"
import { useState, ChangeEvent } from 'react';
import converter from './converter';

const useConversion = (initialInputUnit: string, initialOutputUnit: string) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');
  const [inputUnit, setInputUnit] = useState<string>(initialInputUnit);
  const [outputUnit, setOutputUnit] = useState<string>(initialOutputUnit);

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

  const handleConversion = () => {
    setOutputValue(converter(inputValue, inputUnit, outputUnit));
  };

  return {
    inputValue,
    outputValue,
    inputUnit,
    outputUnit,
    handleInputChange,
    handleInputUnitChange,
    handleOutputUnitChange,
    handleConversion,
  };
};

export default useConversion;
