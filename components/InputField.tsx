"use client"
import { ChangeEvent } from 'react';

type InputFieldProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ value, onChange }: InputFieldProps) => {
  return <input type="number" value={value} onChange={onChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />;
};

export default InputField;
