import React from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function LanguageSelect({ value, languages }) {
  const language = languages.includes(value) ? value : 'any';
  const location = useLocation();

  const getLinkDestination = (language) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('language', language);
    return `${location.pathname}?${searchParams}`;
  };

  return (
    <FormControl fullWidth size="small">
      <Select
        labelId="language-select-label"
        id="language-select"
        value={language}
      >
        <MenuItem value="any">Any</MenuItem>
        {languages.map((language) => (
          <MenuItem key={language} value={language}>
            <Link
              to={getLinkDestination(language)}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {language}
            </Link>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LanguageSelect;
