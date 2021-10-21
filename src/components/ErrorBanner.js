import React from 'react';
import { Box, Alert, AlertTitle, Snackbar } from '@mui/material';

function ErrorBanner({ open = false, error, handleClose }) {
  const renderErrorContent = (error) => {
    if (error?.response?.headers?.['x-ratelimit-remaining'] === '0') {
      return (
        <Box>
          <AlertTitle>GitHub API rate limit exceeded.</AlertTitle>
          Please wait 10 seconds before trying again.
        </Box>
      );
    }
    return <AlertTitle>Something went wrong.</AlertTitle>;
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={12000}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert severity="error" onClose={handleClose}>
        {renderErrorContent(error)}
      </Alert>
    </Snackbar>
  );
}

export default ErrorBanner;
