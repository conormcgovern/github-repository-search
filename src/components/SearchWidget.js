import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { IconButton, InputBase, Paper } from '@mui/material';

function SearchWidget({ value, handleSubmit }) {
  const [searchTerm, setSearchTerm] = useState(value ? value : '');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    event.charCode === 13 && handleSubmit(searchTerm);
  };

  const handleSearchIconClick = () => {
    handleSubmit(searchTerm);
  };

  return (
    <Paper
      sx={{
        padding: '2px 2px',
        display: 'flex',
        alignItems: 'center',
        minWidth: '100%',
        border: '1px solid #DDDDDD',
      }}
      elevation={0}
    >
      <IconButton onClick={handleSearchIconClick}>
        <Search />
      </IconButton>
      <InputBase
        sx={{ padding: '3px 0 4px', minWidth: '100%' }}
        placeholder="Search GitHub Repositories"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Paper>
  );
}

export default SearchWidget;
