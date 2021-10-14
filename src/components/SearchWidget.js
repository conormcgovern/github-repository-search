import React from 'react';
import { Search } from '@mui/icons-material';
import { IconButton, InputBase, Paper } from '@mui/material';

function SearchWidget() {
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
      <IconButton>
        <Search />
      </IconButton>
      <InputBase
        placeholder="Search"
        sx={{ padding: '3px 0 4px', minWidth: '100%' }}
      />
    </Paper>
  );
}

export default SearchWidget;
