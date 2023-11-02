import { useState, ChangeEvent } from 'react';
import InputField from './InputField';
import SelectUnit from './SelectUnit';
import converter from './converter';

const WeightConverter = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');
  const [inputUnit, setInputUnit] = useState<string>('Kilograms');
  const [outputUnit, setOutputUnit] = useState<string>('Pounds');

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
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl mb-6">Weight Converter</h1>
      <InputField value={inputValue} onChange={handleInputChange} />
      <div className="flex justify-between mb-4">
        <SelectUnit value={inputUnit} options={['Kilograms', 'Pounds', 'Ounces']} onChange={handleInputUnitChange} />
        <span className="text-2xl">=</span>
        <input
          type="text"
          value={outputValue}
          readOnly
          className="w-1/2 p-2 border border-gray-300 rounded"
        />
        <SelectUnit value={outputUnit} options={['Kilograms', 'Pounds', 'Ounces']} onChange={handleOutputUnitChange} />
      </div>
    </div>
  );
};

export default WeightConverter;