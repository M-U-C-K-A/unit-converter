"use client"
import InputField from './InputField';
import SelectUnit from './SelectUnit';
import useConversion from './useConversion';

const LengthConverter = () => {
    const {
        inputValue,
        outputValue,
        inputUnit,
        outputUnit,
        handleInputChange,
        handleInputUnitChange,
        handleOutputUnitChange,
    } = useConversion('Meters', 'Yards');

    return (
        <div className="join mb-8">
            <div>
                <InputField value={inputValue} onChange={handleInputChange} placeholder="Enter distance" />
                <span className="text-gray-500">Distance</span>
            </div>
            <SelectUnit
                value={inputUnit}
                options={['Meters', 'Yards', 'Feet']}
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
                options={['Meters', 'Yards', 'Feet']}
                onChange={handleOutputUnitChange}
                className="select select-bordered join-item"
            />
        </div>
    );
};

export default LengthConverter;
