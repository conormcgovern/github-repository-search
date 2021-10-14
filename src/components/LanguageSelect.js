import React from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';

function LanguageSelect() {
  const [language, setLanguage] = React.useState('JavaScript');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl fullWidth size="small">
      <Select
        labelId="language-select-label"
        id="language-select"
        value={language}
        onChange={handleChange}
      >
        <MenuItem value="JavaScript">JavaScript</MenuItem>
        <MenuItem value="TypeScript">TypeScript</MenuItem>
        <MenuItem value="HTML">HTML</MenuItem>
        <MenuItem value="CSS">CSS</MenuItem>
        <MenuItem value="Java">Java</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageSelect;
