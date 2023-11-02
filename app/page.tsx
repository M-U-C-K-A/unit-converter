"use client"
import TemperatureConverter from '@/components/TempConv';
import WeightConverter from '@/components/WeightConv';
import DistanceConverter from '@/components/LenghtConv';

const units: string[] = [
  'Celsius',
  'Fahrenheit',
  'Kelvin',
  'Meters',
  'Yards',
  'Feet',
  'Kilograms',
  'Pounds',
  'Ounces',
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
        <TemperatureConverter />
        <WeightConverter />
        <DistanceConverter />
        </div>
  );
}
