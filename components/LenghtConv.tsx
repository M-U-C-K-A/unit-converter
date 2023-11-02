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
        <>
<h1 className="text-gray-200 w-full text-2xl">Distance</h1>
            <div className="join mb-8  w-4/5">
                <InputField
                    value={inputValue}
                    onChange={handleInputChange} />
                <SelectUnit
                    value={inputUnit}
                    options={['Meters', 'Yards', 'Feet']}
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
                    options={['Meters', 'Yards', 'Feet']}
                    onChange={handleOutputUnitChange}
                />
            </div>
        </>
    );
};

export default LengthConverter;
