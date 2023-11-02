const converter = (value: string, from: string, to: string): string => {
    const input = parseFloat(value);
    if (from === 'Celsius' && to === 'Fahrenheit') {
      return ((input * 9) / 5 + 32).toString();
    } else if (from === 'Celsius' && to === 'Kelvin') {
      return (input + 273.15).toString();
    } else if (from === 'Fahrenheit' && to === 'Celsius') {
      return (((input - 32) * 5) / 9).toString();
    } else if (from === 'Fahrenheit' && to === 'Kelvin') {
      return (((input - 32) * 5) / 9 + 273.15).toString();
    } else if (from === 'Kelvin' && to === 'Celsius') {
      return (input - 273.15).toString();
    } else if (from === 'Kelvin' && to === 'Fahrenheit') {
      return (((input - 273.15) * 9) / 5 + 32).toString();
    } else if (from === 'Meters' && to === 'Yards') {
      return (input * 1.09361).toString();
    } else if (from === 'Meters' && to === 'Feet') {
      return (input * 3.28084).toString();
    } else if (from === 'Yards' && to === 'Meters') {
      return (input / 1.09361).toString();
    } else if (from === 'Yards' && to === 'Feet') {
      return (input * 3).toString();
    } else if (from === 'Feet' && to === 'Meters') {
      return (input / 3.28084).toString();
    } else if (from === 'Feet' && to === 'Yards') {
      return (input / 3).toString();
    } else if (from === 'Kilograms' && to === 'Pounds') {
      return (input * 2.20462).toString();
    } else if (from === 'Kilograms' && to === 'Ounces') {
      return (input * 35.274).toString();
    } else if (from === 'Pounds' && to === 'Kilograms') {
      return (input / 2.20462).toString();
    } else if (from === 'Pounds' && to === 'Ounces') {
      return (input * 16).toString();
    } else if (from === 'Ounces' && to === 'Kilograms') {
      return (input / 35.274).toString();
    } else if (from === 'Ounces' && to === 'Pounds') {
      return (input / 16).toString();
    } else {
      return value;
    }
  };
  
  export default converter;
  