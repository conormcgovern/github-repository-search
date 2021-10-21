import React from 'react';
import { Box, Alert, AlertTitle } from '@mui/material';

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

  if (open) {
    return (
      <Alert severity="error" onClose={handleClose}>
        {renderErrorContent(error)}
      </Alert>
    );
  }
  return <></>;
}

export default ErrorBanner;
