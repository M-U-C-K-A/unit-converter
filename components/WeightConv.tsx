"use client"
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
    <>

      <h1 className="text-gray-200 w-full text-2xl">Poids</h1>
      <div className="join mb-8 w-4/5">
        <InputField
          value={inputValue}
          onChange={handleInputChange} />
        <SelectUnit
          value={inputUnit}
          options={['Kilograms', 'Pounds', 'Ounces']}
          onChange={handleInputUnitChange}
        />
        <button className="btn btn-circle btn-ghost join-item" onClick={() => {
        }}>
          <span>&#8644;</span>
        </button>
          <input
            type="text"
            value={outputValue}
            readOnly
            className="input input-bordered join-item"
            placeholder="Result"
          />
        <SelectUnit
          value={outputUnit}
          options={['Kilograms', 'Pounds', 'Ounces']}
          onChange={handleOutputUnitChange}
        />
      </div>
    </>
  );
};

export default WeightConverter;
