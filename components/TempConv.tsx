"use client"
import InputField from './InputField';
import SelectUnit from './SelectUnit';
import useConversion from './useConversion';

const TemperatureConverter = () => {
  const {
    inputValue,
    outputValue,
    inputUnit,
    outputUnit,
    handleInputChange,
    handleInputUnitChange,
    handleOutputUnitChange,
  } = useConversion('Celsius', 'Fahrenheit');

  return (
    <>
      <h1 className="text-gray-200 w-full text-2xl">Temperature</h1>
      <div className="join mb-8  w-4/5">
        <InputField 
        value={inputValue} 
        onChange={handleInputChange} />
        <SelectUnit
          value={inputUnit}
          options={['Celsius', 'Fahrenheit', 'Kelvin']}
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
            className="input join-item"
            placeholder="Result"
          />
        <SelectUnit
          value={outputUnit}
          options={['Celsius', 'Fahrenheit', 'Kelvin']}
          onChange={handleOutputUnitChange}
        />
      </div>
    </>
  );
};

export default TemperatureConverter;
