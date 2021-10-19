import React from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const sortOptions = [
  { value: 'best match', display: 'Best Match' },
  { value: 'stars', display: 'Most Stars' },
];

function SortSelect({ value, label = '' }) {
  const selectedOption =
    sortOptions.find((option) => option.value === value) || sortOptions[0]; // 'Best Match' is the default
  const location = useLocation();

  const getLinkDestination = (sort) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('sort', sort);
    return `${location.pathname}?${searchParams}`;
  };

  return (
    <FormControl fullWidth size="small">
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={selectedOption.value}
        renderValue={() => `${label}${selectedOption.display}`}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Link
              to={getLinkDestination(option.value)}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {option.display}
            </Link>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SortSelect;
