import {useState} from 'react';

const useToggle = ({defaultValue}) => {
  const [value, setValue] = useState(defaultValue);
  const toggleValue = val => {
    setValue(currentValue => (typeof val === 'boolean' ? val : !currentValue));
  };
  return [value, toggleValue];
};

export default useToggle;
