import React, { useState } from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';

const options = [
  { value: 'best-match', display: 'Best Match' },
  { value: 'stars', display: 'Most Stars' },
];

function SortSelect({ value, onChange, label = '' }) {
  const getOption = (value) => {
    return options.find((option) => option.value === value) || options[0]; // 'Best Match' is the default
  };

  const [selectedOption, setSelectedOption] = useState(getOption(value));

  const handleChange = (event) => {
    const option = getOption(event.target.value);
    setSelectedOption(option);
    onChange(option.value);
  };

  return (
    <FormControl fullWidth size="small">
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={selectedOption.value}
        onChange={handleChange}
        renderValue={() => `${label}${selectedOption.display}`}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.display}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SortSelect;
