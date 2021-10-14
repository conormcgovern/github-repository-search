import React, { useState } from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';

function SortSelect({ renderValue }) {
  const [sort, setSort] = useState('Best Match');

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <FormControl fullWidth size="small">
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={sort}
        onChange={handleChange}
        renderValue={renderValue}
      >
        <MenuItem value="Best Match">Best Match</MenuItem>
        <MenuItem value="Stars">Stars</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortSelect;
