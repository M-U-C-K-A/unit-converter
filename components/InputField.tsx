"use client"
import { ChangeEvent } from 'react';

type InputFieldProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ value, onChange }: InputFieldProps) => {
  return <input 
  type="number" 
  value={value} 
  onChange={onChange}
  className='' />;
};

export default InputField;
