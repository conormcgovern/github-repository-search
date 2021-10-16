import React, { useState } from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';

function LanguageSelect({ value, onChange, languages }) {
  const [language, setLanguage] = useState(
    languages.includes(value) ? value : 'any'
  );

  const handleChange = (event) => {
    const value = event.target.value;
    setLanguage(value);
    onChange(value);
  };

  return (
    <FormControl fullWidth size="small">
      <Select
        labelId="language-select-label"
        id="language-select"
        value={language}
        onChange={handleChange}
      >
        <MenuItem value="any">Any</MenuItem>
        {languages.map((language) => (
          <MenuItem key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LanguageSelect;
