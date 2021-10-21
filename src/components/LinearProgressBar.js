import React from 'react';
import { Box, LinearProgress } from '@mui/material';

function LinearProgressBar({ show = false }) {
  return (
    <>
      {show && (
        <Box sx={{ width: '100%', top: 0, left: 0, position: 'absolute' }}>
          <LinearProgress />
        </Box>
      )}
    </>
  );
}

export default LinearProgressBar;
