import React, { useState } from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';

const options = [
  { value: 'javascript', display: 'JavaScript' },
  { value: 'typescript', display: 'TypeScript' },
  { value: 'html', display: 'HTML' },
  { value: 'css', display: 'CSS' },
  { value: 'java', display: 'Java' },
];

function LanguageSelect({ value, onChange }) {
  const getOption = (value) => {
    return options.find((option) => option.value === value) || options[0]; // 'JavaScript is the default
  };
  const [language, setLanguage] = useState(getOption(value));

  const handleChange = (event) => {
    const option = getOption(event.target.value);
    setLanguage(option);
    onChange(option.value);
  };

  return (
    <FormControl fullWidth size="small">
      <Select
        labelId="language-select-label"
        id="language-select"
        value={language.value}
        onChange={handleChange}
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

export default LanguageSelect;
